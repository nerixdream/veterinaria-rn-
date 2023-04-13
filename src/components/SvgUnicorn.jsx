import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function SvgUnicorn(props) {
    return (
        <Svg
            width={138}
            height={138}
            viewBox="0 0 138 138"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            style={{ marginTop: 25 }}
        >
            <G clipPath="url(#clip0_2_103)">
                <Path
                    d="M51.151.751c-2.253 1.288-3.62 4.023-3.299 6.545.161 1.207.134 1.287-.456 1.287-1.046 0-3.728.805-5.257 1.556-1.824.912-4.614 3.621-5.472 5.338-1.207 2.387-1.636 4.13-1.636 6.384.053 3.299 1.207 6.571 3.138 8.637.644.724.724.617-1.153 1.421-4.104 1.69-9.871 4.882-11.293 6.223-.965.858-1.046 2.092-.188 2.897.966.885 1.985.67 4.507-.966 2.628-1.716 7.188-3.996 10.38-5.176l2.2-.805 1.555.563c1.449.51 4.667.698 7.296.43.51-.054.698.08.912.724.67 2.038 2.602 3.808 4.855 4.479.617.188 2.441.322 4.05.322 2.441-.027 3.273-.134 4.882-.697 2.495-.886 3.97-1.744 5.794-3.434l1.475-1.341 11.212 2.924 11.212 2.897-.054 1.1c-.08.83.054 1.206.51 1.636.885.804 1.878.697 3.487-.376 1.073-.724 1.448-.885 1.636-.617.376.59 1.824 4.426 2.253 6.062.564 2.012.805 7.966.403 10.434-1.663 10.622-10.005 19.286-20.815 21.566-2.119.456-4.104.536-16.281.697-10.113.108-14.968.08-17.972-.16-12.66-1.047-20.331-3.863-25.374-9.282-2.12-2.306-3.353-4.238-4.211-6.759-2.012-5.767-1.395-11.56 1.743-16.791 1.475-2.44 1.395-3.594-.295-4.184-.697-.242-.992-.215-1.475.107-1.476.966-3.407 4.72-4.426 8.61-.778 2.977-.858 8.074-.16 10.917 2.735 11.158 11.801 18.132 26.741 20.573 1.825.295 3.327.563 3.353.59.027.054-.134.67-.375 1.395-.402 1.234-.563 1.395-2.307 2.334-1.529.831-4.882 2.119-5.874 2.226-.107.027-.67-1.153-1.207-2.602-1.18-3.138-2.146-4.291-3.997-4.72-.885-.215-1.555-.215-2.2-.028-1.34.376-1.448.35-1.957-.536-.617-1.02-1.744-1.61-3.139-1.61-.724 0-1.073-.107-1.073-.348 0-.617-1.502-2.495-2.494-3.111-3.648-2.254-8.53.536-8.476 4.855 0 .777.107 1.663.214 1.957.188.43 0 .725-.777 1.395-1.1.94-1.395 1.797-1.073 3.165.188.832.134.912-.644 1.234-1.02.403-2.226 1.475-2.736 2.441-.831 1.61-.563 2.656 3.836 14.753 3.433 9.415 4.399 11.802 5.096 12.58.832.912 2.307 1.582 3.54 1.582.752 0 19.608-6.813 21.083-7.591a4.832 4.832 0 002.414-3.379c.135-.805-.026-1.61-.643-3.407-.43-1.314-.751-2.414-.67-2.494.133-.161 4.505-1.637 4.56-1.556.026.027.321.59.643 1.261 1.663 3.352 5.23 7.134 8.556 9.119l1.878 1.127.08 8.208.08 8.234.752 1.529c1.341 2.736 3.54 4.077 6.625 4.104 1.744 0 2.2-.107 3.433-.778 1.556-.858 2.737-2.172 3.46-3.835.376-.832.483-2.146.564-7.538l.107-6.491h1.368c.778 0 1.851-.08 2.388-.161l.992-.161.08 6.652c.08 6.304.108 6.76.698 8.047 2.092 4.614 8.18 5.794 11.775 2.307 1.931-1.877 2.495-3.943 2.495-9.2v-3.112l3.701-.187c5.123-.269 6.196-.483 6.947-1.341.751-.886.778-1.503.054-2.415l-.563-.697-5.07.161-5.07.188v-4.587l.913-.697c.51-.376 1.019-.698 1.126-.698.107 0 .59.403 1.046.885 1.288 1.342 3.165 2.119 5.097 2.146 1.958.027 3.272-.375 4.774-1.529l1.127-.858 1.689.832 1.69.858-.912.697c-.992.751-1.341 1.717-.912 2.522.725 1.394 2.253 1.528 3.863.375 1.931-1.395 2.441-3.514 1.368-5.66-.537-.992-.939-1.341-2.763-2.253l-2.146-1.099-.456-3.89c-.751-6.571-2.092-11.829-3.996-15.584-.269-.536-.671-1.797-.912-2.79-.483-2.092-.376-2.28 1.207-2.28.509 0 2.092-.187 3.487-.402 9.146-1.448 17.086-4.533 21.699-8.422 1.744-1.475 2.254-2.575 2.119-4.587-.134-1.958-.858-2.95-3.031-4.157-4.023-2.253-5.445-5.097-6.008-11.856-.429-5.365-1.878-8.744-5.418-12.634-1.019-1.126-1.905-2.28-1.985-2.575-.054-.322-.161-2.494-.215-4.855-.107-3.648-.241-4.64-.858-6.705-2.602-8.745-9.066-14.887-18.454-17.462-3.031-.832-9.415-1.153-13.143-.67-4.507.616-9.013 2.226-12.232 4.425-.804.537-1.529.885-1.636.778-.107-.107-1.85-3.004-3.89-6.384-4.398-7.35-4.693-7.752-6.249-8.744C56.891.08 56.516 0 54.611 0c-1.877 0-2.36.107-3.46.751zm5.123 3.89c.322.321.912 1.1 1.315 1.77.375.67 2.333 3.862 4.291 7.08 1.985 3.247 3.541 5.929 3.487 5.982-.08.08-.992-.08-2.038-.348l-1.931-.483-.644-1.61c-1.368-3.325-3.487-5.605-6.84-7.268-.805-.403-1.556-.859-1.663-1.02-.322-.456-.241-3.084.08-3.674.376-.725 1.798-1.315 2.656-1.127.375.08.939.402 1.288.697zm-3.862 9.012c7.081 3.487 6.894 13.304-.322 16.737-1.395.644-2.012.778-3.621.778-2.79 0-4.748-.805-6.652-2.709-4.104-4.13-3.54-10.836 1.234-14.109 2.843-1.958 6.276-2.226 9.361-.697zm39.483 1.234c2.95.51 4.533 1.019 6.92 2.2 6.17 3.084 10.354 8.77 11.427 15.503.161.992.268 3.272.215 5.07-.081 3.996.241 4.881 2.977 7.859 1.878 2.038 3.46 4.64 4.024 6.652.187.59.429 2.52.563 4.291.295 3.89.778 5.794 2.065 8.45 1.154 2.36 3.219 4.56 5.526 5.874.831.483 1.529 1.019 1.529 1.207 0 .858-3.273 3.084-6.76 4.613-5.579 2.468-11.668 3.97-18.32 4.507l-1.609.134-.724-1.261c-.43-.698-.886-1.449-1.073-1.717-.269-.375-.027-.75 1.636-2.521 2.441-2.629 3.782-4.587 5.284-7.725 3.675-7.806 3.943-17.033.671-24.623l-.537-1.288.724-.376c2.548-1.314 3.836-4.747 2.897-7.617-.429-1.26-2.226-3.54-2.816-3.54-.108 0-.295-1.181-.376-2.63-.161-3.245-.751-4.908-2.172-6.357-3.005-2.977-7.967-1.984-12.956 2.656l-1.69 1.556-8.905-2.307c-7.323-1.905-9.012-2.414-9.388-2.924-.617-.805-.617-.831.402-1.61 4.775-3.62 13.224-5.31 20.466-4.076zm8.718 9.254c.268.16.67.617.885 1.019.402.805.831 3.38.59 3.755-.107.188-6.008-1.127-7.671-1.717-.912-.321 3.674-3.111 5.445-3.299.134-.027.456.107.751.242zm-32.241 9.736c.59.108-1.556 1.449-3.434 2.12-1.904.67-5.606.75-7.054.133-1.02-.429-1.824-1.582-1.824-2.575 0-.321.456-.965.992-1.475l.993-.885 4.962 1.288c2.71.724 5.15 1.34 5.365 1.394zm27.6 47.852c1.368 2.12 2.28 4.4 2.254 5.472-.027.67.321 1.797 1.046 3.38 1.663 3.567 2.521 6.089 3.299 9.468.375 1.69.644 3.085.617 3.112-.161.161-6.196.939-6.465.831-.187-.08-.429-.777-.536-1.528-.402-2.951-3.085-9.871-4.319-11.105-.697-.697-2.145-.563-2.79.268-.75.966-.723 1.288.457 3.755 1.716 3.514 2.709 7.108 3.138 11.132l.188 1.797-1.744 1.234c-5.176 3.675-12.66 5.391-20.868 4.721-9.924-.805-16.603-4.614-20.036-11.427-2.388-4.748-3.005-11.158-1.53-16.147l.403-1.341 1.69.134 1.663.134 3.567 3.513 3.54 3.541v4.881l-1.099.484c-.59.268-1.556 1.019-2.119 1.663-4.157 4.721-.912 11.856 5.391 11.882 4.078 0 7.028-3.031 7.055-7.242 0-1.421-.134-2.012-.778-3.165-.831-1.529-2.253-2.843-3.594-3.3l-.832-.294V92.94l3.702-3.674 3.675-3.648 6.035-.295c7.886-.349 11.453-1.207 15.96-3.863.885-.51 1.743-.965 1.904-.965.188-.027.697.536 1.126 1.233zm-77.464.08c.295.296.536.886.536 1.342 0 .456.188 1.207.43 1.636.429.859 1.984 1.69 2.735 1.475.242-.053.725-.187 1.02-.295.51-.134.643.027 1.126 1.476.295.885.483 1.636.376 1.716-.269.134-8.45 3.085-8.852 3.165-.322.08-1.395-2.145-1.395-2.896 0-.161.43-.483.966-.725 1.26-.617 1.878-1.984 1.448-3.272-.16-.483-.482-1.046-.697-1.207-.59-.51-.483-2.039.215-2.521.804-.564 1.448-.537 2.092.107zm44.794 5.5l-1.717 1.743-1.582-1.556-1.556-1.529.751-.16c.402-.108 1.905-.188 3.3-.215l2.52-.027-1.716 1.744zm-28.7 11.668c2.253 6.169 4.023 11.399 3.943 11.614-.135.349-18.508 7.162-19.34 7.162-.214 0-.51-.215-.643-.483-.403-.751-8.101-21.914-8.101-22.263 0-.161.241-.376.563-.456.43-.134.751.053 1.476.912 1.528 1.77 1.904 1.743 8.61-.67 3.192-1.154 6.169-2.361 6.625-2.656 1.1-.751 1.529-1.636 1.448-3.005-.053-.643.027-1.207.188-1.26 1.02-.43 1.127-.215 5.23 11.105zm9.227-5.311c.08.482.187 1.555.268 2.36.08.805.214 1.985.322 2.575l.16 1.127-1.555.59c-1.636.617-3.326.992-3.326.724 0-.081-.483-1.475-1.073-3.112l-1.046-2.95 1.663-.537c.912-.295 2.2-.75 2.87-1.046 1.582-.724 1.556-.724 1.717.269zm19.902 8.556c1.341 1.261 1.288 3.299-.16 4.587-1.476 1.341-3.81.831-4.695-1.019-.724-1.503-.295-2.897 1.207-3.97.912-.644 2.763-.429 3.648.402zm23.98 18.481v4.587l-3.272-.081-3.3-.08v-7.215l2.28-.564c1.26-.322 2.575-.724 2.95-.885 1.369-.59 1.342-.617 1.342 4.238zm-22.665-3.085c1.34.242 2.575.51 2.762.564.268.08.322.912.268 3.514l-.08 3.433H61.29l-.08-4.131-.08-4.104.75.108c.43.08 1.851.348 3.166.616z"
                    fill="#737FF1"
                />
                <Path
                    d="M47.128 16.12c-1.475.35-2.414.886-3.326 1.959-2.468 2.79-1.583 7.322 1.77 9.066 4.13 2.146 8.69-.644 8.664-5.338 0-.751-.215-1.824-.456-2.36-.644-1.341-2.656-3.031-3.863-3.246a21.11 21.11 0 01-1.367-.241c-.215-.027-.859.026-1.422.16zm2.548 4.453c.67.617.644 2.066-.107 2.763-1.717 1.583-4.292-1.02-2.629-2.682.644-.644 2.066-.698 2.736-.08z"
                    fill="#737FF1"
                />
                <Path
                    d="M22.826 96.563c-1.663.59-3.487 1.287-4.023 1.528-1.234.617-1.663 1.69-1.073 2.71.751 1.367 1.448 1.341 5.391-.054 1.958-.724 3.836-1.529 4.185-1.85 1.046-.967.536-2.844-.885-3.247-.296-.08-1.878.322-3.595.912zM24.275 103.429c-1.77.671-3.487 1.475-3.81 1.77-1.448 1.342-.24 3.434 1.798 3.166 1.18-.135 7.162-2.522 7.59-2.978.618-.751.591-1.609-.106-2.494-.778-.966-1.637-.885-5.472.536z"
                    fill="#283077"
                />
                <Path
                    d="M40.61 41.307c-.697.268-1.449 1.288-1.449 1.931 0 .242.376.886.859 1.422 2.414 2.763 6.571 2.95 9.307.456 1.395-1.287 1.61-2.146.751-3.138-.831-.966-1.93-.993-3.165-.08-1.368 1.045-2.736 1.1-3.916.107-.939-.778-1.663-.993-2.387-.698zM75.185 41.441c-.859.376-1.154.859-1.154 1.932 0 1.421 3.46 3.567 5.74 3.567 2.414 0 5.526-2.065 5.526-3.675 0-1.958-1.878-2.628-3.648-1.287-1.26.965-2.656.992-3.89.08-1.26-.938-1.609-1.019-2.574-.617zM33.904 70.035c-.59.295-1.18 1.287-1.18 1.984 0 .537 1.288 1.985 2.387 2.656 3.058 1.904 7.028 1.502 9.764-1.02 1.1-.992 1.287-2.011.59-3.03-.724-1.02-1.663-1.02-3.192.027-.751.51-1.69 1.019-2.12 1.1-1.126.294-2.52-.081-3.486-.94-1.046-.912-1.985-1.153-2.763-.777z"
                    fill="#B9BFF8"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_2_103">
                    <Path fill="#fff" d="M0 0H137.333V137.602H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    );
}

export default SvgUnicorn;