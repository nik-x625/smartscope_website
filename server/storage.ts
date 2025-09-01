import { type User, type InsertUser, type Contact, type InsertContact, type Newsletter, type InsertNewsletter, type ChatMessage, type InsertChatMessage } from "@shared/schema";
import { randomUUID } from "crypto";
import * as fs from "fs";
import * as path from "path";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  createNewsletter(newsletter: InsertNewsletter): Promise<Newsletter>;
  createChatMessage(chatMessage: InsertChatMessage): Promise<ChatMessage>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contacts: Map<string, Contact>;
  private newsletters: Map<string, Newsletter>;
  private chatMessages: Map<string, ChatMessage>;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.newsletters = new Map();
    this.chatMessages = new Map();
    
    // Ensure directories exist
    this.ensureDirectoriesExist();
  }

  private ensureDirectoriesExist() {
    const newsletterDir = "/opt";
    const chatbotDir = "/opt/chatbot_website";
    
    try {
      if (!fs.existsSync(newsletterDir)) {
        fs.mkdirSync(newsletterDir, { recursive: true });
      }
      if (!fs.existsSync(chatbotDir)) {
        fs.mkdirSync(chatbotDir, { recursive: true });
      }
    } catch (error) {
      console.warn("Directory creation failed:", error);
    }
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact, 
      id,
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async createNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    const id = randomUUID();
    const newsletter: Newsletter = { 
      ...insertNewsletter, 
      id,
      createdAt: new Date()
    };
    this.newsletters.set(id, newsletter);
    
    // Save to file system as requested
    try {
      const filePath = "/opt/newsletter_addresses";
      const data = `${newsletter.email},${newsletter.createdAt.toISOString()}\n`;
      fs.appendFileSync(filePath, data);
    } catch (error) {
      console.warn("Failed to write newsletter to file:", error);
    }
    
    return newsletter;
  }

  async createChatMessage(insertChatMessage: InsertChatMessage): Promise<ChatMessage> {
    const id = randomUUID();
    const chatMessage: ChatMessage = { 
      ...insertChatMessage, 
      id,
      createdAt: new Date()
    };
    this.chatMessages.set(id, chatMessage);
    
    // Save to file system as requested
    try {
      const filePath = `/opt/chatbot_website/message_${id}.json`;
      const data = JSON.stringify({
        ...chatMessage,
        createdAt: chatMessage.createdAt.toISOString()
      }, null, 2);
      fs.writeFileSync(filePath, data);
    } catch (error) {
      console.warn("Failed to write chat message to file:", error);
    }
    
    return chatMessage;
  }
}

export const storage = new MemStorage();
