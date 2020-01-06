/* eslint-disable no-undef */
import React, { useState } from 'react';
import {
  Appear,
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
  askForPermission1: 'ask-for-permission-1.svg',
  askForPermission2: 'ask-for-permission-2.svg',
  askForPermission3: 'ask-for-permission-3.svg',
  askForPermission4: 'ask-for-permission-4.svg',
  curiosity: 'curiosity.png',
  server: 'server.svg',
  tips: 'tips.gif',
  behaviour: 'behaviour.png',
  sendMessage: 'send-message.svg',
  sendNotification1: 'send-notification-1.svg',
  sendNotification2: 'send-notification-2.svg',
  sendNotification3: 'send-notification-3.svg',
  sendNotification4: 'send-notification-4.svg',
  sendNotification5: 'send-notification-5.svg',
  heart: 'heart.png',
  questions: 'questions.svg',
  rickAndMorty: 'rickAndMorty.png',
  familyGuy: 'familyGuy.png',
  boJack: 'boJack.png',
};

const iconOptions = [{
  text: 'Rick & Morty',
  value: images.rickAndMorty,
}, {
  text: 'Family Guy',
  value: images.familyGuy,
}, {
  text: 'BoJack Horseman',
  value: images.boJack,
}];

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

export default function Presentation() {
  const [permission, setPermission] = useState(Notification.permission);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [icon, setIcon] = useState('');
  const [image, setImage] = useState('');
  const askForPermissionButtonLabels: Record<NotificationPermission, string> = {
    granted: 'NOTIFICATIONS ENABLED!',
    default: 'ASK FOR PERMISSION',
    denied: 'NOTIFICATIONS DISABLED!',
  };

  function handleSendNotification() {
    new Notification(title || 'Hello!', { body, icon, image });
  }

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
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          Jak w powiadomienia?
        </Heading>
        <Image src={images.cover} width="100%" />
        <Text bold fit margin="10px 0 0" textColor="tertiary">
          Czyli trochę o technologii WebPush
        </Text>
      </Slide>

      <Slide bgColor="quaternary" transition={['slide']}>
        <Heading fit caps size={2} textColor="secondary">
          What is Web Push?
        </Heading>
        <Image src={images.whatIsWebPush} width="100%" />
      </Slide>
      <Slide bgColor="quaternary" transition={['fade']}>
        <Heading fit caps size={3} textColor="secondary">
          What is Web Push?
        </Heading>
        <List>
          <Appear>
            <ListItem bold>
              Messaging tool
            </ListItem>
          </Appear>
          <Appear>
            <ListItem bold>
              Technology
            </ListItem>
          </Appear>
          <Appear>
            <ListItem bold>
              Since 2010
            </ListItem>
          </Appear>
        </List>
      </Slide>
      <Slide bgColor="quaternary" transition={['fade']}>
        <Heading fit caps size={3} textColor="secondary">
          And what are it&apos;s parts?
        </Heading>
        <List>
          <Appear>
            <ListItem bold>
              External service from browser provider
            </ListItem>
          </Appear>
          <Appear>
            <ListItem bold>
              Browser client
            </ListItem>
          </Appear>
          <Appear>
            <ListItem bold>
              Service worker
            </ListItem>
          </Appear>
          <Appear>
            <ListItem bold>
              Server application
            </ListItem>
          </Appear>
        </List>
      </Slide>

      <Slide bgColor="secondary" textColor="quaternary" transition={['fade']}>
        <Heading caps fit size={2} textColor="tertiary">
          Who supports it?
        </Heading>
      </Slide>
      <Slide bgColor="secondary" textColor="quaternary" transition={['fade']}>
        <Heading fit caps size={3} textColor="tertiary">
          Who supports it?
        </Heading>
        <List>
          <Appear>
            <ListItem bold>
            Chrome and family (mostly)
            </ListItem>
          </Appear>
          <Appear>
            <ListItem bold>
            Firefox (partial)
            </ListItem>
          </Appear>
          <Appear>
            <ListItem bold>
            Safari (own API)
            </ListItem>
          </Appear>
          <Appear>
            <ListItem bold>
            Samsung Internet Browser (all?)
            </ListItem>
          </Appear>
          <Appear>
            <ListItem bold>
            Others and more supporting in future
            </ListItem>
          </Appear>
        </List>
      </Slide>

      <Slide bgColor="tertiary" transition={['fade']}>
        <Heading fit caps size={2} textColor="secondary">
          Is it free?
        </Heading>
        <Image src={images.isItFree} width="33%" />
      </Slide>
      <Slide bgColor="tertiary" transition={['fade']}>
        <Heading fit caps size={3} textColor="secondary">
          Notification types
        </Heading>
        <List>
          <Appear>
            <ListItem bold>
            Non-persistent (without service worker)
              <br />
              <Code>
              new Notification(title, options);
              </Code>
              <br />
              <br />
            </ListItem>
          </Appear>
          <Appear>
            <ListItem bold>
            Persistent
              <br />
              <Code>
              registration.showNotification(title, options);
              </Code>
            </ListItem>
          </Appear>
        </List>
      </Slide>

      <Slide bgColor="primary" transition={['fade']}>
        <Heading fit caps size={2} textColor="secondary">
          How it works?
        </Heading>
        <Image src={images.howItWorks} width="33%" />
      </Slide>
      <Slide bgColor="primary" transition={['fade']}>
        <Heading fit caps size={3} textColor="secondary">
          How it works?
        </Heading>
        <List>
          <Appear>
            <ListItem bold>
            HTTP2
            </ListItem>
          </Appear>
          <Appear>
            <ListItem bold>
            Service worker
            </ListItem>
          </Appear>
          <Appear>
            <ListItem bold>
            Publisher/Subscriber model
            </ListItem>
          </Appear>
        </List>
      </Slide>

      <Slide bgColor="tertiary" transition={['fade']}>
        <Heading fit caps size={2} textColor="secondary">
          Permission first
        </Heading>
        <Image src={images.permissionPrompt} width="100%" />
      </Slide>
      <Slide bgColor="tertiary" transition={['fade']}>
        <Heading fit caps size={3} textColor="secondary">
          Ask for permission strategies
        </Heading>
        <List>
          <Appear>
            <ListItem bold>
            On page load
            </ListItem>
          </Appear>
          <Appear>
            <ListItem bold>
            Delayed time
            </ListItem>
          </Appear>
          <Appear>
            <ListItem bold>
            N visits
            </ListItem>
          </Appear>
          <Appear>
            <ListItem bold>
            User request
            </ListItem>
          </Appear>
        </List>
      </Slide>

      <Slide bgColor="tertiary" transition={['fade']}>
        <Heading fit caps size={2} textColor="secondary">
          Enable notifications?
        </Heading>
        <br />
        <button onClick={handleAskForPermission} type="button">
          {askForPermissionButtonLabels[permission]}
        </button>
        {permission === 'denied' && (
          <Text>
            Change notifications permission in browser
          </Text>
        )}
        <br />
        <br />
        <Code>
          await Notification.requestPermission();
        </Code>
      </Slide>

      <Slide bgColor="primary" transition={['fade']}>
        <Heading fit caps size={3} textColor="secondary">
          What just happened?
        </Heading>
        <br />
        <div>
          <Appear>
            <Image display="inline" src={images.askForPermission1} width="25%" />
          </Appear>
          <Appear>
            <Image display="inline" src={images.askForPermission2} width="25%" />
          </Appear>
          <Appear>
            <Image display="inline" src={images.askForPermission3} width="25%" />
          </Appear>
          <Appear>
            <Image display="inline" src={images.askForPermission4} width="25%" />
          </Appear>
        </div>
      </Slide>

      <Slide bgColor="tertiary" transition={['fade']}>
        <Heading fit caps size={3} textColor="secondary">
          Subscription object
        </Heading>
        <br />
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

      <Slide bgColor="quaternary" transition={['fade']}>
        <Heading fit caps size={2} textColor="secondary">
          See it in action
        </Heading>
        <Image src={images.action} width="33%" />
      </Slide>

      <Slide bgColor="tertiary" textColor="quaternary" transition={['fade']}>
        {permission !== 'granted' ? (
          <Heading fit caps size={2} textColor="secondary">
            Notifications are not allowed
          </Heading>
        ) : (
          <>
            <Heading fit caps size={3} textColor="secondary">
              Simplest notification
              <br />
              is title only
            </Heading>
            <br />
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="enter title"
            />
            <button onClick={handleSendNotification}>
              SEND
            </button>
          </>
        )}
      </Slide>
      <Slide bgColor="tertiary" transition={['fade']}>
        {permission !== 'granted' ? (
          <Heading fit caps size={2} textColor="secondary">
            Notifications are not allowed
          </Heading>
        ) : (
          <>
            <Heading fit caps size={3} textColor="secondary">
              Notification body and icon
            </Heading>
            <br />
            <input
              placeholder="enter body"
              onChange={(event) => setBody(event.target.value)}
            />
            <select
              onChange={(event) => setIcon(event.target.value)}
            >
              <option>Pick icon</option>
              {iconOptions.map(({ text, value }) => (
                <option key={value} value={value}>{text}</option>
              ))}
            </select>
            <button onClick={handleSendNotification}>
              SEND
            </button>
          </>
        )}
      </Slide>
      <Slide bgColor="tertiary" transition={['fade']}>
        {permission !== 'granted' ? (
          <Heading fit caps size={2} textColor="secondary">
            Notifications are not allowed
          </Heading>
        ) : (
          <>
            <Heading fit caps size={3} textColor="secondary">
              Image in notification
            </Heading>
            <Text>Pick one</Text>
            <br />
            <div>
              <span onClick={() => setImage(images.familyGuy)}>
                <Image
                  width="33%"
                  display="inline"
                  src={images.familyGuy}
                  className={image === images.familyGuy ? 'solidBorder' : ''}
                />
              </span>
              <span onClick={() => setImage(images.rickAndMorty)}>
                <Image
                  width="33%"
                  display="inline"
                  src={images.rickAndMorty}
                  className={image === images.rickAndMorty ? 'solidBorder' : ''}
                />
              </span>
              <span onClick={() => setImage(images.boJack)}>
                <Image
                  width="33%"
                  display="inline"
                  src={images.boJack}
                  className={image === images.boJack ? 'solidBorder' : ''}
                />
              </span>
            </div>
            <button onClick={handleSendNotification}>
              SEND
            </button>
          </>
        )}
      </Slide>

      <Slide bgColor="primary" transition={['fade']}>
        <Heading fit caps size={2} textColor="secondary">
          Notifications behaviours
        </Heading>
        <Image src={images.behaviour} width="33%" />
      </Slide>
      <Slide bgColor="primary" transition={['fade']}>
        <Heading fit caps size={3} textColor="secondary">
          Notifications behaviours
        </Heading>
        <List>
          <ListItem bold>
            Notification click
          </ListItem>
          <ListItem bold>
            Action click
          </ListItem>
          <ListItem bold>
            Refresh hanging notification
          </ListItem>
          <ListItem bold>
            Silent
          </ListItem>
          <ListItem bold>
            Vibrations
          </ListItem>
          <ListItem bold>
            Requiring interaction
          </ListItem>
        </List>
      </Slide>

      <Slide bgColor="primary" transition={['fade']}>
        <Heading fit caps size={2} textColor="secondary">
          Ok, what i can do with it?
        </Heading>
        <Image src={images.curiosity} width="33%" />
      </Slide>

      <Slide bgColor="quaternary" transition={['fade']}>
        <Heading fit caps size={2} textColor="secondary">
          Save it to server for future use
        </Heading>
        <Image src={images.server} width="33%" />
      </Slide>
      <Slide bgColor="quaternary" transition={['fade']}>
        <Heading fit caps size={2} textColor="secondary">
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
        <Heading fit caps size={3} textColor="secondary">
          Sending notification
        </Heading>
        <br />
        <div>
          <Appear>
            <Image display="inline" src={images.sendNotification1} width="20%" />
          </Appear>
          <Appear>
            <Image display="inline" src={images.sendNotification2} width="20%" />
          </Appear>
          <Appear>
            <Image display="inline" src={images.sendNotification3} width="20%" />
          </Appear>
          <Appear>
            <Image display="inline" src={images.sendNotification4} width="20%" />
          </Appear>
          <Appear>
            <Image display="inline" src={images.sendNotification5} width="20%" />
          </Appear>
        </div>
      </Slide>

      <Slide bgColor="quaternary" textColor="quaternary" transition={['fade']}>
        <Heading fit caps size={2} textColor="secondary">
          What about security?
        </Heading>
        <Image src={images.isItSafe} width="33%" />
      </Slide>
      <Slide bgColor="quaternary" transition={['fade']}>
        <Heading fit caps size={3} textColor="secondary">
          What about security?
        </Heading>
        <List>
          <Appear>
            <ListItem bold>
            SSL
            </ListItem>
          </Appear>
          <Appear>
            <ListItem bold>
            VAPID
            </ListItem>
          </Appear>
          <Appear>
            <ListItem bold>
            Time expiration
            </ListItem>
          </Appear>
          <br />
          <br />
          <br />
          <br />
        </List>
      </Slide>

      <Slide bgColor="primary" transition={['fade']}>
        <Heading fit caps size={2} textColor="secondary">
          Tips after my adventures
        </Heading>
        <Image src={images.tips} width="33%" />
      </Slide>
      <Slide bgColor="primary" transition={['fade']}>
        <Heading fit caps size={3} textColor="secondary">
          Tips after my adventures
        </Heading>
        <List>
          <Appear>
            <ListItem bold>
            Keep stored subscriptions synced with service worker
            </ListItem>
          </Appear>
          <Appear>
            <ListItem bold>
            Browser security changes over time
            </ListItem>
          </Appear>
          <Appear>
            <ListItem bold>
            Push services behaviour differs
            </ListItem>
          </Appear>
        </List>
      </Slide>

      <Slide bgColor="secondary" textColor="quaternary" transition={['fade']}>
        <Heading fit caps size={2} textColor="tertiary">
          Last but not least ...
        </Heading>
      </Slide>
      <Slide bgColor="secondary" textColor="quaternary" transition={['fade']}>
        <Heading fit caps size={2} textColor="tertiary">
          ... how not to annoy people
        </Heading>
      </Slide>
      <Slide bgColor="secondary" textColor="quaternary" transition={['fade']}>
        <Heading fit caps size={3} textColor="tertiary">
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
        <Heading fit caps size={2} textColor="secondary">
          Want more? Try my
          <br />
          Web Push Generator!
        </Heading>
        <a href="https://web-push-generator.herokuapp.com/">Try now!</a>
      </Slide>

      <Slide bgColor="primary" textColor="tertiary" transition={['fade']}>
        <Heading fit caps size={3} textColor="secondary">
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
        <Heading fit caps size={2} textColor="secondary">
          Questions?
        </Heading>
        <Image src={images.questions} width="33%" />
      </Slide>

      <Slide bgColor="tertiary" textColor="tertiary" transition={['fade']}>
        <Heading fit caps size={2} textColor="secondary">
          Thank You!
        </Heading>
        <Image src={images.heart} width="33%" />
      </Slide>
    </Deck>
  );
}
