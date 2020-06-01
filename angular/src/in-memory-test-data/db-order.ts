export const orderData: any = {
    'content': [
        {
            'order': {
                'modificationCounter': 1,
                'id': 0,
                'bookingId': 0,
                'invitedGuestId': null,
                'bookingToken': null,
                'hostId': 0
            },
            'booking': {
                'modificationCounter': 1,
                'id': 0,
                'name': 'user0',
                'bookingToken': 'CB_20170509_123502555Z',
                'comment': 'Booking Type CSR',
                'bookingDate': 1590489676.190929000,
                'expirationDate': 1590486076.190929000,
                'creationDate': 1590057676.190929000,
                'email': 'user0@mail.com',
                'canceled': false,
                'bookingType': 'COMMON',
                'tableId': 0,
                'orderId': 0,
                'assistants': 3,
                'userId': 0
            },
            'invitedGuest': null,
            'orderLines': [
                {
                    'orderLine': {
                        'modificationCounter': 1,
                        'id': 0,
                        'orderId': 0,
                        'dishId': 0,
                        'amount': 2,
                        'comment': 'please not too spicy'
                    },
                    'order': null,
                    'dish': {
                        'modificationCounter': 1,
                        'id': 0,
                        'name': 'Thai Spicy Basil Fried Rice',
                        'description': `This is a staple of Thai cooking. Adjust the spices to your own tastes for a really
                                        great use for leftover rice!! I get the basil from a local Asian market. It has a different
                                        flavor than that of regular basil and makes all the
                                        difference in this recipe. It is fast and fairly easy to make, but requires constant stirring`,
                        'price': 12.9900000000,
                        'imageId': 0
                    },
                    'extras': [
                        {
                            'modificationCounter': 1,
                            'id': 1,
                            'name': 'Extra curry',
                            'description': `The common feature is the use of complex combinations of spices or herbs,
                                            usually including fresh or dried hot chillies.`,
                            'price': 1.0000000000
                        }
                    ]
                },
                {
                    'orderLine': {
                        'modificationCounter': 1,
                        'id': 1,
                        'orderId': 0,
                        'dishId': 4,
                        'amount': 1,
                        'comment': null
                    },
                    'order': null,
                    'dish': {
                        'modificationCounter': 1,
                        'id': 4,
                        'name': 'Thai Thighs Fish/Prawns',
                        'description': `Grill over a smoker or just brown in the oven - these moreish Fish pieces or prawns
                                        are marinated in a blend of lime and pineapple juice, chilli and ginger.`,
                        'price': 8.9900000000,
                        'imageId': 4
                    },
                    'extras': [
                        {
                            'modificationCounter': 1,
                            'id': 1,
                            'name': 'Extra curry',
                            'description': `The common feature is the use of complex combinations of spices or herbs,
                                            usually including fresh or dried hot chillies.`,
                            'price': 1.0000000000
                        }
                    ]
                },
                {
                    'orderLine': {
                        'modificationCounter': 1,
                        'id': 2,
                        'orderId': 0,
                        'dishId': 2,
                        'amount': 1,
                        'comment': null
                    },
                    'order': null,
                    'dish': {
                        'modificationCounter': 1,
                        'id': 2,
                        'name': 'Thai green chicken curry',
                        'description': `Master this aromatic, creamy & extremely tasty chicken Thai green curry recipe from Jamie Oliver
                                        & treat yourself to an authentic taste of South East Asia.`,
                        'price': 14.7500000000,
                        'imageId': 2
                    },
                    'extras': [
                        {
                            'modificationCounter': 1,
                            'id': 0,
                            'name': 'Tofu',
                            'description': `Also known as bean curd, is a food made by coagulating soy milk and then pressing the
                                            resulting curds into soft white blocks. `,
                            'price': 1.0000000000
                        },
                        {
                            'modificationCounter': 1,
                            'id': 1,
                            'name': 'Extra curry',
                            'description': `The common feature is the use of complex combinations of spices or herbs,
                                            usually including fresh or dried hot chillies.`,
                            'price': 1.0000000000
                        }
                    ]
                }
            ],
            'host': {
                'modificationCounter': 1,
                'id': 0,
                'name': 'user0',
                'bookingToken': 'CB_20170509_123502555Z',
                'comment': 'Booking Type CSR',
                'bookingDate': 1590489676.190929000,
                'expirationDate': 1590486076.190929000,
                'creationDate': 1590057676.190929000,
                'email': 'user0@mail.com',
                'canceled': false,
                'bookingType': 'COMMON',
                'tableId': 0,
                'orderId': 0,
                'assistants': 3,
                'userId': 0
            }
        },
        {
            'order': {
                'modificationCounter': 1,
                'id': 1,
                'bookingId': 3,
                'invitedGuestId': 0,
                'bookingToken': null,
                'hostId': null
            },
            'booking': {
                'modificationCounter': 1,
                'id': 3,
                'name': 'host1',
                'bookingToken': 'CB_20170510_123502655Z',
                'comment': 'Booking Type GSR',
                'bookingDate': 1590489676.190929000,
                'expirationDate': 1590486076.190929000,
                'creationDate': 1590057676.190929000,
                'email': 'host1@mail.com',
                'canceled': false,
                'bookingType': 'INVITED',
                'tableId': 3,
                'orderId': null,
                'assistants': null,
                'userId': 0
            },
            'invitedGuest': {
                'modificationCounter': 1,
                'id': 0,
                'bookingId': 3,
                'guestToken': 'GB_20170510_02350266501Z',
                'email': 'guest0@mail.com',
                'accepted': true,
                'modificationDate': 1590489676.190929000
            },
            'orderLines': [
                {
                    'orderLine': {
                        'modificationCounter': 1,
                        'id': 3,
                        'orderId': 1,
                        'dishId': 4,
                        'amount': 2,
                        'comment': null
                    },
                    'order': null,
                    'dish': {
                        'modificationCounter': 1,
                        'id': 4,
                        'name': 'Thai Thighs Fish/Prawns',
                        'description': `Grill over a smoker or just brown in the oven - these moreish Fish pieces or prawns are
                                        marinated in a blend of lime and pineapple juice, chilli and ginger.`,
                        'price': 8.9900000000,
                        'imageId': 4
                    },
                    'extras': [

                    ]
                },
                {
                    'orderLine': {
                        'modificationCounter': 1,
                        'id': 4,
                        'orderId': 1,
                        'dishId': 2,
                        'amount': 1,
                        'comment': null
                    },
                    'order': null,
                    'dish': {
                        'modificationCounter': 1,
                        'id': 2,
                        'name': 'Thai green chicken curry',
                        'description': `Master this aromatic, creamy & extremely tasty chicken Thai green curry recipe from Jamie Oliver
                                        & treat yourself to an authentic taste of South East Asia.`,
                        'price': 14.7500000000,
                        'imageId': 2
                    },
                    'extras': [
                        {
                            'modificationCounter': 1,
                            'id': 0,
                            'name': 'Tofu',
                            'description': `Also known as bean curd, is a food made by coagulating soy milk and then pressing the
                                            resulting curds into soft white blocks.`,
                            'price': 1.0000000000
                        }
                    ]
                },
                {
                    'orderLine': {
                        'modificationCounter': 1,
                        'id': 5,
                        'orderId': 1,
                        'dishId': 3,
                        'amount': 1,
                        'comment': null
                    },
                    'order': null,
                    'dish': {
                        'modificationCounter': 1,
                        'id': 3,
                        'name': 'Thai Peanut Beef',
                        'description': `This easy no-cook peanut sauce has a terrific authentic Thai taste. It is spicy and peanutty,
                                        and is perfect as a dipping sauce for Beef, shrimp ...or even to use tossed with warm cooked
                                        noodles for a quick pasta dish.`,
                        'price': 12.2500000000,
                        'imageId': 3
                    },
                    'extras': [
                        {
                            'modificationCounter': 1,
                            'id': 0,
                            'name': 'Tofu',
                            'description': `Also known as bean curd, is a food made by coagulating soy milk and then pressing the resulting
                                            curds into soft white blocks.`,
                            'price': 1.0000000000
                        }
                    ]
                }
            ],
            'host': null
        },
        {
            'order': {
                'modificationCounter': 1,
                'id': 2,
                'bookingId': 3,
                'invitedGuestId': 1,
                'bookingToken': null,
                'hostId': null
            },
            'booking': {
                'modificationCounter': 1,
                'id': 3,
                'name': 'host1',
                'bookingToken': 'CB_20170510_123502655Z',
                'comment': 'Booking Type GSR',
                'bookingDate': 1590489676.190929000,
                'expirationDate': 1590486076.190929000,
                'creationDate': 1590057676.190929000,
                'email': 'host1@mail.com',
                'canceled': false,
                'bookingType': 'INVITED',
                'tableId': 3,
                'orderId': null,
                'assistants': null,
                'userId': 0
            },
            'invitedGuest': {
                'modificationCounter': 1,
                'id': 1,
                'bookingId': 3,
                'guestToken': 'GB_20170510_12350266501Z',
                'email': 'guest1@mail.com',
                'accepted': true,
                'modificationDate': 1590489676.190929000
            },
            'orderLines': [
                {
                    'orderLine': {
                        'modificationCounter': 1,
                        'id': 6,
                        'orderId': 2,
                        'dishId': 2,
                        'amount': 1,
                        'comment': null
                    },
                    'order': null,
                    'dish': {
                        'modificationCounter': 1,
                        'id': 2,
                        'name': 'Thai green chicken curry',
                        'description': `Master this aromatic, creamy & extremely tasty chicken Thai green curry recipe from Jamie Oliver &
                                        treat yourself to an authentic taste of South East Asia.`,
                        'price': 14.7500000000,
                        'imageId': 2
                    },
                    'extras': [

                    ]
                }
            ],
            'host': null
        },
        {
            'order': {
                'modificationCounter': 1,
                'id': 3,
                'bookingId': 3,
                'invitedGuestId': 2,
                'bookingToken': null,
                'hostId': null
            },
            'booking': {
                'modificationCounter': 1,
                'id': 3,
                'name': 'host1',
                'bookingToken': 'CB_20170510_123502655Z',
                'comment': 'Booking Type GSR',
                'bookingDate': 1590489676.190929000,
                'expirationDate': 1590486076.190929000,
                'creationDate': 1590057676.190929000,
                'email': 'host1@mail.com',
                'canceled': false,
                'bookingType': 'INVITED',
                'tableId': 3,
                'orderId': null,
                'assistants': null,
                'userId': 0
            },
            'invitedGuest': {
                'modificationCounter': 1,
                'id': 2,
                'bookingId': 3,
                'guestToken': 'GB_20170510_22350266501Z',
                'email': 'guest2@mail.com',
                'accepted': false,
                'modificationDate': 1590489676.190929000
            },
            'orderLines': [
                {
                    'orderLine': {
                        'modificationCounter': 1,
                        'id': 7,
                        'orderId': 3,
                        'dishId': 5,
                        'amount': 1,
                        'comment': null
                    },
                    'order': null,
                    'dish': {
                        'modificationCounter': 1,
                        'id': 5,
                        'name': 'Beer',
                        'description': `Types: Ales, Lagers, Stouts & Porters, Malts. Styles: Amber, Blonde, Brown, Cream, Dark, Fruit,
                                        Golden, Honey, India Pale Ale, Light, Lime, Pale, Pilsner, Red, Strong, Wheat`,
                        'price': 4.0000000000,
                        'imageId': 5
                    },
                    'extras': [

                    ]
                }
            ],
            'host': null
        },
        {
            'order': {
                'modificationCounter': 1,
                'id': 4,
                'bookingId': 3,
                'invitedGuestId': 3,
                'bookingToken': null,
                'hostId': null
            },
            'booking': {
                'modificationCounter': 1,
                'id': 3,
                'name': 'host1',
                'bookingToken': 'CB_20170510_123502655Z',
                'comment': 'Booking Type GSR',
                'bookingDate': 1590489676.190929000,
                'expirationDate': 1590486076.190929000,
                'creationDate': 1590057676.190929000,
                'email': 'host1@mail.com',
                'canceled': false,
                'bookingType': 'INVITED',
                'tableId': 3,
                'orderId': null,
                'assistants': null,
                'userId': 0
            },
            'invitedGuest': {
                'modificationCounter': 1,
                'id': 3,
                'bookingId': 3,
                'guestToken': 'GB_20170510_32350266501Z',
                'email': 'guest3@mail.com',
                'accepted': true,
                'modificationDate': 1590489676.190929000
            },
            'orderLines': [
                {
                    'orderLine': {
                        'modificationCounter': 1,
                        'id': 8,
                        'orderId': 4,
                        'dishId': 5,
                        'amount': 1,
                        'comment': null
                    },
                    'order': null,
                    'dish': {
                        'modificationCounter': 1,
                        'id': 5,
                        'name': 'Beer',
                        'description': `Types: Ales, Lagers, Stouts & Porters, Malts. Styles: Amber, Blonde, Brown, Cream, Dark, Fruit,
                                        Golden, Honey, India Pale Ale, Light, Lime, Pale, Pilsner, Red, Strong, Wheat`,
                        'price': 4.0000000000,
                        'imageId': 5
                    },
                    'extras': [

                    ]
                }
            ],
            'host': null
        },
        {
            'order': {
                'modificationCounter': 1,
                'id': 5,
                'bookingId': 3,
                'invitedGuestId': 4,
                'bookingToken': null,
                'hostId': null
            },
            'booking': {
                'modificationCounter': 1,
                'id': 3,
                'name': 'host1',
                'bookingToken': 'CB_20170510_123502655Z',
                'comment': 'Booking Type GSR',
                'bookingDate': 1590489676.190929000,
                'expirationDate': 1590486076.190929000,
                'creationDate': 1590057676.190929000,
                'email': 'host1@mail.com',
                'canceled': false,
                'bookingType': 'INVITED',
                'tableId': 3,
                'orderId': null,
                'assistants': null,
                'userId': 0
            },
            'invitedGuest': {
                'modificationCounter': 1,
                'id': 4,
                'bookingId': 3,
                'guestToken': 'GB_20170510_42350266501Z',
                'email': 'guest4@mail.com',
                'accepted': false,
                'modificationDate': 1590489676.190929000
            },
            'orderLines': [
                {
                    'orderLine': {
                        'modificationCounter': 1,
                        'id': 9,
                        'orderId': 5,
                        'dishId': 3,
                        'amount': 1,
                        'comment': null
                    },
                    'order': null,
                    'dish': {
                        'modificationCounter': 1,
                        'id': 3,
                        'name': 'Thai Peanut Beef',
                        'description': `This easy no-cook peanut sauce has a terrific authentic Thai taste. It is spicy and peanutty,
                                        and is perfect as a dipping sauce for Beef, shrimp ...or even to use tossed with warm
                                        cooked noodles for a quick pasta dish.`,
                        'price': 12.2500000000,
                        'imageId': 3
                    },
                    'extras': [

                    ]
                }
            ],
            'host': null
        },
        {
            'order': {
                'modificationCounter': 1,
                'id': 6,
                'bookingId': 4,
                'invitedGuestId': 8,
                'bookingToken': null,
                'hostId': null
            },
            'booking': {
                'modificationCounter': 1,
                'id': 4,
                'name': 'host1',
                'bookingToken': 'CB_20170510_123503600Z',
                'comment': 'Booking Type GSR',
                'bookingDate': 1590489676.190929000,
                'expirationDate': 1590486076.190929000,
                'creationDate': 1590057676.190929000,
                'email': 'host1@mail.com',
                'canceled': false,
                'bookingType': 'INVITED',
                'tableId': 3,
                'orderId': null,
                'assistants': null,
                'userId': 0
            },
            'invitedGuest': {
                'modificationCounter': 1,
                'id': 8,
                'bookingId': 4,
                'guestToken': 'GB_20170510_82350266501Z',
                'email': 'guest0@mail.com',
                'accepted': true,
                'modificationDate': 1590489676.190929000
            },
            'orderLines': [
                {
                    'orderLine': {
                        'modificationCounter': 1,
                        'id': 10,
                        'orderId': 6,
                        'dishId': 5,
                        'amount': 2,
                        'comment': null
                    },
                    'order': null,
                    'dish': {
                        'modificationCounter': 1,
                        'id': 5,
                        'name': 'Beer',
                        'description': `Types: Ales, Lagers, Stouts & Porters, Malts. Styles: Amber, Blonde, Brown, Cream, Dark,
                                        Fruit, Golden, Honey, India Pale Ale, Light, Lime, Pale, Pilsner, Red, Strong, Wheat`,
                        'price': 4.0000000000,
                        'imageId': 5
                    },
                    'extras': [

                    ]
                }
            ],
            'host': null
        },
        {
            'order': {
                'modificationCounter': 1,
                'id': 7,
                'bookingId': 4,
                'invitedGuestId': 9,
                'bookingToken': null,
                'hostId': null
            },
            'booking': {
                'modificationCounter': 1,
                'id': 4,
                'name': 'host1',
                'bookingToken': 'CB_20170510_123503600Z',
                'comment': 'Booking Type GSR',
                'bookingDate': 1590489676.190929000,
                'expirationDate': 1590486076.190929000,
                'creationDate': 1590057676.190929000,
                'email': 'host1@mail.com',
                'canceled': false,
                'bookingType': 'INVITED',
                'tableId': 3,
                'orderId': null,
                'assistants': null,
                'userId': 0
            },
            'invitedGuest': {
                'modificationCounter': 1,
                'id': 9,
                'bookingId': 4,
                'guestToken': 'GB_20170510_92350266501Z',
                'email': 'guest1@mail.com',
                'accepted': false,
                'modificationDate': 1590489676.190929000
            },
            'orderLines': [
                {
                    'orderLine': {
                        'modificationCounter': 1,
                        'id': 11,
                        'orderId': 7,
                        'dishId': 3,
                        'amount': 1,
                        'comment': null
                    },
                    'order': null,
                    'dish': {
                        'modificationCounter': 1,
                        'id': 3,
                        'name': 'Thai Peanut Beef',
                        'description': `This easy no-cook peanut sauce has a terrific authentic Thai taste. It is spicy and peanutty, and
                                        is perfect as a dipping sauce for Beef, shrimp ...or even to use tossed with warm cooked noodles
                                        for a quick pasta dish.`,
                        'price': 12.2500000000,
                        'imageId': 3
                    },
                    'extras': [

                    ]
                }
            ],
            'host': null
        }
    ],
    'pageable': {
        'pageNumber': 0,
        'pageSize': 8,
        'sort': [

        ]
    },
    'totalElements': 8
};
