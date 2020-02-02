--
-- PostgreSQL database dump
--

-- Dumped from database version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: cartItems; Type: TABLE; Schema: public; Owner: dev
--

CREATE TABLE public."cartItems" (
    "cartItemId" integer NOT NULL,
    "cartId" integer NOT NULL,
    "productId" integer NOT NULL,
    price integer NOT NULL
);


ALTER TABLE public."cartItems" OWNER TO dev;

--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE; Schema: public; Owner: dev
--

CREATE SEQUENCE public."cartItems_cartItemId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."cartItems_cartItemId_seq" OWNER TO dev;

--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dev
--

ALTER SEQUENCE public."cartItems_cartItemId_seq" OWNED BY public."cartItems"."cartItemId";


--
-- Name: carts; Type: TABLE; Schema: public; Owner: dev
--

CREATE TABLE public.carts (
    "cartId" integer NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.carts OWNER TO dev;

--
-- Name: carts_cartId_seq; Type: SEQUENCE; Schema: public; Owner: dev
--

CREATE SEQUENCE public."carts_cartId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."carts_cartId_seq" OWNER TO dev;

--
-- Name: carts_cartId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dev
--

ALTER SEQUENCE public."carts_cartId_seq" OWNED BY public.carts."cartId";


--
-- Name: orders; Type: TABLE; Schema: public; Owner: dev
--

CREATE TABLE public.orders (
    "orderId" integer NOT NULL,
    "cartId" integer NOT NULL,
    name text NOT NULL,
    "creditCard" text NOT NULL,
    "shippingAddress" text NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.orders OWNER TO dev;

--
-- Name: orders_orderId_seq; Type: SEQUENCE; Schema: public; Owner: dev
--

CREATE SEQUENCE public."orders_orderId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."orders_orderId_seq" OWNER TO dev;

--
-- Name: orders_orderId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dev
--

ALTER SEQUENCE public."orders_orderId_seq" OWNED BY public.orders."orderId";


--
-- Name: products; Type: TABLE; Schema: public; Owner: dev
--

CREATE TABLE public.products (
    "productId" integer NOT NULL,
    name text NOT NULL,
    price integer NOT NULL,
    image text NOT NULL,
    "shortDescription" text NOT NULL,
    "longDescription" text NOT NULL
);


ALTER TABLE public.products OWNER TO dev;

--
-- Name: products_productId_seq; Type: SEQUENCE; Schema: public; Owner: dev
--

CREATE SEQUENCE public."products_productId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."products_productId_seq" OWNER TO dev;

--
-- Name: products_productId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dev
--

ALTER SEQUENCE public."products_productId_seq" OWNED BY public.products."productId";


--
-- Name: cartItems cartItemId; Type: DEFAULT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public."cartItems" ALTER COLUMN "cartItemId" SET DEFAULT nextval('public."cartItems_cartItemId_seq"'::regclass);


--
-- Name: carts cartId; Type: DEFAULT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.carts ALTER COLUMN "cartId" SET DEFAULT nextval('public."carts_cartId_seq"'::regclass);


--
-- Name: orders orderId; Type: DEFAULT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.orders ALTER COLUMN "orderId" SET DEFAULT nextval('public."orders_orderId_seq"'::regclass);


--
-- Name: products productId; Type: DEFAULT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.products ALTER COLUMN "productId" SET DEFAULT nextval('public."products_productId_seq"'::regclass);


--
-- Data for Name: cartItems; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public."cartItems" ("cartItemId", "cartId", "productId", price) FROM stdin;
1	11	1	2999
2	12	1	2999
3	13	1	2999
4	14	1	2999
5	15	1	2999
6	16	1	2999
7	17	1	2999
8	18	1	2999
9	18	1	2999
10	18	1	2999
11	18	1	2999
12	18	1	2999
13	18	1	2999
14	18	1	2999
15	18	1	2999
16	18	1	2999
17	18	1	2999
18	18	1	2999
19	18	2	2595
20	18	2	2595
21	18	2	2595
22	18	2	2595
23	18	2	2595
24	18	2	2595
25	18	2	2595
26	18	2	2595
27	19	2	2595
28	19	2	2595
29	19	2	2595
30	19	2	2595
31	19	2	2595
32	19	2	2595
33	19	2	2595
34	19	2	2595
35	19	6	830
36	19	5	9900
37	19	3	2900
38	19	5	9900
39	20	1	2999
40	20	3	2900
41	20	4	999
42	20	6	830
43	20	5	9900
44	20	6	830
45	21	1	2999
46	22	1	2999
47	20	3	2900
48	23	2	2595
49	24	3	2900
50	24	2	2595
51	25	3	2900
52	25	1	2999
53	25	6	830
54	25	6	830
55	25	2	2595
56	25	5	9900
57	25	4	999
58	25	4	999
59	25	3	2900
60	26	4	999
61	26	3	2900
62	26	6	830
63	26	5	9900
64	26	6	830
65	26	6	830
66	26	6	830
67	26	6	830
68	26	6	830
69	26	6	830
70	26	6	830
71	26	5	9900
72	26	5	9900
73	26	5	9900
74	26	5	9900
75	26	5	9900
76	26	4	999
77	26	6	830
78	26	3	2900
79	26	6	830
80	26	6	830
81	26	6	830
82	27	6	830
83	27	5	9900
84	27	4	999
85	27	6	830
124	28	1	2999
125	30	1	2999
126	31	3	2900
127	32	2	2595
128	33	1	2999
129	33	1	2999
130	33	1	2999
131	33	1	2999
132	33	1	2999
133	33	1	2999
134	34	3	2900
135	34	3	2900
136	34	3	2900
137	35	6	830
138	35	5	9900
139	36	6	830
140	36	6	830
141	37	6	830
142	37	6	830
143	38	1	2999
144	38	6	830
145	38	6	830
146	39	5	9900
147	40	2	2595
148	40	2	2595
149	40	4	999
150	40	4	999
151	41	4	999
152	41	4	999
153	42	4	999
154	42	4	999
155	43	6	830
156	43	6	830
157	44	1	2999
158	44	3	2900
159	44	3	2900
160	45	6	830
161	45	1	2999
162	45	3	2900
484	50	6	830
485	50	6	830
486	50	6	830
487	51	2	2595
488	51	3	2900
489	51	1	2999
490	51	1	2999
491	51	2	2595
492	51	2	2595
493	51	2	2595
494	51	2	2595
495	51	2	2595
496	51	2	2595
292	48	2	2595
293	48	2	2595
497	52	6	830
498	52	6	830
499	53	6	830
500	53	6	830
188	46	1	2999
189	46	3	2900
190	46	3	2900
501	54	5	9900
502	54	5	9900
503	55	3	2900
194	46	1	2999
195	46	2	2595
196	46	1	2999
197	46	2	2595
198	47	1	2999
504	55	4	20000
506	55	5	20000
511	55	1	30000
512	55	3	20000
513	55	1	30000
514	55	1	30000
515	55	1	30000
516	55	1	30000
525	56	2	25000
526	56	2	25000
527	57	6	20000
528	57	6	20000
529	57	6	20000
530	57	6	20000
531	57	6	20000
532	58	3	20000
533	59	4	20000
534	59	4	20000
535	59	4	20000
536	59	4	20000
537	59	4	20000
540	59	4	20000
541	59	4	20000
544	59	5	20000
\.


--
-- Data for Name: carts; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public.carts ("cartId", "createdAt") FROM stdin;
1	2020-01-14 15:35:40.594102-08
2	2020-01-14 15:35:46.866482-08
3	2020-01-14 15:36:11.47141-08
4	2020-01-14 15:36:15.434935-08
5	2020-01-14 15:36:27.142827-08
6	2020-01-14 15:42:34.437409-08
7	2020-01-14 15:44:50.04939-08
8	2020-01-14 15:48:20.292594-08
9	2020-01-14 15:53:53.780383-08
10	2020-01-14 15:54:28.682473-08
11	2020-01-14 15:56:52.595535-08
12	2020-01-14 16:01:18.726207-08
13	2020-01-14 16:02:42.803796-08
14	2020-01-14 16:03:56.155723-08
15	2020-01-14 16:04:13.775605-08
16	2020-01-14 16:05:07.275982-08
17	2020-01-14 16:06:06.261131-08
18	2020-01-14 16:06:38.045918-08
19	2020-01-14 18:21:29.699233-08
20	2020-01-15 09:20:30.986998-08
21	2020-01-15 12:25:22.670785-08
22	2020-01-15 12:43:13.187671-08
23	2020-01-15 16:55:32.612991-08
24	2020-01-15 16:57:46.944977-08
25	2020-01-15 17:03:03.686748-08
26	2020-01-15 17:15:26.84454-08
27	2020-01-15 17:44:56.824512-08
28	2020-01-16 09:19:08.891365-08
29	2020-01-16 10:45:42.764032-08
30	2020-01-16 12:43:13.417847-08
31	2020-01-16 13:07:02.721382-08
32	2020-01-16 13:07:33.339964-08
33	2020-01-16 13:07:49.15282-08
34	2020-01-16 13:08:31.659954-08
35	2020-01-16 13:11:31.941356-08
36	2020-01-16 13:12:24.364641-08
37	2020-01-16 13:12:52.530326-08
38	2020-01-16 13:14:13.558205-08
39	2020-01-16 13:22:13.120678-08
40	2020-01-16 13:27:12.226766-08
41	2020-01-16 14:34:10.76851-08
42	2020-01-16 14:35:20.744082-08
43	2020-01-16 14:36:36.801408-08
44	2020-01-16 14:42:51.515852-08
45	2020-01-16 14:47:30.15842-08
46	2020-01-16 14:58:35.13927-08
47	2020-01-17 09:34:17.251669-08
48	2020-01-18 14:22:20.528211-08
49	2020-01-18 17:32:55.813243-08
50	2020-01-19 15:10:49.754534-08
51	2020-01-19 20:11:01.233179-08
52	2020-01-19 20:16:30.548887-08
53	2020-01-19 20:16:55.318913-08
54	2020-01-19 20:17:33.132265-08
55	2020-01-19 20:23:59.132806-08
56	2020-01-20 09:11:29.179534-08
57	2020-01-20 20:03:07.142879-08
58	2020-01-22 09:26:48.125103-08
59	2020-02-01 21:02:10.058645-08
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public.orders ("orderId", "cartId", name, "creditCard", "shippingAddress", "createdAt") FROM stdin;
1	21	Tim Davis	123456789	123 LearningFuze	2020-01-15 12:27:47.342193-08
2	21	Tim Davis	123456789	123 LearningFuze	2020-01-15 12:27:54.763287-08
3	21	Tim Davis	123456789	123 LearningFuze	2020-01-15 12:29:33.151604-08
4	21	Tim Davis	123456789	123 LearningFuze	2020-01-15 12:31:06.571706-08
5	21	Tim Davis	123456789	123 LearningFuze	2020-01-15 12:31:09.803505-08
6	21	Tim Davis	123456789	123 LearningFuze	2020-01-15 12:36:14.319802-08
7	21	Tim Davis	123456789	123 LearningFuze	2020-01-15 12:36:28.820637-08
8	21	Tim Davis	123456789	123 LearningFuze	2020-01-15 12:38:05.404887-08
9	22	Tim Davis	123456789	123 LearningFuze	2020-01-15 12:46:22.952939-08
10	20	dsfsdf	dfdsfsdf	324324234	2020-01-15 16:48:23.787172-08
11	23	James	John Way	534543	2020-01-15 16:55:49.205188-08
12	24	James D	Hello Tim	16541564165	2020-01-15 16:58:04.968608-08
13	25	fsdfsdf	ghfghfg	777	2020-01-15 17:15:18.930393-08
14	26	sdfsdfsd	bgfbfgb	324423423	2020-01-15 17:44:53.253887-08
15	27	Jonh	Hello Tim	651561651	2020-01-15 17:46:22.021156-08
16	28	James D	Test	45151651	2020-01-16 12:42:07.736211-08
17	30	fgdfgdfgdgfd	sadsadsadasdsaddcsd	54654	2020-01-16 13:00:05.003857-08
18	31	fdgdfgdf	gffghfg	535345	2020-01-16 13:07:09.305368-08
19	32	dasdsad	sdfsdfdfs	111	2020-01-16 13:07:39.40253-08
20	33	ewrewr	gfdgdfg	323	2020-01-16 13:07:57.417702-08
21	34	dfsdfsd	1dasd	213213	2020-01-16 13:08:41.211461-08
22	35	fgdfgdfg	fgdfgdf	234234	2020-01-16 13:11:43.225652-08
23	36	ertgert	gedfgdg	344234	2020-01-16 13:12:31.462554-08
24	37	sadsad	cvczxc	234	2020-01-16 13:12:59.322847-08
25	38	dsfsdfdsf	vsdsdvsdv	32423423	2020-01-16 13:20:17.208161-08
26	39	dsfsd	dfsdfds	4234	2020-01-16 13:22:19.18226-08
27	40	dfsdf	sdfsadf	23123	2020-01-16 13:31:11.717849-08
28	41	regerge	fggfddfg	4234234	2020-01-16 14:34:19.490188-08
29	42	edfwrfwe	sdfsdfsd	342343	2020-01-16 14:35:26.830729-08
30	43	fsdfsdf	fgvbsdfgvsdfs	324234	2020-01-16 14:36:41.99215-08
31	44	rterte	retertr	4444	2020-01-16 14:43:01.101471-08
32	45	wewqeqw	dqwdwqdqdw	213123213	2020-01-16 14:47:44.871625-08
33	48	vfdvdfv	dsfsdffdsf	324234	2020-01-18 17:32:45.720968-08
34	50	efwef	sdasdasd	21312	2020-01-19 20:08:25.317544-08
35	51	test	test	324341	2020-01-19 20:15:05.653176-08
36	52	erewr	asdasdasd	112312	2020-01-19 20:16:36.453786-08
37	53	dqdqwdq	sadasd	3241	2020-01-19 20:17:02.255034-08
38	54	saad	asscasc	1212	2020-01-19 20:17:37.681876-08
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public.products ("productId", name, price, image, "shortDescription", "longDescription") FROM stdin;
6	Eli Manning Jersey	20000	/images/manning.jpg	Two time Superbowl champion Eli Manning Jersey Authenticated and Autographed Jersey, also known has Peyton Mannings younger brother	Elisha Nelson Manning IV is an American football quarterback for the New York Giants of the National Football League. He played college football at the University of Mississippi from 2000 to 2003.
3	Tom Brady Jersey	20000	/images/brady.jpg	Greatest of all time, Tom Brady, Authenticated and Autographed Jersey	Thomas Edward Patrick Brady Jr. is an American football quarterback for the New England Patriots of the National Football League. Brady has played in nine Super Bowls, winning six of them, the most of any player in NFL history.
4	Shannon Sharpe Jersey	20000	/images/sharpe.jpg	Top tight end and sports analyst, Shannon Sharpe, Authenticated and Autographed Jersey	Shannon Sharpe is a former American football tight end who played for the Denver Broncos and Baltimore Ravens of the National Football League, as well as a former analyst for CBS Sports on its NFL telecasts. He is a TV presenter who co-hosts Skip and Shannon: Undisputed with Skip Bayless.
5	Jerry Rice Jersey	20000	/images/rice.jpg	The Greatest receiver of all time, Jerry Rice, Authenticated and Autographed Jersey!	Jerry Lee Rice Sr. is an American former professional football player who was a wide receiver in the National Football League, primarily with the San Francisco 49ers. Due to his numerous records, accomplishments, and accolades, he is widely regarded as the greatest wide receiver in NFL history.
2	Randy Moss Jersey	25000	/images/moss.jpg	Most talented pass catchter of all time, Randy Moss, Authenticated and Autographed Jersey	Randy Gene Moss is an American former professional football player who is a television sports analyst. He played wide receiver for 14 seasons in the National Football League.
1	Brett Favre Jersey	30000	/images/favre.jpg	Gunslinging Brett Favre Authenticated and Autographed Jersey	Brett Lorenzo Favre is an American former professional football player who was a quarterback in the National Football League, spending the majority of his career with the Green Bay Packers.
\.


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE SET; Schema: public; Owner: dev
--

SELECT pg_catalog.setval('public."cartItems_cartItemId_seq"', 544, true);


--
-- Name: carts_cartId_seq; Type: SEQUENCE SET; Schema: public; Owner: dev
--

SELECT pg_catalog.setval('public."carts_cartId_seq"', 59, true);


--
-- Name: orders_orderId_seq; Type: SEQUENCE SET; Schema: public; Owner: dev
--

SELECT pg_catalog.setval('public."orders_orderId_seq"', 38, true);


--
-- Name: products_productId_seq; Type: SEQUENCE SET; Schema: public; Owner: dev
--

SELECT pg_catalog.setval('public."products_productId_seq"', 1, false);


--
-- Name: cartItems cartItems_pkey; Type: CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public."cartItems"
    ADD CONSTRAINT "cartItems_pkey" PRIMARY KEY ("cartItemId");


--
-- Name: carts carts_pkey; Type: CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_pkey PRIMARY KEY ("cartId");


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY ("orderId");


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY ("productId");


--
-- PostgreSQL database dump complete
--

