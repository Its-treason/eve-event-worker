import Logger from '../Util/Logger';
import { Guild } from 'discord.js';
import { injectable } from 'tsyringe';
import EventHandler from './EventHandler';

@injectable()
export default class GuildCreateEventHandler implements EventHandler {
  constructor(
    private logger: Logger,
  ) {}

  getNameEventName(): string {
    return 'guildCreate';
  }

  public async execute(guild: Guild): Promise<void> {
    this.logger.info('Joined guild', {
      serverName: guild.name,
      serverId: guild.id,
    });
  }
}
