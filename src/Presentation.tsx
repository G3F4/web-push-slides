/* eslint-disable no-undef */
import React, { useState } from 'react';
import {
  Code, Deck, Heading, Image, List, ListItem, Slide, Text, CodePane,
} from 'spectacle';
// eslint-disable-next-line import/no-unresolved
import createTheme from 'spectacle/lib/themes/default';

const images = {
  cover: 'cover.jpg',
  permissionPrompt: 'permission-prompt.png',
  whatIsWebPush: 'what-is-web-push.gif',
  isItFree: 'is-it-free.png',
  isItSafe: 'security.svg',
  action: 'action.png',
  howItWorks: 'how-it-works.svg',
  askForPermission: 'ask-for-permission.svg',
  curiosity: 'curiosity.png',
  server: 'server.svg',
  sendMessage: 'send-message.svg',
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
        <Image src={images.whatIsWebPush} width="100%" />
      </Slide>
      <Slide bgColor="primary" textColor="tertiary" transition={['fade']}>
        <Heading caps size={3} textColor="secondary">
          What is Web Push?
        </Heading>
        <List>
          <ListItem>
            Since 2010
          </ListItem>
          <ListItem>
            Messaging tool
          </ListItem>
          <ListItem>
            Technology
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
          <ListItem>
            Chrome and family (mostly)
          </ListItem>
          <ListItem>
            Firefox (partial)
          </ListItem>
          <ListItem>
            Safari (own API)
          </ListItem>
          <ListItem>
            Samsung Internet Browser (all?)
          </ListItem>
        </List>
      </Slide>

      <Slide bgColor="primary" textColor="tertiary" transition={['fade', 'slide']}>
        <Heading caps size={1} textColor="secondary">
          Is it free?
        </Heading>
        <Image src={images.isItFree} width="400" />
      </Slide>

      <Slide bgColor="primary" transition={['fade', 'zoom']}>
        <Heading caps size={1} textColor="secondary">
          See it in action
        </Heading>
        <Image src={images.action} width="400" />
      </Slide>

      <Slide bgColor="primary">
        <Heading caps size={1} textColor="secondary">
          Permission first
        </Heading>
        <Image src={images.permissionPrompt} width="100%" />
      </Slide>
      <Slide bgColor="black" textColor="quaternary" transition={['fade']}>
        <Heading caps size={3} textColor="tertiary">
          Ask for permission strategies
        </Heading>
        <List>
          <ListItem>
            On page load
          </ListItem>
          <ListItem>
            Delayed time
          </ListItem>
          <ListItem>
            N visits
          </ListItem>
          <ListItem>
            User request
          </ListItem>
        </List>
      </Slide>

      <Slide bgColor="tertiary" textColor="tertiary" transition={['zoom', 'fade']}>
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

      <Slide bgColor="primary">
        <Heading caps size={1} textColor="secondary">
          What just happend?
        </Heading>
        <Image src={images.askForPermission} width="100%" />
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

      <Slide bgColor="tertiary" textColor="tertiary" transition={['slide', 'fade']}>
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

      <Slide bgColor="tertiary" textColor="tertiary" transition={['fade']}>
        <Heading caps size={1} textColor="secondary">
          Ok, what i can do with it?
        </Heading>
        <Image src={images.curiosity} width="400" />
      </Slide>

      <Slide bgColor="primary">
        <Heading caps size={1} textColor="secondary">
          Save it to server for future use
        </Heading>
        <Image src={images.server} width="400" />
      </Slide>

      <Slide bgColor="primary">
        <Heading caps size={1} textColor="secondary">
          When notification is send
        </Heading>
        <Image src={images.sendMessage} width="100%" />
      </Slide>

      <Slide bgColor="primary" textColor="quaternary" transition={['fade']}>
        <Heading caps size={1} textColor="secondary">
          Is it safe?
        </Heading>
        <Image src={images.isItSafe} width="400" />
      </Slide>
      <Slide bgColor="black" textColor="quaternary" transition={['fade']}>
        <Heading caps size={3} textColor="tertiary">
          Is it safe?
        </Heading>
        <List>
          <ListItem>
            SSL
          </ListItem>
          <ListItem>
            VAPID
          </ListItem>
        </List>
      </Slide>

      <Slide bgColor="tertiary" textColor="tertiary" transition={['fade']}>
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
          <ListItem>
            HTTP2
          </ListItem>
          <ListItem>
            PUBLISHER/SUBSCRIBER MODEL
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
          <ListItem>
            Ask for permission prematurely
          </ListItem>
          <ListItem>
            Send spam
          </ListItem>
          <ListItem>
            Too often notifications
          </ListItem>
        </List>
      </Slide>

      <Slide bgColor="black" textColor="quaternary" transition={['zoom', 'fade', 'slide']}>
        <Heading caps size={1}>
          Want more? Try my Web Push Generator!
        </Heading>
        <a href="https://web-push-generator.herokuapp.com/">Try now!</a>
      </Slide>

      <Slide bgColor="black" textColor="quaternary" transition={['zoom', 'fade', 'slide']}>
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
              Mozzila Notification Api & Support
            </a>
          </ListItem>
          <ListItem>
            <a href="https://developers.google.com/web/fundamentals/push-notifications">Google developers</a>
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
