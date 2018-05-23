var carouseldata = new Vue({
  el: '#wrapper',
  data: {
    whitepaper : 'docs/whitepaper.pdf',
    lightpaper : 'docs/lightpaper.pdf',
    links : [
      {
        fa : 'fa-btc',
        href : 'https://bitcointalk.org/index.php?topic=4094145'
      },
      {
        fa : 'fa-reddit-alien',
        href : 'https://www.reddit.com/user/Joptoken'
      },
      {
        fa : 'fa-medium-m',
        href : 'https://medium.com/@joptoken'
      },
      {
        fa : 'fa-telegram-plane',
        href : 'https://t.me/joptoken'
      },
      {
        fa : 'fa-facebook-f',
        href : 'https://www.facebook.com/JopMe/'
      },
      {
        fa : 'fa-instagram',
        href : 'https://www.instagram.com/jop_nyc/'
      },
      {
        fa : 'fa-twitter',
        href : 'https://twitter.com/jop_token'
      },
    ],
    partners : {
      path : 'images/partners/',
      data : [
        'valtech',
        'legolas',
        'ledger',
        'hackrenproof',
      ]
    },
    list : {
      team : {
        path : 'images/team/',
        data : {
          main : [
            {
              classObject : 'col-md-4',
              image : 'sebastian',
              name : 'Sebastian Lombardo',
              title : 'Co-Founder',
              link : 'https://www.linkedin.com/in/sebastianlombardo',
              content : 'A serial entrepreneur in the digital age, raised over $200M and sold 4 tech companies to-date. Currently Chairman of the Board and CEO of Valtech. Market capitalization went from $35M to $650M in 4 years.'
            },
            {
              classObject : 'col-md-4',
              image : 'canel',
              name : 'Canel Frichet',
              title : 'Co-Founder',
              link : 'https://www.linkedin.com/in/canel-frichet-1489a915',
              content : 'Digital Entrepreneur and former COO of Winamax, Europe\'s leading online poker company. “Marketing Personality of the Year” in 2011 and “40 people under 40 Who Will Make the Tomorrow’s Economy”.'
            },
            {
              classObject : 'col-md-4',
              image : 'me',
              name : 'Jeremy Piednoel',
              title : 'CTO',
              link : 'https://www.linkedin.com/in/jeremypiednoel',
              content : 'Mobile development wizard and long-term encryption expert, Jeremy recently developed a solar-powered eco-efficient Ethereum mining center. Jeremy leads a team of 20 blockchain experts from Valtech UK.'
            },
            {
              classObject : 'col-md-3',
              image : 'harry',
              name : 'Harry Pearce',
              title : 'Product Strategist',
              link : 'https://www.linkedin.com/in/harry-pearce-86226b92',
            },
            {
              classObject : 'col-md-3',
              image : 'nikita',
              name : 'Nikita Wallin',
              title : 'Business Operations',
              link : 'https://www.linkedin.com/in/nikita-wallin-61462027',
            },
            {
              classObject : 'col-md-3',
              image : 'rune',
              name : 'Rune Degett',
              title : 'Creative Director',
              link : 'http://degett.com/',
              icon : 'portfolio.svg'
            },
            {
              classObject : 'col-md-3',
              image : 'michelle',
              name : 'Michelle Dong',
              title : 'VP Marketing',
              link : 'https://www.linkedin.com/in/michellemariedong',
            },
            {
              classObject : 'col-md-3',
              image : 'xi',
              name : 'Xi Zhang',
              title : 'UX/UI Designer',
              link : 'https://www.linkedin.com/in/zhang-xi',
            },
            {
              classObject : 'col-md-3',
              image : 'ignacio',
              name : 'Ignacio Larralde',
              title : 'UX / Business Analyst',
              link : 'https://www.linkedin.com/in/ignacio-larralde',
            },
            {
              classObject : 'col-md-3',
              image : 'charlene',
              name : 'Charlene Pascal',
              title : 'Customer Service',
              link : 'https://www.linkedin.com/in/charlenegpascal',
            },
            {
              classObject : 'col-md-3',
              image : 'rob',
              name : 'Rob Macchia',
              title : 'Customer Service',
              link : 'https://www.linkedin.com/in/rob-macchia-04339b13b',
            },
            {
              classObject : 'col-md-3',
              image : 'chuliang',
              name : 'Chuliang Yang',
              title : 'Android Developer',
              link : 'https://www.linkedin.com/in/mrcarlosyang',
            },
            {
              classObject : 'col-md-3',
              image : 'hugo',
              name : 'Hugo Pastor',
              title : 'Android Developer',
              link : 'https://www.linkedin.com/in/hugodamianpastor',
            },
            {
              classObject : 'col-md-3',
              image : 'asiel',
              name : 'Asiel Gil',
              title : 'Mobile Developer',
              link : 'https://www.linkedin.com/in/asiel-gil-03484443',
            },
            {
              classObject : 'col-md-3',
              image : 'christopher',
              name : 'Christopher Brookes',
              title : 'Full Stack Developer',
              link : 'https://www.linkedin.com/in/christopherbrookes',
            },
            {
              classObject : 'col-md-3',
              image : 'eric',
              name : 'Eric Lifszyc',
              title : 'Back-End Developer',
              link : 'https://www.linkedin.com/in/eric-lifszyc-13561a44/',
            },
            {
              classObject : 'col-md-3',
              image : 'cristian',
              name : 'Cristian Buffa',
              title : 'Front-End Developer',
              link : 'https://www.linkedin.com/in/cristian-buffa',
            },
            {
              classObject : 'col-md-3',
              image : 'fede',
              name : 'Federico Orlandau',
              title : 'DevOps',
              link : 'https://www.linkedin.com/in/federico-orlandau',
            }
          ],
        }
      },
      funds : {
        path : 'images/icons/chart/',
        data : [
          {
            amount : '40',
            image : '40.svg',
            title : 'Platform',
            content : 'Jop will develop and integrate smart contracts, token payments, voting systems, and perpetually optimize the platform infrastructure.'
          },
          {
            amount : '40',
            image : '40-2.svg',
            title : 'User Acquisition',
            content : 'Upon entering each new market, Jop will run comprehensive user acquisition campaigns to ignite liquidity.'
          },
          {
            amount : '15',
            image : '15.svg',
            title : 'Operations',
            content : 'Jop will develop necessary operations teams and resources to tailor the platform experience to the unique conditions of new markets.'
          },
          {
            amount : '5',
            image : '5.svg',
            title : 'Security and Legal',
            content : 'Jop will be regularly audited to ensure operations confirm to evolving regulations of every active market.'
          }
        ]
      }
    },
    carousel : {
      user: {
        path : 'images/content/carousel/user/',
        size : 6
      },
      jopper: {
        path : 'images/content/carousel/jopper/',
        size : 6
      },
      moments: {
        path : 'images/content/carousel/moments/',
        size : 8
      },
      comments : {
        path : 'images/content/carousel/comments/',
        datas :  [
          {
            image : '1',
            name : 'Ina Jordan, Financial District',
            content : 'I can\'t say enough good things about John! He went the extra mile to ensure our move was a success.'
          },
          {
            image : '2',
            name : 'Cole Morgan, Choreographer',
            content : 'Did an awesome job, very thorough. Pays attention to the details.'
          },
          {
            image : '3',
            name : 'Tom Peterson, Editor',
            content : 'My place is bright and shining. She was in and out in 2 hours'
          },
          {
            image : '4',
            name : 'Katherine Norton, West Village',
            content : 'Gave me a great updo for a last-minute gala invite! Got lots of compliments.'
          },
          {
            image : '5',
            name : 'Shakerra Dajon Harris, Philadelphia',
            content : 'She is very nice , and make me feel comfortable when I come to clean her house.'
          },
          {
            image : '6',
            name : 'Marvin e Valentine, Philadelphia',
            content : 'She was great! very great communication... that\'s a plus in a customer... thank you for giving me a chance to show my ability in cleaning.'
          },
          {
            image : '7',
            name : 'David Peter Hay, Waltham',
            content : 'good kid was on time, pleasant, curb to curb like he described. good customer.'
          },
          {
            image : '8',
            name : 'Edmar Wasington Matis, Chelsea',
            content : 'Great person and customer. Thanks for everything Laura.'
          },
          {
            image : '9',
            name : 'Wesley Ayala, Dracut',
            content : 'This is the fourth time I\'ve delivered for Laura. She really is a kind sweet individual. Should she choose you and you have the privelege of doing a task for her, do not hesitate to accept as she is nothing less than understanding and considerate. Exceptional. :-)'
          },
          {
            image : '10',
            name : 'Lucy Camden, Philadelphia',
            content : 'Tyra was EXCELLENT!!! So thorough getting every crack and crevice spotless, from behind the couch, along the baseboards and under my shoes. We have a 2 floor row-home w/ a finished basement, and all 7 rooms look and small great. She came very prepared, and was extremely professional start to finish. I’ll definitely be calling on Tyra again, and you should too!'
          },
          {
            image : '11',
            name : 'Jayne Rice, Brookline',
            content : 'Very nice and did a great job repairing my bed.'
          },
          {
            image : '12',
            name : 'Laura King, Cambridge',
            content : 'Thanks Laura. Hope u like my service.'
          },
          {
            image : '13',
            name : 'Nathan Lauren, South Boston',
            content : 'Juana is amazing. My home is spotless and I would highly recommend her services.'
          },
          {
            image : '14',
            name : 'Tim Murphy, Jamaica Plain/Forest Hills',
            content : 'Rosa did a great job and was very responsive to messages. Will hire her again!'
          },
          {
            image : '15',
            name : 'Faysal Khaled, South End',
            content : 'Very professional and excellent cleaning. Arrived earlier than the appointment time and made the house look spotless. Highly recommended and would definitely call him again.'
          },
          {
            image : '16',
            name : 'Keith Sovie, South End',
            content : 'Highly recommended. Needed help moving a few large items from Boston to Provincetown and needed a truck. Sean arrived promptly on time, helped load and unload and all this on a Friday night! Will be booking with Sean again.'
          },
          {
            image : '17',
            name : 'Zachary Price, Jamaica Plain/Forest Hills',
            content : 'Great cleaning and a friendly guy. I will definitely have him come again. First choice!'
          },
          {
            image : '18',
            name : 'Tanya Keenan, East Cambridge',
            content : 'Torrence was very thorough and did an excellent job cleaning our very dusty ********.'
          },
          {
            image : '19',
            name : 'Vera Keiter, Ridgewood',
            content : 'Eyaury was amazing! Fast, efficient, and with amazing ********!! He moved all of our heavy furniture in a terrible rain without any complaints! Thank you, will definitely reach out again if we ever need help!'
          },
          {
            image : '20',
            name : 'Carolyn Gershenson, New York',
            content : 'Excellent. Madena was extremely efficient, needed very little direction and got the job done in an appropriate amount of time. My apartment is 100 percent clean and dust free. I would absolutely highly recommend and would hire her again! I can see also how she would be an amazing house organizer as well if you needed that type of service. Very pleased.'
          }
        ]
      }
    },
    table : {
      jopLive : [
        {
          title : '$3.5M',
          content : 'capital funds'
        },
        {
          title : '+15K',
          content : 'booking requests in NYC'
        },
        {
          title : '+6.4K',
          content : 'Joppers'
        },
        {
          title : '+35K',
          content : 'Users'
        },
        {
          title : '+400',
          content : 'available services'
        },
        {
          title : '125%',
          content : 'average monthly customer growth in 2017'
        },
        {
          title : '75%',
          content : 'customer retention rate on iOS and Android'
        },
        {
          title : '99.9%',
          content : 'iOS crash-free sessions'
        }
      ],
      tokenSale : [
        {
          title : 'Name',
          content : ['JOPT']
        },
        {
          title : 'Max Cap',
          content : ['$27M']
        },
        {
          title : 'Currency Accepted',
          content : ['Bitcoin & Ethereum']
        },
        {
          title : 'Technology',
          content : ['pre-generated BIP32 Wallet']
        },
        {
          title : 'Token Platform',
          content : ['Ethereum ERC20 contract']
        },
        {
          title : 'Round 0<br>– Seed Investments',
          content : [
            '<b>$3.5M USD</b>',
            'CLOSED'
          ]
        },
        {
          title : 'Round 1: Private Sale<br>– June 20th, 2018',
          content : [
            '<b>Price</b>: 0.125 USD per JOPT – <i>40% + 25% Token Bonus</i>',
            '<b>CAP</b>: $3M USD',
            '<b>Token quantity</b>: 11.1%',
            'Open only to Premium Investors (invited by founders, advisors, or partners)'
          ]
        },
        {
          title : 'Round 2: Pre-Sale<br>– July 10th, 2018',
          content : [
            '<b>Price</b>: 0.20 USD per JOPT – <i>20% + 10% Token Bonus</i>',
            '<b>CAP</b>: $8M USD',
            '<b>Max Quantity</b>: 29.6%',
            'Invitation based round'
          ]
        },
        {
          title : 'Round 3: Public Sale<br>– July 25th, 2018 ',
          content : [
            '<b>Price</b>: 0.25 USD per JOPT',
            '<b>Min quantity</b>: 59.3%',
            'Open to everyone'
          ]
        },
        {
          title : 'Restrictions',
          content : ['United States of America (Except accredited buyers), People’s Republic of China (except for Hong Kong, Macau, and Taiwan), South Korea, Cuba, Iran,  North Korea, Syria, Crimea Region']
        },
      ]
    }
  }
})
