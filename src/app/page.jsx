'use client';

import { useEffect } from "react";
import { RRule, RRuleSet, rrulestr } from "rrule";

export default function Home() {

  useEffect(() => {
    const rule = new RRule({
      freq: RRule.WEEKLY,
      interval: 1,
      // byweekday: [RRule.MO, RRule.FR],
      dtstart: new Date(),
      until: new Date(2025, 12, 31)
    })

    // // Get all occurrence dates (Date instances):
    // console.log('getting all the rule first', rule.all(),);



    // // Get a slice:
    // console.log("get the slice", rule.between(new Date(), new Date(2025, 5, 20)));
    console.log("get rule  string format: -", rule.toString());
    const ruleString = rule.toString();
    const parsedRule = rrulestr(ruleString);
    console.log("Parsed rule to dates: ", parsedRule.all());
    
  }, []);


  return (
    <div className=" space-x-2 flex align-top">
      <h2 className="  text-5xl">hello rrule js testing</h2>
    </div>
  );
}
