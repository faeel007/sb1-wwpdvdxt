import { ChatbotService } from './chatbotService.js';

export class ChatSession {
  constructor() {
    this.chatbot = new ChatbotService();
    this.started = false;
    this.complete = false;
  }

  hasStarted() {
    return this.started;
  }

  isComplete() {
    return this.complete;
  }

  start() {
    this.started = true;
    return this.chatbot.start();
  }

  askLevel() {
    return this.chatbot.askLevel();
  }

  processLevelResponse(message) {
    const response = this.chatbot.processLevelResponse(message);
    if (response.products) {
      this.complete = true;
    }
    return response;
  }

  getClosing() {
    return this.chatbot.getClosing();
  }
}