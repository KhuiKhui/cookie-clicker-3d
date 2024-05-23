export default function UI(props: { cookies: number; setCookies: Function }) {
  return (
    <div>
      <div>cookies clicked: {props.cookies}</div>
    </div>
  );
}
