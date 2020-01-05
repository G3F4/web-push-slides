/* eslint-disable no-undef */
import React, { useState } from 'react';
import {
  Code, Deck, Heading, Image, List, ListItem, Slide, Text,
} from 'spectacle';
// eslint-disable-next-line import/no-unresolved
import createTheme from 'spectacle/lib/themes/default';

const images = {
  cover: 'cover.jpg',
  whatIsWebPush: 'what-is-web-push2.gif',
  permissionPrompt: 'permission-prompt.png',
  isItFree: 'is-it-free.png',
  isItSafe: 'security.svg',
  action: 'action.png',
  howItWorks: 'how-it-works.svg',
  askForPermission: 'ask-for-permission.svg',
  askForPermission1: 'ask-for-permission1.svg',
  askForPermission2: 'ask-for-permission2.svg',
  askForPermission3: 'ask-for-permission3.svg',
  askForPermission4: 'ask-for-permission4.svg',
  curiosity: 'curiosity.png',
  server: 'server.svg',
  sendMessage: 'send-message.svg',
  sendNotification1: 'send-notification1.svg',
  sendNotification2: 'send-notification2.svg',
  sendNotification3: 'send-notification3.svg',
  sendNotification4: 'send-notification4.svg',
  sendNotification5: 'send-notification5.svg',
  heart: 'heart.png',
  questions: 'questions.svg',
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
  return Notification.requestPermission();
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
      transitionDuration={1000}
    >
      <Slide bgColor="primary" transition={['fade']}>
        <Heading caps fit lineHeight={1} size={1} textColor="secondary">
          Jak w powiadomienia?
        </Heading>
        <Image src={images.cover} width="100%" />
        <Text bold fit margin="10px 0 0" textColor="tertiary">
          Czyli trochę o technologii WebPush
        </Text>
      </Slide>

      <Slide bgColor="quaternary" transition={['slide']}>
        <Heading caps size={1} textColor="secondary">
          What is Web Push?
        </Heading>
        <Image src={images.whatIsWebPush} width="100%" />
      </Slide>
      <Slide bgColor="quaternary" transition={['fade']}>
        <Heading caps size={3} textColor="secondary">
          What is Web Push?
        </Heading>
        <List>
          <ListItem bold>
            Since 2010
          </ListItem>
          <ListItem bold>
            Messaging tool
          </ListItem>
          <ListItem bold>
            Technology
          </ListItem>
        </List>
      </Slide>
      <Slide bgColor="quaternary" transition={['fade']}>
        <Heading caps size={3} textColor="secondary">
          And what are it&apos;s parts?
        </Heading>
        <List>
          <ListItem bold>
            External service from browser provider
          </ListItem>
          <ListItem bold>
            Browser with service worker
          </ListItem>
          <ListItem bold>
            Server application
          </ListItem>
        </List>
      </Slide>

      <Slide bgColor="black" textColor="quaternary" transition={['fade']}>
        <Heading caps size={1}>
          Who supports it?
        </Heading>
      </Slide>
      <Slide bgColor="black" textColor="quaternary" transition={['fade']}>
        <Heading caps size={3} textColor="tertiary">
          Who supports it?
        </Heading>
        <List>
          <ListItem bold>
            Chrome and family (mostly)
          </ListItem>
          <ListItem bold>
            Firefox (partial)
          </ListItem>
          <ListItem bold>
            Safari (own API)
          </ListItem>
          <ListItem bold>
            Samsung Internet Browser (all?)
          </ListItem>
        </List>
      </Slide>

      <Slide bgColor="tertiary" transition={['fade']}>
        <Heading caps size={1} textColor="secondary">
          Is it free?
        </Heading>
        <Image src={images.isItFree} width="400" />
      </Slide>
      <Slide bgColor="tertiary" transition={['fade']}>
        <Heading caps size={3} textColor="secondary">
          Notification types
        </Heading>
        <List>
          <ListItem bold>
            Non-persistent
          </ListItem>
          <ListItem bold>
            Persistent
          </ListItem>
        </List>
      </Slide>

      <Slide bgColor="primary" textColor="tertiary" transition={['fade']}>
        <Heading caps size={1} textColor="secondary">
          How it works?
        </Heading>
        <Image src={images.howItWorks} width="400" />
      </Slide>
      <Slide bgColor="primary" textColor="tertiary" transition={['fade']}>
        <Heading caps size={3} textColor="secondary">
          How it works?
        </Heading>
        <List>
          <ListItem bold>
            HTTP2
          </ListItem>
          <ListItem bold>
            Service worker
          </ListItem>
          <ListItem bold>
            Publisher/Subscriber model
          </ListItem>
        </List>
      </Slide>

      <Slide bgColor="tertiary" transition={['fade']}>
        <Heading caps size={1} textColor="secondary">
          Permission first
        </Heading>
        <Image src={images.permissionPrompt} width="100%" />
      </Slide>
      <Slide bgColor="tertiary" transition={['fade']}>
        <Heading caps size={3} textColor="secondary">
          Ask for permission strategies
        </Heading>
        <List>
          <ListItem bold>
            On page load
          </ListItem>
          <ListItem bold>
            Delayed time
          </ListItem>
          <ListItem bold>
            N visits
          </ListItem>
          <ListItem bold>
            User request
          </ListItem>
        </List>
      </Slide>

      <Slide bgColor="tertiary" textColor="tertiary" transition={['fade']}>
        <Heading caps size={1} textColor="secondary">
          Enable notifications?
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

      <Slide bgColor="tertiary" textColor="tertiary" transition={['fade']}>
        <Heading caps size={1} textColor="secondary">
          Subscription object
        </Heading>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ textAlign: 'left' }}>
            <Code>
              interface PushSubscription &#123;
            </Code>
            <br />
            <Code>
              &nbsp;&nbsp;endpoint: string;
            </Code>
            <br />
            <Code>
              &nbsp;&nbsp;keys: &#123;
            </Code>
            <br />
            <Code>
              &nbsp;&nbsp;&nbsp;&nbsp;p256dh: string;
            </Code>
            <br />
            <Code>
              &nbsp;&nbsp;&nbsp;&nbsp;auth: string;
            </Code>
            <br />
            <Code>
              &nbsp;&nbsp;&#125;;
            </Code>
            <br />
            <Code>
              &nbsp;&nbsp;expirationDate?: string;
            </Code>
            <br />
            <Code>
              &#125;
            </Code>
          </div>
        </div>
      </Slide>

      <Slide bgColor="primary" transition={['fade']}>
        <Heading caps size={1} textColor="secondary">
          What just happend?
        </Heading>
      </Slide>
      <Slide bgColor="primary" transition={['fade']}>
        <Heading caps size={3} textColor="secondary">
          What just happend?
        </Heading>
        <Image src={images.askForPermission1} width="100%" />
      </Slide>
      <Slide bgColor="primary" transition={['fade']}>
        <Heading caps size={3} textColor="secondary">
          What just happend?
        </Heading>
        <Image src={images.askForPermission2} width="100%" />
      </Slide>
      <Slide bgColor="primary" transition={['fade']}>
        <Heading caps size={3} textColor="secondary">
          What just happend?
        </Heading>
        <Image src={images.askForPermission3} width="100%" />
      </Slide>
      <Slide bgColor="primary" transition={['fade']}>
        <Heading caps size={3} textColor="secondary">
          What just happend?
        </Heading>
        <Image src={images.askForPermission4} width="100%" />
      </Slide>

      <Slide bgColor="quaternary" transition={['fade']}>
        <Heading caps size={1} textColor="secondary">
          See it in action
        </Heading>
        <Image src={images.action} width="400" />
      </Slide>

      <Slide bgColor="tertiary" textColor="quaternary" transition={['fade']}>
        <Heading caps size={1} textColor="secondary">
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
      <Slide bgColor="tertiary" transition={['fade']}>
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

      <Slide bgColor="primary" textColor="tertiary" transition={['fade']}>
        <Heading caps size={1} textColor="secondary">
          Ok, what i can do with it?
        </Heading>
        <Image src={images.curiosity} width="400" />
      </Slide>

      <Slide bgColor="quaternary" transition={['fade']}>
        <Heading caps size={1} textColor="secondary">
          Save it to server for future use
        </Heading>
        <Image src={images.server} width="400" />
      </Slide>
      <Slide bgColor="quaternary" transition={['fade']}>
        <Heading caps size={1} textColor="secondary">
          Usages
        </Heading>
        <List>
          <ListItem bold>
            Notify about new content
          </ListItem>
          <ListItem bold>
            Increase engagement
          </ListItem>
          <ListItem bold>
            Alerts
          </ListItem>
          <ListItem bold>
            Advertisement
          </ListItem>
        </List>
      </Slide>

      <Slide bgColor="primary" transition={['fade']}>
        <Heading caps size={1} textColor="secondary">
          When notification is send
        </Heading>
      </Slide>
      <Slide bgColor="primary" transition={['fade']}>
        <Heading caps size={3} textColor="secondary">
          When notification is send
        </Heading>
        <Image src={images.sendNotification1} width="100%" />
      </Slide>
      <Slide bgColor="primary" transition={['fade']}>
        <Heading caps size={3} textColor="secondary">
          When notification is send
        </Heading>
        <Image src={images.sendNotification2} width="100%" />
      </Slide>
      <Slide bgColor="primary" transition={['fade']}>
        <Heading caps size={3} textColor="secondary">
          When notification is send
        </Heading>
        <Image src={images.sendNotification3} width="100%" />
      </Slide>
      <Slide bgColor="primary" transition={['fade']}>
        <Heading caps size={3} textColor="secondary">
          When notification is send
        </Heading>
        <Image src={images.sendNotification4} width="100%" />
      </Slide>
      <Slide bgColor="primary" transition={['fade']}>
        <Heading caps size={3} textColor="secondary">
          When notification is send
        </Heading>
        <Image src={images.sendNotification5} width="100%" />
      </Slide>

      <Slide bgColor="quaternary" textColor="quaternary" transition={['fade']}>
        <Heading caps size={1} textColor="secondary">
          What about security?
        </Heading>
        <Image src={images.isItSafe} width="400" />
      </Slide>
      <Slide bgColor="quaternary" transition={['fade']}>
        <Heading caps size={3} textColor="secondary">
          What about security?
        </Heading>
        <List>
          <ListItem bold>
            SSL
          </ListItem>
          <ListItem bold>
            VAPID
          </ListItem>
        </List>
      </Slide>

      <Slide bgColor="primary" transition={['fade']}>
        <Heading caps size={1} textColor="secondary">
          Tips after many adventures
        </Heading>
        <Image src={images.server} width="400" />
      </Slide>
      <Slide bgColor="primary" transition={['fade']}>
        <Heading caps size={3} textColor="secondary">
          Tips after many adventures
        </Heading>
        <List>
          <ListItem bold>
            Keep stored subscriptions synced with service worker
          </ListItem>
          <ListItem bold>
            Browser security changes over time
          </ListItem>
          <ListItem bold>
            Push services behaviour differs
          </ListItem>
        </List>
      </Slide>

      <Slide bgColor="black" textColor="quaternary" transition={['fade']}>
        <Heading caps size={1}>
          Last but not least ...
        </Heading>
      </Slide>
      <Slide bgColor="black" textColor="quaternary" transition={['fade']}>
        <Heading caps size={1}>
          ... how not to annoy people
        </Heading>
      </Slide>
      <Slide bgColor="black" textColor="quaternary" transition={['fade']}>
        <Heading caps size={3} textColor="tertiary">
          Do not:
        </Heading>
        <List>
          <ListItem bold>
            Ask for permission prematurely
          </ListItem>
          <ListItem bold>
            Send spam
          </ListItem>
          <ListItem bold>
            Notify too often
          </ListItem>
        </List>
      </Slide>

      <Slide bgColor="quaternary" transition={['fade']}>
        <Heading caps size={1} textColor="secondary">
          Want more? Try my Web Push Generator!
        </Heading>
        <a href="https://web-push-generator.herokuapp.com/">Try now!</a>
      </Slide>

      <Slide bgColor="primary" textColor="tertiary" transition={['fade']}>
        <Heading caps size={3} textColor="secondary">
          Useful links
        </Heading>
        <List>
          <ListItem bold>
            <a href="https://notifications.spec.whatwg.org/">Notifications API Living Standard</a>
          </ListItem>
          <ListItem bold>
            <a href="https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API">
              Mozzila Notification Api & Support
            </a>
          </ListItem>
          <ListItem bold>
            <a href="https://developers.google.com/web/fundamentals/push-notifications">Google developers</a>
          </ListItem>
          <ListItem bold>
            <a href="https://web-push-generator.herokuapp.com/">Web Push Generator</a>
          </ListItem>
          <ListItem bold>
            <a href="https://github.com/G3F4/web-push-generator">Web Push Generator repo</a>
          </ListItem>
        </List>
      </Slide>

      <Slide transition={['fade']}>
        <Heading caps size={1} textColor="secondary">
          Questions?
        </Heading>
        <Image src={images.questions} width="400" />
      </Slide>

      <Slide bgColor="tertiary" textColor="tertiary" transition={['fade']}>
        <Heading caps size={1} textColor="secondary">
          Thank You!
        </Heading>
        <Image src={images.heart} width="400" />
      </Slide>
    </Deck>
  );
}
