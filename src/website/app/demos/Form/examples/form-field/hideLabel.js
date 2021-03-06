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
import TextInput from '../../../../../../TextInput';
import FormField from '../../../../../../Form/FormField';
import DemoLayout from '../../components/DemoLayout';

export default {
  id: 'hide-label',
  title: 'Visually Hidden Label',
  description: `If the purpose of a FormField is obvious from context and adding
a label would negatively affect the design, as in the example below, you can use
\`hideLabel\` to visually hide the label while retaining accessibility.`,
  scope: { DemoLayout, FormField, TextInput },
  source: `
    <DemoLayout>
      <FormField
        input={TextInput}
        label="Address"
        placeholder="1234 Main St" />
      <FormField
        input={TextInput}
        label="Address Line 2"
        placeholder="Apt 101"
        hideLabel />
    </DemoLayout>
  `
};
