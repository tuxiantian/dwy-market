export default function(val) {
  val = Number(val);
  return `￥${val.toFixed(2)}`;
}
