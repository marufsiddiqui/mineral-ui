/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import Avatar from '../../../../../Avatar';
import IconCloud from 'mineral-ui-icons/IconCloud';
import DemoLayout from '../components/DemoLayout';

export default {
  id: 'sizes',
  title: 'Sizes',
  description: `Avatar is available in the following sizes.`,
  scope: { Avatar, DemoLayout, IconCloud },
  source: `
    <DemoLayout>
      <Avatar size="small">
        <img src="/images/215x210_avatar.png" alt="Sam" />
      </Avatar>
      <Avatar size="small" title="Sam">S</Avatar>
      <Avatar size="small">
        <IconCloud title="cloud" />
      </Avatar>
      <br />
      <Avatar size="medium">
        <img src="/images/215x210_avatar.png" alt="Melissa" />
      </Avatar>
      <Avatar size="medium" title="Melissa">M</Avatar>
      <Avatar size="medium">
        <IconCloud title="cloud" />
      </Avatar>
      <br />
      <Avatar>
        <img src="/images/215x210_avatar.png" alt="Lawrence" />
      </Avatar>
      <Avatar title="Lawrence">L</Avatar>
      <Avatar>
        <IconCloud title="cloud" />
      </Avatar>
      <br />
      <Avatar size="jumbo">
        <img src="/images/215x210_avatar.png" alt="Jennifer" />
      </Avatar>
      <Avatar size="jumbo" title="Jennifer">J</Avatar>
      <Avatar size="jumbo">
        <IconCloud title="cloud" />
      </Avatar>
      <br />
    </DemoLayout>`
};
