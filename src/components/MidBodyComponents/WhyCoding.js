import React from "react"
import { Box, Button, Container, Grid, Typography, useMediaQuery } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import WhyCodingSVG from "./WhyCodingSVG"

const useStyles = makeStyles({
  orange: {
    color: "#FB5B16",
  },
})

const WhyCoding = () => {
  const matches600 = useMediaQuery("(max-width:600px)")
  const matches900 = useMediaQuery("(max-width:900px)")
  const classes = useStyles()

  /*Data below*/
  const leftColData = [
    {
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" fill="#FDECF2" />
          <path d="M12.1905 11C9.87962 11 8 12.8804 8 15.1905V32.7143C8 35.0244 9.87962 36.9048 12.1905 36.9048H22.8571V11H12.1905ZM25.1429 11V36.9048H35.8095C38.1204 36.9048 40 35.0244 40 32.7143V15.1905C40 12.8804 38.1204 11 35.8095 11H25.1429ZM32.381 17.8571C34.4815 17.8571 36.1905 19.5661 36.1905 21.6667V26.2381C36.1905 28.3387 34.4815 30.0476 32.381 30.0476C30.2804 30.0476 28.5714 28.3387 28.5714 26.2381V21.6667C28.5714 19.5661 30.2804 17.8571 32.381 17.8571ZM15.5238 17.8616C15.7923 17.839 16.0632 17.9118 16.2872 18.0729C16.5851 18.2878 16.7619 18.6328 16.7619 19V28.9048C16.7619 29.5364 16.2507 30.0476 15.619 30.0476C14.9874 30.0476 14.4762 29.5364 14.4762 28.9048V20.5848L13.6949 20.8467C13.0976 21.0486 12.4481 20.7224 12.2485 20.1235C12.0489 19.5247 12.3729 18.8767 12.9717 18.6771L15.2574 17.9152C15.3445 17.886 15.4343 17.8691 15.5238 17.8616ZM32.381 20.1429C31.5406 20.1429 30.8571 20.8263 30.8571 21.6667V26.2381C30.8571 27.0785 31.5406 27.7619 32.381 27.7619C33.2213 27.7619 33.9048 27.0785 33.9048 26.2381V21.6667C33.9048 20.8263 33.2213 20.1429 32.381 20.1429Z" fill="#EC407A" />
        </svg>
      ),
      heading: "Logic",
      subheading: "for predicting & analysis",
    },
    {
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" fill="#FDECF2" />
          <path d="M12.8778 11C11.2907 11 10 12.2907 10 13.8778V34.0222C10 35.6093 11.2907 36.9 12.8778 36.9H33.0222C34.6093 36.9 35.9 35.6093 35.9 34.0222V19.9818L33.0222 22.8596L33.025 34.0222H12.8778V13.8778H29.796L32.6737 11H12.8778ZM36.3215 11.4215L21.5111 26.232L16.7729 21.4938L14.7382 23.5285L21.5111 30.3013L38.3562 13.4562L36.3215 11.4215Z" fill="#EC407A" />
        </svg>
      ),
      heading: "Evalutaion",
      subheading: "involves making judgement",
    },
    {
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" fill="#FDECF2" />
          <path d="M21 9C20.558 9.00004 20.1341 9.17565 19.8215 9.4882C19.509 9.80076 19.3334 10.2247 19.3333 10.6667V17.3333C19.3334 17.7753 19.509 18.1992 19.8215 18.5118C20.1341 18.8243 20.558 19 21 19H22.6667V22.3333H11C10.558 22.3334 10.1341 22.509 9.82154 22.8215C9.50899 23.1341 9.33338 23.558 9.33333 24V29H7.66667C7.22465 29 6.80076 29.1757 6.4882 29.4882C6.17565 29.8008 6.00004 30.2247 6 30.6667V37.3333C6.00004 37.7753 6.17565 38.1992 6.4882 38.5118C6.80076 38.8243 7.22465 39 7.66667 39H14.3333C14.7753 39 15.1992 38.8243 15.5118 38.5118C15.8243 38.1992 16 37.7753 16 37.3333V30.6667C16 30.2247 15.8243 29.8008 15.5118 29.4882C15.1992 29.1757 14.7753 29 14.3333 29H12.6667V25.6667H22.6667V29H21C20.558 29 20.1341 29.1757 19.8215 29.4882C19.509 29.8008 19.3334 30.2247 19.3333 30.6667V37.3333C19.3334 37.7753 19.509 38.1992 19.8215 38.5118C20.1341 38.8243 20.558 39 21 39H27.6667C28.1087 39 28.5326 38.8243 28.8451 38.5118C29.1577 38.1992 29.3333 37.7753 29.3333 37.3333V30.6667C29.3333 30.2247 29.1577 29.8008 28.8451 29.4882C28.5326 29.1757 28.1087 29 27.6667 29H26V25.6667H36V29H34.3333C33.8913 29 33.4674 29.1757 33.1549 29.4882C32.8423 29.8008 32.6667 30.2247 32.6667 30.6667V37.3333C32.6667 37.7753 32.8423 38.1992 33.1549 38.5118C33.4674 38.8243 33.8913 39 34.3333 39H41C41.442 39 41.8659 38.8243 42.1785 38.5118C42.491 38.1992 42.6666 37.7753 42.6667 37.3333V30.6667C42.6666 30.2247 42.491 29.8008 42.1785 29.4882C41.8659 29.1757 41.442 29 41 29H39.3333V24C39.3333 23.558 39.1577 23.1341 38.8451 22.8215C38.5326 22.509 38.1087 22.3334 37.6667 22.3333H26V19H27.6667C28.1087 19 28.5326 18.8243 28.8451 18.5118C29.1577 18.1992 29.3333 17.7753 29.3333 17.3333V10.6667C29.3333 10.2247 29.1577 9.80076 28.8451 9.4882C28.5326 9.17565 28.1087 9.00004 27.6667 9H21Z" fill="#EC407A" />
        </svg>
      ),
      heading: "Algorithm",
      subheading: "to make steps & rules",
    },
  ]
  const rightColData = [
    {
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" fill="#FDECF2" />
          <path d="M11.9091 8C10.3018 8 9 9.30182 9 10.9091V13.8182C9 14.6211 9.65164 15.2727 10.4545 15.2727H30.8182C31.6211 15.2727 32.2727 14.6211 32.2727 13.8182V10.9091C32.2727 9.30182 30.9709 8 29.3636 8H11.9091ZM10.4545 18.1818C9.65164 18.1818 9 18.8335 9 19.6364V25.4545C9 26.2575 9.65164 26.9091 10.4545 26.9091H22.4688C24.3088 24.2735 27.3593 22.5455 30.8182 22.5455C31.3127 22.5455 31.7971 22.5936 32.2727 22.6619V19.6364C32.2727 18.8335 31.6211 18.1818 30.8182 18.1818H10.4545ZM30.8182 25.4545C26.8022 25.4545 23.5455 28.7113 23.5455 32.7273C23.5455 36.7433 26.8022 40 30.8182 40C34.8342 40 38.0909 36.7433 38.0909 32.7273C38.0909 28.7113 34.8342 25.4545 30.8182 25.4545ZM10.4545 29.8182C9.65164 29.8182 9 30.4698 9 31.2727V34.1818C9 35.7891 10.3018 37.0909 11.9091 37.0909H21.6307C21.0009 35.7673 20.6364 34.2909 20.6364 32.7273C20.6364 31.7164 20.7904 30.7404 21.0653 29.8182H10.4545ZM27.9091 31.2727H33.7273C34.5302 31.2727 35.1818 31.9244 35.1818 32.7273C35.1818 33.5302 34.5302 34.1818 33.7273 34.1818H27.9091C27.1062 34.1818 26.4545 33.5302 26.4545 32.7273C26.4545 31.9244 27.1062 31.2727 27.9091 31.2727Z" fill="#EC407A" />
        </svg>
      ),
      heading: "Abstraction",
      subheading: "To remove unneccessary data",
    },
    {
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" fill="#FDECF2" />
          <path d="M12.196 8C11.6031 8 11.0567 8.31213 10.7519 8.81908L9.23874 11.3454C8.92042 11.8776 8.92042 12.5434 9.23874 13.0757L10.7519 15.602C11.0567 16.1106 11.6031 16.4211 12.196 16.4211H15.4328C16.0257 16.4211 16.5753 16.1089 16.8802 15.602L18.3901 13.0757C18.7084 12.5434 18.7084 11.8793 18.3901 11.3454L16.8802 8.81908C16.5753 8.31213 16.0257 8 15.4328 8H12.196ZM33.3703 8C32.7775 8 32.2311 8.31213 31.9262 8.81908L30.4131 11.3454C30.0948 11.8776 30.0948 12.5418 30.4131 13.0757L31.9262 15.602C32.2311 16.1089 32.7792 16.4211 33.3703 16.4211H36.6072C37.2 16.4211 37.7464 16.1089 38.0512 15.602L39.5644 13.0757C39.8827 12.5434 39.8827 11.8776 39.5644 11.3454L38.0512 8.81908C37.7481 8.31045 37.2 8 36.6072 8H33.3703ZM22.7848 14.7368C22.1919 14.7368 21.6456 15.049 21.3407 15.5559L19.8276 18.0822C19.5092 18.6144 19.5092 19.2786 19.8276 19.8125L21.3407 22.3388C21.6456 22.8458 22.1919 23.1579 22.7848 23.1579H26.0216C26.6145 23.1579 27.1642 22.8458 27.469 22.3388L28.9789 19.8125C29.2972 19.2803 29.2972 18.6161 28.9789 18.0822L27.469 15.5559C27.1642 15.049 26.6145 14.7368 26.0216 14.7368H22.7848ZM12.196 19.7895C11.6031 19.7895 11.0567 20.1016 10.7519 20.6086L9.23874 23.1349C8.92042 23.6671 8.92042 24.3329 9.23874 24.8651L10.7519 27.3914C11.0567 27.9001 11.6031 28.2105 12.196 28.2105H15.4328C16.0257 28.2105 16.5753 27.8984 16.8802 27.3914L18.3901 24.8651C18.7084 24.3329 18.7084 23.6688 18.3901 23.1349L16.8802 20.6086C16.5753 20.1016 16.0257 19.7895 15.4328 19.7895H12.196ZM33.3703 19.7895C32.7775 19.7895 32.2311 20.1016 31.9262 20.6086L30.4131 23.1349C30.0948 23.6671 30.0948 24.3312 30.4131 24.8651L31.9262 27.3914C32.2311 27.8984 32.7792 28.2105 33.3703 28.2105H36.6072C37.2 28.2105 37.7464 27.8984 38.0512 27.3914L39.5644 24.8651C39.8827 24.3329 39.8827 23.6671 39.5644 23.1349L38.0512 20.6086C37.7481 20.0999 37.2 19.7895 36.6072 19.7895H33.3703ZM22.7848 26.5263C22.1919 26.5263 21.6456 26.8384 21.3407 27.3454L19.8276 29.8717C19.5092 30.4039 19.5092 31.0681 19.8276 31.602L21.3407 34.1283C21.6456 34.6352 22.1919 34.9474 22.7848 34.9474H26.0216C26.6145 34.9474 27.1642 34.6352 27.469 34.1283L28.9789 31.602C29.2972 31.0698 29.2972 30.4056 28.9789 29.8717L27.469 27.3454C27.1642 26.8384 26.6145 26.5263 26.0216 26.5263H22.7848ZM12.196 31.5789C11.6031 31.5789 11.0567 31.8911 10.7519 32.398L9.23874 34.9243C8.92042 35.4566 8.92042 36.1224 9.23874 36.6546L10.7519 39.1809C11.0567 39.6896 11.6031 40 12.196 40H15.4328C16.0257 40 16.5753 39.6879 16.8802 39.1809L18.3901 36.6546C18.7084 36.1224 18.7084 35.4582 18.3901 34.9243L16.8802 32.398C16.5753 31.8911 16.0257 31.5789 15.4328 31.5789H12.196ZM33.3703 31.5789C32.7775 31.5789 32.2311 31.8911 31.9262 32.398L30.4131 34.9243C30.0948 35.4566 30.0948 36.1207 30.4131 36.6546L31.9262 39.1809C32.2311 39.6879 32.7792 40 33.3703 40H36.6072C37.2 40 37.7464 39.6879 38.0512 39.1809L39.5644 36.6546C39.8827 36.1224 39.8827 35.4566 39.5644 34.9243L38.0512 32.398C37.7481 31.8894 37.2 31.5789 36.6072 31.5789H33.3703Z" fill="#EC407A" />
        </svg>
      ),
      heading: "Pattern",
      subheading: "To make use of similarities",
    },
    {
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" fill="#FDECF2" />
          <path d="M22.4735 8C14.3474 8.8073 8 15.6617 8 24C8 32.3383 14.3474 39.1927 22.4735 40V8ZM25.6898 8V22.3918H40.0817C39.3258 14.7949 33.2868 8.75584 25.6898 8ZM25.6898 25.6082V40C33.2868 39.2458 39.3258 33.2068 40.0817 25.6082H25.6898Z" fill="#EC407A" />
        </svg>
      ),
      heading: "Decomposition",
      subheading: "Break down a problem",
    },
  ]
  /*Data above*/

  /*Render below*/
  return (
    <Container maxWidth={false} mb={4}>
      <Grid container>
        <Grid item xs={12} textAlign="center" mt={4} mb={2}>
          <Typography variant="h4" fontWeight="500" className={classes.orange}>
            Why Coding?
          </Typography>
        </Grid>
        <Grid item xs={12} textAlign="center" mb={3}>
          <Typography variant="h6" color="black">
            Vidyayan Focuses on developing ‘skills’ rather than ‘syntax’, to make children
          </Typography>
        </Grid>
        <Grid item container xs={12} mb={matches600 ? 1 : 1}>
          <Grid md={0} lg={1} item></Grid>
          <Grid xs={12} md={4} lg={3} item textAlign="center" sx={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
            {leftColData.map((data, index) => {
              return (
                <Grid container mb={matches600 ? 4 : 3} key={index}>
                  <Grid item xs={3}>
                    {data.svg}
                  </Grid>
                  <Grid item xs={9}>
                    <Typography variant="h6" color="initial" textAlign="start" fontWeight="600">
                      {data.heading}
                    </Typography>
                    <Typography variant="subtitle1" color="initial" textAlign="start">
                      {data.subheading}
                    </Typography>
                  </Grid>
                </Grid>
              )
            })}
          </Grid>
          <Grid xs={12} md={4} lg={4} item textAlign="center">
            <WhyCodingSVG />
          </Grid>
          <Grid xs={12} md={4} lg={3} item textAlign="center" sx={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
            {rightColData.map((data, index) => {
              return (
                <Grid container mb={matches600 ? 4 : 3} key={index + 3}>
                  <Grid item xs={3}>
                    {data.svg}
                  </Grid>
                  <Grid item xs={9}>
                    <Typography variant="h6" color="initial" textAlign="start" fontWeight="600">
                      {data.heading}
                    </Typography>
                    <Typography variant="subtitle1" color="initial" textAlign="start">
                      {data.subheading}
                    </Typography>
                  </Grid>
                </Grid>
              )
            })}
          </Grid>
          <Grid md={0} lg={1} item></Grid>
        </Grid>
        <Grid xs={12} item textAlign="center" mt={matches900 ? -1 : -5}>
          <Button size="large" variant="contained" color="primaryOrange" style={{ color: " white ", borderRadius: "10px", textTransform: "none" }}>
            Book a free class
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default WhyCoding
