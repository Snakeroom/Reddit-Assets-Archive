// https://www.redditstatic.com/desktop2x/Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddi~90fdacc3.8cdd92579b503a645c6c.js
// Retrieved at 6/8/2022, 12:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddi~90fdacc3"], {
		"./src/lib/constants/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = "custom"
		},
		"./src/lib/getShortenedLink.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/models/Media/index.ts"),
				s = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				o = n.n(s);
			t.a = function(e) {
				var t;
				const {
					source: n,
					isSponsored: s,
					domainOverride: i,
					callToAction: c
				} = e;
				let a = "";
				if (s) {
					if (n && n.displayText) {
						const e = 36 - (null !== (t = null == c ? void 0 : c.length) && void 0 !== t ? t : 0);
						return n.displayText.length > e ? n.displayText.substring(0, e - 3) + "..." : n.displayText
					}
					a = i || Object(r.D)(e)
				} else a = Object(r.D)(e);
				const d = o.a.parse(a),
					u = d.path || "",
					l = u.length > 7 ? u.substring(0, 7) + "..." : u;
				return (d.hostname ? d.hostname.replace("www.", "") : "") + l
			}
		},
		"./src/lib/hooks/usePrevious.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/react/index.js");

			function s(e) {
				const t = Object(r.useRef)();
				return Object(r.useEffect)(() => {
					t.current = e
				}), t.current
			}
		},
		"./src/lib/hooks/useTooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return a
			}));
			var r = n("./node_modules/icepick/icepick.js"),
				s = n("./node_modules/react/index.js"),
				o = n("./node_modules/react-popper/lib/esm/usePopper.js");
			const i = Object(r.freeze)({
				modifiers: []
			});

			function c(e) {
				let t = "object" == typeof e ? e : i;
				return Array.isArray(t.modifiers) || (t = Object(r.assoc)(t, "modifiers", i.modifiers)), t
			}

			function a(e) {
				const [t, n] = Object(s.useState)(null), [i, a] = Object(s.useState)(null), [d, u] = Object(s.useState)(null), [l, m] = Object(s.useState)(!1), p = Object(s.useCallback)(async () => m(!0), []), b = Object(s.useCallback)(() => m(!1), []), f = Object(s.useCallback)(() => m(!l), [l]), _ = Object(s.useMemo)(() => {
					const t = c(e);
					return d ? Object(r.updateIn)(t, ["modifiers"], e => Object(r.push)(e, {
						name: "arrow",
						options: {
							element: d
						}
					})) : t
				}, [d, e]), {
					attributes: E,
					styles: O,
					update: v
				} = Object(o.a)(t, i, _);
				return Object(s.useMemo)(() => ({
					arrowProps: {
						ref: u,
						style: O.arrow,
						...E.arrow
					},
					hide: b,
					popperProps: {
						ref: a,
						style: O.popper,
						...E.popper
					},
					show: p,
					target: {
						element: t,
						ref: n
					},
					toggle: f,
					visible: l,
					update: v
				}), [u, E, a, b, p, O, t, n, f, l, v])
			}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts");
			const o = [s.sc, s.pb, s.B, s.Q, s.kb, s.Sb],
				i = {
					[s.Sb]: e => r.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [r.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[s.kb]: e => r.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [r.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[s.Q]: e => r.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [r.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[s.B]: e => r.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [r.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[s.pb]: e => r.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [r.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[s.sc]: e => r.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [r.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				c = {
					[s.Sb]: e => r.fbt._("{amount}s", [r.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[s.kb]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[s.Q]: e => r.fbt._("{amount}h", [r.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[s.B]: e => r.fbt._("{amount}d", [r.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[s.pb]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[s.sc]: e => r.fbt._("{amount}y", [r.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[s.pb]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[s.sc]: e => r.fbt._("{amount}y", [r.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function a(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const a = Date.now(),
					d = new Date(e).getTime(),
					u = {
						[s.sc]: "",
						[s.pb]: "",
						[s.B]: "",
						[s.Q]: "",
						[s.kb]: "",
						[s.Sb]: ""
					};
				let l = d - a;
				if (l <= 0) return r.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const r of o) {
					const e = Math.floor(l / r);
					e && (u[r] = (t ? c : i)[r](e).toString()), l -= e * r
				}
				const m = o.map(e => u[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || n ? m : r.fbt._("{amount of time left} left", [r.fbt._param("amount of time left", m)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			const r = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				s = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				c = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "i", (function() {
				return l
			}));
			const r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/eventPosts/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "a", (function() {
				return a
			}));
			const r = "MOD_PAGE_EVENT_POSTS_LOADED",
				s = "MOD_PAGE_EVENT_POSTS_FAILED",
				o = "MOD_PAGE_EVENT_POSTS_PENDING",
				i = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				c = "START_EVENT_NOW_SUCCESS",
				a = "EDIT_EVENT_TIME_SUCCESS"
		},
		"./src/reddit/actions/postCollection/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "t", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "r", (function() {
				return l
			})), n.d(t, "s", (function() {
				return m
			})), n.d(t, "n", (function() {
				return p
			})), n.d(t, "l", (function() {
				return b
			})), n.d(t, "m", (function() {
				return f
			})), n.d(t, "k", (function() {
				return _
			})), n.d(t, "i", (function() {
				return E
			})), n.d(t, "j", (function() {
				return O
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "p", (function() {
				return h
			})), n.d(t, "q", (function() {
				return S
			})), n.d(t, "o", (function() {
				return C
			}));
			const r = "CREATE_COLLECTION_PENDING",
				s = "CREATE_COLLECTION_SUCCESS",
				o = "CREATE_COLLECTION_FAILED",
				i = "GET_SUBREDDIT_COLLECTION_SUCCESS",
				c = "REMOVE_POST_FROM_COLLECTION_SUCCESS",
				a = "ADD_POST_TO_COLLECTION_SUCCESS",
				d = "UPDATE_POST_WITH_COLLECTION_ID",
				u = "DELETE_COLLECTION_SUCCESS",
				l = "UPDATE_COLLECTION_PENDING",
				m = "UPDATE_COLLECTION_SUCCESS",
				p = "UPDATE_COLLECTION_FAILED",
				b = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				f = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				_ = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				E = "REORDER_COLLECTION_PENDING",
				O = "REORDER_COLLECTION_SUCCESS",
				v = "REORDER_COLLECTION_FAILED",
				h = "UPDATE_COLLECTION_LAYOUT_PENDING",
				S = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				C = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/snoovatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "d", (function() {
				return h
			}));
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/sentry/index.ts"),
				i = n("./src/config.ts"),
				c = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeApiRequest/index.ts"),
				d = n("./src/lib/omitHeaders/index.ts"),
				u = n("./src/reddit/constants/headers.ts");
			var l = n("./src/reddit/reducers/features/avatar/index.ts"),
				m = n("./src/reddit/selectors/avatar.ts"),
				p = n("./src/reddit/actions/users.ts");
			Object(r.a)({
				features: {
					avatar: l.a
				}
			});
			const b = "SET_AVATAR_USER",
				f = Object(s.a)(b),
				_ = "RANDOM_AVATAR_LOADED",
				E = Object(s.a)(_),
				O = (e, t, n) => async (r, s, o) => {
					let {
						apiContext: l
					} = o;
					var b, f, _, E;
					const O = Object(m.b)(s()),
						v = await (async (e, t, n, r, s) => Object(a.a)(Object(d.a)(e, [u.a]), {
							endpoint: `${i.a.snoovatarUrl}/api/snoovatar?skip_telemetry=true`,
							method: c.jb.POST,
							headers: {
								"Content-Type": "application/json ",
								"X-CSRF-Token": s || ""
							},
							data: {
								accessory_ids: t,
								styles: n,
								...r
							}
						}))(l(), e, t, n, O);
					if (!v.ok) throw new Error("User avatar failed to save");
					return r(Object(p.A)(v.body)), {
						accountIcon: null === (f = null === (b = v.body) || void 0 === b ? void 0 : b.avatar) || void 0 === f ? void 0 : f.headshot_image_url,
						fullBodySnoovatar: null === (E = null === (_ = v.body) || void 0 === _ ? void 0 : _.avatar) || void 0 === E ? void 0 : E.image_url
					}
				}, v = () => async (e, t, n) => {
					let {
						apiContext: r
					} = n;
					try {
						const t = await (async e => Object(a.a)(Object(d.a)(e, [u.a]), {
							endpoint: `${i.a.snoovatarUrl}/api/account`,
							method: c.jb.GET
						}))(r());
						t.ok && e(f(t.body))
					} catch (s) {
						o.c.captureException(s)
					}
				}, h = () => async (e, t, n) => {
					let {
						apiContext: r
					} = n;
					try {
						const t = await (async e => Object(a.a)(Object(d.a)(e, [u.a]), {
							endpoint: `${i.a.snoovatarUrl}/api/snoovatars/random:byId`,
							method: c.jb.GET
						}))(r());
						t.ok && e(E(t.body))
					} catch (s) {
						o.c.captureException(s)
					}
				}
		},
		"./src/reddit/actions/snoovatarModal.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return l
			}));
			var r = n("./src/reddit/actions/login.ts"),
				s = n("./src/reddit/actions/modal.ts"),
				o = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				a = n("./src/reddit/selectors/user.ts"),
				d = n("./src/telemetry/index.ts");
			const u = () => async (e, t) => {
				const n = t();
				Object(d.a)(Object(c.l)(n)), e(Object(o.t)({
					forceFetch: !0
				})), await e(Object(s.g)(i.a.SNOOVATAR_MODAL))
			};

			function l() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return async (t, n) => {
					const {
						clickSource: o,
						share: u,
						source: l,
						activeTab: m,
						activeMeSubpage: p,
						activeDetails: b
					} = e, f = n();
					o && Object(d.a)(Object(c.g)(o)(f)), Object(a.Q)(f) ? await t(Object(s.h)(i.a.SNOOVATAR_MODAL, {
						share: u,
						source: l,
						activeTab: m,
						activeMeSubpage: p,
						activeDetails: b
					})) : await t(Object(r.i)())
				}
			}
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.m.less": function(e, t, n) {
			e.exports = {
				horizontalVotes: "_2oM1YqCxIwkvwyeZamWwhW",
				customScoreStyles: "_25IkBM0rRUqWX5ZojEMAFQ",
				customDownvoteStyles: "_783RL1AYIib59nxLCXhgv"
			}
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/reddit/components/VerticalVotes/index.tsx"),
				a = n("./src/reddit/components/CompactPost/HorizontalVotes/index.m.less"),
				d = n.n(a);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const l = Object(i.a)(e => {
				let {
					className: t,
					...n
				} = e;
				return s.a.createElement(c.a, u({}, n, {
					className: Object(o.a)(d.a.horizontalVotes, t),
					scoreClassName: Object(o.a)(d.a.customScoreStyles, n.scoreClassName),
					downvoteClassName: Object(c.b)(n) ? d.a.customDownvoteStyles : void 0
				}))
			});
			t.a = l
		},
		"./src/reddit/components/Poll/PollExpiry/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/components/HumanDate/index.tsx"),
				o = n("./src/lib/timeUntil/index.ts"),
				i = n("./node_modules/react/index.js"),
				c = n.n(i);
			const {
				fbt: a
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function d(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return c.a.createElement("span", {
					className: e.className
				}, t ? a._("Voting closed {timeAgo}", [a._param("timeAgo", c.a.createElement(s.d, {
					seconds: e.poll.endsAt / r.Sb
				}))], {
					hk: "3OERID"
				}) : Object(o.a)(new Date(e.poll.endsAt)))
			}
		},
		"./src/reddit/components/Poll/PostTitleMetaData/index.m.less": function(e, t, n) {
			e.exports = {
				proposalMetaData: "_3yYOHq_rWQcgaR_pinEQU7",
				proposalExpiry: "_1poH87fXNrjNu84jKXBtun"
			}
		},
		"./src/reddit/components/PostTitle/index.m.less": function(e, t, n) {
			e.exports = {
				outboundLinkIcon: "qgDkGQIoFEpMMeNtfI0BY",
				pollMeta: "FKej75-i0z1XubMqeVh9Q",
				styledLink: "SQnoC3ObvgnGjWt90zD9Z",
				isVisitedEnabled: "_2INHSNB8V5eaWp4P0rY_mE",
				Title: "_2SdHzo12ISmrC8H86TgSCp",
				title: "_2SdHzo12ISmrC8H86TgSCp",
				titleContainer: "y8HYJ-y_lTUHkQIc1mdCq",
				isNoWrap: "_2_QBmCTk6VD4M3dvKqXD23",
				postTitleVisibility: "_1hLrLjnE1G_RBCNcN9MVQf",
				blur: "_1Y3R-LNfq0EOkZUcePSt1j",
				ExtraLarge: "_29WrubtjAcKqzJSPdQqQ4h",
				extraLarge: "_29WrubtjAcKqzJSPdQqQ4h",
				Large: "_3wqmjmv3tb_k-PROt7qFZe",
				large: "_3wqmjmv3tb_k-PROt7qFZe",
				Medium: "_1zpZYP8cFNLfLDexPY65Y7",
				medium: "_1zpZYP8cFNLfLDexPY65Y7",
				Small: "uWdXen_41bh0iwLrgzFkc",
				small: "uWdXen_41bh0iwLrgzFkc",
				ExtraSmall: "_1aqE18-N18ZIRlkE1wa7DP",
				extraSmall: "_1aqE18-N18ZIRlkE1wa7DP",
				Metadata: "_2_YD0sbnnLrJvpCrMxBFaC",
				metadata: "_2_YD0sbnnLrJvpCrMxBFaC",
				Component: "_2FCtq-QzlfuN-SwVMUZMM3",
				component: "_2FCtq-QzlfuN-SwVMUZMM3"
			}
		},
		"./src/reddit/components/PostTitle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return R
			})), n.d(t, "a", (function() {
				return Q
			}));
			var r = n("./node_modules/polished/dist/polished.es.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/ads/index.ts"),
				u = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/controls/OutboundLink/index.tsx"),
				b = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				f = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				_ = n("./src/reddit/actions/post.ts"),
				E = n("./src/reddit/helpers/flair.ts"),
				O = n("./src/reddit/helpers/path/index.ts"),
				v = n("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				h = n("./src/reddit/icons/fonts/index.tsx"),
				S = n("./src/reddit/models/Flair/index.ts"),
				C = n("./src/reddit/models/Media/index.ts"),
				y = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				g = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				j = n("./src/lib/getShortenedLink.ts"),
				x = n("./src/reddit/components/FlairWrapper/index.tsx"),
				A = n("./node_modules/fbt/lib/FbtPublic.js"),
				N = n("./src/lib/prettyPrintNumber/index.ts"),
				I = n("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				T = n("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				D = n.n(T),
				k = n("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts");
			const P = Object(a.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var R, L = Object(i.b)(P)((function(e) {
					const {
						poll: t,
						resultsByVoters: n
					} = e, r = n ? n.totalVotes : "0";
					return Object(k.a)() ? null : o.a.createElement("div", {
						className: Object(u.a)(e.className, D.a.proposalMetaData)
					}, o.a.createElement("span", null, A.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [A.fbt._param("count", Object(N.a)(r)), A.fbt._plural(parseInt(r))], {
						hk: "4rP1VK"
					})), t && o.a.createElement(I.a, {
						className: D.a.proposalExpiry,
						poll: t
					}))
				})),
				w = n("./src/reddit/components/SEOTitle/index.tsx"),
				M = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				U = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				F = n("./src/reddit/selectors/user.ts"),
				B = n("./src/reddit/components/PostTitle/index.m.less"),
				V = n.n(B),
				Y = n("./src/config.ts"),
				q = n("./src/reddit/hooks/useClickSourceData.ts"),
				G = n("./src/reddit/hooks/usePostContext.ts"),
				H = n("./src/reddit/hooks/useTheme.ts"),
				W = n("./src/telemetry/models/Outbound.ts");

			function z() {
				return (z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall", e[e.Metadata = 5] = "Metadata"
			}(R || (R = {}));
			const Q = e => {
					let {
						size: t,
						titleColor: n,
						titleType: r,
						nowrap: s,
						children: i,
						className: c,
						redditStyle: a,
						shouldBlurTitle: d
					} = e;
					const l = Object(H.a)();
					let m = "";
					switch (t) {
						case R.ExtraLarge:
							m = V.a.ExtraLarge;
							break;
						case R.Large:
							m = V.a.Large;
							break;
						case R.Medium:
							m = V.a.Medium;
							break;
						case R.Small:
							m = V.a.Small;
							break;
						case R.ExtraSmall:
							m = V.a.ExtraSmall;
							break;
						case R.Metadata:
							m = V.a.Metadata
					}
					return o.a.createElement("div", {
						className: Object(u.a)(V.a.Title, c, m, {
							[V.a.isNoWrap]: s,
							[V.a.blur]: d
						}),
						style: {
							"--posttitletextcolor": n || Object(g.a)({
								redditStyle: a,
								theme: l
							}).titleText
						}
					}, r ? o.a.createElement(w.b, {
						type: r
					}, i) : i)
				},
				K = e => {
					let {
						className: t,
						disableVisited: n,
						titleColor: r,
						children: s,
						...i
					} = e;
					return o.a.createElement(c.a, z({}, i, {
						className: Object(u.a)(t, V.a.styledLink, {
							[V.a.isVisitedEnabled]: !n
						})
					}), s)
				},
				J = e => {
					let {
						disableVisited: t,
						nowrap: n,
						className: r,
						children: s
					} = e;
					return o.a.createElement("div", {
						className: Object(u.a)(V.a.titleContainer, r, {
							[V.a.isNoWrap]: n,
							[V.a.isVisitedEnabled]: !t
						})
					}, s)
				},
				X = Object(a.c)({
					flairPosition: (e, t) => {
						let {
							pageLayer: n
						} = t;
						return Object(m.q)(e, {
							pageLayer: n
						})
					},
					isNsfwBlurSubreddit: U.e,
					shouldOpenPostInNewTab: F.jb
				}),
				$ = e => {
					const {
						post: t,
						subreddit: n
					} = e, {
						isSponsored: r
					} = t, s = Object(i.d)(), c = Object(q.a)(), a = Object(i.e)(M.b), u = Object(i.e)(M.c), l = e => {
						!a && !u || t.media && Object(C.H)(t.media) || (e.preventDefault(), s(Object(_.bb)(Object(O.b)(t.permalink), t.id)))
					};
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return o.a.createElement(J, {
						nowrap: e.nowrap
					}, o.a.createElement(Z, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return o.a.createElement(p.b, {
						href: t.source.url,
						isSponsored: r,
						postId: t.id,
						source: t.source
					}, o.a.createElement(Z, e)); {
						const s = t.media && Object(C.H)(t.media) ? Object(v.c)(t.id, n.name) : t.permalink,
							i = e.isCommentPermalink ? Object(O.b)(s) : Object(f.a)(s, void 0, c);
						return o.a.createElement(J, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, r ? ((e, t) => {
							const {
								source: n
							} = Object(d.t)(e, t.imageGalleryCurrentItem);
							return n ? o.a.createElement(p.b, {
								href: n.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: n
							}, o.a.createElement(Z, t)) : o.a.createElement(Z, t)
						})(t, e) : o.a.createElement(K, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: i,
							onClick: l
						}, o.a.createElement(Z, e)))
					}
				},
				Z = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: n,
						post: r
					} = e;
					let s = e.format ? e.format(r) : r.title;
					n && "string" == typeof s && (s = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(s));
					const i = e.isCommentsPage ? w.a.PostComments : w.a.PostItem,
						c = !(!e.isNsfwBlurSubreddit || !e.post.isNSFW);
					return o.a.createElement(Q, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage || e.isCommentsPageAd,
						shouldBlurTitle: c,
						size: e.size,
						titleColor: e.titleColor,
						titleType: i
					}, t && o.a.createElement(x.a, {
						titleFlair: t,
						nowrap: !0,
						post: r,
						sendEvent: e.sendEvent
					}), s)
				},
				ee = e => {
					const {
						hideSourceLink: t,
						isNsfwBlurSubreddit: n,
						post: r
					} = e, {
						isSponsored: s
					} = r, i = e.isCommentsPage ? W.SourceElement.PostLink : W.SourceElement.ListingPostLink;
					if (Object(k.a)()) return null;
					if (n && r.isNSFW) return null;
					const c = !t && !e.isCrosspost && e.size !== R.Large && !r.isSponsored && !(r.media && Object(C.H)(r.media)) && (r.source || r.media && (r.media.type === C.o.GIFVIDEO || r.media.type === C.o.IMAGE || r.media.type === C.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (c) return o.a.createElement(b.a, {
							className: e.outboundLinkClassName,
							href: Object(C.D)(r),
							isSponsored: s,
							postId: r.id,
							source: r.source,
							sourceElement: i
						}, Object(j.a)(r), !r.isSponsored && o.a.createElement(h.a, {
							name: "external_link",
							className: V.a.outboundLinkIcon
						}))
					} else if (r.source && !e.isCrosspost && e.size !== R.Large && e.size !== R.ExtraLarge) return o.a.createElement(b.a, {
						className: e.outboundLinkClassName,
						href: r.source.url,
						isSponsored: s,
						postId: r.id,
						source: r.source,
						sourceElement: i
					}, Object(j.a)(r), !r.isSponsored && o.a.createElement(h.a, {
						name: "external_link",
						className: V.a.outboundLinkIcon
					}));
					return null
				};
			class te extends o.a.Component {
				getDynamicStyleTags() {
					return o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id}.${V.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(r.c)(.45,Object(g.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(r.c)(.45,this.props.titleColor||Object(g.a)(this.props).titleText,Object(g.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					const {
						className: e,
						disableFlair: t,
						flairPosition: n,
						isCommentsPage: r,
						isOverlay: s,
						poll: i,
						post: c,
						showNSFWSpoilerFlairsOnly: a,
						showNSFWFlairsOnly: d
					} = this.props, l = n === S.b.Left, m = Object(x.b)(c), p = a ? m.filter(e => e.type === S.f.Nsfw || e.type === S.f.Spoiler) : l ? m.filter(e => Object(E.q)(e.type)) : [];
					let b = m;
					a ? b = [] : d ? b = m.filter(e => e.type === S.f.Nsfw) : l && (b = m.filter(e => !Object(E.q)(e.type)));
					const f = !s && !r,
						_ = !t && p && p.length > 0 && f,
						O = !t && b && b.length > 0 && f;
					return o.a.createElement("div", {
						className: Object(u.a)(V.a.Component, e, c.id),
						ref: this.props.innerRef
					}, !a && _ && o.a.createElement(x.a, {
						isFlairFilter: !0,
						titleFlair: p,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent
					}), !Object(y.b)(c) && o.a.createElement($, z({}, this.props, {
						leftFlair: a ? p : void 0
					})), i && o.a.createElement(L, {
						className: V.a.pollMeta,
						pollId: i.id
					}), o.a.createElement(ee, this.props), O && o.a.createElement(x.a, {
						isFlairFilter: !0,
						titleFlair: b,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent
					}), o.a.createElement("div", {
						className: V.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${Y.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = o.a.memo((function(e) {
				const t = Object(m.fb)(),
					n = Object(m.w)(t),
					r = Object(G.a)(),
					s = Object(i.e)(s => X(s, {
						...r,
						...e,
						isCommentPermalink: n,
						pageLayer: t
					})),
					c = Object(H.a)(),
					a = Object(l.b)();
				return r ? o.a.createElement(te, z({
					pageLayer: t,
					isCommentPermalink: n
				}, r, s, e, {
					theme: c,
					sendEvent: a
				})) : null
			}))
		},
		"./src/reddit/components/SubredditNameLink/index.m.less": function(e, t, n) {
			e.exports = {
				SubredditName: "_3ryJoIoycVkA88fy40qNJc",
				subredditName: "_3ryJoIoycVkA88fy40qNJc"
			}
		},
		"./src/reddit/components/SubredditNameLink/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				s = n("./src/reddit/components/SubredditNameLink/index.m.less"),
				o = n.n(s);
			const i = n("./src/lib/lessComponent.tsx").a.wrapped(r.a, "SubredditName", o.a);
			t.a = i
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js");
			const s = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				o = {
					subredditActions: {
						subscribe: () => r.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => r.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => r.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => r.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => r.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => r.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				i = e => {
					let {
						type: t,
						key: n
					} = e;
					return o[s({
						type: t
					})][n]()
				}
		},
		"./src/reddit/components/VerticalVotes/index.m.less": function(e, t, n) {
			e.exports = {
				votesContainer: "_1E9mcoVn4MYnuBQSVDt1gC",
				bounceUp: "nmB1I04Z-G4nY3g3s_17F",
				bounceDown: "_1L6r7KisMt3CYUGWSEMGiR",
				disabledScore: "_3WPd5t8B-7mtiGONFotWAM"
			}
		},
		"./src/reddit/components/VerticalVotes/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return C
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = n("./src/reddit/constants/elementClassNames.ts"),
				l = n("./src/reddit/controls/Score/index.tsx"),
				m = n("./src/reddit/components/VerticalVotes/votes.tsx"),
				p = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = n("./src/reddit/models/Vote/index.ts"),
				f = n("./src/reddit/selectors/posts.ts"),
				_ = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/components/VerticalVotes/index.m.less"),
				O = n.n(E);
			const v = Object(c.c)({
					isNightMode: _.db,
					isAnimatingUpvotePostId: f.k
				}),
				h = Object(i.b)(v),
				S = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.upvoteInactive && Object(p.a)(e).voteIcons.upvoteActive,
				C = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.downvoteInactive && Object(p.a)(e).voteIcons.downvoteActive;
			class y extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						voted: b.a.notVoted
					}, this.onUpvote = () => {
						const {
							voteState: e
						} = this.props.model, {
							onVoteClick: t
						} = this.props;
						t(b.a.upvoted), this.setState({
							voted: e !== b.a.upvoted ? b.a.upvoted : b.a.notVoted
						})
					}, this.onDownvote = () => {
						const {
							voteState: e
						} = this.props.model, {
							onVoteClick: t
						} = this.props;
						t(b.a.downvoted), this.setState({
							voted: e !== b.a.downvoted ? b.a.downvoted : b.a.notVoted
						})
					}
				}
				render() {
					const e = this.props,
						{
							downvoteButtonClassName: t,
							isCountAnimShadowTestEnabled: n,
							isNightMode: s,
							isAnimatingUpvotePostId: i,
							shouldShowUpvoteRatioOnHover: c,
							isVoteCountAnimation: d,
							shouldShowScore: p = !0,
							upvoteButtonClassName: f,
							containerRef: _,
							model: E,
							postId: v
						} = e,
						h = S(e),
						y = C(e),
						g = E.voteState,
						j = i === v;
					return o.a.createElement("div", {
						className: Object(a.a)(O.a.votesContainer, e.className),
						id: `vote-arrows-${E.id}`,
						ref: _
					}, h ? o.a.createElement(m.b, {
						"aria-label": r.fbt._("upvote", null, {
							hk: "G6dJB"
						}),
						"aria-pressed": g === b.a.upvoted,
						"data-click-id": "upvote",
						compact: e.compact,
						className: e.upvoteClassName,
						id: e.upvoteTooltipId,
						isNightMode: s,
						onClick: this.onUpvote,
						voteState: g
					}) : o.a.createElement("button", {
						"aria-label": r.fbt._("upvote", null, {
							hk: "RguWS"
						}),
						"aria-pressed": g === b.a.upvoted,
						className: Object(a.a)(u.n, f, {
							[O.a.bounceUp]: j
						}),
						onClick: this.onUpvote,
						"data-click-id": "upvote",
						id: e.upvoteTooltipId
					}, o.a.createElement(m.d, {
						compact: e.compact,
						className: e.upvoteClassName,
						voteState: g
					})), !e.compact && p && o.a.createElement(l.a, {
						className: Object(a.a)(O.a.Score, e.scoreClassName),
						flairStyleTemplate: e.flairStyleTemplate,
						light: e.light,
						score: e.model.score,
						voteState: g,
						shouldShowUpvoteRatioOnHover: c,
						isScoreHidden: e.model.isScoreHidden,
						isVoteCountAnimation: !!d,
						isCountAnimShadowTestEnabled: !!n,
						postId: v
					}), y ? o.a.createElement(m.a, {
						"aria-label": r.fbt._("downvote", null, {
							hk: "tNfDV"
						}),
						"aria-pressed": g === b.a.downvoted,
						"data-click-id": "downvote",
						className: e.downvoteClassName,
						compact: e.compact,
						isNightMode: s,
						onClick: this.onDownvote,
						voteState: g
					}) : o.a.createElement("button", {
						"aria-label": r.fbt._("downvote", null, {
							hk: "1mDjTw"
						}),
						"aria-pressed": g === b.a.downvoted,
						className: Object(a.a)(u.n, t),
						onClick: this.onDownvote,
						"data-click-id": "downvote"
					}, o.a.createElement(m.c, {
						className: e.downvoteClassName,
						compact: e.compact,
						voteState: g
					})))
				}
			}
			const g = Object(d.a)(h(y));
			t.a = g
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/emailVerificationTooltip.ts"),
				i = n("./src/reddit/actions/subscription/index.ts"),
				c = n("./src/reddit/selectors/experiments/emailEnablement.ts"),
				a = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(r.b)(() => Object(s.c)({
				userIsSubscriber: a.gb,
				emailEnablementJoinFollowVoteVariant: c.a
			}), (e, t) => {
				let {
					identifier: n
				} = t;
				return {
					onSubscribe: () => e(i.d([n], !0)),
					onSubscriptionsRequested: () => e(i.f()),
					onUnsubscribe: () => e(i.d([n], !1)),
					toggleEmailVerificationTooltip: () => e(Object(o.c)("user_follow"))
				}
			})
		},
		"./src/reddit/constants/jsapiEvents.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			}));
			const r = "reddit",
				s = "reddit.ready",
				o = "reddit.urlChanged"
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, n) {
			"use strict";

			function r(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let n = 0;
				return e.placement && t.placement && (n = e.placement.localeCompare(t.placement)), 0 === n && e.position && t.position && (n = e.position - t.position), 0 === n && (n = e.title.localeCompare(t.title)), n
			}

			function s(e) {
				return [...e].sort(r)
			}
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}))
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			}));
			var r = n("./src/lib/constants/index.ts");
			const s = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case r.I.NO_STRIPE_SUBSCRIPTION:
							case r.I.USER_DOESNT_EXIST:
							case r.I.USER_REQUIRED_ERROR:
							case r.I.VALIDATION_ERROR:
								return e;
							case r.I.NO_USER:
							case r.I.NO_TEXT:
							case r.I.NO_URL:
								return r.I.VALIDATION_ERROR;
							case r.I.CREDIT_CARD_FAILURE:
							case r.I.CREDIT_CARD_FAILURE_GENERIC:
								return r.I.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return r.I.SUBMIT_VALIDATION_ERROR
						}
					}
					return r.I.VALIDATION_ERROR
				},
				o = e => {
					const t = e.body;
					return {
						type: s(t.json.errors),
						fields: t.json.errors.map(e => ({
							field: e[2] || "",
							msg: e[1]
						}))
					}
				},
				i = e => {
					const t = e.body;
					return !e.ok && t && t.json && t.json.errors ? {
						...e,
						error: o(e)
					} : e
				};
			t.a = o
		},
		"./src/reddit/helpers/trackers/scheduledPosts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return c
			})), n.d(t, "y", (function() {
				return a
			})), n.d(t, "m", (function() {
				return d
			})), n.d(t, "p", (function() {
				return u
			})), n.d(t, "q", (function() {
				return l
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "o", (function() {
				return b
			})), n.d(t, "r", (function() {
				return f
			})), n.d(t, "k", (function() {
				return _
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "n", (function() {
				return v
			})), n.d(t, "h", (function() {
				return h
			})), n.d(t, "g", (function() {
				return C
			})), n.d(t, "l", (function() {
				return y
			})), n.d(t, "t", (function() {
				return g
			})), n.d(t, "j", (function() {
				return j
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "x", (function() {
				return A
			})), n.d(t, "u", (function() {
				return N
			})), n.d(t, "a", (function() {
				return I
			})), n.d(t, "s", (function() {
				return T
			})), n.d(t, "v", (function() {
				return D
			})), n.d(t, "w", (function() {
				return k
			}));
			var r = n("./src/reddit/models/ScheduledPost/index.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					...s.n(e),
					screen: s.Y(e),
					subreddit: s.gb(e),
					userSubreddit: s.qb(e)
				}),
				i = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(r.q)(e)
				}),
				c = () => e => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post",
					...o(e)
				}),
				a = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "schedule_post_composer",
					...o(e)
				}),
				d = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_date",
					...o(e)
				}),
				u = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_time",
					...o(e)
				}),
				l = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_timezone",
					...o(e)
				}),
				m = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "apply",
					...o(e)
				}),
				p = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "cancel",
					...o(e)
				}),
				b = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_submit",
					...o(t),
					scheduledPost: i(e)
				}),
				f = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit",
					...o(t),
					scheduledPost: i(e)
				}),
				_ = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "scheduled_posts",
					...o(e)
				}),
				E = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "event_posts",
					...o(e)
				}),
				O = () => e => ({
					source: "post",
					action: "click",
					noun: "edit_post",
					...o(e)
				}),
				v = () => e => ({
					source: "post",
					action: "click",
					noun: "submit_post_now",
					...o(e)
				}),
				h = e => t => ({
					source: "post",
					action: "click",
					noun: "overflow_menu",
					...o(t),
					actionInfo: s.d(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				S = {
					[r.d.Hourly]: "hourly_frequency",
					[r.d.Daily]: "daily_frequency",
					[r.d.Weekly]: "weekly_frequency",
					[r.d.Monthly]: "monthly_frequency",
					[r.b]: "custom_frequency"
				},
				C = e => t => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : S[e],
					...o(t)
				}),
				y = () => e => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...o(e)
				}),
				g = (e, t, n) => i => ({
					source: "post",
					action: "click",
					noun: Object(r.m)(e),
					...o(i),
					actionInfo: s.d(i, {
						settingValue: t ? "true" : "false",
						pageType: n ? "recurring_posts" : "scheduled_posts"
					})
				}),
				j = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta",
					...o(e)
				}),
				x = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post",
					...o(e)
				}),
				A = () => e => ({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer",
					...o(e)
				}),
				N = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "update",
					...o(e),
					scheduledPost: i(t)
				}),
				I = () => e => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel",
					...o(e)
				}),
				T = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete",
					...o(e),
					scheduledPost: i(t)
				}),
				D = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer",
					...o(e)
				}),
				k = () => (e, t) => {
					const n = o(e);
					return {
						source: "post",
						action: "view",
						noun: "error",
						...n,
						actionInfo: {
							...n.actionInfo,
							reason: "failed_post"
						},
						scheduledPost: i(t)
					}
				}
		},
		"./src/reddit/helpers/trackers/snoovatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return a
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "r", (function() {
				return l
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "n", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "q", (function() {
				return E
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "k", (function() {
				return v
			})), n.d(t, "m", (function() {
				return S
			})), n.d(t, "j", (function() {
				return C
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "p", (function() {
				return j
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "a", (function() {
				return N
			})), n.d(t, "o", (function() {
				return I
			}));
			var r = n("./src/reddit/models/Gold/ProductOffer.ts"),
				s = n("./src/reddit/selectors/avatarMarketing.ts"),
				o = n("./src/reddit/selectors/telemetry.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const c = {
					goldPurchase: {
						offerContext: r.a.AvatarNewGear
					}
				},
				a = e => t => {
					const n = {
						source: e,
						action: "click",
						noun: "edit_snoovatar",
						...o.n(t)
					};
					return Object(s.a)(t) && Object.assign(n, c), n
				},
				d = (e, t) => n => {
					const {
						id: r
					} = Object(i.Ab)(n, {
						userName: t
					});
					return {
						source: e,
						action: "click",
						noun: "copy_avatar",
						...o.n(n),
						snoovatar: {
							userGenerated: r
						}
					}
				},
				u = e => ({
					...o.n(e),
					source: "avatar",
					action: "click",
					noun: "try_this_look_post",
					snoovatar: o.eb(e)
				}),
				l = e => ({
					...o.n(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "snoovatar_builder"
					},
					snoovatar: o.eb(e)
				}),
				m = e => ({
					...o.n(e),
					source: "avatar_builder",
					action: "click",
					noun: "close",
					snoovatar: o.eb(e)
				}),
				p = e => ({
					source: "nav",
					action: "view",
					noun: "avatar_marketing",
					...o.n(e),
					...c
				}),
				b = e => ({
					source: "nav",
					action: "click",
					noun: "avatar_marketing",
					...o.n(e),
					...c
				}),
				f = e => t => ({
					...o.n(t),
					source: "snoovatar",
					action: "set_to_profile",
					noun: "snoovatar",
					snoovatar: {
						userGeneratedSource: e
					}
				}),
				_ = e => t => n => ({
					source: "avatar",
					action: e,
					noun: "community_spaces",
					...o.n(n),
					snoovatar: o.eb(n),
					actionInfo: {
						paneName: "avatar_community_spaces" + (t ? "_control" : "")
					}
				}),
				E = _("view"),
				O = _("click"),
				v = _("dismiss"),
				h = (e, t, n) => () => r => ({
					source: e,
					action: t,
					noun: n,
					...o.n(r),
					snoovatar: o.eb(r)
				}),
				S = h("anniversary_achievement", "view", "anniversary_achievement"),
				C = h("anniversary_achievement", "click", "close"),
				y = h("anniversary_achievement", "click", "equip"),
				g = e => () => t => ({
					...o.n(t),
					source: "gold_top_nav",
					action: e,
					noun: "quick_create_cta"
				}),
				j = g("view"),
				x = g("click"),
				A = (e, t, n) => r => ({
					source: e,
					action: t,
					noun: n,
					...o.n(r),
					actionInfo: {
						pageType: "onboarding"
					},
					snoovatar: o.eb(r)
				}),
				N = e => A("onboarding", "click", e),
				I = () => A("avatar", "view", "onboarding")
		},
		"./src/reddit/hooks/useIsRemovedOrDeletedPost.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/selectors/removedPosts.ts");
			const o = () => Object(r.e)(e => Object(s.d)(e))
		},
		"./src/reddit/hooks/useTheme.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js"),
				s = n("./src/lib/CSSVariableProvider/index.tsx");

			function o() {
				return Object(r.useContext)(s.b)
			}
		},
		"./src/reddit/icons/fonts/Premium/index.m.less": function(e, t, n) {
			e.exports = {
				PremiumIcon: "dLp3R7pmxclGjLS87yr5S",
				premiumIcon: "dLp3R7pmxclGjLS87yr5S"
			}
		},
		"./src/reddit/icons/fonts/Premium/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Premium/index.m.less"),
				c = n.n(i);
			const a = n("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				title: e.title,
				className: `${Object(o.b)("premium",e.isFilled)} ${e.className}`
			}), "PremiumIcon", c.a)
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			var r, s, o = n("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(r || (r = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(s || (s = {}));
			const i = {
					[r.Loyalty]: o.a.First,
					[r.Achievement]: o.a.Second,
					[r.Cosmetic]: void 0
				},
				c = e => e === o.a.First ? r.Loyalty : e === o.a.Second ? r.Achievement : r.Cosmetic
		},
		"./src/reddit/models/ScheduledPost/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "s", (function() {
				return i
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "o", (function() {
				return l
			})), n.d(t, "p", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "r", (function() {
				return E
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "k", (function() {
				return v
			})), n.d(t, "i", (function() {
				return h
			})), n.d(t, "j", (function() {
				return S
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "n", (function() {
				return y
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "m", (function() {
				return j
			})), n.d(t, "q", (function() {
				return x
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/lib/assertNever.ts"),
				s = n("./src/reddit/models/GqlTopLevelField.ts"),
				o = n("./src/reddit/models/User/index.ts");
			const i = "scheduledposts";
			var c, a, d;
			! function(e) {
				e.LINK = "LINK", e.POLL = "POLL", e.SELF = "SELF"
			}(c || (c = {})),
			function(e) {
				e.RTJSON = "RTJSON", e.TEXT = "TEXT"
			}(a || (a = {})),
			function(e) {
				e.CREATED = "CREATED", e.PROCESSING = "PROCESSING", e.FAILED = "FAILED", e.SUCCESS = "SUCCESS"
			}(d || (d = {}));
			const u = e => {
					return new Set(["links", "text", "polls"]).has(e)
				},
				l = e => e.__typename === o.c.AvailableRedditor,
				m = e => e.__typename === s.a.Subreddit;
			var p, b, f, _;
			! function(e) {
				e.standalonePosts = "standalonePosts", e.recurringPosts = "recurringPosts"
			}(p || (p = {})),
			function(e) {
				e.MONDAY = "MONDAY", e.TUESDAY = "TUESDAY", e.WEDNESDAY = "WEDNESDAY", e.THURSDAY = "THURSDAY", e.FRIDAY = "FRIDAY", e.SATURDAY = "SATURDAY", e.SUNDAY = "SUNDAY"
			}(b || (b = {})),
			function(e) {
				e[e.MONDAY = 0] = "MONDAY", e[e.TUESDAY = 1] = "TUESDAY", e[e.WEDNESDAY = 2] = "WEDNESDAY", e[e.THURSDAY = 3] = "THURSDAY", e[e.FRIDAY = 4] = "FRIDAY", e[e.SATURDAY = 5] = "SATURDAY", e[e.SUNDAY = 6] = "SUNDAY"
			}(f || (f = {})),
			function(e) {
				e[e.SUNDAY = 0] = "SUNDAY", e[e.MONDAY = 1] = "MONDAY", e[e.TUESDAY = 2] = "TUESDAY", e[e.WEDNESDAY = 3] = "WEDNESDAY", e[e.THURSDAY = 4] = "THURSDAY", e[e.FRIDAY = 5] = "FRIDAY", e[e.SATURDAY = 6] = "SATURDAY"
			}(_ || (_ = {}));
			const E = e => b[_[e]],
				O = e => _[b[e]],
				v = e => f[b[e]],
				h = e => b[f[e]],
				S = e => _[f[e]];
			var C;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(C || (C = {}));
			const y = e => {
					switch (e) {
						case C.Hourly:
						case C.Daily:
						case C.Weekly:
						case C.Monthly:
							return !0
					}
					return !1
				},
				g = "custom",
				j = e => {
					switch (e) {
						case "isNsfw":
							return "mark_as_nsfw";
						case "isOriginalContent":
							return "mark_as_oc";
						case "isSticky":
							return "sticky";
						case "isModDistinguished":
							return "mod_distinguish";
						case "isSpoiler":
							return "mark_as_spoiler";
						case "isContestMode":
							return "mark_as_contest_mode";
						case "isPostAsMetaMod":
							return "post_as_meta_mod";
						default:
							return Object(r.a)(e)
					}
				},
				x = e => "frequency" in e && !!e.frequency
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var r, s = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(r || (r = {}));
			const o = {
				status: r.NotFetched
			};
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.a:
						if (e.status === r.Fetched && e.data.stripe && e.data.stripe.sources) {
							const n = t.payload.cardId,
								{
									[n]: r,
									...s
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: s
									}
								}
							}
						}
						return e;
					case s.e:
						if (e.status === r.Fetched && e.data.braintree && e.data.braintree.sources) {
							const n = t.payload.sourceId,
								{
									[n]: r,
									...s
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: s
									}
								}
							}
						}
						return e;
					case s.b:
						return {
							error: t.payload.error, status: r.Failure
						};
					case s.c:
						return {
							data: t.payload, status: r.Fetched
						};
					case s.d:
						return {
							status: r.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, s = n("./src/lib/constants/specialMembership.ts"),
				o = n("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				i = n("./src/reddit/helpers/economics/sortBadges.ts"),
				c = n("./src/reddit/models/Badge/index.ts"),
				a = n("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(r || (r = {}));
			const d = {};

			function u(e) {
				return "userId" in e
			}

			function l(e, t, n, r) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(s => {
						let o;
						(o = e.placement ? e.placement === c.a.First ? r[a.a.Loyalty][s] : r[a.a.Achievement][s] : u(e) ? r[a.a.Cosmetic][a.c.MyBadges][s] : r[a.a.Cosmetic][a.c.Gallery][s]) && (u(e) ? n.has(e.id) && o.unlocked.push(e) : t.has(e.id) || o.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const n = parseInt(e.price || "0"),
						r = parseInt(t.price || "0");
					return n === r ? Object(i.b)(e, t) : n - r
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function p(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === s.a).map(m).sort((e, n) => {
					const r = t[e.id],
						s = t[n.id];
					return Object(i.b)(r, s)
				})
			}

			function b(e) {
				const t = {
					[a.a.Loyalty]: {},
					[a.a.Achievement]: {},
					[a.a.Cosmetic]: {
						[a.c.Gallery]: {},
						[a.c.MyBadges]: {}
					}
				};
				Object.keys(e.collections).forEach(n => {
					const r = e.collections[n],
						s = {
							description: r.description,
							highlight: r.extra && r.extra.style && r.extra.style.color,
							id: r.id,
							locked: [],
							title: r.title,
							unlocked: []
						};
					t[a.a.Loyalty][n] = {
						...s,
						locked: [],
						unlocked: []
					}, t[a.a.Achievement][n] = {
						...s,
						locked: [],
						unlocked: []
					}, t[a.a.Cosmetic][a.c.Gallery][n] = {
						...s,
						locked: [],
						unlocked: []
					}, t[a.a.Cosmetic][a.c.MyBadges][n] = {
						...s,
						locked: [],
						unlocked: []
					}
				});
				const n = new Set;
				e.userOwnedBadges.forEach(t => {
					const r = e.badges[t];
					r && n.add(r.type)
				});
				const r = new Set(e.userOwnedBadges);
				return l(Object.keys(e.badges).map(t => e.badges[t]), n, r, t), l(Object.keys(e.products).map(t => e.products[t]), n, r, t), {
					collections: {
						[a.a.Loyalty]: p(t[a.a.Loyalty], e.collections),
						[a.a.Achievement]: p(t[a.a.Achievement], e.collections),
						[a.a.Cosmetic]: {
							[a.c.Gallery]: p(t[a.a.Cosmetic][a.c.Gallery], e.collections),
							[a.c.MyBadges]: p(t[a.a.Cosmetic][a.c.MyBadges], e.collections)
						}
					},
					subscription: e.subscription,
					userOwnedBadges: e.userOwnedBadges.map(t => e.badges[t]).filter(Boolean)
				}
			}
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.a: {
						const {
							subredditId: n
						} = t.payload, s = e[n];
						return s && s.status === r.Fetched ? {
							...e,
							[n]: {
								...s,
								data: {
									...s.data
								},
								raw: {
									...s.raw
								}
							}
						} : e
					}
					case o.h: {
						const {
							subredditId: n
						} = t.payload, s = e[n];
						return s && s.status === r.Fetched ? {
							...e,
							[n]: {
								...s,
								data: {
									...s.data,
									subscription: {
										...s.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...s.raw,
									subscription: {
										...s.raw.subscription || {},
										settings: {
											renew: !1
										}
									}
								}
							}
						} : e
					}
					case o.i: {
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: {
								raw: n,
								data: b(n),
								status: r.Fetched
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/features/avatar/index.ts": function(e, t, n) {
			"use strict";
			var r, s, o = n("./node_modules/redux/es/redux.js"),
				i = n("./src/reddit/actions/snoovatar.ts");
			! function(e) {
				e.PREMIUM = "PREMIUM"
			}(r || (r = {})),
			function(e) {
				e[e.BACKGROUND = 0] = "BACKGROUND", e[e.ACCESSORY_BACK = 1] = "ACCESSORY_BACK", e[e.HAIR_BACK = 2] = "HAIR_BACK", e[e.BODY_BOTTOM = 3] = "BODY_BOTTOM", e[e.BODY = 4] = "BODY", e[e.ACCESSORY = 5] = "ACCESSORY", e[e.FACE_LOWER = 6] = "FACE_LOWER", e[e.FACE_UPPER = 7] = "FACE_UPPER", e[e.HAIR = 8] = "HAIR", e[e.HEAD_ACCESSORY = 9] = "HEAD_ACCESSORY"
			}(s || (s = {}));
			const c = {
				id: "",
				csrf_token: "",
				snoovatar: null,
				websocketsUrls: {
					renderer: "",
					download: ""
				},
				capabilities: [r.PREMIUM],
				hasActiveClosetSubscription: !1
			};
			var a = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.b:
						return {
							...t.payload
						};
					default:
						return e
				}
			};
			const d = {
					marketingEvent: {
						active: !1,
						assetUrls: null,
						experimentRequired: null
					},
					quickCreateV1: {
						id: "-1",
						active: !1,
						text: "",
						min_days_on_reddit: 0,
						should_have_avatar: !1,
						max_event_views: 0,
						min_days_since_last_event_interaction: 0,
						webAssetUrls: []
					}
				},
				u = "avatar_quick_create_event",
				l = "avatar_marketing_event",
				m = "avatar_promo_archived",
				p = e => {
					const t = {};
					return e.forEach(e => {
						if (e.startsWith("targeting:")) {
							const n = e.split(":");
							if (!n.length && n.length < 3) return null;
							try {
								t[n[1]] = JSON.parse(n[2])
							} catch {
								t[n[1]] = n[2]
							}
						}
					}), t
				};

			function b(e) {
				if (!e) return d;
				const t = d;
				return e.forEach(e => {
					var n;
					const {
						startsAt: r,
						endsAt: s,
						webAssetUrls: o,
						tags: i
					} = e, c = r && new Date(r) <= new Date, a = !!s && new Date(s) < new Date, d = !!c && !a, b = (i || []).includes(m);
					if (i && i.includes(u) && !b) {
						const {
							text: n,
							id: r
						} = e, s = o || null, c = p(i);
						t && (t.quickCreateV1 = {
							...c,
							id: r,
							text: n,
							active: d && !!s,
							webAssetUrls: s
						})
					}
					if (i && i.includes(l) && !b) {
						const e = o || null,
							r = (null === (n = i.find(e => e.startsWith("feature:") && e.includes("web"))) || void 0 === n ? void 0 : n.split("feature:")[1]) || null;
						t && (t.marketingEvent = {
							active: d && !!e,
							assetUrls: e,
							experimentRequired: r
						})
					}
				}), t
			}
			var f = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				_ = n("./src/reddit/actions/modal.ts"),
				E = n("./src/reddit/constants/modals.ts");
			var O = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n;
				switch (t.type) {
					case f.s:
						const {
							avatarMarketingEvents: r
						} = t.payload;
						return r ? b(r) : d;
					case _.c:
						return (null === (n = t.payload) || void 0 === n ? void 0 : n.id) === E.a.SNOOVATAR_MODAL ? d : e;
					default:
						return e
				}
			};
			var v = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.a: {
						const {
							image: e,
							accessory_ids: n
						} = t.payload;
						return {
							image: e,
							accessoryIds: n
						}
					}
					default:
						return e
				}
			};
			t.a = Object(o.c)({
				marketing: O,
				avatarUser: a,
				randomAvatar: v
			})
		},
		"./src/reddit/selectors/authorFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			}));
			const r = (e, t) => {
					let {
						post: n
					} = t;
					const r = n.belongsTo.id;
					if (!r) return null;
					const s = e.authorFlair.models[r];
					if (!s) return null;
					const o = n.author;
					return o && s[o] || null
				},
				s = (e, t) => {
					let {
						subredditId: n
					} = t;
					const r = e.authorFlair && e.authorFlair.inContext && e.authorFlair.inContext.username;
					if (!r) return null;
					if (!n) return null;
					const s = e.authorFlair.models[n];
					return s ? s[r] : null
				},
				o = e => e.authorFlair.inContext
		},
		"./src/reddit/selectors/avatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			}));
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(r.a)({
				features: {
					avatar: s.a
				}
			});
			const o = e => {
					var t, n;
					return null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.avatarUser
				},
				i = e => {
					var t, n;
					return null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.avatarUser.csrf_token
				},
				c = e => {
					var t, n;
					return (null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.randomAvatar) || null
				}
		},
		"./src/reddit/selectors/avatarMarketing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/reducers/features/avatar/index.ts"),
				o = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			Object(r.a)({
				features: {
					avatar: s.a
				}
			});
			const i = e => {
					var t, n;
					return !!(null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing)
				},
				c = e => {
					var t, n, r, s;
					const i = null === (r = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing) || void 0 === r ? void 0 : r.marketingEvent;
					if (!(null == i ? void 0 : i.active) || !(null === (s = null == i ? void 0 : i.assetUrls) || void 0 === s ? void 0 : s.length)) return null;
					const c = i.assetUrls[0];
					return !i.experimentRequired || Object(o.a)(i.experimentRequired)(e) ? c : null
				}
		},
		"./src/reddit/selectors/experiments/econ/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return o
			})), n.d(t, "n", (function() {
				return i
			})), n.d(t, "p", (function() {
				return c
			})), n.d(t, "m", (function() {
				return a
			})), n.d(t, "l", (function() {
				return d
			})), n.d(t, "r", (function() {
				return u
			})), n.d(t, "q", (function() {
				return l
			})), n.d(t, "i", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "k", (function() {
				return S
			})), n.d(t, "o", (function() {
				return C
			})), n.d(t, "s", (function() {
				return y
			})), n.d(t, "t", (function() {
				return g
			})), n.d(t, "v", (function() {
				return j
			})), n.d(t, "u", (function() {
				return x
			})), n.d(t, "w", (function() {
				return A
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const o = Object(s.a)(r.gd),
				i = Object(s.a)(r.ed),
				c = Object(s.a)(r.hd),
				a = Object(s.a)(r.dd),
				d = Object(s.a)(r.cd),
				u = Object(s.a)(r.jd),
				l = Object(s.a)(r.id),
				m = Object(s.a)(r.Zc),
				p = Object(s.a)(r.Xc),
				b = Object(s.a)(r.Rc),
				f = Object(s.a)(r.Sc),
				_ = Object(s.a)(r.Pc),
				E = Object(s.a)(r.Qc),
				O = Object(s.a)(r.Uc),
				v = Object(s.a)(r.Oc),
				h = Object(s.a)(r.ad),
				S = Object(s.a)(r.bd),
				C = Object(s.a)(r.fd),
				y = Object(s.a)(r.kd),
				g = Object(s.a)(r.md),
				j = Object(s.a)(r.pd),
				x = Object(s.a)(r.od),
				A = Object(s.a)(r.nd)
		},
		"./src/reddit/selectors/experiments/loggedOutOneFeed.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return l
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/countrySites.ts"),
				c = n("./src/reddit/selectors/experiments/index.ts"),
				a = n("./src/reddit/selectors/experiments/utils.ts");
			const d = Object(r.a)(c.f, i.e, (e, t) => e && !t),
				u = e => Object(o.c)(e, {
					experimentEligibilitySelector: d,
					experimentName: s.Yb
				}),
				l = e => !!Object(a.a)(u(e))
		},
		"./src/reddit/selectors/experiments/postActionBarAnimation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "e", (function() {
				return f
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/experiments/index.ts"),
				i = n("./src/reddit/selectors/experiments/presence.ts"),
				c = n("./src/reddit/selectors/userPrefs.ts");
			const a = 1e4,
				d = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.s
					});
					return t === r.x.VoteCountOnly || t === r.x.CommentCountOnly || t === r.x.VoteAndCommentCount
				},
				u = e => {
					if (Object(c.c)(e) || Object(i.a)(e)) return !1;
					const t = Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.s
					});
					return t === r.x.VoteCountOnly || t === r.x.VoteAndCommentCount
				},
				l = e => {
					if (Object(c.c)(e) || Object(i.a)(e)) return !1;
					const t = Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.s
					});
					return t === r.x.CommentCountOnly || t === r.x.VoteAndCommentCount
				},
				m = (e, t) => {
					let {
						post: n
					} = t;
					return p(e, {
						postId: n.id
					})
				},
				p = (e, t) => {
					let {
						postId: n
					} = t;
					const s = e.posts.models[n];
					if (Object(c.c)(e) || !s || s.isSponsored || s.isScoreHidden || s.score >= a || Object(i.a)(e)) return !1;
					const d = Object(o.d)(e, {
							experimentName: r.s
						}),
						u = null == d ? void 0 : d.variant;
					return u === r.x.VoteCountOnly || u === r.x.VoteAndCommentCount
				},
				b = (e, t) => {
					let {
						postId: n
					} = t;
					const s = e.posts.models[n];
					if (Object(c.c)(e) || !s || s.isSponsored || s.numComments >= a || Object(i.a)(e)) return !1;
					const d = Object(o.d)(e, {
							experimentName: r.s
						}),
						u = null == d ? void 0 : d.variant;
					return u === r.x.CommentCountOnly || u === r.x.VoteAndCommentCount
				},
				f = e => {
					if (Object(i.a)(e)) return !1;
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.jc
					}) === r.Cc.Enabled
				}
		},
		"./src/reddit/selectors/experiments/presence.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				return Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: r.He
				}) === r.sd
			}
		},
		"./src/reddit/selectors/removedPosts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "d", (function() {
				return _
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				i = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				c = n("./src/reddit/models/Media/index.ts"),
				a = n("./src/reddit/models/Post/index.ts"),
				d = n("./src/reddit/selectors/user.ts");
			const u = new Set([a.g.AntiEvilOps, a.g.AutomodFiltered, a.g.CommunityOps, a.g.ContentTakedown, a.g.CopyrightTakedown, a.g.Moderator, a.g.Reddit]),
				l = new Set([a.g.Author, a.g.AuthorDeleted]),
				m = Object(s.a)(o.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return u.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const n = r.fbt._("[removed]", null, {
						hk: "2CBRa4"
					}).toString();
					let s = Object(i.b)(e);
					return s || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== c.o.TEXT || (s = e.media.markdownContent), s === n
				}),
				p = Object(s.a)(o.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return l.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const n = r.fbt._("[deleted]", null, {
						hk: "12mOne"
					}).toString();
					let s = Object(i.b)(e);
					return s || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== c.o.TEXT || (s = e.media.markdownContent), s === n
				}),
				b = Object(s.a)(o.a, e => {
					if (!e) return !1;
					if (e && e.isSpam) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return l.has(t)
					}
					return !(e.created > Date.UTC(2019, 0))
				}),
				f = Object(s.a)(d.k, o.a, (e, t) => !!((null == e ? void 0 : e.id) && (null == t ? void 0 : t.authorId)) && e.id === t.authorId),
				_ = Object(s.a)(o.a, e => !(!e || !1 !== e.isRobotIndexable))
		},
		"./src/reddit/selectors/userPrefs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/selectors/experiments/loggedOutOneFeed.ts");
			const o = e => {
					if (i(e)) return !1;
					const {
						subscriptionsPinned: t
					} = e.user.prefs;
					return !(void 0 !== t || !Object(s.a)(e)) || !!t
				},
				i = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== r.Nb.MODERATION_PAGES),
				c = e => e.user.prefs.reduceAnimationsFromAwards
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/config.ts"),
				s = n("./src/lib/fastdom/index.ts"),
				o = n("./src/reddit/actions/jsApi.ts");
			const i = "JSAPI customEvent.detail.name is deprecated. Please upgrade to <meta>",
				c = "jsapi.consumer",
				a = "/r/redesign/wiki/jsapi";
			var d = n("./src/reddit/constants/jsapiEvents.ts");
			const u = 100;
			const l = new class {
				constructor() {
					if (this.queue = [], this.active = !1, "undefined" == typeof document) return;
					let e;
					this.store = new Promise(t => e = t), this.attachStore = t => e(t);
					const t = document.querySelectorAll(`meta[name="${c}"]`);
					t.length && (t.forEach(e => {
						const t = e.content;
						this.store.then(e => e.dispatch(o.b(t)))
					}), this.store.then(() => this.fireEventsQueue())), document.addEventListener(d.b, e => this.onReadyEvent(e), !0)
				}
				onReadyEvent(e) {
					let t;
					if (this.active = !0, e.target && e.target instanceof HTMLMetaElement && e.target.name === c && (t = e.target.content), !t) try {
						e.detail && (t = e.detail.name, console.warn(i, `${r.a.redditUrl}${a}`, e))
					} catch (n) {
						return void console.error(i, `${r.a.redditUrl}${a}`, n)
					}
					this.store.then(e => {
						e.dispatch(o.b(t || "")), this.fireEventsQueue()
					})
				}
				publish(e, t, n) {
					const r = {
						name: e,
						props: t,
						element: n
					};
					this.queue.push(r), this.queue.length > u && this.queue.shift(), this.active && this.fireEvent(r)
				}
				fireEvent(e) {
					e.element.dispatchEvent(new CustomEvent(e.name, {
						detail: e.props
					}))
				}
				fireEventsQueue() {
					s.a.read(() => {
						for (let e = 0; e < this.queue.length; e++) {
							const t = this.queue[e];
							this.fireEvent(t)
						}
					})
				}
			};
			t.a = l
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddi~90fdacc3.8cdd92579b503a645c6c.js.map