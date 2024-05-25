export default function UI(props: { cookies: number; setCookies: Function }) {
  return (
    <div>
      <b className="selection:bg-[rgba(0,0,0,0)]">
        cookies clicked: {props.cookies}
      </b>
    </div>
  );
}
