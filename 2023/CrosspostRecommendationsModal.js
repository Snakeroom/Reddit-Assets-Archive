// https://www.redditstatic.com/desktop2x/CrosspostRecommendationsModal.f28c7e954e72762b5a7c.js
// Retrieved at 7/31/2023, 11:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CrosspostRecommendationsModal"], {
		"./src/reddit/components/CrosspostRecommendationsModal/index.m.less": function(e, t, s) {
			e.exports = {
				modalHeader: "zlWcFMciXi-QLlkXdXSdF",
				modalTitle: "_2QeEwNWFIoB7OuqxYFv1MN",
				modalMetaText: "_2sKeieuxmPn8rYHadUzyJj",
				contentWrapper: "e4fUqOL0E1ZF7boyHleXp",
				itemWrapper: "_2kkYTwS6Xs5kBfSQz1p7pW",
				modalFooter: "_3tWGS23JjY5Llbg0uhJVMK",
				otherCommunitiesButton: "_2nWCb27pXAZzZgDLKaLcZf"
			}
		},
		"./src/reddit/components/CrosspostRecommendationsModal/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/higherOrderComponents/asModal/index.tsx"),
				c = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/RecommendedSubreddits/index.tsx"),
				u = s("./src/reddit/controls/TextButton/index.tsx"),
				b = s("./src/reddit/constants/tracking.ts"),
				p = s("./src/reddit/selectors/telemetry.ts");
			const x = "community_recommendation";
			var C = s("./src/reddit/hooks/useTracking.ts"),
				h = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				S = s("./src/reddit/routes/postCreation/index.ts"),
				E = s("./src/reddit/routes/postCreation/constants.ts"),
				k = s("./src/reddit/selectors/experiments/postCreationSubRec.ts"),
				j = s("./src/reddit/components/CrosspostRecommendationsModal/index.m.less"),
				O = s.n(j);
			const {
				fbt: _
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.default = Object(a.a)(e => {
				let {
					onCloseModal: t,
					post: s
				} = e;
				const a = Object(i.d)(),
					j = Object(C.a)(),
					{
						isPending: g,
						isError: v,
						hasData: P,
						items: f
					} = Object(i.e)(Object(o.c)({
						isPending: k.i,
						isError: k.f,
						hasData: k.d,
						items: k.c
					})),
					w = Object(n.useCallback)(() => {
						j((e => t => ({
							...Object(p.q)(t),
							action: b.c.CLICK,
							noun: "close",
							source: x,
							post: Object(p.M)(t, e),
							subreddit: Object(p.nb)(t)
						}))(s.id)), t()
					}, [s.id]),
					y = Object(n.useCallback)(e => {
						const t = Object(S.c)(e.name);
						a(Object(d.b)(`${t}?source_id=${s.id}`))
					}, [s.id]),
					N = Object(n.useCallback)(() => {
						j((e => t => ({
							...Object(p.q)(t),
							action: b.c.CLICK,
							noun: "other_communities",
							source: x,
							post: Object(p.M)(t, e),
							subreddit: Object(p.nb)(t)
						}))(s.id)), a(Object(d.b)(`${E.b}?source_id=${s.id}`))
					}, [s.id]);
				return v ? (t(), null) : r.a.createElement(c.e, null, r.a.createElement(c.i, {
					className: O.a.modalHeader
				}, r.a.createElement(h.a, null, r.a.createElement(c.q, {
					className: O.a.modalTitle
				}, _._("Crosspost to a related community", null, {
					hk: "v80Kq"
				})), r.a.createElement(u.a, {
					onClick: w
				}, r.a.createElement(c.b, null))), r.a.createElement(c.m, {
					className: O.a.modalMetaText
				}, _._("Share your post to another community to let other people see your post", null, {
					hk: "2jhFRp"
				}))), r.a.createElement(c.l, null, r.a.createElement(m.b, {
					contentWrapperClassName: O.a.contentWrapper,
					hasData: P,
					isPending: g,
					items: f,
					itemWrapperClassName: O.a.itemWrapper,
					onSelectRecommendation: y,
					shouldShowSubredditOnlineUsers: !0
				})), r.a.createElement(c.g, {
					className: O.a.modalFooter
				}, r.a.createElement(l.o, {
					className: O.a.otherCommunitiesButton,
					onClick: N
				}, _._("OTHER COMMUNITIES", null, {
					hk: "1dWSPt"
				}))))
			})
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/PostTypes/index.m.less": function(e, t, s) {
			e.exports = {
				iconWrapper: "_2jjSvas2tvdAFgIvSzSBax",
				mDisabled: "_2PoEIlhFzgV0sUWfM40K-N",
				rowStyle: "_3DfMNtnkrzHeGN0WyUTTuX"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.m.less": function(e, t, s) {
			e.exports = {
				subredditIcon: "vxu9qtznQ1Kvakd5mtfxV",
				main: "_11CAFoZ5ryUXHrO5iX6Ktk",
				title: "_1bEDlh2fhWPx9-h3IqUvFa",
				lockTitleWithEllipsis: "mFsxWzlvJHnXmu7_xaIzI",
				secondary: "_2q4aqq7yddFWa3SfRCihRH",
				container: "_3oyS3dPRsa51zDEONlIdts",
				mHighLight: "F6s6qTIrbT1UvKhtNmPq4"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return j
			})), s.d(t, "b", (function() {
				return O
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/SubredditIcon/index.tsx"),
				a = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				c = s("./src/reddit/icons/svgs/ImagePost/index.tsx"),
				l = s("./src/reddit/icons/svgs/Link/index.tsx"),
				m = s("./src/reddit/icons/svgs/TextPost/index.tsx"),
				u = s("./src/reddit/icons/svgs/Video/index.tsx"),
				b = s("./src/reddit/layout/row/Inline/index.tsx"),
				p = s("./src/reddit/icons/fonts/index.tsx"),
				x = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/PostTypes/index.m.less"),
				C = s.n(x);
			const h = [{
				type: "text",
				Icon: m.a
			}, {
				type: "images",
				Icon: c.a
			}, {
				type: "videos",
				Icon: u.a
			}, {
				type: "links",
				Icon: l.a
			}, {
				type: "talks",
				Icon: () => r.a.createElement(p.a, {
					name: "audio"
				})
			}];

			function S(e) {
				const {
					allowedPostTypes: t,
					className: s
				} = e;
				return r.a.createElement(b.a, {
					className: Object(i.a)(C.a.rowStyle, s)
				}, h.map((e, s) => {
					let {
						type: n,
						Icon: d
					} = e;
					return r.a.createElement("div", {
						className: Object(i.a)(C.a.iconWrapper, {
							[C.a.mDisabled]: !t[n]
						}),
						key: s
					}, r.a.createElement(d, null))
				}))
			}
			var E = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.m.less"),
				k = s.n(E);
			const j = d.a.wrapped(o.b, "subredditIcon", k.a);

			function O(e) {
				const {
					className: t,
					explanationText: s,
					highlight: n,
					icon: d,
					item: o,
					lockTitleWithEllipsis: c,
					onClick: l,
					secondaryText: m,
					subText: u,
					title: b
				} = e, {
					allowedPostTypes: p
				} = o;
				return r.a.createElement("div", {
					className: Object(i.a)(k.a.container, {
						[k.a.mHighlight]: n
					}, t),
					onClick: l
				}, d, r.a.createElement("div", {
					className: k.a.main
				}, r.a.createElement("span", {
					className: Object(i.a)(k.a.title, {
						[k.a.lockTitleWithEllipsis]: c
					})
				}, b), m && r.a.createElement("span", {
					className: k.a.secondary
				}, m, u && r.a.createElement(r.a.Fragment, null, r.a.createElement(a.a, null), r.a.createElement("span", {
					className: k.a.secondary
				}, u))), s && r.a.createElement("span", {
					className: k.a.secondary
				}, s)), n && p && r.a.createElement(S, {
					allowedPostTypes: p
				}))
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/RecommendedSubreddits/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "C_XJ2ZB_b9iAPcFCHr4SW",
				title: "_1qKkNpHiC5Vgwbp0N8pOiG",
				contentWrapper: "_2l-m9MtS29tOlexExTlpXo",
				spinner: "_3rJ_SLWBH_jxAMlgNkciE9",
				itemWrapper: "Tx6TtQK3xJ9F5qpQlrEHT"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/RecommendedSubreddits/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return k
			})), s.d(t, "a", (function() {
				return j
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				d = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/postCreation/general.ts"),
				l = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				m = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = s("./src/reddit/helpers/trackers/postComposer.ts"),
				b = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				p = s("./src/reddit/hooks/useTracking.ts"),
				x = s("./src/reddit/selectors/experiments/postCreationSubRec.ts"),
				C = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/SubredditEntryContent/index.tsx"),
				h = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/RecommendedSubreddits/index.m.less"),
				S = s.n(h);
			const E = e => {
					const {
						items: t,
						itemWrapperClassName: s,
						isRedditRec: d,
						onSelectRecommendation: o,
						shouldShowSubredditOnlineUsers: c = !1
					} = e, m = Object(p.a)(), x = Object(r.useCallback)((e, t) => {
						m(Object(u.w)(e, t))
					}, []), h = Object(r.useRef)(null), E = Object(r.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t && m(Object(u.v)())
						})
					}, []);
					return Object(b.a)(h, E), i.a.createElement(i.a.Fragment, null, t.map((e, t) => i.a.createElement("div", {
						className: Object(a.a)(S.a.itemWrapper, s),
						key: e.name
					}, i.a.createElement(l.a, {
						subredditName: e.name,
						shouldOpenNewTabOnClicks: !0,
						onShow: () => x(e.name, t)
					}, i.a.createElement(C.a, {
						item: e,
						highlight: !1,
						shouldPrettyPrint: !0,
						explanationText: d ? n.fbt._("based on your subscription", null, {
							hk: "3Hb2XK"
						}) : n.fbt._("based on your content", null, {
							hk: "3u8Nrt"
						}),
						onClick: () => {
							o(e), m(Object(u.u)(e.name, t))
						},
						lockTitleWithEllipsis: !0,
						shouldShowSubredditOnlineUsers: c
					})))), i.a.createElement("span", {
						ref: h,
						key: "recommended-render"
					}))
				},
				k = e => {
					const {
						contentWrapperClassName: t,
						hasData: s,
						isPending: n,
						isRedditRec: r,
						items: d,
						itemWrapperClassName: o,
						onSelectRecommendation: a,
						shouldShowSubredditOnlineUsers: c = !1
					} = e;
					return i.a.createElement("div", {
						className: t
					}, n && i.a.createElement(m.a, {
						sizePx: 30,
						className: S.a.spinner
					}), s && !n && i.a.createElement(E, {
						isRedditRec: r,
						items: d,
						itemWrapperClassName: o,
						onSelectRecommendation: a,
						shouldShowSubredditOnlineUsers: c
					}))
				},
				j = e => {
					const t = Object(d.d)(),
						{
							isPending: s,
							hasData: a,
							isChanged: l,
							items: m,
							isRedditRec: u
						} = Object(d.e)(Object(o.c)({
							isPending: x.i,
							hasData: x.d,
							isChanged: x.e,
							items: x.c,
							isRedditRec: x.j
						}));
					return Object(r.useEffect)(() => {
						l && t(Object(c.k)())
					}, [l, t]), i.a.createElement("div", {
						className: S.a.wrapper,
						onMouseDown: e.onContainerMouseDown
					}, i.a.createElement("div", {
						className: S.a.title
					}, n.fbt._("Suggested communities", null, {
						hk: "4BebuH"
					})), i.a.createElement(k, {
						contentWrapperClassName: S.a.contentWrapper,
						hasData: a,
						isPending: s,
						isRedditRec: u,
						items: m,
						onSelectRecommendation: e.onSelectRecommendation
					}))
				}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/SubredditEntryContent/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_20inB3H1vZ94tVilqSJmU2",
				hasExplanationText: "_1xZtDFYDxzgIqaJfg9XzJh"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/SubredditEntryContent/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				d = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/prettyPrintNumber/index.ts"),
				c = s("./src/reddit/helpers/name/index.ts"),
				l = s("./src/reddit/selectors/subreddit.ts"),
				m = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.tsx"),
				u = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/SubredditEntryContent/index.m.less"),
				b = s.n(u);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function x(e) {
				const {
					item: {
						primaryColor: t,
						iconUrl: s,
						name: r,
						subscribers: u,
						active: x
					},
					shouldPrettyPrint: C,
					explanationText: h,
					shouldShowSubredditOnlineUsers: S = !1
				} = e, E = Object(d.e)(e => Object(l.z)(e, {
					subredditName: r
				})), k = Object(c.d)(r), j = void 0 !== u ? n.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [n.fbt._plural(u, "number", C ? Object(a.b)(u) : void 0)], {
					hk: "2SvJUX"
				}) : void 0, O = E ? n.fbt._("{number users online in subreddit} online", [n.fbt._param("number users online in subreddit", Object(a.b)(E.accountsActive))], {
					hk: "49HfzS"
				}) : void 0, _ = S ? `${j} • ${O}` : j, g = void 0 !== x ? n.fbt._({
					"*": "{number} online",
					_1: "1 online"
				}, [n.fbt._plural(x, "number", C ? Object(a.b)(x) : void 0)], {
					hk: "NgOAJ"
				}) : void 0, v = i.a.createElement(m.a, {
					className: Object(o.a)(b.a.icon, {
						[b.a.hasExplanationText]: !!h
					}),
					iconUrl: s,
					primaryColor: t,
					redditStyle: !0
				});
				return i.a.createElement(m.b, p({
					icon: v,
					title: k,
					secondaryText: _,
					subText: g
				}, e))
			}
		},
		"./src/reddit/icons/svgs/ImagePost/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1pAYDrDlDFEJk994qhxbYj"
			}
		},
		"./src/reddit/icons/svgs/ImagePost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/icons/svgs/ImagePost/index.m.less"),
				o = s.n(d);
			t.a = e => r.a.createElement("svg", {
				className: Object(i.a)(o.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M16,2H4A2,2,0,0,0,2,4V16a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V4A2,2,0,0,0,16,2Zm0,14H10.14a.49.49,0,0,1,.05-.48l3.15-4.26a.5.5,0,0,1,.38-.2.53.53,0,0,1,.4.17L16,13.35ZM4,13.51,7.26,8.82a.54.54,0,0,1,.42-.21.5.5,0,0,1,.41.23l2.85,4.34L8.84,16H4Zm10.4-7.1a1.7,1.7,0,1,1-1.7-1.7A1.7,1.7,0,0,1,14.4,6.41Z"
			}))
		},
		"./src/reddit/icons/svgs/Link/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M18.4773727,1.51993937 C19.4600354,2.50135191 20.0013751,3.80656808 20.0013751,5.19554812 C20.0013751,6.58577837 19.4600354,7.89099453 18.4773727,8.87240707 C17.9885417,9.35998782 17.1984109,9.35998782 16.7095799,8.87240707 C16.2207489,8.38357611 16.2207489,7.59094484 16.7095799,7.10461429 C17.2196644,6.59452982 17.500961,5.91691759 17.500961,5.19554812 C17.500961,4.47542886 17.2196644,3.79781663 16.7095799,3.28773215 C15.6569056,2.23755822 13.9453721,2.23755822 12.8926978,3.28773215 L8.62324066,7.55843946 C7.57181653,8.6111138 7.57181653,10.3226473 8.62324066,11.3753216 C9.11207162,11.8629024 9.11207162,12.6555336 8.62324066,13.1431144 C8.37945029,13.3869048 8.05939728,13.509425 7.73934427,13.509425 C7.41929127,13.509425 7.09923826,13.3869048 6.85544788,13.1431144 C4.82886225,11.1152785 4.82886225,7.81723232 6.85544788,5.79064668 L11.124905,1.51993937 C13.1502404,-0.505396058 16.4495368,-0.507896472 18.4773727,1.51993937 Z M11.3753215,6.8540728 C11.8641524,6.36524184 12.6542833,6.36524184 13.1431142,6.8540728 C15.1696999,8.88065844 15.1696999,12.1799549 13.1431142,14.2065405 L8.87240693,18.4772478 C7.89099439,19.4586603 6.58452801,20 5.19679818,20 C3.80781814,20 2.50135177,19.4586603 1.51993923,18.4772478 C-0.50664641,16.4506622 -0.50664641,13.1513657 1.51993923,11.1247801 C2.00877019,10.6359491 2.80015125,10.6359491 3.28773201,11.1247801 C3.77656297,11.6136111 3.77656297,12.4037419 3.28773201,12.8925729 C2.23505767,13.9452472 2.23505767,15.6567807 3.28773201,16.709455 C4.34040635,17.7621294 6.05193981,17.7621294 7.10461415,16.709455 L11.3753215,12.4387477 C12.4279958,11.3860734 12.4279958,9.67453992 11.3753215,8.62186558 C10.8864905,8.13303462 10.8864905,7.34290376 11.3753215,6.8540728 Z"
			})))
		},
		"./src/reddit/icons/svgs/Video/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("g", {
				transform: "translate(3, 4)"
			}, r.a.createElement("path", {
				d: "M15.4927,2.1514 C15.1797,1.9734 14.7947,1.9784 14.4857,2.1644 L11.9997,3.6554 L11.9997,2.0004 C11.9997,0.8974 11.1027,0.0004 9.9997,0.0004 L1.9997,0.0004 C0.8967,0.0004 -0.0003,0.8974 -0.0003,2.0004 L-0.0003,10.0004 C-0.0003,11.1034 0.8967,12.0004 1.9997,12.0004 L9.9997,12.0004 C11.1027,12.0004 11.9997,11.1034 11.9997,10.0004 L11.9997,8.3664 L14.4907,9.8394 C14.6477,9.9324 14.8237,9.9784 14.9997,9.9784 C15.1707,9.9784 15.3417,9.9344 15.4957,9.8474 C15.8077,9.6694 15.9997,9.3384 15.9997,8.9784 L15.9997,3.0214 C15.9997,2.6614 15.8057,2.3284 15.4927,2.1514"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CrosspostRecommendationsModal.f28c7e954e72762b5a7c.js.map