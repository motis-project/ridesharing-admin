import { NumberInput, TextInput, DateTimeInput } from "react-admin";

export const PositionInput = ({ source }) => {
    return (
        <div>
            <TextInput source={source} />
            <NumberInput source={source + "_lat"} step={0.01} />
            <NumberInput source={source + "_lng"} step={0.01} />
            <DateTimeInput source={source + "_time"} />
        </div>
    );
};