import { useRouteLoaderData, json, redirect } from "react-router-dom";
import EventsItem from "../components/EventItem";

const EventDetailPage = () => {
  const data = useRouteLoaderData("event-detail");

  return <EventsItem event={data.event} />;
};

export default EventDetailPage;

export const loader = async ({ request, params }) => {
  const id = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch detail for selected event." },
      { status: 500 }
    );
  } else {
    return response;
  }
};

export const action = async ({ params, request }) => {
  const eventId = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw json(
      { message: "Could not remove selected event." },
      { status: 500 }
    );
  }
  return redirect("/events");
};
