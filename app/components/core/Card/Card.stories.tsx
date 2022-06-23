import { Box, Button, CardActions, CardContent, Typography } from "@mui/material"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { Card } from "./Card"

export default {
  title: "Components/Core/Card",
  component: Card,
  argTypes: {
    raised: { control: "boolean" },
    variant: { control: { type: "radio" }, options: ["outlined", "elevation"] },
  },
} as ComponentMeta<typeof Card>

const bull = (
  <Box component="span" sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}>
    •
  </Box>
)

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
)

export const $Card = Template.bind({})
$Card.args = { variant: "elevation" }
