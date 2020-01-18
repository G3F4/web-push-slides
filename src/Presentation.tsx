/* eslint-disable no-undef */
import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import {
  Appear,
  Code, Deck, Heading, Image, List, ListItem, Slide, Text,
} from 'spectacle';
// eslint-disable-next-line import/no-unresolved
import createTheme from 'spectacle/lib/themes/default';

const images = {
  cover: 'cover.jpg',
  whatIsWebPush: 'web-push-notifications.gif',
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
  questions: 'questions.png',
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

function LazyList({ items }: { items: string[] }) {
  return (
    <List>
      {items.map(text => (
        <Appear key={text}>
          <ListItem bold textSize="3rem">
            {text}
          </ListItem>
        </Appear>
      ))}
    </List>
  );
}

function Input(props: { value: string; onChange: ChangeEvent<HTMLInputElement>; placeholder: string }) {
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    <input {...props} style={{ fontSize: '3rem' }} />
  )
}

export default function Presentation() {
  const [permission, setPermission] = useState(Notification.permission);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [icon, setIcon] = useState('');
  const [image, setImage] = useState('');
  const [firstAction, setFirstAction] = useState('');
  const [secondAction, setSecondAction] = useState('');
  const askForPermissionButtonLabels: Record<NotificationPermission, string> = {
    granted: 'NOTIFICATIONS ENABLED!',
    default: 'ASK FOR PERMISSION',
    denied: 'NOTIFICATIONS DISABLED!',
  };

  function getNotificationOptions(): [string, NotificationOptions] {
    return [
      title || 'Hello!',
      {
        body,
        icon,
        image,
        actions: [
          { action: firstAction, title: firstAction },
          { action: secondAction, title: secondAction },
        ].filter(({ action }) => Boolean(action)),
      }
    ];
  }

  async function handleSendNotification() {
    if (window.Notification) {
      try {
        const registration = await navigator.serviceWorker.ready;

        await registration.showNotification(...getNotificationOptions());
      } catch (e) {
        new Notification(...getNotificationOptions());
      }
    } else {
      new Notification(...getNotificationOptions());
    }
  }

  const handleAskForPermission = async () => {
    const permissionResult = await askForPermission();

    setPermission(permissionResult);
  };

  return (
    <Deck
      theme={theme}
      transitionDuration={1000}
      contentWidth="90%"
      contentHeight="90%"
    >
      <Slide bgColor="primary" transition={['fade']}>
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          Jak w powiadomienia?
        </Heading>
        <Image src={images.cover} width="80%" height="50%" />
        <Text bold fit margin="10px 0 0" textColor="tertiary">
          Czyli trochę o technologii WebPush
        </Text>
      </Slide>

      <Slide bgColor="quaternary" transition={['slide']}>
        <Heading fit caps size={2} textColor="secondary">
          What is Web Push?
        </Heading>
        <Image src={images.whatIsWebPush} width="80%" height="50%" />
      </Slide>
      <Slide bgColor="quaternary" transition={['fade']}>
        <Heading fit caps size={3} textColor="secondary">
          What is Web Push?
        </Heading>
        <LazyList items={['Messaging tool', 'Technology', 'Since 2010', ]} />
      </Slide>
      <Slide bgColor="quaternary" transition={['fade']}>
        <Heading fit caps size={3} textColor="secondary">
          And what are it&apos;s parts?
        </Heading>
        <LazyList
          items={[
            'External service',
            'Browser client',
            'Service worker',
            'Server application',
          ]}
        />
      </Slide>

      <Slide bgColor="tertiary" transition={['fade']}>
        <Heading fit caps size={2} textColor="secondary">
          Is it free?
        </Heading>
        <Image src={images.isItFree} width="40%" />
      </Slide>
      <Slide bgColor="tertiary" transition={['fade']}>
        <Heading fit caps size={3} textColor="secondary">
          Who supports it?
        </Heading>
        <LazyList
          items={[
            'Chrome and family (mostly)',
            'Firefox (partial)',
            'Safari (own API)',
            'Samsung Internet Browser (all?)',
            'Others'
          ]}
        />
      </Slide>
      <Slide bgColor="tertiary" transition={['fade']}>
        <Heading fit caps size={3} textColor="secondary">
          Notification types
        </Heading>
        <List>
          <Appear>
            <ListItem bold>
            Non-persistent
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
        <LazyList items={['HTTP2', 'Service worker', 'Publisher/Subscriber model', ]} />
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
        <LazyList items={['On page load', 'Delayed time', 'N visits',  'User request', ]} />
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
            <Input
              value={title}
              // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
              // @ts-ignore
              onChange={(event) => setTitle(event.target.value)}
              placeholder="enter title"
            />
            <br />
            <br />
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
            <Input
              placeholder="enter body"
              // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
              // @ts-ignore
              onChange={(event) => setBody(event.target.value)}
            />
            <br />
            <br />
            <select
              onChange={(event) => setIcon(event.target.value)}
            >
              <option>Pick icon</option>
              {iconOptions.map(({ text, value }) => (
                <option key={value} value={value}>{text}</option>
              ))}
            </select>
            <br />
            <br />
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
      <Slide bgColor="tertiary" transition={['fade']}>
        {permission !== 'granted' ? (
          <Heading fit caps size={2} textColor="secondary">
            Notifications are not allowed
          </Heading>
        ) : (
          <>
            <Heading fit caps size={3} textColor="secondary">
              Set actions in notification
            </Heading>
            <br />
            <Input
              placeholder="first action"
              // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
              // @ts-ignore
              onChange={(event: any) => setFirstAction(event.target.value)}
            />
            <br />
            <br />
            <Input
              placeholder="second action"
              // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
              // @ts-ignore
              onChange={(event: any) => setSecondAction(event.target.value)}
            />
            <br />
            <br />
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
        <LazyList
          items={[
            'Notification click',
            'Action click',
            'Refresh hanging notification',
            'Silent',
            'Vibrations',
            'Requiring interaction',
          ]} />
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
        <LazyList items={['Notify about new content', 'Increase engagement', 'Alerts',  'Advertisement', ]} />
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
        <LazyList items={['SSL', 'VAPID', 'Time expiration', ]} />
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
        <LazyList
          items={[
            'Keep stored subscriptions synced with service worker',
            'Browser security changes over time',
            'Push services behaviour differs',
          ]}
        />
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
        <LazyList items={['Ask for permission prematurely', 'Send spam', 'Notify too often', ]} />
      </Slide>

      <Slide bgColor="quaternary" transition={['fade']}>
        <Heading fit caps size={2} textColor="secondary">
          Want more? Try my
          <br />
          Web Push Generator!
        </Heading>
        <a href="https://web-push-generator.herokuapp.com/">Try now!</a>
      </Slide>

      <Slide transition={['fade']}>
        <Heading fit caps size={2} textColor="secondary">
          Questions?
        </Heading>
        <Image src={images.questions} width="33%" />
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

      <Slide bgColor="tertiary" textColor="tertiary" transition={['fade']}>
        <Heading fit caps size={2} textColor="secondary">
          Thank You!
        </Heading>
        <Image src={images.heart} width="33%" />
      </Slide>
    </Deck>
  );
}
