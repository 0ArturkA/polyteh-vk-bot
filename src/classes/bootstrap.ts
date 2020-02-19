import VK from 'vk-io';
import { CommandHandler } from './command-handler';

export class Bootstrap {
  private readonly vk: VK;
  private readonly commandHandler: CommandHandler;
  
  constructor() {
    this.vk = new VK({
      token: process.env.VK_TOKEN,
    });
    this.commandHandler = new CommandHandler(this.vk);
  }
  
  public boot(): void {
    this.commandHandler.loadAndHandle();
    this.vk.updates.startPolling();
    console.log('Bot started');
  }
}