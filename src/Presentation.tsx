import React, { useState } from 'react';
import {
  Deck, Heading, Image, List, ListItem, Slide, Text,
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

const images = {
  cover: 'cover.jpg',
};

require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  },
);

async function askForPermission() {
  await Notification.requestPermission();
}

function showNotification(title: string, options?: NotificationOptions) {
  new Notification(title, options);
}

export default function Presentation() {
  const [permission, setPermission] = useState(Notification.permission);
  const [title, setTitle] = useState('');
  const askForPermissionButtonLabels: Record<NotificationPermission, string> = {
    granted: 'NOTIFICATIONS ENABLED!',
    default: 'ASK FOR PERMISSION',
    denied: 'NOTIFICATIONS DISABLED!',
  };
  const handleAskForPermission = async () => {
    const permissionResult = await askForPermission();

    setPermission(permissionResult);
  };

  return (
    <Deck
      theme={theme}
      transition={['zoom', 'slide']}
      transitionDuration={1000}
    >
      <Slide bgColor="primary">
        <Heading caps fit lineHeight={1} size={1} textColor="secondary">
          Jak w powiadomienia?
        </Heading>
        <Image src={images.cover} width="100%" />
        <Text bold fit margin="10px 0 0" textColor="tertiary">
          Czyli z czym się je powiadomienia WebPush
        </Text>
      </Slide>
      <Slide bgColor="tertiary" textColor="tertiary" transition={['fade']}>
        <Heading caps size={1} textColor="secondary">
          What is Web Push?
        </Heading>
      </Slide>
      <Slide bgColor="black" textColor="quaternary" transition={['slide']}>
        <Heading caps size={1}>
          Is it safe?
        </Heading>
      </Slide>
      <Slide bgColor="tertiary" textColor="tertiary" transition={['zoom']}>
        <Heading caps size={1} textColor="secondary">
          How it works?
        </Heading>
      </Slide>
      <Slide bgColor="black" textColor="quaternary" transition={['spin']}>
        <Heading caps size={1}>
          Who supports it?
        </Heading>
      </Slide>
      <Slide bgColor="tertiary" textColor="tertiary" transition={['spin', 'slide']}>
        <Heading caps size={1} textColor="secondary">
          Is it free?
        </Heading>
      </Slide>
      <Slide bgColor="black" textColor="quaternary" transition={['fade', 'zoom']}>
        <Heading caps size={1}>
          Wanna see it in action?
        </Heading>
      </Slide>
      <Slide bgColor="tertiary" textColor="tertiary" transition={['zoom', 'spin']}>
        <Heading caps size={1} textColor="secondary">
          How to enable notifications?
        </Heading>
        <button onClick={handleAskForPermission} type="button">
          {askForPermissionButtonLabels[permission]}
        </button>
        {permission === 'denied' && (
          <Text>
            Change notifications permission in browser
          </Text>
        )}
      </Slide>
      <Slide bgColor="black" textColor="quaternary" transition={['fade', 'slide', 'zoom']}>
        <Heading caps size={1}>
          Simplest notification is title only
        </Heading>
        <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="enter title" />
        <button
          type="button"
          onClick={() => {
            showNotification(title);
          }}
        >
SEND

        </button>
      </Slide>
      <Slide bgColor="tertiary" textColor="tertiary" transition={['slide', 'spin']}>
        <Heading caps size={1} textColor="secondary">
          Notification body and icon
        </Heading>
        <input placeholder="enter body" />
        <select>
          <option>Pick icon</option>
          <option value="1">Rick & Morty</option>
          <option value="2">Family Guy</option>
          <option value="2">Bojack Horseman</option>
        </select>
        <button type="button">SEND</button>
      </Slide>
      <Slide bgColor="black" textColor="quaternary" transition={['zoom', 'fade', 'spin']}>
        <Heading caps size={1}>
          Wee can define actions too!
        </Heading>
        <select>
          <option>Pick first action</option>
          <option value="1">Rick & Morty</option>
          <option value="2">Family Guy</option>
          <option value="2">Bojack Horseman</option>
        </select>
        <select>
          <option>Pick second action</option>
          <option value="1">Rick & Morty</option>
          <option value="2">Family Guy</option>
          <option value="2">Bojack Horseman</option>
        </select>
        <button type="button">SEND</button>
      </Slide>
      <Slide bgColor="black" textColor="quaternary" transition={['zoom', 'fade', 'spin', 'slide']}>
        <Heading caps size={1}>
          Want more? Try my Web Push Generator!
        </Heading>
        <a href="https://web-push-generator.herokuapp.com/">Try now!</a>
      </Slide>
      <Slide bgColor="black" textColor="quaternary" transition={['zoom', 'spin', 'slide']}>
        <Heading caps size={1}>
          Questions?
        </Heading>
      </Slide>
      <Slide bgColor="primary" textColor="tertiary" transition={['fade']}>
        <Heading caps size={3} textColor="secondary">
          Useful links
        </Heading>
        <List>
          <ListItem>
            <a href="https://notifications.spec.whatwg.org/">Notifications API Living Standard</a>
          </ListItem>
          <ListItem>
            <a href="https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API">
Mozzila Notification Api &
              Support

            </a>
          </ListItem>
          <ListItem>
            <a href="https://web-push-generator.herokuapp.com/">Web Push Generator</a>
          </ListItem>
          <ListItem>
            <a href="https://github.com/G3F4/web-push-generator">Web Push Generator repo</a>
          </ListItem>
        </List>
      </Slide>
      <Slide bgColor="tertiary" textColor="tertiary" transition={['fade']}>
        <Heading caps size={1} textColor="secondary">
          Thank You!
        </Heading>
      </Slide>
      {/* <Slide bgColor="tertiary" transition={['fade']}> */}
      {/*  <Heading caps size={6} textColor="primary"> */}
      {/*    Typography */}
      {/*  </Heading> */}
      {/*  <Heading size={1} textColor="secondary"> */}
      {/*    Heading 1 */}
      {/*  </Heading> */}
      {/*  <Heading size={2} textColor="secondary"> */}
      {/*    Heading 2 */}
      {/*  </Heading> */}
      {/*  <Heading size={3} textColor="secondary"> */}
      {/*    Heading 3 */}
      {/*  </Heading> */}
      {/*  <Heading size={4} textColor="secondary"> */}
      {/*    Heading 4 */}
      {/*  </Heading> */}
      {/*  <Heading size={5} textColor="secondary"> */}
      {/*    Heading 5 */}
      {/*  </Heading> */}
      {/*  <Text */}
      {/*    textColor="secondary" */}
      {/*  > */}
      {/*    Standard text */}
      {/*  </Text> */}
      {/* </Slide> */}
      {/* <Slide bgColor="primary" textColor="tertiary" transition={['fade']}> */}
      {/*  <Heading caps size={6} textColor="secondary"> */}
      {/*    Standard List */}
      {/*  </Heading> */}
      {/*  <List> */}
      {/*    <ListItem bulletStyle="star">Item 1</ListItem> */}
      {/*    <ListItem bulletStyle="cross">Item 2</ListItem> */}
      {/*    <ListItem>Item 3</ListItem> */}
      {/*    <ListItem>Item 4</ListItem> */}
      {/*  </List> */}
      {/* </Slide> */}
      {/* <Slide bgColor="secondary" textColor="primary" transition={['fade']}> */}
      {/*  <BlockQuote> */}
      {/*    <Quote>Example Quote</Quote> */}
      {/*    <Cite margin="10px 0 0 30px">Author</Cite> */}
      {/*  </BlockQuote> */}
      {/* </Slide> */}
      {/* <Slide> */}
      {/*  <Image src={images.gif} width={500} /> */}
      {/*  <Notes>gifs work too</Notes> */}
      {/* </Slide> */}
    </Deck>
  );
}
