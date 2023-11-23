import React from "react";
import { Card, CardContent, Typography, Stack, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
// import {useRouter} from "next/router";

type Props = {
  title?: string;
  subtitle?: string;
  action?: JSX.Element | any;
  footer?: JSX.Element;
  cardheading?: string | JSX.Element;
  headtitle?: string | JSX.Element;
  headsubtitle?: string | JSX.Element;
  children?: JSX.Element;
  middlecontent?: string | JSX.Element;
};

const cardTable = ({
  title,
  subtitle,
  children,
  action,
  footer,
  cardheading,
  headtitle,
  headsubtitle,
  middlecontent,
}: Props) => {
  // const router = useRouter();

  // const handleAdd = () => {
  //   router.push("/program/Add-program");
  // }
  return (
    <Card sx={{ borderRadius: "20px", margin: "-15px 0px 0px 20px"}}>
      {cardheading ? (
        <CardContent>
          <Typography variant="h5">{headtitle}</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {headsubtitle}
          </Typography>
        </CardContent>
      ) : (
        <CardContent sx={{ p: "30px" }}>
          {title ? (
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              alignItems={"center"}
              mb={3}
            >
              <Box>
                {title ? <Typography variant="h5">{title}</Typography> : ""}

                {subtitle ? (
                  <Typography variant="subtitle2" color="textSecondary">
                    {subtitle}
                  </Typography>
                ) : (
                  ""
                )}
              </Box>
                <Button
                  style={{
                    backgroundColor: "#001E42",
                    color: "white",
                    width: "97px",
                    borderRadius: "10px",
                    fontWeight: 700,
                  }}
                  startIcon={<AddIcon />}
                  // onClick={handleAdd}
                >
                  Add
                </Button>
            </Stack>
          ) : null}

          {children}
        </CardContent>
      )}

      {middlecontent}
      {footer}
    </Card>
  );
};

export default cardTable;
