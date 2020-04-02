// https://www.redditstatic.com/desktop2x/ProfileComments.389cee6174287959033a.js
// Retrieved at 4/2/2020, 6:10:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileComments", "Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit", "Multireddit~ProfilePosts~ProfileSnoobuilder~Subreddit~SubredditWiki", "reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddit-compo~0e38b796", "ChatPost~ModQueuePages"], {
		"./node_modules/lodash/_baseFindKey.js": function(e, t) {
			e.exports = function(e, t, s) {
				var n;
				return s(e, (function(e, s, o) {
					if (t(e, s, o)) return n = s, !1
				})), n
			}
		},
		"./node_modules/lodash/findKey.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseFindKey.js"),
				o = s("./node_modules/lodash/_baseForOwn.js"),
				r = s("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, t) {
				return n(e, r(t, 3), o)
			}
		},
		"./node_modules/lodash/flatMap.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseFlatten.js"),
				o = s("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return n(o(e, t), 1)
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var n = s("./node_modules/lodash/toString.js"),
				o = 0;
			e.exports = function(e) {
				var t = ++o;
				return n(e) + t
			}
		},
		"./src/higherOrderComponents/withClickTracking.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return m
			})), s.d(t, "a", (function() {
				return p
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "d", (function() {
				return b
			}));
			var n = s("./node_modules/lodash/omit.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/selectors/telemetry.ts");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const l = (e, t, s) => (function() {
				let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
				return o => {
					const r = b(o.target, o.currentTarget);
					u(o.target, o.currentTarget, p.anchors) ? r && t && e(t(s, r)) : r && t && e(e => Object.assign({}, t(s, r)(e), {
						actionInfo: Object(c.previousPageActionInfo)(e)
					})), u(o.target, o.currentTarget, p.anchorsAndButtons) && n(o)
				}
			});

			function m(e) {
				class t extends a.a.Component {
					constructor() {
						super(...arguments), this.cancelClick = !1
					}
					render() {
						const {
							sendEvent: t,
							eventFactory: s,
							clickTrackingId: n
						} = this.props;
						return a.a.createElement(e, d({}, o()(this.props, "sendEvent", "eventFactory", "clickTrackingId"), {
							afterClickTracking: l(t, s, n)
						}))
					}
				}
				return Object(i.c)(t)
			}
			const p = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				u = (e, t, s) => !s.includes(e.tagName) && (e === t || !!e.parentElement && u(e.parentElement, t, s)),
				b = (e, t) => {
					const s = e.dataset.clickId;
					return s || (e === t ? null : !!e.parentElement && b(e.parentElement, t))
				}
		},
		"./src/lib/intersectionObserver/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return i
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			let n;
			const o = new Map,
				r = new Map;
			"undefined" != typeof window && (s("./node_modules/intersection-observer/intersection-observer.js"), n = new IntersectionObserver(e => {
				e.forEach(e => {
					const t = e.target,
						s = e.intersectionRatio > 0;
					if (s !== !!r.get(t)) {
						r.set(t, s);
						const n = o.get(t);
						if (n) {
							n(e, s && !!r.get(t))
						}
					}
				})
			}, {
				threshold: [.001]
			}));
			const a = (e, t) => {
					try {
						o.set(e, t), n && n.observe(e)
					} catch (s) {
						0
					}
				},
				i = e => {
					try {
						o.delete(e), n && n.unobserve(e)
					} catch (t) {
						0
					}
				}
		},
		"./src/lib/linkMatchers/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return u
			})), s.d(t, "d", (function() {
				return b
			})), s.d(t, "f", (function() {
				return h
			})), s.d(t, "i", (function() {
				return x
			})), s.d(t, "a", (function() {
				return g
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "g", (function() {
				return O
			})), s.d(t, "h", (function() {
				return E
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/core-js/modules/es6.regexp.match.js");
			var n = s("./node_modules/linkify-it/index.js"),
				o = s.n(n),
				r = s("./node_modules/tlds/index.js"),
				a = s.n(r),
				i = s("./src/lib/linkMatchers/customLinks.ts"),
				c = s("./node_modules/lodash/values.js"),
				d = s.n(c);
			const l = e => d()(i.b).includes(e.substring(1)),
				m = ["//", "ftp:", "http:", "https:", "mailto:"],
				p = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, m),
				u = o()().tlds(a.a).set({
					fuzzyIP: !0
				}),
				b = o()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(i.g.mention.prefix, i.g.mention.config),
				h = p(o()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config),
				x = p(o()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config),
				g = o()().tlds(a.a).set({
					fuzzyIP: !0
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config).add(i.g.mention.prefix, i.g.mention.config),
				f = u.normalize;
			u.normalize = e => {
				f.call(u, e), !e.schema && e.url.startsWith("http:") && (e.url = "https:".concat(e.url.slice(5)))
			};
			const v = (e, t) => {
					return (g.match(e) || []).filter(e => {
						const s = l(e.text);
						return !s || s && t
					})
				},
				y = e => {
					return [...x.match(e) || [], ...b.match(e) || []].map(e => !l(e.text) && e.text.replace(i.a, "")).filter(e => e)
				},
				O = (e, t) => {
					const s = e.match(t);
					if (s && 1 === s.length && 0 === s[0].index && s[0].lastIndex === t.length) return s[0]
				},
				E = e => {
					const t = u.match(e);
					if (t && 1 === t.length && 0 === t[0].index) {
						const s = t[0];
						return s.lastIndex === e.length ? s : ((e, t) => {
							const s = e.substring(t.lastIndex);
							if (/.*\/\/.*\/.*/.test(t.url) && /^(\?|\!)+$/.test(s)) return t.lastIndex += s.length, t.url += s, t
						})(e, s)
					}
				}
		},
		"./src/lib/loginHref/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				o = s("./node_modules/history/esm/history.js");
			t.a = (e, t, s) => {
				const r = Object(o.e)(e),
					a = encodeURIComponent("".concat(t).concat(r));
				return "".concat(n.a.accountManagerOrigin).concat(s || "/login", "?dest=").concat(a)
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
				o = s.n(n);
			const r = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", o.a);
			t.a = r
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, s) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				i = s("./src/reddit/components/CallToActionButton/index.m.less"),
				c = s.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			t.a = e => {
				var {
					className: t
				} = e, s = l(e, ["className"]);
				return o.a.createElement(a.a, d({
					className: Object(r.a)(t, c.a.CallToActionButton, {
						[c.a.mNotCardView]: s.isNotCardView
					})
				}, s))
			}
		},
		"./src/reddit/components/ClassicPost/Placeholder.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return O
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/PostLeftRail/index.tsx"),
				d = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				p = s("./src/reddit/models/Vote/index.ts"),
				u = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				b = s.n(u),
				h = s("./src/reddit/components/ClassicPost/placeholder.m.less"),
				x = s.n(h);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const f = Object(l.t)(),
				v = Object(a.c)({
					isFakeSubreddit: l.x
				}),
				y = Object(r.b)(v),
				O = e => {
					const t = {
						interactive: !1,
						voteState: p.a.notVoted
					};
					return o.a.createElement("div", {
						className: Object(i.a)(e.className, x.a.emptyVerticalVotes)
					}, o.a.createElement(d.d, g({
						key: "u"
					}, t)), e.children, o.a.createElement(d.c, g({
						key: "d"
					}, t)))
				},
				E = () => o.a.createElement(O, null, o.a.createElement("div", {
					className: x.a.emptyScore,
					key: "s"
				}));
			t.b = f(y(e => o.a.createElement("div", {
				className: Object(i.a)(e.className, b.a.classicPostStyles, b.a.classicAndCompactPlaceholderStyles)
			}, o.a.createElement(c.b, null, o.a.createElement(E, null)), o.a.createElement("div", {
				className: x.a.mainBody
			}, o.a.createElement("div", {
				className: x.a.thumbnailContainer
			}, o.a.createElement("div", {
				className: Object(i.a)(x.a.thumbnail, Object(m.b)(e))
			})), o.a.createElement("div", {
				className: x.a.content
			}, o.a.createElement("div", {
				key: "a"
			}, o.a.createElement("div", {
				key: "aa",
				className: Object(i.a)(x.a.title, Object(m.b)(e))
			}), o.a.createElement("div", {
				key: "ab",
				className: Object(i.a)(x.a.meta, Object(m.b)(e))
			})), o.a.createElement("div", {
				key: "f",
				className: x.a.flatlist
			}, o.a.createElement("div", {
				key: "fa",
				className: Object(i.a)(x.a.flatlistExpando, Object(m.b)(e))
			}), o.a.createElement("div", {
				key: "fb",
				className: x.a.flatlistSeparator
			}), o.a.createElement("div", {
				key: "fc",
				className: Object(i.a)(x.a.flatListItemOne, Object(m.b)(e))
			}), o.a.createElement("div", {
				key: "fd",
				className: Object(i.a)(x.a.flatListItemTwo, Object(m.b)(e))
			})))))))
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "renderMedia", (function() {
				return ie
			})), s.d(t, "SearchResultsClassicPost", (function() {
				return le
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/config.ts"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/getShortenedLink.ts"),
				d = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				l = s("./src/reddit/components/CallToActionButton/index.tsx"),
				m = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				p = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				u = s("./src/reddit/components/ExpandoButton/index.tsx"),
				b = s("./src/reddit/components/Flatlist/index.tsx"),
				h = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				x = s("./src/reddit/components/ModModeReports/index.tsx"),
				g = s("./src/reddit/components/ModModeReports/helpers.ts"),
				f = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				v = s("./src/reddit/components/PostContainer/index.tsx"),
				y = s("./src/reddit/components/PostMedia/index.tsx"),
				O = s("./src/reddit/components/PostMeta/index.tsx"),
				E = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				w = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				C = s("./src/reddit/components/PostTitle/index.tsx"),
				_ = s("./src/reddit/components/PostTopMeta/index.tsx"),
				j = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				k = s("./src/reddit/models/Media/index.ts"),
				S = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				P = s("./node_modules/react-redux/es/index.js"),
				I = s("./node_modules/reselect/es/index.js"),
				N = s("./src/reddit/actions/post.ts"),
				T = s("./src/reddit/actions/tooltip.ts"),
				L = s("./src/reddit/models/Vote/index.ts"),
				M = s("./src/reddit/contexts/InsideOverlay.tsx"),
				R = s("./src/reddit/contexts/PageLayer/index.tsx"),
				A = s("./src/reddit/selectors/activeModalId.ts"),
				B = s("./src/reddit/selectors/experiments/chatPost.ts"),
				F = s("./src/reddit/selectors/moderatorPermissions.ts"),
				D = s("./src/reddit/selectors/postFlair.ts"),
				H = s("./src/reddit/selectors/posts.ts"),
				W = s("./src/reddit/selectors/user.ts");
			const U = {
					autoplayPref: W.b,
					activeModalId: A.a,
					crosspost: H.d,
					currentUser: W.i,
					isActive: H.i,
					isChatPostExperiment: B.d,
					isCurrentUserProfilePost: H.j,
					isExpanded: H.l,
					isLoggedIn: W.G,
					isMeta: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(H.q)(e, s)
					},
					language: W.O,
					moderatorPermissions: F.i,
					modModeEnabled: R.O,
					post: H.N,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: D.a,
					showMedia: R.r,
					subredditOrProfile: H.Z,
					userIsOp: W.eb,
					flairStyleTemplate: R.Q
				},
				V = (e, t) => {
					let {
						listingKey: s,
						listingName: n,
						postId: o
					} = t;
					return {
						handleVote: t => {
							const s = t === L.a.upvoted ? Object(N.ab)(o) : Object(N.w)(o);
							e(s)
						},
						onIgnoreReports: () => e(Object(N.Y)(o)),
						onOpenReportsDropdown: t => e(Object(T.h)({
							tooltipId: t
						}))
					}
				},
				G = Object(P.b)(() => Object(I.c)(U), V, (e, t, s) => Object.assign({}, e, t, s, {
					formatTitle: e => e.title
				}));
			s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./node_modules/core-js/modules/es6.regexp.constructor.js");
			var z = s("./src/lib/LRUCache/index.ts");
			const K = Object(R.t)({
					searchQuery: R.U
				}),
				J = new z.a(250),
				q = e => {
					const t = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const s = "".concat(e.id, "-").concat(t);
						let n = J.get(s);
						if (void 0 === n) {
							const r = new RegExp("(\\b".concat(t, "\\b)"), "gi"),
								a = e.title.split(r);
							for (let e = 1; e < a.length; e += 2) a[e] = o.a.createElement("em", {
								style: {
									fontWeight: 700
								}
							}, a[e]);
							n = o.a.createElement("span", {
								style: {
									fontWeight: "normal"
								}
							}, o.a.Children.toArray(a)), J.set(s, n)
						}
						return n
					}
				},
				Q = Object(P.b)(() => Object(I.c)(U), V, (e, t, s) => Object.assign({}, e, t, s, {
					formatTitle: q(s.searchQuery || "")
				}));
			var Z = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				X = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				Y = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				$ = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				ee = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				te = s.n(ee),
				se = s("./src/reddit/components/ClassicPost/index.m.less"),
				ne = s.n(se);

			function oe() {
				return (oe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const re = 16;
			class ae extends o.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						className: e,
						currentUser: t,
						handleVote: s,
						isExpanded: n,
						isMeta: i,
						inSubredditOrProfile: y,
						eventFactory: P,
						first: I,
						flairStyleTemplate: N,
						formatTitle: T,
						isCheckboxSelected: L,
						isCurrentUserProfilePost: M,
						isFrontpage: R,
						isLoggedIn: A,
						isOverlay: B,
						language: F,
						moderatorPermissions: D,
						modModeEnabled: H,
						onClickPost: W,
						onIgnoreReports: U,
						onOpenReportsDropdown: V,
						poll: G,
						post: z,
						redditStyle: K,
						scrollerItemRef: J,
						showBulkActionCheckbox: q,
						showEditFlair: Q,
						showMedia: ee,
						subredditOrProfile: se,
						toggleCheckbox: ae,
						userIsOp: ce
					} = this.props, de = K ? void 0 : N, le = this.props.crosspost || void 0, me = Object(Y.a)(D), pe = Object(Z.a)(D), ue = Object(X.a)(D), be = H && Y.a, he = !!z.media && z.media.type === k.n.RTJSON, xe = ce && he, ge = y && !ee, fe = !!z.media && Object(k.C)(z.media), ve = {
						flairStyleTemplate: de,
						post: z,
						inSubredditOrProfile: y,
						isCurrentUserProfilePost: M,
						isOverlay: B,
						shouldShowSubscribeButton: !(R && A),
						subredditOrProfile: se,
						language: F
					}, ye = o.a.createElement(v.a, {
						className: Object(a.a)(te.a.classicPostStyles, ne.a.postContainer, Object($.a)(this.props), I ? ne.a.mFirst : void 0, e),
						isOverlay: B,
						style: Object.assign({}, Object($.d)(this.props), Object($.b)(this.props.flairStyleTemplate)),
						post: z,
						onClick: W,
						eventFactory: P
					}, o.a.createElement(w.a, {
						model: z,
						handleVote: s,
						showBulkActionCheckbox: q,
						isCheckboxSelected: L,
						toggleCheckbox: ae,
						flairStyleTemplate: de,
						redditStyle: K,
						subreddit: se
					}), o.a.createElement(f.a, {
						"data-click-id": "background",
						flairStyleTemplate: de
					}, o.a.createElement(p.a, {
						className: ne.a.eventMeta,
						post: z,
						language: F
					}), o.a.createElement("div", {
						className: ne.a.mainBody
					}, o.a.createElement("div", {
						className: ge ? ne.a.expandoContainer : ne.a.thumbnailContainer
					}, !ge && o.a.createElement(S.a, {
						className: ne.a.classicThumbnail,
						crosspost: le && z,
						isMeta: i,
						post: le || z,
						redditStyle: K,
						templatePlaceholderImage: de && de.postPlaceholderImage,
						removeLink: fe
					}), o.a.createElement(u.a, {
						crosspost: le,
						className: ne.a.rightExpando,
						isExpanded: !!n,
						post: z,
						useMediaIcons: !1
					})), o.a.createElement("div", {
						className: ne.a.content,
						"data-click-id": "body",
						style: {
							paddingBottom: "".concat(re, "px")
						}
					}, o.a.createElement(C.c, {
						className: G ? ne.a.titleWithPoll : void 0,
						format: T,
						poll: G,
						post: z,
						redditStyle: K,
						size: C.b.Medium,
						titleColor: de && de.postTitleColor,
						isOverlay: B
					}, z.source && !le && o.a.createElement(j.a, {
						href: z.source.url,
						isSponsored: z.isSponsored,
						postId: z.id,
						source: z.source
					}, Object(c.a)(z))), o.a.createElement(O.a, oe({
						key: "PostMeta"
					}, ve)), H && me && Object(g.c)(z) && o.a.createElement(x.a, {
						language: F,
						onIgnoreReports: U,
						reportable: z
					}), o.a.createElement("div", {
						className: ne.a.spacer
					}), z.source && z.source.url && z.isSponsored && o.a.createElement(d.a, {
						className: ne.a.adLinkWrapper
					}, o.a.createElement(j.a, {
						href: z.source.url.replace(r.a.redditUrl, ""),
						isSponsored: z.isSponsored,
						postId: z.id,
						source: z.source
					}, z.source.displayText), z.callToAction && o.a.createElement(l.a, {
						href: z.source.url.replace(r.a.redditUrl, ""),
						isSponsored: z.isSponsored,
						postId: z.id,
						source: z.source
					}, z.callToAction)), o.a.createElement("div", {
						className: ne.a.flatlistContainer
					}, o.a.createElement(u.a, {
						className: ne.a.leftExpando,
						crosspost: le,
						isExpanded: !!n,
						post: z,
						useMediaIcons: !1
					}), o.a.createElement(m.a, {
						className: ne.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: de,
						model: z,
						onVoteClick: s
					}), o.a.createElement(b.a, {
						className: ne.a.flatlistSeparator
					}), o.a.createElement(b.c, {
						className: ne.a.flatlist,
						currentUser: t,
						hasModFlairPerms: pe,
						hasModPostPerms: me,
						hasModFullPerms: ue,
						isOverlay: !!B,
						language: F,
						modModeEnabled: H,
						onIgnoreReports: U,
						onOpenReportsDropdown: V,
						post: z,
						showEditPost: xe,
						showEditFlair: Q,
						tooltipType: B ? _.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(E.h)({
							editPost: !be,
							save: !be,
							hide: !be,
							report: !be
						})
					})), o.a.createElement(h.d, {
						postId: z.id
					}))), ie(z, J, n)));
					return o.a.createElement(o.a.Fragment, null, ye)
				}
			}
			const ie = (e, t, s) => s ? e.crosspostRootId ? o.a.createElement("div", {
					className: ne.a.crosspostMediaWrapper
				}, ce(e, t)) : ce(e, t) : null,
				ce = (e, t) => o.a.createElement(y.a, {
					isExpando: !0,
					isListing: !0,
					isNotCardView: !0,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					showFull: !0,
					showCentered: !0,
					post: e
				}),
				de = Object(i.a)(ae),
				le = (e => K(Q(e)))(de);
			t.default = (e => G(Object(M.b)(e)))(de)
		},
		"./src/reddit/components/ClassicPost/placeholder.m.less": function(e, t, s) {
			e.exports = {
				thumbnailContainer: "_3cwq18vPueuAxRSrd1foNB",
				mainBody: "_1jxw1P65tWXN5u8kVHlX-n",
				content: "_2KR7fLQx_7rIv8QaoeXKZw",
				emptyScore: "_6w7aNMh3t6UMe07Q6oWFE",
				emptyVerticalVotes: "_1Xs9oeessHWcuF0VTVxRnl",
				thumbnail: "_2XOZ5bYpLdswvBAYUNa-ly",
				title: "n3AVRrP7HOfc0gAtGFpfv",
				meta: "_1BoNlCqTsaeLXkuZbADxyl",
				flatlist: "_1IgQuZI8L6A0NcShWmf08y",
				flatlistExpando: "_2AMaFX8Gwojg29X4_nOnaL",
				flatlistSeparator: "oljBm1Q059l3l84VHO9VM",
				flatListItemOne: "_2xeK0Acj_38O5kqiHgp7VC",
				flatListItemTwo: "_3WphuhFsMSKk2tQyD3fZeI"
			}
		},
		"./src/reddit/components/CommentBodyExpander/index.m.less": function(e, t, s) {
			e.exports = {
				collapsedCommentWrapper: "_3eqiPvSIRa-NZBdZNmskLn",
				collapsedCommentLine: "_3w5mzp5LqE702onvC_Wok3",
				rtjCollapsed: "_1J7xT7G-fgDlzIqRgaBrrB",
				seeMore: "_3NPaMDmW2g_XhEdxfn6inI"
			}
		},
		"./src/reddit/components/CommentContainer/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/higherOrderComponents/withClickTracking.tsx");
			const d = Object(a.c)({
					clickTrackingId: (e, t) => {
						let {
							comment: s
						} = t;
						return s.id
					}
				}),
				l = Object(r.b)(d);
			class m extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						children: t,
						className: s,
						comment: n,
						onClick: r,
						style: a
					} = this.props;
					return o.a.createElement("div", {
						className: Object(i.a)(s, "Comment ".concat(n.id)),
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: t => {
							!this.cancelClick && t.button < 2 && e(() => r && r(t, n))(t)
						},
						style: a
					}, t)
				}
			}
			t.a = l(Object(c.c)(m))
		},
		"./src/reddit/components/CommentModModeDropdown/index.m.less": function(e, t, s) {
			e.exports = {
				StyledDropdown: "_1PC9CIsUh5fq8cQdx3iMRr",
				styledDropdown: "_1PC9CIsUh5fq8cQdx3iMRr",
				Show: "BmpGQCO3oZBeUMzSaC5yX",
				show: "BmpGQCO3oZBeUMzSaC5yX"
			}
		},
		"./src/reddit/components/CommentModModeDropdown/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/comment/index.ts"),
				c = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/Dropdown/index.tsx"),
				m = s("./src/reddit/helpers/trackers/modTools.ts"),
				p = s("./src/reddit/selectors/tooltip.ts"),
				u = s("./node_modules/fbt/lib/FbtPublic.js"),
				b = s("./src/lib/lessComponent.tsx"),
				h = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx"),
				x = s("./src/reddit/icons/svgs/Show/index.tsx"),
				g = s("./src/reddit/components/CommentModModeDropdown/index.m.less"),
				f = s.n(g);
			const v = b.a.wrapped(x.a, "Show", f.a);
			var y = e => o.a.createElement(h.e, null, !e.comment.isApproved && o.a.createElement(h.c, {
				displayText: e.comment.approvedBy ? u.fbt._("Approved", null, {
					hk: "3BGaEK"
				}) : u.fbt._("Approve", null, {
					hk: "7CwFx"
				}),
				onClick: e.onApproveComment
			}, o.a.createElement(h.a, null)), !e.comment.bannedBy && o.a.createElement(o.a.Fragment, null, o.a.createElement(h.c, {
				displayText: e.comment.isRemoved ? u.fbt._("Removed", null, {
					hk: "17pv2n"
				}) : u.fbt._("Remove", null, {
					hk: "VP5J0"
				}),
				onClick: e.onRemoveComment
			}, o.a.createElement(h.g, null)), o.a.createElement(h.c, {
				displayText: e.comment.isSpam ? u.fbt._("Removed as spam", null, {
					hk: "2Kv9DF"
				}) : u.fbt._("Remove as spam", null, {
					hk: "OOps6"
				}),
				onClick: e.onSpamComment
			}, o.a.createElement(h.h, null)), o.a.createElement(h.c, {
				displayText: e.comment.isLocked ? u.fbt._("Unlock comment", null, {
					hk: "1canPl"
				}) : u.fbt._("Lock comment", null, {
					hk: "Qp5a0"
				}),
				onClick: e.onLockComment
			}, o.a.createElement(h.f, null))), e.comment.collapsedBecauseCrowdControl && o.a.createElement(h.c, {
				displayText: u.fbt._("Show comment", null, {
					hk: "9SB86"
				}),
				onClick: e.onShowComment
			}, o.a.createElement(v, null)));
			const O = b.a.wrapped(l.a, "StyledDropdown", f.a),
				E = Object(a.c)({
					isDropdownOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(p.b)(s)(e)
					}
				}),
				w = Object(r.b)(E, (e, t) => {
					let {
						comment: s
					} = t;
					return {
						onApproveComment: () => e(Object(i.H)(s.id)),
						onLockComment: () => e(Object(i.X)(s.id)),
						onRemoveComment: () => e(Object(i.cb)(s.id, !1)),
						onSpamComment: () => e(Object(i.cb)(s.id, !0)),
						onShowComment: () => e(Object(i.Y)(s.id))
					}
				}),
				C = Object(c.a)(O),
				_ = w(Object(d.c)(e => {
					const {
						comment: t,
						isDropdownOpen: s,
						onApproveComment: n,
						onLockComment: r,
						onRemoveComment: a,
						onSpamComment: i,
						onShowComment: c,
						sendEvent: d,
						tooltipId: l
					} = e;
					return o.a.createElement(C, {
						isOpen: s,
						tooltipId: l
					}, o.a.createElement(y, {
						onApproveComment: () => {
							n(), d(Object(m.c)("approve", t.id))
						},
						onRemoveComment: () => {
							a(), d(Object(m.c)("remove", t.id))
						},
						onSpamComment: () => {
							i(), d(Object(m.c)("spam", t.id))
						},
						onLockComment: () => {
							r(), d(Object(m.c)(t.isLocked ? "unlock" : "lock", t.id))
						},
						onShowComment: () => {
							c(), d(Object(m.c)("showComment", t.id))
						},
						comment: t
					}))
				}));
			t.a = _
		},
		"./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less": function(e, t, s) {
			e.exports = {
				DropdownRow: "_2LNy1r5iuFMrf0PLh4UdV-",
				dropdownRow: "_2LNy1r5iuFMrf0PLh4UdV-",
				DeleteIcon: "_1iKLz-XMCxtewhk3nusoiP",
				deleteIcon: "_1iKLz-XMCxtewhk3nusoiP",
				ReportIcon: "_2cI15gf51WKaEHlpw-HjhG",
				reportIcon: "_2cI15gf51WKaEHlpw-HjhG",
				PencilIcon: "_1bLoeor2W-QStNmx_KRhZL",
				pencilIcon: "_1bLoeor2W-QStNmx_KRhZL",
				SaveIcon: "XOeF-g_i5E2Oaxwt9wDdS",
				saveIcon: "XOeF-g_i5E2Oaxwt9wDdS",
				SavedIcon: "_4rjQO_f0JDhjAgz1a8hLR",
				savedIcon: "_4rjQO_f0JDhjAgz1a8hLR",
				OverflowMenu: "_11rZyhzMB3OOh_i10q1kGT",
				overflowMenu: "_11rZyhzMB3OOh_i10q1kGT",
				ModToolsFlatlist: "_3y5_xjgWBNlHiMIlznzmOH",
				modToolsFlatlist: "_3y5_xjgWBNlHiMIlznzmOH",
				ModActionsMenu: "_2Ff8ezLTpKg92h7e8lIWkW",
				modActionsMenu: "_2Ff8ezLTpKg92h7e8lIWkW",
				Flatlist: "_1PB2jayxHhG493U6RP5qLr",
				flatlist: "_1PB2jayxHhG493U6RP5qLr",
				Button: "VFryWeVNuBPgqyjc5h68S",
				button: "VFryWeVNuBPgqyjc5h68S"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.m.less": function(e, t, s) {
			e.exports = {
				CommentAuthorLink: "f3THgbzMYccGW8vbqZBUH",
				commentAuthorLink: "f3THgbzMYccGW8vbqZBUH",
				badgeIconStyle: "_2MlVoXUc3Eo3KGWDukM9xn",
				modBadgeIconStyle: "_1kqPGnOAdnd9gPUXDU2_AS",
				DonationAmount: "_3sY3k4LLYR5dbXRxnGkhwG",
				donationAmount: "_3sY3k4LLYR5dbXRxnGkhwG",
				RightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				rightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				EditedText: "uMVXpG5M2xxHNW2g94S8K",
				editedText: "uMVXpG5M2xxHNW2g94S8K",
				MetaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				metaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				publicPoints: "_2LXcsgibmlCEsBPk8MLy7e",
				AuthorHoverCard: "_16AAktgl_rVbXAeiWU9CQd",
				authorHoverCard: "_16AAktgl_rVbXAeiWU9CQd",
				Component: "_36uQqfCEixcb8d3_aWB5H6",
				component: "_36uQqfCEixcb8d3_aWB5H6",
				AdminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				adminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				Approve: "_34mJxMS9sOCTo8dtFMQOLR",
				approve: "_34mJxMS9sOCTo8dtFMQOLR",
				Lock: "_3ATarJMtY0XRI9Lgu7e7DC",
				lock: "_3ATarJMtY0XRI9Lgu7e7DC",
				AdminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				adminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				Automoderator: "EytgzUMjj1jcbKtFsodey",
				automoderator: "EytgzUMjj1jcbKtFsodey",
				removed: "_2jIbl66ymb_twdJlZslQ-e",
				CakeIcon: "_1HLCDx7CkNvQgmNroGXenu",
				cakeIcon: "_1HLCDx7CkNvQgmNroGXenu",
				Moderator: "_174Mk1p6pYIrr6f1y6b4fn",
				moderator: "_174Mk1p6pYIrr6f1y6b4fn",
				Remove: "_1DQWCB93pHPVVJCXOGsblO",
				remove: "_1DQWCB93pHPVVJCXOGsblO",
				Report: "_2wYWDvjfG1JR6VNK9ryPFk",
				report: "_2wYWDvjfG1JR6VNK9ryPFk",
				Spam: "_3kK86gdpll9ihjOPWJE6f2",
				spam: "_3kK86gdpll9ihjOPWJE6f2",
				Op: "_2pZswNTz_uW46hN02djL7j",
				op: "_2pZswNTz_uW46hN02djL7j",
				Contractor: "_1hbZy7yehvtj0w4ec-2u3Y",
				contractor: "_1hbZy7yehvtj0w4ec-2u3Y",
				redditorIcon: "_2SkK42s487b14gsRa4zinm",
				MetaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				metaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				StickiedText: "_1eNQE7Kj1TEqCLAn1BUKJy",
				stickiedText: "_1eNQE7Kj1TEqCLAn1BUKJy",
				DeletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				deletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				RemovalReason: "Gtgj2P-Js5aSN72H6Mqms",
				removalReason: "Gtgj2P-Js5aSN72H6Mqms",
				container: "_3ezOJqKdLbgkHsXcfvS5SA",
				collapsed: "_2k27lgIDltx9kOzVGXt48i",
				hasBadges: "_1KMFaeLEhRikeFEOlWE9Ti",
				liveStreaming: "_1iUed95f0HTc84gBtoOxdc",
				metaText: "_3_GZIIN1xcMEC5AVuv4kfa",
				CrowdControlText: "Eoj3NCGwtl7hQcr7Rnc0N",
				crowdControlText: "Eoj3NCGwtl7hQcr7Rnc0N"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/app/strings/index.ts"),
				c = s("./src/reddit/actions/tooltip.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/humanizeDateTime/index.ts"),
				p = s("./src/lib/lessComponent.tsx"),
				u = s("./src/lib/timeAgo/index.ts"),
				b = s("./src/reddit/components/AuthorLink/index.tsx"),
				h = s("./src/reddit/components/AwardBadges/index.tsx"),
				x = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				g = s("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				f = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				v = s("./src/reddit/featureFlags/index.ts"),
				y = s("./src/reddit/selectors/economics.ts"),
				O = s("./src/reddit/components/Economics/TopTippers/Icon/index.tsx"),
				E = s("./src/reddit/components/Economics/TopTippers/CommentUsername/index.m.less"),
				w = s.n(E);
			const C = e => {
				switch (e) {
					case 1:
						return {
							color: "#FF2500", fontWeight: 700
						};
					case 2:
						return {
							color: "#FF7300", fontWeight: 700
						};
					case 3:
						return {
							color: "#FFA200", fontWeight: 700
						};
					default:
						return {}
				}
			};
			var _ = Object(r.b)(() => Object(a.c)({
					post: (e, t) => {
						let {
							contentId: s
						} = t;
						return e.posts.models[s]
					},
					tippers: (e, t) => {
						if (v.d.spTopTippers(e)) return Object(y.x)(e, t)
					}
				}))((function(e) {
					if (e.tippers && e.tippers.allTippers.has(e.userId)) {
						const t = e.tippers.topTippers.ranking[e.userId] || 5,
							s = o.a.cloneElement(o.a.Children.only(e.children), {
								style: C(t)
							});
						return o.a.createElement("div", {
							className: w.a.container
						}, o.a.createElement(O.a, {
							className: w.a.badge,
							creatorId: e.creatorId || e.post && e.post.authorId,
							rank: t,
							subredditId: e.subredditId
						}), s)
					}
					return e.children
				})),
				j = s("./src/reddit/components/Flair/index.tsx"),
				k = s("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				S = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				P = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				I = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				N = s("./src/reddit/components/PostTopMeta/index.tsx"),
				T = s("./src/reddit/helpers/isRemoved.ts"),
				L = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				M = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				R = s("./src/reddit/i18n/utils.ts"),
				A = s("./src/reddit/actions/comment/index.ts"),
				B = s("./src/reddit/models/Comment/index.ts"),
				F = s("./src/reddit/models/Flair/index.ts"),
				D = s("./src/reddit/icons/fonts/Admin/index.tsx"),
				H = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				W = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				U = s("./src/reddit/icons/fonts/helpers.tsx"),
				V = s("./src/reddit/icons/fonts/Op/index.m.less"),
				G = s.n(V);
			var z = p.a.wrapped(e => o.a.createElement("i", {
					className: "".concat(Object(U.b)("op"), " ").concat(e.className),
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, o.a.createElement(U.a, null, e.desc)), "OpIcon", G.a),
				K = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				J = s("./src/reddit/icons/fonts/Report/index.tsx"),
				q = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				Q = s("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				Z = s("./src/reddit/icons/svgs/Cake/index.tsx"),
				X = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				Y = s("./src/reddit/controls/MetaData/index.tsx"),
				$ = s("./src/reddit/selectors/experiments/publicAwarding.ts"),
				ee = s("./src/reddit/selectors/subreddit.ts"),
				te = s("./src/reddit/selectors/userFlair.ts"),
				se = s("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				ne = s.n(se);

			function oe() {
				return (oe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var re = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const ae = p.a.wrapped(j.b, "RightPositionedAuthorFlair", ne.a),
				ie = p.a.wrapped(D.a, "AdminIcon", ne.a),
				ce = p.a.wrapped(H.a, "Approve", ne.a),
				de = p.a.wrapped(W.a, "Lock", ne.a),
				le = p.a.div("AdminEmeritus", ne.a),
				me = p.a.wrapped(Q.a, "Automoderator", ne.a),
				pe = p.a.wrapped(Z.a, "CakeIcon", ne.a),
				ue = p.a.wrapped(X.a, "Moderator", ne.a),
				be = p.a.wrapped(K.a, "Remove", ne.a),
				he = p.a.wrapped(J.a, "Report", ne.a),
				xe = p.a.wrapped(q.a, "Spam", ne.a),
				ge = p.a.wrapped(z, "Op", ne.a),
				fe = p.a.wrapped(D.a, "Contractor", ne.a),
				ve = p.a.a("MetaLink", ne.a),
				ye = p.a.wrapped(Y.a, "EditedText", ne.a),
				Oe = p.a.wrapped(Y.a, "StickiedText", ne.a),
				Ee = p.a.span("DeletedText", ne.a),
				we = p.a.wrapped(Y.a, "MetaSeparator", ne.a),
				Ce = p.a.wrapped(Y.a, "CrowdControlText", ne.a),
				_e = p.a.wrapped(S.b, "AuthorHoverCard", ne.a),
				je = p.a.a("RemovalReason", ne.a),
				ke = p.a.wrapped(x.b, "Component", ne.a),
				Se = Object(i.c)("comment.children"),
				Pe = Object(i.c)("comment.moreThanChildren"),
				Ie = e => (t, s) => {
					let {
						comment: n,
						renderedInOverlay: o
					} = s;
					return "".concat(e).concat(n.id).concat(o ? "inOverlay" : "")
				},
				Ne = Object(i.d)("comment.tooltips.admin"),
				Te = Object(i.d)("comment.tooltips.cakeday"),
				Le = Object(i.d)("comment.tooltips.adminEmeritus"),
				Me = Object(i.d)("comment.tooltips.moderator"),
				Re = Object(i.d)("comment.tooltips.op"),
				Ae = Object(i.d)("comment.tooltips.contractor"),
				Be = Object(r.b)(() => Object(a.c)({
					adminTooltipId: Ie("CommentTopMeta--Admin--"),
					cakedayTooltipId: Ie("CommentTopMeta--cakeday--"),
					adminEmeritusTooltipId: Ie("CommentTopMeta--AdEm--"),
					automodTooltipId: Ie("CommentTopMeta--Automod--"),
					approveTooltipId: Ie("CommentTopMeta--Approve--"),
					createdTooltipId: Ie("CommentTopMeta--Created--"),
					contractorTooltipId: Ie("CommentTopMeta--Contractor--"),
					gildedTooltipId: Ie("CommentTopMeta--Gold--"),
					lockedTooltipId: Ie("CommentTopMeta--Locked--"),
					modTooltipId: Ie("CommentTopMeta--Mod--"),
					opTooltipId: Ie("CommentTopMeta--OP--"),
					publicAwardersEnabled: e => !!Object($.a)(e),
					removeTooltipId: Ie("CommentTopMeta--Remove--"),
					reportTooltipId: Ie("CommentTopMeta--Report--"),
					spamTooltipId: Ie("CommentTopMeta--Spam--"),
					hasBadges: (e, t) => {
						let {
							comment: s
						} = t;
						return !!Object(y.v)(e, s.subredditId, s.authorId).length
					},
					subredditDisplayText: (e, t) => {
						const s = Object(ee.G)(e, {
							commentId: t.comment.id
						});
						return s ? s.displayText : ""
					},
					topTippersEnabled: v.d.spTopTippers,
					flairPosition: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(te.d)(e, {
							subredditId: s.subredditId
						})
					}
				}), (e, t) => ({
					onCreatedClick: () => {
						window.addEventListener("focus", (function s() {
							((e, t, s) => {
								window.removeEventListener("focus", s), e(Object(A.N)({
									commentListNodeId: t
								})), window.setTimeout(() => e(Object(A.N)({
									commentListNodeId: t
								})), 5e3)
							})(e, t.comment.id, s)
						}))
					},
					onHideTooltip: () => e(Object(c.i)()),
					onShowTooltip: t => e(Object(c.f)({
						tooltipId: t
					})),
					openRemovalReasonModal: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(s => e(s.fetchReasonsAndOpenModal(t.comment.subredditId, [t.comment.id])))
					}
				}));
			t.a = Be(e => {
				const {
					adminEmeritusTooltipId: t,
					adminTooltipId: s,
					approveTooltipId: n,
					automodTooltipId: r,
					cakedayTooltipId: a,
					children: i,
					className: c,
					collapsed: m,
					collapsedBecauseCrowdControl: p,
					comment: u,
					commentsPageKey: b,
					contractorTooltipId: x,
					compact: v,
					flair: y,
					flairPosition: O,
					hasBadges: E,
					isLivestreaming: w,
					ignoreFlairPosition: C,
					ignoreLock: _,
					language: S,
					lockedTooltipId: P,
					modTooltipId: T,
					onHideTooltip: L,
					onShowTooltip: M,
					opTooltipId: R,
					openRemovalReasonModal: A,
					publicAwardersEnabled: D,
					removeTooltipId: H,
					renderContractorBadge: W,
					renderedInOverlay: U,
					reportTooltipId: V,
					spamTooltipId: G,
					subredditDisplayText: z,
					topTippersEnabled: K
				} = e;
				if (u.isDeleted) return o.a.createElement(Fe, oe({}, e, {
					className: Object(d.a)(c, ne.a.container, {
						[ne.a.collapsed]: m
					})
				}));
				if (m) return o.a.createElement(De, oe({}, e, {
					className: Object(d.a)(c, ne.a.container, {
						[ne.a.collapsed]: m
					})
				}));
				const J = !C && O === F.b.Left;
				return o.a.createElement("div", {
					className: Object(d.a)(c, ne.a.container, {
						[ne.a.collapsed]: m,
						[ne.a.hasBadges]: E,
						[ne.a.liveStreaming]: w
					})
				}, y && J && o.a.createElement(j.b, {
					flair: y,
					forceSmallEmojis: v
				}), !Object(B.d)(u) && o.a.createElement(ke, {
					showAddCustom: !0,
					subredditId: u.subredditId,
					userId: u.authorId,
					uniqueIdentifier: u.id
				}), o.a.createElement(_e, {
					postOrComment: u,
					tooltipType: U ? N.c.Lightbox : void 0
				}, o.a.createElement(g.b, {
					ignore: Object(B.d)(u) || !!u.distinguishType && u.distinguishType !== l.C.NONE,
					subredditId: u.subredditId,
					userId: u.authorId
				}, o.a.createElement(We, {
					comment: u,
					isLivestreaming: w,
					isStrong: !!v,
					isAuthorDeleted: Object(B.d)(u),
					topTippersEnabled: K
				}, i && i))), p && o.a.createElement(Ce, null, "Crowd Control"), p && o.a.createElement(Y.c, {
					className: ne.a.metaText,
					key: "crowdControlSeparator"
				}), y && !J && o.a.createElement(ae, {
					flair: y,
					forceSmallEmojis: v
				}), !v && o.a.createElement(k.a, {
					className: ne.a.publicPoints,
					contentId: u.id,
					subredditId: u.subredditId,
					userId: u.authorId,
					username: u.author
				}), o.a.createElement(o.a.Fragment, null, o.a.createElement(I.b, {
					commentId: u.id
				}), o.a.createElement(I.a, {
					commentId: u.id,
					commentsPageKey: b
				}), o.a.createElement(Ge, {
					comment: u,
					compact: v,
					adminTooltipId: s,
					adminEmeritusTooltipId: t,
					cakedayTooltipId: a,
					contractorTooltipId: x,
					language: S,
					modTooltipId: T,
					onHideTooltip: L,
					onShowTooltip: M,
					opTooltipId: R,
					renderContractorBadge: W,
					subredditDisplayText: z
				})), !v && o.a.createElement(o.a.Fragment, null, !u.isDeleted && o.a.createElement(Y.b, {
					className: ne.a.metaText,
					isScoreHidden: u.isScoreHidden,
					language: S,
					score: u.score
				}), o.a.createElement(Y.c, {
					className: ne.a.metaText,
					key: "scoreCreatedSeparator"
				}), o.a.createElement(Ue, oe({
					key: "Created"
				}, e)), u.isStickied && Ke(S), u.editedAt && He(S, u.editedAt)), o.a.createElement(o.a.Fragment, null, o.a.createElement(ze, {
					comment: u,
					approveTooltipId: n,
					automodTooltipId: r,
					ignoreLock: _,
					language: S,
					lockedTooltipId: P,
					onHideTooltip: L,
					onShowTooltip: M,
					openRemovalReasonModal: A,
					removeTooltipId: H,
					reportTooltipId: V,
					spamTooltipId: G
				}), o.a.createElement(f.a, {
					className: ne.a.DonationAmount,
					contentId: u.id,
					subredditId: u.subredditId
				})), o.a.createElement(h.a, {
					showAwarders: D,
					tooltipType: U ? N.c.Lightbox : void 0,
					thing: u
				}))
			});
			const Fe = e => {
					const {
						language: t,
						childrenInfo: s,
						collapsed: n,
						className: r,
						comment: a
					} = e;
					return o.a.createElement("div", {
						className: r
					}, o.a.createElement(Ee, null, a.deletedBy === B.a.User ? Object(i.a)(t, "comment.commentDeletedByAuthor") : Object(i.a)(t, "comment.commentDeletedByMod")), o.a.createElement(Ue, oe({
						key: "Created"
					}, e)), n && Ve({
						childrenInfo: s,
						language: t
					}))
				},
				De = e => {
					const {
						comment: t,
						language: s,
						className: n,
						childrenInfo: r
					} = e;
					return o.a.createElement("div", {
						className: n
					}, o.a.createElement("div", null, o.a.createElement(We, {
						comment: t,
						isAuthorDeleted: Object(B.d)(t),
						topTippersEnabled: !1
					})), o.a.createElement(Y.b, {
						className: ne.a.metaText,
						isScoreHidden: t.isScoreHidden,
						language: s,
						score: t.score
					}), o.a.createElement(Y.c, {
						className: ne.a.metaText,
						key: "scoreCreatedSeparator"
					}), o.a.createElement(Ue, oe({
						key: "Created"
					}, e)), Ve({
						childrenInfo: r,
						language: s
					}))
				},
				He = (e, t) => o.a.createElement(n.Fragment, null, o.a.createElement(Y.c, {
					className: ne.a.metaText
				}), o.a.createElement(ye, null, Object(i.a)(e, "comment.edited", {
					time: Object(u.d)(e, t)
				}))),
				We = e => {
					const t = o.a.createElement(b.a, {
						className: ne.a.CommentAuthorLink,
						author: e.comment.author,
						isAdmin: e.comment.isAdmin,
						isAdminEmeritus: e.comment.distinguishType === l.C.ALUMNI_ADMIN,
						isAuthorDeleted: e.isAuthorDeleted,
						isLivestreaming: e.isLivestreaming,
						isMod: e.comment.isMod,
						isOp: e.comment.isOp,
						isStrong: e.isStrong,
						style: e.style
					}, e.children && e.children, e.comment.author);
					return e.topTippersEnabled ? o.a.createElement(_, {
						contentId: e.comment.postId,
						subredditId: e.comment.subredditId,
						userId: e.comment.authorId
					}, t) : t
				};
			class Ue extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCreatedTooltip = () => this.props.onShowTooltip(this.props.createdTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t,
							language: s,
							onCreatedClick: n
						} = e,
						r = re(e, ["comment", "language", "onCreatedClick"]);
					return o.a.createElement(ve, {
						href: t.permalink,
						id: r.createdTooltipId,
						onClick: n,
						onMouseEnter: this.onShowCreatedTooltip,
						onMouseLeave: r.onHideTooltip,
						rel: "nofollow",
						target: "_blank"
					}, o.a.createElement("span", null, Object(u.d)(s, t.created)), Je(r.createdTooltipId, Object(m.a)(t.created)))
				}
			}
			const Ve = e => {
				const {
					hasContinueThread: t,
					numChildren: s
				} = e.childrenInfo || {
					hasContinueThread: !1,
					numChildren: 0
				};
				return o.a.createElement(we, {
					className: ne.a.metaText
				}, "(", t ? Pe(e.language, s, {
					numChildren: s
				}) : Se(e.language, s, {
					numChildren: s
				}), ")")
			};
			class Ge extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCakedayTooltip = () => this.props.onShowTooltip(this.props.cakedayTooltipId), this.onShowAdminTooltip = () => this.props.onShowTooltip(this.props.adminTooltipId), this.onShowAdminEmeritusTooltip = () => this.props.onShowTooltip(this.props.adminEmeritusTooltipId), this.onShowModTooltip = () => this.props.onShowTooltip(this.props.modTooltipId), this.onShowOpTooltip = () => this.props.onShowTooltip(this.props.opTooltipId), this.onShowContractorTooltip = () => this.props.onShowTooltip(this.props.contractorTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t
						} = e,
						s = re(e, ["comment"]);
					return o.a.createElement(n.Fragment, null, t.isAuthorCakeday && o.a.createElement(pe, {
						"aria-label": Te(s.language),
						id: s.cakedayTooltipId,
						onMouseEnter: this.onShowCakedayTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isAuthorCakeday && Je(s.cakedayTooltipId, Te(s.language)), t.isAdmin && o.a.createElement(ie, {
						desc: Ne(s.language),
						id: s.adminTooltipId,
						onMouseEnter: this.onShowAdminTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isAdmin && Je(s.adminTooltipId, Ne(s.language)), t.distinguishType === l.C.ALUMNI_ADMIN && o.a.createElement(le, {
						"aria-label": Le(s.language),
						children: "Δ",
						id: s.adminEmeritusTooltipId,
						onMouseEnter: this.onShowAdminEmeritusTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.distinguishType === l.C.ALUMNI_ADMIN && Je(s.adminEmeritusTooltipId, Le(s.language)), t.isMod && o.a.createElement(ue, {
						desc: Me(s.language, {
							displayText: s.subredditDisplayText
						}),
						id: s.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isMod && Je(s.modTooltipId, Me(s.language, {
						displayText: s.subredditDisplayText
					})), t.isOp && o.a.createElement(ge, {
						desc: Re(s.language),
						id: s.opTooltipId,
						onMouseEnter: this.onShowOpTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isOp && Je(s.opTooltipId, Re(s.language)), s.renderContractorBadge && o.a.createElement(fe, {
						desc: Ae(s.language),
						id: s.contractorTooltipId,
						onMouseEnter: this.onShowContractorTooltip,
						onMouseLeave: s.onHideTooltip
					}), s.renderContractorBadge && Je(s.contractorTooltipId, Ae(s.language)))
				}
			}
			class ze extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowApproveTooltip = () => this.props.onShowTooltip(this.props.approveTooltipId), this.onShowRemoveTooltip = () => this.props.onShowTooltip(this.props.removeTooltipId), this.onShowSpamTooltip = () => this.props.onShowTooltip(this.props.spamTooltipId), this.onShowAutomodTooltip = () => this.props.onShowTooltip(this.props.automodTooltipId), this.onShowReportTooltip = () => this.props.onShowTooltip(this.props.reportTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t
						} = e,
						s = re(e, ["comment"]);
					return o.a.createElement(n.Fragment, null, (t.approvedBy || t.isApproved) && o.a.createElement(ce, {
						desc: Object(L.a)(s.language, t),
						id: s.approveTooltipId,
						onMouseEnter: this.onShowApproveTooltip,
						onMouseLeave: s.onHideTooltip
					}), (t.approvedBy || t.isApproved) && Je(s.approveTooltipId, Object(L.a)(s.language, t)), Object(T.a)(t) && o.a.createElement(be, {
						desc: Object(L.c)(s.language, t),
						id: s.removeTooltipId,
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: s.onHideTooltip
					}), Object(T.a)(t) && Je(s.removeTooltipId, Object(L.c)(s.language, t)), Object(T.a)(t) && t.isRemoved && !t.modNote && !t.modRemovalReason && o.a.createElement(je, {
						onClick: s.openRemovalReasonModal
					}, Object(i.a)(s.language, "modTools.addARemovalReason")), Object(T.a)(t) && !(t.isRemoved && !t.modNote && !t.modRemovalReason) && o.a.createElement(je, {
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: s.onHideTooltip
					}, Object(i.a)(s.language, "modTools.removalReason")), t.isLocked && !s.ignoreLock && o.a.createElement(de, {
						desc: Object(R.c)("Locked"),
						id: s.lockedTooltipId,
						onMouseEnter: () => {
							s.onShowTooltip(s.lockedTooltipId)
						},
						onMouseLeave: s.onHideTooltip
					}), t.bannedBy && t.isSpam && o.a.createElement(xe, {
						desc: Object(L.e)(s.language, t),
						id: s.spamTooltipId,
						onMouseEnter: this.onShowSpamTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.bannedBy && t.isSpam && Je(s.spamTooltipId, Object(L.e)(s.language, t)), ("AutoModerator" === t.bannedBy || "AutoModerator" === t.approvedBy) && o.a.createElement(me, {
						className: Object(d.a)({
							[ne.a.removed]: !!t.bannedBy
						}),
						desc: Object(L.b)(s.language),
						id: s.automodTooltipId,
						key: s.automodTooltipId,
						onMouseEnter: this.onShowAutomodTooltip,
						onMouseLeave: s.onHideTooltip
					}), ("AutoModerator" === t.bannedBy || "AutoModerator" === t.approvedBy) && Je(s.automodTooltipId, Object(L.b)(s.language)), Object(M.a)(t) && o.a.createElement(he, {
						desc: Object(L.d)(s.language, t.numReports),
						id: s.reportTooltipId,
						onMouseEnter: this.onShowReportTooltip,
						onMouseLeave: s.onHideTooltip
					}), Object(M.a)(t) && Je(s.reportTooltipId, Object(L.d)(s.language, t.numReports)))
				}
			}
			const Ke = e => o.a.createElement(n.Fragment, null, o.a.createElement(Y.c, {
					className: ne.a.metaText
				}), o.a.createElement(Oe, null, Object(i.a)(e, "comment.stickied"))),
				Je = (e, t) => o.a.createElement(P.c, {
					tooltipId: e,
					text: t
				})
		},
		"./src/reddit/components/Comments/ProfileComment/index.m.less": function(e, t, s) {
			e.exports = {
				TopMeta: "Ov9DvczDidxNqJMR_axF2",
				topMeta: "Ov9DvczDidxNqJMR_axF2",
				CommentBody: "_a5_x7qimk18YbGSwE8Fy",
				commentBody: "_a5_x7qimk18YbGSwE8Fy",
				ProfileCommentWrapper: "_2QR1H6z3qpmyHNdkMUnzVu",
				profileCommentWrapper: "_2QR1H6z3qpmyHNdkMUnzVu",
				isRemoved: "_7kIPhlgZcmDxoV_xaWnX9"
			}
		},
		"./src/reddit/components/Comments/ProfileComment/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/objectSelector/index.ts"),
				l = s("./node_modules/lodash/throttle.js"),
				m = s.n(l),
				p = s("./src/lib/fastdom/index.ts"),
				u = s("./src/reddit/i18n/components.tsx"),
				b = s("./src/reddit/components/CommentBodyExpander/index.m.less"),
				h = s.n(b);
			const x = .75,
				g = 10 * c.G;
			class f extends o.a.Component {
				constructor(e) {
					super(e), this.commentElement = null, this.handleResize = m()(() => {
						if (this.state.expandToggled) return null;
						p.a.read(() => {
							(this.commentElement ? this.commentElement.offsetHeight : 0) <= this.props.height * (x + 1) && p.a.write(() => {
								this.setState({
									expandToggled: !0
								})
							})
						})
					}, g), this.onShowMore = e => {
						e.preventDefault(), this.setState({
							expandToggled: !0
						})
					}, this.state = {
						expandToggled: e.isExpanded
					}
				}
				render() {
					const {
						children: e,
						height: t
					} = this.props, {
						expandToggled: s
					} = this.state;
					return s ? o.a.createElement("div", null, e()) : o.a.createElement("div", {
						className: h.a.collapsedCommentWrapper
					}, o.a.createElement("div", {
						className: h.a.collapsedCommentLine,
						style: {
							height: t
						}
					}, o.a.createElement("div", {
						ref: e => this.commentElement = e
					}, e(h.a.rtjCollapsed))), o.a.createElement("a", {
						className: h.a.seeMore,
						href: "javascript: void 0;",
						onClick: this.onShowMore
					}, o.a.createElement(u.c, null, "see more")))
				}
				componentDidUpdate() {
					const {
						expandToggled: e
					} = this.state;
					e && window && window.removeEventListener("resize", this.handleResize)
				}
				componentDidMount() {
					if (this.state.expandToggled) return null;
					this.commentElement && !this.commentElement.innerText.trim().includes("\n") && (window.addEventListener("resize", this.handleResize), this.handleResize())
				}
				componentWillUnmount() {
					window && window.removeEventListener("resize", this.handleResize)
				}
			}
			var v = f,
				y = s("./node_modules/lodash/noop.js"),
				O = s.n(y),
				E = s("./src/lib/makeCommentPermalink/index.ts"),
				w = s("./src/lib/makeCommentsPageKey/index.ts"),
				C = s("./src/lib/makeDraftKey/index.ts"),
				_ = s("./src/reddit/actions/comment/index.ts"),
				j = s("./src/reddit/actions/gold/modals.ts"),
				k = s("./src/reddit/actions/modal.ts"),
				S = s("./src/reddit/actions/reportFlow.ts"),
				P = s("./src/reddit/actions/tooltip.ts"),
				I = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				N = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				T = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				L = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				M = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				R = s("./src/reddit/components/ModModeReports/helpers.ts"),
				A = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				B = s("./src/reddit/contexts/InsideOverlay.tsx"),
				F = s("./src/reddit/contexts/PageLayer/index.tsx"),
				D = s("./src/reddit/helpers/correlationIdTracker.ts"),
				H = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				W = s("./src/reddit/helpers/overlay/index.ts"),
				U = s("./src/reddit/helpers/trackers/lightbox.ts"),
				V = s("./src/reddit/i18n/utils.ts"),
				G = s("./src/reddit/models/PostDraft/index.ts"),
				z = s("./src/reddit/selectors/activeModalId.ts"),
				K = s("./src/reddit/selectors/comments.ts"),
				J = s("./src/reddit/selectors/moderatorPermissions.ts"),
				q = s("./src/reddit/selectors/posts.ts"),
				Q = s("./src/reddit/selectors/tooltip.ts"),
				Z = s("./src/reddit/selectors/user.ts"),
				X = s("./src/reddit/components/OverflowMenu/index.tsx"),
				Y = s("./src/reddit/components/ReportFlow/index.tsx"),
				$ = s("./src/reddit/components/ShareMenu/index.tsx"),
				ee = s("./src/reddit/components/TrackingHelper/index.tsx"),
				te = s("./src/reddit/controls/Dropdown/Row.tsx"),
				se = s("./src/reddit/helpers/trackers/modTools.ts"),
				ne = s("./src/reddit/layout/row/Inline/index.tsx"),
				oe = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				re = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				ae = s("./src/reddit/icons/fonts/Report/index.tsx"),
				ie = s("./src/reddit/icons/svgs/Flag/index.tsx"),
				ce = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				de = s("./src/reddit/icons/svgs/Save/index.m.less"),
				le = s.n(de);
			var me = e => o.a.createElement("svg", {
					className: Object(i.a)(le.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("defs", null, o.a.createElement("path", {
					id: "".concat("save-svg", "a"),
					d: "M14 16.209l-3.403-1.486a1.52 1.52 0 0 0-1.198.002L6 16.21V5.5c0-.52-.087-1.024-.255-1.5H12.5c.827 0 1.5.673 1.5 1.5V16.21zM12.5 2h-11a.5.5 0 1 0 0 1C2.879 3 4 4.12 4 5.5v12.236a.999.999 0 0 0 1.4.916l4.6-2.008 4.6 2.008a1 1 0 0 0 1.4-.917V5.5C16 3.57 14.43 2 12.5 2z"
				})), o.a.createElement("g", {
					fill: "inherit",
					fillRule: "evenodd"
				}, o.a.createElement("path", {
					d: "M0 20h20V0H0z",
					fill: "none"
				}), o.a.createElement("mask", {
					id: "".concat("save-svg", "b"),
					fill: "none"
				}, o.a.createElement("use", {
					xlinkHref: "#".concat("save-svg", "a")
				})), o.a.createElement("use", {
					fill: "inherit",
					xlinkHref: "#".concat("save-svg", "a")
				}), o.a.createElement("g", {
					mask: "url(#".concat("save-svg", "b)"),
					fill: "none"
				}, o.a.createElement("path", {
					d: "M0 0h20v20H0z"
				})))),
				pe = s("./src/reddit/icons/svgs/Saved/index.tsx"),
				ue = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				be = s("./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less"),
				he = s.n(be),
				xe = s("./src/lib/lessComponent.tsx");
			const ge = xe.a.wrapped(ue.b, "DeleteIcon", he.a),
				fe = xe.a.wrapped(ie.a, "ReportIcon", he.a),
				ve = xe.a.wrapped(ce.a, "PencilIcon", he.a),
				ye = xe.a.wrapped(me, "SaveIcon", he.a),
				Oe = xe.a.wrapped(pe.a, "SavedIcon", he.a),
				Ee = xe.a.wrapped(X.b, "OverflowMenu", he.a),
				we = xe.a.wrapped(N.c, "ModToolsFlatlist", he.a),
				Ce = xe.a.wrapped(M.a, "ModActionsMenu", he.a),
				_e = xe.a.wrapped(te.b, "DropdownRow", he.a),
				je = xe.a.wrapped(ne.a, "Flatlist", he.a),
				ke = xe.a.button("Button", he.a),
				Se = Object(F.t)(),
				Pe = e => "Comment-".concat(e, "--Modal--DeleteComment"),
				Ie = e => "Distinguish--Dropdown--".concat(e),
				Ne = (e, t) => "".concat(e, "--").concat(t, "-overflow-menu"),
				Te = e => "View--Reports--".concat(e),
				Le = Object(a.c)({
					activeTooltipId: Q.a,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(z.a)(e) === Pe(s.id)
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(K.A)(e, {
							commentId: s.postId
						})
					},
					isLoggedIn: Z.G,
					moderatorPermissions: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(J.j)(e, {
							subredditId: s.subredditId
						})
					},
					currentUser: Z.i,
					modModeEnabled: F.O,
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(q.I)(e, {
							postId: s.postId
						})
					},
					postPermalink: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(q.L)(e, {
							postId: s.postId
						})
					},
					reportFlowIsOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return e.reportFlow.postOrCommentId === s.id
					},
					subreddit: F.q,
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(q.Z)(e, {
							postId: s.postId
						})
					}
				});
			class Me extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(se.a)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleEdit = () => this.props.handleEdit(this.props.comment.permalink), this.handleIgnoreReports = () => {
						this.props.onIgnoreReports(), this.sendCommentReportEvent(this.props.comment.ignoreReports ? "restore_reports" : "ignore_reports")
					}, this.handleGild = async () => {
						Object(D.d)(D.a.GildingFlow), this.props.onGildClick();
						const {
							clickGildEvent: e
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(e(this.props.comment.id))
					}, this.handleModActionsMenu = () => this.props.sendEvent(Object(se.a)("comment_mod_action_menu", this.props.comment.id)), this.handleOverflowMenuClick = () => this.props.sendEvent(Object(se.a)("comment_overflow_menu", this.props.comment.id)), this.handleDelete = () => this.props.handleDelete(), this.handleReply = () => this.props.handleReply(this.props.comment.permalink), this.handleRestrictedButtonClick = () => {
						this.props.onToggleReportsDropdown(), this.sendCommentModEventWithName("comment_report_menu")
					}, this.handleSave = () => {
						this.props.comment.isSaved ? this.props.sendEvent(Object(se.a)("unsave", this.props.comment.id)) : this.props.sendEvent(Object(se.a)("save", this.props.comment.id)), this.props.onToggleSave()
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(se.b)(e, this.props.comment.id)), this.sendCommentEventWithName = e => this.props.sendEvent(Object(U.b)(this.props.comment.postId, "comment_".concat(e))), this.sendCommentEventWithNameShare = () => this.sendCommentEventWithName("share"), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(se.a)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(se.e)(e, this.props.comment.id))
				}
				renderModTools() {
					const {
						comment: e,
						currentUser: t,
						language: s,
						moderatorPermissions: n,
						modModeEnabled: r,
						showModTools: a
					} = this.props, i = Object(H.a)(n), c = !!t && t.displayText === e.author;
					if (a && i) return r ? o.a.createElement(we, {
						comment: e,
						isCommentAuthor: c,
						language: s
					}) : o.a.createElement(Ce, {
						dropdownId: "".concat(e.id, "-profile-mod-actions-menu"),
						inCommentFlatlist: !0,
						onClick: this.handleModActionsMenu
					}, o.a.createElement(re.a, null), o.a.createElement(I.a, {
						comment: e,
						tooltipId: "".concat(e.id, "-profile-mod-actions-menu")
					}))
				}
				renderReportsDropdown() {
					const {
						comment: e,
						modModeEnabled: t,
						showModTools: s
					} = this.props, n = Object(R.a)(e);
					if (s && Object(R.c)(e) && !t) return o.a.createElement(N.b, {
						text: "".concat(n),
						onClick: this.handleRestrictedButtonClick,
						selected: this.props.activeTooltipId === Te(e.id),
						id: Te(e.id)
					}, o.a.createElement(A.a, {
						model: e,
						onIgnoreReports: this.handleIgnoreReports,
						tooltipId: Te(e.id)
					}), e.ignoreReports ? o.a.createElement(oe.a, null) : o.a.createElement(ae.a, null))
				}
				renderDistinguishDropdown() {
					const {
						comment: e,
						currentUser: t,
						moderatorPermissions: s,
						modModeEnabled: n,
						onDistinguishComment: r,
						showModTools: a
					} = this.props, i = Object(H.a)(s), c = !!t && t.displayText === e.author, d = !!t && t.isEmployee;
					if (a && c && !e.bannedBy && (d || i && !n)) return o.a.createElement(N.b, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.activeTooltipId === Ie(e.id)
					}, o.a.createElement(N.a, null), o.a.createElement(L.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.activeTooltipId === Ie(e.id),
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: d,
						isUserMod: i,
						onDistinguishComment: r,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: Ie(e.id)
					}))
				}
				render() {
					const {
						comment: e,
						className: t,
						commentsPageKey: s,
						currentUser: n,
						deleteComment: r,
						isLoggedIn: a,
						isPendingDeletion: i,
						moderatorPermissions: c,
						postIsLocked: d,
						postPermalink: l,
						subreddit: m,
						toggleDeleteCommentModal: p
					} = this.props, b = Object(H.a)(c), h = !!n && n.displayText === e.author, x = !d && !e.isLocked || b && a, g = n && e.isGildable;
					return o.a.createElement("div", {
						className: t
					}, o.a.createElement(je, null, x && o.a.createElement(ke, {
						onClick: this.handleReply,
						disabled: i
					}, o.a.createElement(u.c, null, "Reply")), g && o.a.createElement(ke, {
						onClick: this.handleGild
					}, o.a.createElement(u.c, null, "Give Award")), o.a.createElement($.a, {
						dropdownId: "".concat(s, "--").concat(e.id, "-comment-share-menu"),
						permalink: Object(E.a)(l, e.id),
						sendEventWithName: this.sendCommentEventWithName,
						subreddit: m
					}, o.a.createElement(ke, {
						onClick: this.sendCommentEventWithNameShare
					}, o.a.createElement(u.c, null, "share"))), this.renderReportsDropdown(), o.a.createElement(Ee, {
						dropdownId: Ne(s, e.id),
						onClick: this.handleOverflowMenuClick
					}, !h && !i && o.a.createElement(_e, {
						displayText: Object(V.c)("report"),
						onClick: this.props.onReportClick
					}, o.a.createElement(fe, null)), o.a.createElement(_e, {
						displayText: e.isSaved ? Object(V.c)("Unsave") : Object(V.c)("Save"),
						isSelected: e.isSaved,
						onClick: this.handleSave
					}, e.isSaved ? o.a.createElement(Oe, null) : o.a.createElement(ye, null)), h && o.a.createElement(_e, {
						displayText: Object(V.c)("edit"),
						onClick: this.handleEdit
					}, o.a.createElement(ve, null)), h && o.a.createElement(_e, {
						displayText: Object(V.c)("delete"),
						onClick: this.handleDelete
					}, o.a.createElement(ge, null))), this.props.isConfirmModalOpen && o.a.createElement(T.a, {
						actionText: Object(V.c)("delete"),
						cancelActionText: Object(V.c)("keep"),
						headerText: Object(V.c)("Delete comment"),
						modalText: Object(V.c)("Are you sure you want to delete your comment?"),
						onConfirm: r,
						toggleModal: p,
						trackClick: O.a,
						withOverlay: !0
					}), this.renderModTools(), this.renderDistinguishDropdown()), this.props.reportFlowIsOpen && o.a.createElement(Y.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: Y.b,
						postId: this.props.comment.postId
					}))
				}
			}
			var Re = Se(Object(r.b)(Le, (e, t) => {
					let {
						comment: s,
						commentsPageKey: n
					} = t;
					return {
						deleteComment: () => n && e(Object(_.db)(s.id, s.postId)),
						onDistinguishComment: (t, n) => e(Object(_.S)(s.id, t, n)),
						onIgnoreReports: () => e(Object(_.pb)(s.id)),
						onGildClick: () => e(Object(j.d)(s.id)),
						onReportClick: () => e(Object(S.j)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(P.h)({
							tooltipId: Ie(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(P.h)({
							tooltipId: Te(s.id)
						})),
						onToggleSave: () => e(Object(_.gb)(s.id)),
						handleDelete: () => {
							e(Object(k.i)(Pe(s.id))), e(Object(P.h)({
								tooltipId: Ne(n, s.id)
							}))
						},
						handleEdit: t => {
							const n = Object(w.a)(s.postId, s.id, {}),
								o = {
									commentId: s.id,
									draftKey: Object(C.a)(G.c.edit, s.id),
									text: s.bodyMD || "",
									commentMode: s.media && s.media.rteMode,
									commentsPageKey: n
								};
							e(Object(W.a)(t)), e(Object(_.ab)(o))
						},
						handleReply: t => {
							const n = Object(w.a)(s.postId, s.id, {}),
								o = {
									parentCommentId: s.id,
									commentsPageKey: n
								};
							e(Object(W.a)(t)), e(Object(_.bb)(o))
						},
						toggleDeleteCommentModal: () => e(Object(k.i)(Pe(s.id)))
					}
				})(Object(ee.c)(Object(B.b)(Me)))),
				Ae = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Be = s("./src/reddit/components/GildModal/getGildModalId.ts"),
				Fe = s("./src/reddit/components/GildModal/Loader.tsx"),
				De = s("./src/reddit/components/RichTextJson/index.tsx"),
				He = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				We = s("./src/reddit/selectors/gild.ts"),
				Ue = s("./src/reddit/components/Comments/ProfileComment/index.m.less"),
				Ve = s.n(Ue);
			const Ge = xe.a.wrapped(Ae.a, "TopMeta", Ve.a),
				ze = xe.a.div("ProfileCommentWrapper", Ve.a),
				Ke = xe.a.div("CommentBody", Ve.a),
				Je = Object(r.b)(() => Object(a.c)({
					comment: (e, t) => Object(K.n)(e, t),
					gildModalIsOpen: (e, t) => {
						let {
							commentId: s
						} = t;
						const n = Object(Be.b)(s);
						return Object(We.c)(e, n)
					},
					flair: K.e,
					language: Z.O
				})),
				qe = Object(d.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.a = Je(e => {
				const {
					comment: t,
					commentsPageKey: s,
					flair: n,
					gildModalIsOpen: r,
					isExpanded: a,
					language: d,
					showFlatlist: l,
					showModTools: m
				} = e, p = s => o.a.createElement(De.a, {
					className: s,
					content: Object(He.a)(t),
					rtJsonElementProps: qe(e)
				});
				return o.a.createElement(ze, {
					className: Object(i.a)({
						[Ve.a.isRemoved]: !!t.bannedBy
					})
				}, o.a.createElement(Ge, {
					collapsedBecauseCrowdControl: !1,
					collapsed: !1,
					comment: t,
					commentsPageKey: s,
					flair: n,
					language: d,
					renderedInOverlay: !1
				}), o.a.createElement("div", null, !t.isDeleted && o.a.createElement(Ke, null, a ? p() : o.a.createElement(v, {
					height: c.Gb,
					isExpanded: a
				}, p)), !t.isDeleted && l && o.a.createElement(Re, {
					comment: t,
					commentsPageKey: s,
					language: d,
					showModTools: m
				})), r && o.a.createElement(Fe.a, null))
			})
		},
		"./src/reddit/components/CompactPost/Placeholder/index.m.less": function(e, t, s) {
			e.exports = {
				emptyScore: "_3RRgbzXvoZ4MUYm45lAqp7",
				emptyVotes: "_2rSb53hAOWG9j6R_ToxoSJ",
				wrapper: "_2wuOxz4--LcoxCYSrpCBlx",
				expandoContainer: "_3CIl2qTD30RwYsMAGO2Y2S",
				expando: "_2UCpUVZ4aSncQhvkrQW_0i",
				subredditIconContainer: "_2IJnSguizdehDk_JnTKrdK",
				topLine: "_1OQE_XsSHzM7AtjVQahjoI",
				title: "_28eZmJsl2bogBZ2KPmeoFO",
				meta: "_24dJJDh8muEbehYysONmV1",
				comments: "_2-iJVRFJK-xC7a7xgBF-T5",
				ellipsis: "_1IFRAIwzfwChKq85FhLG69",
				flatList: "_3HxvQvODjYEHa-X5AuQinY"
			}
		},
		"./src/reddit/components/CompactPost/Placeholder/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/SubredditIcon/index.tsx"),
				d = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				p = s("./src/reddit/models/Vote/index.ts"),
				u = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				b = s.n(u),
				h = s("./src/reddit/components/CompactPost/Placeholder/index.m.less"),
				x = s.n(h);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const f = Object(l.t)(),
				v = Object(a.c)({
					isFakeSubreddit: l.x
				}),
				y = Object(r.b)(v),
				O = e => {
					const t = {
						interactive: !1,
						voteState: p.a.notVoted
					};
					return o.a.createElement("div", {
						className: x.a.emptyVotes
					}, o.a.createElement(d.d, g({
						key: "u"
					}, t)), o.a.createElement("div", {
						key: "s",
						className: x.a.emptyScore
					}), o.a.createElement(d.c, g({
						key: "d"
					}, t)))
				},
				E = e => o.a.createElement(c.a, {
					className: Object(m.a)(e)
				}),
				w = e => o.a.createElement("div", {
					className: x.a.flatList
				}, o.a.createElement("div", {
					className: Object(i.a)(x.a.comments, Object(m.b)(e))
				}), o.a.createElement("div", {
					className: Object(i.a)(x.a.ellipsis, Object(m.b)(e))
				}));
			t.a = f(y(e => o.a.createElement("div", {
				className: Object(i.a)(e.className, b.a.compactPostStyles, b.a.classicAndCompactPlaceholderStyles)
			}, o.a.createElement("div", {
				className: x.a.wrapper
			}, o.a.createElement(O, g({
				key: "c"
			}, e)), o.a.createElement("div", {
				key: "a",
				className: x.a.expandoContainer
			}, o.a.createElement("div", {
				className: Object(i.a)(x.a.expando, Object(m.a)(e))
			})), o.a.createElement("div", {
				key: "d",
				className: x.a.subredditIconContainer
			}, o.a.createElement(E, {
				isLoading: !1
			})), o.a.createElement("div", {
				key: "e",
				className: x.a.topLine
			}, o.a.createElement("div", {
				key: "ea",
				className: Object(i.a)(x.a.title, Object(m.b)(e))
			}), o.a.createElement("div", {
				key: "eb",
				className: Object(i.a)(x.a.meta, Object(m.b)(e))
			})), o.a.createElement(w, g({
				key: "f"
			}, e))))))
		},
		"./src/reddit/components/ContentGate/index.m.less": function(e, t, s) {
			e.exports = {
				ButtonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				buttonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				Container: "_32zGs4bO3IunZfS9bSJY0_",
				container: "_32zGs4bO3IunZfS9bSJY0_",
				Description: "_3VTI5BOpJO70xoBKSqz3O9",
				description: "_3VTI5BOpJO70xoBKSqz3O9",
				PrivateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				privateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				PrivateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				privateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				PrivateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				privateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				Link: "o4oSRcSrppMzf__hxJKxn",
				link: "o4oSRcSrppMzf__hxJKxn",
				LinkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				linkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				LinkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				linkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				SecondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				secondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				SecondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				secondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				GoHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				goHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				Image: "_1jefpljVGT-eHObg40F8Dm",
				image: "_1jefpljVGT-eHObg40F8Dm",
				ImagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				imagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				LeftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				leftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				LeftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				leftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				SecondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				secondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				SecondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				secondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				Title: "_2XKLlvmuqdor3RvVbYZfgz",
				title: "_2XKLlvmuqdor3RvVbYZfgz",
				PageBody: "bDDEX4BSkswHAG_45VkFB",
				pageBody: "bDDEX4BSkswHAG_45VkFB",
				QuarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n",
				quarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router/esm/react-router.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/loginHref/index.ts"),
				l = s("./src/reddit/actions/contentGate.ts"),
				m = s("./src/reddit/actions/preferences.ts"),
				p = s("./src/reddit/components/CreateCommunityButton/index.tsx"),
				u = s("./src/lib/lessComponent.tsx"),
				b = s("./src/reddit/components/Footer/index.m.less"),
				h = s.n(b);
			const {
				fbt: x
			} = s("./node_modules/fbt/lib/FbtPublic.js"), g = u.a.div("FooterContainer", h.a), f = u.a.div("UserAgreement", h.a), v = u.a.a("UserAgreementLink", h.a), y = u.a.a("PrivacyLink", h.a);
			var O = () => r.a.createElement(g, null, r.a.createElement(f, null, x._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [x._param("=User Agreement", r.a.createElement(v, {
					href: "".concat(n.a.redditUrl, "/help/useragreement")
				}, x._("User Agreement", null, {
					hk: "2srkM2"
				}))), x._param("=Privacy Policy", r.a.createElement(y, {
					href: "".concat(n.a.redditUrl, "/help/privacypolicy")
				}, x._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), x._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				E = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				w = s("./src/reddit/components/RichTextJson/index.tsx"),
				C = (s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/lodash/flatMap.js")),
				_ = s.n(C),
				j = s("./src/lib/linkMatchers/index.ts"),
				k = s("./src/lib/linkMatchers/customLinks.ts"),
				S = s("./src/reddit/controls/OutboundLink/index.tsx");
			const P = /\[(.+?)\]\((.+?)\)/g,
				I = e => {
					const t = e.split(P);
					if (1 === t.length) return [e];
					const s = [];
					for (let n = 0; n < t.length; n += 3) {
						const [e, o, r] = t.slice(n, n + 3);
						s.push(e), s.push([r, o])
					}
					return s
				};
			var N = r.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = _()(t, I)), e.parseRegularLinks && (t = _()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = j.e.add(k.g.subreddit.prefix, k.g.subreddit.config).match(e);
						if (!t) return [e];
						const s = [];
						let n = null;
						for (const o of t) s.push(e.slice(n ? n.lastIndex : 0, o.index)), n = o, s.push([o.url, o.text]);
						return n && s.push(e.slice(n.lastIndex)), s
					})(e))), r.a.createElement(r.a.Fragment, null, " ", t.map((t, s) => {
						if (Array.isArray(t)) {
							const [n, o] = t;
							return r.a.createElement(S.a, {
								className: e.linkClassName,
								href: n,
								isSponsored: !1,
								key: s,
								source: null
							}, o)
						}
						return r.a.createElement("span", {
							key: s
						}, t)
					}), " ")
				}),
				T = s("./src/reddit/contexts/PageLayer/index.tsx"),
				L = s("./src/reddit/controls/Button/index.tsx"),
				M = s("./src/reddit/models/ContentGate.ts"),
				R = s("./src/reddit/selectors/meta.ts"),
				A = s("./src/reddit/selectors/user.ts"),
				B = s("./src/reddit/components/ContentGate/index.m.less"),
				F = s.n(B);
			const {
				fbt: D
			} = s("./node_modules/fbt/lib/FbtPublic.js"), H = u.a.div("ButtonsContainer", F.a), W = u.a.div("Container", F.a), U = u.a.div("Description", F.a), V = u.a.div("PrivateSubredditDetails", F.a), G = u.a.div("PrivateSubredditDescription", F.a), z = u.a.h3("PrivateSubredditName", F.a), K = u.a.a("Link", F.a), J = u.a.wrapped(L.h, "LinkRouterButton", F.a), q = u.a.wrapped(L.g, "LinkButton", F.a), Q = u.a.wrapped(L.k, "SecondaryLinkRouterButton", F.a), Z = u.a.wrapped(L.j, "SecondaryLinkButton", F.a), X = u.a.wrapped(J, "GoHomeLinkButton", F.a), Y = u.a.img("Image", F.a), $ = u.a.img("ImagePlaceholder", F.a), ee = u.a.wrapped(J, "LeftLinkRouterButton", F.a), te = u.a.wrapped(q, "LeftLinkButton", F.a), se = u.a.wrapped(Z, "SecondaryLeftLinkButton", F.a), ne = u.a.wrapped(Q, "SecondaryLeftLinkRouterButton", F.a), oe = u.a.h3("Title", F.a), re = u.a.div("PageBody", F.a), ae = u.a.div("QuarantineMessageWrapper", F.a), ie = Object(c.c)({
				isLoggedIn: A.F,
				language: A.O,
				origin: R.h,
				user: A.i
			}), ce = Object(T.t)(), de = Object(a.b)(ie, (e, t) => {
				let {
					subredditName: s
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(m.A(s)), window.location.reload()
					},
					setNSFWPreference: async () => {
						await e(Object(l.l)())
					}
				}
			}), le = e => {
				const {
					banMessage: t,
					contentGateType: s,
					continueToQuarantinedSubreddit: o,
					isLoggedIn: a,
					language: i,
					location: c,
					origin: m,
					pageLayer: u,
					quarantineRequiresEmail: b,
					quarantineMessage: h,
					quarantineMessageHtml: x,
					quarantineMessageRTJson: g,
					setNSFWPreference: f,
					subredditDescription: v,
					subredditName: y,
					user: O
				} = e, C = () => {
					a ? f() : Object(l.k)(), window.location.reload()
				};
				switch (s) {
					case M.a.GoldSubreddit:
						return r.a.createElement("div", null, r.a.createElement(Y, {
							src: "".concat(n.a.assetPath, "/img/gold/premium-crest.png")
						}), r.a.createElement(oe, null, D._("r/{community name} is a Reddit Premium community", [D._param("community name", y)], {
							hk: "2lyDwB"
						})), r.a.createElement(U, null, D._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), r.a.createElement(H, null, O ? r.a.createElement(se, {
							href: "".concat(n.a.redditUrl, "/premium")
						}, D._("Get Premium", null, {
							hk: "3ChWi4"
						})) : r.a.createElement(te, {
							href: Object(d.a)(c, m)
						}, D._("Sign Up", null, {
							hk: "rvpjy"
						})), O ? r.a.createElement(J, {
							to: "/"
						}, D._("Go Home", null, {
							hk: "49p4or"
						})) : r.a.createElement(Z, {
							href: Object(d.a)(c, m)
						}, D._("Log In", null, {
							hk: "35J1JT"
						}))));
					case M.a.Nsfw:
					case M.a.NsfwCustomFeed:
						return r.a.createElement("div", null, r.a.createElement(Y, {
							src: "".concat(n.a.assetPath, "/img/content-gate-icons/nsfw.png")
						}), r.a.createElement(oe, null, s === M.a.Nsfw ? D._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : D._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), r.a.createElement(U, null, D._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), r.a.createElement(H, null, r.a.createElement(ee, {
							to: "/"
						}, D._("No", null, {
							hk: "3fMglW"
						})), r.a.createElement(Z, {
							onClick: C
						}, D._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case M.a.PrivateSubreddit:
						return r.a.createElement("div", null, r.a.createElement(Y, {
							src: "".concat(n.a.assetPath, "/img/content-gate-icons/private.png")
						}), r.a.createElement(oe, null, D._("You must be invited to visit this community", null, {
							hk: "dHP8K"
						})), v && v.length && r.a.createElement(V, null, r.a.createElement(z, null, "r/", y), r.a.createElement(G, null, r.a.createElement("div", null, v))), r.a.createElement(U, null, D._("The moderators in this community have set it to private. You must be a moderator or approved user to visit.", null, {
							hk: "nwL0k"
						})), r.a.createElement(H, null, O ? r.a.createElement(se, {
							href: "".concat(n.a.redditUrl, "/message/compose?to=/r/").concat(y)
						}, D._("Message Mods", null, {
							hk: "vVe1i"
						})) : r.a.createElement(se, {
							href: Object(d.a)(c, m)
						}, D._("Sign Up", null, {
							hk: "rvpjy"
						})), r.a.createElement(J, {
							to: "/"
						}, O ? D._("Go Home", null, {
							hk: "49p4or"
						}) : D._("Explore Reddit", null, {
							hk: "3IwwVU"
						}))));
					case M.a.QuarantinedSubreddit:
						return r.a.createElement("div", null, r.a.createElement(Y, {
							src: "".concat(n.a.assetPath, "/img/content-gate-icons/quarantined.png")
						}), r.a.createElement(oe, null, D._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), r.a.createElement(U, null, D._("This community is {=quarantined}", [D._param("=quarantined", r.a.createElement(K, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, D._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), r.a.createElement(ae, null, g ? r.a.createElement(w.a, {
							content: g,
							rtJsonElementProps: {
								pageLayer: u
							}
						}) : x ? r.a.createElement(E.a, {
							html: x
						}) : h || D._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), D._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), r.a.createElement(H, null, ((e, t, s, o) => {
							return !(e && e.hasVerifiedEmail) && o ? r.a.createElement(H, null, r.a.createElement(ne, {
								to: "/"
							}, D._("No Thank You", null, {
								hk: "4B26AR"
							})), r.a.createElement(q, {
								href: "".concat(n.a.redditUrl, "/prefs/update")
							}, D._("Verify Email", null, {
								hk: "1893cq"
							}))) : r.a.createElement(H, null, r.a.createElement(ee, {
								to: "/"
							}, D._("No Thank You", null, {
								hk: "4B26AR"
							})), r.a.createElement(Z, {
								onClick: s
							}, D._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(O, 0, o, b)));
					case M.a.SubredditBanned:
						return r.a.createElement("div", null, r.a.createElement(Y, {
							src: "".concat(n.a.assetPath, "/img/content-gate-icons/banned.png")
						}), r.a.createElement(oe, null, D._("r/{community name} has been banned from Reddit", [D._param("community name", y)], {
							hk: "2at9Se"
						})), (e => r.a.createElement(U, null, e ? r.a.createElement(N, {
							linkClassName: F.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : D._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), r.a.createElement(H, null, r.a.createElement(J, {
							to: "/"
						}, D._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case M.a.SubredditBlockedForLegalReason:
						return r.a.createElement("div", null, r.a.createElement(Y, {
							src: "".concat(n.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), r.a.createElement(oe, null, D._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), r.a.createElement(H, null, r.a.createElement(J, {
							to: "/"
						}, D._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case M.a.SubredditDoesNotExist:
						return r.a.createElement("div", null, r.a.createElement($, null), r.a.createElement(oe, null, D._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), r.a.createElement(U, null, D._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), r.a.createElement(H, null, O && r.a.createElement(p.a, {
							eventSource: "content_gate"
						}), r.a.createElement(X, {
							to: "/"
						}, D._("Go Home", null, {
							hk: "49p4or"
						}))));
					case M.a.ProfileDoesNotExist:
					case M.a.ProfileDeleted:
					case M.a.ProfileSuspended:
					case M.a.ProfileBlockedForLegalReason:
						return r.a.createElement("div", null, r.a.createElement(Y, {
							src: "".concat(n.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), r.a.createElement(oe, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case M.a.ProfileBlockedForLegalReason:
									return D._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case M.a.ProfileDeleted:
									return D._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case M.a.ProfileSuspended:
									return r.a.createElement(r.a.Fragment, null, D._("This account has been {=suspended} .", [D._param("=suspended", r.a.createElement(K, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, D._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case M.a.ProfileDoesNotExist:
									return r.a.createElement(r.a.Fragment, null, r.a.createElement(oe, null, D._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), r.a.createElement(U, null, D._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), r.a.createElement(H, null, r.a.createElement(X, {
							to: "/"
						}, D._("Go Home", null, {
							hk: "49p4or"
						}))));
					case M.a.CustomFeedDoesNotExist:
						return r.a.createElement("div", null, r.a.createElement(Y, {
							src: "".concat(n.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), r.a.createElement(oe, null, D._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), r.a.createElement(H, null, r.a.createElement(X, {
							to: "/"
						}, D._("Go Home", null, {
							hk: "49p4or"
						}))));
					case M.a.PostBlockedForLegalReason:
						return r.a.createElement("div", null, r.a.createElement(Y, {
							src: "".concat(n.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), r.a.createElement(oe, null, D._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), r.a.createElement(H, null, r.a.createElement(J, {
							to: "/"
						}, D._("Explore Reddit", null, {
							hk: "FrUWU"
						}))))
				}
			};
			t.a = ce(de(Object(i.i)(e => r.a.createElement(W, null, r.a.createElement("div", null, r.a.createElement(re, null, le(e))), r.a.createElement(O, null)))))
		},
		"./src/reddit/components/CountrySort/index.m.less": function(e, t, s) {
			e.exports = {
				countrySort: "_1JaK9h42mq2UXvugO7VriI"
			}
		},
		"./src/reddit/components/CountrySort/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.array.sort.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/tooltip.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/reddit/actions/preferences.ts"),
				p = s("./src/reddit/components/ListingSort/index.tsx"),
				u = (s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./src/higherOrderComponents/asTooltip.tsx")),
				b = s("./src/lib/lessComponent.tsx"),
				h = s("./src/reddit/constants/parameters.ts"),
				x = s("./node_modules/fbt/lib/FbtPublic.js");
			const g = e => {
					const t = f[e];
					return t && t() || ""
				},
				f = {
					[l.Ob.AllStates]: () => x.fbt._("all states", null, {
						hk: "1s9O3L"
					}),
					[l.Ob.Alaska]: () => x.fbt._("alaska", null, {
						hk: "3PQz70"
					}),
					[l.Ob.Alabama]: () => x.fbt._("alabama", null, {
						hk: "1Ain9C"
					}),
					[l.Ob.Arkansas]: () => x.fbt._("arkansas", null, {
						hk: "3MSLfs"
					}),
					[l.Ob.Arizona]: () => x.fbt._("arizona", null, {
						hk: "PjKyy"
					}),
					[l.Ob.California]: () => x.fbt._("california", null, {
						hk: "4fS2Uy"
					}),
					[l.Ob.Colorado]: () => x.fbt._("colorado", null, {
						hk: "2FU5sm"
					}),
					[l.Ob.Connecticut]: () => x.fbt._("connecticut", null, {
						hk: "3HJ97l"
					}),
					[l.Ob.DistrictOfColumbia]: () => x.fbt._("district of columbia", null, {
						hk: "43sboQ"
					}),
					[l.Ob.Delaware]: () => x.fbt._("delaware", null, {
						hk: "1sMYnC"
					}),
					[l.Ob.Florida]: () => x.fbt._("florida", null, {
						hk: "1ahnDc"
					}),
					[l.Ob.Georgia]: () => x.fbt._("georgia", null, {
						hk: "3O8sgW"
					}),
					[l.Ob.Hawaii]: () => x.fbt._("hawaii", null, {
						hk: "11be3k"
					}),
					[l.Ob.Iowa]: () => x.fbt._("iowa", null, {
						hk: "15vW0A"
					}),
					[l.Ob.Idaho]: () => x.fbt._("idaho", null, {
						hk: "12whY2"
					}),
					[l.Ob.Illinois]: () => x.fbt._("illinois", null, {
						hk: "4F6qqr"
					}),
					[l.Ob.Indiana]: () => x.fbt._("indiana", null, {
						hk: "1Xvs3I"
					}),
					[l.Ob.Kansas]: () => x.fbt._("kansas", null, {
						hk: "4yvtHS"
					}),
					[l.Ob.Kentucky]: () => x.fbt._("kentucky", null, {
						hk: "3iqD7X"
					}),
					[l.Ob.Louisiana]: () => x.fbt._("louisiana", null, {
						hk: "1pM17K"
					}),
					[l.Ob.Massachusetts]: () => x.fbt._("massachusetts", null, {
						hk: "3Hx5EP"
					}),
					[l.Ob.Maryland]: () => x.fbt._("maryland", null, {
						hk: "62JHL"
					}),
					[l.Ob.Maine]: () => x.fbt._("maine", null, {
						hk: "2Sh6yp"
					}),
					[l.Ob.Michigan]: () => x.fbt._("michigan", null, {
						hk: "2fnY28"
					}),
					[l.Ob.Minnesota]: () => x.fbt._("minnesota", null, {
						hk: "4diMsG"
					}),
					[l.Ob.Missouri]: () => x.fbt._("missouri", null, {
						hk: "3QuF4u"
					}),
					[l.Ob.Mississippi]: () => x.fbt._("mississippi", null, {
						hk: "28v1kQ"
					}),
					[l.Ob.Montana]: () => x.fbt._("montana", null, {
						hk: "20sZYn"
					}),
					[l.Ob.NorthCarolina]: () => x.fbt._("north carolina", null, {
						hk: "BUaf7"
					}),
					[l.Ob.NorthDakota]: () => x.fbt._("north dakota", null, {
						hk: "1WRpz0"
					}),
					[l.Ob.Nebraska]: () => x.fbt._("nebraska", null, {
						hk: "XUJCr"
					}),
					[l.Ob.NewHampshire]: () => x.fbt._("new hampshire", null, {
						hk: "ga6kK"
					}),
					[l.Ob.NewJersey]: () => x.fbt._("new jersey", null, {
						hk: "3Sz9QN"
					}),
					[l.Ob.NewMexico]: () => x.fbt._("new mexico", null, {
						hk: "i2870"
					}),
					[l.Ob.Nevada]: () => x.fbt._("nevada", null, {
						hk: "2DsBxU"
					}),
					[l.Ob.NewYork]: () => x.fbt._("new york", null, {
						hk: "2wKULo"
					}),
					[l.Ob.Ohio]: () => x.fbt._("ohio", null, {
						hk: "1KDnKA"
					}),
					[l.Ob.Oklahoma]: () => x.fbt._("oklahoma", null, {
						hk: "2P0Ita"
					}),
					[l.Ob.Oregon]: () => x.fbt._("oregon", null, {
						hk: "3CqdY4"
					}),
					[l.Ob.Pennsylvania]: () => x.fbt._("pennsylvania", null, {
						hk: "2skMK"
					}),
					[l.Ob.RhodeIsland]: () => x.fbt._("rhode island", null, {
						hk: "120MAU"
					}),
					[l.Ob.SouthCarolina]: () => x.fbt._("south carolina", null, {
						hk: "3JyeG9"
					}),
					[l.Ob.SouthDakota]: () => x.fbt._("south dakota", null, {
						hk: "4to42L"
					}),
					[l.Ob.Tennessee]: () => x.fbt._("tennessee", null, {
						hk: "gHo1c"
					}),
					[l.Ob.Texas]: () => x.fbt._("texas", null, {
						hk: "3dgz4M"
					}),
					[l.Ob.Utah]: () => x.fbt._("utah", null, {
						hk: "22zf2i"
					}),
					[l.Ob.Virginia]: () => x.fbt._("virginia", null, {
						hk: "1dvXBl"
					}),
					[l.Ob.Vermont]: () => x.fbt._("vermont", null, {
						hk: "1Cdmbu"
					}),
					[l.Ob.Washington]: () => x.fbt._("washington", null, {
						hk: "hhztG"
					}),
					[l.Ob.Wisconsin]: () => x.fbt._("wisconsin", null, {
						hk: "3SOyMZ"
					}),
					[l.Ob.WestVirginia]: () => x.fbt._("west virginia", null, {
						hk: "1jIKYD"
					}),
					[l.Ob.Wyoming]: () => x.fbt._("wyoming", null, {
						hk: "1QaJzt"
					})
				};
			var v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				y = s("./src/reddit/contexts/Tooltip.ts"),
				O = s("./src/reddit/controls/Dropdown/index.tsx"),
				E = s("./src/reddit/controls/Dropdown/Row.tsx"),
				w = s("./src/reddit/selectors/tooltip.ts"),
				C = s("./src/reddit/components/StateSort/index.m.less"),
				_ = s.n(C);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const k = b.a.wrapped(O.a, "_Dropdown", _.a),
				S = Object(u.a)(k),
				P = e => {
					return e.indexOf("_") > 0 && N(e) === l.w.UnitedStates
				},
				I = e => {
					if (P(e)) {
						return e.split("_")[1]
					}
					return l.Ob.AllStates
				},
				N = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				T = e => {
					const t = N(e),
						s = I(e);
					return P(e) ? "".concat(t, "_").concat(s) : t
				},
				L = Object(v.t)(),
				M = Object(i.c)({
					dropdownIsOpen: Object(w.b)("StateSort--StateSortPicker")
				}),
				R = Object(r.b)(M, e => ({
					onOpenDropdown: () => e(Object(c.h)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, s) => {
						e(Object(a.b)(t)), e(Object(m.t)(l.w.UnitedStates + "_" + s))
					}
				}));
			var A = b.a.wrapped(L(R(e => {
				const t = "".concat(e.baseUrl, "?").concat(h.g, "=").concat(l.w.UnitedStates);
				return o.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, o.a.createElement(p.c, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, o.a.createElement(p.b, {
					className: e.buttonClassName,
					displayText: e.showStateAbbreviations && e.sort ? e.sort : g(e.sort),
					id: "StateSort--StateSortPicker",
					showDropdownTriangle: !0
				})), o.a.createElement(y.a.Consumer, null, s => o.a.createElement(S, j({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "StateSort--StateSortPicker"
				}, s, {
					renderContentsHidden: !0
				}), Object.keys(l.Ob).map(s => {
					const n = l.Ob[s];
					return o.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === l.Ob.AllStates ? t : "".concat(t, "_").concat(e))(n), T(n))
					}, o.a.createElement(E.b, {
						className: Object(d.a)(e.rowClassName, e.sort === n ? e.rowSelectedClassName : void 0),
						displayText: g(n),
						isSelected: e.sort === n
					}))
				}))))
			})), "Component", _.a);
			const B = {
				[l.w.Everywhere]: () => x.fbt._("Everywhere", null, {
					hk: "3ysAHX"
				}),
				[l.w.UnitedStates]: () => x.fbt._("United States", null, {
					hk: "qrsat"
				}),
				[l.w.Argentina]: () => x.fbt._("Argentina", null, {
					hk: "1tWd87"
				}),
				[l.w.Australia]: () => x.fbt._("Australia", null, {
					hk: "2c0yTh"
				}),
				[l.w.Bulgaria]: () => x.fbt._("Bulgaria", null, {
					hk: "2mbkzD"
				}),
				[l.w.Canada]: () => x.fbt._("Canada", null, {
					hk: "1bnYIf"
				}),
				[l.w.Chile]: () => x.fbt._("Chile", null, {
					hk: "2eNYaZ"
				}),
				[l.w.Colombia]: () => x.fbt._("Colombia", null, {
					hk: "2sw6kC"
				}),
				[l.w.Croatia]: () => x.fbt._("Croatia", null, {
					hk: "4vRKYu"
				}),
				[l.w.CzechRepublic]: () => x.fbt._("Czech Republic", null, {
					hk: "21xzwE"
				}),
				[l.w.Finland]: () => x.fbt._("Finland", null, {
					hk: "jmDeD"
				}),
				[l.w.Greece]: () => x.fbt._("Greece", null, {
					hk: "UUFTD"
				}),
				[l.w.Hungary]: () => x.fbt._("Hungary", null, {
					hk: "4tz4jk"
				}),
				[l.w.Iceland]: () => x.fbt._("Iceland", null, {
					hk: "4mwr9S"
				}),
				[l.w.India]: () => x.fbt._("India", null, {
					hk: "omZ5C"
				}),
				[l.w.Ireland]: () => x.fbt._("Ireland", null, {
					hk: "3rG4DM"
				}),
				[l.w.Japan]: () => x.fbt._("Japan", null, {
					hk: "3EAE8v"
				}),
				[l.w.Malaysia]: () => x.fbt._("Malaysia", null, {
					hk: "MgsVM"
				}),
				[l.w.Mexico]: () => x.fbt._("Mexico", null, {
					hk: "4ibMpW"
				}),
				[l.w.NewZealand]: () => x.fbt._("New Zealand", null, {
					hk: "3LwpKe"
				}),
				[l.w.Philippines]: () => x.fbt._("Philippines", null, {
					hk: "jokzr"
				}),
				[l.w.Poland]: () => x.fbt._("Poland", null, {
					hk: "2v19X3"
				}),
				[l.w.Portugal]: () => x.fbt._("Portugal", null, {
					hk: "2HNYp5"
				}),
				[l.w.PuertoRico]: () => x.fbt._("Puerto Rico", null, {
					hk: "22QgWG"
				}),
				[l.w.Romania]: () => x.fbt._("Romania", null, {
					hk: "5HuLT"
				}),
				[l.w.Serbia]: () => x.fbt._("Serbia", null, {
					hk: "3ly2Z0"
				}),
				[l.w.Singapore]: () => x.fbt._("Singapore", null, {
					hk: "3qEBqp"
				}),
				[l.w.Sweden]: () => x.fbt._("Sweden", null, {
					hk: "A5nWO"
				}),
				[l.w.Taiwan]: () => x.fbt._("Taiwan", null, {
					hk: "IHujb"
				}),
				[l.w.Thailand]: () => x.fbt._("Thailand", null, {
					hk: "1c8zJr"
				}),
				[l.w.Turkey]: () => x.fbt._("Turkey", null, {
					hk: "11Xk7x"
				}),
				[l.w.UnitedKingdom]: () => x.fbt._("United Kingdom", null, {
					hk: "rs1fl"
				})
			};
			var F = s("./src/reddit/selectors/user.ts"),
				D = s("./src/reddit/components/CountrySort/index.m.less"),
				H = s.n(D);

			function W() {
				return (W = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const U = "CountrySort--CountrySortPicker",
				V = Object(v.t)(),
				G = Object(i.c)({
					dropdownIsOpen: Object(w.b)(U),
					language: F.O
				}),
				z = Object(r.b)(G, e => ({
					onCloseDropdown: t => e(Object(c.j)({
						tooltipId: t
					})),
					onOpenDropdown: t => e(Object(c.g)({
						tooltipId: t
					})),
					onClickLink: (t, s) => {
						e(Object(a.b)(t)), e(Object(m.t)(s))
					}
				}));
			t.a = V(z(e => {
				const t = N(e.sort),
					s = I(e.sort),
					n = "".concat(e.baseUrl, "?").concat(h.g, "=");
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: Object(d.a)(H.a.countrySort, e.className),
					onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(U) : e.onOpenDropdown(U)
				}, o.a.createElement(p.c, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, o.a.createElement(p.b, {
					className: e.buttonClassName,
					displayText: (() => t in B ? B[t]() : B[l.w.Everywhere]())(),
					id: U,
					showDropdownTriangle: !0
				})), o.a.createElement(y.a.Consumer, null, s => o.a.createElement(S, W({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: U
				}, s, {
					renderContentsHidden: !0
				}), Object.keys(l.w).map(s => {
					const r = l.w[s];
					return o.a.createElement("div", {
						key: r,
						onClick: () => e.onClickLink("".concat(n).concat(T(r)), r)
					}, o.a.createElement(E.b, {
						className: Object(d.a)(e.rowClassName, t === r ? e.rowSelectedClassName : void 0),
						displayText: B[r](),
						isSelected: t === r
					}))
				})))), t === l.w.UnitedStates && o.a.createElement(A, {
					baseUrl: e.baseUrl,
					buttonClassName: e.buttonClassName,
					className: e.stateSortClassName,
					disabled: e.disabled,
					dropdownClassName: e.dropdownClassName,
					rowClassName: e.rowClassName,
					rowSelectedClassName: e.rowSelectedClassName,
					showStateAbbreviations: e.showStateAbbreviations,
					sort: s,
					wrapperClassName: e.wrapperClassName
				}))
			}))
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, s) {
			e.exports = {
				SecondaryButton: "_3U-J6NPoBHbyibarrb7T3F",
				secondaryButton: "_3U-J6NPoBHbyibarrb7T3F",
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/tooltip.ts"),
				d = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/overlay/index.ts"),
				u = s("./src/reddit/helpers/trackers/subredditCreation.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/components/CreateCommunityButton/index.m.less"),
				x = s.n(h),
				g = s("./src/lib/lessComponent.tsx");
			const f = "create-community-button",
				v = g.a.wrapped(m.i, "SecondaryButton", x.a),
				y = g.a.wrapped(d.c, "StyledTooltip", x.a),
				O = Object(i.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(b.Y)(e),
					userIsSuspended: b.K
				});
			t.a = Object(a.b)(O, (e, t) => {
				let {
					eventSource: s
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(u.b)(s)), e(Object(p.a)("/subreddits/create"))
					},
					onShowTooltip: () => e(Object(c.f)({
						tooltipId: f
					})),
					onHideTooltip: () => e(Object(c.i)())
				}
			})(Object(l.c)(e => {
				let {
					className: t,
					eventSource: s,
					onShowTooltip: o,
					onHideTooltip: a,
					openCommunityCreation: i,
					sendEvent: c,
					userDoesNotHaveEnoughExpToCreateCommunity: d,
					userIsSuspended: l
				} = e;
				return r.a.createElement(v, {
					className: t,
					disabled: l || d,
					onClick: () => i(c),
					onMouseEnter: o,
					onMouseLeave: a,
					id: f
				}, n.fbt._("Create Community", null, {
					hk: "RLA8A"
				}), d ? r.a.createElement(y, {
					caretOnTop: !0,
					tooltipId: f,
					text: n.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? r.a.createElement(y, {
					caretOnTop: !0,
					tooltipId: f,
					text: n.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/CrosspostBox/index.m.less": function(e, t, s) {
			e.exports = {
				mediaContainer: "P8p9Nku0-ZbYCsaCOSE2t",
				Container: "_2ED-O3JtIcOqp8iIL1G5cg",
				container: "_2ED-O3JtIcOqp8iIL1G5cg",
				PostMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				postMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				PostTitle: "_2akYJO5RtMK_ptA408seyG",
				postTitle: "_2akYJO5RtMK_ptA408seyG",
				FlatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				flatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				FlatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				flatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				FlatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				flatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				LinkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				linkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				Content: "_379A_08LTBsR4c8POTldR_",
				content: "_379A_08LTBsR4c8POTldR_",
				ThumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX",
				thumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX"
			}
		},
		"./src/reddit/components/CrosspostBox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Media/index.tsx"),
				p = s("./src/reddit/components/PostMeta/index.tsx"),
				u = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/SourceLink/index.tsx"),
				h = s("./src/reddit/components/Thumbnail/index.tsx"),
				x = s("./src/lib/constants/index.ts"),
				g = s("./src/reddit/selectors/posts.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/components/CrosspostBox/index.m.less"),
				y = s.n(v),
				O = s("./src/lib/lessComponent.tsx");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const w = O.a.div("Container", y.a),
				C = O.a.div("PostMetaWrapper", y.a),
				_ = O.a.wrapped(u.c, "PostTitle", y.a),
				j = O.a.div("FlatList", y.a),
				k = O.a.div("FlatItem", y.a),
				S = O.a.span("FlatListDotSpacer", y.a),
				P = O.a.wrapped(w, "LinkContainer", y.a),
				I = O.a.div("Content", y.a),
				N = O.a.div("ThumbnailContainer", y.a),
				T = Object(c.c)({
					isCurrentUserProfilePost: g.j,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== x.Ab.TOPIC),
					language: f.O,
					post: g.N,
					shouldOpenPostInNewTab: f.S,
					subreddit: g.Z
				}),
				L = Object(a.b)(T);
			t.a = L(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: n,
					mediaProps: o,
					post: a,
					subreddit: i,
					language: c
				} = e;
				if (!a) return null;
				const d = {
						post: a,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: n,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: i,
						language: c,
						tooltipType: "".concat("CrosspostBox", "--").concat(o.isListing)
					},
					l = t;
				return a && !a.media ? r.a.createElement(P, {
					className: l
				}, r.a.createElement(I, null, r.a.createElement(C, null, r.a.createElement(p.a, d)), M(a), a.source && r.a.createElement(b.a, {
					post: a
				}), A(e)), F(e)) : r.a.createElement(w, {
					className: l
				}, r.a.createElement(C, null, r.a.createElement(p.a, d)), M(a), R(e), A(e))
			});
			const M = e => r.a.createElement(_, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: u.b.Small
				}),
				R = e => {
					const {
						mediaProps: t,
						post: s
					} = e, n = Object.assign({}, t, {
						post: s,
						crosspost: t.post
					});
					return r.a.createElement("div", null, r.a.createElement(m.a, E({}, n, {
						className: y.a.mediaContainer
					})))
				},
				A = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return r.a.createElement(j, null, r.a.createElement(k, null, n.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [n.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), r.a.createElement(S, null), r.a.createElement(k, null, B(e)))
				},
				B = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: o
					} = t;
					return r.a.createElement(i.a, {
						"data-click-id": "comments",
						to: Object(d.a)(t.permalink, !0),
						target: s ? "_blank" : void 0
					}, n.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [n.fbt._plural(o, "comment count", Object(l.b)(o))], {
						hk: "xPYWL"
					}))
				},
				F = e => r.a.createElement(N, null, r.a.createElement(h.a, {
					post: e.post
				}))
		},
		"./src/reddit/components/Economics/TopTippers/CommentUsername/index.m.less": function(e, t, s) {
			e.exports = {
				badge: "_17rA6EEcc6RUglkZkHnYGO",
				container: "EorVQyBcpl50FYvpH-VTa"
			}
		},
		"./src/reddit/components/Economics/TopTippers/Icon/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/config.ts");
			const a = new Set(["t2_ktrtg"]),
				i = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
						t = arguments.length > 1 ? arguments[1] : void 0;
					return "".concat(r.a.assetPath, "/img/badges/topTippers/").concat(t, "/rank-").concat(e, ".png")
				};
			t.a = e => o.a.createElement("img", {
				className: e.className,
				src: i(e.rank, e.creatorId && a.has(e.creatorId) ? e.creatorId : e.subredditId)
			})
		},
		"./src/reddit/components/EmptyProfile/EmptyListing.m.less": function(e, t, s) {
			e.exports = {
				PrimaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				primaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				BackgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				backgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				Wrapper: "_1aYPXfy_h5ZUIu0k_69eX1",
				wrapper: "_1aYPXfy_h5ZUIu0k_69eX1"
			}
		},
		"./src/reddit/components/EmptyProfile/forbidden.m.less": function(e, t, s) {
			e.exports = {
				container: "_1RecBWgyCRDIwbumVv_1eu",
				hideIcon: "_2ahl77ziD4jsIXBLc18_Hc",
				title: "_1MRoVpNql4popp175MVxl6",
				subtitle: "_3HccUrmIe42WfjCGgNekWK",
				buttons: "_1BrhZvjQw9AWs6w5xlkj2F"
			}
		},
		"./src/reddit/components/EmptyProfile/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return y
			})), s.d(t, "c", (function() {
				return E
			})), s.d(t, "d", (function() {
				return C
			})), s.d(t, "a", (function() {
				return S
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/constants/index.ts"),
				c = s("./src/app/strings/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/PostList/Placeholder.tsx"),
				m = s("./src/reddit/constants/postLayout.ts"),
				p = s("./src/reddit/components/EmptyProfile/EmptyListing.m.less"),
				u = s.n(p);
			const b = d.a.div("PrimaryText", u.a),
				h = d.a.wrapped(l.a, "BackgroundPlaceholder", u.a),
				x = d.a.div("Wrapper", u.a);
			var g = e => {
					let {
						children: t,
						className: s
					} = e;
					return o.a.createElement(x, {
						className: s
					}, o.a.createElement(h, {
						isLoading: !1,
						layout: m.g.Classic
					}), o.a.createElement(b, null, t))
				},
				f = s("./src/reddit/selectors/user.ts");
			const v = Object(a.c)({
				language: f.O
			});
			var y = Object(r.b)(v)(e => {
				let {
					className: t,
					language: s,
					profileName: n,
					timeSort: r = i.Rb.ALL
				} = e;
				return o.a.createElement(g, {
					className: t
				}, r === i.Rb.ALL ? Object(c.a)(s, "listings.noComments", {
					profileName: n
				}) : Object(c.a)(s, "listings.noRecentComments", {
					profileName: n
				}))
			});
			const O = Object(a.c)({
				language: f.O
			});
			var E = Object(r.b)(O)(e => {
					let {
						className: t,
						language: s,
						profileName: n,
						timeSort: r = i.Rb.ALL
					} = e;
					return o.a.createElement(g, {
						className: t
					}, r === i.Rb.ALL ? Object(c.a)(s, "listings.noPosts", {
						profileName: n
					}) : Object(c.a)(s, "listings.noRecentPosts", {
						profileName: n
					}))
				}),
				w = s("./src/reddit/components/Translated/index.tsx");
			var C = e => {
					let {
						className: t,
						verb: s
					} = e;
					return o.a.createElement(g, {
						className: t
					}, o.a.createElement(w.a, {
						msgId: "listings.privateEmpty",
						replacements: {
							verb: s
						}
					}))
				},
				_ = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				j = s("./src/reddit/components/EmptyProfile/forbidden.m.less"),
				k = s.n(j),
				S = () => o.a.createElement("div", {
					className: k.a.container
				}, o.a.createElement(_.a, {
					className: k.a.hideIcon
				}), o.a.createElement("h3", {
					className: k.a.title
				}, o.a.createElement(w.a, {
					msgId: "profile.forbidden.title"
				})), o.a.createElement("p", {
					className: k.a.subtitle
				}, o.a.createElement(w.a, {
					msgId: "profile.forbidden.savedSubtitle"
				})))
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/eventTools/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = s("./src/reddit/components/PostFollow/index.tsx"),
				l = s("./src/reddit/helpers/postCollection.ts"),
				m = s("./src/reddit/helpers/postEvent.ts"),
				p = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				u = s.n(p);
			const b = i.a.div("EventMetaWrapper", u.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: s,
					language: n,
					post: i
				} = e;
				if (!Object(m.a)(i)) return null;
				const p = i && i.eventInfo,
					h = Object(l.a)(i),
					x = p && Object(a.c)(p.eventStart, p.eventEnd);
				return o.a.createElement("div", {
					className: Object(r.a)(u.a.container, t, {
						[u.a.isCompact]: !!s
					})
				}, o.a.createElement(b, {
					className: u.a.eventMetaWrapper
				}, o.a.createElement(c.a, {
					language: n,
					post: i
				}), !h && x && o.a.createElement(d.a, {
					className: u.a.eventFollowButton,
					post: i,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, s) {
			e.exports = {
				PostEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				postEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				PostEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				postEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				PostEventNowText: "BGfronFwr_0rXxOJmxp10",
				postEventNowText: "BGfronFwr_0rXxOJmxp10",
				Container: "_3NIcD2Vr2xrSAq08U14kCy",
				container: "_3NIcD2Vr2xrSAq08U14kCy",
				CalendarIcon: "LEz3F0HfvMpdo96occzKU",
				calendarIcon: "LEz3F0HfvMpdo96occzKU",
				LiveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				liveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				LoadingState: "_27_KVVxYHZ7v44CE2vg8bT",
				loadingState: "_27_KVVxYHZ7v44CE2vg8bT"
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/eventTools/index.ts"),
				a = (s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./src/app/strings/index.ts")),
				i = s("./src/lib/constants/index.ts");

			function c(e, t) {
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}
			var d = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				m = s("./src/reddit/icons/fonts/Live/index.tsx"),
				p = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				u = s.n(p),
				b = s("./src/lib/lessComponent.tsx");
			const h = b.a.span("PostEventFutureText", u.a),
				x = b.a.span("PostEventPastText", u.a),
				g = b.a.span("PostEventNowText", u.a),
				f = b.a.span("Container", u.a),
				v = b.a.wrapped(l.a, "CalendarIcon", u.a),
				y = b.a.wrapped(m.a, "LiveIcon", u.a),
				O = b.a.div("LoadingState", u.a);
			class E extends n.Component {
				constructor(e) {
					super(e), this.state = {
						mounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						mounted: !0
					})
				}
				render() {
					const {
						className: e,
						language: t,
						post: s
					} = this.props, {
						eventInfo: n
					} = s;
					if (!n) return null;
					const {
						eventEnd: l,
						eventIsLive: m,
						eventStart: p
					} = n, u = Object(r.e)(p, l);
					let b, E;
					if (this.state.mounted || u === r.a.Live) b = function(e, t, s, n) {
						const o = Object(r.e)(e, t),
							d = new Date(e * i.Eb);
						let l;
						if (o === r.a.Live || n) return Object(a.a)(s, "posts.event.inProgress");
						o === r.a.Future ? l = Object(r.d)(e) ? Object(a.a)(s, "posts.event.today") : Object(r.b)(e) >= 5 ? c(d, s) : function(e, t) {
							return e.toLocaleDateString(t, {
								weekday: "long"
							})
						}(d, s) : o === r.a.Past && (l = Object(r.d)(e) ? Object(a.a)(s, "posts.event.today") : c(d, s));
						const m = function(e, t) {
							return e.toLocaleTimeString(t, {
								hour12: !0,
								hour: "numeric",
								minute: "2-digit"
							}).replace(/ /g, "").toUpperCase()
						}(d, s);
						return "".concat(l, " @ ").concat(m)
					}(p, l, t, m);
					else {
						const e = Object(d.a)({
							isLoading: !0
						});
						b = o.a.createElement(O, {
							className: e
						})
					}
					if (m) E = o.a.createElement(g, null, o.a.createElement(y, null), b);
					else if (u === r.a.Future) E = o.a.createElement(h, null, o.a.createElement(v, null), b);
					else {
						if (u !== r.a.Past) return null;
						E = o.a.createElement(x, null, o.a.createElement(v, null), b)
					}
					return o.a.createElement(f, {
						className: e
					}, E)
				}
			}
			t.a = E
		},
		"./src/reddit/components/ExpandoButton/index.m.less": function(e, t, s) {
			e.exports = {
				outer: "RvLtAcdRtbOQbhFB7MD_T",
				icon: "saNpcHve-34zjaa0cbIxW",
				hideOnHover: "_25HJpaEPiVNq6Ss3Ad7dp9",
				showOnHover: "_2S05CzViTnl3I2ekCABqFo",
				outboundLinkIcon: "_1zB4YvOwHPxdPEXG2CYhKB"
			}
		},
		"./src/reddit/components/ExpandoButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				p = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				u = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				b = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"),
				h = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				x = s("./src/reddit/icons/fonts/helpers.tsx"),
				g = s("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less"),
				f = s.n(g);
			var v = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
					className: "".concat(Object(x.b)("expandoMediaLightbox"), " ").concat(e.className),
					onClick: e.onClick
				}), "LightboxIcon", f.a),
				y = s("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"),
				O = s("./src/reddit/icons/fonts/Gif/index.tsx"),
				E = s("./src/reddit/icons/fonts/Link/index.tsx"),
				w = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				C = s("./src/reddit/icons/fonts/Photos/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Text/index.tsx"),
				j = s("./src/reddit/models/Media/index.ts"),
				k = s("./src/reddit/components/ExpandoButton/index.m.less"),
				S = s.n(k);
			const P = Object(a.b)(null, (e, t) => ({
					toggle: () => e(Object(l.x)({
						postId: t.post.id
					}))
				})),
				I = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					const s = Object(c.a)(S.a.icon, S.a.hideOnHover);
					if (t) return r.a.createElement(u.a, {
						className: s
					});
					switch (e) {
						case j.n.GIFVIDEO:
							return r.a.createElement(O.a, {
								className: s
							});
						case j.n.IMAGE:
							return r.a.createElement(C.a, {
								className: s
							});
						case j.n.TEXT:
						case j.n.RTJSON:
							return r.a.createElement(_.a, {
								className: s
							});
						case j.n.VIDEO:
							return r.a.createElement(y.a, {
								className: s
							});
						case j.n.EMBED:
						default:
							return r.a.createElement(E.a, {
								className: s
							})
					}
				};
			t.a = P(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: o,
					isExpanded: a,
					post: l,
					toggle: u,
					useMediaIcons: x
				} = e, g = s || l, f = o && !!s;
				return g.media && !(("rtjson" === g.media.type || "text" === g.media.type) && !Object(p.a)(g)) ? r.a.createElement("button", {
					"aria-expanded": a,
					"aria-haspopup": !0,
					"aria-label": n.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(c.a)(t, S.a.outer),
					"data-click-id": a ? "expando_close" : "expando_open",
					onClick: u
				}, a ? r.a.createElement(b.a, {
					className: S.a.icon
				}) : x ? r.a.createElement(r.a.Fragment, null, I(g.media && g.media.type, f), r.a.createElement(h.a, {
					className: Object(c.a)(S.a.icon, S.a.showOnHover)
				})) : r.a.createElement(h.a, {
					className: S.a.icon
				})) : g.source && g.source.url ? r.a.createElement(m.a, {
					"aria-label": n.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(c.a)(t, S.a.outer),
					"data-click-id": "expando_open",
					href: g.source.url,
					isSponsored: l.isSponsored,
					postId: l.id,
					source: l.source,
					target: "_blank"
				}, r.a.createElement(w.a, {
					className: Object(c.a)(S.a.icon, S.a.outboundLinkIcon)
				})) : r.a.createElement(i.a, {
					"aria-label": n.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(c.a)(t, S.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(g.permalink),
					rel: "nofollow"
				}, r.a.createElement(v, {
					className: S.a.icon
				}))
			})
		},
		"./src/reddit/components/Footer/index.m.less": function(e, t, s) {
			e.exports = {
				FooterContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				footerContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				UserAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				userAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				UserAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				userAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				PrivacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				privacyLink: "_2mk2nvnRu7inPdJY2i-H79"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				Title: "_6Sb8zEFmf-xF6UJ5SowYB",
				title: "_6Sb8zEFmf-xF6UJ5SowYB",
				DropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				dropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				LayoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				layoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				LayoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				layoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				LayoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				layoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				Dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				selected: "_1fiOgAxLiYfEU41C1NOX9B",
				LayoutIcon: "_2ONLRjLuDplXKbcaS8dGe_",
				layoutIcon: "_2ONLRjLuDplXKbcaS8dGe_"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/asTooltip.tsx"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/reddit/actions/preferences.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/postLayout.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/contexts/Tooltip.ts"),
				x = s("./src/reddit/controls/Dropdown/index.tsx"),
				g = s("./src/reddit/controls/Dropdown/Row.tsx"),
				f = s("./src/reddit/i18n/utils.ts"),
				v = s("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				y = s("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				O = s("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				E = s("./src/reddit/selectors/telemetry.ts"),
				w = s("./src/reddit/selectors/tooltip.ts"),
				C = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				_ = s.n(C);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const k = "view--layout--FUE",
				S = "LayoutSwitch--picker",
				P = Object(i.a)(x.a),
				I = {
					[u.d.Card]: O.a,
					[u.d.Classic]: v.a,
					[u.d.Compact]: y.a
				},
				N = {
					[u.d.Card]: Object(f.c)("card"),
					[u.d.Classic]: Object(f.c)("classic"),
					[u.d.Compact]: Object(f.c)("compact")
				},
				T = Object(b.t)(),
				L = Object(a.c)({
					dropdownIsOpen: Object(w.b)(S),
					postLayout: b.M,
					redditStyle: b.A
				}),
				M = Object(r.b)(L, e => ({
					onListingLayoutChange: (t, s) => e(Object(l.v)(t, s)),
					openDropdown: () => e(Object(m.h)({
						tooltipId: S
					}))
				}));
			class R extends o.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: s,
							sendEvent: n,
							subredditId: o
						} = this.props;
						t ? t(e) : (s(e, o), n(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(E.screen)(t),
							subreddit: Object(E.subreddit)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: s,
							onLayoutClick: n,
							postLayout: r
						} = this.props, a = s || u.e[r], i = e === a, d = I[e];
						return o.a.createElement(g.b, j({}, t, {
							className: Object(c.a)(_.a.LayoutItem, {
								[_.a.selected]: i
							}),
							"data-layout": e,
							displayText: N[e],
							iconWrapperClassName: _.a.LayoutItemIconWrapper,
							isSelected: i,
							noHover: i,
							onClick: i ? void 0 : () => this.changeLayout(e),
							textClassName: _.a.LayoutItemTextClassName
						}), o.a.createElement(d, {
							className: _.a.LayoutIcon,
							onClick: i ? void 0 : n
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return o.a.createElement(P, j({}, e, {
							className: _.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: _.a.DropdownRow,
							rowIconClassName: _.a.DropdownRowIcon,
							rowSelectedClassName: _.a.DropdownRowSelected,
							tooltipId: S
						}), this.renderItem(u.d.Card), this.renderItem(u.d.Classic), this.renderItem(u.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: s,
						postLayout: n
					} = this.props, r = t || u.e[n];
					return o.a.createElement("div", {
						className: Object(c.a)(_.a.Container, e),
						id: k
					}, o.a.createElement("div", {
						className: _.a.DropdownContainer,
						onClick: s
					}, this.renderItem(r, {
						id: S,
						showDropdownTriangle: !0
					}), o.a.createElement(h.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = T(M(Object(p.c)(Object(d.a)(R))))
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less": function(e, t, s) {
			e.exports = {
				SortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				sortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				SortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				sortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				SortLink: "M2Hk_S2yvXpsNPfZMBMur",
				sortLink: "M2Hk_S2yvXpsNPfZMBMur",
				selected: "_1s79QnBguPbckxiiPvFXGP",
				SortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				sortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				SortLabel: "_1lwNBHmCQJObvqs1fXKSYR",
				sortLabel: "_1lwNBHmCQJObvqs1fXKSYR",
				SortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				sortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				CountrySort: "VatfkH4hd3AcIOCT15Zai",
				countrySort: "VatfkH4hd3AcIOCT15Zai",
				StateSort: "Eh7eF0Eki8fFfZXVYJd1y",
				stateSort: "Eh7eF0Eki8fFfZXVYJd1y",
				TimeSort: "GzkzdrqG-NjAYH7eKJan4",
				timeSort: "GzkzdrqG-NjAYH7eKJan4",
				DropdownSortWrapper: "_2DTQGxtlm0AKr7OUepCaGY",
				dropdownSortWrapper: "_2DTQGxtlm0AKr7OUepCaGY",
				Dropdown: "Sgi9lgQUrox4tW9Q75iif",
				dropdown: "Sgi9lgQUrox4tW9Q75iif",
				DropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				dropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				DropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				dropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				DropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				dropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				DropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT",
				dropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "wBtTDilkW_rtT2k5x3eie",
				container: "wBtTDilkW_rtT2k5x3eie",
				LayoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5",
				layoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.array.sort.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/listingSort/index.ts"),
				c = s("./src/reddit/actions/preferences.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				p = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				u = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/reselect/es/index.js")),
				b = s("./src/lib/addQueryParams/index.ts"),
				h = s("./src/lib/constants/index.ts"),
				x = s("./src/reddit/components/CountrySort/index.tsx"),
				g = s("./src/reddit/components/ListingSort/index.tsx"),
				f = s("./src/reddit/components/TimeSort/index.tsx"),
				v = s("./src/reddit/constants/listings.ts"),
				y = s("./src/reddit/constants/listingSorts.ts"),
				O = s("./src/reddit/controls/InternalLink/index.tsx"),
				E = s("./src/reddit/helpers/path/index.ts"),
				w = s("./src/reddit/helpers/trackers/navigation.ts"),
				C = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				_ = s("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				k = s("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				S = s.n(k);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const I = new Set([h.O.CONTROVERSIAL, h.O.TOP]),
				N = new Set([h.O.CONTROVERSIAL, h.O.RISING]),
				T = "ListingSort--Overflow",
				L = Object(l.t)({
					isFrontpage: l.y,
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				M = Object(u.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, _.a, j.i, l.C, (e, t, s, n, o) => {
					if (e) return {
						isPopularPage: o,
						sortOptions: e
					};
					const r = [h.O.HOT, h.O.NEW, h.O.TOP, h.O.RISING];
					return (t && (n || s) || o && s) && r.unshift(h.O.BEST), {
						isPopularPage: o,
						sortOptions: r
					}
				});
			class R extends o.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(w.a)(e))
					}, this.getSortUrl = e => {
						const {
							baseUrl: t,
							isProfilePage: s
						} = this.props;
						return s ? Object(b.a)(t, {
							sort: e
						}) : Object(E.a)(t, "".concat(e, "/"))
					}, this.renderSort = e => {
						const {
							disabled: t,
							geopopularSort: s,
							isPopularPage: n,
							sort: r
						} = this.props, i = n && !!s && e === h.O.HOT && r === h.O.HOT;
						return o.a.createElement(o.a.Fragment, {
							key: e
						}, o.a.createElement(O.a, {
							className: Object(a.a)(S.a.SortLink, e === r && S.a.selected),
							onClick: () => this.changeSort(e),
							to: this.getSortUrl(e),
							key: e
						}, o.a.createElement(g.a, {
							className: S.a.SortIcon,
							sort: e
						}), o.a.createElement("div", {
							className: S.a.SortLabel
						}, Object(y.a)(e))), i && o.a.createElement(x.a, {
							baseUrl: v.c[v.b.Popular],
							buttonClassName: S.a.DropdownButton,
							className: S.a.CountrySort,
							disabled: t,
							dropdownClassName: S.a.Dropdown,
							rowClassName: S.a.DropdownRow,
							rowSelectedClassName: S.a.DropdownRowSelected,
							wrapperClassName: S.a.DropdownSortWrapper,
							showStateAbbreviations: !0,
							sort: s,
							stateSortClassName: S.a.StateSort
						}))
					}
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: s,
						sort: n,
						sortOptions: r,
						timeSort: i
					} = this.props, c = !t && I.has(n), d = N.has(n), l = r.filter(e => !N.has(e)), m = r.filter(e => N.has(e) && e !== n);
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(g.d, P({}, this.props, {
						buttonClassName: S.a.DropdownButton,
						className: Object(a.a)(S.a.SortDropdown, e),
						rowClassName: S.a.DropdownRow,
						rowIconClassName: S.a.DropdownRowIcon,
						rowSelectedClassName: S.a.DropdownRowSelected,
						showTitle: !1
					})), o.a.createElement("div", {
						className: Object(a.a)(S.a.SortButtons, e)
					}, l.map(this.renderSort)), d && this.renderSort(n), c && o.a.createElement(f.a, {
						baseUrl: this.getSortUrl(n),
						buttonClassName: S.a.DropdownButton,
						className: S.a.TimeSort,
						dropdownClassName: S.a.Dropdown,
						listingSort: n,
						onChange: s,
						rowClassName: S.a.DropdownRow,
						rowSelectedClassName: S.a.DropdownRowSelected,
						timeSort: i || h.Sb,
						wrapperClassName: S.a.DropdownSortWrapper
					}), m.length > 0 && o.a.createElement(g.d, P({}, this.props, {
						className: Object(a.a)(S.a.SortOverflow, e),
						dropdownClassName: S.a.Dropdown,
						dropdownId: T,
						rowClassName: S.a.DropdownRow,
						rowIconClassName: S.a.DropdownRowIcon,
						rowSelectedClassName: S.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: m
					}), o.a.createElement("button", {
						className: S.a.SortOverflowButton,
						id: T
					}, o.a.createElement(C.a, null))))
				}
			}
			var A = L(Object(r.b)(M)(Object(d.c)(R))),
				B = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				F = s.n(B);
			const D = Object(l.t)({
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				H = Object(r.b)(null, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						updateSortPreference: (t, n) => {
							if (s) {
								const o = Object(i.c)({
									sort: t,
									timeSort: n
								});
								e(Object(c.G)(s, o))
							}
						}
					}
				});
			class W extends o.a.Component {
				constructor() {
					super(...arguments), this.blurListingBroadcast = () => {
						m.a.setState({
							isListingFocused: !1
						})
					}, this.focusListingBroadcast = () => {
						m.a.setState({
							isListingFocused: !0
						})
					}, this.updateTimeSort = e => {
						this.props.updateSortPreference(this.props.sort, e)
					}
				}
				render() {
					const {
						baseUrl: e,
						className: t,
						countrySort: s,
						disabled: n = !1,
						isProfilePage: r,
						sort: i,
						sortOptions: c,
						subredditId: d,
						timeSort: l,
						updateSortPreference: m
					} = this.props;
					return o.a.createElement("div", {
						className: Object(a.a)(F.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, o.a.createElement(A, {
						baseUrl: e,
						disabled: n,
						geopopularSort: s,
						onChange: m,
						onTimeSortChange: this.updateTimeSort,
						sort: i,
						sortOptions: c,
						timeSort: l
					}), !r && o.a.createElement(p.a, {
						className: F.a.LayoutSwitch,
						subredditId: d
					}))
				}
			}
			t.a = D(H(Object(d.c)(W)))
		},
		"./src/reddit/components/GildModal/Loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				o = s("./src/lib/loadWithRetries/index.ts");
			const r = Object(n.a)({
				getComponent: () => Object(o.a)(() => Promise.all([s.e("FramedGild~GildModal"), s.e("GildModal")]).then(s.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			t.a = r
		},
		"./src/reddit/components/LargePost/placeholder.m.less": function(e, t, s) {
			e.exports = {
				content: "_1yYeg-XN7v7i06TrK8Lh13",
				emptyVerticalVotes: "_3Qm3gV6v4Y9YWuQgCqMvJr",
				emptyScore: "y9vamInQ4LrXndusvhkBl",
				topLine: "_3QuUl4wSXyqVEAkIgGaLXl",
				topMetaOne: "_3vDeGQp8VifbnDC95HagCL",
				topMetaTwo: "Nci_4K-inwrSvpM-HSgWy",
				title: "_1QxTngAAL4xURgv5RVNOq1",
				media: "_2cFr_UVzM0pQGvZVL2Pmx5",
				flatlist: "_33_7mRxP4egdr8CL9OMSdb",
				flatlistItemOne: "_EVV9UvUf3cYf-HtTUL33",
				flatListItemTwo: "_2Ovk4TwuzZDamFhAj_X5Nl",
				bottomMeta: "_3Yno3UEEUpbfXOklgaEf27",
				postActionBar: "_3-iHWkhaRqC0JmCwckFVg1",
				postActionButton: "_314KvlynGyTcpUjSXckrbY",
				long: "_3EpUFkJ6GGzK-aVzndYmTT"
			}
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2cB6ysPhgaYtknebHcCXGH",
				container: "_2cB6ysPhgaYtknebHcCXGH",
				Component: "qQD1kUtHq2K4gyBqJrEnF",
				component: "qQD1kUtHq2K4gyBqJrEnF",
				"m-consider-sidebar": "gd0BrpRBoY73xB5YwvDWU",
				mConsiderSidebar: "gd0BrpRBoY73xB5YwvDWU"
			}
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/constants/componentSizes.ts"),
				d = s("./src/reddit/constants/postLayout.ts"),
				l = s("./src/reddit/constants/screenWidths.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less"),
				u = s.n(p),
				b = s("./src/lib/lessComponent.tsx");
			const h = Object(m.t)(),
				x = Object(a.c)({
					layout: m.M
				}),
				g = Object(r.b)(x);
			class f extends o.a.Component {
				constructor(e) {
					super(e), this.onClickIcon = e => {
						if (void 0 === this.state.left) {
							const e = this.ref.offsetLeft;
							this.setState({
								left: e
							})
						}
					}, this.onMouseEnter = () => {
						this.state.mouseInside || this.setState({
							mouseInside: !0
						})
					}, this.onMouseLeave = () => {
						this.state.mouseInside && this.setState({
							left: void 0,
							mouseInside: !1
						})
					}, this.ref = null, this.state = {
						left: void 0,
						mouseInside: !1
					}
				}
				componentWillReceiveProps(e) {
					0 !== e.offsetLeft - this.props.offsetLeft && (this.noTransition = !0)
				}
				componentDidUpdate() {
					this.noTransition && (this.noTransition = !1)
				}
				getDynamicStyleTags() {
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n          .".concat(u.a.Component, " {\n            --layoutNavigation-considerateNav-offsetLeft: ").concat(this.props.offsetLeft, "px;\n          }\n        ")
						}
					}), this.getLargeLayoutStyle())
				}
				getLargeLayoutStyle() {
					const e = this.props.offsetLeft + 2 * c.m + c.q + c.r,
						t = l.a - e,
						s = c.g - t,
						n = l.a + s + (this.props.bladeOpen ? c.a : 0);
					return this.props.layout !== d.g.Large ? null : o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n            @media (min-width: ".concat(n, "px) {\n              .").concat(u.a.Component, " {\n                left: calc((100% + var(--layoutNavigation-considerateNav-offsetLeft) - ").concat(c.g + c.q + c.r, "px) / 2);\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ").concat(c.r, "px) / 2);\n              }\n\n              .").concat(u.a.Component, ".").concat(u.a["m-consider-sidebar"], " {\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ").concat(c.g + c.q + c.r, "px) / 2);\n              }\n            }\n          ")
						}
					})
				}
				render() {
					const e = Object(i.a)(this.props.className, u.a.Component, {
						[u.a["m-consider-sidebar"]]: this.props.considerSidebar
					});
					return o.a.createElement("div", {
						className: u.a.Container
					}, o.a.createElement("div", {
						className: e,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseEnter,
						ref: e => this.ref = e,
						style: {
							left: this.state.left || void 0,
							transition: this.noTransition ? "initial" : void 0
						}
					}, this.getDynamicStyleTags(), this.props.render(this.onClickIcon)))
				}
			}
			t.a = h(g(b.a.wrapped(f, "Component", u.a)))
		},
		"./src/reddit/components/LayoutNavigation/Container.m.less": function(e, t, s) {
			e.exports = {
				BodyContainer: "_1levonEFuP4txDjgWG4Akb",
				bodyContainer: "_1levonEFuP4txDjgWG4Akb",
				SidebarPlaceholder: "_1CZxyZF9URlq6yGv7rGLFk",
				sidebarPlaceholder: "_1CZxyZF9URlq6yGv7rGLFk",
				defaultLayout: "_3gXSYtUgFtDmPjSmbC1exY",
				"m-collectionLayout": "_2QBg8k5_IhSEfaeA4P26Ix",
				mCollectionLayout: "_2QBg8k5_IhSEfaeA4P26Ix",
				InnerContainer: "_342tHkB-Rwz4OVqGfKgPab",
				innerContainer: "_342tHkB-Rwz4OVqGfKgPab",
				Component: "_12Ewyh01Y1cMPB3Ri_F1C4",
				component: "_12Ewyh01Y1cMPB3Ri_F1C4"
			}
		},
		"./src/reddit/components/LayoutNavigation/Container.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/constants/componentSizes.ts"),
				c = s("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				d = s("./src/reddit/layout/page/Listing/Content.tsx"),
				l = s("./src/reddit/selectors/structuredStyles.ts"),
				m = s("./src/reddit/selectors/userPrefs.ts"),
				p = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				u = s("./src/reddit/components/LayoutNavigation/Container.m.less"),
				b = s.n(u),
				h = s("./src/lib/lessComponent.tsx");
			const x = h.a.div("BodyContainer", b.a),
				g = h.a.div("SidebarPlaceholder", b.a),
				f = h.a.div("InnerContainer", b.a),
				v = Object(a.c)({
					bladeOpen: e => !!Object(l.j)(e),
					isSubscriptionsPinned: m.b
				}),
				y = Object(r.b)(v);
			class O extends o.a.Component {
				constructor(e) {
					super(e), this.state = {
						bodyScrollOffset: 0
					}
				}
				componentDidMount() {
					const e = () => {
						const {
							marginRight: e
						} = document.body.style;
						!!e != !!this.state.bodyScrollOffset && (e ? this.setState({
							bodyScrollOffset: Object(c.c)(document.body)
						}) : this.setState({
							bodyScrollOffset: 0
						}))
					};
					try {
						this.docObserver = new MutationObserver(e)
					} catch (t) {}
					this.docObserver && this.docObserver.observe(document.body, {
						attributes: !0
					})
				}
				componentWillUnmount() {
					this.docObserver && this.docObserver.disconnect()
				}
				render() {
					const {
						bladeOpen: e,
						considerPinnedSubscriptions: t = !0,
						containerClassName: s,
						isSubscriptionsPinned: n,
						considerSidebar: r = !0,
						onFocus: a,
						onBlur: c
					} = this.props;
					let l = 0;
					return n && !e && t && (l += i.u), 0 !== this.state.bodyScrollOffset && (l -= this.state.bodyScrollOffset), o.a.createElement("div", {
						className: this.props.className
					}, o.a.createElement(x, {
						onFocus: a,
						onBlur: c
					}, o.a.createElement(d.a, {
						fitPageToContent: !0
					}, o.a.createElement(f, {
						className: s
					}, o.a.createElement(p.a, {
						bladeOpen: e,
						considerSidebar: r,
						offsetLeft: l,
						render: this.props.render
					}))), r && o.a.createElement(g, null)))
				}
			}
			t.a = h.a.wrapped(y(O), "Component", b.a)
		},
		"./src/reddit/components/LayoutNavigation/index.m.less": function(e, t, s) {
			e.exports = {
				listingSort: "_3E6INjIzonJwM0r4N1QJYK",
				separator: "lMwVtd6llwkRVdjCNiCAl"
			}
		},
		"./src/reddit/components/LayoutNavigation/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.array.sort.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/listingSort/index.ts"),
				d = s("./src/reddit/components/LayoutNavigation/Container.tsx"),
				l = s("./src/reddit/actions/preferences.ts"),
				m = s("./src/reddit/components/CountrySort/index.tsx"),
				p = s("./src/reddit/components/ListingSort/index.tsx"),
				u = s("./src/reddit/components/TimeSort/index.tsx"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/constants/page.ts"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/controls/LayoutSwitch/index.tsx"),
				f = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				v = s("./src/reddit/selectors/user.ts"),
				y = s("./src/reddit/components/LayoutNavigation/index.m.less"),
				O = s.n(y);
			const E = Object(x.t)({
					isProfilePage: x.G,
					pageLayer: e => e
				}),
				w = Object(a.c)({
					currentUser: v.i,
					language: v.O,
					isPopularListing: x.C,
					redditStyle: x.A
				}),
				C = Object(r.b)(w, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						updateSortPreference: (t, n) => {
							if (s) {
								const o = Object(c.c)({
									sort: t,
									timeSort: n
								});
								e(Object(l.G)(s, o))
							}
						}
					}
				});
			t.a = E(C(Object(b.c)(e => {
				const {
					disabled: t = !1,
					isPopularListing: s,
					isProfilePage: n
				} = e, r = e.sort === i.O.TOP || e.sort === i.O.CONTROVERSIAL, a = s && e.countrySort && e.sort === i.O.HOT, c = e => {
					f.a.setState({
						isListingFocused: e
					})
				};
				return o.a.createElement(d.a, {
					className: e.className,
					onFocus: () => c(!0),
					onBlur: () => c(!1),
					render: s => o.a.Children.toArray([n ? null : o.a.createElement(g.a, {
						onLayoutClick: s,
						subredditId: e.subredditId
					}), n ? null : o.a.createElement("div", {
						className: O.a.separator
					}), o.a.createElement(p.d, {
						className: O.a.listingSort,
						baseUrl: e.baseUrl,
						disabled: t,
						geopopularSort: e.countrySort,
						onChange: e.updateSortPreference,
						sort: e.sort,
						sortOptions: e.sortOptions
					}), !t && r && [o.a.createElement(u.a, {
						baseUrl: "".concat(e.baseUrl, "/").concat(e.sort),
						listingSort: e.sort,
						onChange: t => e.updateSortPreference(e.sort, t),
						timeSort: e.timeSort || i.Sb
					})], a && o.a.createElement(m.a, {
						baseUrl: e.isPopularListing ? "/r/".concat(h.f, "/") : "",
						disabled: t,
						sort: e.countrySort
					})])
				})
			})))
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/icons/svgs/Best/index.m.less"),
				c = s.n(i);
			var d = e => o.a.createElement("svg", {
					className: Object(r.a)(c.a.best, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					d: "M18.06,3a1,1,0,0,0-1-1A11.16,11.16,0,0,0,9.11,5.29L6.72,7.68A4.45,4.45,0,0,0,4.33,7,4.5,4.5,0,0,0,1.15,8.3a.5.5,0,0,0,0,.71L4,11.84l4.25,4.24,2.83,2.83h0a.48.48,0,0,0,.7,0,4.49,4.49,0,0,0,.62-5.57L14.76,11A11.15,11.15,0,0,0,18.06,3ZM13.47,9.41a2,2,0,0,1-2.88-2.77l.05,0a2,2,0,0,1,2.83,2.82Z"
				}), o.a.createElement("path", {
					d: "M3.21,14.73h0A3.89,3.89,0,0,0,2.06,17.5a.5.5,0,0,0,.5.5,4,4,0,0,0,2.83-1.21,1.5,1.5,0,1,0-2.18-2.06Z"
				})),
				l = s("./src/reddit/icons/svgs/Controversial/index.m.less"),
				m = s.n(l);
			var p = e => o.a.createElement("svg", {
					className: Object(r.a)(m.a.controversial, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("g", null, o.a.createElement("polygon", {
					fill: "inherit",
					points: "16 0 7.25 0 3.5 10.108 8.5 10.108 4.475 20 16 8 11 8"
				}))),
				u = s("./src/reddit/icons/svgs/Hot/index.m.less"),
				b = s.n(u);
			var h = e => o.a.createElement("svg", {
					className: Object(r.a)(b.a.icon, e.className),
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, o.a.createElement("title", null, "Hot"), o.a.createElement("path", {
					d: "M10.31.61a.5.5,0,0,0-.61,0C9.41.83,2.75,6.07,2.75,11.47a8.77,8.77,0,0,0,3.14,6.91.5.5,0,0,0,.75-.64,3.84,3.84,0,0,1-.55-2A7.2,7.2,0,0,1,10,9.56a7.2,7.2,0,0,1,3.91,6.23,3.84,3.84,0,0,1-.55,2,.5.5,0,0,0,.75.64,8.77,8.77,0,0,0,3.14-6.91C17.25,6.07,10.59.83,10.31.61Z"
				})),
				x = s("./src/reddit/icons/svgs/New/index.m.less"),
				g = s.n(x);
			var f = e => o.a.createElement("svg", {
					className: Object(r.a)(g.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("g", null, o.a.createElement("polygon", {
					fill: "inherit",
					points: "17.16 10 19.07 12.936 15.799 14.188 15.619 17.686 12.237 16.776 10.035 19.5 7.833 16.776 4.451 17.686 4.271 14.188 1 12.936 2.91 10 1 7.065 4.271 5.812 4.451 2.315 7.833 3.224 10.035 .5 12.237 3.224 15.619 2.315 15.799 5.812 19.07 7.065"
				}))),
				v = s("./src/reddit/icons/svgs/Rising/index.m.less"),
				y = s.n(v);
			var O = e => o.a.createElement("svg", {
					className: Object(r.a)(y.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("g", null, o.a.createElement("path", {
					fill: "inherit",
					d: "M18.5 4h-6a.5.5 0 0 0-.35.85l1.64 1.65-3.29 3.29L8.21 7.5a1 1 0 0 0-1.41 0L.65 13.65a.5.5 0 0 0 0 .71l2 2a.5.5 0 0 0 .71 0l4.14-4.15 2.29 2.29a1 1 0 0 0 1.41 0l5.3-5.29 1.65 1.65a.5.5 0 0 0 .85-.36v-6a.5.5 0 0 0-.5-.5z"
				}))),
				E = s("./src/reddit/icons/svgs/Top/index.tsx"),
				w = s("./src/reddit/controls/Dropdown/index.m.less"),
				C = s.n(w);
			const _ = {
				[a.O.BEST]: d,
				[a.O.HOT]: h,
				[a.O.NEW]: f,
				[a.O.CONTROVERSIAL]: p,
				[a.O.TOP]: E.a,
				[a.O.RISING]: O
			};
			t.a = e => {
				let {
					className: t,
					sort: s
				} = e;
				const n = _[s];
				return n ? o.a.createElement(n, {
					className: Object(r.a)(t, C.a.iconStyles)
				}) : null
			}
		},
		"./src/reddit/components/ListingSort/index.m.less": function(e, t, s) {
			e.exports = {
				Dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				DropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				dropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				Title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				Row: "_1gYorLdXyKMUS-i9loCkHd",
				row: "_1gYorLdXyKMUS-i9loCkHd",
				SortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				sortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				isDisabled: "_1BlN3qzijbBTtkKxs6CX-N",
				DropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				dropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				ListingSort: "_1oAH8WzvQU6SeYEsM1msMu",
				listingSort: "_1oAH8WzvQU6SeYEsM1msMu",
				ListingSortIcon: "_2_BnLcYdo9EaJjSVrN0kdW",
				listingSortIcon: "_2_BnLcYdo9EaJjSVrN0kdW"
			}
		},
		"./src/reddit/components/ListingSort/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return L
			})), s.d(t, "b", (function() {
				return R
			})), s.d(t, "c", (function() {
				return A
			}));
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/higherOrderComponents/asTooltip.tsx"),
				d = s("./src/lib/addQueryParams/index.ts"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/constants/index.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/constants/listingSorts.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/contexts/Tooltip.ts"),
				g = s("./src/reddit/controls/Dropdown/index.tsx"),
				f = s("./src/reddit/controls/Dropdown/Row.tsx"),
				v = s("./src/reddit/helpers/path/index.ts"),
				y = s("./src/reddit/helpers/trackers/navigation.ts"),
				O = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				E = s("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				w = s("./src/reddit/selectors/tooltip.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				j = s("./src/reddit/components/ListingSort/index.m.less"),
				k = s.n(j),
				S = s("./src/lib/lessComponent.tsx");

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var I = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const N = "ListingSort--SortPicker",
				T = Object(c.a)(S.a.wrapped(g.a, "Dropdown", k.a)),
				L = S.a.wrapped(_.a, "ListingSortIcon", k.a),
				M = (S.a.wrapped(O.b, "DropdownTriangle", k.a), S.a.div("Title", k.a)),
				R = S.a.wrapped(e => r.a.createElement(f.b, P({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", k.a),
				A = e => {
					var {
						disabled: t
					} = e, s = I(e, ["disabled"]);
					return r.a.createElement("div", P({}, s, {
						className: Object(l.a)(k.a.SortWrapper, s.className, {
							[k.a.isDisabled]: t
						})
					}))
				},
				B = S.a.div("DropdownRowDisabled", k.a),
				F = Object(h.t)({
					isFrontpage: h.y,
					isProfilePage: h.G,
					pageLayer: e => e
				}),
				D = Object(i.c)({
					isBestSortPopularEnabled: E.a,
					user: C.i,
					dropdownIsOpen: (e, t) => Object(w.b)(t.dropdownId || N)(e),
					language: C.O,
					isPopularPage: h.C
				}),
				H = Object(a.b)(D, (e, t) => {
					let {
						dropdownId: s,
						pageLayer: n
					} = t;
					return {
						onOpenDropdown: () => e(Object(p.h)({
							tooltipId: s || N
						}))
					}
				});
			t.d = S.a.wrapped(F(H(Object(u.c)(e => r.a.createElement("div", {
				className: e.className,
				onClick: e.onOpenDropdown
			}, !1 !== e.showTitle && r.a.createElement(M, null, n.fbt._("Sort", null, {
				hk: "2BfINq"
			})), r.a.createElement(A, {
				disabled: e.disabled
			}, e.children || r.a.createElement(R, {
				className: e.buttonClassName,
				displayText: Object(b.a)(e.sort),
				id: e.dropdownId || N,
				showDropdownTriangle: !0
			}, r.a.createElement(L, {
				sort: e.sort
			}))), r.a.createElement(x.a.Consumer, null, t => r.a.createElement(T, P({
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId || N
			}, t, {
				renderContentsHidden: !0
			}), e.disabled ? r.a.createElement(B, null, n.fbt._("Coming soon", null, {
				hk: "taPqm"
			})) : (e.sortOptions || ((e, t, s, n) => {
				const o = [m.O.HOT, m.O.NEW, m.O.TOP, m.O.RISING];
				return (e && (s || n) || t && n) && o.unshift(m.O.BEST), o
			})(e.isFrontpage, e.isPopularPage, e.user, e.isBestSortPopularEnabled)).map(t => r.a.createElement(f.b, {
				className: Object(l.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
				displayText: Object(b.a)(t),
				onClick: () => {
					e.onChange(t), e.sendEvent(Object(y.a)(t))
				},
				href: e.isProfilePage ? Object(d.a)(e.baseUrl, {
					sort: t
				}) : Object(v.a)(e.baseUrl, "".concat(t, "/")),
				isSelected: e.sort === t,
				key: t
			}, r.a.createElement(L, {
				className: e.rowIconClassName,
				sort: t
			}))))))))), "ListingSort", k.a)
		},
		"./src/reddit/components/ModModeReports/index.m.less": function(e, t, s) {
			e.exports = {
				Text: "_1gNngyeM0l7oKkuGjoSTm",
				text: "_1gNngyeM0l7oKkuGjoSTm",
				Placeholder: "_1oYW-msczpGlYVcXmyEu9j",
				placeholder: "_1oYW-msczpGlYVcXmyEu9j"
			}
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/ModModeReports/index.m.less"),
				c = s.n(i);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = a.a.div("Text", c.a), m = a.a.div("Placeholder", c.a), p = () => r.a.createElement(m, null, r.a.createElement(l, null, d._("Loading reports…", null, {
				hk: "4gwdQw"
			}))), u = Object(n.a)({
				resolved: {},
				chunkName: () => "ModerationDropdowns",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ModerationDropdowns").then(s.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeReports/_ModModeReports.tsx"
				}
			}, {
				fallback: r.a.createElement(p, null),
				ssr: !1
			});
			t.a = u
		},
		"./src/reddit/components/ModerationPrompts/Prompt.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/actions/reportFlow.ts"),
				l = s("./src/reddit/components/Popup/index.tsx"),
				m = s("./src/reddit/components/Popup/Button.tsx"),
				p = s("./src/reddit/helpers/trackers/reportPrompt.ts"),
				u = s("./src/reddit/hooks/useTracking.ts"),
				b = s("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function h(e) {
				const {
					subredditName: t,
					post: s,
					isOverlay: h
				} = e, [x, g] = Object(o.useState)(!0), f = Object(b.b)(s.id, h), v = Object(a.c)(), y = Object(u.a)(), O = Object(b.a)(s, h), E = (e, n) => y(Object(p.a)(t, s.id, e, n));
				Object(o.useEffect)(() => {
					O && E("modal", "show")
				}, [O]);
				if (!O || !x) return null;
				const w = n.fbt._("Help r/{subredditName} mods", [n.fbt._param("subredditName", t)], {
					hk: "1rusN4"
				});
				return r.a.createElement(l.a, {
					id: f,
					title: w,
					onClose: () => {
						g(!1), E("close", "click"), v(Object(c.G)()), v(Object(c.R)({
							[s.id]: {
								moderationPrompt: void 0
							}
						}))
					},
					onClickOutside: () => {
						v(Object(c.G)())
					}
				}, r.a.createElement("p", null, n.fbt._("Report this post if it's breaking {=Reddit} or {=community} rules.", [n.fbt._param("=Reddit", r.a.createElement("a", {
					href: "https://www.redditinc.com/policies/content-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, n.fbt._("Reddit", null, {
					hk: "4g8g4O"
				}))), n.fbt._param("=community", r.a.createElement(i.a, {
					to: "/r/".concat(t, "/about/rules"),
					target: "_blank"
				}, n.fbt._("community", null, {
					hk: "1cy8jU"
				})))], {
					hk: "sfngx"
				})), r.a.createElement(m.a, {
					onClick: () => (g(!1), E("report", "click"), void v(Object(d.j)(s.id)))
				}, n.fbt._("Report", null, {
					hk: "3M0Eii"
				})))
			}
		},
		"./src/reddit/components/ModerationPrompts/Survey.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			}));
			var n, o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/reportFlow.ts"),
				m = s("./src/reddit/components/Popup/index.tsx"),
				p = s("./src/reddit/components/Popup/Button.tsx"),
				u = s("./src/reddit/helpers/trackers/reportPrompt.ts"),
				b = s("./src/reddit/hooks/useTracking.ts"),
				h = s("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function x(e) {
				const {
					subredditName: t,
					post: s,
					isOverlay: x
				} = e, [g, f] = Object(r.useState)(n.Survey), v = Object(h.b)(s.id, x), y = Object(i.c)(), O = Object(b.a)(), E = Object(h.a)(s, x), w = (e, n) => O(Object(u.b)(t, s.id, e, n));
				Object(r.useEffect)(() => {
					E && w("modal", "show")
				}, [E]);
				const C = e => {
					f(n.Closed), w("site" === e ? "breaks_reddit_rules" : "breaks_community_rules", "click"), y(Object(l.j)(s.id, void 0, void 0, e))
				};
				if (!E) return null;
				let _ = null;
				const j = {
					id: v,
					title: o.fbt._("Why did you downvote this post?", null, {
						hk: "2tTiIx"
					}),
					onClose: () => {
						f(n.Closed), w("close", "click"), y(Object(d.G)())
					},
					onClickOutside: () => {
						y(Object(d.G)())
					}
				};
				switch (g) {
					case n.Survey:
						_ = a.a.createElement(m.a, j, a.a.createElement("p", null, o.fbt._("Your answer helps r/ {subredditName} mods improve this community.", [o.fbt._param("subredditName", t)], {
							hk: "DNEel"
						})), a.a.createElement(p.a, {
							onClick: () => {
								f(n.OffTopic), w("off_topic", "click")
							}
						}, o.fbt._("It's off topic", null, {
							hk: "4iG26l"
						})), a.a.createElement(p.a, {
							onClick: () => {
								f(n.DontLike), w("dont_like", "click")
							}
						}, o.fbt._("I don't like it", null, {
							hk: "1jB1Mh"
						})), a.a.createElement(p.a, {
							onClick: () => {
								f(n.BreaksRules), w("breaks_rules", "click")
							}
						}, o.fbt._("It breaks the rules", null, {
							hk: "1yQBhi"
						})));
						break;
					case n.OffTopic:
						_ = a.a.createElement(m.a, j, a.a.createElement("p", null, o.fbt._("Got it. Thanks for helping out this community.", null, {
							hk: "22pTV3"
						})));
						break;
					case n.DontLike:
						_ = a.a.createElement(m.a, j, a.a.createElement("p", null, o.fbt._("Just a reminder, it’s not an official rule but it is considered improper Reddiquette to downvote an otherwise acceptable post because you don’t personally like it.", null, {
							hk: "3mRvPM"
						})));
						break;
					case n.BreaksRules:
						_ = a.a.createElement(m.a, j, a.a.createElement("p", null, o.fbt._("Let us know if it breaks {=Reddit} or {=community} rules.", [o.fbt._param("=Reddit", a.a.createElement("a", {
							href: "https://www.redditinc.com/policies/content-policy",
							target: "_blank",
							rel: "noopener noreferrer"
						}, o.fbt._("Reddit", null, {
							hk: "1amvzD"
						}))), o.fbt._param("=community", a.a.createElement(c.a, {
							to: "/r/".concat(t, "/about/rules"),
							target: "_blank"
						}, o.fbt._("community", null, {
							hk: "2TnSrt"
						})))], {
							hk: "1mXxTX"
						})), a.a.createElement(p.a, {
							onClick: () => C("site")
						}, o.fbt._("It breaks Reddit rules", null, {
							hk: "3MxBm9"
						})), a.a.createElement(p.a, {
							onClick: () => C("community")
						}, o.fbt._("It breaks community rules", null, {
							hk: "3XbHan"
						})));
						break;
					case n.Closed:
				}
				return _
			}! function(e) {
				e[e.Survey = 0] = "Survey", e[e.OffTopic = 1] = "OffTopic", e[e.DontLike = 2] = "DontLike", e[e.BreaksRules = 3] = "BreaksRules", e[e.Closed = 4] = "Closed"
			}(n || (n = {}))
		},
		"./src/reddit/components/OverviewChronoComment/index.m.less": function(e, t, s) {
			e.exports = {
				commentOuterWrapper: "_1g70Ndz7edo5LA6hie1Gkt",
				commentWrapper: "_324SLny5spJ682AiI73uBO",
				isLast: "_2nq8DZns5TUNKoe0aDsW4K",
				isAwarded: "_3L-s9jSlG2xSayzJ_b7J1t",
				isNightmodeOn: "Cd5iGkxl9fzuGE1cWMHC4",
				isFirst: "q4WgOJAmvFRFKX_yrlG-1",
				commentSeparator: "_3H85Xyyv141qju7KQFQ_d5",
				commentContentWrapper: "_27uDfyCMhkucg8xWyoTLYp"
			}
		},
		"./src/reddit/components/OverviewChronoList/ListItem.m.less": function(e, t, s) {
			e.exports = {
				OverviewCommentPost: "_2mg6JuVCrcHWJkUQvZXFcZ",
				overviewCommentPost: "_2mg6JuVCrcHWJkUQvZXFcZ",
				ClassicPost: "OZOlqlxhdnIVuS5MQ5yMi",
				classicPost: "OZOlqlxhdnIVuS5MQ5yMi"
			}
		},
		"./src/reddit/components/OverviewChronoList/ListItem.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/ClassicPost/index.tsx"),
				a = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/react-redux/es/index.js")),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/constants/gold.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/components/CommentContainer/index.tsx"),
				u = s("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				b = s("./src/reddit/helpers/getClickInfo.ts"),
				h = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				x = s("./src/reddit/selectors/comments.ts"),
				g = s("./src/reddit/selectors/communityAwards.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/components/OverviewChronoComment/index.m.less"),
				y = s.n(v);
			const O = Object(a.b)(() => Object(i.c)({
				comment: x.n,
				isAwarded: (e, t) => {
					const s = Object(x.n)(e, t);
					return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
						const s = Object(g.a)(e, t);
						return s && s.coinPrice >= c.g
					})
				},
				isNightmodeOn: f.Q
			}), e => ({
				openPost: t => e(Object(m.K)(t))
			}));
			var E = Object(l.a)(O(e => {
					const {
						comment: t,
						commentId: s,
						first: n,
						isAwarded: r,
						isNightmodeOn: a,
						last: i,
						openPost: c,
						showModTools: l
					} = e;
					if (!t) return null;
					return o.a.createElement(p.a, {
						comment: t,
						onClick: (e, t) => {
							c({
								postOrComment: t,
								clickInfo: Object(b.a)(e),
								queryParams: {
									context: 3
								}
							})
						},
						style: {
							background: Object(h.e)(e)
						}
					}, o.a.createElement("div", {
						className: Object(d.a)(y.a.commentOuterWrapper, {
							[y.a.isLast]: i,
							[y.a.isAwarded]: r,
							[y.a.isNightmodeOn]: a
						})
					}, o.a.createElement("div", {
						className: Object(d.a)(y.a.commentWrapper, {
							[y.a.isFirst]: n
						})
					}, o.a.createElement("div", {
						className: y.a.commentSeparator
					}), t.parentId && o.a.createElement("div", {
						className: y.a.commentSeparator
					}), o.a.createElement("div", {
						className: y.a.commentContentWrapper
					}, o.a.createElement(u.a, {
						commentId: s,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: !0,
						showModTools: l,
						isExpanded: !0
					})))))
				})),
				w = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				C = s("./src/reddit/contexts/PageLayer/index.tsx"),
				_ = s("./src/reddit/helpers/isComment.ts"),
				j = s("./src/reddit/components/OverviewChronoList/ListItem.m.less"),
				k = s.n(j),
				S = s("./src/lib/lessComponent.tsx");

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var I = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const N = Object(C.t)({
					currentProfileName: C.h,
					isCommentsPage: C.w,
					isCommentPermalink: C.v,
					isProfilePostListing: C.H,
					pageLayer: e => e
				}),
				T = S.a.wrapped(w.a, "OverviewCommentPost", k.a),
				L = S.a.wrapped(r.default, "ClassicPost", k.a);
			t.a = N(e => {
				const {
					itemId: t,
					isFirstInCommentList: s,
					isLastInCommentList: n,
					allowModToolsUnderComments: r,
					height: a,
					width: i
				} = e, c = I(e, ["itemId", "isFirstInCommentList", "isLastInCommentList", "allowModToolsUnderComments", "height", "width"]);
				return Object(_.a)(t) ? s ? o.a.createElement(o.a.Fragment, null, o.a.createElement(T, P({}, c, {
					availableWidth: i,
					commentId: t
				})), o.a.createElement(E, {
					commentId: t,
					first: s,
					last: n,
					showModTools: r
				})) : o.a.createElement(E, {
					commentId: t,
					first: s,
					last: n,
					showModTools: r
				}) : o.a.createElement(L, P({}, c, {
					inSubredditOrProfile: !1
				}))
			})
		},
		"./src/reddit/components/OverviewCommentPost/index.m.less": function(e, t, s) {
			e.exports = {
				overviewCommentPost: "_32w108aFIBi3H0DKCU4OI7",
				banned: "_3P8_MTWuehQOXRUhWBpwB0",
				reported: "_1Z7-lWgZwHw4sBG3rO44v7",
				InternalLink: "_31VWB3vSkv19o3I7RVE710",
				internalLink: "_31VWB3vSkv19o3I7RVE710",
				Wrapper: "_2otRz3OtuWajw1RleFDJ5P",
				wrapper: "_2otRz3OtuWajw1RleFDJ5P",
				Row: "_1InmLYfaOm6m9MZ8wKxM-0",
				row: "_1InmLYfaOm6m9MZ8wKxM-0",
				CommentIcon: "y05plmPkDK7RiRh8b3b8-",
				commentIcon: "y05plmPkDK7RiRh8b3b8-",
				TitleContainer: "_2ng_YqEhC3QLYqZyRIQ9qB",
				titleContainer: "_2ng_YqEhC3QLYqZyRIQ9qB",
				PostTitleContainer: "_13Ww4V9LL9wHYik5hp8VM4",
				postTitleContainer: "_13Ww4V9LL9wHYik5hp8VM4",
				PostTitle: "_2b_IHdM91weRNGmXfrTYvn",
				postTitle: "_2b_IHdM91weRNGmXfrTYvn",
				postTitleOutboundLink: "_3heiUGSIAJO43_Ertq1e2F",
				postTitleTitle: "_3gWN_jC4sfo4uQ61ZRgOO",
				PostTopMeta: "_3yzuVD_JNtr4EBJ_OesIvh",
				postTopMeta: "_3yzuVD_JNtr4EBJ_OesIvh",
				postTopMetaMetaSeparator: "_2IhK-xvBLjMsX4HZ-T6j-W",
				MetaSeparator: "_3RjYJMG6TaMnSwb88daQ7W",
				metaSeparator: "_3RjYJMG6TaMnSwb88daQ7W"
			}
		},
		"./src/reddit/components/OverviewCommentPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/i18n/components.tsx"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/controls/InternalLink/index.tsx"),
				u = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				b = s("./src/reddit/selectors/comments.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/PostContainer/index.tsx"),
				f = s("./src/reddit/components/PostTitle/index.tsx"),
				v = s("./src/reddit/components/PostTopMeta/index.tsx"),
				y = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				O = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				E = s.n(O),
				w = s("./src/reddit/components/OverviewCommentPost/index.m.less"),
				C = s.n(w);
			const _ = l.a.wrapped(p.a, "InternalLink", C.a),
				j = l.a.div("Wrapper", C.a),
				k = l.a.div("Row", C.a),
				S = l.a.wrapped(y.a, "CommentIcon", C.a),
				P = l.a.div("TitleContainer", C.a),
				I = l.a.div("PostTitleContainer", C.a),
				N = l.a.wrapped(f.c, "PostTitle", C.a),
				T = l.a.wrapped(v.d, "PostTopMeta", C.a),
				L = l.a.wrapped(v.a, "MetaSeparator", C.a),
				M = Object(r.b)(() => Object(i.c)({
					comment: b.n,
					language: x.O,
					post: h.N,
					subredditOrProfile: h.Z
				})),
				R = e => {
					const {
						language: t,
						post: s,
						subredditOrProfile: r
					} = e;
					if (r) return o.a.createElement(n.Fragment, null, o.a.createElement(L, null), o.a.createElement(T, {
						language: t,
						metaSeparatorClassName: C.a.postTopMetaMetaSeparator,
						post: s,
						showSub: !0,
						showTimestamp: !1,
						subredditOrProfile: r
					}))
				},
				A = e => {
					const {
						comment: t,
						profileName: s
					} = e;
					if (!t) return null;
					const n = s || t.author;
					return o.a.createElement(_, {
						"data-click-id": "user",
						to: "/user/".concat(n, "/")
					}, n)
				};
			t.a = Object(d.a)(M(Object(m.c)(e => {
				const {
					className: t,
					eventFactory: s,
					onClickPost: n,
					post: r
				} = e;
				return o.a.createElement(g.a, {
					className: Object(c.a)(E.a.compactPostStyles, C.a.overviewCommentPost, {
						[C.a.banned]: !!e.post.bannedBy,
						[C.a.reported]: !e.post.bannedBy && !!e.post.numReports && e.post.numReports > 0
					}, t),
					post: r,
					onClick: n,
					eventFactory: s
				}, o.a.createElement(j, {
					style: {
						background: Object(u.e)(e)
					}
				}, o.a.createElement(k, null, o.a.createElement(S, null), o.a.createElement(P, null, A(e), o.a.createElement(a.c, null, " commented on "), o.a.createElement(I, null, o.a.createElement(N, {
					outboundLinkClassName: C.a.postTitleOutboundLink,
					post: r,
					size: f.b.Small,
					titleClassName: C.a.postTitleTitle
				})), R(e)))))
			})))
		},
		"./src/reddit/components/OverviewConversationsPost/Border/index.m.less": function(e, t, s) {
			e.exports = {
				border: "_1lhlKOukuHHzZKIlnXcHmQ",
				isFirst: "_2o6nV_ET0Jis6_EzEHx9K3",
				isLast: "_1C2mkyHj-MAuIndy8vJIU5"
			}
		},
		"./src/reddit/components/OverviewConversationsPost/Border/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/OverviewConversationsPost/Border/index.m.less"),
				i = s.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var d = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			t.a = e => {
				var {
					isFirst: t,
					isLast: s
				} = e, n = d(e, ["isFirst", "isLast"]);
				return o.a.createElement("div", c({
					className: Object(r.a)(i.a.border, {
						[i.a.isFirst]: t,
						[i.a.isLast]: s
					})
				}, n))
			}
		},
		"./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less": function(e, t, s) {
			e.exports = {
				ProfileOwnerCommentWrapper: "_3CecFEZvC8MFSvLsfuVYUs",
				profileOwnerCommentWrapper: "_3CecFEZvC8MFSvLsfuVYUs",
				CommentContentWrapper: "hpOP1hjcTLrw1L2rfRtMP",
				commentContentWrapper: "hpOP1hjcTLrw1L2rfRtMP",
				Wrapper: "_2OpuabFjFVU3UZ4jcP58gJ",
				wrapper: "_2OpuabFjFVU3UZ4jcP58gJ",
				isFirst: "_3bYCCkSa6xxUYDEPgIa7w5",
				isLast: "_3TNQpNlZH2M4X50sedpaIG",
				isAwarded: "_2UgLKr67bDuCg6zs7UOCoN",
				isNightmodeOn: "_3ZqQTMfjWU3NV-dAfa8O9E",
				CommentSeparator: "_1mvcEtI04YyIVKsT-vUkiN",
				commentSeparator: "_1mvcEtI04YyIVKsT-vUkiN"
			}
		},
		"./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/times.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/constants/gold.ts"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/lessComponent.tsx"),
				p = s("./src/reddit/components/CommentContainer/index.tsx"),
				u = s("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				b = s("./src/reddit/actions/post.ts"),
				h = s("./src/reddit/helpers/getClickInfo.ts"),
				x = s("./src/reddit/selectors/comments.ts"),
				g = s("./src/reddit/selectors/communityAwards.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less"),
				y = s.n(v);
			const O = m.a.div("ProfileOwnerCommentWrapper", y.a),
				E = m.a.div("CommentContentWrapper", y.a),
				w = m.a.div("Wrapper", y.a),
				C = m.a.div("CommentSeparator", y.a),
				_ = Object(i.b)(() => Object(c.c)({
					comment: (e, t) => Object(x.n)(e, t),
					isAwarded: (e, t) => {
						const s = Object(x.n)(e, t);
						return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
							const s = Object(g.a)(e, t);
							return s && s.coinPrice >= d.g
						})
					},
					isNightmodeOn: f.Q
				}), e => ({
					openPost: t => e(Object(b.K)(t))
				}));
			class j extends a.a.Component {
				render() {
					const {
						comment: e,
						commentId: t,
						depth: s,
						openPost: n,
						isAwarded: r,
						isFirst: i,
						isLast: c,
						isNightmodeOn: d,
						profileName: m,
						showModTools: u
					} = this.props, b = m === e.author ? k : S;
					return a.a.createElement(p.a, {
						comment: e,
						onClick: (e, t) => {
							n({
								postOrComment: t,
								clickInfo: Object(h.a)(e),
								queryParams: {
									context: 3
								}
							}), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
						}
					}, a.a.createElement(w, {
						className: Object(l.a)({
							[y.a.isFirst]: i,
							[y.a.isLast]: c,
							[y.a.isAwarded]: r,
							[y.a.isNightmodeOn]: d
						})
					}, o()(s + 1, e => a.a.createElement(C, {
						key: e
					})), a.a.createElement(E, null, b(t, m, u))))
				}
			}
			const k = (e, t, s) => a.a.createElement(O, null, S(e, t, s, !0, !0)),
				S = function(e, t, s) {
					let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
						o = arguments.length > 4 ? arguments[4] : void 0;
					return a.a.createElement(u.a, {
						commentId: e,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: n,
						showModTools: s,
						isExpanded: !!o
					})
				};
			t.a = _(j)
		},
		"./src/reddit/components/Popup/Button.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/Popup/index.m.less"),
				a = s.n(r);

			function i(e) {
				return o.a.createElement("button", {
					className: a.a.popupButton,
					onClick: e.onClick
				}, e.children)
			}
		},
		"./src/reddit/components/Popup/index.m.less": function(e, t, s) {
			e.exports = {
				popup: "t5ViKDVyrrlzRbCpXvJu7",
				header: "preWelIDv3a0Fgtd5_QjN",
				title: "_3Xw5NRiOh-SAcOXIUMIm-l",
				closeButton: "_3oee1_5V2jOvP4BaO2LCQu",
				popupButton: "_3nddrgCBXpzDP5XYzrH3ZY"
			}
		},
		"./src/reddit/components/Popup/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/uuid/v4.js"),
				a = s.n(r);
			var i = s("./src/reddit/components/Popup/index.m.less"),
				c = s.n(i);

			function d(e) {
				const {
					id: t = a()(),
					onClose: s,
					onClickOutside: r,
					title: i,
					children: d
				} = e;
				return function(e, t) {
					const s = Object(n.useCallback)(s => {
						if (!t) return;
						const n = document.getElementById(e);
						n && (n.contains(s.target) || t(s))
					}, [e, t]);
					Object(n.useEffect)(() => {
						if (t) return document.body.addEventListener("click", s), () => {
							document.body.removeEventListener("click", s)
						}
					}, [t, s])
				}(t, r), o.a.createElement("div", {
					id: t,
					"aria-modal": !0,
					className: c.a.popup,
					role: "dialog",
					tabIndex: -1
				}, o.a.createElement("h3", {
					className: c.a.header
				}, o.a.createElement("span", {
					className: c.a.title
				}, i), o.a.createElement("button", {
					className: c.a.closeButton,
					onClick: s
				}, "✕")), d)
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			t.a = Object(a.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: n,
					onClick: a,
					post: c,
					redditStyle: p,
					theme: u
				} = e, b = m(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return o.a.createElement("div", l({
					className: Object(r.a)(d.a.backgroundWrapper, s),
					style: Object(i.c)(n, e),
					onClick: a
				}, b), t)
			})
		},
		"./src/reddit/components/PostBadges/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3vju76MdF2FaGmELBeiJ_r",
				adminIcon: "_1cje4rrmwL0yZgCOlGyBJ-",
				approveIcon: "_1knR9NIIXdSFC9IeFN11JL",
				automoderator: "_2etEb_0bRB9axAqF3uX28S",
				lockIcon: "_3wTfn3Meg1rXJ-qd2jUWMt",
				modIcon: "_SMl46gACTEszA_4A0Qfs",
				removeIcon: "_3yuF1RnBRJL4OS_STsoXcC",
				reportIcon: "_3guZWUAROueft8TPPGDZ-R",
				spamIcon: "_2BWw37nLL0rX6n7xcXciyD",
				stickyIcon: "NI8uZ-19oHf9gPO8jOvFu",
				isRemoved: "_27iLVqax1FuPWTymkSkKAq",
				archivedIcon: "_2WSiH2JwZq4bXuvrDn-cgU",
				addRemovalReason: "COGitU-ItwLZG_fP5rsdE",
				removalReason: "_16Ih3bzeELRlI6AWeW-nFy"
			}
		},
		"./src/reddit/components/PostBadges/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/i18n/components.tsx"),
				i = s("./src/reddit/i18n/utils.ts"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/app/strings/index.ts"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/constants/index.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				h = s("./src/reddit/constants/posts.ts"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/helpers/isRemoved.ts"),
				f = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				v = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				y = s("./src/reddit/models/Post/index.ts"),
				O = s("./src/reddit/selectors/posts.ts"),
				E = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				w = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				C = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				j = s("./src/reddit/icons/fonts/Report/index.tsx"),
				k = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				S = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				P = s("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				I = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				N = s("./src/reddit/components/PostBadges/index.m.less"),
				T = s.n(N);

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const M = e => o.a.createElement("span", L({
					className: T.a.removalReason
				}, e), e.children),
				R = Object(d.d)("posts.archived"),
				A = Object(d.d)("modTools.commentsLocked"),
				B = Object(d.d)("modTools.moderatorOf"),
				F = Object(d.d)("modTools.stickiedPost"),
				D = Object(d.d)("modTools.pinnedPost"),
				H = (e, t, s) => {
					const n = "PostBadges--".concat(e, "--").concat(t);
					return s ? "".concat(n, "--").concat(s) : n
				},
				W = Object(x.t)({
					isProfilePostListing: x.H,
					isSubreddit: x.J,
					pageLayer: e => e
				}),
				U = Object(c.c)({
					isPinned: (e, t) => {
						let {
							post: s
						} = t;
						return Object(O.t)(e, {
							postId: s.id
						})
					},
					modModeEnabled: x.O
				}),
				V = Object(r.b)(U, (e, t) => ({
					onHideTooltip: () => e(Object(p.i)()),
					onOpenRemovalReasonModal: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(s => e(s.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(p.f)({
						tooltipId: t
					}))
				}));
			t.a = W(V(e => {
				let {
					className: t,
					displayText: s,
					isSubreddit: r,
					inSubredditOrProfile: c,
					isCompactPinnedPost: d,
					isPinned: p,
					isProfilePostListing: x,
					language: O,
					modModeEnabled: N,
					onHideTooltip: W,
					onOpenRemovalReasonModal: U,
					onShowTooltip: V,
					post: G,
					tooltipType: z
				} = e;
				const K = {
						caretOnTop: !1
					},
					J = G.isRemoved && !G.modRemovalReason && !G.modNote && G.belongsTo.type === h.a.SUBREDDIT,
					q = H("Approve", G.id, z),
					Q = H("Archived", G.id, z),
					Z = H("Automod", G.id, z),
					X = H("Lock", G.id, z),
					Y = H("Mod", G.id, z),
					$ = H("Remove", G.id, z),
					ee = H("Report", G.id, z),
					te = H("Spam", G.id, z),
					se = H("Sticky", G.id, z),
					ne = H("Pinned", G.id, z);
				return o.a.createElement("div", {
					className: t
				}, c && s && G.distinguishType === m.C.MODERATOR && o.a.createElement(n.Fragment, null, o.a.createElement(I.a, {
					className: T.a.modIcon,
					desc: B(O, {
						displayText: s
					}),
					id: Y,
					onMouseEnter: V(Y),
					onMouseLeave: W
				}), o.a.createElement(u.c, L({
					tooltipId: Y,
					text: B(O, {
						displayText: s
					})
				}, K))), G.isArchived && o.a.createElement(n.Fragment, null, o.a.createElement(w.a, {
					className: T.a.archivedIcon,
					desc: R(O),
					id: Q,
					onMouseEnter: V(Q),
					onMouseLeave: W
				}), o.a.createElement(u.c, L({
					tooltipId: Q,
					text: R(O)
				}, K))), G.isLocked && o.a.createElement(n.Fragment, null, o.a.createElement(C.a, {
					className: T.a.lockIcon,
					desc: A(O),
					id: X,
					onMouseEnter: V(X),
					onMouseLeave: W
				}), o.a.createElement(u.c, L({
					tooltipId: X,
					text: A(O)
				}, K))), r && Object(y.k)(G) && !d && o.a.createElement(n.Fragment, null, o.a.createElement(S.a, {
					className: T.a.stickyIcon,
					desc: F(O),
					id: se,
					onMouseEnter: V(se),
					onMouseLeave: W
				}), o.a.createElement(u.c, L({
					tooltipId: se,
					text: F(O)
				}, K))), x && p && o.a.createElement(n.Fragment, null, o.a.createElement(S.a, {
					className: T.a.stickyIcon,
					desc: D(O),
					id: ne,
					onMouseEnter: V(ne),
					onMouseLeave: W
				}), o.a.createElement(u.c, L({
					tooltipId: ne,
					text: D(O)
				}, K))), (G.isApproved || G.approvedBy) && o.a.createElement(n.Fragment, null, o.a.createElement(E.a, {
					className: T.a.approveIcon,
					desc: Object(f.a)(O, G),
					id: q,
					onMouseEnter: V(q),
					onMouseLeave: W
				}), o.a.createElement(u.c, L({
					tooltipId: q,
					text: Object(f.a)(O, G)
				}, K))), Object(g.a)(G) && o.a.createElement(n.Fragment, null, o.a.createElement(_.a, {
					className: T.a.removeIcon,
					desc: Object(f.c)(O, G),
					id: $,
					onMouseEnter: V($),
					onMouseLeave: W
				}), J && o.a.createElement(b.a, {
					className: T.a.addRemovalReason,
					onClick: U,
					text: Object(i.c)("Add a removal reason")
				}), (G.modRemovalReason || G.modNote) && o.a.createElement(M, {
					onMouseEnter: V($),
					onMouseLeave: W
				}, o.a.createElement(a.c, null, "Removal reason")), o.a.createElement(u.c, L({
					tooltipId: $,
					text: Object(f.c)(O, G)
				}, K))), G.bannedBy && G.isSpam && o.a.createElement(n.Fragment, null, o.a.createElement(k.a, {
					className: T.a.spamIcon,
					desc: Object(f.e)(O, G),
					id: te,
					onMouseEnter: V(te),
					onMouseLeave: W
				}), o.a.createElement(u.c, L({
					tooltipId: te,
					text: Object(f.e)(O, G)
				}, K))), ("AutoModerator" === G.approvedBy || "AutoModerator" === G.bannedBy) && o.a.createElement(n.Fragment, null, o.a.createElement(P.a, {
					className: Object(l.a)(T.a.automoderator, !!G.bannedBy && T.a.isRemoved),
					desc: Object(f.b)(O),
					id: Z,
					onMouseEnter: V(Z),
					onMouseLeave: W
				}), o.a.createElement(u.c, L({
					tooltipId: Z,
					text: Object(f.b)(O)
				}, K))), Object(v.a)(G) && !N && o.a.createElement(n.Fragment, null, o.a.createElement(j.a, {
					className: T.a.reportIcon,
					desc: Object(f.d)(O, G.numReports),
					id: ee,
					onMouseEnter: V(ee),
					onMouseLeave: W
				}), o.a.createElement(u.c, L({
					tooltipId: ee,
					text: Object(f.d)(O, G.numReports)
				}, K))))
			}))
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, s) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/AdViewability/index.tsx"),
				i = s("./src/reddit/components/GildModal/getGildModalId.ts"),
				c = s("./src/reddit/components/GildModal/Loader.tsx"),
				d = s("./src/reddit/connectors/PostViewable/index.ts"),
				l = s("./src/reddit/models/Media/index.ts"),
				m = s("./src/reddit/selectors/gild.ts"),
				p = s("./src/reddit/selectors/video.ts"),
				u = s("./src/lib/classNames/index.ts"),
				b = s("./src/higherOrderComponents/withClickTracking.tsx"),
				h = s("./src/reddit/components/PostContainer/index.m.less"),
				x = s.n(h);
			const g = Object(r.c)({
					clickTrackingId: (e, t) => {
						let {
							post: s
						} = t;
						return s.id
					},
					buffering: (e, t) => {
						let {
							post: s
						} = t;
						return Object(p.a)(e, {
							postId: s.id
						})
					},
					gildModalIsOpen: (e, t) => {
						let {
							isOverlay: s,
							post: n
						} = t;
						const o = Object(i.b)(n.postId, s);
						return Object(m.c)(e, o)
					},
					playing: (e, t) => {
						let {
							post: s
						} = t;
						return Object(p.e)(e, {
							postId: s.id
						})
					},
					continuousViewingStartedAt: (e, t) => {
						let {
							post: s
						} = t;
						return Object(p.c)(e, {
							postId: s.id
						})
					}
				}),
				f = Object(d.a)(g),
				v = e => {
					const t = Object(b.d)(e.target, e.currentTarget),
						s = Object(b.b)(e.target, e.currentTarget, b.a.buttons);
					return "subreddit" !== t && s
				};
			class y extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						pixelPostHasEnteredView: e,
						pixelPostHasExitedView: t,
						afterClickTracking: s,
						buffering: n,
						children: r,
						className: i,
						continuousViewingStartedAt: d,
						gildModalIsOpen: m,
						makePostContainerId: p,
						playing: b,
						post: h,
						onClick: g,
						onPostContentClick: f,
						onPostViewable: y,
						style: O,
						ref: E
					} = this.props, w = o.a.createElement("div", {
						style: O,
						ref: E,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: e => {
							!this.cancelClick && e.button < 2 && (s(() => g && g(e, h))(e), f && v(e) && f(e, h))
						},
						className: Object(u.a)(x.a.WrappedPost, i, "Post ".concat(h.id), {
							promotedlink: h.isSponsored
						}),
						id: p ? p(h.id) : h.id,
						tabIndex: -1
					}, r, m && o.a.createElement(c.a, null)), C = !!h.media && h.media.type === l.n.VIDEO;
					return h.isSponsored || C ? o.a.createElement(a.a, {
						onViewable: e => y(h, e),
						pixelPostHasEnteredView: t => e(h, t),
						pixelPostHasExitedView: e => t(h, e),
						trackVideoMetrics: C && !n && b,
						continuousViewingStartedAt: d
					}, w) : w
				}
			}
			t.a = f(Object(b.c)(y))
		},
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, s) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/components/Translated/index.tsx"),
				m = s("./src/reddit/helpers/trackers/postCollection.ts"),
				p = s("./src/reddit/components/PostFollow/index.m.less"),
				u = s.n(p);
			class b extends o.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: s,
								isFollowed: n
							},
							sendEvent: o
						} = this.props, r = !!n;
						o(e ? Object(m.o)({
							postId: s,
							isFollowed: r
						}) : Object(m.g)({
							postId: s,
							isFollowed: r
						})), t && t()
					}, this.onMouseEnter = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !1
						})
					}, this.state = {
						isHovered: !1
					}
				}
				render() {
					const {
						className: e,
						isEventFollow: t,
						post: s
					} = this.props, n = this.state.isHovered, r = s.isFollowed;
					let a = r ? "collection.follow.followed" : "collection.follow.follow";
					return r && n && (a = "collection.follow.unfollow"), o.a.createElement("button", {
						className: Object(i.a)(u.a.collectionFollow, {
							[u.a.isFollowed]: !!s.isFollowed,
							[u.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, o.a.createElement(l.a, {
						msgId: a
					}))
				}
			}
			const h = Object(r.b)(() => Object(a.c)({}), (e, t) => {
				let {
					post: s
				} = t;
				return {
					onFollow: () => e(Object(c.C)(s.isSponsored ? s.postId : s.id))
				}
			})(Object(d.c)(b))
		},
		"./src/reddit/components/PostLeftRail/index.m.less": function(e, t, s) {
			e.exports = {
				postLeftRail: "_23h0-EcaBUorIHC-JZyh6J"
			}
		},
		"./src/reddit/components/PostLeftRail/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			})), s.d(t, "c", (function() {
				return x
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/reddit/constants/colors.ts"),
				l = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = s("./src/reddit/selectors/experiments/adSidebar.ts"),
				p = s("./src/reddit/components/PostLeftRail/index.m.less"),
				u = s.n(p);
			const b = 40,
				h = Object(r.b)(() => Object(a.c)({
					isInAdLeftSidebarExperiment: m.a
				})),
				x = e => e.isSponsored && !e.isInAdLeftSidebarExperiment ? Object(l.a)(e).button : e.isRemoved ? d.a.removed : e.isReported ? d.a.reported : "transparent",
				g = Object(c.a)(e => {
					const t = x(e),
						s = {
							width: "".concat(b, "px"),
							borderLeft: "4px solid ".concat(t)
						};
					return o.a.createElement("div", {
						className: Object(i.a)(u.a.postLeftRail, e.className),
						style: e.withoutComputedStyles ? {} : s
					}, e.children)
				});
			t.b = h(g)
		},
		"./src/reddit/components/PostList/LoadMore.m.less": function(e, t, s) {
			e.exports = {
				Component: "_3tBFh6Ty3gSaxW4gcm6hZ_",
				component: "_3tBFh6Ty3gSaxW4gcm6hZ_"
			}
		},
		"./src/reddit/components/PostList/LoadMore.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/PostList/Placeholder.tsx"),
				r = s("./src/reddit/components/PostList/LoadMore.m.less"),
				a = s.n(r);
			t.a = n.a.wrapped(o.a, "Component", a.a)
		},
		"./src/reddit/components/PostList/Placeholder.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/constant.js"),
				o = s.n(n),
				r = s("./node_modules/lodash/times.js"),
				a = s.n(r),
				i = s("./node_modules/react/index.js"),
				c = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/fastdom/index.ts"),
				p = s("./src/lib/intersectionObserver/index.ts"),
				u = s("./src/reddit/constants/postLayout.ts"),
				b = s("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				h = s("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				x = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./src/lib/classNames/index.ts")),
				g = s("./src/reddit/components/PostLeftRail/index.tsx"),
				f = s("./src/reddit/components/SubredditIcon/index.tsx"),
				v = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				y = s("./src/reddit/contexts/PageLayer/index.tsx"),
				O = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				E = s("./src/reddit/models/Vote/index.ts"),
				w = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				C = s.n(w),
				_ = s("./src/reddit/components/LargePost/placeholder.m.less"),
				j = s.n(_);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var S = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const P = Object(y.t)(),
				I = Object(l.c)({
					isFakeSubreddit: y.x
				}),
				N = Object(d.b)(I),
				T = e => {
					const t = {
						interactive: !1,
						voteState: E.a.notVoted
					};
					return c.a.createElement("div", {
						className: j.a.emptyVerticalVotes
					}, c.a.createElement(v.d, k({
						key: "u"
					}, t)), c.a.createElement("div", {
						className: j.a.emptyScore,
						key: "s"
					}), c.a.createElement(v.c, k({
						key: "d"
					}, t)))
				},
				L = e => {
					var {
						isLoading: t
					} = e, s = S(e, ["isLoading"]);
					return c.a.createElement(f.b, k({
						className: Object(O.a)({
							isLoading: t
						})
					}, s))
				};
			var M = P(N(e => {
				var {
					className: t,
					dispatch: s,
					pageLayer: n
				} = e, o = S(e, ["className", "dispatch", "pageLayer"]);
				return c.a.createElement("div", {
					className: Object(x.a)(C.a.baseLargeAndMediumPostStyles, t)
				}, c.a.createElement(g.b, {
					key: "a"
				}, c.a.createElement(T, o)), c.a.createElement("div", {
					className: j.a.content,
					key: "b"
				}, c.a.createElement("div", {
					className: j.a.topLine,
					key: "ba"
				}, o.isFakeSubreddit && c.a.createElement(L, {
					key: "baa",
					isLoading: !1
				}), c.a.createElement("div", {
					key: "bab",
					className: Object(x.a)(j.a.topMetaOne, Object(O.b)(o))
				}), c.a.createElement("div", {
					key: "bac",
					className: Object(x.a)(j.a.topMetaTwo, Object(O.b)(o))
				})), c.a.createElement("div", {
					key: "bb",
					className: Object(x.a)(j.a.title, Object(O.b)(o))
				})), c.a.createElement("div", {
					key: "c",
					className: Object(x.a)(j.a.media, Object(O.a)(o))
				}), c.a.createElement("div", {
					className: j.a.content,
					key: "d"
				}, c.a.createElement("div", {
					className: j.a.flatlist
				}, c.a.createElement("div", {
					className: Object(x.a)(j.a.flatlistItemOne, Object(O.b)(o))
				}), c.a.createElement("div", {
					className: Object(x.a)(j.a.flatListItemTwo, Object(O.b)(o))
				}))))
			}));
			const R = {
				[u.g.Large]: [M, 2],
				[u.g.Classic]: [b.b, 10],
				[u.g.Compact]: [h.a, 30]
			};

			function A(e) {
				return R[e]
			}
			const B = .1,
				F = Object(l.c)({
					loadingPostComponentForLayout: () => A
				}),
				D = Object(d.b)(F);
			class H extends c.a.Component {
				constructor() {
					super(...arguments), this.mounted = !1, this.state = {
						visible: !1
					}, this.setWrapperRef = e => {
						e !== this.wrapperRef && (this.wrapperRef && p.b(this.wrapperRef), e && p.a(e, this.updateVisibleState)), this.wrapperRef = e
					}, this.updateVisibleState = e => {
						const t = e.intersectionRatio >= B;
						m.a.write(() => {
							this.mounted && this.setState(e => e.visible !== t ? {
								visible: t
							} : null)
						})
					}
				}
				componentDidMount() {
					document.documentElement.scrollTop = document.body.scrollTop = 0, this.mounted = !0
				}
				componentWillUnmount() {
					this.mounted = !1, this.wrapperRef && p.b(this.wrapperRef)
				}
				render() {
					const {
						className: e,
						countOverride: t,
						isLoading: s,
						layout: n,
						loadingPostComponentForLayout: r
					} = this.props, {
						visible: i
					} = this.state, [d, l] = r(n), m = t || l, p = o()(c.a.createElement(d, {
						isLoading: s && i
					})), u = a()(m, p);
					return c.a.createElement("div", {
						className: e,
						ref: this.setWrapperRef
					}, c.a.Children.toArray(u))
				}
			}
			t.a = D(H)
		},
		"./src/reddit/components/PostList/SomethingWrong.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/reddit/connectors/connectToLanguage.ts"),
				i = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/helpers/describeApiError/index.ts"),
				d = s("./src/reddit/components/PostList/index.m.less"),
				l = s.n(d);
			t.a = Object(a.a)(e => {
				const {
					language: t,
					onTryAgain: s,
					apiError: o
				} = e;
				let a = n.fbt._("Something went wrong while loading.", null, {
					hk: "1ijaef"
				});
				return o && (a = Object(c.a)({
					apiError: o,
					language: t,
					isLoggedOut: !1
				})), r.a.createElement("div", {
					className: l.a.somethingWrong
				}, r.a.createElement("div", {
					className: l.a.somethingWrongText
				}, a), s && r.a.createElement(i.f, {
					onClick: s
				}, n.fbt._("Try again", null, {
					hk: "3JPIhw"
				})))
			})
		},
		"./src/reddit/components/PostList/index.m.less": function(e, t, s) {
			e.exports = {
				placeholder: "FohHGMokxXLkon1aacMoi",
				seeMoreButton: "_1Uj2L1UhJuirkaXINcf9S8",
				seeMorePostsText: "_2DB_2VI3a-y6nk57R2aWVo",
				somethingWrong: "zfoxmi0VvZvMZu1rHVbMX",
				somethingWrongText: "Ii7DEkcMDxQHElTHeeaci",
				postList: "rpBJOHq2PR60pnwJlUyP0",
				truncatedPostList: "QBfRw7Rj8UkxybFpX-USO",
				SeeMore: "_1yJOfuD_qgqaaG8ZIFbQVc",
				seeMore: "_1yJOfuD_qgqaaG8ZIFbQVc",
				ArrowRight: "wakXAw7uCIqmSRV84RKMW",
				arrowRight: "wakXAw7uCIqmSRV84RKMW"
			}
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/CrosspostBox/index.tsx"),
				a = s("./src/reddit/components/Media/index.tsx");
			t.a = e => {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? o.a.createElement(r.a, {
					postId: t.crosspostRootId,
					mediaProps: Object.assign({}, e, {
						crosspost: t,
						primaryContent: !1
					})
				}) : o.a.createElement(a.a, Object.assign({}, e, {
					primaryContent: !!e.showFull
				}))
			}
		},
		"./src/reddit/components/PostMeta/index.m.less": function(e, t, s) {
			e.exports = {
				donationAmount: "_1x9gNS8wlrugqgwofOEcGq",
				metaContainer: "Ywkt6EDfNWINeTr9lP29H",
				postTopMeta: "iaAYGvTNtknkTxuHArCzL",
				subredditName: "_1L0pdcPf58t25Jy6ljHIKR"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/AwardBadges/index.tsx"),
				a = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				i = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = s("./src/reddit/components/PostBadges/index.tsx"),
				l = s("./src/reddit/components/PostTopMeta/index.tsx"),
				m = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				p = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				b = s("./src/reddit/constants/posts.ts"),
				h = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				x = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/models/Subreddit/index.ts"),
				f = s("./src/reddit/components/PostMeta/index.m.less"),
				v = s.n(f);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: n,
					isCurrentUserProfilePost: f,
					isOverlay: y,
					isTopicPage: O,
					language: E,
					post: w,
					shouldShowSubscribeButton: C,
					subredditOrProfile: _,
					tooltipType: j
				} = e, k = !!O;
				return o.a.createElement("div", {
					className: v.a.metaContainer
				}, !n && !w.isSponsored && _ && o.a.createElement(i.a, {
					postId: w.id,
					subredditName: _.name
				}, o.a.createElement(p.a, {
					className: v.a.subredditName,
					"data-click-id": "subreddit",
					to: _.url
				}, _.displayText)), _ && _.isQuarantined && o.a.createElement(m.a, null), !n && !w.isSponsored && _ && C && !f && o.a.createElement(u.a, {
					getEventFactory: e => Object(x.f)(w.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: _.name,
						type: Object(g.e)(_) ? b.a.PROFILE : b.a.SUBREDDIT
					},
					postId: w.id,
					small: !0
				}), !n && !w.isSponsored && o.a.createElement(h.b, null), !n && !w.isSponsored && o.a.createElement(c.h, {
					type: w.belongsTo.type,
					id: w.belongsTo.id
				}), o.a.createElement(l.d, {
					className: v.a.postTopMeta,
					flairStyleTemplate: t,
					language: E,
					post: w,
					tooltipType: j
				}), o.a.createElement(d.a, {
					displayText: _ ? _.displayText : null,
					inSubredditOrProfile: !!n,
					language: E,
					post: w,
					tooltipType: j
				}), _ && o.a.createElement(a.a, {
					className: v.a.donationAmount,
					contentId: w.id,
					subredditId: _.id
				}), !k && o.a.createElement(r.a, {
					hideCta: s,
					isOverlay: y,
					thing: w,
					tooltipType: j
				}))
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less": function(e, t, s) {
			e.exports = {
				ListContainer: "VHCAEHBEuD8bln8MDFl35",
				listContainer: "VHCAEHBEuD8bln8MDFl35",
				Icon: "_3WbGqnEpw_ds1P508Qawma",
				icon: "_3WbGqnEpw_ds1P508Qawma",
				DropdownRow: "x_9o8pHUgKrlsT51QhLnG",
				dropdownRow: "x_9o8pHUgKrlsT51QhLnG",
				CheckboxMenuItem: "_9csa2XobkeFZUX8Fc_FNY",
				checkboxMenuItem: "_9csa2XobkeFZUX8Fc_FNY"
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			})), s.d(t, "d", (function() {
				return h
			})), s.d(t, "f", (function() {
				return x
			})), s.d(t, "g", (function() {
				return g
			})), s.d(t, "h", (function() {
				return f
			})), s.d(t, "i", (function() {
				return v
			})), s.d(t, "b", (function() {
				return y
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "e", (function() {
				return E
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				r = s("./src/reddit/controls/Dropdown/Row.tsx"),
				a = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				i = s("./src/reddit/icons/fonts/Envelope/index.tsx"),
				c = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				d = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				l = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				m = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				p = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				u = s.n(p);
			const b = n.a.wrapped(a.a, "Icon", u.a),
				h = n.a.wrapped(i.a, "Icon", u.a),
				x = n.a.wrapped(c.a, "Icon", u.a),
				g = n.a.wrapped(d.a, "Icon", u.a),
				f = n.a.wrapped(l.a, "Icon", u.a),
				v = n.a.wrapped(m.a, "Icon", u.a),
				y = n.a.wrapped(o.b, "CheckboxMenuItem", u.a),
				O = n.a.wrapped(r.b, "DropdownRow", u.a),
				E = n.a.div("ListContainer", u.a)
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/ModerationPrompts/Prompt.tsx"),
				a = s("./src/reddit/components/ModerationPrompts/Survey.tsx"),
				i = s("./src/reddit/components/PopupPortal/index.tsx"),
				c = s("./src/reddit/components/PostLeftRail/index.tsx"),
				d = s("./src/reddit/components/VerticalVotes/index.tsx"),
				l = s("./src/reddit/controls/Checkbox/index.tsx"),
				m = s("./src/reddit/helpers/isPost.ts"),
				p = s("./src/reddit/helpers/showReportIndicator/index.ts");
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: n = !1,
					isCheckboxSelected: u = !1,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: h,
					redditStyle: x,
					subreddit: g,
					isOverlay: f
				} = e, v = "upvote-button-".concat(t.id).concat(f ? "-overlay" : ""), {
					moderationPrompt: y
				} = t;
				return o.a.createElement(c.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(p.a)(t),
					isSponsored: !!Object(m.b)(t) && t.isSponsored,
					redditStyle: x
				}, n && o.a.createElement(l.a, {
					isCheckboxSelected: u,
					toggleCheckbox: b
				}), o.a.createElement(d.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: s,
					redditStyle: x,
					upvoteTooltipId: v
				}), y && o.a.createElement(i.b, {
					rightOf: v
				}, "survey" === y ? o.a.createElement(a.a, {
					post: t,
					subredditName: g.name,
					isOverlay: !!f
				}) : o.a.createElement(r.a, {
					post: t,
					subredditName: g.name,
					isOverlay: !!f
				})))
			}
		},
		"./src/reddit/components/ProfileCommentList/ListItem.m.less": function(e, t, s) {
			e.exports = {
				ClassicPost: "_3HddQjb-wsXsww_pAIh20y",
				classicPost: "_3HddQjb-wsXsww_pAIh20y",
				OverviewCommentPost: "_1e72wv5XA_Ww9f_Jld1feN",
				overviewCommentPost: "_1e72wv5XA_Ww9f_Jld1feN",
				backgroundMargin: "_2QIF_lwHCJCj3Dltr80ZqZ",
				isFirstInCommentList: "_2qBXIj3HBiFJkTkjCTD627",
				isLastInCommentList: "pd606OJnAc8wAE-N-Zm84"
			}
		},
		"./src/reddit/components/ProfileItemList/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/lodash/last.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-dom/index.js"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/opener/index.ts"),
				l = s("./src/reddit/constants/adEvents.ts"),
				m = s("./src/reddit/components/PostList/LoadMore.tsx"),
				p = s("./src/reddit/components/PostList/Placeholder.tsx"),
				u = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				b = s("./src/reddit/components/Scroller/Simple.tsx"),
				h = s("./src/reddit/constants/componentSizes.ts"),
				x = s("./src/reddit/helpers/getClickInfo.ts"),
				g = s("./src/reddit/helpers/isComment.ts"),
				f = s("./src/lib/LRUCache/index.ts"),
				v = s("./src/telemetry/index.ts"),
				y = s("./src/telemetry/models/Timer.ts"),
				O = s("./src/reddit/components/PostList/index.m.less"),
				E = s.n(O);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var C = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const _ = 500,
				j = new f.a(_),
				k = new f.a(_),
				S = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				P = (e, t, s, n, o, r) => {
					const a = s ? "last-".concat(n, "-").concat(o) : "",
						i = "entered-".concat(e, "-").concat(t, "-").concat(a);
					let c = j.get(i);
					return void 0 === c && (c = () => {
						s && r.onBottomViewed(n, o), r.trackOnPostEnteredViewport(e, t)
					}, j.set(i, c)), c
				},
				I = (e, t) => {
					const s = "click-".concat(e);
					let n = k.get(s);
					return void 0 === n && (n = (e, s) => {
						s.isSponsored && t.fireAdPixelsOfType(s, l.a.Click), s.isSponsored && s.source && s.source.outboundUrl ? Object(d.d)(s.source.outboundUrl, d.c.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(x.a)(e)
						})
					}, k.set(s, n)), n
				};
			class N extends a.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new f.a(_), this.updateScrollerRef = e => {
						const t = e && Object(i.findDOMNode)(e);
						this.scrollerRef = t instanceof Element ? t : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}
				}
				componentWillMount() {
					this.timerId && v.c.cancel(this.timerId), this.props.itemIds.length && (this.timerId = v.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = v.c.end(this.timerId);
						setTimeout(() => Object(v.b)(c.l.Redesign, {
							type: "mount",
							component: "overviewChronoList",
							duration: e
						}), 0)
					}
				}
				componentWillUpdate(e) {
					this.timerId && v.c.cancel(this.timerId), e.itemIds.length && (this.timerId = v.c.start()), (e.listingKey !== this.props.listingKey || e.itemIds.length !== this.props.itemIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (this.checkAndSendScreenview(), this.timerId && v.c.has(this.timerId)) {
						const e = v.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(v.b)(c.l.Redesign, {
							duration: e,
							type: "mount",
							component: "overviewChronoList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && v.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && o()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return v.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const n = v.c.end(e);
					setTimeout(() => s(t(n, y.TimerType.InApp)), 0)
				}
				showPlaceholder() {
					const {
						apiError: e,
						apiPending: t
					} = this.props;
					return Boolean(e) || !1 !== t
				}
				hasPosts() {
					return this.props.itemIds.length > 0
				}
				isLoadingMore() {
					const {
						loadMore: e,
						itemIds: t
					} = this.props;
					return Boolean(e && e.token) && t.length > 0
				}
				shouldComponentUpdate(e) {
					const t = this.props,
						{
							itemIds: s
						} = t,
						n = C(t, ["itemIds"]),
						{
							itemIds: o
						} = e,
						r = C(e, ["itemIds"]),
						a = Object.keys(n),
						i = Object.keys(r);
					return i.length !== a.length || !!i.some(e => n[e] !== r[e])
				}
				scrollChildForItem(e, t, s, n, o, r) {
					const {
						listingKey: i,
						listingName: c,
						postClickEvent: d
					} = this.props, l = s ? "last-index" : "", m = "post-".concat(r, "-").concat(e, "-").concat(t, "-").concat(l, "-").concat(c, "-").concat(i);
					let p;
					if (void 0 === (p = this.scrollChildCache.get(m))) {
						const {
							inSubredditOrProfile: t,
							itemIdToPostId: l
						} = this.props, u = l[e], b = "overview-chrono-list-item-[layout: ".concat(r, "]-[itemId: ").concat(e, "]"), h = P(u, r, s, i, c, this.props), x = {
							key: b,
							eventFactory: d,
							inSubredditOrProfile: t,
							isFirstInCommentList: n,
							isLastInCommentList: o,
							isOverlay: !1,
							itemId: e,
							last: s,
							layout: r,
							onClickPost: I(e, this.props),
							postId: u
						}, g = this.props.itemComponent;
						p = {
							estHeight: this.props.estimateItemHeight(e, r, n),
							id: e,
							isFocusable: !1,
							trackOnEnteredViewport: h,
							render: e => a.a.createElement(g, w({}, x, e))
						}, this.scrollChildCache.set(m, p)
					}
					return p
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return a.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						layout: s,
						onTryAgain: n
					} = this.props;
					return a.a.createElement("div", {
						className: E.a.placeholder
					}, a.a.createElement(p.a, {
						className: t,
						isLoading: !e,
						layout: s
					}), !!e && a.a.createElement(u.a, {
						apiError: e,
						onTryAgain: n
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						layout: s,
						onLoadMore: n
					} = this.props;
					return a.a.createElement("div", {
						className: E.a.placeholder
					}, a.a.createElement(m.a, {
						isLoading: !!t,
						layout: s,
						countOverride: S[s]
					}), !!e && a.a.createElement(u.a, {
						apiError: e,
						onTryAgain: n
					}))
				}
				renderList() {
					const {
						commentsById: e,
						layout: t,
						loadMore: s,
						itemIds: n,
						onLoadMore: o
					} = this.props, r = n.map((s, o, r) => {
						const a = o === n.length - 1,
							i = o && n[o - 1],
							c = !a && n[o + 1],
							d = !!Object(g.a)(s) && (!i || !Object(g.a)(i) || e[i].postId !== e[s].postId),
							l = !!Object(g.a)(s) && (!c || !Object(g.a)(c) || e[c].postId !== e[s].postId);
						return this.scrollChildForItem(s, o, a, d, l, t)
					});
					return a.a.createElement("div", null, a.a.createElement(b.b, {
						innerRef: this.updateScrollerRef,
						className: this.props.className,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						enableElementHiding: !0,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: s && s.token ? s.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: o,
						viewportTopPadding: h.f + h.s
					}, r), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			t.a = N
		},
		"./src/reddit/components/ProfileNavMenu/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2vH__bwuub4wzWRqcvhh3m",
				dropdown: "_3ulncTe6l8jRF_TM6HZZFk",
				mainLink: "_1JNzvBgvzSnX27gUBKqqmJ",
				isActive: "Zvl1svdkcyUlRhf5RHGKc",
				hideOnNarrow: "kp9WWKDE0A0U0u7XOOEQP",
				dropdownLink: "_3FXf9zUWKXtpapv4rBHh1L",
				showOnNarrow: "_2cJiWyA-Vif_pfBPZVATnV",
				overflowMenuButton: "_2glPIthm-tV6ZxKaznhb72"
			}
		},
		"./src/reddit/components/ProfileNavMenu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/app/strings/index.ts"),
				l = s("./src/config.ts"),
				m = s("./src/higherOrderComponents/asTooltip.tsx"),
				p = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/constants/index.ts"),
				b = s("./src/reddit/actions/tooltip.ts"),
				h = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				x = s("./src/reddit/constants/componentSizes.ts"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/controls/Dropdown/index.tsx"),
				v = s("./src/reddit/controls/InternalLink/index.tsx"),
				y = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				O = s("./src/reddit/models/Profile/index.ts"),
				E = s("./src/reddit/featureFlags/index.ts"),
				w = s("./src/reddit/selectors/tooltip.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/selectors/userPrefs.ts"),
				j = s("./src/reddit/i18n/utils.ts"),
				k = s("./src/reddit/components/ProfileNavMenu/index.m.less"),
				S = s.n(k);
			const P = Object(g.t)({
					routeName: g.T,
					privateListingType: g.i
				}),
				I = Object(c.c)({
					isDropdownMenuOpen: e => Object(w.a)(e) === T,
					isOwnProfile: (e, t) => Object(C.J)(e, t.profileName),
					language: C.O,
					isSnoovatar30Enabled: E.d.snoovatar30,
					isSubscriptionsPinned: _.b
				}),
				N = Object(m.a)(f.a),
				T = "profile-nav-menu-tooltip";
			t.a = P(Object(a.b)(I, e => ({
				toggleTooltip: t => e(Object(b.h)({
					tooltipId: t
				}))
			}))(e => {
				let {
					isDropdownMenuOpen: t,
					isOwnProfile: s,
					language: n,
					privateListingType: o,
					profileName: a,
					routeName: i,
					toggleTooltip: c,
					isSnoovatar30Enabled: d,
					isSubscriptionsPinned: l
				} = e;
				return r.a.createElement("div", {
					className: S.a.container
				}, r.a.createElement(h.a, {
					bladeOpen: !1,
					offsetLeft: l ? x.u : 0,
					render: () => r.a.createElement(r.a.Fragment, null, R({
						language: n,
						profileName: a,
						isOwnProfile: s,
						routeName: i,
						privateListingType: o,
						isSnoovatar30Enabled: d
					}).map(e => r.a.createElement(L, e)), r.a.createElement("button", {
						className: Object(p.a)(S.a.mainLink, S.a.overflowMenuButton),
						id: T,
						onClick: () => c(T)
					}, r.a.createElement(y.a, null)), r.a.createElement(N, {
						className: S.a.dropdown,
						isOpen: t,
						tooltipId: T
					}, A({
						language: n,
						profileName: a,
						isOwnProfile: s,
						routeName: i,
						privateListingType: o
					}).map(e => r.a.createElement(M, e))))
				}))
			}));
			const L = e => {
					let {
						hideOnNarrow: t,
						isActive: s,
						text: n,
						url: o,
						internal: a
					} = e;
					return a ? r.a.createElement(v.a, {
						className: Object(p.a)(S.a.mainLink, {
							[S.a.hideOnNarrow]: !!t,
							[S.a.isActive]: s
						}),
						to: o
					}, n) : r.a.createElement("a", {
						className: Object(p.a)(S.a.mainLink, {
							[S.a.hideOnNarrow]: !!t,
							[S.a.isActive]: s
						}),
						href: o
					}, n)
				},
				M = e => {
					let {
						isActive: t,
						internal: s,
						key: n,
						url: o,
						showOnNarrow: a,
						text: c
					} = e;
					return s ? r.a.createElement(i.a, {
						className: Object(p.a)(S.a.dropdownLink, {
							[S.a.isActive]: t,
							[S.a.showOnNarrow]: !!a
						}),
						to: o,
						key: n,
						rel: "nofollow",
						role: "listitem"
					}, c) : r.a.createElement("a", {
						className: Object(p.a)(S.a.dropdownLink, {
							[S.a.showOnNarrow]: !!a
						}),
						href: o,
						key: n,
						rel: "nofollow",
						role: "listitem",
						target: "_blank"
					}, c)
				},
				R = e => {
					let {
						language: t,
						profileName: s,
						isOwnProfile: o,
						routeName: r,
						privateListingType: a,
						isSnoovatar30Enabled: i
					} = e;
					const c = o ? [{
						internal: !0,
						isActive: r === u.Ab.PROFILE_PRIVATE && a === O.a.Saved,
						key: "profile.saved",
						text: Object(d.a)(t, "profile.sections.saved"),
						url: "/user/".concat(s, "/saved/")
					}, {
						hideOnNarrow: !0,
						internal: !0,
						isActive: r === u.Ab.PROFILE_PRIVATE && a === O.a.Hidden,
						key: "profile.hidden",
						text: Object(d.a)(t, "profile.sections.hidden"),
						url: "/user/".concat(s, "/hidden/")
					}, {
						hideOnNarrow: !0,
						internal: !0,
						isActive: r === u.Ab.PROFILE_PRIVATE && a === O.a.Upvoted,
						key: "profile.upvoted",
						text: Object(d.a)(t, "profile.sections.upvoted"),
						url: "/user/".concat(s, "/upvoted/")
					}, {
						hideOnNarrow: !0,
						internal: !0,
						isActive: r === u.Ab.PROFILE_PRIVATE && a === O.a.Downvoted,
						key: "profile.downvoted",
						text: Object(d.a)(t, "profile.sections.downvoted"),
						url: "/user/".concat(s, "/downvoted/")
					}] : [];
					o ? (c.push({
						hideOnNarrow: !0,
						internal: !0,
						isActive: r === u.Ab.PROFILE_PRIVATE && a === O.a.ReceivedGildings,
						key: "profile.receiverGildings",
						text: n.fbt._("Awards received", null, {
							hk: "10CLzb"
						}),
						url: "/user/".concat(s, "/gilded/")
					}), c.push({
						hideOnNarrow: !0,
						internal: !0,
						isActive: r === u.Ab.PROFILE_PRIVATE && a === O.a.GivenGildings,
						key: "profile.receiverGildings",
						text: n.fbt._("Awards given", null, {
							hk: "JzMR1"
						}),
						url: "/user/".concat(s, "/gilded/given/")
					})) : c.push({
						hideOnNarrow: !0,
						internal: !1,
						isActive: !1,
						key: "profile.gilded_legacy",
						text: n.fbt._("Awards received (legacy)", null, {
							hk: "3zOgw1"
						}),
						url: "".concat(l.a.oldRedditUrl, "/user/").concat(s, "/gilded/")
					});
					const m = i ? [{
						internal: !0,
						isActive: r === u.Ab.PROFILE_SNOOBUILDER,
						key: "profile.snoobuilder",
						text: Object(j.c)("Snoobuilder"),
						url: "/user/".concat(s, "/snoo/")
					}] : [];
					return [{
						internal: !0,
						isActive: r === u.Ab.PROFILE_OVERVIEW,
						key: "profile.overview",
						text: Object(d.a)(t, "profile.overview"),
						url: "/user/".concat(s, "/")
					}, {
						internal: !0,
						isActive: r === u.Ab.PROFILE_POSTS,
						key: "profile.posts",
						text: Object(d.a)(t, "profile.posts"),
						url: "/user/".concat(s, "/posts/")
					}, {
						internal: !0,
						isActive: r === u.Ab.PROFILE_COMMENTS,
						key: "profile.comments",
						text: Object(d.a)(t, "profile.comments"),
						url: "/user/".concat(s, "/comments/")
					}, ...m, ...c]
				},
				A = e => {
					let {
						language: t,
						profileName: s,
						isOwnProfile: o,
						routeName: r,
						privateListingType: a
					} = e;
					const i = o ? [{
						showOnNarrow: !0,
						internal: !0,
						isActive: r === u.Ab.PROFILE_PRIVATE && a === O.a.Hidden,
						key: "profile.hidden",
						text: Object(d.a)(t, "profile.sections.hidden"),
						url: "/user/".concat(s, "/hidden/")
					}, {
						showOnNarrow: !0,
						internal: !0,
						isActive: r === u.Ab.PROFILE_PRIVATE && a === O.a.Upvoted,
						key: "profile.upvoted",
						text: Object(d.a)(t, "profile.sections.upvoted"),
						url: "/user/".concat(s, "/upvoted/")
					}, {
						showOnNarrow: !0,
						internal: !0,
						isActive: r === u.Ab.PROFILE_PRIVATE && a === O.a.Downvoted,
						key: "profile.downvoted",
						text: Object(d.a)(t, "profile.sections.downvoted"),
						url: "/user/".concat(s, "/downvoted/")
					}] : [];
					return o ? (i.push({
						showOnNarrow: !0,
						internal: !0,
						isActive: r === u.Ab.PROFILE_PRIVATE && a === O.a.ReceivedGildings,
						key: "profile.receiverGildings",
						text: n.fbt._("Awards received", null, {
							hk: "10CLzb"
						}),
						url: "/user/".concat(s, "/gilded/")
					}), i.push({
						showOnNarrow: !0,
						internal: !0,
						isActive: r === u.Ab.PROFILE_PRIVATE && a === O.a.GivenGildings,
						key: "profile.receiverGildings",
						text: n.fbt._("Awards given", null, {
							hk: "JzMR1"
						}),
						url: "/user/".concat(s, "/gilded/given/")
					}), i) : [...i, {
						showOnNarrow: !0,
						internal: !1,
						isActive: !1,
						key: "profile.gilded_legacy",
						text: n.fbt._("Awards received (legacy)", null, {
							hk: "3zOgw1"
						}),
						url: "".concat(l.a.oldRedditUrl, "/user/").concat(s, "/gilded/")
					}]
				}
		},
		"./src/reddit/components/ProfileSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/reddit/components/SidebarContainer/index.tsx"),
				i = s("./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx"),
				c = s("./src/reddit/components/SidebarProfileMultireddits/index.tsx"),
				d = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				l = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				m = s("./src/reddit/components/SidebarTrophyCase/index.tsx"),
				p = s("./src/reddit/components/Widgets/ConnectedAccounts/index.tsx"),
				u = s("./src/reddit/constants/posts.ts");
			const b = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-ProfileIdCard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-ProfileIdCard").then(s.bind(null, "./src/reddit/components/ProfileIdCard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ProfileIdCard/index.tsx"
					}
				}),
				h = e => r.a.createElement(a.a, {
					className: e.className
				}, r.a.createElement(b, {
					profileName: e.profileName,
					isOverlay: e.isOverlay
				}), r.a.createElement(p.a, {
					subredditOrProfile: {
						name: e.profileName,
						type: u.a.PROFILE
					}
				}), r.a.createElement(i.a, {
					profileName: e.profileName
				}), r.a.createElement(c.a, {
					profileName: e.profileName
				}), r.a.createElement(d.a, null, r.a.createElement(m.a, {
					profileName: e.profileName
				})), r.a.createElement(l.a, {
					hideBackToTop: e.hideBackToTop
				}));
			h.defaultProps = {
				isOverlay: !1
			}, t.a = h
		},
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, s) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/polished/dist/polished.es.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/actions/page.ts"),
				l = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = s("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				p = s.n(m);
			const u = Object(a.b)(null, e => ({
					onNavigate: t => e(Object(d.G)(t))
				})),
				b = c.a.wrapped(e => r.a.createElement("div", {
					className: e.className,
					dangerouslySetInnerHTML: {
						__html: e.html
					},
					onClick: t => {
						((e, t, s) => {
							if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
								e.preventDefault(), t(e.target.getAttribute("href"))
							}
							e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), s && s(e)
						})(t, e.onNavigate, e.onClick)
					},
					style: Object.assign({}, e.style, {
						"--RawHTMLDisplay-tr-even": Object(n.g)(Object(l.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(n.g)(Object(l.a)(e).line, .8)
					})
				}), "StyledRawHTMLDisplay", p.a);
			t.a = u(Object(i.a)(b))
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/SidebarContainer/index.m.less"),
				r = s.n(o);
			t.a = n.a.div("container", r.a)
		},
		"./src/reddit/components/SidebarExpandableList/index.m.less": function(e, t, s) {
			e.exports = {
				TertiaryButton: "_1rpFWd0ROODHctwG096Da",
				tertiaryButton: "_1rpFWd0ROODHctwG096Da"
			}
		},
		"./src/reddit/components/SidebarExpandableList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/take.js"),
				r = s.n(o),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = s("./src/reddit/layout/row/Inline/index.tsx"),
				u = s("./src/reddit/layout/row/RightAlign/index.tsx"),
				b = s("./src/reddit/components/SidebarExpandableList/index.m.less"),
				h = s.n(b),
				x = s("./src/lib/lessComponent.tsx");
			const g = 10,
				f = x.a.wrapped(l.n, "TertiaryButton", h.a);
			class v extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						expanded: !1
					}, this.onButtonClick = () => {
						const {
							expanded: e
						} = this.state, {
							hasMoreItems: t,
							onLoadMore: s
						} = this.props;
						e || this.setState({
							expanded: !0
						}), e && !t && this.setState({
							expanded: !1
						}), t && s && s()
					}, this.renderToggleButton = () => {
						const {
							expanded: e
						} = this.state, {
							hasMoreItems: t,
							onLoadMore: s,
							pending: o
						} = this.props, r = !e || t && s ? n.fbt._("View More", null, {
							hk: "1RK8uA"
						}) : n.fbt._("View Less", null, {
							hk: "1M72mK"
						});
						return i.a.createElement(f, {
							onClick: this.onButtonClick
						}, o ? i.a.createElement(m.a, {
							sizePx: g
						}) : r)
					}
				}
				render() {
					const {
						className: e,
						hasMoreItems: t,
						headerButton: s,
						items: n,
						minimizedLength: o,
						renderItem: a,
						title: c
					} = this.props, {
						expanded: l
					} = this.state, m = n.length > o || t, b = (!m || l ? n : r()(n, o)).map(e => a({
						item: e
					}));
					return i.a.createElement(d.a, {
						className: e,
						headerButton: s,
						title: c
					}, b, i.a.createElement(p.a, null, i.a.createElement(u.a, null, m && this.renderToggleButton())))
				}
			}
			v.defaultProps = {
				minimizedLength: c.Fb
			}, t.a = v
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, s) {
			e.exports = {
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				i = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/components/SidebarFooter/index.m.less"),
				d = s.n(c);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js"), m = r.a.a("Link", d.a), p = Object(i.t)({
				isFrontpage: i.y
			});
			t.a = p(e => o.a.createElement(a.a, {
				className: d.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, o.a.createElement("div", {
				className: d.a.LinkContainer
			}, o.a.createElement("div", {
				className: d.a.Column
			}, o.a.createElement(m, {
				href: "https://www.reddithelp.com"
			}, l._("help", null, {
				hk: "4lyYaD"
			})), o.a.createElement(m, {
				href: "https://www.reddit.com/mobile/download"
			}, l._("Reddit App", null, {
				hk: "1ehrjP"
			})), o.a.createElement(m, {
				href: "https://www.reddit.com/coins"
			}, l._("Reddit coins", null, {
				hk: "32iMaN"
			})), o.a.createElement(m, {
				href: "https://www.reddit.com/premium"
			}, l._("Reddit premium", null, {
				hk: "RuO3A"
			})), o.a.createElement(m, {
				href: "http://redditgifts.com/"
			}, l._("Reddit gifts", null, {
				hk: "2XziRN"
			})), e.isFrontpage && o.a.createElement(o.a.Fragment, null, o.a.createElement(m, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, l._("Communities", null, {
				hk: "3CJu37"
			})), o.a.createElement(m, {
				href: "https://www.reddit.com/posts/a-1/"
			}, l._("Top Posts", null, {
				hk: "2NOEW2"
			})), o.a.createElement(m, {
				href: "https://www.reddit.com/topics/a-1/"
			}, l._("Topics", null, {
				hk: "349RFt"
			})))), o.a.createElement("div", {
				className: d.a.Column
			}, o.a.createElement(m, {
				href: "https://about.reddit.com"
			}, l._("about", null, {
				hk: "1sqJKs"
			})), o.a.createElement(m, {
				href: "https://about.reddit.com/careers/"
			}, l._("careers", null, {
				hk: "26ABvc"
			})), o.a.createElement(m, {
				href: "https://about.reddit.com/press/"
			}, l._("press", null, {
				hk: "2Qmgdz"
			})), o.a.createElement(m, {
				href: "https://www.redditinc.com/advertising"
			}, l._("advertise", null, {
				hk: "Mt40U"
			})), o.a.createElement(m, {
				href: "http://www.redditblog.com/"
			}, l._("blog", null, {
				hk: "46IQJw"
			})), o.a.createElement(m, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, l._("Terms", null, {
				hk: "4qRzfE"
			})), o.a.createElement(m, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, l._("Content policy", null, {
				hk: "1DyxZS"
			})), o.a.createElement(m, {
				href: "https://www.reddit.com/help/privacypolicy"
			}, l._("Privacy policy", null, {
				hk: "10K04G"
			})), o.a.createElement(m, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, l._("Mod policy", null, {
				hk: "2gYc2T"
			})))), o.a.createElement("div", {
				className: d.a.Copyright
			}, l._("Reddit Inc © {year}. All rights reserved", [l._param("year", (new Date).getFullYear().toString())], {
				hk: "4BrCkA"
			}))))
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3thndRe559UZy14xE1gZ_"
			}
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/app/strings/index.ts"),
				c = s("./src/reddit/actions/profile/index.ts"),
				d = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				m = s("./src/reddit/models/User/index.ts"),
				p = s("./src/reddit/selectors/profile.ts"),
				u = s("./src/reddit/selectors/subscriptions.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less"),
				x = s.n(h);
			const g = Object(a.c)({
					currentUser: b.i,
					language: b.O,
					moderated: p.n,
					subscriptions: u.f,
					hasMoreModerated: p.d,
					loadMorePending: p.a
				}),
				f = Object(r.b)(g, (e, t) => ({
					onLoadMoreGqlModeratedSubreddits: () => e(Object(c.c)(t.profileName))
				}), (e, t, s) => Object.assign({}, s, e, t, {
					onLoadMore: () => {
						e.hasMoreModerated && t.onLoadMoreGqlModeratedSubreddits()
					}
				})),
				v = e => {
					let {
						item: t
					} = e;
					return o.a.createElement(l.a, {
						id: t.id,
						iconUrl: t.iconUrl,
						isNSFW: t.isNSFW,
						key: "".concat(t.type, "-").concat(t.name),
						name: t.name,
						subscribers: t.subscribers,
						isSubscribed: t.isSubscribed,
						widget: void 0,
						sendEvent: () => void 0,
						type: t.type
					})
				};
			t.a = f(e => {
				const {
					currentUser: t,
					language: s,
					moderated: n,
					profileName: r,
					subscriptions: a,
					hasMoreModerated: c,
					onLoadMore: l,
					loadMorePending: p
				} = e;
				if (0 === n.length) return null;
				const u = t && Object(m.f)(t).toLowerCase() === r.toLowerCase() ? Object(i.a)(s, "profile.moderatedSubredditsYours") : Object(i.a)(s, "profile.moderatedSubreddits"),
					b = function(e, t, s) {
						return e.map(e => ({
							name: e.name,
							subscribers: e.subscribers,
							iconUrl: e.icon.url,
							isNSFW: e.isNSFW,
							isSubscribed: t.has(e.id),
							type: "user" === e.type ? "profile" : "subreddit",
							language: s,
							sendEvent: () => void 0
						}))
					}(n, new Set(a), s);
				return o.a.createElement(d.a, {
					className: x.a.container,
					title: u,
					items: b,
					renderItem: v,
					hasMoreItems: c,
					onLoadMore: l,
					pending: p
				})
			})
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.m.less": function(e, t, s) {
			e.exports = {
				listItem: "_3lbnTBPV5H4wHdRz5ATVc9",
				icon: "Vm0_pCIi1Z6JWa0EVf6jK",
				description: "_2xcc4c-4TOL7KOsJidXtl",
				name: "_3nt8_GidTIn88UciXx27E7",
				meta: "_3iC0Hyv57ON8dAtU94HFE_"
			}
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/profile/index.ts"),
				d = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				m = s("./src/reddit/i18n/components.tsx"),
				p = s("./src/reddit/i18n/utils.ts"),
				u = s("./src/reddit/selectors/profile.ts"),
				b = s("./src/reddit/components/SidebarProfileMultireddits/index.m.less"),
				h = s.n(b);
			const x = Object(i.c)({
					hasMoreMultireddits: u.e,
					loadMorePending: u.b,
					multireddits: u.o
				}),
				g = Object(r.b)(x, (e, t) => ({
					onLoadMoreMultireddits: () => e(Object(c.e)(t.profileName, !0))
				}), (e, t, s) => Object.assign({}, s, e, t, {
					onLoadMore: () => {
						e.hasMoreMultireddits && t.onLoadMoreMultireddits()
					}
				})),
				f = e => {
					let {
						item: t
					} = e;
					return o.a.createElement("div", {
						className: h.a.listItem,
						key: t.url
					}, o.a.createElement("img", {
						className: h.a.icon,
						src: t.icon
					}), o.a.createElement("div", {
						className: h.a.description
					}, o.a.createElement(a.a, {
						className: h.a.name,
						to: t.url
					}, t.displayText), o.a.createElement("div", {
						className: h.a.meta
					}, o.a.createElement(m.c, null, o.a.createElement(m.b, {
						name: "subredditCount"
					}, t.subredditCount), " ", o.a.createElement(m.a, {
						name: "communities",
						singular: "community",
						plural: "communities",
						count: t.subredditCount
					})))))
				};
			t.a = g(e => {
				const {
					hasMoreMultireddits: t,
					loadMorePending: s,
					multireddits: n,
					onLoadMore: r,
					profileName: a
				} = e;
				return n && n.length ? o.a.createElement(l.a, null, o.a.createElement(d.a, {
					hasMoreItems: t,
					items: n,
					onLoadMore: r,
					pending: s,
					renderItem: f,
					title: Object(p.c)("Public custom feeds by u/".concat(Object(p.b)("username", a)))
				})) : null
			})
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/SidebarSpacer/index.m.less"),
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx");
			t.a = r.a.div("Component", o.a)
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/lodash/throttle.js"),
				r = s.n(o),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/components/BackToTop/index.m.less"),
				m = s.n(l);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var u = e => i.a.createElement("div", {
					className: Object(n.a)(e.className, m.a.container),
					style: e.style
				}, i.a.createElement(d.f, {
					className: m.a.button,
					onClick: () => window.scroll(0, 0)
				}, p._("Back to top", null, {
					hk: "4nq6TO"
				}))),
				b = s("./src/reddit/components/SidebarFooter/index.tsx"),
				h = s("./src/reddit/constants/componentSizes.ts"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				f = s.n(g),
				v = s("./src/lib/lessComponent.tsx");

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var O = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const E = c.e[1] + 24,
				w = h.f + 8 + 152 + 32 + 16,
				C = w + E + 8,
				_ = v.a.div("Container", f.a),
				j = v.a.wrapped(e => {
					var {
						className: t
					} = e, s = O(e, ["className"]);
					return i.a.createElement(u, y({
						className: t,
						style: {
							top: "calc(100vh - ".concat(40, "px)")
						}
					}, s))
				}, "BackToTop", f.a),
				k = e => {
					let {
						children: t,
						className: s,
						isSticky: o
					} = e;
					return i.a.createElement("div", {
						className: Object(n.a)(s, {
							[f.a.StickyStyles]: o
						})
					}, t)
				};
			class S extends a.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > C,
						shouldFooterSticky: this.windowHeight > w
					}), this.updateState = () => {
						if (this.isHidden()) return;
						const {
							shouldAdSticky: e,
							shouldFooterSticky: t
						} = this.getStickyContents();
						e === this.state.isAdSticky && t === this.state.isFooterSticky || this.setState({
							isAdSticky: e,
							isFooterSticky: t
						})
					}, this.updateMeasurements = () => {
						this.windowHeight = window.innerHeight
					}, this.handleResize = r()(() => {
						this.updateMeasurements(), this.updateState()
					}, c.G), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
						isFooterSticky: !0
					}
				}
				isHidden() {
					return !this.containerEl || null === this.containerEl.offsetParent
				}
				componentDidMount() {
					this.isHidden() || this.handleResize(), window.addEventListener("resize", this.handleResize)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				render() {
					const {
						props: {
							adComponent: e,
							children: t,
							className: s,
							hideFooter: n
						}
					} = this, o = this.state.isAdSticky && !(!e && !t);
					return i.a.createElement(_, {
						className: s,
						innerRef: this.setWrapperRef
					}, i.a.createElement(k, {
						isSticky: o
					}, e, t, !n && i.a.createElement(b.a, null)), !this.props.hideBackToTop && i.a.createElement(j, null))
				}
			}
			const P = Object(x.t)();
			t.a = P(S)
		},
		"./src/reddit/components/SidebarTrophyCase/index.m.less": function(e, t, s) {
			e.exports = {
				TrophyIcon: "_2QZW3qVaM5fa8vo4uwbT42",
				trophyIcon: "_2QZW3qVaM5fa8vo4uwbT42",
				TrophyContent: "_3xkLQuKJQtF5YjN4IsD-iU",
				trophyContent: "_3xkLQuKJQtF5YjN4IsD-iU",
				TrophyItem: "QY_PhyoOHbRd-_92ivr-m",
				trophyItem: "QY_PhyoOHbRd-_92ivr-m",
				TrophyName: "_3lNmiqeZrNM0E_H2ZCIpN_",
				trophyName: "_3lNmiqeZrNM0E_H2ZCIpN_",
				Description: "_3n5-aYyk15dtyt-boqlDrq",
				description: "_3n5-aYyk15dtyt-boqlDrq"
			}
		},
		"./src/reddit/components/SidebarTrophyCase/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				d = s("./src/reddit/controls/OutboundLink/index.tsx"),
				l = s("./src/reddit/controls/Typography/index.tsx"),
				m = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				p = s("./node_modules/lodash/isEqual.js"),
				u = s.n(p);
			const b = Object(i.b)(i.d, u.a);
			var h = s("./src/reddit/selectors/profile.ts"),
				x = s("./src/reddit/components/SidebarTrophyCase/index.m.less"),
				g = s.n(x),
				f = s("./src/lib/lessComponent.tsx");
			const v = Object(i.c)({
				trophyCase: (e, t) => {
					let {
						profileName: s
					} = t;
					return Object(h.r)(e, Object(h.m)(e, s))
				}
			}, b);
			t.a = Object(a.b)(v)(e => {
				let {
					trophyCase: t
				} = e;
				return 0 === t.length ? null : r.a.createElement(c.a, {
					title: n.fbt._("Trophy Case ({trophyCount})", [n.fbt._param("trophyCount", "".concat(t.length))], {
						hk: "mzh3V"
					}),
					items: t,
					renderItem: _
				})
			});
			const y = f.a.wrapped(m.a, "TrophyItem", g.a),
				O = f.a.div("TrophyIcon", g.a),
				E = f.a.h5("TrophyName", g.a),
				w = f.a.div("TrophyContent", g.a),
				C = f.a.wrapped(l.c, "Description", g.a);

			function _(e) {
				let {
					item: t
				} = e;
				const s = r.a.createElement("img", {
					src: t.icon,
					title: t.name
				});
				return r.a.createElement(y, {
					key: t.id
				}, r.a.createElement(O, null, t.url ? r.a.createElement(d.a, {
					href: t.url,
					source: void 0,
					isSponsored: !1
				}, s) : s), r.a.createElement(w, null, r.a.createElement(E, null, t.name), r.a.createElement(C, null, t.description)))
			}
		},
		"./src/reddit/components/SourceLink/index.m.less": function(e, t, s) {
			e.exports = {
				OutboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				outboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				SourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				sourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				"m-comment": "_1-PD0_zreH-KVwpFoCLvQF",
				mComment: "_1-PD0_zreH-KVwpFoCLvQF"
			}
		},
		"./src/reddit/components/SourceLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/getShortenedLink.ts"),
				i = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				d = s("./src/reddit/components/SourceLink/index.m.less"),
				l = s.n(d),
				m = s("./src/lib/lessComponent.tsx");
			const p = m.a.wrapped(c.a, "OutboundLinkIcon", l.a),
				u = m.a.div("SourceLinkWrapper", l.a);
			t.a = e => {
				const {
					className: t,
					post: s,
					isCommentsPage: n
				} = e, {
					source: c,
					isSponsored: d
				} = s;
				return c ? o.a.createElement(u, {
					className: Object(r.a)({
						[l.a["m-comment"]]: n
					}, t)
				}, o.a.createElement(i.a, {
					href: c.url,
					isSponsored: d,
					postId: s.id,
					source: c
				}, Object(a.a)(s), o.a.createElement(p, null))) : null
			}
		},
		"./src/reddit/components/StateSort/index.m.less": function(e, t, s) {
			e.exports = {
				_Dropdown: "KZGTzwiGn_74p_B8yZaKw",
				dropdown: "KZGTzwiGn_74p_B8yZaKw",
				Component: "_3-D0oENu00AlV9AmpZqxfm",
				component: "_3-D0oENu00AlV9AmpZqxfm"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, s) {
			e.exports = {
				IconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				iconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				active: "_2FebEA49ReODemDlwzYHSR",
				SubscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				subscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				UnsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				unsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				isSmall: "_2ilDLNSvkCHD3Cs9duy9Q_",
				SubscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				subscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				UnsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				unsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				SubscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				subscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				UnsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				unsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return j
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/reddit/constants/elementClassNames.ts"),
				i = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				d = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				m = s("./src/reddit/components/SubscribeButton/Base.m.less"),
				p = s.n(m),
				u = s("./src/lib/classNames/index.ts"),
				b = s("./src/lib/lessComponent.tsx");

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var x = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const g = b.a.button("IconButton", p.a),
				f = b.a.wrapped(d.a, "SubscribeIcon", p.a),
				v = b.a.wrapped(c.a, "UnsubscribeIcon", p.a),
				y = b.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, n = x(e, ["border", "small"]);
					return r.a.createElement(g, n, r.a.createElement(f, {
						className: Object(u.a)(n.className, {
							[p.a.isSmall]: s
						})
					}))
				}, "SubscribeIconButton", p.a),
				O = b.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, n = x(e, ["border", "small"]);
					return t ? r.a.createElement(i.f, h({}, n, {
						className: Object(u.a)(n.className, {
							[p.a.isSmall]: s
						})
					})) : r.a.createElement(i.n, h({}, n, {
						className: Object(u.a)(n.className, {
							[p.a.isSmall]: s
						})
					}))
				}, "SubscribeInternalButton", p.a),
				E = e => {
					var {
						icon: t
					} = e, s = x(e, ["icon"]);
					return t ? r.a.createElement(y, h({}, s, {
						className: Object(u.a)(s.className, {
							[p.a.isSmall]: s.small
						})
					})) : r.a.createElement(O, h({}, s, {
						className: Object(u.a)(s.className, {
							[p.a.isSmall]: s.small
						})
					}))
				},
				w = b.a.wrapped(e => {
					var {
						border: t,
						language: s,
						small: n,
						type: o
					} = e, i = x(e, ["border", "language", "small", "type"]);
					return r.a.createElement(g, i, r.a.createElement(v, {
						className: Object(u.a)(a.n, i.className, {
							[p.a.isSmall]: n
						})
					}))
				}, "UnsubscribeIconButton", p.a),
				C = b.a.wrapped(e => {
					var {
						border: t,
						language: s,
						small: o,
						type: a
					} = e, c = x(e, ["border", "language", "small", "type"]);
					const d = r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
							className: p.a.UnsubscribeButtonDefault
						}, "subreddit" === a ? n.fbt._("Joined", null, {
							hk: "1MTmIz"
						}) : n.fbt._("Following", null, {
							hk: "1wQlVR"
						})), r.a.createElement("span", {
							className: p.a.UnsubscribeButtonHover
						}, "subreddit" === a ? n.fbt._("Leave", null, {
							hk: "2lLnnn"
						}) : n.fbt._("Unfollow", null, {
							hk: "2b5ERD"
						}))),
						l = Object(u.a)(c.className, {
							[p.a.isSmall]: o
						});
					return t ? r.a.createElement(i.i, h({}, c, {
						className: l,
						children: d
					})) : r.a.createElement(i.n, h({}, c, {
						className: l,
						children: d
					}))
				}, "UnsubscribeButton", p.a),
				_ = e => {
					var {
						icon: t
					} = e, s = x(e, ["icon"]);
					return t ? r.a.createElement(w, h({}, s, {
						className: Object(u.a)(s.className, {
							[p.a.isSmall]: s.small
						})
					})) : r.a.createElement(C, h({}, s, {
						className: Object(u.a)(s.className, {
							[p.a.isSmall]: s.small
						})
					}))
				};
			class j extends r.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? this.props.onUnsubscribe() : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						icon: s = !1,
						id: n,
						language: o,
						small: a = !1
					} = this.props, i = {
						border: e,
						className: t,
						icon: s,
						onClick: this.onClick,
						small: a
					};
					return this.props.userIsSubscriber ? r.a.createElement(_, h({}, i, {
						language: o,
						type: this.props.identifier.type
					})) : r.a.createElement(E, h({}, i, {
						id: n
					}), this.props.children, Object(l.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, s) {
			e.exports = {
				SubscribeInternalButton: "QvUHhznbRVbKaK8dZGZVV",
				subscribeInternalButton: "QvUHhznbRVbKaK8dZGZVV",
				UnsubscribeButton: "_3gteUGkVlyl5VuSsNQJaz1",
				unsubscribeButton: "_3gteUGkVlyl5VuSsNQJaz1",
				isLarge: "_2jGEuWB6HWtIbTjMG68OXY",
				ButtonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				buttonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				Checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				Plus: "_2zcGm9WDxG67GYyNNvHzlA",
				plus: "_2zcGm9WDxG67GYyNNvHzlA",
				unsubscribeButtonHoverStyles: "_1tZ_edPYFuF6jhuTr_iPEE",
				joinCleanupContent: "_3GS035a5A47X7LR9VSQYy6"
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				a = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				i = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				d = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				m = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
				p = s.n(m),
				u = s("./src/lib/classNames/index.ts"),
				b = s("./src/lib/lessComponent.tsx");

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var x = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const g = b.a.wrapped(e => {
					var {
						small: t,
						shouldReverseColor: s
					} = e, n = x(e, ["small", "shouldReverseColor"]);
					const r = s ? i.i : i.f;
					return o.a.createElement(r, h({}, n, {
						className: Object(u.a)(n.className, {
							[p.a.isLarge]: !t
						})
					}))
				}, "SubscribeInternalButton", p.a),
				f = b.a.wrapped(e => {
					var {
						small: t,
						belongsToType: s,
						shouldReverseColor: n
					} = e, r = x(e, ["small", "belongsToType", "shouldReverseColor"]);
					const a = n ? i.f : i.i;
					return o.a.createElement(a, h({}, r, {
						className: Object(u.a)(r.className, {
							[p.a.isLarge]: !t
						})
					}))
				}, "UnsubscribeButton", p.a),
				v = b.a.wrapped(c.a, "Checkmark", p.a),
				y = b.a.wrapped(d.a, "Plus", p.a),
				O = b.a.div("ButtonSpacer", p.a);
			class E extends o.a.Component {
				constructor(e) {
					super(e), this.onMouseEnter = () => {
						this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						this.setState({
							isHovered: !1
						})
					}, this.onClick = e => {
						const {
							props: t
						} = this;
						if (t.userIsSubscriber ? t.onUnsubscribe() : (this.setState({
								hasJustSubscribed: !0
							}), t.onSubscribe()), t.onClick && t.onClick(e), t.getEventFactory) {
							const e = t.getEventFactory(t.userIsSubscriber);
							e && t.sendEvent(e)
						}
					}, this.state = {
						hasJustSubscribed: !1,
						isHovered: !1
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const e = this.props,
						{
							className: t,
							identifier: s,
							language: n,
							onSubscribe: r,
							onUnsubscribe: a,
							postId: i,
							sendEvent: c,
							small: d = !1,
							userIsSubscriber: m,
							doNotHideOtherSubscribeButtons: b,
							getEventFactory: E,
							onSubscriptionsRequested: w
						} = e,
						C = x(e, ["className", "identifier", "language", "onSubscribe", "onUnsubscribe", "postId", "sendEvent", "small", "userIsSubscriber", "doNotHideOtherSubscribeButtons", "getEventFactory", "onSubscriptionsRequested"]),
						_ = this.state.isHovered;
					let j = m ? "subscribed" : "subscribe";
					m && _ && (j = "unsubscribe");
					const k = Object(l.a)({
						type: s.type,
						key: j
					});
					return m ? this.state.hasJustSubscribed || b ? o.a.createElement(f, h({
						className: Object(u.a)(t, {
							[p.a.isLarge]: !d,
							[p.a.unsubscribeButtonHoverStyles]: !d
						}),
						onClick: this.onClick,
						small: d,
						belongsToType: s.type,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, C), d && o.a.createElement(v, null), !d && !_ && o.a.createElement(v, null), !d && k) : d ? null : o.a.createElement(O, null) : o.a.createElement(o.a.Fragment, null, o.a.createElement(g, h({
						className: Object(u.a)(t, {
							[p.a.isLarge]: !d
						}),
						onClick: this.onClick,
						small: d
					}, C, {
						id: "subscribe-button-".concat(i),
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}), o.a.createElement(y, null), !d && k))
				}
			}
			t.a = Object(a.a)(Object(r.c)(E))
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js");
			const o = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				r = {
					subredditActions: {
						subscribe: () => n.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => n.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => n.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => n.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => n.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => n.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				a = e => {
					let {
						type: t,
						key: s
					} = e;
					return r[o({
						type: t
					})][s]()
				}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/TrackingHelper/index.tsx"),
				o = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				r = s("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(o.a)(Object(n.c)(r.a))
		},
		"./src/reddit/components/TimeSort/index.m.less": function(e, t, s) {
			e.exports = {
				ListingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey",
				listingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey"
			}
		},
		"./src/reddit/components/TimeSort/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.array.sort.js");
			var n = s("./node_modules/path-browserify/index.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/higherOrderComponents/asTooltip.tsx"),
				m = s("./src/lib/addQueryParams/index.ts"),
				p = s("./src/lib/constants/index.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				b = s("./src/reddit/components/ListingSort/index.tsx"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/constants/listingSorts.ts"),
				g = s("./src/reddit/constants/parameters.ts"),
				f = s("./src/reddit/contexts/PageLayer/index.tsx"),
				v = s("./src/reddit/contexts/Tooltip.ts"),
				y = s("./src/reddit/controls/Dropdown/index.tsx"),
				O = s("./src/reddit/controls/Dropdown/Row.tsx"),
				E = s("./src/reddit/helpers/trackers/navigation.ts"),
				w = s("./src/reddit/selectors/tooltip.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/components/TimeSort/index.m.less"),
				j = s.n(_),
				k = s("./src/lib/lessComponent.tsx");

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const P = "TimeSort--SortPicker",
				I = Object(l.a)(y.a),
				N = (e, t, s) => {
					let n = e.url;
					return e.urlParams.sort || Object(f.G)(e) || (n = o.a.join(n, t)), Object(m.a)(n, {
						[g.t]: s
					})
				},
				T = k.a.div("ListingSortContainer", j.a),
				L = Object(f.t)(),
				M = Object(c.c)({
					dropdownIsOpen: Object(w.b)(P),
					language: C.O
				}),
				R = Object(i.b)(M, e => ({
					onOpenDropdown: () => e(Object(u.h)({
						tooltipId: P
					}))
				}));
			t.a = L(R(Object(h.c)(e => a.a.createElement(T, {
				className: e.className,
				onClick: e.onOpenDropdown
			}, a.a.createElement(b.c, {
				className: e.wrapperClassName,
				disabled: !1
			}, a.a.createElement(b.b, {
				className: e.buttonClassName,
				displayText: Object(x.b)(e.timeSort),
				id: P,
				showDropdownTriangle: !0
			})), a.a.createElement(v.a.Consumer, null, t => a.a.createElement(I, S({
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: P
			}, t), [p.Rb.HOUR, p.Rb.DAY, p.Rb.WEEK, p.Rb.MONTH, p.Rb.YEAR, p.Rb.ALL].map(t => a.a.createElement(O.b, {
				className: Object(d.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
				displayText: Object(x.b)(t),
				href: N(e.pageLayer, e.listingSort, t),
				isSelected: e.timeSort === t,
				onClick: () => {
					e.onChange(t), e.sendEvent(Object(E.c)(t))
				}
			}))))))))
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/SEOTitle/index.tsx"),
				i = s("./src/reddit/components/Widgets/Base/index.m.less"),
				c = s.n(i),
				d = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const l = r.a.div("WidgetBackground", c.a),
				m = r.a.wrapped(e => {
					var {
						children: t
					} = e, s = d(e, ["children"]);
					return o.a.createElement("div", s, o.a.createElement(a.b, {
						type: a.a.Widget
					}, t))
				}, "WidgetHeader", c.a);
			t.b = e => o.a.createElement("div", {
				className: e.className
			}, o.a.createElement(l, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return P
			})), s.d(t, "a", (function() {
				return N
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/app/strings/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Flair/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/index.tsx"),
				u = s("./src/reddit/actions/subscription/index.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = Object(i.c)({
				language: b.O
			});
			var x = Object(r.b)(h, (e, t) => {
					const s = t.widget.id || void 0;
					return {
						onSubscribe: () => e(u.d([t.identifier], !0, s)),
						onSubscriptionsRequested: () => e(u.e()),
						onUnsubscribe: () => e(u.d([t.identifier], !1, s))
					}
				})(s("./src/reddit/components/SubscribeButton/Base.tsx").a),
				g = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				f = s("./src/reddit/constants/componentSizes.ts"),
				v = s("./src/reddit/controls/Button/index.tsx"),
				y = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				O = s("./src/reddit/i18n/utils.ts"),
				E = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				w = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				C = s("./src/reddit/models/Flair/index.ts"),
				_ = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				j = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				k = s.n(j);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const P = e => o.a.createElement(g.a, {
					className: Object(d.a)(k.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, o.a.createElement("div", {
					className: k.a.container
				}, e.isLoading ? o.a.createElement(y.a, {
					className: k.a.loadingIcon,
					sizePx: 32
				}) : o.a.createElement(o.a.Fragment, null, e.isError ? o.a.createElement("p", {
					className: k.a.errorMsg
				}, e.errorMsg || Object(O.c)("Something went wrong.")) : o.a.createElement(o.a.Fragment, null, e.communities.map(t => o.a.createElement(N, S({
					key: t.name
				}, t, {
					getSubscribeEventFactory: e.getSubscribeEventFactoryHandler ? e.getSubscribeEventFactoryHandler(t) : void 0,
					widget: e.widget,
					sendEvent: e.sendEvent,
					type: t.type || "subreddit",
					buttonDisabled: e.itemButtonDisabled,
					isLoading: e.loadingItemName && e.loadingItemName.toLowerCase() === t.name.toLowerCase() || !1,
					isNSFW: t.isNSFW,
					onCommunityNameClick: e.getClickEventFactory ? () => e.sendEvent(e.getClickEventFactory(t)) : void 0,
					tertiaryButtonText: e.tertiaryButtonText,
					useTertiaryButton: e.useTertiaryButton,
					showTertiaryButtonOnHover: e.showTertiaryButtonOnHover,
					onTertiaryButtonClick: e.onTertiaryButtonClick
				})))), e.bottomButtonText && e.onBottomButtonClick && o.a.createElement(v.n, {
					className: k.a.bottomButton,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				I = Object(i.c)({
					hideNSFWPref: b.y,
					language: b.O
				}),
				N = Object(r.b)(I)(e => o.a.createElement("div", {
					className: k.a.communityItemContainer
				}, o.a.createElement(w.a, {
					widthRight: f.t
				}, o.a.createElement("div", {
					className: k.a.iconContainer
				}, e.communityIcon || e.iconUrl ? o.a.createElement("img", {
					className: k.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : o.a.createElement(E.a, {
					className: k.a.planetIcon,
					"data-redditstyle": !0
				})), o.a.createElement("div", {
					className: k.a.communityDescriptionContainer
				}, o.a.createElement(a.a, {
					className: k.a.communityName,
					to: Object(_.a)(e.name, e.type),
					onClick: e.onCommunityNameClick
				}, Object(_.b)(e.name, e.type)), o.a.createElement("div", {
					className: k.a.communityInfoContainer
				}, !!e.subscribers && o.a.createElement("p", {
					className: k.a.subscriberCount
				}, Object(c.b)(e.language, "listings.subscribers", e.subscribers, {
					count: Object(l.b)(e.subscribers)
				})), e.isNSFW && o.a.createElement(m.b, {
					flair: {
						type: C.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? o.a.createElement(y.a, {
					className: Object(d.a)(k.a.communityCta, k.a.smallLoadingIcon),
					sizePx: 12
				}) : o.a.createElement(v.n, {
					className: Object(d.a)(k.a.communityCta, {
						[k.a.showOnHover]: e.showTertiaryButtonOnHover
					}),
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? o.a.createElement(x, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					sendEvent: e.sendEvent,
					small: !0,
					userIsSubscriber: !!e.isSubscribed,
					widget: e.widget
				}) : o.a.createElement(p.a, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					small: !0
				})), !!e.description && o.a.createElement("p", {
					title: e.description,
					className: k.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/posts.ts"),
				o = s("./src/reddit/helpers/name/index.ts");

			function r(e, t) {
				return (t === n.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function a(e, t) {
				return t === n.a.PROFILE ? Object(o.c)(e) : Object(o.b)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, s) {
			e.exports = {
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
				showOnHover: "_1kul3JsqY5kjVe9kzGy4bV",
				communityDescription: "_2IANzA2n-6eA5T8Tz0TEVE",
				communityName: "_3BFvyrImF3et_ZF21Xd8SC",
				container: "_3-1jy8hD77zNJUdEMxDrXC",
				isTruncated: "_3idiZ5DFVkbhhKjDBTQeq-",
				iconContainer: "_19EKcu4yel161081OGs8w9",
				iconStyles: "_9p_iPxnOh7HnkcLhtSCDs",
				planetIcon: "_3GFjQrq7t7DpW__ZFpU7xf",
				secondaryLinkButton: "_1Yi_hbFvk7YS9Op3tGVQq9",
				subredditIcon: "_2BR7Oy0CAj5EiSDYQ--CAE",
				subscriberCount: "e0X82913OdCTkFf2HU-WL",
				textArea: "_3X2QmclgxJpDGOG7vui_8z",
				textButton: "_3k6fSIkIt6-LCDmLz7Didp",
				trashIcon: "_3T0iddL64wHJU4Ri4QU80I",
				loadingIcon: "_1S__kHcDfbOdA2sCV8sn9U",
				errorMsg: "_2AlaL9JsHLdMUnGFOPta5H",
				bottomButton: "_1aWHRawTuRl2HMpanJbrrb",
				leftAligned: "T4XQNeAXcz6U72tv0Z5Z6"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1zLylbOLqdzG2C4JhdkEVQ",
				twitterLogo: "_1N1dJvzR-m3nNoVl8cxHul",
				link: "JqNsQRTEcAPCq8_G0O5mO",
				name: "_28fbIV1TS_oSVjfzjWnM0f",
				linkDescription: "_2Y1Xv08xrWbsDZuEvIuRKo",
				linkTitle: "elMVR2YfkbHdFTihhlUK4",
				linkIcon: "oi2L0mBSRAULcOPEtjXSh",
				description: "KKNu_jB7N6A-PuBrW0WoR",
				visitButton: "NBL39n3gjYvG4c9qlXJIk"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.m.less": function(e, t, s) {
			e.exports = {
				account: "_25M-5tlJjQOChCI8sg84QU"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/components/Widgets/Base/index.tsx"),
				l = s("./src/reddit/constants/posts.ts"),
				m = s("./src/reddit/helpers/trackers/profileSettings.ts"),
				p = s("./src/reddit/i18n/components.tsx"),
				u = s("./src/reddit/models/ExternalAccount/index.ts"),
				b = s("./src/reddit/selectors/externalAccount.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				x = s("./node_modules/fbt/lib/FbtPublic.js"),
				g = s("./src/reddit/controls/OutboundLink/index.tsx"),
				f = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				v = s("./src/reddit/icons/svgs/Twitter/index.tsx"),
				y = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				O = s("./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less"),
				E = s.n(O);
			var w = e => {
					const {
						account: t,
						clickEvent: s,
						provider: n
					} = e;
					let r, a = t.username,
						i = "";
					return n !== u.a.Twitter ? null : (r = o.a.createElement(v.a, {
						className: E.a.twitterLogo
					}), i = x.fbt._("View on Twitter", null, {
						hk: "39S5oy"
					}), a = "@".concat(t.username), o.a.createElement(y.a, null, o.a.createElement("span", {
						className: E.a.icon
					}, r), o.a.createElement(g.a, {
						className: E.a.link,
						href: t.link,
						isSponsored: !1,
						source: void 0,
						onClick: s
					}, o.a.createElement("div", {
						className: E.a.linkTitle
					}, o.a.createElement("span", {
						className: E.a.name
					}, a), o.a.createElement(f.a, {
						className: E.a.linkIcon
					})), o.a.createElement("div", {
						className: E.a.linkDescription
					}, i))))
				},
				C = s("./src/reddit/components/Widgets/ConnectedAccounts/index.m.less"),
				_ = s.n(C);
			const j = Object(a.c)({
					twitterAccount: (e, t) => {
						let {
							subredditOrProfile: s
						} = t;
						return s.type === l.a.PROFILE ? Object(b.c)(e, {
							profileName: s.name
						}) : null
					},
					user: (e, t) => {
						let {
							subredditOrProfile: s
						} = t;
						return s.type === l.a.PROFILE ? Object(h.cb)(e, {
							userName: s.name
						}) : null
					}
				}),
				k = Object(r.b)(j, e => ({
					trackTwitterAccountClicked: t => e((e, s) => m.k(s(), t))
				}), (e, t, s) => Object.assign({}, s, e, t, {
					onTwitterAccountClicked: () => t.trackTwitterAccountClicked(e.user)
				}));
			t.a = Object(c.c)(k(e => {
				const {
					onTwitterAccountClicked: t,
					twitterAccount: s
				} = e;
				return s ? o.a.createElement(i.a, null, o.a.createElement(d.b, null, o.a.createElement(d.a, null, o.a.createElement(p.c, null, "Connected accounts")), s && o.a.createElement("div", {
					className: _.a.account
				}, o.a.createElement(w, {
					provider: u.a.Twitter,
					account: s,
					clickEvent: t
				})))) : null
			}))
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, s) {
			e.exports = {
				widgetBackground: "_1G4yU68P50vRZ4USXfaceV",
				clickable: "_2mtWlchu4uQf339v56bSha",
				redditStyle: "_2QeqBqfT5UbHBoViZUt-wX",
				truncatedGradient: "_1lvCNVth3dt5y8lu3vT95L",
				widgetHeader: "_ZhON3a3vplThB8NFwuJn",
				widgetTitle: "_2sggAEfRQLyoAl4J__5twU",
				widgetContent: "TmgZY6tDcdErbE5d7E0HJ",
				widgetContentOnly: "_3RPJ8hHnfFohktLZca18J6",
				truncated: "r5dzQq7dgZyAmve8abbbt",
				seeMore: "_3dbp6Cm9uKkkIBr9EsU-qS"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/selectors/telemetry.ts");
			const b = (e, t) => s => Object.assign({
				source: "community_widgets",
				action: "click",
				noun: "see_more",
				widget: Object(u.widget)(s, {
					subredditId: e,
					widgetKind: t
				})
			}, u.defaults);
			var h = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				x = s("./src/reddit/selectors/experiments/topPosts.ts"),
				g = s("./src/reddit/selectors/structuredStyles.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/models/Theme/index.ts"),
				y = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const O = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(y.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				E = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(y.a)(e).widgetColors.sidebarWidgetHeaderColor,
				w = e => {
					const t = O(e);
					return Object(v.f)(t)
				},
				C = e => {
					const t = E(e);
					return Object(v.f)(t)
				};
			var _ = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				j = s.n(_);
			const {
				fbt: k
			} = s("./node_modules/fbt/lib/FbtPublic.js"), S = Object(m.t)(), P = Object(r.b)(() => Object(a.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(m.m)(e, t) || void 0,
						n = t.redditStyle || Object(g.m)(e, {
							subredditId: s
						}),
						o = Object(f.Q)(e);
					return n || o
				},
				nigtmode: f.Q,
				subredditId: m.m,
				topPostVariant: x.d
			}));
			class I extends o.a.Component {
				constructor() {
					super(...arguments), this.contentRef = o.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(b(e, t)), this.setState({
							isTruncated: !1
						})
					}
				}
				componentDidMount() {
					const e = this.contentRef.current,
						t = e && e.offsetHeight;
					this.props.truncateThreshold && t && t > this.props.truncateThreshold && this.setState({
						isTruncated: !0
					})
				}
				getWidgetBackgroundStyles() {
					const e = {};
					return e.backgroundColor = O(this.props), e.borderColor = Object(h.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = w(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = E(this.props), e.color = e.fill = C(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: r,
						onClick: a,
						title: c,
						titleClassName: l,
						truncateThreshold: m
					} = this.props, u = s ? j.a.widgetContentOnly : j.a.widgetContent, b = !n && this.props.styles, h = b ? this.getWidgetBackgroundStyles() : {}, x = b ? this.getWidgetHeaderStyles() : {};
					return o.a.createElement("div", {
						className: Object(i.a)(t, j.a.widgetBackground, {
							[j.a.redditStyle]: n,
							[j.a.clickable]: !!a,
							[j.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: a,
						style: h
					}, c && o.a.createElement("div", {
						className: j.a.widgetHeader,
						style: x
					}, o.a.createElement("div", {
						className: Object(i.a)(j.a.widgetTitle, l)
					}, o.a.createElement(d.b, {
						type: d.a.Widget
					}, c)), r), o.a.createElement("div", {
						className: Object(i.a)(u, {
							[j.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? m : "none"
						}
					}, e), this.state.isTruncated && o.a.createElement(p.n, {
						className: j.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, k._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = S(P(Object(c.a)(Object(l.c)(I))))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/subscription/index.ts"),
				a = s("./src/reddit/selectors/subreddit.ts"),
				i = s("./src/reddit/selectors/user.ts");
			t.a = Object(n.b)(() => Object(o.c)({
				language: i.O,
				userIsSubscriber: a.Z
			}), (e, t) => {
				let {
					identifier: s
				} = t;
				return {
					onSubscribe: () => e(r.d([s], !0)),
					onSubscriptionsRequested: () => e(r.e()),
					onUnsubscribe: () => e(r.d([s], !1))
				}
			})
		},
		"./src/reddit/connectors/connectToLanguage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/selectors/user.ts");
			const a = Object(o.c)({
				language: r.O
			});

			function i(e) {
				return Object(n.b)(a)(e)
			}
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return c
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/constants/index.ts");
			const r = {
					[o.O.BEST]: () => n.fbt._("best", null, {
						hk: "4tcUbl"
					}),
					[o.O.HOT]: () => n.fbt._("hot", null, {
						hk: "44QCEp"
					}),
					[o.O.NEW]: () => n.fbt._("new", null, {
						hk: "3VBhPb"
					}),
					[o.O.CONTROVERSIAL]: () => n.fbt._("controversial", null, {
						hk: "4jWP0T"
					}),
					[o.O.RISING]: () => n.fbt._("rising", null, {
						hk: "1KmbkT"
					}),
					[o.O.TOP]: () => n.fbt._("top", null, {
						hk: "4pcLmp"
					})
				},
				a = e => {
					const t = r[e];
					return t && t() || ""
				},
				i = {
					[o.Rb.HOUR]: () => n.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[o.Rb.DAY]: () => n.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[o.Rb.WEEK]: () => n.fbt._("This week", null, {
						hk: "3Y5JkE"
					}),
					[o.Rb.MONTH]: () => n.fbt._("This month", null, {
						hk: "3NWWQf"
					}),
					[o.Rb.YEAR]: () => n.fbt._("This year", null, {
						hk: "3jD0mx"
					}),
					[o.Rb.ALL]: () => n.fbt._("All time", null, {
						hk: "2cL1Yf"
					})
				},
				c = e => {
					const t = i[e];
					return t && t() || ""
				}
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = o.a.createContext({})
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, s) {
			e.exports = {
				Checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				mActive: "tLupTGll01Uj0qzkNAjEB",
				mActiveRedditStyle: "_3zu1ZycuCQZ6UeSogWYVka",
				mDisabled: "_2hst4PduZ_m486CeR0rkEm",
				mDisabledRedditStyle: "_2MFHixazvnGgoOmoOzwbIu",
				CheckboxSizing: "_1yJa2uREsO-mxGPj5tbxXy",
				checkboxSizing: "_1yJa2uREsO-mxGPj5tbxXy"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Checkbox/index.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var c = e => o.a.createElement("svg", i({
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), o.a.createElement("g", {
					transform: "translate(-32.000000, -173.000000)"
				}, o.a.createElement("g", {
					transform: "translate(32.000000, 173.000000)"
				}, o.a.createElement("path", {
					d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
				})))),
				d = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = s("./src/reddit/controls/Checkbox/index.m.less"),
				m = s.n(l);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var u = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const b = e => t => {
					const {
						className: s,
						disabled: n,
						redditStyle: a,
						"data-redditstyle": i
					} = t, c = u(t, ["className", "disabled", "redditStyle", "data-redditstyle"]), d = ((e, t, s) => {
						const n = !(!t && !s);
						let o = "";
						return o = e ? n ? m.a.mDisabledRedditStyle : m.a.mDisabled : n ? m.a.mActiveRedditStyle : m.a.mActive
					})(n, a, i);
					return o.a.createElement(e, p({
						className: Object(r.a)(m.a.Checkbox, d, s)
					}, c))
				},
				h = b(d.a),
				x = b(c);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? x : e.isCheckboxSelected ? h : a.a;
				return o.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: e.className,
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, o.a.createElement(t, {
					className: Object(r.a)(m.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/lodash/throttle.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				m = s("./src/reddit/layout/row/InlineButton/index.tsx"),
				p = s("./src/reddit/controls/Dropdown/index.m.less"),
				u = s.n(p),
				b = s("./src/reddit/controls/Dropdown/row.m.less"),
				h = s.n(b);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var g = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			class f extends a.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = o()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, s = Object(i.a)(h.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? a.a.createElement(c.a, x({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && a.a.createElement("span", {
						className: s
					}, e.children), a.a.createElement("span", {
						className: Object(i.a)(h.a.text, e.textClassName)
					}, e.displayText)) : a.a.createElement(m.a, x({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: o()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? a.a.createElement("div", null, e.children) : a.a.createElement("span", {
						className: s
					}, e.children)), e.displayText && a.a.createElement("span", {
						className: Object(i.a)(h.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && a.a.createElement(l.a, {
						className: h.a.checkmark
					}), e.showDropdownTriangle && a.a.createElement(d.a, {
						className: u.a.dropdownTriangle
					}))
				}
			}
			t.b = e => {
				var {
					className: t
				} = e, s = g(e, ["className"]);
				const n = Object(i.a)(h.a.row, t, {
					[h.a.mIsInteractive]: !s.noHover,
					[h.a.mIsSelected]: s.isSelected,
					[h.a.topics]: s.isTopicsStyle
				});
				return a.a.createElement(f, x({
					className: n
				}, s))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, s) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				iconStyles: "_2XOVBjNLHjJIznEsn35vs2",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/LayoutSwitch/index.m.less": function(e, t, s) {
			e.exports = {
				title: "_3gualOXr9lNla8__xISVq_",
				iconStyles: "_35qsI3TFFX54FD3PjwpLCv",
				mDisabled: "_2D3JNnADc6N28qHblqs-qW",
				mRedditStyle: "_1Y3PuNdUp_ye6oQQPIkE2Y",
				iconContainer: "_2Q-tHVfuqqIQLbMlSTJrlV",
				layoutButton: "_2KZsg_1r4DJcaP-Ug1LhsQ",
				mIsActive: "_70bDvpoC4B21zobSGUMe6",
				layoutSwitch: "_1o9Wtqx2f_wpqeyceGTV5w"
			}
		},
		"./src/reddit/controls/LayoutSwitch/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				l = s("./src/reddit/actions/preferences.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/constants/postLayout.ts"),
				u = s("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				b = s("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				h = s("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				x = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/selectors/telemetry.ts"),
				v = s("./src/reddit/controls/LayoutSwitch/index.m.less"),
				y = s.n(v);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var E = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const w = e => Object(c.a)(y.a.iconStyles, e.className, {
					[y.a.mDisabled]: e.disabled,
					[y.a.mRedditStyle]: e.redditStyle
				}),
				C = e => {
					var {
						className: t,
						disabled: s,
						redditStyle: n
					} = e, o = E(e, ["className", "disabled", "redditStyle"]);
					return r.a.createElement(b.a, O({
						className: w({
							className: t,
							disabled: s,
							redditStyle: n
						})
					}, o))
				},
				_ = e => {
					var {
						className: t,
						disabled: s,
						redditStyle: n
					} = e, o = E(e, ["className", "disabled", "redditStyle"]);
					return r.a.createElement(u.a, O({
						className: w({
							className: t,
							disabled: s,
							redditStyle: n
						})
					}, o))
				},
				j = e => {
					var {
						className: t,
						disabled: s,
						redditStyle: n
					} = e, o = E(e, ["className", "disabled", "redditStyle"]);
					return r.a.createElement(h.a, O({
						className: w({
							className: t,
							disabled: s,
							redditStyle: n
						})
					}, o))
				},
				k = e => {
					var {
						isActive: t
					} = e, s = E(e, ["isActive"]);
					return r.a.createElement("button", O({
						className: Object(c.a)(y.a.layoutButton, {
							[y.a.mIsActive]: t
						})
					}, s))
				},
				S = Object(g.t)(),
				P = Object(i.c)({
					postLayout: g.M,
					redditStyle: g.A
				}),
				I = Object(a.b)(P, e => ({
					onListingLayoutChange: (t, s) => e(Object(l.v)(t, s)),
					toggleTooltip: t => e(Object(m.h)({
						tooltipId: t
					}))
				}), (e, t, s) => Object.assign({}, e, t, s, {
					toggleTooltip: e => t.toggleTooltip(e)
				}));
			t.a = S(I(Object(x.c)(e => {
				const {
					sendEvent: t,
					subredditId: s
				} = e, o = e.layout || p.e[e.postLayout];
				return r.a.createElement("div", {
					className: Object(c.a)(y.a.layoutSwitch, e.className),
					id: "view--layout--FUE"
				}, r.a.createElement("div", {
					className: y.a.title
				}, n.fbt._("View", null, {
					hk: "18a931"
				})), r.a.createElement("div", {
					className: y.a.iconContainer
				}, (() => [{
					layout: p.d.Card,
					Icon: j,
					text: n.fbt._("Card", null, {
						hk: "22FueJ"
					})
				}, {
					layout: p.d.Classic,
					Icon: _,
					text: n.fbt._("Classic", null, {
						hk: "1Djx18"
					})
				}, {
					layout: p.d.Compact,
					Icon: C,
					text: n.fbt._("Compact", null, {
						hk: "22iWX9"
					})
				}])().map(n => {
					const a = () => (n => {
							e.onChange ? e.onChange(n) : (e.onListingLayoutChange(n, s), t(e => ({
								source: "layout_switch",
								action: "click",
								noun: n,
								screen: Object(f.screen)(e),
								subreddit: Object(f.subreddit)(e)
							})))
						})(n.layout),
						i = () => e.toggleTooltip(c),
						c = "layoutSwitch--" + n.layout,
						l = n.layout === o;
					return r.a.createElement(k, {
						"aria-label": n.text,
						"aria-pressed": l,
						id: c,
						isActive: l,
						key: n.layout,
						onClick: a,
						onMouseEnter: i,
						onMouseLeave: i,
						onTouchStart: a
					}, r.a.createElement(n.Icon, {
						disabled: !l,
						onClick: l ? void 0 : e.onLayoutClick,
						redditStyle: e.redditStyle
					}), r.a.createElement(d.c, {
						tooltipId: c,
						text: n.text
					}))
				})))
			})))
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, s) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "d", (function() {
				return b
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/prettyPrintNumber/index.ts"),
				c = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/controls/MetaData/index.m.less")),
				d = s.n(c),
				l = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const m = a.a.span("metaText", d.a),
				p = e => r.a.createElement(m, e, " · "),
				u = e => {
					var {
						isScoreHidden: t,
						language: s,
						score: o,
						useUpvotes: a
					} = e, c = l(e, ["isScoreHidden", "language", "score", "useUpvotes"]);
					const d = Object(i.b)(o),
						p = n.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [n.fbt._plural(o, "number", d)], {
							hk: "2L3T21"
						}),
						u = t ? n.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : a ? p : n.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [n.fbt._plural(o, "number", d)], {
							hk: "gf67v"
						});
					return r.a.createElement(m, c, u)
				},
				b = (e, t) => r.a.createElement(m, null, n.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [n.fbt._plural(e, "number", Object(i.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, s) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/controls/InternalLink/index.tsx"),
				r = s("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				a = s.n(r);
			t.a = n.a.wrapped(o.a, "unstyledInternalLink", a.a)
		},
		"./src/reddit/helpers/describeApiError/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/constants/index.ts");

			function r(e) {
				let {
					apiError: t,
					isLoggedOut: s,
					language: r
				} = e;
				switch (t.type) {
					case o.E.AUTHORIZATION_ERROR:
						return s ? n.fbt._("You might need to be logged in to do that.", null, {
							hk: "1313fG"
						}) : n.fbt._("It looks like you aren't allowed to do that.", null, {
							hk: "5tQod"
						});
					case o.E.VALIDATION_ERROR:
						return n.fbt._("We weren't able to handle your request.", null, {
							hk: "4umMwv"
						});
					case o.E.NOT_FOUND_ERROR:
						return n.fbt._("Sorry, there doesn't seem to be anything here.", null, {
							hk: "2UmS4e"
						});
					case o.E.SERVER_ERROR:
						return n.fbt._("Sorry, for some reason reddit can't be reached.", null, {
							hk: "1Sxl7y"
						});
					case o.E.LIKELY_UBLOCK_ERROR:
						return n.fbt._("It looks like one or more software blocking extensions you are using may be interfering with Reddit's ability to serve you content. Please try disabling them or changing the rules you use.", null, {
							hk: "6Gh68"
						});
					default:
						return n.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "FsWrq"
						})
				}
			}
		},
		"./src/reddit/helpers/getClickInfo.ts": function(e, t, s) {
			"use strict";
			t.a = e => ({
				hasNewTabModifier: !(!e.metaKey && !e.ctrlKey && 1 !== e.button)
			})
		},
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModFullPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.all
		},
		"./src/reddit/helpers/postComponentForLayout/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "b", (function() {
				return O
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/lib/isUrl/index.ts"),
				i = s("./src/lib/logs/console.ts"),
				c = s("./src/reddit/constants/postLayout.ts"),
				d = s("./src/reddit/models/Media/index.ts");
			const l = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-BlankPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-BlankPost").then(s.bind(null, "./src/reddit/components/BlankPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/BlankPost/index.tsx"
					}
				}),
				m = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-ClassicPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("Poll~ProfileComments~ProfilePrivate~RpanListingUnit~SearchResults~reddit-components-ClassicPost~redd~f8abff80"), s.e("Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddi~90fdacc3"), s.e("reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddit-compo~0e38b796"), s.e("reddit-components-ClassicPost")]).then(s.bind(null, "./src/reddit/components/ClassicPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ClassicPost/index.tsx"
					}
				}),
				p = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-CompactPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("Poll~ProfileComments~ProfilePrivate~RpanListingUnit~SearchResults~reddit-components-ClassicPost~redd~f8abff80"), s.e("Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddi~90fdacc3"), s.e("reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddit-compo~0e38b796"), s.e("reddit-components-CompactPost")]).then(s.bind(null, "./src/reddit/components/CompactPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/CompactPost/index.tsx"
					}
				}),
				u = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-LargePost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("Poll~ProfileComments~ProfilePrivate~RpanListingUnit~SearchResults~reddit-components-ClassicPost~redd~f8abff80"), s.e("Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddi~90fdacc3"), s.e("reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddit-compo~0e38b796"), s.e("reddit-components-LargePost")]).then(s.bind(null, "./src/reddit/components/LargePost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/LargePost/index.tsx"
					}
				}),
				b = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-MediumPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("Poll~ProfileComments~ProfilePrivate~RpanListingUnit~SearchResults~reddit-components-ClassicPost~redd~f8abff80"), s.e("Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddi~90fdacc3"), s.e("reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddit-compo~0e38b796"), s.e("reddit-components-MediumPost")]).then(s.bind(null, "./src/reddit/components/MediumPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/MediumPost/index.tsx"
					}
				}),
				h = {
					[c.g.Large]: u,
					[c.g.Medium]: b,
					[c.g.Classic]: m,
					[c.g.Compact]: p
				},
				x = e => r.a.createElement(l, e),
				g = ["https://www.mcdonalds.com", "https://d2n94wep25xhn0.cloudfront.net", "https://www.dyson.com", "https://dyson.com"],
				f = e => e.source && e.source.url && e.isSponsored && g.some(t => e.source.url.startsWith(t)),
				v = e => !e.media || e.media.type === d.n.EMBED && !(d.b.has(e.media.provider) || f(e)),
				y = (e, t) => {
					if (e.isBlank) return 0;
					switch (t) {
						case c.g.Medium:
							return 188;
						case c.g.Classic:
							return 96;
						case c.g.Compact:
							return 32;
						default:
							return 200
					}
				};

			function O(e) {
				let {
					isCrosspost: t,
					isFirstPost: s,
					layout: n,
					post: o
				} = e;
				if (o.isBlank) return x;
				const r = !o.media && !!o.source && Object(a.a)(o.source.url),
					d = t && r;
				n === c.g.Large && v(o) && !d && (n = c.g.Medium);
				const l = h[n];
				return void 0 === l ? (Object(i.a)(void 0, "Could not find component for layout ".concat(n, ".")), x) : s && o.isSponsored && n === c.g.Large ? b : l
			}
		},
		"./src/reddit/helpers/styles/mixins/index.m.less": function(e, t, s) {
			e.exports = {
				basePostStyles: "REwsaLIz5u3DhM7zbbzIU",
				classicPostStyles: "bE7JgM2ex7W3aF3zci5bm",
				compactPostStyles: "FeLWdhOO-cVXowAo3Rndk",
				baseLargeAndMediumPostStyles: "_2lHXa-mLMsRfm1Q5JxgU4r",
				largeAndMediumPostStyles: "_3Qkp11fjcAw9I9wtLo8frE",
				baseClassicAndCompactPostStyles: "_2yN8L-c8UBoKxHn0-vg_dS",
				baseSubredditStyles: "_2zRMh6o0BucltCL6o64pa4",
				classicAndCompactActiveStyles: "_1Accc3h2AW0sB8E4CcEz2n",
				mIsActive: "_1LmKpEAguLZV4jQMgQSFVL",
				classicAndCompactPlaceholderStyles: "_3joKifdh6j3tG_vsgFS85R",
				mUseRedditTheme: "_1nQXomgzQ2rnBsRU2iZ00l",
				largeAndMediumActiveStyles: "_1qftyZQ2bhqP62lbPjoGAh"
			}
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return p
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "a", (function() {
				return x
			})), s.d(t, "d", (function() {
				return g
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				o = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				a = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = s("./src/reddit/models/Theme/index.ts"),
				c = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(d);
			const m = {},
				p = e => Object(i.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				u = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(i.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(i.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: p(t)
					}
				},
				b = e => Object(n.l)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : m,
				x = e => e.isActive ? l.a.mIsActive : void 0,
				g = e => {
					const t = Object(r.a)(Object(o.a)(e), a.a.actionIcon, a.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/reportPrompt.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const o = (e, t, s, o) => r => ({
					source: "report_prompt",
					noun: s,
					action: o,
					subreddit: n.subredditByName(r, e),
					post: n.post(r, t)
				}),
				r = (e, t, s, o) => r => ({
					source: "report_survey",
					noun: s,
					action: o,
					subreddit: n.subredditByName(r, e),
					post: n.post(r, t)
				})
		},
		"./src/reddit/hooks/useTracking.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = n.b
		},
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("archived"), c.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.m.less": function(e, t, s) {
			e.exports = {
				DropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp",
				dropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp"
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				i = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("dropdownTriangle"), " ").concat(e.className)
			}), "DropdownTriangle", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Envelope/index.m.less": function(e, t, s) {
			e.exports = {
				Envelope: "gsQG-L1wCCIUe8dJEOA6C",
				envelope: "gsQG-L1wCCIUe8dJEOA6C"
			}
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Envelope/index.m.less"),
				i = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("envelope"), " ").concat(e.className)
			}), "Envelope", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less": function(e, t, s) {
			e.exports = {
				CollapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI",
				collapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				i = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoArrowCollapse"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "CollapseIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less": function(e, t, s) {
			e.exports = {
				ExpandIcon: "QOwFub52NskNmv0MdMa2_",
				expandIcon: "QOwFub52NskNmv0MdMa2_"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				i = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoArrowExpand"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less": function(e, t, s) {
			e.exports = {
				LightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3",
				lightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.m.less": function(e, t, s) {
			e.exports = {
				MenuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg",
				menuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Menu/index.m.less"),
				i = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("menu"), " ").concat(e.className)
			}), "MenuIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Op/index.m.less": function(e, t, s) {
			e.exports = {
				OpIcon: "_3mrrZsVUDI2b3p1rpkjbph",
				opIcon: "_3mrrZsVUDI2b3p1rpkjbph"
			}
		},
		"./src/reddit/icons/svgs/Best/index.m.less": function(e, t, s) {
			e.exports = {
				best: "_3SejsWL-17KHAzDgcp66kT"
			}
		},
		"./src/reddit/icons/svgs/Cake/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				className: e.className,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M37.5,22.5V20h-35v15c0,1.4,1.1,2.5,2.5,2.5h30c1.4,0,2.5-1.1,2.5-2.5v0H6.2C5.6,35,5,34.5,5,33.8l0,0c0-0.7,0.6-1.2,1.2-1.2h31.3V30H6.2C5.6,30,5,29.5,5,28.8v0c0-0.7,0.6-1.2,1.2-1.2h31.3V25H6.2C5.6,25,5,24.5,5,23.8v0c0-0.7,0.6-1.2,1.2-1.2H37.5z"
			}), o.a.createElement("path", {
				d: "M22.5,6c0,1.4-1.1,2.5-2.5,2.5S17.5,7.4,17.5,6S20,0,20,0S22.5,4.6,22.5,6z"
			}), o.a.createElement("path", {
				d: "M20,15L20,15c-0.7,0-1.3-0.6-1.3-1.2v-2.5c0-0.7,0.6-1.2,1.2-1.2h0c0.7,0,1.2,0.6,1.2,1.2v2.5C21.2,14.5,20.7,15,20,15z"
			}), o.a.createElement("path", {
				d: "M22.8,11.3v2.3c0,1.4-1,2.7-2.5,2.9c-1.6,0.2-3-1.1-3-2.7v-5c0,0,0-0.1,0-0.1l-0.8-0.4c-0.9-0.4-2-0.3-2.7,0.4L2.5,18.5h35L22.8,11.3z"
			}))))
		},
		"./src/reddit/icons/svgs/ClassicPosts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("path", {
				d: "M1.75,6.6V1.75h16.5V6.6Zm0,5.83V7.57h16.5v4.86Zm0,5.82V13.4h16.5v4.85Z"
			}))
		},
		"./src/reddit/icons/svgs/CompactPosts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("path", {
				d: "M1.75,5V1.75h16.5V5Zm0,4.43V6.18h16.5v3.2Zm0,8.87v-3.2h16.5v3.2Zm0-4.43v-3.2h16.5v3.2Z"
			}))
		},
		"./src/reddit/icons/svgs/Controversial/index.m.less": function(e, t, s) {
			e.exports = {
				controversial: "_2Yq1cYyaAnws8U-1N7H_f0"
			}
		},
		"./src/reddit/icons/svgs/Flag/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("polygon", {
				fill: "inherit",
				points: "0 20 20 20 20 0 0 0",
				opacity: "0"
			}), o.a.createElement("path", {
				fill: "inherit",
				d: "M11.71875,3.14525 C14.60125,1.54375 18.75025,3.48025 18.75025,3.48025 L18.75025,13.55475 C18.75025,13.55475 14.86875,11.81975 11.71875,13.21975 C8.70525,14.55925 4.68725,12.88475 4.68725,12.88475 L4.68725,2.81025 C4.68725,2.81025 8.70525,4.81925 11.71875,3.14525 Z M2.75,18.75 C2.232,18.75 2,18.3305 2,17.8125 L2,2.8125 C2,2.2945 2.232,1.875 2.75,1.875 C3.268,1.875 3.5,2.2945 3.5,2.8125 L3.5,17.8125 C3.5,18.3305 3.268,18.75 2.75,18.75 Z"
			}))
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/Hot/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_14JCwSw7Z9KVa3DJCOcJWg"
			}
		},
		"./src/reddit/icons/svgs/LargePosts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("path", {
				d: "M1.75,9.38V1.75h16.5V9.38Zm0,8.87V10.62h16.5v7.63Z"
			}))
		},
		"./src/reddit/icons/svgs/New/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_14d58ZMXxV3Byed78nS3DU"
			}
		},
		"./src/reddit/icons/svgs/Rising/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3k-hLnRWy2KVi9lKrKSut"
			}
		},
		"./src/reddit/icons/svgs/Save/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_2qT9eltTv4vv9GxxEZqvc0"
			}
		},
		"./src/reddit/icons/svgs/Top/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3rlT9yoNCxQn9Q2EW5FjjE"
			}
		},
		"./src/reddit/icons/svgs/Top/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Top/index.m.less"),
				i = s.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				fill: "inherit",
				d: "M1.25,17.5 L1.25,7.5 L6.25,7.5 L6.25,17.5 L1.25,17.5 Z M12.49995,17.5001 L7.49995,17.5001 L7.49995,5.0001 L4.99995,5.0001 L9.99995,0.0006 L14.99995,5.0001 L12.49995,5.0001 L12.49995,17.5001 Z M13.75,17.5 L13.75,12.5 L18.75,12.5 L18.75,17.5 L13.75,17.5 Z"
			})))
		},
		"./src/reddit/icons/svgs/Twitter/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);

			function r(e) {
				return o.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 400 400",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					fill: "inherit",
					d: "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
				}))
			}
		},
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, s) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/layout/row/RightAlign/index.m.less"),
				r = s.n(o);
			t.a = n.a.div("rightAligned", r.a)
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, s) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				c = s.n(i);
			t.a = Object(r.a)(e => o.a.createElement("div", {
				className: Object(a.a)(c.a.expandedCenterContainer, e.className)
			}, o.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), o.a.createElement("div", {
				className: c.a.center
			}, Array.isArray(e.children) && e.children[1]), o.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/pages/ErrorPages/index.m.less": function(e, t, s) {
			e.exports = {
				primaryRouterLink: "WPSTJCepGLEWZl2fETrUM",
				container: "_3pfk0xbr5atzL7KT8pXEZG",
				title: "_3uo9iClHghoc_hoxzdgipi"
			}
		},
		"./src/reddit/pages/ErrorPages/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/reddit/controls/Button/index.tsx"),
				i = s("./src/reddit/pages/ErrorPages/index.m.less"),
				c = s.n(i);
			const d = e => {
					let {
						message: t
					} = e;
					return r.a.createElement("div", {
						className: c.a.container
					}, r.a.createElement("h3", {
						className: c.a.title
					}, t || n.fbt._("Sorry, there doesn't seem to be anything here.", null, {
						hk: "3VvHek"
					})), r.a.createElement(a.h, {
						className: c.a.primaryRouterLink,
						to: "/"
					}, n.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				},
				l = e => {
					let {
						message: t
					} = e;
					return r.a.createElement("div", {
						className: c.a.container
					}, r.a.createElement("h3", {
						className: c.a.title
					}, t || n.fbt._("Sorry, You do not have permission to view this page.", null, {
						hk: "4lRbHD"
					})), r.a.createElement(a.h, {
						className: c.a.primaryRouterLink,
						to: "/"
					}, n.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				}
		},
		"./src/reddit/pages/ProfileComments/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.regexp.search.js");
			var n = s("./node_modules/lodash/fromPairs.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/extractQueryParams/index.ts"),
				m = s("./src/lib/makeListingKey/index.ts"),
				p = s("./src/reddit/actions/pages/profileComments.ts"),
				u = s("./src/reddit/actions/pages/profileShared.ts"),
				b = s("./src/reddit/components/ContentGate/index.tsx"),
				h = s("./src/reddit/components/EmptyProfile/index.ts"),
				x = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				g = s("./src/reddit/components/JumpToContent/index.tsx"),
				f = s("./src/reddit/components/LayoutNavigation/index.tsx"),
				v = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./src/lib/classNames/index.ts")),
				y = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				O = s("./src/lib/lessComponent.tsx"),
				E = s("./src/reddit/components/ClassicPost/index.tsx"),
				w = s("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				C = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				_ = s("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				j = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				k = s("./src/reddit/constants/postLayout.ts"),
				S = s("./src/reddit/contexts/PageLayer/index.tsx"),
				P = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				I = s("./src/reddit/selectors/comments.ts"),
				N = s("./src/reddit/components/ProfileCommentList/ListItem.m.less"),
				T = s.n(N);

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var M = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const R = O.a.wrapped(E.default, "ClassicPost", T.a),
				A = O.a.wrapped(C.a, "OverviewCommentPost", T.a),
				B = Object(S.t)({
					currentProfileName: S.h,
					pageLayer: e => e
				}),
				F = Object(c.c)({
					comment: (e, t) => {
						let {
							itemId: s
						} = t;
						return Object(I.n)(e, {
							commentId: s
						})
					},
					profileName: (e, t) => {
						let {
							currentProfileName: s
						} = t;
						if (s) return ((e, t) => {
							const {
								users: s
							} = e, n = t.toLowerCase(), o = s.models[n];
							return o ? o.username : void 0
						})(e, s)
					}
				});
			var D = B(Object(i.b)(F)(e => {
				const {
					comment: t,
					itemId: s,
					isFirstInCommentList: n,
					isLastInCommentList: o,
					layout: r,
					profileName: i,
					allowModToolsUnderComments: c
				} = e;
				if (r === k.g.Compact) return a.a.createElement(w.a, e);
				const {
					height: d,
					width: l
				} = e, m = M(e, ["height", "width"]);
				return a.a.createElement(H, m, n && a.a.createElement(_.a, {
					isFirst: !0
				}, r === k.g.Large ? a.a.createElement(R, L({}, e, {
					availableWidth: l,
					inSubredditOrProfile: !1,
					isOverlay: !1
				})) : a.a.createElement(A, L({}, e, {
					commentId: s,
					profileName: i
				}))), a.a.createElement(_.a, {
					isLast: o
				}, a.a.createElement(j.a, {
					commentId: s,
					depth: t.parentId ? 1 : 0,
					isFirst: !0,
					isLast: !0,
					key: s,
					profileName: i,
					showModTools: c
				})))
			}));
			const H = Object(y.a)(e => a.a.createElement("div", {
				children: e.children,
				className: Object(v.a)(T.a.backgroundMargin, {
					[T.a.isFirstInCommentList]: e.isFirstInCommentList,
					[T.a.isLastInCommentList]: e.isLastInCommentList
				}),
				style: {
					background: Object(P.e)(e)
				}
			}));
			var W = s("./src/reddit/components/ProfileItemList/index.tsx"),
				U = s("./node_modules/lodash/noop.js"),
				V = s.n(U),
				G = s("./src/reddit/actions/ads/index.ts"),
				z = s("./src/reddit/actions/comment/list.ts"),
				K = s("./src/reddit/actions/post.ts"),
				J = s("./src/reddit/components/TrackingHelper/index.tsx"),
				q = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				Q = s("./src/reddit/helpers/trackers/post.ts"),
				Z = s("./src/reddit/featureFlags/index.ts"),
				X = s("./src/reddit/selectors/posts.ts"),
				Y = s("./src/reddit/selectors/profileComments.ts"),
				$ = s("./src/reddit/selectors/subreddit.ts"),
				ee = s("./src/reddit/selectors/tracking.ts"),
				te = s("./src/reddit/selectors/user.ts");
			const se = Object(S.t)(),
				ne = {
					apiError: Y.a,
					apiPending: Y.b,
					currentUser: te.i,
					measureScrollFPS: Z.d.measureScrollFPS,
					layout: S.M,
					loadMore: Y.d,
					subredditsById: $.V,
					viewportDataLoaded: ee.a,
					commentsById: I.r,
					itemIds: Y.f,
					itemIdToPostId: Y.e,
					postsById: X.Q,
					estimateItemHeight: e => (e, t, s) => {
						if (s) switch (t) {
							case k.g.Medium:
								return 174;
							case k.g.Classic:
								return 129;
							case k.g.Compact:
								return 120;
							default:
								return 140
						}
						switch (t) {
							case k.g.Medium:
							case k.g.Classic:
								return 90;
							case k.g.Compact:
								return 80;
							default:
								return 90
						}
					}
				},
				oe = Object(c.c)(ne),
				re = Object(i.b)(oe, e => ({
					onBottomViewed: (t, s) => e(Object(z.c)(t, s)),
					adBrandSafetyStatusReceived: t => {
						e(G.d({
							isViewSafe: t
						}))
					},
					openPost: t => e(Object(K.K)(t)),
					fireAdPixelsOfType: V.a,
					trackOnPostEnteredViewport: V.a
				}), (e, t, s) => Object.assign({}, e, t, s, {
					postClickEvent: Q.f,
					postComponentForLayout: q.b
				}));

			function ae() {
				return (ae = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ie = e => a.a.createElement(D, ae({}, e, {
					allowModToolsUnderComments: !0
				})),
				ce = (e => Object(J.c)(se(re(e))))(W.a);
			var de = e => a.a.createElement(ce, ae({}, e, {
					itemComponent: ie
				})),
				le = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				me = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				pe = s("./src/reddit/helpers/trackers/screenview.ts"),
				ue = s("./src/reddit/layout/page/Listing/index.tsx"),
				be = s("./src/reddit/models/ContentGate.ts"),
				he = s("./src/reddit/pages/ErrorPages/index.tsx"),
				xe = s("./src/reddit/selectors/profile.ts");

			function ge() {
				return (ge = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const fe = Object(S.t)(),
				ve = Object(c.a)(S.B, te.T, (e, t) => {
					let {
						location: s
					} = t;
					return o()([...Object(l.a)(s.search)])
				}, S.M, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.profileName
				}, (e, t) => {
					let {
						match: s
					} = t;
					return Object(xe.j)(e, {
						profileName: s.params.profileName
					})
				}, te.G, (e, t) => {
					let {
						match: s
					} = t;
					return Object(te.f)(e, d.Tb + s.params.profileName)
				}, (e, t, s, n, o, r, a, i) => {
					const {
						sort: c,
						t: d
					} = Object(u.b)(s), l = Object(m.a)("u_".concat(o), c, s);
					return {
						contentGateInfo: i,
						over18Prefs: t,
						isLoggedIn: a,
						isOwnProfile: e,
						isProfileNSFW: !!r && r.isNSFW,
						layout: n,
						listingKey: l,
						profileName: o,
						sort: c,
						timeSort: d
					}
				}),
				ye = Object(i.b)(ve, (e, t) => ({
					onLoadMore: () => e(Object(p.g)()),
					onLayoutChange: () => e(Object(p.h)(Object.assign({}, t.match, {
						queryParams: o()([...Object(l.a)(t.location.search)])
					})))
				}));
			t.default = fe(ye(e => {
				const {
					contentGateInfo: t,
					over18Prefs: s,
					isLoggedIn: n,
					isOwnProfile: o,
					isProfileNSFW: r,
					listingKey: i,
					onLoadMore: c,
					onLayoutChange: l,
					pageLayer: m,
					profileName: p,
					sort: u,
					timeSort: v
				} = e;
				if (!p || !m) return null;
				if (t && t.profileDeleted) return a.a.createElement(b.a, {
					contentGateType: be.a.ProfileDeleted,
					profileName: p
				});
				if (t && t.profileSuspended) return a.a.createElement(b.a, {
					contentGateType: be.a.ProfileSuspended,
					profileName: p
				});
				if (451 === m.status || t && t.profileBlockedForLegalReason) return a.a.createElement(b.a, {
					contentGateType: be.a.ProfileBlockedForLegalReason,
					profileName: p
				});
				if (403 === m.status) return a.a.createElement(he.a, null);
				if (404 === m.status) return a.a.createElement(b.a, {
					contentGateType: be.a.ProfileDoesNotExist,
					profileName: p
				});
				const y = p.toLowerCase(),
					O = "/user/".concat(p, "/comments/"),
					E = {
						listingKey: i,
						listingName: y
					};
				if (!s && r && !o) return a.a.createElement(b.a, {
					contentGateType: be.a.Nsfw,
					subredditName: p
				});
				const w = !n,
					C = {
						sort: u,
						baseUrl: O,
						sortOptions: d.sb,
						timeSort: v
					};
				return a.a.createElement(ue.a, {
					className: e.className,
					fitPageToContent: !0,
					contentNavBar: a.a.createElement(a.a.Fragment, null, a.a.createElement(le.a, {
						profileName: p
					}), !w && a.a.createElement(f.a, C)),
					content: a.a.createElement(a.a.Fragment, null, w && a.a.createElement(x.a, C), a.a.createElement(g.a, null), a.a.createElement(de, {
						listingKey: i,
						listingName: y,
						listingViewed: (e, t) => Object(pe.j)(i, u, t, e, v),
						noPostsComponent: () => a.a.createElement(h.b, {
							profileName: p,
							timeSort: v
						}),
						onLoadMore: c,
						onTryAgain: l,
						inSubredditOrProfile: !1
					})),
					sidebar: a.a.createElement(me.a, ge({}, E, {
						profileName: p
					}))
				})
			}))
		},
		"./src/reddit/selectors/experiments/adSidebar.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const t = Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: n.a
				});
				return !!t && !Object(n.bc)(t)
			}
		},
		"./src/reddit/selectors/experiments/publicAwarding.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const t = Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: n.tb
				});
				return Object(n.bc)(t) ? void 0 : t
			}
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = (e, t) => {
				let {
					listingKey: s
				} = t;
				return e.tracking.viewportDataLoaded[s]
			}
		}
	}
]);
//# sourceMappingURL=ProfileComments.389cee6174287959033a.js.map