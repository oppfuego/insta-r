import type { LegalDocument } from "./types";

export const deliveryDocument: LegalDocument = {
  "title": "Service Delivery, Refill and Retention Policy",
  "route": "/delivery-policy",
  "effectiveDate": "30 July 2026",
  "lastUpdated": "30 July 2026",
  "intro": [],
  "sections": [
    {
      "id": "purpose-of-this-policy",
      "number": "1",
      "title": "Purpose of This Policy",
      "blocks": [
        {
          "type": "p",
          "text": "This Service Delivery, Refill and Retention Policy explains:"
        },
        {
          "type": "ul",
          "items": [
            "when {{brand}} begins processing an Order;",
            "how the Services are delivered;",
            "the estimated delivery periods;",
            "how delivery is measured;",
            "what happens if an Order is delayed, incomplete or cannot be delivered;",
            "when a refill may be requested;",
            "what is and is not covered by a refill commitment; and",
            "the responsibilities of customers during delivery."
          ]
        },
        {
          "type": "p",
          "text": "This Policy forms part of the agreement between you and:"
        },
        {
          "type": "p",
          "text": "{{legalName}}\nCompany number: {{companyNumber}}\nRegistered office: {{address}}\nEmail: {{email}}"
        },
        {
          "type": "p",
          "text": "{{legalName}} operates the {{brand}} website and Services under the {{brand}} brand."
        },
        {
          "type": "p",
          "text": "This Policy should be read together with our Terms and Conditions and Refund and Cancellation Policy."
        }
      ]
    },
    {
      "id": "definitions",
      "number": "2",
      "title": "Definitions",
      "blocks": [
        {
          "type": "p",
          "text": "In this Policy:"
        },
        {
          "type": "p",
          "text": "“Account” means the Instagram, TikTok or YouTube account, profile or channel associated with an Order."
        },
        {
          "type": "p",
          "text": "“Completion” means delivery of the quantity or result included in the purchased package, as reasonably determined using available Platform information and our delivery records."
        },
        {
          "type": "p",
          "text": "“Content” means the post, Reel, Story, video, channel, profile or other Platform material to which a Service is delivered."
        },
        {
          "type": "p",
          "text": "“Delivery Estimate” means the indicative period displayed for a Service or package during the ordering process."
        },
        {
          "type": "p",
          "text": "“Engagement” means followers, subscribers, likes, views, shares, watch hours or another metric expressly included in an Order."
        },
        {
          "type": "p",
          "text": "“Order” means a request for a Service accepted by {{brand}}."
        },
        {
          "type": "p",
          "text": "“Platform” means Instagram, TikTok, YouTube or another supported third-party social media platform."
        },
        {
          "type": "p",
          "text": "“Refill” means an additional delivery intended to restore an eligible shortfall or qualifying drop during an applicable refill period."
        },
        {
          "type": "p",
          "text": "“Service” means a social media promotion or engagement service made available through {{brand}}."
        },
        {
          "type": "p",
          "text": "“Starting Count” means the relevant publicly visible metric recorded when an Order begins processing."
        }
      ]
    },
    {
      "id": "available-services",
      "number": "3",
      "title": "Available Services",
      "blocks": [
        {
          "type": "p",
          "text": "{{brand}} may provide the following Services:"
        },
        {
          "type": "h3",
          "text": "Instagram"
        },
        {
          "type": "ul",
          "items": [
            "Likes;",
            "Followers;",
            "Reels Views; and",
            "Story Views."
          ]
        },
        {
          "type": "h3",
          "text": "TikTok"
        },
        {
          "type": "ul",
          "items": [
            "Likes;",
            "Followers;",
            "Video Views; and",
            "Shares."
          ]
        },
        {
          "type": "h3",
          "text": "YouTube"
        },
        {
          "type": "ul",
          "items": [
            "Likes;",
            "Subscribers;",
            "Video Views; and",
            "Watch Hours."
          ]
        },
        {
          "type": "p",
          "text": "Not every Service has the same delivery method, completion period, retention characteristics or refill coverage."
        },
        {
          "type": "p",
          "text": "The package description shown before purchase forms part of the Order and should be reviewed carefully."
        }
      ]
    },
    {
      "id": "order-acceptance-and-processing",
      "number": "4",
      "title": "Order Acceptance and Processing",
      "blocks": [
        {
          "type": "p",
          "text": "An Order may begin processing after:"
        },
        {
          "type": "ul",
          "items": [
            "payment has been successfully authorised;",
            "the Order has been accepted by {{brand}};",
            "all required Order Details have been supplied;",
            "any necessary payment, fraud or security checks have been completed; and",
            "the relevant Account or Content is publicly accessible where required."
          ]
        },
        {
          "type": "p",
          "text": "An Order confirmation does not mean that delivery has already started."
        },
        {
          "type": "p",
          "text": "Most Orders are expected to begin processing within 24 hours after acceptance. Certain Orders may require up to 72 hours to begin because of:"
        },
        {
          "type": "ul",
          "items": [
            "the Service type;",
            "the package size;",
            "current order volume;",
            "technical checks;",
            "Platform conditions;",
            "payment verification;",
            "suspected duplicate Orders;",
            "incorrect or incomplete Order Details; or",
            "temporary Service unavailability."
          ]
        },
        {
          "type": "p",
          "text": "An Order may begin automatically shortly after payment. Customers should therefore check all usernames, links, quantities and package details before submitting payment."
        }
      ]
    },
    {
      "id": "delivery-estimates",
      "number": "5",
      "title": "Delivery Estimates",
      "blocks": [
        {
          "type": "p",
          "text": "The Delivery Estimate shown for the selected package at the time of purchase takes priority over any general estimate in this Policy."
        },
        {
          "type": "p",
          "text": "Where no more specific Delivery Estimate is displayed, the following indicative periods apply:"
        },
        {
          "type": "table",
          "headers": [
            "Platform and Service",
            "Indicative Delivery Period"
          ],
          "rows": [
            [
              "Instagram Likes",
              "1–3 days"
            ],
            [
              "Instagram Followers",
              "1–5 days"
            ],
            [
              "Instagram Reels Views",
              "1–3 days"
            ],
            [
              "Instagram Story Views",
              "During the remaining availability of the Story"
            ],
            [
              "TikTok Likes",
              "1–3 days"
            ],
            [
              "TikTok Followers",
              "1–5 days"
            ],
            [
              "TikTok Video Views",
              "1–3 days"
            ],
            [
              "TikTok Shares",
              "1–3 days"
            ],
            [
              "YouTube Likes",
              "1–5 days"
            ],
            [
              "YouTube Subscribers",
              "2–7 days"
            ],
            [
              "YouTube Video Views",
              "1–5 days"
            ],
            [
              "YouTube Watch Hours",
              "7–21 days"
            ]
          ]
        },
        {
          "type": "p",
          "text": "These are calendar-day estimates unless the relevant package expressly states otherwise."
        },
        {
          "type": "p",
          "text": "A Delivery Estimate is not a guaranteed completion deadline unless {{brand}} expressly describes it as guaranteed."
        }
      ]
    },
    {
      "id": "factors-affecting-delivery",
      "number": "6",
      "title": "Factors Affecting Delivery",
      "blocks": [
        {
          "type": "p",
          "text": "Delivery may be faster or slower depending on:"
        },
        {
          "type": "ul",
          "items": [
            "the Platform;",
            "the type and quantity of Engagement;",
            "the size, age and activity of the Account;",
            "the age and accessibility of the Content;",
            "the remaining availability period of a Story;",
            "Platform traffic, outages or technical limitations;",
            "changes to Platform systems, algorithms or policies;",
            "gradual-delivery settings;",
            "security or payment verification;",
            "unusually large or repeated Orders;",
            "account restrictions;",
            "regional limitations;",
            "incorrect Order Details;",
            "other active marketing campaigns; and",
            "circumstances outside {{brand}}’s reasonable control."
          ]
        },
        {
          "type": "p",
          "text": "A delay caused by one of these factors does not automatically mean that the Service has failed."
        },
        {
          "type": "p",
          "text": "{{brand}} will nevertheless take reasonable steps to investigate material delays and complete accepted Orders within the displayed estimate or another reasonable period."
        }
      ]
    },
    {
      "id": "gradual-delivery",
      "number": "7",
      "title": "Gradual Delivery",
      "blocks": [
        {
          "type": "p",
          "text": "An Order may be delivered:"
        },
        {
          "type": "ul",
          "items": [
            "immediately;",
            "in several batches;",
            "at a controlled rate;",
            "continuously over a period; or",
            "through another delivery pattern appropriate to the selected Service."
          ]
        },
        {
          "type": "p",
          "text": "Gradual delivery may be used to:"
        },
        {
          "type": "ul",
          "items": [
            "process larger Orders;",
            "reduce sudden changes to Platform counters;",
            "manage technical capacity;",
            "improve delivery stability; or",
            "respond to Platform conditions."
          ]
        },
        {
          "type": "p",
          "text": "An Order is not incomplete merely because the full quantity does not appear at once."
        },
        {
          "type": "p",
          "text": "Customers must allow the full Delivery Estimate to expire before reporting an Order as incomplete, unless delivery has clearly stopped or another problem is apparent."
        }
      ]
    },
    {
      "id": "large-and-repeated-orders",
      "number": "8",
      "title": "Large and Repeated Orders",
      "blocks": [
        {
          "type": "p",
          "text": "Large Orders may require a longer delivery period than smaller packages."
        },
        {
          "type": "p",
          "text": "Where an Order is materially larger than the standard packages shown on the Website, {{brand}} may:"
        },
        {
          "type": "ul",
          "items": [
            "divide the Order into batches;",
            "provide a separate Delivery Estimate;",
            "limit the delivery rate;",
            "request confirmation of the Account or Content;",
            "pause delivery if Platform conditions create an unusual risk; or",
            "contact the customer to agree an appropriate delivery method."
          ]
        },
        {
          "type": "p",
          "text": "Repeated Orders for the same Account or Content may also be delivered progressively."
        },
        {
          "type": "p",
          "text": "Customers should not assume that a larger Order will be completed at the same rate as a smaller Order."
        }
      ]
    },
    {
      "id": "customer-requirements",
      "number": "9",
      "title": "Customer Requirements",
      "blocks": [
        {
          "type": "p",
          "text": "During delivery, you must:"
        },
        {
          "type": "ul",
          "items": [
            "provide the correct username, profile, channel or Content URL;",
            "ensure the relevant Account or Content exists;",
            "keep the Account or Content publicly accessible where required;",
            "keep the relevant username and URL unchanged;",
            "avoid deleting, replacing or materially editing the relevant Content;",
            "ensure that the Account can receive the selected form of Engagement;",
            "avoid blocking or restricting access needed for delivery;",
            "avoid submitting overlapping Orders for the same Service and destination;",
            "avoid purchasing the same or materially similar Service elsewhere while delivery is active; and",
            "notify {{brand}} promptly if a relevant detail changes."
          ]
        },
        {
          "type": "p",
          "text": "You must not provide a Platform password. {{brand}} does not require your Instagram, TikTok or YouTube password to deliver the Services covered by this Policy."
        }
      ]
    },
    {
      "id": "incorrect-order-details",
      "number": "10",
      "title": "Incorrect Order Details",
      "blocks": [
        {
          "type": "p",
          "text": "You are responsible for checking the Order Details before payment."
        },
        {
          "type": "p",
          "text": "If you provide:"
        },
        {
          "type": "ul",
          "items": [
            "an incorrect username;",
            "an incorrect profile or channel;",
            "an incorrect Content URL;",
            "a private or inaccessible destination;",
            "an expired Story;",
            "deleted Content; or",
            "another incorrect identifier,"
          ]
        },
        {
          "type": "p",
          "text": "delivery may fail, be delayed or be sent to the wrong destination."
        },
        {
          "type": "p",
          "text": "If you identify an error, you must contact {{email}} immediately."
        },
        {
          "type": "p",
          "text": "{{brand}} will attempt to correct an Order where reasonably and technically possible. However, correction is not guaranteed after processing or delivery has started."
        },
        {
          "type": "p",
          "text": "Where Engagement has already been delivered to the destination supplied by the customer, the Service will normally be treated as supplied. {{brand}} cannot normally remove, recover or transfer Engagement after it has been delivered."
        },
        {
          "type": "p",
          "text": "This does not apply where the error was caused by {{brand}}."
        }
      ]
    },
    {
      "id": "public-access-requirements",
      "number": "11",
      "title": "Public Access Requirements",
      "blocks": [
        {
          "type": "p",
          "text": "Unless a package expressly states otherwise:"
        },
        {
          "type": "ul",
          "items": [
            "Instagram profiles must be public;",
            "Instagram posts and Reels must remain publicly accessible;",
            "Instagram Stories must be active and accessible to the public;",
            "TikTok accounts and videos must be public;",
            "YouTube channels and videos must be public; and",
            "geographical, age or other restrictions must not prevent delivery."
          ]
        },
        {
          "type": "p",
          "text": "An Account or Content item must remain accessible until Completion."
        },
        {
          "type": "p",
          "text": "If you make the Account or Content private or inaccessible during delivery, the Order may pause or fail."
        },
        {
          "type": "p",
          "text": "The delivery period may restart or be extended after access is restored."
        }
      ]
    },
    {
      "id": "multiple-providers-and-overlapping-campaigns",
      "number": "12",
      "title": "Multiple Providers and Overlapping Campaigns",
      "blocks": [
        {
          "type": "p",
          "text": "You must not place overlapping orders for the same metric, Account or Content through {{brand}} or another provider while an Order is active."
        },
        {
          "type": "p",
          "text": "Overlapping campaigns may make it impossible to determine:"
        },
        {
          "type": "ul",
          "items": [
            "the Starting Count;",
            "the source of delivered Engagement;",
            "whether {{brand}} completed the Order;",
            "the size of a delivery shortfall; or",
            "whether a later drop qualifies for a Refill."
          ]
        },
        {
          "type": "p",
          "text": "Where delivery cannot be measured reliably because of overlapping campaigns, {{brand}} may reasonably rely on its own processing and delivery records."
        },
        {
          "type": "p",
          "text": "A Refill or refund may be refused where the customer’s overlapping activity prevents reliable verification."
        }
      ]
    },
    {
      "id": "organic-engagement-and-external-campaigns",
      "number": "13",
      "title": "Organic Engagement and External Campaigns",
      "blocks": [
        {
          "type": "p",
          "text": "Accounts and Content may receive organic Engagement, advertising traffic or interactions from other sources while an Order is active."
        },
        {
          "type": "p",
          "text": "{{brand}} does not claim ownership of organic or independently generated Engagement."
        },
        {
          "type": "p",
          "text": "However, where several sources operate simultaneously and individual interactions cannot be attributed, Completion may be assessed using:"
        },
        {
          "type": "ul",
          "items": [
            "the Starting Count;",
            "the change in the relevant public counter;",
            "available Platform analytics;",
            "the timing of delivery;",
            "{{brand}}’s internal processing records; and",
            "any evidence supplied by the customer."
          ]
        },
        {
          "type": "p",
          "text": "The assessment will be made reasonably and in good faith."
        }
      ]
    },
    {
      "id": "measurement-of-delivery",
      "number": "14",
      "title": "Measurement of Delivery",
      "blocks": [
        {
          "type": "p",
          "text": "Where possible, {{brand}} records the relevant metric before, during and after delivery."
        },
        {
          "type": "p",
          "text": "An Order may be considered complete when the available records reasonably show that the purchased quantity has been delivered."
        },
        {
          "type": "p",
          "text": "Platform counters may:"
        },
        {
          "type": "ul",
          "items": [
            "update with a delay;",
            "display rounded figures;",
            "temporarily freeze;",
            "show different figures to different users;",
            "update differently across applications and devices;",
            "later remove or recalculate Engagement; or",
            "report analytics later than the public counter."
          ]
        },
        {
          "type": "p",
          "text": "Customers should allow a reasonable synchronisation period before reporting a discrepancy."
        },
        {
          "type": "p",
          "text": "For YouTube analytics and Watch Hours, this synchronisation period may be longer than for publicly displayed likes or views."
        },
        {
          "type": "p",
          "text": "Screenshots alone may not establish a delivery shortfall if they do not show the date, time, Account, Content and relevant metric."
        }
      ]
    },
    {
      "id": "order-statuses",
      "number": "15",
      "title": "Order Statuses",
      "blocks": [
        {
          "type": "p",
          "text": "An Order may display one of the following or a similar status:"
        },
        {
          "type": "p",
          "text": "Pending: The Order has been received but processing has not yet begun."
        },
        {
          "type": "p",
          "text": "Processing: The Order has entered the delivery system or is undergoing preparation."
        },
        {
          "type": "p",
          "text": "In Progress: Delivery has started but is not yet complete."
        },
        {
          "type": "p",
          "text": "Completed: The purchased quantity has been delivered or the Order has otherwise been fulfilled."
        },
        {
          "type": "p",
          "text": "Partial: Part of the Order has been delivered and the remaining portion requires review or further action."
        },
        {
          "type": "p",
          "text": "Paused: Delivery has temporarily stopped because of a technical, payment, accessibility or compliance issue."
        },
        {
          "type": "p",
          "text": "Cancelled: The Order has been stopped before full delivery."
        },
        {
          "type": "p",
          "text": "Refunded: A full or partial refund has been issued."
        },
        {
          "type": "p",
          "text": "An automated status does not prevent the customer from reporting a genuine discrepancy."
        },
        {
          "type": "p",
          "text": "{{brand}} may correct an inaccurate status after reviewing the Order."
        }
      ]
    },
    {
      "id": "delayed-orders",
      "number": "16",
      "title": "Delayed Orders",
      "blocks": [
        {
          "type": "p",
          "text": "An Order is potentially delayed when:"
        },
        {
          "type": "ul",
          "items": [
            "delivery has not started within the stated starting period; or",
            "the applicable Delivery Estimate has expired and a material part of the Order remains outstanding."
          ]
        },
        {
          "type": "p",
          "text": "If an Order appears delayed, you should first confirm that:"
        },
        {
          "type": "ul",
          "items": [
            "the Account or Content is public;",
            "the username or URL is correct;",
            "the Content still exists;",
            "no relevant Account details have changed;",
            "the Order has not already been delivered;",
            "the full Delivery Estimate has expired; and",
            "no simultaneous campaign is affecting measurement."
          ]
        },
        {
          "type": "p",
          "text": "You may then contact {{email}} and provide the Order number and relevant details."
        },
        {
          "type": "p",
          "text": "{{brand}} will investigate and may:"
        },
        {
          "type": "ul",
          "items": [
            "restart delivery;",
            "continue the existing Order;",
            "correct the Order Details;",
            "provide a revised reasonable estimate;",
            "offer an equivalent replacement with your agreement;",
            "cancel the undelivered portion; or",
            "issue an appropriate refund."
          ]
        }
      ]
    },
    {
      "id": "orders-that-have-not-started",
      "number": "17",
      "title": "Orders That Have Not Started",
      "blocks": [
        {
          "type": "p",
          "text": "If no material delivery has started within 72 hours after Order acceptance, and no longer starting period was disclosed for the selected package, you may request a review."
        },
        {
          "type": "p",
          "text": "Where the delay was not caused by:"
        },
        {
          "type": "ul",
          "items": [
            "incorrect Order Details;",
            "inaccessible Content;",
            "a payment or security review;",
            "a customer-requested change;",
            "a breach of our policies; or",
            "circumstances outside our reasonable control,"
          ]
        },
        {
          "type": "p",
          "text": "you may request:"
        },
        {
          "type": "ul",
          "items": [
            "continued delivery;",
            "an equivalent replacement Service, subject to your agreement; or",
            "cancellation and a refund for the undelivered Order."
          ]
        },
        {
          "type": "p",
          "text": "{{brand}} may request a short reasonable period to verify whether processing or delivery has already begun."
        }
      ]
    },
    {
      "id": "partial-delivery",
      "number": "18",
      "title": "Partial Delivery",
      "blocks": [
        {
          "type": "p",
          "text": "If only part of an Order has been delivered, {{brand}} will normally first attempt to:"
        },
        {
          "type": "ul",
          "items": [
            "restart the Order;",
            "deliver the missing quantity;",
            "correct a technical issue;",
            "provide repeat performance; or",
            "apply an eligible Refill."
          ]
        },
        {
          "type": "p",
          "text": "Where the remaining part cannot be delivered within a reasonable additional period, {{brand}} may provide:"
        },
        {
          "type": "ul",
          "items": [
            "a proportionate refund for the confirmed undelivered part;",
            "an equivalent replacement, with the customer’s agreement; or",
            "another remedy required by applicable law."
          ]
        },
        {
          "type": "p",
          "text": "For example, if 60% of a measurable Order has been delivered and the remaining 40% cannot be supplied, the refund may be calculated by reference to the confirmed undelivered 40%."
        },
        {
          "type": "p",
          "text": "The calculation may be adjusted where different portions of a package have different values or delivery costs."
        }
      ]
    },
    {
      "id": "complete-failure-to-deliver",
      "number": "19",
      "title": "Complete Failure to Deliver",
      "blocks": [
        {
          "type": "p",
          "text": "If no meaningful part of an accepted Order has been delivered and delivery cannot be completed within a reasonable period, the customer may be entitled to:"
        },
        {
          "type": "ul",
          "items": [
            "repeat performance;",
            "a replacement Service with the customer’s agreement; or",
            "a full refund."
          ]
        },
        {
          "type": "p",
          "text": "Account credit may be offered as an optional alternative but will not be imposed on a Consumer instead of a refund where a refund is legally due."
        }
      ]
    },
    {
      "id": "repeat-performance",
      "number": "20",
      "title": "Repeat Performance",
      "blocks": [
        {
          "type": "p",
          "text": "Where a Service has not been performed as agreed, {{brand}} may repeat or correct the performance to the extent necessary to complete the Order."
        },
        {
          "type": "p",
          "text": "Repeat performance may include:"
        },
        {
          "type": "ul",
          "items": [
            "restarting delivery;",
            "delivering a shortfall;",
            "applying an eligible Refill;",
            "correcting the destination;",
            "replacing an unavailable Service; or",
            "reprocessing the Order."
          ]
        },
        {
          "type": "p",
          "text": "Repeat performance will be carried out:"
        },
        {
          "type": "ul",
          "items": [
            "without additional charge;",
            "within a reasonable period; and",
            "without causing significant inconvenience where reasonably possible."
          ]
        },
        {
          "type": "p",
          "text": "Repeat performance may not be available where:"
        },
        {
          "type": "ul",
          "items": [
            "it is technically impossible;",
            "the Account or Content is no longer accessible;",
            "the customer supplied incorrect information;",
            "the customer prevented delivery;",
            "the relevant Platform no longer supports the Service; or",
            "repeat performance would be disproportionate in the circumstances."
          ]
        },
        {
          "type": "p",
          "text": "Where repeat performance is unavailable or unsuccessful, an appropriate price reduction or refund may apply."
        }
      ]
    },
    {
      "id": "price-reduction-and-refund-for-undelivered-services",
      "number": "21",
      "title": "Price Reduction and Refund for Undelivered Services",
      "blocks": [
        {
          "type": "p",
          "text": "A customer may be entitled to a price reduction where:"
        },
        {
          "type": "ul",
          "items": [
            "the Service cannot be repeated or corrected;",
            "repeat performance is impossible;",
            "repeat performance has not been completed within a reasonable period;",
            "repeat performance would cause significant inconvenience; or",
            "a confirmed part of the Order remains permanently undelivered."
          ]
        },
        {
          "type": "p",
          "text": "The price reduction may be:"
        },
        {
          "type": "ul",
          "items": [
            "proportionate to the undelivered quantity;",
            "proportionate to the affected part of the package; or",
            "up to the full price where the customer received no meaningful benefit."
          ]
        },
        {
          "type": "p",
          "text": "Refund eligibility and processing are described in our Refund and Cancellation Policy."
        },
        {
          "type": "p",
          "text": "Nothing in this Policy limits mandatory consumer rights."
        }
      ]
    },
    {
      "id": "natural-drops-and-platform-adjustments",
      "number": "22",
      "title": "Natural Drops and Platform Adjustments",
      "blocks": [
        {
          "type": "p",
          "text": "Engagement may decrease after delivery."
        },
        {
          "type": "p",
          "text": "Drops may occur because:"
        },
        {
          "type": "ul",
          "items": [
            "a user unfollows or unsubscribes;",
            "a user removes a like or other interaction;",
            "a Platform removes suspended, inactive, duplicate or restricted accounts;",
            "a Platform detects or removes invalid activity;",
            "a Platform audits or recalculates metrics;",
            "the customer removes followers or subscribers;",
            "Account or Content settings change;",
            "the Account is restricted;",
            "Content is deleted, edited or made private;",
            "a Platform changes its algorithm or measurement method; or",
            "another circumstance affects the displayed metric."
          ]
        },
        {
          "type": "p",
          "text": "A drop does not automatically mean that the original Order was not delivered."
        },
        {
          "type": "p",
          "text": "A drop is covered only where the relevant package expressly includes a Refill or retention commitment and all eligibility conditions are satisfied."
        }
      ]
    },
    {
      "id": "refill-eligible-services",
      "number": "23",
      "title": "Refill-Eligible Services",
      "blocks": [
        {
          "type": "p",
          "text": "A Refill is available only where the relevant package is expressly marked with wording such as:"
        },
        {
          "type": "ul",
          "items": [
            "“30-Day Refill”;",
            "“Refill Included”;",
            "“Refill Eligible”;",
            "“Retention Guarantee”; or",
            "another substantially similar description."
          ]
        },
        {
          "type": "p",
          "text": "Unless a package states otherwise, refill eligibility may be offered for:"
        },
        {
          "type": "ul",
          "items": [
            "Instagram Followers;",
            "TikTok Followers; and",
            "YouTube Subscribers."
          ]
        },
        {
          "type": "p",
          "text": "The following Services are not automatically refill-eligible:"
        },
        {
          "type": "ul",
          "items": [
            "Instagram Likes;",
            "Instagram Reels Views;",
            "Instagram Story Views;",
            "TikTok Likes;",
            "TikTok Video Views;",
            "TikTok Shares;",
            "YouTube Likes;",
            "YouTube Video Views; and",
            "YouTube Watch Hours."
          ]
        },
        {
          "type": "p",
          "text": "These Services are covered by a Refill only where the selected package expressly says so."
        }
      ]
    },
    {
      "id": "refill-period",
      "number": "24",
      "title": "Refill Period",
      "blocks": [
        {
          "type": "p",
          "text": "Unless a different period is displayed for the selected package, the standard refill period is 30 calendar days after the Order is marked complete."
        },
        {
          "type": "p",
          "text": "The refill period:"
        },
        {
          "type": "ul",
          "items": [
            "begins on the Completion date;",
            "does not restart when a Refill is provided;",
            "does not extend because a request is submitted near the end of the period; and",
            "ends automatically when the stated period expires."
          ]
        },
        {
          "type": "p",
          "text": "A Refill request must be submitted before the refill period ends."
        },
        {
          "type": "p",
          "text": "Submitting a request does not guarantee approval. {{brand}} must first verify that the Order and reported drop meet the eligibility conditions."
        }
      ]
    },
    {
      "id": "what-a-refill-covers",
      "number": "25",
      "title": "What a Refill Covers",
      "blocks": [
        {
          "type": "p",
          "text": "An approved Refill is intended to restore a qualifying drop in the Engagement delivered under an eligible Order."
        },
        {
          "type": "p",
          "text": "A Refill does not:"
        },
        {
          "type": "ul",
          "items": [
            "create a new Order;",
            "increase the original purchased quantity;",
            "cover organic followers or subscribers;",
            "guarantee that every individual interaction will remain permanently;",
            "compensate for general Account performance;",
            "extend the original refill period;",
            "guarantee a commercial result;",
            "guarantee Platform approval or monetisation; or",
            "provide a cash value separate from the original Order."
          ]
        },
        {
          "type": "p",
          "text": "The maximum refill quantity will not exceed the verified eligible shortfall connected with the original Order."
        }
      ]
    },
    {
      "id": "refill-measurement",
      "number": "26",
      "title": "Refill Measurement",
      "blocks": [
        {
          "type": "p",
          "text": "To assess a Refill request, {{brand}} may consider:"
        },
        {
          "type": "ul",
          "items": [
            "the Starting Count;",
            "the purchased quantity;",
            "the count recorded at Completion;",
            "the current count;",
            "previous Refills;",
            "organic changes;",
            "external campaigns;",
            "Platform adjustments;",
            "delivery records; and",
            "evidence supplied by the customer."
          ]
        },
        {
          "type": "p",
          "text": "A Refill restores only the eligible delivered quantity. It does not guarantee restoration of an Account to a level that included unrelated organic growth."
        },
        {
          "type": "p",
          "text": "For example, if an Account received substantial organic growth after Completion and later declined, the entire decline may not be attributable to the {{brand}} Order."
        }
      ]
    },
    {
      "id": "refill-request-procedure",
      "number": "27",
      "title": "Refill Request Procedure",
      "blocks": [
        {
          "type": "p",
          "text": "To request a Refill, email {{email}} and provide:"
        },
        {
          "type": "ul",
          "items": [
            "the Order number;",
            "the email address used for the Order;",
            "the relevant Platform;",
            "the username, channel or Content URL;",
            "the date the drop was noticed;",
            "the approximate amount of the drop; and",
            "dated screenshots or analytics where available."
          ]
        },
        {
          "type": "p",
          "text": "{{brand}} may request additional information reasonably necessary to verify the request."
        },
        {
          "type": "p",
          "text": "You must keep the Account or Content public and unchanged while the request is reviewed and while an approved Refill is delivered."
        }
      ]
    },
    {
      "id": "refill-exclusions",
      "number": "28",
      "title": "Refill Exclusions",
      "blocks": [
        {
          "type": "p",
          "text": "A Refill may be refused where:"
        },
        {
          "type": "ul",
          "items": [
            "the selected package was not refill-eligible;",
            "the refill period has expired;",
            "the Account or Content is private or inaccessible;",
            "the Account, username, channel or URL has changed;",
            "the Content has been deleted, replaced or materially altered;",
            "the Account or Content has been suspended, restricted or sanctioned;",
            "the customer supplied incorrect Order Details;",
            "the customer manually removed followers, subscribers or interactions;",
            "the customer blocked delivered accounts;",
            "another provider or overlapping campaign was used;",
            "organic or external activity prevents reliable measurement;",
            "the drop is caused by a Platform audit, enforcement action or material policy change that makes repeat delivery impossible;",
            "the Order has already been fully refunded;",
            "the payment has been charged back or formally disputed;",
            "the customer has breached the Terms and Conditions or Acceptable Use Policy;",
            "the reported difference results only from rounding or delayed analytics;",
            "the claimed quantity exceeds the verified eligible shortfall; or",
            "another package-specific exclusion was clearly disclosed before purchase."
          ]
        },
        {
          "type": "p",
          "text": "A Refill will not be unreasonably refused where {{brand}} can reliably verify that an eligible delivered quantity dropped during the applicable refill period."
        }
      ]
    },
    {
      "id": "repeated-refill-requests",
      "number": "29",
      "title": "Repeated Refill Requests",
      "blocks": [
        {
          "type": "p",
          "text": "More than one Refill may be provided during the applicable refill period where:"
        },
        {
          "type": "ul",
          "items": [
            "the package remains eligible;",
            "a further qualifying drop is verified;",
            "the refill period has not expired; and",
            "the exclusions in this Policy do not apply."
          ]
        },
        {
          "type": "p",
          "text": "{{brand}} may combine several small refill requests into one delivery."
        },
        {
          "type": "p",
          "text": "The total amount of Engagement delivered through repeated Refills will be limited to the amount reasonably required to restore verified eligible drops. Repeated Refills do not create an entitlement to unlimited additional Engagement."
        }
      ]
    },
    {
      "id": "refill-delivery-time",
      "number": "30",
      "title": "Refill Delivery Time",
      "blocks": [
        {
          "type": "p",
          "text": "Approved Refills normally begin within a reasonable period after verification."
        },
        {
          "type": "p",
          "text": "The time required depends on:"
        },
        {
          "type": "ul",
          "items": [
            "the Platform;",
            "the Service;",
            "the refill quantity;",
            "current technical availability;",
            "Account accessibility; and",
            "Platform conditions."
          ]
        },
        {
          "type": "p",
          "text": "A Refill may be delivered gradually."
        },
        {
          "type": "p",
          "text": "Unless a different period is provided during support correspondence, customers should allow up to 7 days for an approved Refill to begin or complete."
        },
        {
          "type": "p",
          "text": "Where an approved Refill cannot be provided, {{brand}} will consider another appropriate remedy under the Refund and Cancellation Policy."
        }
      ]
    },
    {
      "id": "instagram-story-views",
      "number": "31",
      "title": "Instagram Story Views",
      "blocks": [
        {
          "type": "p",
          "text": "Instagram Story Views are time-sensitive because Stories remain available only for a limited period."
        },
        {
          "type": "p",
          "text": "To receive Story Views:"
        },
        {
          "type": "ul",
          "items": [
            "the Story must be active;",
            "the Story must be publicly accessible;",
            "the Account must remain public;",
            "sufficient time must remain before the Story expires;",
            "the Story must not be restricted to Close Friends or another limited audience; and",
            "the Story must not be deleted or replaced during delivery."
          ]
        },
        {
          "type": "p",
          "text": "Customers should place a Story Views Order as soon as reasonably possible after publishing the Story."
        },
        {
          "type": "p",
          "text": "{{brand}} does not guarantee Completion where the Order is placed shortly before the Story expires."
        },
        {
          "type": "p",
          "text": "Story Views are not refill-eligible unless the package expressly states otherwise."
        },
        {
          "type": "p",
          "text": "If a Story expires or is deleted because of an action taken by the customer, the Order may not qualify for a refund."
        },
        {
          "type": "p",
          "text": "If {{brand}} fails to deliver an accepted Order despite sufficient remaining time and correct Order Details, {{brand}} may:"
        },
        {
          "type": "ul",
          "items": [
            "deliver the Service to another eligible Story with the customer’s agreement;",
            "provide an equivalent replacement;",
            "issue a proportionate refund; or",
            "issue a full refund where no meaningful delivery occurred."
          ]
        },
        {
          "type": "p",
          "text": "A complaint concerning Story Views should be submitted as soon as possible and, where practicable, within 48 hours after the Story expires."
        }
      ]
    },
    {
      "id": "youtube-watch-hours",
      "number": "32",
      "title": "YouTube Watch Hours",
      "blocks": [
        {
          "type": "p",
          "text": "YouTube Watch Hours may require longer and more gradual delivery than other Services."
        },
        {
          "type": "p",
          "text": "During delivery:"
        },
        {
          "type": "ul",
          "items": [
            "the relevant channel must remain public;",
            "the relevant videos must remain public and accessible;",
            "the videos must not be deleted or materially restricted;",
            "sufficient suitable Content must remain available;",
            "the customer must not run overlapping watch-time campaigns; and",
            "the customer must allow for delayed analytics reporting."
          ]
        },
        {
          "type": "p",
          "text": "{{brand}} may divide Watch Hours delivery across more than one eligible video where this is included in the package or agreed with the customer."
        },
        {
          "type": "p",
          "text": "YouTube controls:"
        },
        {
          "type": "ul",
          "items": [
            "analytics reporting;",
            "measurement of watch time;",
            "validity assessments;",
            "monetisation eligibility;",
            "account reviews;",
            "metric adjustments; and",
            "the YouTube Partner Programme."
          ]
        },
        {
          "type": "p",
          "text": "Completion of a {{brand}} Watch Hours Order does not guarantee:"
        },
        {
          "type": "ul",
          "items": [
            "that all hours will be treated as qualifying public watch hours;",
            "acceptance into a monetisation programme;",
            "continued monetisation;",
            "advertising revenue;",
            "permanent retention of the metric; or",
            "the absence of a Platform review or adjustment."
          ]
        },
        {
          "type": "p",
          "text": "YouTube Watch Hours are not refill-eligible unless the selected package expressly states otherwise."
        },
        {
          "type": "p",
          "text": "Where the Platform has not yet updated its analytics, {{brand}} may request that the customer allow a reasonable reporting period before the Order is treated as incomplete."
        }
      ]
    },
    {
      "id": "platform-removal-or-adjustment",
      "number": "33",
      "title": "Platform Removal or Adjustment",
      "blocks": [
        {
          "type": "p",
          "text": "A Platform may remove or recalculate Engagement after delivery."
        },
        {
          "type": "p",
          "text": "Where this happens, {{brand}} will apply any refill commitment included with the selected package."
        },
        {
          "type": "p",
          "text": "Where no refill commitment applies, later Platform removal does not by itself establish that {{brand}} failed to deliver the original Order."
        },
        {
          "type": "p",
          "text": "This does not exclude a remedy where:"
        },
        {
          "type": "ul",
          "items": [
            "the Order was never delivered;",
            "{{brand}} materially misdescribed the Service;",
            "{{brand}} failed to exercise reasonable care and skill; or",
            "applicable law otherwise requires a remedy."
          ]
        }
      ]
    },
    {
      "id": "service-changes-and-discontinuation",
      "number": "34",
      "title": "Service Changes and Discontinuation",
      "blocks": [
        {
          "type": "p",
          "text": "A Platform may change its technical systems or rules in a way that affects a Service."
        },
        {
          "type": "p",
          "text": "{{brand}} may temporarily suspend, modify or discontinue a Service where necessary because of:"
        },
        {
          "type": "ul",
          "items": [
            "technical unavailability;",
            "Platform changes;",
            "legal or compliance concerns;",
            "security risks;",
            "unreasonable delivery instability; or",
            "another legitimate operational reason."
          ]
        },
        {
          "type": "p",
          "text": "Where an already accepted Order is affected, {{brand}} may:"
        },
        {
          "type": "ul",
          "items": [
            "complete the Order using an equivalent delivery method;",
            "offer a replacement Service with the customer’s agreement;",
            "cancel the undelivered portion; or",
            "provide an appropriate refund."
          ]
        },
        {
          "type": "p",
          "text": "A materially different replacement will not be imposed without the customer’s agreement."
        }
      ]
    },
    {
      "id": "delivery-complaints",
      "number": "35",
      "title": "Delivery Complaints",
      "blocks": [
        {
          "type": "p",
          "text": "A delivery complaint should normally be submitted:"
        },
        {
          "type": "ul",
          "items": [
            "after the applicable Delivery Estimate has expired;",
            "within 30 days after the Order is marked complete; or",
            "sooner where the Service is time-sensitive."
          ]
        },
        {
          "type": "p",
          "text": "The 30-day reporting period does not remove any longer mandatory legal right."
        },
        {
          "type": "p",
          "text": "The complaint should include:"
        },
        {
          "type": "ul",
          "items": [
            "the customer’s name;",
            "the Order number;",
            "the email address used for payment;",
            "the Platform;",
            "the username, profile, channel or Content URL;",
            "a description of the problem;",
            "the amount believed to be missing;",
            "relevant dates; and",
            "supporting evidence where available."
          ]
        },
        {
          "type": "p",
          "text": "Complaints should be sent to {{email}}."
        }
      ]
    },
    {
      "id": "investigation-of-delivery-complaints",
      "number": "36",
      "title": "Investigation of Delivery Complaints",
      "blocks": [
        {
          "type": "p",
          "text": "When investigating a complaint, {{brand}} may review:"
        },
        {
          "type": "ul",
          "items": [
            "Order records;",
            "payment status;",
            "processing timestamps;",
            "Starting and Completion counts;",
            "delivery logs;",
            "Platform availability;",
            "Account and Content accessibility;",
            "package conditions;",
            "previous customer communications;",
            "overlapping campaigns;",
            "screenshots and analytics supplied by the customer; and",
            "other reasonably relevant information."
          ]
        },
        {
          "type": "p",
          "text": "{{brand}} may request additional evidence where necessary."
        },
        {
          "type": "p",
          "text": "A customer must not deliberately alter the Account, Content or relevant metric in a way that prevents investigation."
        }
      ]
    },
    {
      "id": "chargebacks-and-payment-disputes",
      "number": "37",
      "title": "Chargebacks and Payment Disputes",
      "blocks": [
        {
          "type": "p",
          "text": "Customers are encouraged to contact {{brand}} before initiating a chargeback or payment dispute so that we have a reasonable opportunity to investigate and provide an appropriate remedy."
        },
        {
          "type": "p",
          "text": "Nothing in this Policy prevents a customer from lawfully contacting their card issuer, payment provider, regulator or court."
        },
        {
          "type": "p",
          "text": "Where a chargeback or formal payment dispute is opened:"
        },
        {
          "type": "ul",
          "items": [
            "the affected Order may be paused;",
            "refill processing may be suspended;",
            "duplicate refund processing may be prevented; and",
            "{{brand}} may provide relevant Order and delivery records to the payment service participants handling the dispute."
          ]
        },
        {
          "type": "p",
          "text": "An Order will not be both refunded directly and reimbursed through a successful chargeback."
        }
      ]
    },
    {
      "id": "consumer-rights",
      "number": "38",
      "title": "Consumer Rights",
      "blocks": [
        {
          "type": "p",
          "text": "Nothing in this Policy excludes or restricts rights that a Consumer has under applicable law."
        },
        {
          "type": "p",
          "text": "Where a Service has not been supplied with reasonable care and skill or has not been supplied as agreed, the Consumer may be entitled to:"
        },
        {
          "type": "ul",
          "items": [
            "repeat performance;",
            "Completion of the Service;",
            "an appropriate price reduction;",
            "a partial refund; or",
            "a full refund where no meaningful Service was supplied."
          ]
        },
        {
          "type": "p",
          "text": "Contractual refill coverage is additional to, and does not replace, mandatory legal remedies."
        }
      ]
    },
    {
      "id": "business-customers",
      "number": "39",
      "title": "Business Customers",
      "blocks": [
        {
          "type": "p",
          "text": "Where the customer is acting for business purposes, the customer is responsible for:"
        },
        {
          "type": "ul",
          "items": [
            "reviewing the package conditions;",
            "selecting a commercially suitable Service;",
            "maintaining independent records;",
            "ensuring that the Service is suitable for the intended campaign;",
            "complying with applicable advertising and Platform rules; and",
            "avoiding reliance on Engagement as a guarantee of revenue or business performance."
          ]
        },
        {
          "type": "p",
          "text": "Any contractual limitation applicable to Business Customers is set out in the Terms and Conditions."
        }
      ]
    },
    {
      "id": "changes-to-this-policy",
      "number": "40",
      "title": "Changes to This Policy",
      "blocks": [
        {
          "type": "p",
          "text": "{{brand}} may update this Policy to reflect:"
        },
        {
          "type": "ul",
          "items": [
            "changes to the Services;",
            "new package types;",
            "technical developments;",
            "Platform changes;",
            "legal requirements;",
            "revised refill coverage; or",
            "improvements to customer protection and clarity."
          ]
        },
        {
          "type": "p",
          "text": "The current version will be published on the Website with its effective date."
        },
        {
          "type": "p",
          "text": "A change will not normally reduce the delivery or refill coverage expressly included with an Order already accepted and paid for."
        }
      ]
    },
    {
      "id": "contact-us",
      "number": "41",
      "title": "Contact Us",
      "blocks": [
        {
          "type": "p",
          "text": "Questions, delivery complaints and Refill requests may be sent to:"
        },
        {
          "type": "p",
          "text": "{{legalName}}\nCompany number: {{companyNumber}}\n{{address}}"
        },
        {
          "type": "p",
          "text": "Email: {{email}}\nWebsite: {{domain}}"
        }
      ]
    }
  ]
};
