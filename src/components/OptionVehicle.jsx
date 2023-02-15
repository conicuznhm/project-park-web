export default function OptionVehicle({ el }) {
  return (
    <option name={el.id} value={el.id}>
      {el.brand} {el.license}
    </option>
  );
}
