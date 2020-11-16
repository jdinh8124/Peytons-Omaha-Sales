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
\.


--
-- Data for Name: carts; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public.carts ("cartId", "createdAt") FROM stdin;
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public.orders ("orderId", "cartId", name, "creditCard", "shippingAddress", "createdAt") FROM stdin;
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

SELECT pg_catalog.setval('public."cartItems_cartItemId_seq"', 589, true);


--
-- Name: carts_cartId_seq; Type: SEQUENCE SET; Schema: public; Owner: dev
--

SELECT pg_catalog.setval('public."carts_cartId_seq"', 69, true);


--
-- Name: orders_orderId_seq; Type: SEQUENCE SET; Schema: public; Owner: dev
--

SELECT pg_catalog.setval('public."orders_orderId_seq"', 46, true);


--
-- Name: products_productId_seq; Type: SEQUENCE SET; Schema: public; Owner: dev
--

SELECT pg_catalog.setval('public."products_productId_seq"', 1, false);


--
-- Name: cartItems cartItems_pkey; Type: CONSTRAINT; Schema: public; Owner: dev
--



--
-- Name: carts carts_pkey; Type: CONSTRAINT; Schema: public; Owner: dev
--



--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: dev
--



--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: dev
--



--
-- PostgreSQL database dump complete
--
