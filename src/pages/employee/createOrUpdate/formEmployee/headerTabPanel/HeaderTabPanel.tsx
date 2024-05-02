import { Box, Divider } from "@mui/material";

export default function HeaderTabPanel({
  title,
  required,
}: {
  title: string;
  required?: boolean;
}) {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <h5
            style={{
              margin: 0,
              fontFamily: '"SVN-Sofia Pro Medium", "Public Sans", sans-serif',
              fontWeight: 500,
              lineHeight: 1.35,
              fontSize: "20px",
            }}
          >
            {title}
          </h5>
        </Box>
        {required ? (
          <Box>
            <p
              className=""
              style={{
                margin: 0,
                lineHeight: 1.35714,
                fontSize: "14px",
                fontFamily:
                  '"SVN-Sofia Pro Regular", "Public Sans", sans-serif',
                fontWeight: 400,
                color: "rgb(104, 112, 118)",
              }}
            >
              Required&nbsp;(
              <span
                className=""
                style={{ color: "rgb(229, 72, 77)", fontSize: "16px" }}
              >
                *
              </span>
              )
            </p>
          </Box>
        ) : (
          ""
        )}
      </Box>
      <Divider
        sx={{
          margin: "10px 0",
          borderBottom: "1px solid grey",
        }}
      />
    </>
  );
}
