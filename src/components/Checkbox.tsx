interface CheckboxProps {
    checked: boolean;
    onChange: () => void;
}
export default function Checkbox({ checked, onChange }: CheckboxProps) {
    return (
        <div
            className="flex gap-2 items-center justify-center "
        >
            <input type="checkbox"
                checked={checked}
                onChange={onChange}
            />
            <label
                className="text-body text-base leading-6 font-normal"
            > Show upcomaing only</label>

        </div>
    )
}
