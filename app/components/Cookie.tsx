export default function Cookie(props: {
  cookies: number;
  setCookies: Function;
}) {
  function handleClick(): void {
    props.setCookies(props.cookies + 1);
  }
  return <div onClick={handleClick}>CLICK ZONE</div>;
}
