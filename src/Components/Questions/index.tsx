import React, { useState } from "react";
import Question from "../Question";
import "./styles.scss";

const Questions = () => {
  const commonQuestions = [
    {
      title: "Why Should I Use Splitcart?",
      description:
        "Splitcart makes group purchases easy. We let you focus on the party ahead… Not on getting paid back. Splitcart removes the stress of paying for your whole group and fronting the cost for days, weeks, or even months. You don't need to chase your friends for money - our text and email reminders will do that for you. No need to download more apps or track payments from multiple platforms like Venmo, Cashapp or Zelle. Encourage your group to commit to the event sooner before it's sold out.",
    },
    {
      title: "What is Splitcart?",
      description:
        "Splitcart is a group purchasing tool that allows you and others to pay your share of the cost in real-time at checkout.",
    },
    {
      title: "How Does Splitcart Work?",
      description:
        "Splitcart is a checkout option available on a merchant's website. Simply select Splitcart, invite others to pay with the provided link, and pay your share to confirm the order. After confirming your group order, you can continue to monitor the Splitcart and watch as others pay their share! Once everyone has paid, or after seven days, your Splitcart is complete! No app or signup is needed for you or your participants.",
    },
    {
      title:
        "As the organizer, I thought I was only paying my share. Why am I being charged the full amount?",
      description:
        "No Worries! This is only a pre-authorization and not a finalized amount. We do this to confirm your booking. As others pay, we will automatically adjust this amount. If time expires, unpaid shares are already covered by you, so you don't miss out on your reservation!",
    },
    {
      title: "How do I Invite Someone to my Splitcart?",
      description:
        "During your checkout process, Splitcart will provide a link to copy and share with your group across any messaging platform.",
    },
    {
      title: "How Many People Can I Invite to a Splitcart?",
      description:
        "You can invite as many people to your group as needed. Did you forget to invite someone? No worries, the organizer can always go back and invite more participants.",
    },
    {
      title: "What Happens if Someone Doesn't Pay?",
      description:
        "Each group order has a set time frame for participants to pay their share. If any participants don't pay in time, the organizer's payment method guarantees the order and covers the remaining balance. You will never lose out on an order if someone else fails to pay!",
    },
    {
      title: "Is There a Fee to Use Splitcart?",
      description:
        "To avoid messy payback scenarios, a small fee is charged to split the cost. This fee is independent and will appear as a unique transaction on your payment method. This is a non-refundable fee.",
    },
    {
      title: "Can I Cancel or Edit my Order?",
      description:
        "All cancelations and edits to your order are handled by the merchant. Please see the merchant's policies for changes, cancellations, and refunds.",
    },
  ];

  const merchantQuestions = [
    {
      title: "How does Splitcart work with our website?",
      description:
        "Splitcart maintains a library of pre-built e-commerce storefront integrations. Our integration adds a payment method at checkout, keeping your existing shopping and fulfillment experience intact. If a pre-built integration doesn’t exist for your storefront, Splitcart will discuss steps to integrate with your existing solution.",
    },
    {
      title: "Does Splitcart replace our other checkout payment options?",
      description: "No, you do not need to remove any other checkout method.",
    },
    {
      title:
        "Is there a time limit on how long the Splitcart can be left open?",
      description:
        "Yes, as the merchant you control how long a Splitcart remains open for payor contributions. You can set the contribution window to meet your company’s specific needs.",
    },
    {
      title: "What happens if some of the payors don't pay in time?",
      description:
        "The initial purchaser is required to enter their payment method before they invite others to pay. In the event that not all payors contribute their share, the remaining difference is charged to the initial purchaser. This confirms the purchase for the customer and the funding for your business.",
    },
    {
      title:
        "Does Splitcart provide technical support? What are the support hours?",
      description:
        "Yes, you will have access to our technical support 24/7. We are fully staffed between the hours 8 am- 5 pm CST Monday through Friday. If you have an issue outside of these hours, call, text or email our support and we will get back to you as soon as possible. ",
    },
  ];

  return (
    <>
      <div className="question-main-container">
        <div className="questions-title">Common Customer Questions</div>
        <div className="common questions-container">
          {commonQuestions.map((question) => {
            return (
              <Question
                title={question.title}
                description={question.description}
              />
            );
          })}
        </div>
      </div>
      <div className="bg-color">
        <div className="question-main-container">
          <h2 className="questions-title">Merchant Questions</h2>
          <div className="merchant questions-container">
            {merchantQuestions.map((question) => {
              return (
                <Question
                  title={question.title}
                  description={question.description}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
