export const IconEmployee = ({
  width,
  height,
}: {
  width: string | number | undefined;
  height: string | number | undefined;
}) => (
  <svg
    width={width || 20}
    height={height || 20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.83317 6.66675H3.33317C2.4165 6.66675 1.6665 5.91675 1.6665 5.00008V3.33341C1.6665 2.41675 2.4165 1.66675 3.33317 1.66675H5.83317C6.74984 1.66675 7.49984 2.41675 7.49984 3.33341V5.00008C7.49984 5.91675 6.74984 6.66675 5.83317 6.66675Z"
      fill="#94BA2C"
    />
    <path
      d="M17.3335 5.83333H14.3335C13.7835 5.83333 13.3335 5.38332 13.3335 4.83332V3.50001C13.3335 2.95001 13.7835 2.5 14.3335 2.5H17.3335C17.8835 2.5 18.3335 2.95001 18.3335 3.50001V4.83332C18.3335 5.38332 17.8835 5.83333 17.3335 5.83333Z"
      fill="#94BA2C"
    />
    <path
      d="M17.3335 12.0833H14.3335C13.7835 12.0833 13.3335 11.6333 13.3335 11.0833V9.75001C13.3335 9.20001 13.7835 8.75 14.3335 8.75H17.3335C17.8835 8.75 18.3335 9.20001 18.3335 9.75001V11.0833C18.3335 11.6333 17.8835 12.0833 17.3335 12.0833Z"
      fill="#94BA2C"
    />
    <path
      opacity="0.37"
      d="M13.3333 11.0417C13.675 11.0417 13.9583 10.7584 13.9583 10.4167C13.9583 10.0751 13.675 9.79175 13.3333 9.79175H11.0417V4.79175H13.3333C13.675 4.79175 13.9583 4.50841 13.9583 4.16675C13.9583 3.82508 13.675 3.54175 13.3333 3.54175H7.5C7.15833 3.54175 6.875 3.82508 6.875 4.16675C6.875 4.50841 7.15833 4.79175 7.5 4.79175H9.79167V15.0001C9.79167 16.2667 10.8167 17.2917 12.0833 17.2917H13.3333C13.675 17.2917 13.9583 17.0084 13.9583 16.6667C13.9583 16.3251 13.675 16.0417 13.3333 16.0417H12.0833C11.5083 16.0417 11.0417 15.5751 11.0417 15.0001V11.0417H13.3333Z"
      fill="#94BA2C"
    />
    <path
      d="M17.3335 18.3333H14.3335C13.7835 18.3333 13.3335 17.8833 13.3335 17.3333V16C13.3335 15.45 13.7835 15 14.3335 15H17.3335C17.8835 15 18.3335 15.45 18.3335 16V17.3333C18.3335 17.8833 17.8835 18.3333 17.3335 18.3333Z"
      fill="#94BA2C"
    />
  </svg>
);

export const IconSearch = ({
  width = undefined,
  height = undefined,
}: {
  width: string | number | undefined;
  height: string | number | undefined;
}) => (
  <svg
    width={width || 20}
    height={height || 20}
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.3334 9.1665C13.3334 11.7438 11.2441 13.8332 8.66675 13.8332C6.08941 13.8332 4.00008 11.7438 4.00008 9.1665C4.00008 6.58917 6.08941 4.49984 8.66675 4.49984C11.2441 4.49984 13.3334 6.58917 13.3334 9.1665ZM12.4119 13.8544C11.3854 14.6756 10.0834 15.1665 8.66675 15.1665C5.35304 15.1665 2.66675 12.4802 2.66675 9.1665C2.66675 5.8528 5.35304 3.1665 8.66675 3.1665C11.9805 3.1665 14.6667 5.8528 14.6667 9.1665C14.6667 10.5832 14.1758 11.8852 13.3546 12.9116L17.1382 16.695C17.3985 16.9554 17.3985 17.3776 17.1382 17.638C16.8778 17.8982 16.4557 17.8982 16.1953 17.638L12.4119 13.8544Z"
      fill="black"
    />
  </svg>
);

export const IconDate = () => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: 24, flexShrink: 0 }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.99984 1.5C6.27598 1.5 6.49984 1.72386 6.49984 2V3H13.4998V2C13.4998 1.72386 13.7237 1.5 13.9998 1.5C14.276 1.5 14.4998 1.72386 14.4998 2V3H16.8332C17.6616 3 18.3332 3.67157 18.3332 4.5V16.8333C18.3332 17.6618 17.6616 18.3333 16.8332 18.3333H3.1665C2.33808 18.3333 1.6665 17.6618 1.6665 16.8333V4.5C1.6665 3.67157 2.33808 3 3.1665 3H5.49984V2C5.49984 1.72386 5.72369 1.5 5.99984 1.5ZM13.4998 4V4.66667C13.4998 4.94281 13.7237 5.16667 13.9998 5.16667C14.276 5.16667 14.4998 4.94281 14.4998 4.66667V4H16.8332C17.1093 4 17.3332 4.22386 17.3332 4.5V7H2.6665V4.5C2.6665 4.22386 2.89036 4 3.1665 4H5.49984V4.66667C5.49984 4.94281 5.72369 5.16667 5.99984 5.16667C6.27598 5.16667 6.49984 4.94281 6.49984 4.66667V4H13.4998ZM2.6665 8V16.8333C2.6665 17.1095 2.89036 17.3333 3.1665 17.3333H16.8332C17.1093 17.3333 17.3332 17.1095 17.3332 16.8333V8H2.6665ZM9.33317 9.83333C9.33317 9.55719 9.55703 9.33333 9.83317 9.33333H10.1665C10.4426 9.33333 10.6665 9.55719 10.6665 9.83333V10.1667C10.6665 10.4428 10.4426 10.6667 10.1665 10.6667H9.83317C9.55703 10.6667 9.33317 10.4428 9.33317 10.1667V9.83333ZM12.4998 9.33333C12.2237 9.33333 11.9998 9.55719 11.9998 9.83333V10.1667C11.9998 10.4428 12.2237 10.6667 12.4998 10.6667H12.8332C13.1093 10.6667 13.3332 10.4428 13.3332 10.1667V9.83333C13.3332 9.55719 13.1093 9.33333 12.8332 9.33333H12.4998ZM14.6665 9.83333C14.6665 9.55719 14.8904 9.33333 15.1665 9.33333H15.4998C15.776 9.33333 15.9998 9.55719 15.9998 9.83333V10.1667C15.9998 10.4428 15.776 10.6667 15.4998 10.6667H15.1665C14.8904 10.6667 14.6665 10.4428 14.6665 10.1667V9.83333ZM15.1665 12C14.8904 12 14.6665 12.2239 14.6665 12.5V12.8333C14.6665 13.1095 14.8904 13.3333 15.1665 13.3333H15.4998C15.776 13.3333 15.9998 13.1095 15.9998 12.8333V12.5C15.9998 12.2239 15.776 12 15.4998 12H15.1665ZM11.9998 12.5C11.9998 12.2239 12.2237 12 12.4998 12H12.8332C13.1093 12 13.3332 12.2239 13.3332 12.5V12.8333C13.3332 13.1095 13.1093 13.3333 12.8332 13.3333H12.4998C12.2237 13.3333 11.9998 13.1095 11.9998 12.8333V12.5ZM9.83317 12C9.55703 12 9.33317 12.2239 9.33317 12.5V12.8333C9.33317 13.1095 9.55703 13.3333 9.83317 13.3333H10.1665C10.4426 13.3333 10.6665 13.1095 10.6665 12.8333V12.5C10.6665 12.2239 10.4426 12 10.1665 12H9.83317ZM6.6665 12.5C6.6665 12.2239 6.89036 12 7.1665 12H7.49984C7.77598 12 7.99984 12.2239 7.99984 12.5V12.8333C7.99984 13.1095 7.77598 13.3333 7.49984 13.3333H7.1665C6.89036 13.3333 6.6665 13.1095 6.6665 12.8333V12.5ZM4.49984 12C4.22369 12 3.99984 12.2239 3.99984 12.5V12.8333C3.99984 13.1095 4.2237 13.3333 4.49984 13.3333H4.83317C5.10931 13.3333 5.33317 13.1095 5.33317 12.8333V12.5C5.33317 12.2239 5.10931 12 4.83317 12H4.49984ZM3.99984 15.1667C3.99984 14.8905 4.22369 14.6667 4.49984 14.6667H4.83317C5.10931 14.6667 5.33317 14.8905 5.33317 15.1667V15.5C5.33317 15.7761 5.10931 16 4.83317 16H4.49984C4.2237 16 3.99984 15.7761 3.99984 15.5V15.1667ZM7.1665 14.6667C6.89036 14.6667 6.6665 14.8905 6.6665 15.1667V15.5C6.6665 15.7761 6.89036 16 7.1665 16H7.49984C7.77598 16 7.99984 15.7761 7.99984 15.5V15.1667C7.99984 14.8905 7.77598 14.6667 7.49984 14.6667H7.1665ZM9.33317 15.1667C9.33317 14.8905 9.55703 14.6667 9.83317 14.6667H10.1665C10.4426 14.6667 10.6665 14.8905 10.6665 15.1667V15.5C10.6665 15.7761 10.4426 16 10.1665 16H9.83317C9.55703 16 9.33317 15.7761 9.33317 15.5V15.1667ZM12.4998 14.6667C12.2237 14.6667 11.9998 14.8905 11.9998 15.1667V15.5C11.9998 15.7761 12.2237 16 12.4998 16H12.8332C13.1093 16 13.3332 15.7761 13.3332 15.5V15.1667C13.3332 14.8905 13.1093 14.6667 12.8332 14.6667H12.4998Z"
      fill="#0081F1"
    />
  </svg>
);

export const IconDown = (props: any) => (
  <svg
    {...props}
    width={17}
    height={16}
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.76456 3.34414C9.97944 3.5456 9.99033 3.8831 9.78888 4.09799L6.13084 7.99989L9.78888 11.9017C9.99033 12.1167 9.97944 12.4542 9.76456 12.6557C9.54967 12.8571 9.21215 12.8462 9.0107 12.6313L5.0107 8.36466C4.81837 8.15951 4.81837 7.84028 5.0107 7.63512L9.0107 3.36846C9.21215 3.15357 9.54967 3.14269 9.76456 3.34414Z"
      fill="#687076"
    />
  </svg>
);

export const IconError = () => (
  <svg
    width={21}
    height={20}
    style={{ marginLeft: "5px" }}
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.4998 18.3337C15.1022 18.3337 18.8332 14.6027 18.8332 10.0003C18.8332 5.39795 15.1022 1.66699 10.4998 1.66699C5.89746 1.66699 2.1665 5.39795 2.1665 10.0003C2.1665 14.6027 5.89746 18.3337 10.4998 18.3337Z"
      stroke="#FFB7B9"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5 6.66699V10.0003"
      stroke="#FFB7B9"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5 13.333H10.5083"
      stroke="#FFB7B9"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconDownload = () => (
  <svg
    width={15}
    height={16}
    viewBox="0 0 15 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.5002 14.4502C13.7487 14.4502 13.9502 14.2487 13.9502 14.0002C13.9502 13.7517 13.7487 13.5502 13.5002 13.5502L1.5002 13.5502C1.25167 13.5502 1.05019 13.7517 1.05019 14.0002C1.05019 14.2487 1.25167 14.4502 1.50019 14.4502L13.5002 14.4502ZM11.0684 8.06855C11.2441 7.89281 11.2441 7.60789 11.0684 7.43215C10.8926 7.25642 10.6077 7.25642 10.432 7.43215L7.95017 9.91395L7.95017 2.00023C7.95017 1.7517 7.7487 1.55023 7.50017 1.55023C7.25164 1.55023 7.05017 1.7517 7.05017 2.00023L7.05017 9.91395L4.56837 7.43215C4.39263 7.25642 4.10771 7.25642 3.93197 7.43215C3.75624 7.60789 3.75624 7.89281 3.93197 8.06855L7.18197 11.3185C7.35771 11.4943 7.64263 11.4943 7.81837 11.3185L11.0684 8.06855Z"
      fill="#30A46C"
    />
  </svg>
);
