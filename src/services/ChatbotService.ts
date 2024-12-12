import { ExperienceLevel, ChatbotResponse } from '../types';
import { 
  getWelcomeMessage, 
  getLevelQuestion, 
  getLevelOptions, 
  getLevelResponseMessage,
  getClosingMessage 
} from '../utils/messageUtils';
import { getProductsByLevel, formatProductDisplay } from '../utils/productUtils';

export class ChatbotService {
  private currentState: 'welcome' | 'askingLevel' | 'showingProducts' = 'welcome';
  private userLevel?: ExperienceLevel;

  public start(): ChatbotResponse {
    this.currentState = 'welcome';
    return {
      message: getWelcomeMessage()
    };
  }

  public askLevel(): ChatbotResponse {
    this.currentState = 'askingLevel';
    return {
      message: getLevelQuestion(),
      options: getLevelOptions()
    };
  }

  public processLevelResponse(response: string): ChatbotResponse {
    let level: ExperienceLevel;
    
    if (response.includes('iniciante')) {
      level = 'beginner';
    } else if (response.includes('experiência')) {
      level = 'intermediate';
    } else {
      level = 'professional';
    }

    this.userLevel = level;
    this.currentState = 'showingProducts';

    const products = getProductsByLevel(level);
    
    return {
      message: getLevelResponseMessage(level),
      products: products
    };
  }

  public getClosing(): ChatbotResponse {
    return {
      message: getClosingMessage()
    };
  }
}