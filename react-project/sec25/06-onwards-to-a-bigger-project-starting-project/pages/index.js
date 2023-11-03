import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://imageproxyb.ifunny.co/crop:square,resize:320x,quality:90x75/images/1b1eb27dba6109912e5a0ebdfa57983f0dd161c8f280d63509a45e480919ca31_3.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://imageproxyb.ifunny.co/crop:square,resize:320x,quality:90x75/images/1b1eb27dba6109912e5a0ebdfa57983f0dd161c8f280d63509a45e480919ca31_3.jpg",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup!",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;
