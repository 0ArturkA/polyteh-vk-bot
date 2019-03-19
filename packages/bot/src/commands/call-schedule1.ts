import { merge } from 'image-glue';
import { MessageContext } from 'vk-io';

import { Command } from '../interfaces/command';
import { getRawImage } from '../utils/requests';

const handler = async (context: MessageContext) => {
  // Get image
  const [imgBufferTuesday, imgBufferOther] = await Promise.all([
    getRawImage(
      'http://simfpolyteh.ru/wp-content/themes/politeh/image/Korpus_1_2.png',
    ),
    getRawImage(
      'http://simfpolyteh.ru/wp-content/themes/politeh/image/Korpus_1_1.png',
    ),
  ]);

  // Combine images
  const combinedImg = await merge([imgBufferOther, imgBufferTuesday]);

  // Send message
  context.sendPhoto(combinedImg);
};

const command: Command = {
  conditions: ['/cs1', '/call1'],
  handler,
};

export default command;