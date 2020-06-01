// https://www.redditstatic.com/desktop2x/ProfileComments.69643df2055516ba6c21.js
// Retrieved at 6/1/2020, 3:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileComments", "Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit", "reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddit-compo~0e38b796", "ChatPost~ModQueuePages", "ProfilePosts~ProfileSnoobuilder", "reddit-components-ContentGate"], {
		"./node_modules/lodash/_baseFindKey.js": function(e, t) {
			e.exports = function(e, t, n) {
				var s;
				return n(e, (function(e, n, o) {
					if (t(e, n, o)) return s = n, !1
				})), s
			}
		},
		"./node_modules/lodash/findKey.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseFindKey.js"),
				o = n("./node_modules/lodash/_baseForOwn.js"),
				r = n("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, t) {
				return s(e, r(t, 3), o)
			}
		},
		"./node_modules/lodash/flatMap.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseFlatten.js"),
				o = n("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return s(o(e, t), 1)
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var s = n("./node_modules/lodash/toString.js"),
				o = 0;
			e.exports = function(e) {
				var t = ++o;
				return s(e) + t
			}
		},
		"./src/higherOrderComponents/withClickTracking.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "d", (function() {
				return b
			}));
			var s = n("./node_modules/lodash/omit.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./src/reddit/components/TrackingHelper/index.tsx"),
				c = n("./src/reddit/selectors/telemetry.ts");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const l = (e, t, n) => (function() {
				let s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
				return o => {
					const r = b(o.target, o.currentTarget);
					u(o.target, o.currentTarget, p.anchors) ? r && t && e(t(n, r)) : r && t && e(e => Object.assign({}, t(n, r)(e), {
						actionInfo: Object(c.previousPageActionInfo)(e)
					})), u(o.target, o.currentTarget, p.anchorsAndButtons) && s(o)
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
							eventFactory: n,
							clickTrackingId: s
						} = this.props;
						return a.a.createElement(e, d({}, o()(this.props, "sendEvent", "eventFactory", "clickTrackingId"), {
							afterClickTracking: l(t, n, s)
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
				u = (e, t, n) => !n.includes(e.tagName) && (e === t || !!e.parentElement && u(e.parentElement, t, n)),
				b = (e, t) => {
					const n = e.dataset.clickId;
					return n || (e === t ? null : !!e.parentElement && b(e.parentElement, t))
				}
		},
		"./src/lib/intersectionObserver/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			let s;
			const o = new Map,
				r = new Map;
			"undefined" != typeof window && (n("./node_modules/intersection-observer/intersection-observer.js"), s = new IntersectionObserver(e => {
				e.forEach(e => {
					const t = e.target,
						n = e.intersectionRatio > 0;
					if (n !== !!r.get(t)) {
						r.set(t, n);
						const s = o.get(t);
						if (s) {
							s(e, n && !!r.get(t))
						}
					}
				})
			}, {
				threshold: [.001]
			}));
			const a = (e, t) => {
					try {
						o.set(e, t), s && s.observe(e)
					} catch (n) {
						0
					}
				},
				i = e => {
					try {
						o.delete(e), s && s.unobserve(e)
					} catch (t) {
						0
					}
				}
		},
		"./src/lib/linkMatchers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return u
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "g", (function() {
				return E
			})), n.d(t, "h", (function() {
				return O
			}));
			n("./node_modules/core-js/modules/es6.regexp.replace.js"), n("./node_modules/core-js/modules/es6.regexp.match.js");
			var s = n("./node_modules/linkify-it/index.js"),
				o = n.n(s),
				r = n("./node_modules/tlds/index.js"),
				a = n.n(r),
				i = n("./src/lib/linkMatchers/customLinks.ts"),
				c = n("./node_modules/lodash/values.js"),
				d = n.n(c);
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
				f = o()().tlds(a.a).set({
					fuzzyIP: !0
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config).add(i.g.mention.prefix, i.g.mention.config),
				g = u.normalize;
			u.normalize = e => {
				g.call(u, e), !e.schema && e.url.startsWith("http:") && (e.url = "https:".concat(e.url.slice(5)))
			};
			const v = (e, t) => {
					return (f.match(e) || []).filter(e => {
						const n = l(e.text);
						return !n || n && t
					})
				},
				y = e => {
					return [...x.match(e) || [], ...b.match(e) || []].map(e => !l(e.text) && e.text.replace(i.a, "")).filter(e => e)
				},
				E = (e, t) => {
					const n = e.match(t);
					if (n && 1 === n.length && 0 === n[0].index && n[0].lastIndex === t.length) return n[0]
				},
				O = e => {
					const t = u.match(e);
					if (t && 1 === t.length && 0 === t[0].index) {
						const n = t[0];
						return n.lastIndex === e.length ? n : ((e, t) => {
							const n = e.substring(t.lastIndex);
							if (/.*\/\/.*\/.*/.test(t.url) && /^(\?|\!)+$/.test(n)) return t.lastIndex += n.length, t.url += n, t
						})(e, n)
					}
				}
		},
		"./src/lib/loginHref/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				o = n("./node_modules/history/esm/history.js");
			t.a = (e, t, n) => {
				const r = Object(o.e)(e),
					a = encodeURIComponent("".concat(t).concat(r));
				return "".concat(s.a.accountManagerOrigin).concat(n || "/login", "?dest=").concat(a)
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/AdLinkWrapper/index.m.less"),
				o = n.n(s);
			const r = n("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", o.a);
			t.a = r
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, n) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				i = n("./src/reddit/components/CallToActionButton/index.m.less"),
				c = n.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
				}
				return n
			};
			t.a = e => {
				var {
					className: t
				} = e, n = l(e, ["className"]);
				return o.a.createElement(a.a, d({
					className: Object(r.a)(t, c.a.CallToActionButton, {
						[c.a.mNotCardView]: n.isNotCardView
					})
				}, n))
			}
		},
		"./src/reddit/components/ClassicPost/Placeholder.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/PostLeftRail/index.tsx"),
				d = n("./src/reddit/components/VerticalVotes/votes.tsx"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				p = n("./src/reddit/models/Vote/index.ts"),
				u = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				b = n.n(u),
				h = n("./src/reddit/components/ClassicPost/placeholder.m.less"),
				x = n.n(h);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const g = Object(l.t)(),
				v = Object(a.c)({
					isFakeSubreddit: l.x
				}),
				y = Object(r.b)(v),
				E = e => {
					const t = {
						interactive: !1,
						voteState: p.a.notVoted
					};
					return o.a.createElement("div", {
						className: Object(i.a)(e.className, x.a.emptyVerticalVotes)
					}, o.a.createElement(d.d, f({
						key: "u"
					}, t)), e.children, o.a.createElement(d.c, f({
						key: "d"
					}, t)))
				},
				O = () => o.a.createElement(E, null, o.a.createElement("div", {
					className: x.a.emptyScore,
					key: "s"
				}));
			t.b = g(y(e => o.a.createElement("div", {
				className: Object(i.a)(e.className, b.a.classicPostStyles, b.a.classicAndCompactPlaceholderStyles)
			}, o.a.createElement(c.b, null, o.a.createElement(O, null)), o.a.createElement("div", {
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
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "renderMedia", (function() {
				return U
			})), n.d(t, "SearchResultsClassicPost", (function() {
				return z
			}));
			n("./node_modules/core-js/modules/es6.regexp.replace.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/config.ts"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/getShortenedLink.ts"),
				d = n("./src/reddit/components/AdLinkWrapper/index.tsx"),
				l = n("./src/reddit/components/CallToActionButton/index.tsx"),
				m = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				p = n("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				u = n("./src/reddit/components/ExpandoButton/index.tsx"),
				b = n("./src/reddit/components/Flatlist/index.tsx"),
				h = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				x = n("./src/reddit/components/ModModeReports/index.tsx"),
				f = n("./src/reddit/components/ModModeReports/helpers.ts"),
				g = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				v = n("./src/reddit/components/PostContainer/index.tsx"),
				y = n("./src/reddit/components/PostMedia/index.tsx"),
				E = n("./src/reddit/components/PostMeta/index.tsx"),
				O = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				w = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				C = n("./src/reddit/components/PostTitle/index.tsx"),
				_ = n("./src/reddit/components/PostTopMeta/index.tsx"),
				k = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				j = n("./src/reddit/models/Media/index.ts"),
				P = n("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				S = n("./src/reddit/connectors/ClassicPost/index.tsx"),
				I = n("./src/reddit/connectors/ClassicPost/searchResults.tsx"),
				N = n("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				T = n("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				L = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				M = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				R = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				A = n.n(R),
				B = n("./src/reddit/components/ClassicPost/index.m.less"),
				F = n.n(B);

			function D() {
				return (D = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const H = 16;
			class W extends o.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						className: e,
						currentUser: t,
						handleVote: n,
						isExpanded: s,
						isMeta: i,
						inSubredditOrProfile: y,
						eventFactory: S,
						first: I,
						flairStyleTemplate: R,
						formatTitle: B,
						isCheckboxSelected: W,
						isCurrentUserProfilePost: V,
						isFrontpage: G,
						isLoggedIn: z,
						isOverlay: K,
						language: J,
						moderatorPermissions: q,
						modModeEnabled: Q,
						onClickPost: Z,
						onIgnoreReports: Y,
						onOpenReportsDropdown: X,
						poll: $,
						post: ee,
						redditStyle: te,
						scrollerItemRef: ne,
						showBulkActionCheckbox: se,
						showEditFlair: oe,
						showMedia: re,
						subredditOrProfile: ae,
						toggleCheckbox: ie,
						userIsOp: ce
					} = this.props, de = te ? void 0 : R, le = this.props.crosspost || void 0, me = Object(L.a)(q), pe = Object(N.a)(q), ue = Object(T.a)(q), be = Q && L.a, he = !!ee.media && ee.media.type === j.n.RTJSON, xe = ce && he, fe = y && !re, ge = !!ee.media && Object(j.B)(ee.media), ve = {
						flairStyleTemplate: de,
						post: ee,
						inSubredditOrProfile: y,
						isCurrentUserProfilePost: V,
						isOverlay: K,
						shouldShowSubscribeButton: !(G && z),
						subredditOrProfile: ae,
						language: J
					}, ye = o.a.createElement(v.a, {
						className: Object(a.a)(A.a.classicPostStyles, F.a.postContainer, Object(M.a)(this.props), I ? F.a.mFirst : void 0, e),
						isOverlay: K,
						style: Object.assign({}, Object(M.d)(this.props), Object(M.b)(this.props.flairStyleTemplate)),
						post: ee,
						onClick: Z,
						eventFactory: S
					}, o.a.createElement(w.a, {
						model: ee,
						handleVote: n,
						showBulkActionCheckbox: se,
						isCheckboxSelected: W,
						toggleCheckbox: ie,
						flairStyleTemplate: de,
						redditStyle: te,
						subreddit: ae
					}), o.a.createElement(g.a, {
						"data-click-id": "background",
						flairStyleTemplate: de
					}, o.a.createElement(p.a, {
						className: F.a.eventMeta,
						post: ee,
						language: J
					}), o.a.createElement("div", {
						className: F.a.mainBody
					}, o.a.createElement("div", {
						className: fe ? F.a.expandoContainer : F.a.thumbnailContainer
					}, !fe && o.a.createElement(P.a, {
						className: F.a.classicThumbnail,
						crosspost: le && ee,
						isMeta: i,
						post: le || ee,
						redditStyle: te,
						templatePlaceholderImage: de && de.postPlaceholderImage,
						removeLink: ge
					}), o.a.createElement(u.a, {
						crosspost: le,
						className: F.a.rightExpando,
						isExpanded: !!s,
						post: ee,
						useMediaIcons: !1
					})), o.a.createElement("div", {
						className: F.a.content,
						"data-click-id": "body",
						style: {
							paddingBottom: "".concat(H, "px")
						}
					}, o.a.createElement(C.c, {
						className: $ ? F.a.titleWithPoll : void 0,
						format: B,
						poll: $,
						post: ee,
						redditStyle: te,
						size: C.b.Medium,
						titleColor: de && de.postTitleColor,
						isOverlay: K
					}, ee.source && !le && o.a.createElement(k.a, {
						href: ee.source.url,
						isSponsored: ee.isSponsored,
						postId: ee.id,
						source: ee.source
					}, Object(c.a)(ee))), o.a.createElement(E.a, D({
						key: "PostMeta"
					}, ve)), Q && me && Object(f.c)(ee) && o.a.createElement(x.a, {
						onIgnoreReports: Y,
						reportable: ee
					}), o.a.createElement("div", {
						className: F.a.spacer
					}), ee.source && ee.source.url && ee.isSponsored && o.a.createElement(d.a, {
						className: F.a.adLinkWrapper
					}, o.a.createElement(k.a, {
						href: ee.source.url.replace(r.a.redditUrl, ""),
						isSponsored: ee.isSponsored,
						postId: ee.id,
						source: ee.source
					}, ee.source.displayText), ee.callToAction && o.a.createElement(l.a, {
						href: ee.source.url.replace(r.a.redditUrl, ""),
						isSponsored: ee.isSponsored,
						postId: ee.id,
						source: ee.source
					}, ee.callToAction)), o.a.createElement("div", {
						className: F.a.flatlistContainer
					}, o.a.createElement(u.a, {
						className: F.a.leftExpando,
						crosspost: le,
						isExpanded: !!s,
						post: ee,
						useMediaIcons: !1
					}), o.a.createElement(m.a, {
						className: F.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: de,
						model: ee,
						onVoteClick: n
					}), o.a.createElement(b.a, {
						className: F.a.flatlistSeparator
					}), o.a.createElement(b.c, {
						className: F.a.flatlist,
						currentUser: t,
						hasModFlairPerms: pe,
						hasModPostPerms: me,
						hasModFullPerms: ue,
						isOverlay: !!K,
						language: J,
						modModeEnabled: Q,
						onIgnoreReports: Y,
						onOpenReportsDropdown: X,
						post: ee,
						showEditPost: xe,
						showEditFlair: oe,
						tooltipType: K ? _.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(O.h)({
							editPost: !be,
							save: !be,
							hide: !be,
							report: !be
						})
					})), o.a.createElement(h.d, {
						postId: ee.id
					}))), U(ee, ne, s)));
					return o.a.createElement(o.a.Fragment, null, ye)
				}
			}
			const U = (e, t, n) => n ? e.crosspostRootId ? o.a.createElement("div", {
					className: F.a.crosspostMediaWrapper
				}, V(e, t)) : V(e, t) : null,
				V = (e, t) => o.a.createElement(y.a, {
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
				G = Object(i.a)(W),
				z = Object(I.a)(G);
			t.default = Object(S.a)(G)
		},
		"./src/reddit/components/ClassicPost/placeholder.m.less": function(e, t, n) {
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
		"./src/reddit/components/CommentBodyExpander/index.m.less": function(e, t, n) {
			e.exports = {
				collapsedCommentWrapper: "_3eqiPvSIRa-NZBdZNmskLn",
				collapsedCommentLine: "_3w5mzp5LqE702onvC_Wok3",
				rtjCollapsed: "_1J7xT7G-fgDlzIqRgaBrrB",
				seeMore: "_3NPaMDmW2g_XhEdxfn6inI"
			}
		},
		"./src/reddit/components/CommentContainer/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/higherOrderComponents/withClickTracking.tsx");
			const d = Object(a.c)({
					clickTrackingId: (e, t) => {
						let {
							comment: n
						} = t;
						return n.id
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
						className: n,
						comment: s,
						onClick: r,
						style: a
					} = this.props;
					return o.a.createElement("div", {
						className: Object(i.a)(n, "Comment ".concat(s.id)),
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: t => {
							!this.cancelClick && t.button < 2 && e(() => r && r(t, s))(t)
						},
						style: a
					}, t)
				}
			}
			t.a = l(Object(c.c)(m))
		},
		"./src/reddit/components/CommentModModeDropdown/index.m.less": function(e, t, n) {
			e.exports = {
				StyledDropdown: "_1PC9CIsUh5fq8cQdx3iMRr",
				styledDropdown: "_1PC9CIsUh5fq8cQdx3iMRr",
				Show: "BmpGQCO3oZBeUMzSaC5yX",
				show: "BmpGQCO3oZBeUMzSaC5yX"
			}
		},
		"./src/reddit/components/CommentModModeDropdown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/comment/index.ts"),
				c = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/controls/Dropdown/index.tsx"),
				m = n("./src/reddit/helpers/trackers/modTools.ts"),
				p = n("./src/reddit/selectors/tooltip.ts"),
				u = n("./node_modules/fbt/lib/FbtPublic.js"),
				b = n("./src/lib/lessComponent.tsx"),
				h = n("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx"),
				x = n("./src/reddit/icons/svgs/Show/index.tsx"),
				f = n("./src/reddit/components/CommentModModeDropdown/index.m.less"),
				g = n.n(f);
			const v = b.a.wrapped(x.a, "Show", g.a);
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
			const E = b.a.wrapped(l.a, "StyledDropdown", g.a),
				O = Object(a.c)({
					isDropdownOpen: (e, t) => {
						let {
							tooltipId: n
						} = t;
						return Object(p.b)(n)(e)
					}
				}),
				w = Object(r.b)(O, (e, t) => {
					let {
						comment: n
					} = t;
					return {
						onApproveComment: () => e(Object(i.H)(n.id)),
						onLockComment: () => e(Object(i.X)(n.id)),
						onRemoveComment: () => e(Object(i.cb)(n.id, !1)),
						onSpamComment: () => e(Object(i.cb)(n.id, !0)),
						onShowComment: () => e(Object(i.Y)(n.id))
					}
				}),
				C = Object(c.a)(E),
				_ = w(Object(d.c)(e => {
					const {
						comment: t,
						isDropdownOpen: n,
						onApproveComment: s,
						onLockComment: r,
						onRemoveComment: a,
						onSpamComment: i,
						onShowComment: c,
						sendEvent: d,
						tooltipId: l
					} = e;
					return o.a.createElement(C, {
						isOpen: n,
						tooltipId: l
					}, o.a.createElement(y, {
						onApproveComment: () => {
							s(), d(Object(m.c)("approve", t.id))
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
		"./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less": function(e, t, n) {
			e.exports = {
				DropdownRow: "_2LNy1r5iuFMrf0PLh4UdV-",
				dropdownRow: "_2LNy1r5iuFMrf0PLh4UdV-",
				DeleteIcon: "_1iKLz-XMCxtewhk3nusoiP",
				deleteIcon: "_1iKLz-XMCxtewhk3nusoiP",
				PencilIcon: "_1bLoeor2W-QStNmx_KRhZL",
				pencilIcon: "_1bLoeor2W-QStNmx_KRhZL",
				ReportIcon: "_2cI15gf51WKaEHlpw-HjhG",
				reportIcon: "_2cI15gf51WKaEHlpw-HjhG",
				SavedIcon: "_4rjQO_f0JDhjAgz1a8hLR",
				savedIcon: "_4rjQO_f0JDhjAgz1a8hLR",
				SaveIcon: "XOeF-g_i5E2Oaxwt9wDdS",
				saveIcon: "XOeF-g_i5E2Oaxwt9wDdS",
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
		"./src/reddit/components/Comments/Comment/TopMeta/index.m.less": function(e, t, n) {
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
				CrowdControlText: "Eoj3NCGwtl7hQcr7Rnc0N",
				crowdControlText: "Eoj3NCGwtl7hQcr7Rnc0N",
				metaText: "_3_GZIIN1xcMEC5AVuv4kfa"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/tooltip.ts"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/constants/index.ts"),
				m = n("./src/lib/humanizeDateTime/index.ts"),
				p = n("./src/lib/lessComponent.tsx"),
				u = n("./src/lib/timeAgo/index.ts"),
				b = n("./src/reddit/components/AuthorLink/index.tsx"),
				h = n("./src/reddit/components/AwardBadges/index.tsx"),
				x = n("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				f = n("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				g = n("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				v = n("./src/reddit/featureFlags/index.ts"),
				y = n("./src/reddit/selectors/economics.ts"),
				E = n("./src/reddit/components/Economics/TopTippers/Icon/index.tsx"),
				O = n("./src/reddit/components/Economics/TopTippers/CommentUsername/index.m.less"),
				w = n.n(O);
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
			var _ = Object(a.b)(() => Object(i.c)({
					post: (e, t) => {
						let {
							contentId: n
						} = t;
						return e.posts.models[n]
					},
					tippers: (e, t) => {
						if (v.d.spTopTippers(e)) return Object(y.y)(e, t)
					}
				}))((function(e) {
					if (e.tippers && e.tippers.allTippers.has(e.userId)) {
						const t = e.tippers.topTippers.ranking[e.userId] || 5,
							n = r.a.cloneElement(r.a.Children.only(e.children), {
								style: C(t)
							});
						return r.a.createElement("div", {
							className: w.a.container
						}, r.a.createElement(E.a, {
							className: w.a.badge,
							creatorId: e.creatorId || e.post && e.post.authorId,
							rank: t,
							subredditId: e.subredditId
						}), n)
					}
					return e.children
				})),
				k = n("./src/reddit/components/Flair/index.tsx"),
				j = n("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				P = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				S = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				I = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				N = n("./src/reddit/components/PostTopMeta/index.tsx"),
				T = n("./src/reddit/helpers/isRemoved.ts"),
				L = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				M = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				R = n("./src/reddit/actions/comment/index.ts"),
				A = n("./src/reddit/models/Comment/index.ts"),
				B = n("./src/reddit/models/Flair/index.ts"),
				F = n("./src/reddit/icons/fonts/Admin/index.tsx"),
				D = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				H = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				W = n("./src/reddit/icons/fonts/helpers.tsx"),
				U = n("./src/reddit/icons/fonts/Op/index.m.less"),
				V = n.n(U);
			var G = p.a.wrapped(e => r.a.createElement("i", {
					className: "".concat(Object(W.b)("op"), " ").concat(e.className),
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, r.a.createElement(W.a, null, e.desc)), "OpIcon", V.a),
				z = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				K = n("./src/reddit/icons/fonts/Report/index.tsx"),
				J = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				q = n("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				Q = n("./src/reddit/icons/svgs/Cake/index.tsx"),
				Z = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				Y = n("./src/reddit/controls/MetaData/index.tsx"),
				X = n("./src/reddit/selectors/subreddit.ts"),
				$ = n("./src/reddit/selectors/userFlair.ts"),
				ee = n("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				te = n.n(ee);

			function ne() {
				return (ne = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var se = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
				}
				return n
			};
			const oe = p.a.wrapped(k.b, "RightPositionedAuthorFlair", te.a),
				re = p.a.wrapped(F.a, "AdminIcon", te.a),
				ae = p.a.wrapped(D.a, "Approve", te.a),
				ie = p.a.wrapped(H.a, "Lock", te.a),
				ce = p.a.div("AdminEmeritus", te.a),
				de = p.a.wrapped(q.a, "Automoderator", te.a),
				le = p.a.wrapped(Q.a, "CakeIcon", te.a),
				me = p.a.wrapped(Z.a, "Moderator", te.a),
				pe = p.a.wrapped(z.a, "Remove", te.a),
				ue = p.a.wrapped(K.a, "Report", te.a),
				be = p.a.wrapped(J.a, "Spam", te.a),
				he = p.a.wrapped(G, "Op", te.a),
				xe = p.a.wrapped(F.a, "Contractor", te.a),
				fe = p.a.a("MetaLink", te.a),
				ge = p.a.wrapped(Y.a, "EditedText", te.a),
				ve = p.a.wrapped(Y.a, "StickiedText", te.a),
				ye = p.a.span("DeletedText", te.a),
				Ee = p.a.wrapped(Y.a, "MetaSeparator", te.a),
				Oe = p.a.wrapped(Y.a, "CrowdControlText", te.a),
				we = p.a.wrapped(P.b, "AuthorHoverCard", te.a),
				Ce = p.a.a("RemovalReason", te.a),
				_e = p.a.wrapped(x.b, "Component", te.a),
				ke = e => (t, n) => {
					let {
						comment: s,
						renderedInOverlay: o
					} = n;
					return "".concat(e).concat(s.id).concat(o ? "inOverlay" : "")
				},
				je = () => s.fbt._("Reddit admin, speaking officially", null, {
					hk: "3vg8wE"
				}),
				Pe = () => s.fbt._("Cake day", null, {
					hk: "1xptSi"
				}),
				Se = () => s.fbt._("Reddit admin emeritus", null, {
					hk: "1Md5AV"
				}),
				Ie = e => s.fbt._("Moderator of {subredditDisplayText}, speaking officially", [s.fbt._param("subredditDisplayText", e)], {
					hk: "3pHm3n"
				}),
				Ne = () => s.fbt._("Original Poster", null, {
					hk: "3DqK8z"
				}),
				Te = () => s.fbt._("Reddit contractor", null, {
					hk: "3APwEh"
				}),
				Le = Object(a.b)(() => Object(i.c)({
					adminTooltipId: ke("CommentTopMeta--Admin--"),
					cakedayTooltipId: ke("CommentTopMeta--cakeday--"),
					adminEmeritusTooltipId: ke("CommentTopMeta--AdEm--"),
					automodTooltipId: ke("CommentTopMeta--Automod--"),
					approveTooltipId: ke("CommentTopMeta--Approve--"),
					createdTooltipId: ke("CommentTopMeta--Created--"),
					contractorTooltipId: ke("CommentTopMeta--Contractor--"),
					gildedTooltipId: ke("CommentTopMeta--Gold--"),
					lockedTooltipId: ke("CommentTopMeta--Locked--"),
					modTooltipId: ke("CommentTopMeta--Mod--"),
					opTooltipId: ke("CommentTopMeta--OP--"),
					removeTooltipId: ke("CommentTopMeta--Remove--"),
					reportTooltipId: ke("CommentTopMeta--Report--"),
					spamTooltipId: ke("CommentTopMeta--Spam--"),
					hasBadges: (e, t) => {
						let {
							comment: n
						} = t;
						return !!Object(y.w)(e, n.subredditId, n.authorId).length
					},
					subredditDisplayText: (e, t) => {
						const n = Object(X.H)(e, {
							commentId: t.comment.id
						});
						return n ? n.displayText : ""
					},
					topTippersEnabled: v.d.spTopTippers,
					flairPosition: (e, t) => {
						let {
							comment: n
						} = t;
						return Object($.d)(e, {
							subredditId: n.subredditId
						})
					}
				}), (e, t) => ({
					onCreatedClick: () => {
						window.addEventListener("focus", (function n() {
							((e, t, n) => {
								window.removeEventListener("focus", n), e(Object(R.N)({
									commentListNodeId: t
								})), window.setTimeout(() => e(Object(R.N)({
									commentListNodeId: t
								})), 5e3)
							})(e, t.comment.id, n)
						}))
					},
					onHideTooltip: () => e(Object(c.i)()),
					onShowTooltip: t => e(Object(c.f)({
						tooltipId: t
					})),
					openRemovalReasonModal: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(n => e(n.fetchReasonsAndOpenModal(t.comment.subredditId, [t.comment.id])))
					}
				}));
			t.a = Le(e => {
				const {
					adminEmeritusTooltipId: t,
					adminTooltipId: n,
					approveTooltipId: s,
					automodTooltipId: o,
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
					flairPosition: E,
					hasBadges: O,
					isAvatarsInCommentsEnabled: w,
					isLivestreaming: C,
					ignoreFlairPosition: _,
					ignoreLock: P,
					language: S,
					lockedTooltipId: T,
					modTooltipId: L,
					onHideTooltip: M,
					onShowTooltip: R,
					opTooltipId: F,
					openRemovalReasonModal: D,
					removeTooltipId: H,
					renderContractorBadge: W,
					renderedInOverlay: U,
					reportTooltipId: V,
					spamTooltipId: G,
					subredditDisplayText: z,
					topTippersEnabled: K
				} = e;
				if (u.isDeleted) return r.a.createElement(Me, ne({}, e, {
					className: Object(d.a)(c, te.a.container, {
						[te.a.collapsed]: m
					})
				}));
				if (m) return r.a.createElement(Re, ne({}, e, {
					className: Object(d.a)(c, te.a.container, {
						[te.a.collapsed]: m
					})
				}));
				const J = !_ && E === B.b.Left;
				return r.a.createElement("div", {
					className: Object(d.a)(c, te.a.container, {
						[te.a.collapsed]: m,
						[te.a.hasBadges]: O,
						[te.a.liveStreaming]: C
					})
				}, y && J && r.a.createElement(k.b, {
					flair: y,
					forceSmallEmojis: v
				}), !Object(A.d)(u) && r.a.createElement(_e, {
					showAddCustom: !0,
					subredditId: u.subredditId,
					userId: u.authorId,
					uniqueIdentifier: u.id
				}), r.a.createElement(we, {
					postOrComment: u,
					tooltipType: U ? N.c.Lightbox : void 0
				}, r.a.createElement(f.b, {
					ignore: Object(A.d)(u) || !!u.distinguishType && u.distinguishType !== l.A.NONE,
					subredditId: u.subredditId,
					userId: u.authorId
				}, r.a.createElement(Be, {
					comment: u,
					isLivestreaming: C,
					isStrong: !!v,
					isAuthorDeleted: Object(A.d)(u),
					topTippersEnabled: K
				}, i && i))), p && r.a.createElement(Oe, null, "Crowd Control"), p && r.a.createElement(Y.c, {
					className: te.a.metaText,
					key: "crowdControlSeparator"
				}), y && !J && r.a.createElement(oe, {
					flair: y,
					forceSmallEmojis: v
				}), !v && r.a.createElement(j.a, {
					className: te.a.publicPoints,
					contentId: u.id,
					metaSeparator: r.a.createElement(Y.c, {
						className: te.a.metaText
					}),
					subredditId: u.subredditId,
					userId: u.authorId,
					username: u.author
				}), r.a.createElement(r.a.Fragment, null, r.a.createElement(I.b, {
					commentId: u.id
				}), r.a.createElement(I.a, {
					commentId: u.id,
					commentsPageKey: b
				}), r.a.createElement(He, {
					comment: u,
					compact: v,
					adminTooltipId: n,
					adminEmeritusTooltipId: t,
					cakedayTooltipId: a,
					contractorTooltipId: x,
					language: S,
					modTooltipId: L,
					onHideTooltip: M,
					onShowTooltip: R,
					opTooltipId: F,
					renderContractorBadge: W,
					subredditDisplayText: z
				})), !v && r.a.createElement(r.a.Fragment, null, !u.isDeleted && !w && r.a.createElement(Y.b, {
					className: te.a.metaText,
					isScoreHidden: u.isScoreHidden,
					language: S,
					score: u.score
				}), !w && r.a.createElement(Y.c, {
					className: te.a.metaText,
					key: "scoreCreatedSeparator"
				}), r.a.createElement(Fe, ne({
					key: "Created"
				}, e)), u.isStickied && Ue(), u.editedAt && Ae(u.editedAt)), r.a.createElement(r.a.Fragment, null, r.a.createElement(We, {
					comment: u,
					approveTooltipId: s,
					automodTooltipId: o,
					ignoreLock: P,
					language: S,
					lockedTooltipId: T,
					onHideTooltip: M,
					onShowTooltip: R,
					openRemovalReasonModal: D,
					removeTooltipId: H,
					reportTooltipId: V,
					spamTooltipId: G
				}), r.a.createElement(g.a, {
					className: te.a.DonationAmount,
					contentId: u.id,
					subredditId: u.subredditId
				})), r.a.createElement(h.a, {
					isOverlay: U,
					thing: u
				}))
			});
			const Me = e => {
					const {
						childrenInfo: t,
						collapsed: n,
						className: o,
						comment: a
					} = e;
					return r.a.createElement("div", {
						className: o
					}, r.a.createElement(ye, null, a.deletedBy === A.a.User ? s.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : s.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), r.a.createElement(Fe, ne({
						key: "Created"
					}, e)), n && De({
						childrenInfo: t
					}))
				},
				Re = e => {
					const {
						comment: t,
						language: n,
						className: s,
						childrenInfo: o
					} = e;
					return r.a.createElement("div", {
						className: s
					}, r.a.createElement("div", null, r.a.createElement(Be, {
						comment: t,
						isAuthorDeleted: Object(A.d)(t),
						topTippersEnabled: !1
					})), r.a.createElement(Y.b, {
						className: te.a.metaText,
						isScoreHidden: t.isScoreHidden,
						language: n,
						score: t.score
					}), r.a.createElement(Y.c, {
						className: te.a.metaText,
						key: "scoreCreatedSeparator"
					}), r.a.createElement(Fe, ne({
						key: "Created"
					}, e)), De({
						childrenInfo: o
					}))
				},
				Ae = e => r.a.createElement(o.Fragment, null, r.a.createElement(Y.c, {
					className: te.a.metaText
				}), r.a.createElement(ge, null, s.fbt._("edited {time}", [s.fbt._param("time", Object(u.f)(e))], {
					hk: "1tiB0u"
				}))),
				Be = e => {
					const t = r.a.createElement(b.a, {
						className: te.a.CommentAuthorLink,
						author: e.comment.author,
						isAdmin: e.comment.isAdmin,
						isAdminEmeritus: e.comment.distinguishType === l.A.ALUMNI_ADMIN,
						isAuthorDeleted: e.isAuthorDeleted,
						isLivestreaming: e.isLivestreaming,
						isMod: e.comment.isMod,
						isOp: e.comment.isOp,
						isStrong: e.isStrong,
						style: e.style
					}, e.children && e.children, e.comment.author);
					return e.topTippersEnabled ? r.a.createElement(_, {
						contentId: e.comment.postId,
						subredditId: e.comment.subredditId,
						userId: e.comment.authorId
					}, t) : t
				};
			class Fe extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCreatedTooltip = () => this.props.onShowTooltip(this.props.createdTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t,
							onCreatedClick: n
						} = e,
						s = se(e, ["comment", "onCreatedClick"]);
					return r.a.createElement(fe, {
						href: t.permalink,
						id: s.createdTooltipId,
						onClick: n,
						onMouseEnter: this.onShowCreatedTooltip,
						onMouseLeave: s.onHideTooltip,
						rel: "nofollow",
						target: "_blank"
					}, r.a.createElement("span", null, Object(u.f)(t.created)), Ve(s.createdTooltipId, Object(m.a)(t.created)))
				}
			}
			const De = e => {
				const {
					hasContinueThread: t,
					numChildren: n
				} = e.childrenInfo || {
					hasContinueThread: !1,
					numChildren: 0
				};
				return r.a.createElement(Ee, {
					className: te.a.metaText
				}, t ? s.fbt._({
					"*": "More than {number} children",
					_1: "More than 1 child"
				}, [s.fbt._plural(n, "number")], {
					hk: "13XC7a"
				}) : s.fbt._({
					"*": "{number} children",
					_1: "1 child"
				}, [s.fbt._plural(n, "number")], {
					hk: "dhX9w"
				}))
			};
			class He extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCakedayTooltip = () => this.props.onShowTooltip(this.props.cakedayTooltipId), this.onShowAdminTooltip = () => this.props.onShowTooltip(this.props.adminTooltipId), this.onShowAdminEmeritusTooltip = () => this.props.onShowTooltip(this.props.adminEmeritusTooltipId), this.onShowModTooltip = () => this.props.onShowTooltip(this.props.modTooltipId), this.onShowOpTooltip = () => this.props.onShowTooltip(this.props.opTooltipId), this.onShowContractorTooltip = () => this.props.onShowTooltip(this.props.contractorTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t
						} = e,
						n = se(e, ["comment"]);
					return r.a.createElement(o.Fragment, null, t.isAuthorCakeday && r.a.createElement(le, {
						"aria-label": Pe(),
						id: n.cakedayTooltipId,
						onMouseEnter: this.onShowCakedayTooltip,
						onMouseLeave: n.onHideTooltip
					}), t.isAuthorCakeday && Ve(n.cakedayTooltipId, Pe()), t.isAdmin && r.a.createElement(re, {
						desc: je(),
						id: n.adminTooltipId,
						onMouseEnter: this.onShowAdminTooltip,
						onMouseLeave: n.onHideTooltip
					}), t.isAdmin && Ve(n.adminTooltipId, je()), t.distinguishType === l.A.ALUMNI_ADMIN && r.a.createElement(ce, {
						"aria-label": Se(),
						id: n.adminEmeritusTooltipId,
						onMouseEnter: this.onShowAdminEmeritusTooltip,
						onMouseLeave: n.onHideTooltip
					}, "Δ"), t.distinguishType === l.A.ALUMNI_ADMIN && Ve(n.adminEmeritusTooltipId, Se()), t.isMod && r.a.createElement(me, {
						desc: Ie(n.subredditDisplayText),
						id: n.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: n.onHideTooltip
					}), t.isMod && Ve(n.modTooltipId, Ie(n.subredditDisplayText)), t.isOp && r.a.createElement(he, {
						desc: Ne(),
						id: n.opTooltipId,
						onMouseEnter: this.onShowOpTooltip,
						onMouseLeave: n.onHideTooltip
					}), t.isOp && Ve(n.opTooltipId, Ne()), n.renderContractorBadge && r.a.createElement(xe, {
						desc: Te(),
						id: n.contractorTooltipId,
						onMouseEnter: this.onShowContractorTooltip,
						onMouseLeave: n.onHideTooltip
					}), n.renderContractorBadge && Ve(n.contractorTooltipId, Te()))
				}
			}
			class We extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowApproveTooltip = () => this.props.onShowTooltip(this.props.approveTooltipId), this.onShowRemoveTooltip = () => this.props.onShowTooltip(this.props.removeTooltipId), this.onShowSpamTooltip = () => this.props.onShowTooltip(this.props.spamTooltipId), this.onShowAutomodTooltip = () => this.props.onShowTooltip(this.props.automodTooltipId), this.onShowReportTooltip = () => this.props.onShowTooltip(this.props.reportTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t
						} = e,
						n = se(e, ["comment"]);
					return r.a.createElement(o.Fragment, null, (t.approvedBy || t.isApproved) && r.a.createElement(ae, {
						desc: Object(L.a)(t),
						id: n.approveTooltipId,
						onMouseEnter: this.onShowApproveTooltip,
						onMouseLeave: n.onHideTooltip
					}), (t.approvedBy || t.isApproved) && Ve(n.approveTooltipId, Object(L.a)(t)), Object(T.a)(t) && r.a.createElement(pe, {
						desc: Object(L.c)(t),
						id: n.removeTooltipId,
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: n.onHideTooltip
					}), Object(T.a)(t) && Ve(n.removeTooltipId, Object(L.c)(t)), Object(T.a)(t) && t.isRemoved && !t.modNote && !t.modRemovalReason && r.a.createElement(Ce, {
						onClick: n.openRemovalReasonModal
					}, s.fbt._("Add a removal reason", null, {
						hk: "L6yrL"
					})), Object(T.a)(t) && !(t.isRemoved && !t.modNote && !t.modRemovalReason) && r.a.createElement(Ce, {
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: n.onHideTooltip
					}, s.fbt._("Removal reason", null, {
						hk: "20NRw8"
					})), t.isLocked && !n.ignoreLock && r.a.createElement(ie, {
						desc: s.fbt._("Locked", null, {
							hk: "40Ju3g"
						}),
						id: n.lockedTooltipId,
						onMouseEnter: () => {
							n.onShowTooltip(n.lockedTooltipId)
						},
						onMouseLeave: n.onHideTooltip
					}), t.bannedBy && t.isSpam && r.a.createElement(be, {
						desc: Object(L.e)(n.language, t),
						id: n.spamTooltipId,
						onMouseEnter: this.onShowSpamTooltip,
						onMouseLeave: n.onHideTooltip
					}), t.bannedBy && t.isSpam && Ve(n.spamTooltipId, Object(L.e)(n.language, t)), ("AutoModerator" === t.bannedBy || "AutoModerator" === t.approvedBy) && r.a.createElement(de, {
						className: Object(d.a)({
							[te.a.removed]: !!t.bannedBy
						}),
						desc: L.b,
						id: n.automodTooltipId,
						key: n.automodTooltipId,
						onMouseEnter: this.onShowAutomodTooltip,
						onMouseLeave: n.onHideTooltip
					}), ("AutoModerator" === t.bannedBy || "AutoModerator" === t.approvedBy) && Ve(n.automodTooltipId, L.b), Object(M.a)(t) && r.a.createElement(ue, {
						desc: Object(L.d)(t.numReports),
						id: n.reportTooltipId,
						onMouseEnter: this.onShowReportTooltip,
						onMouseLeave: n.onHideTooltip
					}), Object(M.a)(t) && Ve(n.reportTooltipId, Object(L.d)(t.numReports)))
				}
			}
			const Ue = () => r.a.createElement(o.Fragment, null, r.a.createElement(Y.c, {
					className: te.a.metaText
				}), r.a.createElement(ve, null, s.fbt._("Stickied comment", null, {
					hk: "XUSav"
				}))),
				Ve = (e, t) => r.a.createElement(S.c, {
					tooltipId: e,
					text: t
				})
		},
		"./src/reddit/components/Comments/ProfileComment/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Comments/ProfileComment/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/objectSelector/index.ts"),
				l = n("./node_modules/lodash/throttle.js"),
				m = n.n(l),
				p = n("./src/lib/fastdom/index.ts"),
				u = n("./src/reddit/components/CommentBodyExpander/index.m.less"),
				b = n.n(u);
			const {
				fbt: h
			} = n("./node_modules/fbt/lib/FbtPublic.js"), x = .75, f = 10 * c.E;
			class g extends o.a.Component {
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
					}, f), this.onShowMore = e => {
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
						expandToggled: n
					} = this.state;
					return n ? o.a.createElement("div", null, e()) : o.a.createElement("div", {
						className: b.a.collapsedCommentWrapper
					}, o.a.createElement("div", {
						className: b.a.collapsedCommentLine,
						style: {
							height: t
						}
					}, o.a.createElement("div", {
						ref: e => this.commentElement = e
					}, e(b.a.rtjCollapsed))), o.a.createElement("a", {
						className: b.a.seeMore,
						href: "javascript: void 0;",
						onClick: this.onShowMore
					}, h._("see more", null, {
						hk: "1Cx4qU"
					})))
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
			var v = g,
				y = n("./node_modules/fbt/lib/FbtPublic.js"),
				E = n("./node_modules/lodash/noop.js"),
				O = n.n(E),
				w = n("./src/lib/makeCommentPermalink/index.ts"),
				C = n("./src/lib/makeCommentsPageKey/index.ts"),
				_ = n("./src/lib/makeDraftKey/index.ts"),
				k = n("./src/reddit/actions/comment/index.ts"),
				j = n("./src/reddit/actions/gold/modals.ts"),
				P = n("./src/reddit/actions/modal.ts"),
				S = n("./src/reddit/actions/reportFlow.ts"),
				I = n("./src/reddit/actions/tooltip.ts"),
				N = n("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				T = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				L = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				M = n("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				R = n("./src/reddit/components/ModActionsMenu/index.tsx"),
				A = n("./src/reddit/components/ModModeReports/helpers.ts"),
				B = n("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				F = n("./src/reddit/contexts/InsideOverlay.tsx"),
				D = n("./src/reddit/contexts/PageLayer/index.tsx"),
				H = n("./src/reddit/helpers/correlationIdTracker.ts"),
				W = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				U = n("./src/reddit/helpers/overlay/index.ts"),
				V = n("./src/reddit/helpers/trackers/lightbox.ts"),
				G = n("./src/reddit/models/PostDraft/index.ts"),
				z = n("./src/reddit/selectors/activeModalId.ts"),
				K = n("./src/reddit/selectors/comments.ts"),
				J = n("./src/reddit/selectors/moderatorPermissions.ts"),
				q = n("./src/reddit/selectors/posts.ts"),
				Q = n("./src/reddit/selectors/tooltip.ts"),
				Z = n("./src/reddit/selectors/user.ts"),
				Y = n("./src/reddit/components/OverflowMenu/index.tsx"),
				X = n("./src/reddit/components/ReportFlow/index.tsx"),
				$ = n("./src/reddit/components/ShareMenu/index.tsx"),
				ee = n("./src/reddit/components/TrackingHelper/index.tsx"),
				te = n("./src/reddit/controls/Dropdown/Row.tsx"),
				ne = n("./src/reddit/helpers/trackers/modTools.ts"),
				se = n("./src/reddit/layout/row/Inline/index.tsx"),
				oe = n("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				re = n("./src/reddit/icons/fonts/ModActions/index.tsx"),
				ae = n("./src/reddit/icons/fonts/Report/index.tsx"),
				ie = n("./src/reddit/icons/svgs/Flag/index.tsx"),
				ce = n("./src/reddit/icons/svgs/Pencil/index.tsx"),
				de = n("./src/reddit/icons/svgs/Save/index.m.less"),
				le = n.n(de);
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
				pe = n("./src/reddit/icons/svgs/Saved/index.tsx"),
				ue = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				be = n("./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less"),
				he = n.n(be),
				xe = n("./src/lib/lessComponent.tsx");
			const fe = xe.a.wrapped(ue.b, "DeleteIcon", he.a),
				ge = xe.a.wrapped(ie.a, "ReportIcon", he.a),
				ve = xe.a.wrapped(ce.a, "PencilIcon", he.a),
				ye = xe.a.wrapped(me, "SaveIcon", he.a),
				Ee = xe.a.wrapped(pe.a, "SavedIcon", he.a),
				Oe = xe.a.wrapped(Y.b, "OverflowMenu", he.a),
				we = xe.a.wrapped(T.c, "ModToolsFlatlist", he.a),
				Ce = xe.a.wrapped(R.a, "ModActionsMenu", he.a),
				_e = xe.a.wrapped(te.b, "DropdownRow", he.a),
				ke = xe.a.wrapped(se.a, "Flatlist", he.a),
				je = xe.a.button("Button", he.a),
				Pe = Object(D.t)(),
				Se = e => "Comment-".concat(e, "--Modal--DeleteComment"),
				Ie = e => "Distinguish--Dropdown--".concat(e),
				Ne = (e, t) => "".concat(e, "--").concat(t, "-overflow-menu"),
				Te = e => "View--Reports--".concat(e),
				Le = Object(a.c)({
					activeTooltipId: Q.a,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(z.a)(e) === Se(n.id)
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(K.A)(e, {
							commentId: n.postId
						})
					},
					isLoggedIn: Z.H,
					moderatorPermissions: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(J.j)(e, {
							subredditId: n.subredditId
						})
					},
					currentUser: Z.i,
					modModeEnabled: D.P,
					postIsLocked: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(q.J)(e, {
							postId: n.postId
						})
					},
					postPermalink: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(q.M)(e, {
							postId: n.postId
						})
					},
					reportFlowIsOpen: (e, t) => {
						let {
							comment: n
						} = t;
						return e.reportFlow.postOrCommentId === n.id
					},
					subreddit: D.q,
					subredditOrProfile: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(q.bb)(e, {
							postId: n.postId
						})
					}
				});
			class Me extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(ne.a)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleEdit = () => this.props.handleEdit(this.props.comment.permalink), this.handleIgnoreReports = () => {
						this.props.onIgnoreReports(), this.sendCommentReportEvent(this.props.comment.ignoreReports ? "restore_reports" : "ignore_reports")
					}, this.handleGild = async () => {
						Object(H.d)(H.a.GildingFlow), this.props.onGildClick();
						const {
							clickGildEvent: e
						} = await Promise.resolve().then(n.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(e(this.props.comment.id))
					}, this.handleModActionsMenu = () => this.props.sendEvent(Object(ne.a)("comment_mod_action_menu", this.props.comment.id)), this.handleOverflowMenuClick = () => this.props.sendEvent(Object(ne.a)("comment_overflow_menu", this.props.comment.id)), this.handleDelete = () => this.props.handleDelete(), this.handleReply = () => this.props.handleReply(this.props.comment.permalink), this.handleRestrictedButtonClick = () => {
						this.props.onToggleReportsDropdown(), this.sendCommentModEventWithName("comment_report_menu")
					}, this.handleSave = () => {
						this.props.comment.isSaved ? this.props.sendEvent(Object(ne.a)("unsave", this.props.comment.id)) : this.props.sendEvent(Object(ne.a)("save", this.props.comment.id)), this.props.onToggleSave()
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(ne.b)(e, this.props.comment.id)), this.sendCommentEventWithName = e => this.props.sendEvent(Object(V.b)(this.props.comment.postId, "comment_".concat(e))), this.sendCommentEventWithNameShare = () => this.sendCommentEventWithName("share"), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(ne.a)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(ne.e)(e, this.props.comment.id))
				}
				renderModTools() {
					const {
						comment: e,
						currentUser: t,
						language: n,
						moderatorPermissions: s,
						modModeEnabled: r,
						showModTools: a
					} = this.props, i = Object(W.a)(s), c = !!t && t.displayText === e.author;
					if (a && i) return r ? o.a.createElement(we, {
						comment: e,
						isCommentAuthor: c,
						language: n
					}) : o.a.createElement(Ce, {
						dropdownId: "".concat(e.id, "-profile-mod-actions-menu"),
						inCommentFlatlist: !0,
						onClick: this.handleModActionsMenu
					}, o.a.createElement(re.a, null), o.a.createElement(N.a, {
						comment: e,
						tooltipId: "".concat(e.id, "-profile-mod-actions-menu")
					}))
				}
				renderReportsDropdown() {
					const {
						comment: e,
						modModeEnabled: t,
						showModTools: n
					} = this.props, s = Object(A.a)(e);
					if (n && Object(A.c)(e) && !t) return o.a.createElement(T.b, {
						text: "".concat(s),
						onClick: this.handleRestrictedButtonClick,
						selected: this.props.activeTooltipId === Te(e.id),
						id: Te(e.id)
					}, o.a.createElement(B.a, {
						model: e,
						onIgnoreReports: this.handleIgnoreReports,
						tooltipId: Te(e.id)
					}), e.ignoreReports ? o.a.createElement(oe.a, null) : o.a.createElement(ae.a, null))
				}
				renderDistinguishDropdown() {
					const {
						comment: e,
						currentUser: t,
						moderatorPermissions: n,
						modModeEnabled: s,
						onDistinguishComment: r,
						showModTools: a
					} = this.props, i = Object(W.a)(n), c = !!t && t.displayText === e.author, d = !!t && t.isEmployee;
					if (a && c && !e.bannedBy && (d || i && !s)) return o.a.createElement(T.b, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.activeTooltipId === Ie(e.id)
					}, o.a.createElement(T.a, null), o.a.createElement(M.a, {
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
						commentsPageKey: n,
						currentUser: s,
						deleteComment: r,
						isLoggedIn: a,
						isPendingDeletion: i,
						moderatorPermissions: c,
						postIsLocked: d,
						postPermalink: l,
						subreddit: m,
						toggleDeleteCommentModal: p
					} = this.props, u = Object(W.a)(c), b = !!s && s.displayText === e.author, h = !d && !e.isLocked || u && a, x = s && e.isGildable;
					return o.a.createElement("div", {
						className: t
					}, o.a.createElement(ke, null, h && o.a.createElement(je, {
						onClick: this.handleReply,
						disabled: i
					}, y.fbt._("Reply", null, {
						hk: "1xBqIs"
					})), x && o.a.createElement(je, {
						onClick: this.handleGild
					}, y.fbt._("Give Award", null, {
						hk: "pQJYk"
					})), o.a.createElement($.a, {
						dropdownId: "".concat(n, "--").concat(e.id, "-comment-share-menu"),
						permalink: Object(w.a)(l, e.id),
						sendEventWithName: this.sendCommentEventWithName,
						subreddit: m
					}, o.a.createElement(je, {
						onClick: this.sendCommentEventWithNameShare
					}, y.fbt._("share", null, {
						hk: "3YIXpa"
					}))), this.renderReportsDropdown(), o.a.createElement(Oe, {
						dropdownId: Ne(n, e.id),
						onClick: this.handleOverflowMenuClick
					}, !b && !i && o.a.createElement(_e, {
						displayText: y.fbt._("report", null, {
							hk: "ad7CE"
						}),
						onClick: this.props.onReportClick
					}, o.a.createElement(ge, null)), o.a.createElement(_e, {
						displayText: e.isSaved ? y.fbt._("Unsave", null, {
							hk: "4kQcAP"
						}) : y.fbt._("Save", null, {
							hk: "2rjVP3"
						}),
						isSelected: e.isSaved,
						onClick: this.handleSave
					}, e.isSaved ? o.a.createElement(Ee, null) : o.a.createElement(ye, null)), b && o.a.createElement(_e, {
						displayText: y.fbt._("edit", null, {
							hk: "t6YUy"
						}),
						onClick: this.handleEdit
					}, o.a.createElement(ve, null)), b && o.a.createElement(_e, {
						displayText: y.fbt._("delete", null, {
							hk: "e8kvB"
						}),
						onClick: this.handleDelete
					}, o.a.createElement(fe, null))), this.props.isConfirmModalOpen && o.a.createElement(L.a, {
						actionText: y.fbt._("delete", null, {
							hk: "3Ene8H"
						}),
						cancelActionText: y.fbt._("keep", null, {
							hk: "vzNJh"
						}),
						headerText: y.fbt._("Delete comment", null, {
							hk: "2ErmbC"
						}),
						modalText: y.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "21h9zY"
						}),
						onConfirm: r,
						toggleModal: p,
						trackClick: O.a,
						withOverlay: !0
					}), this.renderModTools(), this.renderDistinguishDropdown()), this.props.reportFlowIsOpen && o.a.createElement(X.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: X.b,
						postId: this.props.comment.postId
					}))
				}
			}
			var Re = Pe(Object(r.b)(Le, (e, t) => {
					let {
						comment: n,
						commentsPageKey: s
					} = t;
					return {
						deleteComment: () => s && e(Object(k.db)(n.id, n.postId)),
						onDistinguishComment: (t, s) => e(Object(k.S)(n.id, t, s)),
						onIgnoreReports: () => e(Object(k.pb)(n.id)),
						onGildClick: () => e(Object(j.d)({
							thingId: n.id
						})),
						onReportClick: () => e(Object(S.j)(n.id)),
						onToggleDistinguishDropdown: () => e(Object(I.h)({
							tooltipId: Ie(n.id)
						})),
						onToggleReportsDropdown: () => e(Object(I.h)({
							tooltipId: Te(n.id)
						})),
						onToggleSave: () => e(Object(k.gb)(n.id)),
						handleDelete: () => {
							e(Object(P.i)(Se(n.id))), e(Object(I.h)({
								tooltipId: Ne(s, n.id)
							}))
						},
						handleEdit: t => {
							const s = Object(C.a)(n.postId, n.id, {}),
								o = {
									commentId: n.id,
									draftKey: Object(_.a)(G.c.edit, n.id),
									text: n.bodyMD || "",
									commentMode: n.media && n.media.rteMode,
									commentsPageKey: s
								};
							e(Object(U.a)(t)), e(Object(k.ab)(o))
						},
						handleReply: t => {
							const s = Object(C.a)(n.postId, n.id, {}),
								o = {
									parentCommentId: n.id,
									commentsPageKey: s
								};
							e(Object(U.a)(t)), e(Object(k.bb)(o))
						},
						toggleDeleteCommentModal: () => e(Object(P.i)(Se(n.id)))
					}
				})(Object(ee.c)(Object(F.b)(Me)))),
				Ae = n("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Be = n("./src/reddit/components/GildModal/getGildModalId.ts"),
				Fe = n("./src/reddit/components/GildModal/Loader.tsx"),
				De = n("./src/reddit/components/RichTextJson/index.tsx"),
				He = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				We = n("./src/reddit/selectors/gild.ts"),
				Ue = n("./src/reddit/components/Comments/ProfileComment/index.m.less"),
				Ve = n.n(Ue);
			const Ge = xe.a.wrapped(Ae.a, "TopMeta", Ve.a),
				ze = xe.a.div("ProfileCommentWrapper", Ve.a),
				Ke = xe.a.div("CommentBody", Ve.a),
				Je = Object(r.b)(() => Object(a.c)({
					comment: (e, t) => Object(K.n)(e, t),
					gildModalIsOpen: (e, t) => {
						let {
							commentId: n
						} = t;
						const s = Object(Be.b)(n);
						return Object(We.c)(e, s)
					},
					flair: K.e,
					language: Z.Q
				})),
				qe = Object(d.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.a = Je(e => {
				const {
					comment: t,
					commentsPageKey: n,
					flair: s,
					gildModalIsOpen: r,
					isExpanded: a,
					language: d,
					showFlatlist: l,
					showModTools: m
				} = e, p = n => o.a.createElement(De.a, {
					className: n,
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
					commentsPageKey: n,
					flair: s,
					language: d,
					renderedInOverlay: !1
				}), o.a.createElement("div", null, !t.isDeleted && o.a.createElement(Ke, null, a ? p() : o.a.createElement(v, {
					height: c.Eb,
					isExpanded: a
				}, p)), !t.isDeleted && l && o.a.createElement(Re, {
					comment: t,
					commentsPageKey: n,
					language: d,
					showModTools: m
				})), r && o.a.createElement(Fe.a, null))
			})
		},
		"./src/reddit/components/CompactPost/Placeholder/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/CompactPost/Placeholder/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/SubredditIcon/index.tsx"),
				d = n("./src/reddit/components/VerticalVotes/votes.tsx"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				p = n("./src/reddit/models/Vote/index.ts"),
				u = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				b = n.n(u),
				h = n("./src/reddit/components/CompactPost/Placeholder/index.m.less"),
				x = n.n(h);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const g = Object(l.t)(),
				v = Object(a.c)({
					isFakeSubreddit: l.x
				}),
				y = Object(r.b)(v),
				E = e => {
					const t = {
						interactive: !1,
						voteState: p.a.notVoted
					};
					return o.a.createElement("div", {
						className: x.a.emptyVotes
					}, o.a.createElement(d.d, f({
						key: "u"
					}, t)), o.a.createElement("div", {
						key: "s",
						className: x.a.emptyScore
					}), o.a.createElement(d.c, f({
						key: "d"
					}, t)))
				},
				O = e => o.a.createElement(c.a, {
					className: Object(m.a)(e)
				}),
				w = e => o.a.createElement("div", {
					className: x.a.flatList
				}, o.a.createElement("div", {
					className: Object(i.a)(x.a.comments, Object(m.b)(e))
				}), o.a.createElement("div", {
					className: Object(i.a)(x.a.ellipsis, Object(m.b)(e))
				}));
			t.a = g(y(e => o.a.createElement("div", {
				className: Object(i.a)(e.className, b.a.compactPostStyles, b.a.classicAndCompactPlaceholderStyles)
			}, o.a.createElement("div", {
				className: x.a.wrapper
			}, o.a.createElement(E, f({
				key: "c"
			}, e)), o.a.createElement("div", {
				key: "a",
				className: x.a.expandoContainer
			}, o.a.createElement("div", {
				className: Object(i.a)(x.a.expando, Object(m.a)(e))
			})), o.a.createElement("div", {
				key: "d",
				className: x.a.subredditIconContainer
			}, o.a.createElement(O, {
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
			})), o.a.createElement(w, f({
				key: "f"
			}, e))))))
		},
		"./src/reddit/components/ContentGate/index.m.less": function(e, t, n) {
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
				LinkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				linkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				LinkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				linkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
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
				LeftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				leftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				LeftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				leftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
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
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./src/config.ts"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router/esm/react-router.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/loginHref/index.ts"),
				l = n("./src/reddit/actions/contentGate.ts"),
				m = n("./src/reddit/actions/preferences.ts"),
				p = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				u = n("./src/lib/lessComponent.tsx"),
				b = n("./src/reddit/components/Footer/index.m.less"),
				h = n.n(b);
			const {
				fbt: x
			} = n("./node_modules/fbt/lib/FbtPublic.js"), f = u.a.div("FooterContainer", h.a), g = u.a.div("UserAgreement", h.a), v = u.a.a("UserAgreementLink", h.a), y = u.a.a("PrivacyLink", h.a);
			var E = () => r.a.createElement(f, null, r.a.createElement(g, null, x._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [x._param("=User Agreement", r.a.createElement(v, {
					href: "".concat(s.a.redditUrl, "/help/useragreement")
				}, x._("User Agreement", null, {
					hk: "2srkM2"
				}))), x._param("=Privacy Policy", r.a.createElement(y, {
					href: "".concat(s.a.redditUrl, "/help/privacypolicy")
				}, x._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), x._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				O = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				w = n("./src/reddit/components/RichTextJson/index.tsx"),
				C = (n("./node_modules/core-js/modules/es6.regexp.split.js"), n("./node_modules/core-js/modules/es6.regexp.match.js"), n("./node_modules/lodash/flatMap.js")),
				_ = n.n(C),
				k = n("./src/lib/linkMatchers/index.ts"),
				j = n("./src/lib/linkMatchers/customLinks.ts"),
				P = n("./src/reddit/controls/OutboundLink/index.tsx");
			const S = /\[(.+?)\]\((.+?)\)/g,
				I = e => {
					const t = e.split(S);
					if (1 === t.length) return [e];
					const n = [];
					for (let s = 0; s < t.length; s += 3) {
						const [e, o, r] = t.slice(s, s + 3);
						n.push(e), n.push([r, o])
					}
					return n
				};
			var N = r.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = _()(t, I)), e.parseRegularLinks && (t = _()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = k.e.add(j.g.subreddit.prefix, j.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let s = null;
						for (const o of t) n.push(e.slice(s ? s.lastIndex : 0, o.index)), s = o, n.push([o.url, o.text]);
						return s && n.push(e.slice(s.lastIndex)), n
					})(e))), r.a.createElement(r.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [s, o] = t;
							return r.a.createElement(P.a, {
								className: e.linkClassName,
								href: s,
								isSponsored: !1,
								key: n,
								source: null
							}, o)
						}
						return r.a.createElement("span", {
							key: n
						}, t)
					}), " ")
				}),
				T = n("./src/reddit/contexts/PageLayer/index.tsx"),
				L = n("./src/reddit/controls/Button/index.tsx"),
				M = n("./src/reddit/models/ContentGate.ts"),
				R = n("./src/reddit/selectors/meta.ts"),
				A = n("./src/reddit/selectors/user.ts"),
				B = n("./src/reddit/components/ContentGate/index.m.less"),
				F = n.n(B);
			const {
				fbt: D
			} = n("./node_modules/fbt/lib/FbtPublic.js"), H = u.a.div("ButtonsContainer", F.a), W = u.a.div("Container", F.a), U = u.a.div("Description", F.a), V = u.a.div("PrivateSubredditDetails", F.a), G = u.a.div("PrivateSubredditDescription", F.a), z = u.a.h3("PrivateSubredditName", F.a), K = u.a.a("Link", F.a), J = u.a.wrapped(L.h, "LinkRouterButton", F.a), q = u.a.wrapped(L.g, "LinkButton", F.a), Q = u.a.wrapped(L.k, "SecondaryLinkRouterButton", F.a), Z = u.a.wrapped(L.j, "SecondaryLinkButton", F.a), Y = u.a.wrapped(J, "GoHomeLinkButton", F.a), X = u.a.img("Image", F.a), $ = u.a.img("ImagePlaceholder", F.a), ee = u.a.wrapped(J, "LeftLinkRouterButton", F.a), te = u.a.wrapped(q, "LeftLinkButton", F.a), ne = u.a.wrapped(Z, "SecondaryLeftLinkButton", F.a), se = u.a.wrapped(Q, "SecondaryLeftLinkRouterButton", F.a), oe = u.a.h3("Title", F.a), re = u.a.div("PageBody", F.a), ae = u.a.div("QuarantineMessageWrapper", F.a), ie = Object(c.c)({
				isLoggedIn: A.G,
				language: A.Q,
				origin: R.k,
				user: A.i
			}), ce = Object(T.t)(), de = Object(a.b)(ie, (e, t) => {
				let {
					subredditName: n
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(m.C(n)), window.location.reload()
					},
					setNSFWPreference: async () => {
						await e(Object(l.l)())
					}
				}
			}), le = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: o,
					isLoggedIn: a,
					language: i,
					location: c,
					origin: m,
					pageLayer: u,
					quarantineRequiresEmail: b,
					quarantineMessage: h,
					quarantineMessageHtml: x,
					quarantineMessageRTJson: f,
					setNSFWPreference: g,
					subredditDescription: v,
					subredditName: y,
					user: E
				} = e, C = () => {
					a ? g() : Object(l.k)(), window.location.reload()
				};
				switch (n) {
					case M.a.GoldSubreddit:
						return r.a.createElement("div", null, r.a.createElement(X, {
							src: "".concat(s.a.assetPath, "/img/gold/premium-crest.png")
						}), r.a.createElement(oe, null, D._("r/{community name} is a Reddit Premium community", [D._param("community name", y)], {
							hk: "2lyDwB"
						})), r.a.createElement(U, null, D._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), r.a.createElement(H, null, E ? r.a.createElement(ne, {
							href: "".concat(s.a.redditUrl, "/premium")
						}, D._("Get Premium", null, {
							hk: "3ChWi4"
						})) : r.a.createElement(te, {
							href: Object(d.a)(c, m)
						}, D._("Sign Up", null, {
							hk: "rvpjy"
						})), E ? r.a.createElement(J, {
							to: "/"
						}, D._("Go Home", null, {
							hk: "49p4or"
						})) : r.a.createElement(Z, {
							href: Object(d.a)(c, m)
						}, D._("Log in", null, {
							hk: "odEG4"
						}))));
					case M.a.Nsfw:
					case M.a.NsfwCustomFeed:
						return r.a.createElement("div", null, r.a.createElement(X, {
							src: "".concat(s.a.assetPath, "/img/content-gate-icons/nsfw.png")
						}), r.a.createElement(oe, null, n === M.a.Nsfw ? D._("You must be 18+ to view this community", null, {
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
						return r.a.createElement("div", null, r.a.createElement(X, {
							src: "".concat(s.a.assetPath, "/img/content-gate-icons/private.png")
						}), r.a.createElement(oe, null, D._("You must be invited to visit this community", null, {
							hk: "dHP8K"
						})), v && v.length && r.a.createElement(V, null, r.a.createElement(z, null, "r/", y), r.a.createElement(G, null, r.a.createElement("div", null, v))), r.a.createElement(U, null, D._("The moderators in this community have set it to private. You must be a moderator or approved user to visit.", null, {
							hk: "nwL0k"
						})), r.a.createElement(H, null, E ? r.a.createElement(ne, {
							href: "".concat(s.a.redditUrl, "/message/compose?to=/r/").concat(y)
						}, D._("Message Mods", null, {
							hk: "vVe1i"
						})) : r.a.createElement(ne, {
							href: Object(d.a)(c, m)
						}, D._("Sign Up", null, {
							hk: "rvpjy"
						})), r.a.createElement(J, {
							to: "/"
						}, E ? D._("Go Home", null, {
							hk: "49p4or"
						}) : D._("Explore Reddit", null, {
							hk: "3IwwVU"
						}))));
					case M.a.QuarantinedSubreddit:
						return r.a.createElement("div", null, r.a.createElement(X, {
							src: "".concat(s.a.assetPath, "/img/content-gate-icons/quarantined.png")
						}), r.a.createElement(oe, null, D._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), r.a.createElement(U, null, D._("This community is {=quarantined}", [D._param("=quarantined", r.a.createElement(K, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, D._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), r.a.createElement(ae, null, f ? r.a.createElement(w.a, {
							content: f,
							rtJsonElementProps: {
								pageLayer: u
							}
						}) : x ? r.a.createElement(O.a, {
							html: x
						}) : h || D._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), D._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), r.a.createElement(H, null, ((e, t, n, o) => {
							return !(e && e.hasVerifiedEmail) && o ? r.a.createElement(H, null, r.a.createElement(se, {
								to: "/"
							}, D._("No Thank You", null, {
								hk: "4B26AR"
							})), r.a.createElement(q, {
								href: "".concat(s.a.redditUrl, "/prefs/update")
							}, D._("Verify Email", null, {
								hk: "1893cq"
							}))) : r.a.createElement(H, null, r.a.createElement(ee, {
								to: "/"
							}, D._("No Thank You", null, {
								hk: "4B26AR"
							})), r.a.createElement(Z, {
								onClick: n
							}, D._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(E, 0, o, b)));
					case M.a.SubredditBanned:
						return r.a.createElement("div", null, r.a.createElement(X, {
							src: "".concat(s.a.assetPath, "/img/content-gate-icons/banned.png")
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
						return r.a.createElement("div", null, r.a.createElement(X, {
							src: "".concat(s.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
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
						})), r.a.createElement(H, null, E && r.a.createElement(p.a, {
							eventSource: "content_gate"
						}), r.a.createElement(Y, {
							to: "/"
						}, D._("Go Home", null, {
							hk: "49p4or"
						}))));
					case M.a.ProfileDoesNotExist:
					case M.a.ProfileDeleted:
					case M.a.ProfileSuspended:
					case M.a.ProfileBlockedForLegalReason:
						return r.a.createElement("div", null, r.a.createElement(X, {
							src: "".concat(s.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
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
						})(e)), r.a.createElement(H, null, r.a.createElement(Y, {
							to: "/"
						}, D._("Go Home", null, {
							hk: "49p4or"
						}))));
					case M.a.CustomFeedDoesNotExist:
						return r.a.createElement("div", null, r.a.createElement(X, {
							src: "".concat(s.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), r.a.createElement(oe, null, D._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), r.a.createElement(H, null, r.a.createElement(Y, {
							to: "/"
						}, D._("Go Home", null, {
							hk: "49p4or"
						}))));
					case M.a.PostBlockedForLegalReason:
						return r.a.createElement("div", null, r.a.createElement(X, {
							src: "".concat(s.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), r.a.createElement(oe, null, D._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), r.a.createElement(H, null, r.a.createElement(J, {
							to: "/"
						}, D._("Explore Reddit", null, {
							hk: "FrUWU"
						}))))
				}
			};
			t.default = ce(de(Object(i.i)(e => r.a.createElement(W, null, r.a.createElement("div", null, r.a.createElement(re, null, le(e))), r.a.createElement(E, null)))))
		},
		"./src/reddit/components/CountrySort/index.m.less": function(e, t, n) {
			e.exports = {
				countrySort: "_1JaK9h42mq2UXvugO7VriI"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, n) {
			e.exports = {
				SecondaryButton: "_3U-J6NPoBHbyibarrb7T3F",
				secondaryButton: "_3U-J6NPoBHbyibarrb7T3F",
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/tooltip.ts"),
				d = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/overlay/index.ts"),
				u = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				x = n.n(h),
				f = n("./src/lib/lessComponent.tsx");
			const g = "create-community-button",
				v = f.a.wrapped(m.i, "SecondaryButton", x.a),
				y = f.a.wrapped(d.c, "StyledTooltip", x.a),
				E = Object(i.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(b.ab)(e),
					userIsSuspended: b.M
				});
			t.a = Object(a.b)(E, (e, t) => {
				let {
					eventSource: n
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(u.b)(n)), e(Object(p.a)("/subreddits/create"))
					},
					onShowTooltip: () => e(Object(c.f)({
						tooltipId: g
					})),
					onHideTooltip: () => e(Object(c.i)())
				}
			})(Object(l.c)(e => {
				let {
					className: t,
					eventSource: n,
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
					id: g
				}, s.fbt._("Create Community", null, {
					hk: "RLA8A"
				}), d ? r.a.createElement(y, {
					caretOnTop: !0,
					tooltipId: g,
					text: s.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? r.a.createElement(y, {
					caretOnTop: !0,
					tooltipId: g,
					text: s.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/CrosspostBox/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/CrosspostBox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = n("./src/lib/prettyPrintNumber/index.ts"),
				m = n("./src/reddit/components/Media/index.tsx"),
				p = n("./src/reddit/components/PostMeta/index.tsx"),
				u = n("./src/reddit/components/PostTitle/index.tsx"),
				b = n("./src/reddit/components/SourceLink/index.tsx"),
				h = n("./src/reddit/components/Thumbnail/index.tsx"),
				x = n("./src/lib/constants/index.ts"),
				f = n("./src/reddit/selectors/posts.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/components/CrosspostBox/index.m.less"),
				y = n.n(v),
				E = n("./src/lib/lessComponent.tsx");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const w = E.a.div("Container", y.a),
				C = E.a.div("PostMetaWrapper", y.a),
				_ = E.a.wrapped(u.c, "PostTitle", y.a),
				k = E.a.div("FlatList", y.a),
				j = E.a.div("FlatItem", y.a),
				P = E.a.span("FlatListDotSpacer", y.a),
				S = E.a.wrapped(w, "LinkContainer", y.a),
				I = E.a.div("Content", y.a),
				N = E.a.div("ThumbnailContainer", y.a),
				T = Object(c.c)({
					isCurrentUserProfilePost: f.k,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== x.yb.TOPIC),
					language: g.Q,
					post: f.O,
					shouldOpenPostInNewTab: g.U,
					subreddit: f.bb
				}),
				L = Object(a.b)(T);
			t.a = L(e => {
				const {
					className: t,
					isCurrentUserProfilePost: n,
					isTopicPage: s,
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
						isCurrentUserProfilePost: n,
						isTopicPage: s,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: i,
						language: c,
						tooltipType: "".concat("CrosspostBox", "--").concat(o.isListing)
					},
					l = t;
				return a && !a.media ? r.a.createElement(S, {
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
						post: n
					} = e, s = Object.assign({}, t, {
						post: n,
						crosspost: t.post
					});
					return r.a.createElement("div", null, r.a.createElement(m.a, O({}, s, {
						className: y.a.mediaContainer
					})))
				},
				A = e => {
					const {
						post: t
					} = e, {
						score: n
					} = t;
					return r.a.createElement(k, null, r.a.createElement(j, null, s.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [s.fbt._plural(n, "point count", Object(l.b)(n))], {
						hk: "PNZhd"
					})), r.a.createElement(P, null), r.a.createElement(j, null, B(e)))
				},
				B = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: n
					} = e, {
						numComments: o
					} = t;
					return r.a.createElement(i.a, {
						"data-click-id": "comments",
						to: Object(d.a)(t.permalink, !0),
						target: n ? "_blank" : void 0
					}, s.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [s.fbt._plural(o, "comment count", Object(l.b)(o))], {
						hk: "xPYWL"
					}))
				},
				F = e => r.a.createElement(N, null, r.a.createElement(h.a, {
					post: e.post
				}))
		},
		"./src/reddit/components/Economics/TopTippers/CommentUsername/index.m.less": function(e, t, n) {
			e.exports = {
				badge: "_17rA6EEcc6RUglkZkHnYGO",
				container: "EorVQyBcpl50FYvpH-VTa"
			}
		},
		"./src/reddit/components/Economics/TopTippers/Icon/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/config.ts");
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
		"./src/reddit/components/EmptyProfile/EmptyListing.m.less": function(e, t, n) {
			e.exports = {
				PrimaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				primaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				BackgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				backgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				Wrapper: "_1aYPXfy_h5ZUIu0k_69eX1",
				wrapper: "_1aYPXfy_h5ZUIu0k_69eX1"
			}
		},
		"./src/reddit/components/EmptyProfile/forbidden.m.less": function(e, t, n) {
			e.exports = {
				container: "_1RecBWgyCRDIwbumVv_1eu",
				hideIcon: "_2ahl77ziD4jsIXBLc18_Hc",
				title: "_1MRoVpNql4popp175MVxl6",
				subtitle: "_3HccUrmIe42WfjCGgNekWK",
				buttons: "_1BrhZvjQw9AWs6w5xlkj2F"
			}
		},
		"./src/reddit/components/EmptyProfile/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "a", (function() {
				return C
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/PostList/Placeholder.tsx"),
				d = n("./src/reddit/constants/postLayout.ts"),
				l = n("./src/reddit/components/EmptyProfile/EmptyListing.m.less"),
				m = n.n(l);
			const p = i.a.div("PrimaryText", m.a),
				u = i.a.wrapped(c.a, "BackgroundPlaceholder", m.a),
				b = i.a.div("Wrapper", m.a);
			var h = e => {
				let {
					children: t,
					className: n
				} = e;
				return r.a.createElement(b, {
					className: n
				}, r.a.createElement(u, {
					isLoading: !1,
					layout: d.g.Classic
				}), r.a.createElement(p, null, t))
			};
			var x = e => {
				let {
					className: t,
					profileName: n,
					timeSort: o = a.Pb.ALL
				} = e;
				return r.a.createElement(h, {
					className: t
				}, o === a.Pb.ALL ? s.fbt._("hmm... {profileName} hasn't commented on anything", [s.fbt._param("profileName", "u/".concat(n))], {
					hk: "1MHn3t"
				}) : s.fbt._("hmm... {profileName} hasn't commented recently", [s.fbt._param("profileName", "u/".concat(n))], {
					hk: "qN3uL"
				}))
			};
			var f = e => {
				let {
					className: t,
					profileName: n,
					timeSort: o = a.Pb.ALL
				} = e;
				return r.a.createElement(h, {
					className: t
				}, o === a.Pb.ALL ? s.fbt._("hmm... {profileName} hasn't posted anything", [s.fbt._param("profileName", "u/".concat(n))], {
					hk: "28vBEd"
				}) : s.fbt._("hmm... {profileName} hasn't posted recently", [s.fbt._param("profileName", "u/".concat(n))], {
					hk: "38GhqN"
				}))
			};
			const {
				fbt: g
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var v = e => {
					let {
						className: t,
						verb: n
					} = e;
					return r.a.createElement(h, {
						className: t
					}, g._("hmm... looks like you haven't {verb} yet", [g._param("verb", n)], {
						hk: "142tKN"
					}))
				},
				y = n("./src/reddit/icons/svgs/Hide/index.tsx"),
				E = n("./src/reddit/components/EmptyProfile/forbidden.m.less"),
				O = n.n(E);
			const {
				fbt: w
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var C = () => r.a.createElement("div", {
				className: O.a.container
			}, r.a.createElement(y.a, {
				className: O.a.hideIcon
			}), r.a.createElement("h3", {
				className: O.a.title
			}, w._("You do not have permission to access this resource", null, {
				hk: "10cPyp"
			})), r.a.createElement("p", {
				className: O.a.subtitle
			}, w._("You can only look at your own saved posts and comments", null, {
				hk: "3pWGtF"
			})))
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/eventTools/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = n("./src/reddit/components/PostFollow/index.tsx"),
				l = n("./src/reddit/helpers/postCollection.ts"),
				m = n("./src/reddit/helpers/postEvent.ts"),
				p = n("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				u = n.n(p);
			const b = i.a.div("EventMetaWrapper", u.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: n,
					language: s,
					post: i
				} = e;
				if (!Object(m.a)(i)) return null;
				const p = i && i.eventInfo,
					h = Object(l.a)(i),
					x = p && Object(a.c)(p.eventStart, p.eventEnd);
				return o.a.createElement("div", {
					className: Object(r.a)(u.a.container, t, {
						[u.a.isCompact]: !!n
					})
				}, o.a.createElement(b, {
					className: u.a.eventMetaWrapper
				}, o.a.createElement(c.a, {
					language: s,
					post: i
				}), !h && x && o.a.createElement(d.a, {
					className: u.a.eventFollowButton,
					post: i,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/eventTools/index.ts"),
				a = (n("./node_modules/core-js/modules/es6.regexp.replace.js"), n("./src/app/strings/index.ts")),
				i = n("./src/lib/constants/index.ts");

			function c(e, t) {
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}
			var d = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = n("./src/reddit/icons/fonts/Calendar/index.tsx"),
				m = n("./src/reddit/icons/fonts/Live/index.tsx"),
				p = n("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				u = n.n(p),
				b = n("./src/lib/lessComponent.tsx");
			const h = b.a.span("PostEventFutureText", u.a),
				x = b.a.span("PostEventPastText", u.a),
				f = b.a.span("PostEventNowText", u.a),
				g = b.a.span("Container", u.a),
				v = b.a.wrapped(l.a, "CalendarIcon", u.a),
				y = b.a.wrapped(m.a, "LiveIcon", u.a),
				E = b.a.div("LoadingState", u.a);
			class O extends s.Component {
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
						post: n
					} = this.props, {
						eventInfo: s
					} = n;
					if (!s) return null;
					const {
						eventEnd: l,
						eventIsLive: m,
						eventStart: p
					} = s, u = Object(r.e)(p, l);
					let b, O;
					if (this.state.mounted || u === r.a.Live) b = function(e, t, n, s) {
						const o = Object(r.e)(e, t),
							d = new Date(e * i.Cb);
						let l;
						if (o === r.a.Live || s) return Object(a.a)(n, "posts.event.inProgress");
						o === r.a.Future ? l = Object(r.d)(e) ? Object(a.a)(n, "posts.event.today") : Object(r.b)(e) >= 5 ? c(d, n) : function(e, t) {
							return e.toLocaleDateString(t, {
								weekday: "long"
							})
						}(d, n) : o === r.a.Past && (l = Object(r.d)(e) ? Object(a.a)(n, "posts.event.today") : c(d, n));
						const m = function(e, t) {
							return e.toLocaleTimeString(t, {
								hour12: !0,
								hour: "numeric",
								minute: "2-digit"
							}).replace(/ /g, "").toUpperCase()
						}(d, n);
						return "".concat(l, " @ ").concat(m)
					}(p, l, t, m);
					else {
						const e = Object(d.a)({
							isLoading: !0
						});
						b = o.a.createElement(E, {
							className: e
						})
					}
					if (m) O = o.a.createElement(f, null, o.a.createElement(y, null), b);
					else if (u === r.a.Future) O = o.a.createElement(h, null, o.a.createElement(v, null), b);
					else {
						if (u !== r.a.Past) return null;
						O = o.a.createElement(x, null, o.a.createElement(v, null), b)
					}
					return o.a.createElement(g, {
						className: e
					}, O)
				}
			}
			t.a = O
		},
		"./src/reddit/components/ExpandoButton/index.m.less": function(e, t, n) {
			e.exports = {
				outer: "RvLtAcdRtbOQbhFB7MD_T",
				icon: "saNpcHve-34zjaa0cbIxW",
				hideOnHover: "_25HJpaEPiVNq6Ss3Ad7dp9",
				showOnHover: "_2S05CzViTnl3I2ekCABqFo",
				outboundLinkIcon: "_1zB4YvOwHPxdPEXG2CYhKB"
			}
		},
		"./src/reddit/components/ExpandoButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/controls/OutboundLink/index.tsx"),
				p = n("./src/reddit/helpers/postHasSelfText/index.ts"),
				u = n("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				b = n("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"),
				h = n("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				x = n("./src/reddit/icons/fonts/helpers.tsx"),
				f = n("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less"),
				g = n.n(f);
			var v = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
					className: "".concat(Object(x.b)("expandoMediaLightbox"), " ").concat(e.className),
					onClick: e.onClick
				}), "LightboxIcon", g.a),
				y = n("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"),
				E = n("./src/reddit/icons/fonts/Gif/index.tsx"),
				O = n("./src/reddit/icons/fonts/Link/index.tsx"),
				w = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				C = n("./src/reddit/icons/fonts/Photos/index.tsx"),
				_ = n("./src/reddit/icons/fonts/Text/index.tsx"),
				k = n("./src/reddit/icons/svgs/Poll/index.tsx"),
				j = n("./src/reddit/models/Media/index.ts"),
				P = n("./src/reddit/components/ExpandoButton/index.m.less"),
				S = n.n(P);
			const I = Object(a.b)(null, (e, t) => ({
					toggle: () => e(Object(l.z)({
						postId: t.post.id
					}))
				})),
				N = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						n = arguments.length > 2 ? arguments[2] : void 0;
					const s = Object(c.a)(S.a.icon, S.a.hideOnHover);
					if (t) return r.a.createElement(u.a, {
						className: s
					});
					if (n.pollData) return r.a.createElement(k.a, {
						className: s
					});
					switch (e) {
						case j.n.GIFVIDEO:
							return r.a.createElement(E.a, {
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
							return r.a.createElement(O.a, {
								className: s
							})
					}
				};
			t.a = I(e => {
				const {
					className: t,
					crosspost: n,
					enableCrosspostIcon: o,
					isExpanded: a,
					post: l,
					toggle: u,
					useMediaIcons: x
				} = e, f = n || l, g = o && !!n;
				return f.media && !(("rtjson" === f.media.type || "text" === f.media.type) && !Object(p.a)(f)) || !!l.pollData ? r.a.createElement("button", {
					"aria-expanded": a,
					"aria-haspopup": !0,
					"aria-label": s.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(c.a)(t, S.a.outer),
					"data-click-id": a ? "expando_close" : "expando_open",
					onClick: u
				}, a ? r.a.createElement(b.a, {
					className: S.a.icon
				}) : x ? r.a.createElement(r.a.Fragment, null, N(f.media && f.media.type, g, l), r.a.createElement(h.a, {
					className: Object(c.a)(S.a.icon, S.a.showOnHover)
				})) : r.a.createElement(h.a, {
					className: S.a.icon
				})) : f.source && f.source.url ? r.a.createElement(m.a, {
					"aria-label": s.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(c.a)(t, S.a.outer),
					"data-click-id": "expando_open",
					href: f.source.url,
					isSponsored: l.isSponsored,
					postId: l.id,
					source: l.source,
					target: "_blank"
				}, r.a.createElement(w.a, {
					className: Object(c.a)(S.a.icon, S.a.outboundLinkIcon)
				})) : r.a.createElement(i.a, {
					"aria-label": s.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(c.a)(t, S.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(f.permalink),
					rel: "nofollow"
				}, r.a.createElement(v, {
					className: S.a.icon
				}))
			})
		},
		"./src/reddit/components/Footer/index.m.less": function(e, t, n) {
			e.exports = {
				FooterContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				footerContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				UserAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				userAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				PrivacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				privacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				UserAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				userAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/higherOrderComponents/asTooltip.tsx"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = n("./src/reddit/actions/preferences.ts"),
				p = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/constants/postLayout.ts"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				x = n("./src/reddit/contexts/Tooltip.ts"),
				f = n("./src/reddit/controls/Dropdown/index.tsx"),
				g = n("./src/reddit/controls/Dropdown/Row.tsx"),
				v = n("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				y = n("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				E = n("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				O = n("./src/reddit/selectors/telemetry.ts"),
				w = n("./src/reddit/selectors/tooltip.ts"),
				C = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				_ = n.n(C);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const j = "view--layout--FUE",
				P = "LayoutSwitch--picker",
				S = Object(c.a)(f.a),
				I = {
					[b.d.Card]: E.a,
					[b.d.Classic]: v.a,
					[b.d.Compact]: y.a
				},
				N = {
					[b.d.Card]: () => s.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[b.d.Classic]: () => s.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[b.d.Compact]: () => s.fbt._("compact", null, {
						hk: "1N7pcz"
					})
				},
				T = Object(h.t)(),
				L = Object(i.c)({
					dropdownIsOpen: Object(w.b)(P),
					postLayout: h.N,
					redditStyle: h.A
				}),
				M = Object(a.b)(L, e => ({
					onListingLayoutChange: (t, n) => e(Object(m.x)(t, n)),
					openDropdown: () => e(Object(p.h)({
						tooltipId: P
					}))
				}));
			class R extends r.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: n,
							sendEvent: s,
							subredditId: o
						} = this.props;
						t ? t(e) : (n(e, o), s(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(O.screen)(t),
							subreddit: Object(O.subreddit)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: n,
							onLayoutClick: s,
							postLayout: o
						} = this.props, a = n || b.e[o], i = e === a, c = I[e], l = N[e];
						return r.a.createElement(g.b, k({}, t, {
							className: Object(d.a)(_.a.LayoutItem, {
								[_.a.selected]: i
							}),
							"data-layout": e,
							displayText: l(),
							iconWrapperClassName: _.a.LayoutItemIconWrapper,
							isSelected: i,
							noHover: i,
							onClick: i ? void 0 : () => this.changeLayout(e),
							textClassName: _.a.LayoutItemTextClassName
						}), r.a.createElement(c, {
							className: _.a.LayoutIcon,
							onClick: i ? void 0 : s
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return r.a.createElement(S, k({}, e, {
							className: _.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: _.a.DropdownRow,
							rowIconClassName: _.a.DropdownRowIcon,
							rowSelectedClassName: _.a.DropdownRowSelected,
							tooltipId: P
						}), this.renderItem(b.d.Card), this.renderItem(b.d.Classic), this.renderItem(b.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: n,
						postLayout: s
					} = this.props, o = t || b.e[s];
					return r.a.createElement("div", {
						className: Object(d.a)(_.a.Container, e),
						id: j
					}, r.a.createElement("div", {
						className: _.a.DropdownContainer,
						onClick: n
					}, this.renderItem(o, {
						id: P,
						showDropdownTriangle: !0
					}), r.a.createElement(x.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = T(M(Object(u.c)(Object(l.a)(R))))
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "wBtTDilkW_rtT2k5x3eie",
				container: "wBtTDilkW_rtT2k5x3eie",
				LayoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5",
				layoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.array.sort.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/listingSort/index.ts"),
				c = n("./src/reddit/actions/preferences.ts"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				p = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				u = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/reselect/es/index.js")),
				b = n("./src/lib/addQueryParams/index.ts"),
				h = n("./src/lib/constants/index.ts"),
				x = n("./node_modules/react-router-redux/es/index.js"),
				f = n("./src/reddit/actions/tooltip.ts"),
				g = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./node_modules/fbt/lib/FbtPublic.js")),
				v = n("./src/higherOrderComponents/asTooltip.tsx"),
				y = n("./src/reddit/constants/listingSorts.ts"),
				E = n("./src/reddit/contexts/Tooltip.ts"),
				O = n("./src/reddit/controls/Dropdown/index.tsx"),
				w = n("./src/reddit/controls/Dropdown/Row.tsx"),
				C = n("./src/reddit/helpers/path/index.ts"),
				_ = n("./src/reddit/helpers/trackers/navigation.ts"),
				k = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				j = n("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				P = n("./src/reddit/selectors/tooltip.ts"),
				S = n("./src/reddit/selectors/user.ts"),
				I = n("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				N = n("./src/reddit/components/ListingSort/index.m.less"),
				T = n.n(N),
				L = n("./src/lib/lessComponent.tsx");

			function M() {
				return (M = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var R = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
				}
				return n
			};
			const A = "ListingSort--SortPicker",
				B = Object(v.a)(L.a.wrapped(O.a, "Dropdown", T.a)),
				F = L.a.wrapped(I.a, "ListingSortIcon", T.a),
				D = (L.a.wrapped(k.b, "DropdownTriangle", T.a), L.a.div("Title", T.a)),
				H = L.a.wrapped(e => o.a.createElement(w.b, M({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", T.a),
				W = e => {
					var {
						disabled: t
					} = e, n = R(e, ["disabled"]);
					return o.a.createElement("div", M({}, n, {
						className: Object(a.a)(T.a.SortWrapper, n.className, {
							[T.a.isDisabled]: t
						})
					}))
				},
				U = L.a.div("DropdownRowDisabled", T.a),
				V = Object(l.t)({
					isFrontpage: l.y,
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				G = Object(u.c)({
					isBestSortPopularEnabled: j.a,
					user: S.i,
					dropdownIsOpen: (e, t) => Object(P.b)(t.dropdownId || A)(e),
					language: S.Q,
					isPopularPage: l.C
				}),
				z = Object(r.b)(G, (e, t) => {
					let {
						dropdownId: n,
						pageLayer: s
					} = t;
					return {
						onOpenDropdown: () => e(Object(f.h)({
							tooltipId: n || A
						}))
					}
				});
			var K = L.a.wrapped(V(z(Object(d.c)(e => o.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, !1 !== e.showTitle && o.a.createElement(D, null, g.fbt._("Sort", null, {
					hk: "2BfINq"
				})), o.a.createElement(W, {
					disabled: e.disabled
				}, e.children || o.a.createElement(H, {
					className: e.buttonClassName,
					displayText: Object(y.a)(e.sort),
					id: e.dropdownId || A,
					showDropdownTriangle: !0
				}, o.a.createElement(F, {
					sort: e.sort
				}))), o.a.createElement(E.a.Consumer, null, t => o.a.createElement(B, M({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId || A
				}, t, {
					renderContentsHidden: !0
				}), e.disabled ? o.a.createElement(U, null, g.fbt._("Coming soon", null, {
					hk: "taPqm"
				})) : (e.sortOptions || ((e, t, n, s) => {
					const o = [h.M.HOT, h.M.NEW, h.M.TOP, h.M.RISING];
					return (e && (n || s) || t && s) && o.unshift(h.M.BEST), o
				})(e.isFrontpage, e.isPopularPage, e.user, e.isBestSortPopularEnabled)).map(t => o.a.createElement(w.b, {
					className: Object(a.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
					displayText: Object(y.a)(t),
					onClick: () => {
						e.onChange(t), e.sendEvent(Object(_.a)(t))
					},
					href: e.isProfilePage ? Object(b.a)(e.baseUrl, {
						sort: t
					}) : Object(C.a)(e.baseUrl, "".concat(t, "/")),
					isSelected: e.sort === t,
					key: t
				}, o.a.createElement(F, {
					className: e.rowIconClassName,
					sort: t
				}))))))))), "ListingSort", T.a),
				J = (n("./node_modules/core-js/modules/es6.regexp.split.js"), n("./src/reddit/constants/parameters.ts"));
			const q = e => {
					const t = Q[e];
					return t && t() || ""
				},
				Q = {
					[h.Mb.AllStates]: () => g.fbt._("all states", null, {
						hk: "1s9O3L"
					}),
					[h.Mb.Alaska]: () => g.fbt._("alaska", null, {
						hk: "3PQz70"
					}),
					[h.Mb.Alabama]: () => g.fbt._("alabama", null, {
						hk: "1Ain9C"
					}),
					[h.Mb.Arkansas]: () => g.fbt._("arkansas", null, {
						hk: "3MSLfs"
					}),
					[h.Mb.Arizona]: () => g.fbt._("arizona", null, {
						hk: "PjKyy"
					}),
					[h.Mb.California]: () => g.fbt._("california", null, {
						hk: "4fS2Uy"
					}),
					[h.Mb.Colorado]: () => g.fbt._("colorado", null, {
						hk: "2FU5sm"
					}),
					[h.Mb.Connecticut]: () => g.fbt._("connecticut", null, {
						hk: "3HJ97l"
					}),
					[h.Mb.DistrictOfColumbia]: () => g.fbt._("district of columbia", null, {
						hk: "43sboQ"
					}),
					[h.Mb.Delaware]: () => g.fbt._("delaware", null, {
						hk: "1sMYnC"
					}),
					[h.Mb.Florida]: () => g.fbt._("florida", null, {
						hk: "1ahnDc"
					}),
					[h.Mb.Georgia]: () => g.fbt._("georgia", null, {
						hk: "3O8sgW"
					}),
					[h.Mb.Hawaii]: () => g.fbt._("hawaii", null, {
						hk: "11be3k"
					}),
					[h.Mb.Iowa]: () => g.fbt._("iowa", null, {
						hk: "15vW0A"
					}),
					[h.Mb.Idaho]: () => g.fbt._("idaho", null, {
						hk: "12whY2"
					}),
					[h.Mb.Illinois]: () => g.fbt._("illinois", null, {
						hk: "4F6qqr"
					}),
					[h.Mb.Indiana]: () => g.fbt._("indiana", null, {
						hk: "1Xvs3I"
					}),
					[h.Mb.Kansas]: () => g.fbt._("kansas", null, {
						hk: "4yvtHS"
					}),
					[h.Mb.Kentucky]: () => g.fbt._("kentucky", null, {
						hk: "3iqD7X"
					}),
					[h.Mb.Louisiana]: () => g.fbt._("louisiana", null, {
						hk: "1pM17K"
					}),
					[h.Mb.Massachusetts]: () => g.fbt._("massachusetts", null, {
						hk: "3Hx5EP"
					}),
					[h.Mb.Maryland]: () => g.fbt._("maryland", null, {
						hk: "62JHL"
					}),
					[h.Mb.Maine]: () => g.fbt._("maine", null, {
						hk: "2Sh6yp"
					}),
					[h.Mb.Michigan]: () => g.fbt._("michigan", null, {
						hk: "2fnY28"
					}),
					[h.Mb.Minnesota]: () => g.fbt._("minnesota", null, {
						hk: "4diMsG"
					}),
					[h.Mb.Missouri]: () => g.fbt._("missouri", null, {
						hk: "3QuF4u"
					}),
					[h.Mb.Mississippi]: () => g.fbt._("mississippi", null, {
						hk: "28v1kQ"
					}),
					[h.Mb.Montana]: () => g.fbt._("montana", null, {
						hk: "20sZYn"
					}),
					[h.Mb.NorthCarolina]: () => g.fbt._("north carolina", null, {
						hk: "BUaf7"
					}),
					[h.Mb.NorthDakota]: () => g.fbt._("north dakota", null, {
						hk: "1WRpz0"
					}),
					[h.Mb.Nebraska]: () => g.fbt._("nebraska", null, {
						hk: "XUJCr"
					}),
					[h.Mb.NewHampshire]: () => g.fbt._("new hampshire", null, {
						hk: "ga6kK"
					}),
					[h.Mb.NewJersey]: () => g.fbt._("new jersey", null, {
						hk: "3Sz9QN"
					}),
					[h.Mb.NewMexico]: () => g.fbt._("new mexico", null, {
						hk: "i2870"
					}),
					[h.Mb.Nevada]: () => g.fbt._("nevada", null, {
						hk: "2DsBxU"
					}),
					[h.Mb.NewYork]: () => g.fbt._("new york", null, {
						hk: "2wKULo"
					}),
					[h.Mb.Ohio]: () => g.fbt._("ohio", null, {
						hk: "1KDnKA"
					}),
					[h.Mb.Oklahoma]: () => g.fbt._("oklahoma", null, {
						hk: "2P0Ita"
					}),
					[h.Mb.Oregon]: () => g.fbt._("oregon", null, {
						hk: "3CqdY4"
					}),
					[h.Mb.Pennsylvania]: () => g.fbt._("pennsylvania", null, {
						hk: "2skMK"
					}),
					[h.Mb.RhodeIsland]: () => g.fbt._("rhode island", null, {
						hk: "120MAU"
					}),
					[h.Mb.SouthCarolina]: () => g.fbt._("south carolina", null, {
						hk: "3JyeG9"
					}),
					[h.Mb.SouthDakota]: () => g.fbt._("south dakota", null, {
						hk: "4to42L"
					}),
					[h.Mb.Tennessee]: () => g.fbt._("tennessee", null, {
						hk: "gHo1c"
					}),
					[h.Mb.Texas]: () => g.fbt._("texas", null, {
						hk: "3dgz4M"
					}),
					[h.Mb.Utah]: () => g.fbt._("utah", null, {
						hk: "22zf2i"
					}),
					[h.Mb.Virginia]: () => g.fbt._("virginia", null, {
						hk: "1dvXBl"
					}),
					[h.Mb.Vermont]: () => g.fbt._("vermont", null, {
						hk: "1Cdmbu"
					}),
					[h.Mb.Washington]: () => g.fbt._("washington", null, {
						hk: "hhztG"
					}),
					[h.Mb.Wisconsin]: () => g.fbt._("wisconsin", null, {
						hk: "3SOyMZ"
					}),
					[h.Mb.WestVirginia]: () => g.fbt._("west virginia", null, {
						hk: "1jIKYD"
					}),
					[h.Mb.Wyoming]: () => g.fbt._("wyoming", null, {
						hk: "1QaJzt"
					})
				};
			var Z = n("./src/reddit/components/StateSort/index.m.less"),
				Y = n.n(Z);

			function X() {
				return (X = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const $ = L.a.wrapped(O.a, "_Dropdown", Y.a),
				ee = Object(v.a)($),
				te = e => {
					return e.indexOf("_") > 0 && se(e) === h.u.UnitedStates
				},
				ne = e => {
					if (te(e)) {
						return e.split("_")[1]
					}
					return h.Mb.AllStates
				},
				se = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				oe = e => {
					const t = se(e),
						n = ne(e);
					return te(e) ? "".concat(t, "_").concat(n) : t
				},
				re = Object(l.t)(),
				ae = Object(u.c)({
					dropdownIsOpen: Object(P.b)("StateSort--StateSortPicker")
				}),
				ie = Object(r.b)(ae, e => ({
					onOpenDropdown: () => e(Object(f.h)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, n) => {
						e(Object(x.b)(t)), e(Object(c.u)(h.u.UnitedStates + "_" + n))
					}
				}));
			var ce = L.a.wrapped(re(ie(e => {
				const t = "".concat(e.baseUrl, "?").concat(J.g, "=").concat(h.u.UnitedStates);
				return o.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, o.a.createElement(W, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, o.a.createElement(H, {
					className: e.buttonClassName,
					displayText: e.showStateAbbreviations && e.sort ? e.sort : q(e.sort),
					id: "StateSort--StateSortPicker",
					showDropdownTriangle: !0
				})), o.a.createElement(E.a.Consumer, null, n => o.a.createElement(ee, X({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "StateSort--StateSortPicker"
				}, n, {
					renderContentsHidden: !0
				}), Object.keys(h.Mb).map(n => {
					const s = h.Mb[n];
					return o.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === h.Mb.AllStates ? t : "".concat(t, "_").concat(e))(s), oe(s))
					}, o.a.createElement(w.b, {
						className: Object(a.a)(e.rowClassName, e.sort === s ? e.rowSelectedClassName : void 0),
						displayText: q(s),
						isSelected: e.sort === s
					}))
				}))))
			})), "Component", Y.a);
			const de = {
				[h.u.Everywhere]: () => g.fbt._("Everywhere", null, {
					hk: "3ysAHX"
				}),
				[h.u.UnitedStates]: () => g.fbt._("United States", null, {
					hk: "qrsat"
				}),
				[h.u.Argentina]: () => g.fbt._("Argentina", null, {
					hk: "1tWd87"
				}),
				[h.u.Australia]: () => g.fbt._("Australia", null, {
					hk: "2c0yTh"
				}),
				[h.u.Bulgaria]: () => g.fbt._("Bulgaria", null, {
					hk: "2mbkzD"
				}),
				[h.u.Canada]: () => g.fbt._("Canada", null, {
					hk: "1bnYIf"
				}),
				[h.u.Chile]: () => g.fbt._("Chile", null, {
					hk: "2eNYaZ"
				}),
				[h.u.Colombia]: () => g.fbt._("Colombia", null, {
					hk: "2sw6kC"
				}),
				[h.u.Croatia]: () => g.fbt._("Croatia", null, {
					hk: "4vRKYu"
				}),
				[h.u.CzechRepublic]: () => g.fbt._("Czech Republic", null, {
					hk: "21xzwE"
				}),
				[h.u.Finland]: () => g.fbt._("Finland", null, {
					hk: "jmDeD"
				}),
				[h.u.Greece]: () => g.fbt._("Greece", null, {
					hk: "UUFTD"
				}),
				[h.u.Hungary]: () => g.fbt._("Hungary", null, {
					hk: "4tz4jk"
				}),
				[h.u.Iceland]: () => g.fbt._("Iceland", null, {
					hk: "4mwr9S"
				}),
				[h.u.India]: () => g.fbt._("India", null, {
					hk: "omZ5C"
				}),
				[h.u.Ireland]: () => g.fbt._("Ireland", null, {
					hk: "3rG4DM"
				}),
				[h.u.Japan]: () => g.fbt._("Japan", null, {
					hk: "3EAE8v"
				}),
				[h.u.Malaysia]: () => g.fbt._("Malaysia", null, {
					hk: "MgsVM"
				}),
				[h.u.Mexico]: () => g.fbt._("Mexico", null, {
					hk: "4ibMpW"
				}),
				[h.u.NewZealand]: () => g.fbt._("New Zealand", null, {
					hk: "3LwpKe"
				}),
				[h.u.Philippines]: () => g.fbt._("Philippines", null, {
					hk: "jokzr"
				}),
				[h.u.Poland]: () => g.fbt._("Poland", null, {
					hk: "2v19X3"
				}),
				[h.u.Portugal]: () => g.fbt._("Portugal", null, {
					hk: "2HNYp5"
				}),
				[h.u.PuertoRico]: () => g.fbt._("Puerto Rico", null, {
					hk: "22QgWG"
				}),
				[h.u.Romania]: () => g.fbt._("Romania", null, {
					hk: "5HuLT"
				}),
				[h.u.Serbia]: () => g.fbt._("Serbia", null, {
					hk: "3ly2Z0"
				}),
				[h.u.Singapore]: () => g.fbt._("Singapore", null, {
					hk: "3qEBqp"
				}),
				[h.u.Sweden]: () => g.fbt._("Sweden", null, {
					hk: "A5nWO"
				}),
				[h.u.Taiwan]: () => g.fbt._("Taiwan", null, {
					hk: "IHujb"
				}),
				[h.u.Thailand]: () => g.fbt._("Thailand", null, {
					hk: "1c8zJr"
				}),
				[h.u.Turkey]: () => g.fbt._("Turkey", null, {
					hk: "11Xk7x"
				}),
				[h.u.UnitedKingdom]: () => g.fbt._("United Kingdom", null, {
					hk: "rs1fl"
				})
			};
			var le = n("./src/reddit/components/CountrySort/index.m.less"),
				me = n.n(le);

			function pe() {
				return (pe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ue = "CountrySort--CountrySortPicker",
				be = Object(l.t)(),
				he = Object(u.c)({
					dropdownIsOpen: Object(P.b)(ue),
					language: S.Q
				});
			var xe = be(Object(r.b)(he, e => ({
					onCloseDropdown: t => e(Object(f.j)({
						tooltipId: t
					})),
					onOpenDropdown: t => e(Object(f.g)({
						tooltipId: t
					})),
					onClickLink: (t, n) => {
						e(Object(x.b)(t)), e(Object(c.u)(n))
					}
				}))(e => {
					const t = se(e.sort),
						n = ne(e.sort),
						s = "".concat(e.baseUrl, "?").concat(J.g, "=");
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: Object(a.a)(me.a.countrySort, e.className),
						onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(ue) : e.onOpenDropdown(ue)
					}, o.a.createElement(W, {
						className: e.wrapperClassName,
						disabled: e.disabled
					}, o.a.createElement(H, {
						className: e.buttonClassName,
						displayText: (() => t in de ? de[t]() : de[h.u.Everywhere]())(),
						id: ue,
						showDropdownTriangle: !0
					})), o.a.createElement(E.a.Consumer, null, n => o.a.createElement(ee, pe({
						className: e.dropdownClassName,
						isOpen: e.dropdownIsOpen,
						tooltipId: ue
					}, n, {
						renderContentsHidden: !0
					}), Object.keys(h.u).map(n => {
						const r = h.u[n];
						return o.a.createElement("div", {
							key: r,
							onClick: () => e.onClickLink("".concat(s).concat(oe(r)), r)
						}, o.a.createElement(w.b, {
							className: Object(a.a)(e.rowClassName, t === r ? e.rowSelectedClassName : void 0),
							displayText: de[r](),
							isSelected: t === r
						}))
					})))), t === h.u.UnitedStates && o.a.createElement(ce, {
						baseUrl: e.baseUrl,
						buttonClassName: e.buttonClassName,
						className: e.stateSortClassName,
						disabled: e.disabled,
						dropdownClassName: e.dropdownClassName,
						rowClassName: e.rowClassName,
						rowSelectedClassName: e.rowSelectedClassName,
						showStateAbbreviations: e.showStateAbbreviations,
						sort: n,
						wrapperClassName: e.wrapperClassName
					}))
				})),
				fe = n("./node_modules/path-browserify/index.js"),
				ge = n.n(fe),
				ve = n("./src/reddit/components/TimeSort/index.m.less"),
				ye = n.n(ve);

			function Ee() {
				return (Ee = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Oe = Object(v.a)(O.a),
				we = (e, t, n) => {
					let s = e.url;
					return e.urlParams.sort || Object(l.G)(e) || (s = ge.a.join(s, t)), Object(b.a)(s, {
						[J.t]: n
					})
				},
				Ce = L.a.div("ListingSortContainer", ye.a),
				_e = Object(l.t)(),
				ke = Object(u.c)({
					dropdownIsOpen: Object(P.b)("TimeSort--SortPicker"),
					language: S.Q
				});
			var je = _e(Object(r.b)(ke, e => ({
					onOpenDropdown: () => e(Object(f.h)({
						tooltipId: "TimeSort--SortPicker"
					}))
				}))(Object(d.c)(e => o.a.createElement(Ce, {
					className: e.className,
					onClick: e.onOpenDropdown
				}, o.a.createElement(W, {
					className: e.wrapperClassName,
					disabled: !1
				}, o.a.createElement(H, {
					className: e.buttonClassName,
					displayText: Object(y.b)(e.timeSort),
					id: "TimeSort--SortPicker",
					showDropdownTriangle: !0
				})), o.a.createElement(E.a.Consumer, null, t => o.a.createElement(Oe, Ee({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "TimeSort--SortPicker"
				}, t), [h.Pb.HOUR, h.Pb.DAY, h.Pb.WEEK, h.Pb.MONTH, h.Pb.YEAR, h.Pb.ALL].map(t => o.a.createElement(w.b, {
					className: Object(a.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
					displayText: Object(y.b)(t),
					href: we(e.pageLayer, e.listingSort, t),
					isSelected: e.timeSort === t,
					onClick: () => {
						e.onChange(t), e.sendEvent(Object(_.c)(t))
					}
				})))))))),
				Pe = n("./src/reddit/constants/listings.ts"),
				Se = n("./src/reddit/controls/InternalLink/index.tsx"),
				Ie = n("./src/reddit/icons/fonts/Menu/index.tsx"),
				Ne = n("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				Te = n.n(Ne);

			function Le() {
				return (Le = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Me = new Set([h.M.CONTROVERSIAL, h.M.TOP]),
				Re = new Set([h.M.CONTROVERSIAL, h.M.RISING]),
				Ae = "ListingSort--Overflow",
				Be = Object(l.t)({
					isFrontpage: l.y,
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				Fe = Object(u.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, j.a, S.i, l.C, (e, t, n, s, o) => {
					if (e) return {
						isPopularPage: o,
						sortOptions: e
					};
					const r = [h.M.HOT, h.M.NEW, h.M.TOP, h.M.RISING];
					return (t && (s || n) || o && n) && r.unshift(h.M.BEST), {
						isPopularPage: o,
						sortOptions: r
					}
				});
			class De extends o.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(_.a)(e))
					}, this.getSortUrl = e => {
						const {
							baseUrl: t,
							isProfilePage: n
						} = this.props;
						return n ? Object(b.a)(t, {
							sort: e
						}) : Object(C.a)(t, "".concat(e, "/"))
					}, this.renderSort = e => {
						const {
							disabled: t,
							geopopularSort: n,
							isPopularPage: s,
							sort: r
						} = this.props, i = s && !!n && e === h.M.HOT && r === h.M.HOT;
						return o.a.createElement(o.a.Fragment, {
							key: e
						}, o.a.createElement(Se.a, {
							className: Object(a.a)(Te.a.SortLink, e === r && Te.a.selected),
							onClick: () => this.changeSort(e),
							to: this.getSortUrl(e),
							key: e
						}, o.a.createElement(F, {
							className: Te.a.SortIcon,
							sort: e
						}), o.a.createElement("div", {
							className: Te.a.SortLabel
						}, Object(y.a)(e))), i && o.a.createElement(xe, {
							baseUrl: Pe.c[Pe.b.Popular],
							buttonClassName: Te.a.DropdownButton,
							className: Te.a.CountrySort,
							disabled: t,
							dropdownClassName: Te.a.Dropdown,
							rowClassName: Te.a.DropdownRow,
							rowSelectedClassName: Te.a.DropdownRowSelected,
							wrapperClassName: Te.a.DropdownSortWrapper,
							showStateAbbreviations: !0,
							sort: n,
							stateSortClassName: Te.a.StateSort
						}))
					}
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: n,
						sort: s,
						sortOptions: r,
						timeSort: i
					} = this.props, c = !t && Me.has(s), d = Re.has(s), l = r.filter(e => !Re.has(e)), m = r.filter(e => Re.has(e) && e !== s);
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(K, Le({}, this.props, {
						buttonClassName: Te.a.DropdownButton,
						className: Object(a.a)(Te.a.SortDropdown, e),
						rowClassName: Te.a.DropdownRow,
						rowIconClassName: Te.a.DropdownRowIcon,
						rowSelectedClassName: Te.a.DropdownRowSelected,
						showTitle: !1
					})), o.a.createElement("div", {
						className: Object(a.a)(Te.a.SortButtons, e)
					}, l.map(this.renderSort)), d && this.renderSort(s), c && o.a.createElement(je, {
						baseUrl: this.getSortUrl(s),
						buttonClassName: Te.a.DropdownButton,
						className: Te.a.TimeSort,
						dropdownClassName: Te.a.Dropdown,
						listingSort: s,
						onChange: n,
						rowClassName: Te.a.DropdownRow,
						rowSelectedClassName: Te.a.DropdownRowSelected,
						timeSort: i || h.Qb,
						wrapperClassName: Te.a.DropdownSortWrapper
					}), m.length > 0 && o.a.createElement(K, Le({}, this.props, {
						className: Object(a.a)(Te.a.SortOverflow, e),
						dropdownClassName: Te.a.Dropdown,
						dropdownId: Ae,
						rowClassName: Te.a.DropdownRow,
						rowIconClassName: Te.a.DropdownRowIcon,
						rowSelectedClassName: Te.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: m
					}), o.a.createElement("button", {
						className: Te.a.SortOverflowButton,
						id: Ae
					}, o.a.createElement(Ie.a, null))))
				}
			}
			var He = Be(Object(r.b)(Fe)(Object(d.c)(De))),
				We = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				Ue = n.n(We);
			const Ve = Object(l.t)({
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				Ge = Object(r.b)(null, (e, t) => {
					let {
						subredditId: n
					} = t;
					return {
						updateSortPreference: (t, s) => {
							if (n) {
								const o = Object(i.c)({
									sort: t,
									timeSort: s
								});
								e(Object(c.I)(n, o))
							}
						}
					}
				});
			class ze extends o.a.Component {
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
						countrySort: n,
						disabled: s = !1,
						isProfilePage: r,
						sort: i,
						sortOptions: c,
						subredditId: d,
						timeSort: l,
						updateSortPreference: m
					} = this.props;
					return o.a.createElement("div", {
						className: Object(a.a)(Ue.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, o.a.createElement(He, {
						baseUrl: e,
						disabled: s,
						geopopularSort: n,
						onChange: m,
						onTimeSortChange: this.updateTimeSort,
						sort: i,
						sortOptions: c,
						timeSort: l
					}), !r && o.a.createElement(p.a, {
						className: Ue.a.LayoutSwitch,
						subredditId: d
					}))
				}
			}
			t.a = Ve(Ge(Object(d.c)(ze)))
		},
		"./src/reddit/components/GildModal/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				o = n("./src/lib/loadWithRetries/index.ts");
			const r = Object(s.a)({
				getComponent: () => Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~9f4422c2"), n.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~be557eac"), n.e("FramedGild~GildModal"), n.e("GildModal")]).then(n.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			t.a = r
		},
		"./src/reddit/components/LargePost/placeholder.m.less": function(e, t, n) {
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
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less": function(e, t, n) {
			e.exports = {
				Container: "_2cB6ysPhgaYtknebHcCXGH",
				container: "_2cB6ysPhgaYtknebHcCXGH",
				Component: "qQD1kUtHq2K4gyBqJrEnF",
				component: "qQD1kUtHq2K4gyBqJrEnF",
				"m-consider-sidebar": "gd0BrpRBoY73xB5YwvDWU",
				mConsiderSidebar: "gd0BrpRBoY73xB5YwvDWU"
			}
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/componentSizes.ts"),
				d = n("./src/reddit/constants/postLayout.ts"),
				l = n("./src/reddit/constants/screenWidths.ts"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less"),
				u = n.n(p),
				b = n("./src/lib/lessComponent.tsx");
			const h = Object(m.t)(),
				x = Object(a.c)({
					layout: m.N
				}),
				f = Object(r.b)(x);
			class g extends o.a.Component {
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
						n = c.g - t,
						s = l.a + n + (this.props.bladeOpen ? c.a : 0);
					return this.props.layout !== d.g.Large ? null : o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n            @media (min-width: ".concat(s, "px) {\n              .").concat(u.a.Component, " {\n                left: calc((100% + var(--layoutNavigation-considerateNav-offsetLeft) - ").concat(c.g + c.q + c.r, "px) / 2);\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ").concat(c.r, "px) / 2);\n              }\n\n              .").concat(u.a.Component, ".").concat(u.a["m-consider-sidebar"], " {\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ").concat(c.g + c.q + c.r, "px) / 2);\n              }\n            }\n          ")
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
			t.a = h(f(b.a.wrapped(g, "Component", u.a)))
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/icons/svgs/Best/index.m.less"),
				c = n.n(i);
			var d = e => o.a.createElement("svg", {
					className: Object(r.a)(c.a.best, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					d: "M18.06,3a1,1,0,0,0-1-1A11.16,11.16,0,0,0,9.11,5.29L6.72,7.68A4.45,4.45,0,0,0,4.33,7,4.5,4.5,0,0,0,1.15,8.3a.5.5,0,0,0,0,.71L4,11.84l4.25,4.24,2.83,2.83h0a.48.48,0,0,0,.7,0,4.49,4.49,0,0,0,.62-5.57L14.76,11A11.15,11.15,0,0,0,18.06,3ZM13.47,9.41a2,2,0,0,1-2.88-2.77l.05,0a2,2,0,0,1,2.83,2.82Z"
				}), o.a.createElement("path", {
					d: "M3.21,14.73h0A3.89,3.89,0,0,0,2.06,17.5a.5.5,0,0,0,.5.5,4,4,0,0,0,2.83-1.21,1.5,1.5,0,1,0-2.18-2.06Z"
				})),
				l = n("./src/reddit/icons/svgs/Controversial/index.m.less"),
				m = n.n(l);
			var p = e => o.a.createElement("svg", {
					className: Object(r.a)(m.a.controversial, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("g", null, o.a.createElement("polygon", {
					fill: "inherit",
					points: "16 0 7.25 0 3.5 10.108 8.5 10.108 4.475 20 16 8 11 8"
				}))),
				u = n("./src/reddit/icons/svgs/Hot/index.m.less"),
				b = n.n(u);
			var h = e => o.a.createElement("svg", {
					className: Object(r.a)(b.a.icon, e.className),
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, o.a.createElement("title", null, "Hot"), o.a.createElement("path", {
					d: "M10.31.61a.5.5,0,0,0-.61,0C9.41.83,2.75,6.07,2.75,11.47a8.77,8.77,0,0,0,3.14,6.91.5.5,0,0,0,.75-.64,3.84,3.84,0,0,1-.55-2A7.2,7.2,0,0,1,10,9.56a7.2,7.2,0,0,1,3.91,6.23,3.84,3.84,0,0,1-.55,2,.5.5,0,0,0,.75.64,8.77,8.77,0,0,0,3.14-6.91C17.25,6.07,10.59.83,10.31.61Z"
				})),
				x = n("./src/reddit/icons/svgs/New/index.tsx"),
				f = n("./src/reddit/icons/svgs/Rising/index.m.less"),
				g = n.n(f);
			var v = e => o.a.createElement("svg", {
					className: Object(r.a)(g.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("g", null, o.a.createElement("path", {
					fill: "inherit",
					d: "M18.5 4h-6a.5.5 0 0 0-.35.85l1.64 1.65-3.29 3.29L8.21 7.5a1 1 0 0 0-1.41 0L.65 13.65a.5.5 0 0 0 0 .71l2 2a.5.5 0 0 0 .71 0l4.14-4.15 2.29 2.29a1 1 0 0 0 1.41 0l5.3-5.29 1.65 1.65a.5.5 0 0 0 .85-.36v-6a.5.5 0 0 0-.5-.5z"
				}))),
				y = n("./src/reddit/icons/svgs/Top/index.tsx"),
				E = n("./src/reddit/controls/Dropdown/index.m.less"),
				O = n.n(E);
			const w = {
				[a.M.BEST]: d,
				[a.M.HOT]: h,
				[a.M.NEW]: x.a,
				[a.M.CONTROVERSIAL]: p,
				[a.M.TOP]: y.a,
				[a.M.RISING]: v
			};
			t.a = e => {
				let {
					className: t,
					sort: n
				} = e;
				const s = w[n];
				return s ? o.a.createElement(s, {
					className: Object(r.a)(t, O.a.iconStyles)
				}) : null
			}
		},
		"./src/reddit/components/ListingSort/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModModeReports/index.m.less": function(e, t, n) {
			e.exports = {
				Text: "_1gNngyeM0l7oKkuGjoSTm",
				text: "_1gNngyeM0l7oKkuGjoSTm",
				Placeholder: "_1oYW-msczpGlYVcXmyEu9j",
				placeholder: "_1oYW-msczpGlYVcXmyEu9j"
			}
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/ModModeReports/index.m.less"),
				c = n.n(i);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = a.a.div("Text", c.a), m = a.a.div("Placeholder", c.a), p = () => r.a.createElement(m, null, r.a.createElement(l, null, d._("Loading reports…", null, {
				hk: "4gwdQw"
			}))), u = Object(s.a)({
				resolved: {},
				chunkName: () => "ModerationDropdowns",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ModerationDropdowns").then(n.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
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
		"./src/reddit/components/ModerationPrompts/Prompt.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./src/reddit/actions/post.ts"),
				d = n("./src/reddit/actions/reportFlow.ts"),
				l = n("./src/reddit/components/Popup/index.tsx"),
				m = n("./src/reddit/components/Popup/Button.tsx"),
				p = n("./src/reddit/helpers/trackers/reportPrompt.ts"),
				u = n("./src/reddit/hooks/useTracking.ts"),
				b = n("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function h(e) {
				const {
					subredditName: t,
					post: n,
					isOverlay: h
				} = e, [x, f] = Object(o.useState)(!0), g = Object(b.b)(n.id, h), v = Object(a.c)(), y = Object(u.a)(), E = Object(b.a)(n, h), O = (e, s) => y(Object(p.a)(t, n.id, e, s));
				Object(o.useEffect)(() => {
					E && O("modal", "show")
				}, [E]);
				if (!E || !x) return null;
				const w = s.fbt._("Help r/{subredditName} mods", [s.fbt._param("subredditName", t)], {
					hk: "1rusN4"
				});
				return r.a.createElement(l.a, {
					id: g,
					title: w,
					onClose: () => {
						f(!1), O("close", "click"), v(Object(c.I)()), v(Object(c.T)({
							[n.id]: {
								moderationPrompt: void 0
							}
						}))
					},
					onClickOutside: () => {
						v(Object(c.I)())
					}
				}, r.a.createElement("p", null, s.fbt._("Report this post if it's breaking {=Reddit} or {=community} rules.", [s.fbt._param("=Reddit", r.a.createElement("a", {
					href: "https://www.redditinc.com/policies/content-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, s.fbt._("Reddit", null, {
					hk: "4g8g4O"
				}))), s.fbt._param("=community", r.a.createElement(i.a, {
					to: "/r/".concat(t, "/about/rules"),
					target: "_blank"
				}, s.fbt._("community", null, {
					hk: "1cy8jU"
				})))], {
					hk: "sfngx"
				})), r.a.createElement(m.a, {
					onClick: () => (f(!1), O("report", "click"), void v(Object(d.j)(n.id)))
				}, s.fbt._("Report", null, {
					hk: "3M0Eii"
				})))
			}
		},
		"./src/reddit/components/ModerationPrompts/Survey.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			}));
			var s, o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/actions/reportFlow.ts"),
				m = n("./src/reddit/components/Popup/index.tsx"),
				p = n("./src/reddit/components/Popup/Button.tsx"),
				u = n("./src/reddit/helpers/trackers/reportPrompt.ts"),
				b = n("./src/reddit/hooks/useTracking.ts"),
				h = n("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function x(e) {
				const {
					subredditName: t,
					post: n,
					isOverlay: x
				} = e, [f, g] = Object(r.useState)(s.Survey), v = Object(h.b)(n.id, x), y = Object(i.c)(), E = Object(b.a)(), O = Object(h.a)(n, x), w = (e, s) => E(Object(u.b)(t, n.id, e, s));
				Object(r.useEffect)(() => {
					O && w("modal", "show")
				}, [O]);
				const C = e => {
					g(s.Closed), w("site" === e ? "breaks_reddit_rules" : "breaks_community_rules", "click"), y(Object(l.j)(n.id, void 0, void 0, e))
				};
				if (!O) return null;
				let _ = null;
				const k = {
					id: v,
					title: o.fbt._("Why did you downvote this post?", null, {
						hk: "2tTiIx"
					}),
					onClose: () => {
						g(s.Closed), w("close", "click"), y(Object(d.I)())
					},
					onClickOutside: () => {
						y(Object(d.I)())
					}
				};
				switch (f) {
					case s.Survey:
						_ = a.a.createElement(m.a, k, a.a.createElement("p", null, o.fbt._("Your answer helps r/ {subredditName} mods improve this community.", [o.fbt._param("subredditName", t)], {
							hk: "DNEel"
						})), a.a.createElement(p.a, {
							onClick: () => {
								g(s.OffTopic), w("off_topic", "click")
							}
						}, o.fbt._("It's off topic", null, {
							hk: "4iG26l"
						})), a.a.createElement(p.a, {
							onClick: () => {
								g(s.DontLike), w("dont_like", "click")
							}
						}, o.fbt._("I don't like it", null, {
							hk: "1jB1Mh"
						})), a.a.createElement(p.a, {
							onClick: () => {
								g(s.BreaksRules), w("breaks_rules", "click")
							}
						}, o.fbt._("It breaks the rules", null, {
							hk: "1yQBhi"
						})));
						break;
					case s.OffTopic:
						_ = a.a.createElement(m.a, k, a.a.createElement("p", null, o.fbt._("Got it. Thanks for helping out this community.", null, {
							hk: "22pTV3"
						})));
						break;
					case s.DontLike:
						_ = a.a.createElement(m.a, k, a.a.createElement("p", null, o.fbt._("Just a reminder, it’s not an official rule but it is considered improper Reddiquette to downvote an otherwise acceptable post because you don’t personally like it.", null, {
							hk: "3mRvPM"
						})));
						break;
					case s.BreaksRules:
						_ = a.a.createElement(m.a, k, a.a.createElement("p", null, o.fbt._("Let us know if it breaks {=Reddit} or {=community} rules.", [o.fbt._param("=Reddit", a.a.createElement("a", {
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
					case s.Closed:
				}
				return _
			}! function(e) {
				e[e.Survey = 0] = "Survey", e[e.OffTopic = 1] = "OffTopic", e[e.DontLike = 2] = "DontLike", e[e.BreaksRules = 3] = "BreaksRules", e[e.Closed = 4] = "Closed"
			}(s || (s = {}))
		},
		"./src/reddit/components/OverviewChronoComment/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/OverviewChronoList/ListItem.m.less": function(e, t, n) {
			e.exports = {
				OverviewCommentPost: "_2mg6JuVCrcHWJkUQvZXFcZ",
				overviewCommentPost: "_2mg6JuVCrcHWJkUQvZXFcZ",
				ClassicPost: "OZOlqlxhdnIVuS5MQ5yMi",
				classicPost: "OZOlqlxhdnIVuS5MQ5yMi"
			}
		},
		"./src/reddit/components/OverviewChronoList/ListItem.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/ClassicPost/index.tsx"),
				a = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/react-redux/es/index.js")),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/constants/gold.ts"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = n("./src/reddit/actions/post.ts"),
				p = n("./src/reddit/components/CommentContainer/index.tsx"),
				u = n("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				b = n("./src/reddit/helpers/getClickInfo.ts"),
				h = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				x = n("./src/reddit/selectors/comments.ts"),
				f = n("./src/reddit/selectors/communityAwards.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/components/OverviewChronoComment/index.m.less"),
				y = n.n(v);
			const E = Object(a.b)(() => Object(i.c)({
				comment: x.n,
				isAwarded: (e, t) => {
					const n = Object(x.n)(e, t);
					return !(!n || !n.awardCountsById) && Object.keys(n.awardCountsById).some(t => {
						const n = Object(f.a)(e, t);
						return n && n.coinPrice >= c.g
					})
				},
				isNightmodeOn: g.S
			}), e => ({
				openPost: t => e(Object(m.M)(t))
			}));
			var O = Object(l.a)(E(e => {
					const {
						comment: t,
						commentId: n,
						first: s,
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
							[y.a.isFirst]: s
						})
					}, o.a.createElement("div", {
						className: y.a.commentSeparator
					}), t.parentId && o.a.createElement("div", {
						className: y.a.commentSeparator
					}), o.a.createElement("div", {
						className: y.a.commentContentWrapper
					}, o.a.createElement(u.a, {
						commentId: n,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: !0,
						showModTools: l,
						isExpanded: !0
					})))))
				})),
				w = n("./src/reddit/components/OverviewCommentPost/index.tsx"),
				C = n("./src/reddit/contexts/PageLayer/index.tsx"),
				_ = n("./src/reddit/helpers/isComment.ts"),
				k = n("./src/reddit/components/OverviewChronoList/ListItem.m.less"),
				j = n.n(k),
				P = n("./src/lib/lessComponent.tsx");

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var I = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
				}
				return n
			};
			const N = Object(C.t)({
					currentProfileName: C.h,
					isCommentsPage: C.w,
					isCommentPermalink: C.v,
					isProfilePostListing: C.I,
					pageLayer: e => e
				}),
				T = P.a.wrapped(w.a, "OverviewCommentPost", j.a),
				L = P.a.wrapped(r.default, "ClassicPost", j.a);
			t.a = N(e => {
				const {
					itemId: t,
					isFirstInCommentList: n,
					isLastInCommentList: s,
					allowModToolsUnderComments: r,
					height: a,
					width: i
				} = e, c = I(e, ["itemId", "isFirstInCommentList", "isLastInCommentList", "allowModToolsUnderComments", "height", "width"]);
				return Object(_.a)(t) ? n ? o.a.createElement(o.a.Fragment, null, o.a.createElement(T, S({}, c, {
					availableWidth: i,
					commentId: t
				})), o.a.createElement(O, {
					commentId: t,
					first: n,
					last: s,
					showModTools: r
				})) : o.a.createElement(O, {
					commentId: t,
					first: n,
					last: s,
					showModTools: r
				}) : o.a.createElement(L, S({}, c, {
					inSubredditOrProfile: !1
				}))
			})
		},
		"./src/reddit/components/OverviewCommentPost/index.m.less": function(e, t, n) {
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
				MetaSeparator: "_3RjYJMG6TaMnSwb88daQ7W",
				metaSeparator: "_3RjYJMG6TaMnSwb88daQ7W",
				postTopMetaMetaSeparator: "_2IhK-xvBLjMsX4HZ-T6j-W"
			}
		},
		"./src/reddit/components/OverviewCommentPost/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/controls/InternalLink/index.tsx"),
				p = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				u = n("./src/reddit/selectors/comments.ts"),
				b = n("./src/reddit/selectors/posts.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/components/PostContainer/index.tsx"),
				f = n("./src/reddit/components/PostTitle/index.tsx"),
				g = n("./src/reddit/components/PostTopMeta/index.tsx"),
				v = n("./src/reddit/icons/fonts/Comment/index.tsx"),
				y = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				E = n.n(y),
				O = n("./src/reddit/components/OverviewCommentPost/index.m.less"),
				w = n.n(O);
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js"), _ = d.a.wrapped(m.a, "InternalLink", w.a), k = d.a.div("Wrapper", w.a), j = d.a.div("Row", w.a), P = d.a.wrapped(v.a, "CommentIcon", w.a), S = d.a.div("TitleContainer", w.a), I = d.a.div("PostTitleContainer", w.a), N = d.a.wrapped(f.c, "PostTitle", w.a), T = d.a.wrapped(g.d, "PostTopMeta", w.a), L = d.a.wrapped(g.a, "MetaSeparator", w.a), M = Object(r.b)(() => Object(a.c)({
				comment: u.n,
				language: h.Q,
				post: b.O,
				subredditOrProfile: b.bb
			})), R = e => {
				const {
					language: t,
					post: n,
					subredditOrProfile: r
				} = e;
				if (r) return o.a.createElement(s.Fragment, null, o.a.createElement(L, null), o.a.createElement(T, {
					language: t,
					metaSeparatorClassName: w.a.postTopMetaMetaSeparator,
					post: n,
					showSub: !0,
					showTimestamp: !1,
					subredditOrProfile: r
				}))
			}, A = e => {
				const {
					comment: t,
					profileName: n
				} = e;
				if (!t) return null;
				const s = n || t.author;
				return o.a.createElement(_, {
					"data-click-id": "user",
					to: "/user/".concat(s, "/")
				}, s)
			};
			t.a = Object(c.a)(M(Object(l.c)(e => {
				const {
					className: t,
					eventFactory: n,
					onClickPost: s,
					post: r
				} = e;
				return o.a.createElement(x.a, {
					className: Object(i.a)(E.a.compactPostStyles, w.a.overviewCommentPost, {
						[w.a.banned]: !!e.post.bannedBy,
						[w.a.reported]: !e.post.bannedBy && !!e.post.numReports && e.post.numReports > 0
					}, t),
					post: r,
					onClick: s,
					eventFactory: n
				}, o.a.createElement(k, {
					style: {
						background: Object(p.e)(e)
					}
				}, o.a.createElement(j, null, o.a.createElement(P, null), o.a.createElement(S, null, C._("{postAuthor} commented on {postTitle} {postMeta}", [C._param("postAuthor", A(e)), C._param("postTitle", o.a.createElement(I, null, o.a.createElement(N, {
					outboundLinkClassName: w.a.postTitleOutboundLink,
					post: r,
					size: f.b.Small,
					titleClassName: w.a.postTitleTitle
				}))), C._param("postMeta", R(e))], {
					hk: "d6l8e"
				})))))
			})))
		},
		"./src/reddit/components/OverviewConversationsPost/Border/index.m.less": function(e, t, n) {
			e.exports = {
				border: "_1lhlKOukuHHzZKIlnXcHmQ",
				isFirst: "_2o6nV_ET0Jis6_EzEHx9K3",
				isLast: "_1C2mkyHj-MAuIndy8vJIU5"
			}
		},
		"./src/reddit/components/OverviewConversationsPost/Border/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/OverviewConversationsPost/Border/index.m.less"),
				i = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var d = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
				}
				return n
			};
			t.a = e => {
				var {
					isFirst: t,
					isLast: n
				} = e, s = d(e, ["isFirst", "isLast"]);
				return o.a.createElement("div", c({
					className: Object(r.a)(i.a.border, {
						[i.a.isFirst]: t,
						[i.a.isLast]: n
					})
				}, s))
			}
		},
		"./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/times.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/constants/gold.ts"),
				l = n("./src/lib/classNames/index.ts"),
				m = n("./src/lib/lessComponent.tsx"),
				p = n("./src/reddit/components/CommentContainer/index.tsx"),
				u = n("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				b = n("./src/reddit/actions/post.ts"),
				h = n("./src/reddit/helpers/getClickInfo.ts"),
				x = n("./src/reddit/selectors/comments.ts"),
				f = n("./src/reddit/selectors/communityAwards.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less"),
				y = n.n(v);
			const E = m.a.div("ProfileOwnerCommentWrapper", y.a),
				O = m.a.div("CommentContentWrapper", y.a),
				w = m.a.div("Wrapper", y.a),
				C = m.a.div("CommentSeparator", y.a),
				_ = Object(i.b)(() => Object(c.c)({
					comment: (e, t) => Object(x.n)(e, t),
					isAwarded: (e, t) => {
						const n = Object(x.n)(e, t);
						return !(!n || !n.awardCountsById) && Object.keys(n.awardCountsById).some(t => {
							const n = Object(f.a)(e, t);
							return n && n.coinPrice >= d.g
						})
					},
					isNightmodeOn: g.S
				}), e => ({
					openPost: t => e(Object(b.M)(t))
				}));
			class k extends a.a.Component {
				render() {
					const {
						comment: e,
						commentId: t,
						depth: n,
						openPost: s,
						isAwarded: r,
						isFirst: i,
						isLast: c,
						isNightmodeOn: d,
						profileName: m,
						showModTools: u
					} = this.props, b = m === e.author ? j : P;
					return a.a.createElement(p.a, {
						comment: e,
						onClick: (e, t) => {
							s({
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
					}, o()(n + 1, e => a.a.createElement(C, {
						key: e
					})), a.a.createElement(O, null, b(t, m, u))))
				}
			}
			const j = (e, t, n) => a.a.createElement(E, null, P(e, t, n, !0, !0)),
				P = function(e, t, n) {
					let s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
						o = arguments.length > 4 ? arguments[4] : void 0;
					return a.a.createElement(u.a, {
						commentId: e,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: s,
						showModTools: n,
						isExpanded: !!o
					})
				};
			t.a = _(k)
		},
		"./src/reddit/components/Popup/Button.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/Popup/index.m.less"),
				a = n.n(r);

			function i(e) {
				return o.a.createElement("button", {
					className: a.a.popupButton,
					onClick: e.onClick
				}, e.children)
			}
		},
		"./src/reddit/components/Popup/index.m.less": function(e, t, n) {
			e.exports = {
				popup: "t5ViKDVyrrlzRbCpXvJu7",
				header: "preWelIDv3a0Fgtd5_QjN",
				title: "_3Xw5NRiOh-SAcOXIUMIm-l",
				closeButton: "_3oee1_5V2jOvP4BaO2LCQu",
				popupButton: "_3nddrgCBXpzDP5XYzrH3ZY"
			}
		},
		"./src/reddit/components/Popup/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/uuid/v4.js"),
				a = n.n(r),
				i = n("./src/reddit/hooks/useOnClickOutside.ts"),
				c = n("./src/reddit/components/Popup/index.m.less"),
				d = n.n(c);

			function l(e) {
				const {
					id: t = a()(),
					onClose: n,
					onClickOutside: s,
					title: r,
					children: c
				} = e;
				return Object(i.a)(t, s), o.a.createElement("div", {
					id: t,
					"aria-modal": !0,
					className: d.a.popup,
					role: "dialog",
					tabIndex: -1
				}, o.a.createElement("h3", {
					className: d.a.header
				}, o.a.createElement("span", {
					className: d.a.title
				}, r), o.a.createElement("button", {
					className: d.a.closeButton,
					onClick: n
				}, "✕")), c)
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = n("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
				}
				return n
			};
			t.a = Object(a.a)(e => {
				const {
					children: t,
					className: n,
					flairStyleTemplate: s,
					onClick: a,
					post: c,
					redditStyle: p,
					theme: u
				} = e, b = m(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return o.a.createElement("div", l({
					className: Object(r.a)(d.a.backgroundWrapper, n),
					style: Object(i.c)(s, e),
					onClick: a
				}, b), t)
			})
		},
		"./src/reddit/components/PostBadges/index.m.less": function(e, t, n) {
			e.exports = {
				adminIcon: "_1cje4rrmwL0yZgCOlGyBJ-",
				approveIcon: "_1knR9NIIXdSFC9IeFN11JL",
				automoderator: "_2etEb_0bRB9axAqF3uX28S",
				icon: "_3vju76MdF2FaGmELBeiJ_r",
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
		"./src/reddit/components/PostBadges/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				m = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				p = n("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				u = n("./src/reddit/constants/posts.ts"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/helpers/isRemoved.ts"),
				x = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				f = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				g = n("./src/reddit/models/Post/index.ts"),
				v = n("./src/reddit/selectors/posts.ts"),
				y = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				E = n("./src/reddit/icons/fonts/Archived/index.tsx"),
				O = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				w = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				C = n("./src/reddit/icons/fonts/Report/index.tsx"),
				_ = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				k = n("./src/reddit/icons/fonts/Sticky/index.tsx"),
				j = n("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				P = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				S = n("./src/reddit/components/PostBadges/index.m.less"),
				I = n.n(S);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const T = e => r.a.createElement("span", N({
					className: I.a.removalReason
				}, e), e.children),
				L = () => s.fbt._("Archived", null, {
					hk: "zv3q3"
				}),
				M = () => s.fbt._("Comments are locked", null, {
					hk: "8HjJ9"
				}),
				R = e => s.fbt._("Moderator of {community name}", [s.fbt._param("community name", e)], {
					hk: "nJqIB"
				}),
				A = () => s.fbt._("Stickied post", null, {
					hk: "3qSaBs"
				}),
				B = () => s.fbt._("Pinned post", null, {
					hk: "2oxErI"
				}),
				F = (e, t, n) => {
					const s = "PostBadges--".concat(e, "--").concat(t);
					return n ? "".concat(s, "--").concat(n) : s
				},
				D = Object(b.t)({
					isProfilePostListing: b.I,
					isSubreddit: b.K,
					pageLayer: e => e
				}),
				H = Object(i.c)({
					isPinned: (e, t) => {
						let {
							post: n
						} = t;
						return Object(v.u)(e, {
							postId: n.id
						})
					},
					modModeEnabled: b.P
				}),
				W = Object(a.b)(H, (e, t) => ({
					onHideTooltip: () => e(Object(l.i)()),
					onOpenRemovalReasonModal: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(n => e(n.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(l.f)({
						tooltipId: t
					}))
				}));
			t.a = D(W(e => {
				let {
					className: t,
					displayText: n,
					isSubreddit: a,
					inSubredditOrProfile: i,
					isCompactPinnedPost: l,
					isPinned: b,
					isProfilePostListing: v,
					language: S,
					modModeEnabled: D,
					onHideTooltip: H,
					onOpenRemovalReasonModal: W,
					onShowTooltip: U,
					post: V,
					tooltipType: G
				} = e;
				const z = {
						caretOnTop: !1
					},
					K = V.isRemoved && !V.modRemovalReason && !V.modNote && V.belongsTo.type === u.a.SUBREDDIT,
					J = F("Approve", V.id, G),
					q = F("Archived", V.id, G),
					Q = F("Automod", V.id, G),
					Z = F("Lock", V.id, G),
					Y = F("Mod", V.id, G),
					X = F("Remove", V.id, G),
					$ = F("Report", V.id, G),
					ee = F("Spam", V.id, G),
					te = F("Sticky", V.id, G),
					ne = F("Pinned", V.id, G);
				return r.a.createElement("div", {
					className: t
				}, i && n && V.distinguishType === d.A.MODERATOR && r.a.createElement(o.Fragment, null, r.a.createElement(P.a, {
					className: I.a.modIcon,
					desc: R(n),
					id: Y,
					onMouseEnter: U(Y),
					onMouseLeave: H
				}), r.a.createElement(m.c, N({
					tooltipId: Y,
					text: R(n)
				}, z))), V.isArchived && r.a.createElement(o.Fragment, null, r.a.createElement(E.a, {
					className: I.a.archivedIcon,
					desc: L(),
					id: q,
					onMouseEnter: U(q),
					onMouseLeave: H
				}), r.a.createElement(m.c, N({
					tooltipId: q,
					text: L()
				}, z))), V.isLocked && r.a.createElement(o.Fragment, null, r.a.createElement(O.a, {
					className: I.a.lockIcon,
					desc: M(),
					id: Z,
					onMouseEnter: U(Z),
					onMouseLeave: H
				}), r.a.createElement(m.c, N({
					tooltipId: Z,
					text: M()
				}, z))), a && Object(g.k)(V) && !l && r.a.createElement(o.Fragment, null, r.a.createElement(k.a, {
					className: I.a.stickyIcon,
					desc: A(),
					id: te,
					onMouseEnter: U(te),
					onMouseLeave: H
				}), r.a.createElement(m.c, N({
					tooltipId: te,
					text: A()
				}, z))), v && b && r.a.createElement(o.Fragment, null, r.a.createElement(k.a, {
					className: I.a.stickyIcon,
					desc: B(),
					id: ne,
					onMouseEnter: U(ne),
					onMouseLeave: H
				}), r.a.createElement(m.c, N({
					tooltipId: ne,
					text: B()
				}, z))), (V.isApproved || V.approvedBy) && r.a.createElement(o.Fragment, null, r.a.createElement(y.a, {
					className: I.a.approveIcon,
					desc: Object(x.a)(V),
					id: J,
					onMouseEnter: U(J),
					onMouseLeave: H
				}), r.a.createElement(m.c, N({
					tooltipId: J,
					text: Object(x.a)(V)
				}, z))), Object(h.a)(V) && r.a.createElement(o.Fragment, null, r.a.createElement(w.a, {
					className: I.a.removeIcon,
					desc: Object(x.c)(V),
					id: X,
					onMouseEnter: U(X),
					onMouseLeave: H
				}), K && r.a.createElement(p.a, {
					className: I.a.addRemovalReason,
					onClick: W,
					text: s.fbt._("Add a removal reason", null, {
						hk: "1YDo3"
					})
				}), (V.modRemovalReason || V.modNote) && r.a.createElement(T, {
					onMouseEnter: U(X),
					onMouseLeave: H
				}, s.fbt._("Removal reason", null, {
					hk: "2DhKVZ"
				})), r.a.createElement(m.c, N({
					tooltipId: X,
					text: Object(x.c)(V)
				}, z))), V.bannedBy && V.isSpam && r.a.createElement(o.Fragment, null, r.a.createElement(_.a, {
					className: I.a.spamIcon,
					desc: Object(x.e)(S, V),
					id: ee,
					onMouseEnter: U(ee),
					onMouseLeave: H
				}), r.a.createElement(m.c, N({
					tooltipId: ee,
					text: Object(x.e)(S, V)
				}, z))), ("AutoModerator" === V.approvedBy || "AutoModerator" === V.bannedBy) && r.a.createElement(o.Fragment, null, r.a.createElement(j.a, {
					className: Object(c.a)(I.a.automoderator, !!V.bannedBy && I.a.isRemoved),
					desc: x.b,
					id: Q,
					onMouseEnter: U(Q),
					onMouseLeave: H
				}), r.a.createElement(m.c, N({
					tooltipId: Q,
					text: x.b
				}, z))), Object(f.a)(V) && !D && r.a.createElement(o.Fragment, null, r.a.createElement(C.a, {
					className: I.a.reportIcon,
					desc: Object(x.d)(V.numReports),
					id: $,
					onMouseEnter: U($),
					onMouseLeave: H
				}), r.a.createElement(m.c, N({
					tooltipId: $,
					text: Object(x.d)(V.numReports)
				}, z))))
			}))
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, n) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/AdViewability/index.tsx"),
				i = n("./src/reddit/components/GildModal/getGildModalId.ts"),
				c = n("./src/reddit/components/GildModal/Loader.tsx"),
				d = n("./src/reddit/connectors/PostViewable/index.ts"),
				l = n("./src/reddit/models/Media/index.ts"),
				m = n("./src/reddit/selectors/gild.ts"),
				p = n("./src/reddit/selectors/video.ts"),
				u = n("./src/lib/classNames/index.ts"),
				b = n("./src/higherOrderComponents/withClickTracking.tsx"),
				h = n("./src/reddit/components/PostContainer/index.m.less"),
				x = n.n(h);
			const f = Object(r.c)({
					clickTrackingId: (e, t) => {
						let {
							post: n
						} = t;
						return n.id
					},
					buffering: (e, t) => {
						let {
							post: n
						} = t;
						return Object(p.a)(e, {
							postId: n.id
						})
					},
					gildModalIsOpen: (e, t) => {
						let {
							isOverlay: n,
							post: s
						} = t;
						const o = Object(i.b)(s.postId, n);
						return Object(m.c)(e, o)
					},
					playing: (e, t) => {
						let {
							post: n
						} = t;
						return Object(p.f)(e, {
							postId: n.id
						})
					},
					continuousViewingStartedAt: (e, t) => {
						let {
							post: n
						} = t;
						return Object(p.c)(e, {
							postId: n.id
						})
					}
				}),
				g = Object(d.a)(f),
				v = e => {
					const t = Object(b.d)(e.target, e.currentTarget),
						n = Object(b.b)(e.target, e.currentTarget, b.a.buttons);
					return "subreddit" !== t && n
				};
			class y extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						children: t,
						className: n,
						gildModalIsOpen: s,
						makePostContainerId: r,
						post: i,
						onClick: d,
						onPostContentClick: m,
						style: p,
						ref: b
					} = this.props, h = o.a.createElement("div", {
						style: p,
						ref: b,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: t => {
							!this.cancelClick && t.button < 2 && (e(() => d && d(t, i))(t), m && v(t) && m(t, i))
						},
						className: Object(u.a)(x.a.WrappedPost, n, "Post ".concat(i.id), {
							promotedlink: i.isSponsored
						}),
						id: r ? r(i.id) : i.id,
						tabIndex: -1
					}, t, s && o.a.createElement(c.a, null)), f = !!i.media && i.media.type === l.n.VIDEO;
					return i.isSponsored || f ? o.a.createElement(a.a, {
						post: i,
						trackDisplay: !0
					}, h) : h
				}
			}
			t.a = g(Object(b.c)(y))
		},
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, n) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/helpers/trackers/postCollection.ts"),
				p = n("./src/reddit/components/PostFollow/index.m.less"),
				u = n.n(p);
			class b extends r.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: n,
								isFollowed: s
							},
							sendEvent: o
						} = this.props, r = !!s;
						o(e ? Object(m.o)({
							postId: n,
							isFollowed: r
						}) : Object(m.g)({
							postId: n,
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
						post: n
					} = this.props, o = this.state.isHovered, a = n.isFollowed;
					let i = a ? s.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : s.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return a && o && (i = s.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), r.a.createElement("button", {
						className: Object(c.a)(u.a.collectionFollow, {
							[u.a.isFollowed]: !!n.isFollowed,
							[u.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, i)
				}
			}
			const h = Object(a.b)(() => Object(i.c)({}), (e, t) => {
				let {
					post: n
				} = t;
				return {
					onFollow: () => e(Object(d.E)(n.isSponsored ? n.postId : n.id))
				}
			})(Object(l.c)(b))
		},
		"./src/reddit/components/PostLeftRail/index.m.less": function(e, t, n) {
			e.exports = {
				postLeftRail: "_23h0-EcaBUorIHC-JZyh6J"
			}
		},
		"./src/reddit/components/PostLeftRail/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "c", (function() {
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = n("./src/reddit/constants/colors.ts"),
				c = n("./src/reddit/components/PostLeftRail/index.m.less"),
				d = n.n(c);
			const l = 40,
				m = e => e.isRemoved ? i.a.removed : e.isReported ? i.a.reported : "transparent",
				p = Object(a.a)(e => {
					const t = m(e),
						n = {
							width: "".concat(l, "px"),
							borderLeft: "4px solid ".concat(t)
						};
					return o.a.createElement("div", {
						className: Object(r.a)(d.a.postLeftRail, e.className),
						style: e.withoutComputedStyles ? {} : n
					}, e.children)
				});
			t.b = p
		},
		"./src/reddit/components/PostList/LoadMore.m.less": function(e, t, n) {
			e.exports = {
				Component: "_3tBFh6Ty3gSaxW4gcm6hZ_",
				component: "_3tBFh6Ty3gSaxW4gcm6hZ_"
			}
		},
		"./src/reddit/components/PostList/LoadMore.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/PostList/Placeholder.tsx"),
				r = n("./src/reddit/components/PostList/LoadMore.m.less"),
				a = n.n(r);
			t.a = s.a.wrapped(o.a, "Component", a.a)
		},
		"./src/reddit/components/PostList/Placeholder.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/constant.js"),
				o = n.n(s),
				r = n("./node_modules/lodash/times.js"),
				a = n.n(r),
				i = n("./node_modules/react/index.js"),
				c = n.n(i),
				d = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				m = n("./src/lib/fastdom/index.ts"),
				p = n("./src/lib/intersectionObserver/index.ts"),
				u = n("./src/reddit/constants/postLayout.ts"),
				b = n("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				h = n("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				x = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./src/lib/classNames/index.ts")),
				f = n("./src/reddit/components/PostLeftRail/index.tsx"),
				g = n("./src/reddit/components/SubredditIcon/index.tsx"),
				v = n("./src/reddit/components/VerticalVotes/votes.tsx"),
				y = n("./src/reddit/contexts/PageLayer/index.tsx"),
				E = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				O = n("./src/reddit/models/Vote/index.ts"),
				w = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				C = n.n(w),
				_ = n("./src/reddit/components/LargePost/placeholder.m.less"),
				k = n.n(_);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var P = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
				}
				return n
			};
			const S = Object(y.t)(),
				I = Object(l.c)({
					isFakeSubreddit: y.x
				}),
				N = Object(d.b)(I),
				T = e => {
					const t = {
						interactive: !1,
						voteState: O.a.notVoted
					};
					return c.a.createElement("div", {
						className: k.a.emptyVerticalVotes
					}, c.a.createElement(v.d, j({
						key: "u"
					}, t)), c.a.createElement("div", {
						className: k.a.emptyScore,
						key: "s"
					}), c.a.createElement(v.c, j({
						key: "d"
					}, t)))
				},
				L = e => {
					var {
						isLoading: t
					} = e, n = P(e, ["isLoading"]);
					return c.a.createElement(g.b, j({
						className: Object(E.a)({
							isLoading: t
						})
					}, n))
				};
			var M = S(N(e => {
				var {
					className: t,
					dispatch: n,
					pageLayer: s
				} = e, o = P(e, ["className", "dispatch", "pageLayer"]);
				return c.a.createElement("div", {
					className: Object(x.a)(C.a.baseLargeAndMediumPostStyles, t)
				}, c.a.createElement(f.b, {
					key: "a"
				}, c.a.createElement(T, o)), c.a.createElement("div", {
					className: k.a.content,
					key: "b"
				}, c.a.createElement("div", {
					className: k.a.topLine,
					key: "ba"
				}, o.isFakeSubreddit && c.a.createElement(L, {
					key: "baa",
					isLoading: !1
				}), c.a.createElement("div", {
					key: "bab",
					className: Object(x.a)(k.a.topMetaOne, Object(E.b)(o))
				}), c.a.createElement("div", {
					key: "bac",
					className: Object(x.a)(k.a.topMetaTwo, Object(E.b)(o))
				})), c.a.createElement("div", {
					key: "bb",
					className: Object(x.a)(k.a.title, Object(E.b)(o))
				})), c.a.createElement("div", {
					key: "c",
					className: Object(x.a)(k.a.media, Object(E.a)(o))
				}), c.a.createElement("div", {
					className: k.a.content,
					key: "d"
				}, c.a.createElement("div", {
					className: k.a.flatlist
				}, c.a.createElement("div", {
					className: Object(x.a)(k.a.flatlistItemOne, Object(E.b)(o))
				}), c.a.createElement("div", {
					className: Object(x.a)(k.a.flatListItemTwo, Object(E.b)(o))
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
						isLoading: n,
						layout: s,
						loadingPostComponentForLayout: r
					} = this.props, {
						visible: i
					} = this.state, [d, l] = r(s), m = t || l, p = o()(c.a.createElement(d, {
						isLoading: n && i
					})), u = a()(m, p);
					return c.a.createElement("div", {
						className: e,
						ref: this.setWrapperRef
					}, c.a.Children.toArray(u))
				}
			}
			t.a = D(H)
		},
		"./src/reddit/components/PostList/SomethingWrong.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/helpers/describeApiError/index.ts"),
				c = n("./src/reddit/components/PostList/index.m.less"),
				d = n.n(c);
			t.a = e => {
				const {
					onTryAgain: t,
					apiError: n
				} = e;
				let o = s.fbt._("Something went wrong while loading.", null, {
					hk: "1ijaef"
				});
				return n && (o = Object(i.a)({
					apiError: n,
					isLoggedOut: !1
				})), r.a.createElement("div", {
					className: d.a.somethingWrong
				}, r.a.createElement("div", {
					className: d.a.somethingWrongText
				}, o), t && r.a.createElement(a.f, {
					onClick: t
				}, s.fbt._("Try again", null, {
					hk: "3JPIhw"
				})))
			}
		},
		"./src/reddit/components/PostList/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/CrosspostBox/index.tsx"),
				a = n("./src/reddit/components/Media/index.tsx");
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
		"./src/reddit/components/PostMeta/index.m.less": function(e, t, n) {
			e.exports = {
				donationAmount: "_1x9gNS8wlrugqgwofOEcGq",
				metaContainer: "Ywkt6EDfNWINeTr9lP29H",
				postTopMeta: "iaAYGvTNtknkTxuHArCzL",
				subredditName: "_1L0pdcPf58t25Jy6ljHIKR"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/AwardBadges/index.tsx"),
				a = n("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				i = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				c = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = n("./src/reddit/components/PostBadges/index.tsx"),
				l = n("./src/reddit/components/PostTopMeta/index.tsx"),
				m = n("./src/reddit/components/QuarantinedLabel/index.tsx"),
				p = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				u = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				b = n("./src/reddit/constants/posts.ts"),
				h = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				x = n("./src/reddit/helpers/trackers/post.ts"),
				f = n("./src/reddit/models/Subreddit/index.ts"),
				g = n("./src/reddit/components/PostMeta/index.m.less"),
				v = n.n(g);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: n,
					inSubredditOrProfile: s,
					isCurrentUserProfilePost: g,
					isOverlay: y,
					isTopicPage: E,
					language: O,
					post: w,
					shouldShowSubscribeButton: C,
					subredditOrProfile: _,
					tooltipType: k
				} = e, j = !!E;
				return o.a.createElement("div", {
					className: v.a.metaContainer
				}, !s && !w.isSponsored && _ && o.a.createElement(i.a, {
					postId: w.id,
					subredditName: _.name
				}, o.a.createElement(p.a, {
					className: v.a.subredditName,
					"data-click-id": "subreddit",
					to: _.url
				}, _.displayText)), _ && _.isQuarantined && o.a.createElement(m.a, null), !s && !w.isSponsored && _ && C && !g && o.a.createElement(u.a, {
					getEventFactory: e => Object(x.f)(w.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: _.name,
						type: Object(f.f)(_) ? b.a.PROFILE : b.a.SUBREDDIT
					},
					postId: w.id,
					small: !0
				}), !s && !w.isSponsored && o.a.createElement(h.b, null), !s && !w.isSponsored && o.a.createElement(c.h, {
					type: w.belongsTo.type,
					id: w.belongsTo.id
				}), o.a.createElement(l.d, {
					className: v.a.postTopMeta,
					flairStyleTemplate: t,
					language: O,
					post: w,
					tooltipType: k
				}), o.a.createElement(d.a, {
					displayText: _ ? _.displayText : null,
					inSubredditOrProfile: !!s,
					language: O,
					post: w,
					tooltipType: k
				}), _ && o.a.createElement(a.a, {
					className: v.a.donationAmount,
					contentId: w.id,
					subredditId: _.id
				}), !j && o.a.createElement(r.a, {
					hideCta: n,
					isOverlay: !!y,
					thing: w
				}))
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less": function(e, t, n) {
			e.exports = {
				ListContainer: "VHCAEHBEuD8bln8MDFl35",
				listContainer: "VHCAEHBEuD8bln8MDFl35",
				Icon: "_3WbGqnEpw_ds1P508Qawma",
				icon: "_3WbGqnEpw_ds1P508Qawma",
				CheckboxMenuItem: "_9csa2XobkeFZUX8Fc_FNY",
				checkboxMenuItem: "_9csa2XobkeFZUX8Fc_FNY",
				DropdownRow: "x_9o8pHUgKrlsT51QhLnG",
				dropdownRow: "x_9o8pHUgKrlsT51QhLnG"
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "e", (function() {
				return O
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				r = n("./src/reddit/controls/Dropdown/Row.tsx"),
				a = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				i = n("./src/reddit/icons/fonts/Envelope/index.tsx"),
				c = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				d = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				l = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				m = n("./src/reddit/icons/fonts/Tag/index.tsx"),
				p = n("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				u = n.n(p);
			const b = s.a.wrapped(a.a, "Icon", u.a),
				h = s.a.wrapped(i.a, "Icon", u.a),
				x = s.a.wrapped(c.a, "Icon", u.a),
				f = s.a.wrapped(d.a, "Icon", u.a),
				g = s.a.wrapped(l.a, "Icon", u.a),
				v = s.a.wrapped(m.a, "Icon", u.a),
				y = s.a.wrapped(o.b, "CheckboxMenuItem", u.a),
				E = s.a.wrapped(r.b, "DropdownRow", u.a),
				O = s.a.div("ListContainer", u.a)
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/ModerationPrompts/Prompt.tsx"),
				a = n("./src/reddit/components/ModerationPrompts/Survey.tsx"),
				i = n("./src/reddit/components/PopupPortal/index.tsx"),
				c = n("./src/reddit/components/PostLeftRail/index.tsx"),
				d = n("./src/reddit/components/VerticalVotes/index.tsx"),
				l = n("./src/reddit/controls/Checkbox/index.tsx"),
				m = n("./src/reddit/helpers/isPost.ts"),
				p = n("./src/reddit/helpers/showReportIndicator/index.ts");
			t.a = e => {
				const {
					model: t,
					handleVote: n,
					showBulkActionCheckbox: s = !1,
					isCheckboxSelected: u = !1,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: h,
					redditStyle: x,
					subreddit: f,
					isOverlay: g
				} = e, v = "upvote-button-".concat(t.id).concat(g ? "-overlay" : ""), {
					moderationPrompt: y
				} = t;
				return o.a.createElement(c.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(p.a)(t),
					isSponsored: !!Object(m.b)(t) && t.isSponsored,
					redditStyle: x
				}, s && o.a.createElement(l.a, {
					isCheckboxSelected: u,
					toggleCheckbox: b
				}), o.a.createElement(d.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: n,
					redditStyle: x,
					upvoteTooltipId: v
				}), y && o.a.createElement(i.b, {
					rightOf: v
				}, "survey" === y ? o.a.createElement(a.a, {
					post: t,
					subredditName: f.name,
					isOverlay: !!g
				}) : o.a.createElement(r.a, {
					post: t,
					subredditName: f.name,
					isOverlay: !!g
				})))
			}
		},
		"./src/reddit/components/ProfileCommentList/ListItem.m.less": function(e, t, n) {
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
		"./src/reddit/components/ProfileItemList/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/lodash/last.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-dom/index.js"),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/opener/index.ts"),
				l = n("./src/reddit/constants/adEvents.ts"),
				m = n("./src/reddit/components/PostList/LoadMore.tsx"),
				p = n("./src/reddit/components/PostList/Placeholder.tsx"),
				u = n("./src/reddit/components/PostList/SomethingWrong.tsx"),
				b = n("./src/reddit/components/Scroller/Simple.tsx"),
				h = n("./src/reddit/constants/componentSizes.ts"),
				x = n("./src/reddit/helpers/getClickInfo.ts"),
				f = n("./src/reddit/helpers/isComment.ts"),
				g = n("./src/lib/LRUCache/index.ts"),
				v = n("./src/telemetry/index.ts"),
				y = n("./src/telemetry/models/Timer.ts"),
				E = n("./src/reddit/components/PostList/index.m.less"),
				O = n.n(E);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var C = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
				}
				return n
			};
			const _ = 500,
				k = new g.a(_),
				j = new g.a(_),
				P = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				S = (e, t, n, s, o, r) => {
					const a = n ? "last-".concat(s, "-").concat(o) : "",
						i = "entered-".concat(e, "-").concat(t, "-").concat(a);
					let c = k.get(i);
					return void 0 === c && (c = () => {
						n && r.onBottomViewed(s, o), r.trackOnPostEnteredViewport(e, t)
					}, k.set(i, c)), c
				},
				I = (e, t) => {
					const n = "click-".concat(e);
					let s = j.get(n);
					return void 0 === s && (s = (e, n) => {
						n.isSponsored && t.fireAdPixelsOfType(n, l.a.Click), n.isSponsored && n.source && n.source.outboundUrl ? Object(d.d)(n.source.outboundUrl, d.c.BLANK) : t.openPost({
							postOrComment: n,
							clickInfo: Object(x.a)(e)
						})
					}, j.set(n, s)), s
				};
			class N extends a.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new g.a(_), this.updateScrollerRef = e => {
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
						setTimeout(() => Object(v.b)(c.k.Redesign, {
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
						setTimeout(() => Object(v.b)(c.k.Redesign, {
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
						viewportDataLoaded: n
					} = this.props;
					return v.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (n || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: n
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const s = v.c.end(e);
					setTimeout(() => n(t(s, y.TimerType.InApp)), 0)
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
							itemIds: n
						} = t,
						s = C(t, ["itemIds"]),
						{
							itemIds: o
						} = e,
						r = C(e, ["itemIds"]),
						a = Object.keys(s),
						i = Object.keys(r);
					return i.length !== a.length || !!i.some(e => s[e] !== r[e])
				}
				scrollChildForItem(e, t, n, s, o, r) {
					const {
						listingKey: i,
						listingName: c,
						postClickEvent: d
					} = this.props, l = n ? "last-index" : "", m = "post-".concat(r, "-").concat(e, "-").concat(t, "-").concat(l, "-").concat(c, "-").concat(i);
					let p;
					if (void 0 === (p = this.scrollChildCache.get(m))) {
						const {
							inSubredditOrProfile: t,
							itemIdToPostId: l
						} = this.props, u = l[e], b = "overview-chrono-list-item-[layout: ".concat(r, "]-[itemId: ").concat(e, "]"), h = S(u, r, n, i, c, this.props), x = {
							key: b,
							eventFactory: d,
							inSubredditOrProfile: t,
							isFirstInCommentList: s,
							isLastInCommentList: o,
							isOverlay: !1,
							itemId: e,
							last: n,
							layout: r,
							onClickPost: I(e, this.props),
							postId: u
						}, f = this.props.itemComponent;
						p = {
							estHeight: this.props.estimateItemHeight(e, r, s),
							id: e,
							isFocusable: !1,
							trackOnEnteredViewport: h,
							render: e => a.a.createElement(f, w({}, x, e))
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
						layout: n,
						onTryAgain: s
					} = this.props;
					return a.a.createElement("div", {
						className: O.a.placeholder
					}, a.a.createElement(p.a, {
						className: t,
						isLoading: !e,
						layout: n
					}), !!e && a.a.createElement(u.a, {
						apiError: e,
						onTryAgain: s
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						layout: n,
						onLoadMore: s
					} = this.props;
					return a.a.createElement("div", {
						className: O.a.placeholder
					}, a.a.createElement(m.a, {
						isLoading: !!t,
						layout: n,
						countOverride: P[n]
					}), !!e && a.a.createElement(u.a, {
						apiError: e,
						onTryAgain: s
					}))
				}
				renderList() {
					const {
						commentsById: e,
						layout: t,
						loadMore: n,
						itemIds: s,
						onLoadMore: o
					} = this.props, r = s.map((n, o, r) => {
						const a = o === s.length - 1,
							i = o && s[o - 1],
							c = !a && s[o + 1],
							d = !!Object(f.a)(n) && (!i || !Object(f.a)(i) || e[i].postId !== e[n].postId),
							l = !!Object(f.a)(n) && (!c || !Object(f.a)(c) || e[c].postId !== e[n].postId);
						return this.scrollChildForItem(n, o, a, d, l, t)
					});
					return a.a.createElement("div", null, a.a.createElement(b.b, {
						innerRef: this.updateScrollerRef,
						className: this.props.className,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						enableElementHiding: !0,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: n && n.token ? n.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: o,
						viewportTopPadding: h.f + h.s
					}, r), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			t.a = N
		},
		"./src/reddit/components/ProfileNavMenu/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ProfileNavMenu/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/config.ts"),
				l = n("./src/higherOrderComponents/asTooltip.tsx"),
				m = n("./src/lib/classNames/index.ts"),
				p = n("./src/lib/constants/index.ts"),
				u = n("./src/reddit/actions/tooltip.ts"),
				b = n("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				h = n("./src/reddit/constants/componentSizes.ts"),
				x = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/controls/Dropdown/index.tsx"),
				g = n("./src/reddit/controls/InternalLink/index.tsx"),
				v = n("./src/reddit/icons/fonts/Menu/index.tsx"),
				y = n("./src/reddit/models/Profile/index.ts"),
				E = n("./src/reddit/featureFlags/index.ts"),
				O = n("./src/reddit/selectors/tooltip.ts"),
				w = n("./src/reddit/selectors/user.ts"),
				C = n("./src/reddit/selectors/userPrefs.ts"),
				_ = n("./src/reddit/components/ProfileNavMenu/index.m.less"),
				k = n.n(_);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const P = Object(x.t)({
					routeName: x.U,
					privateListingType: x.i
				}),
				S = Object(c.c)({
					isDropdownMenuOpen: e => Object(O.a)(e) === N,
					isOwnProfile: (e, t) => Object(w.L)(e, t.profileName),
					isSnoovatar30Enabled: E.d.snoovatar30,
					isSubscriptionsPinned: C.b
				}),
				I = Object(l.a)(f.a),
				N = "profile-nav-menu-tooltip";
			t.a = P(Object(a.b)(S, e => ({
				toggleTooltip: t => e(Object(u.h)({
					tooltipId: t
				}))
			}))(e => {
				let {
					isDropdownMenuOpen: t,
					isOwnProfile: n,
					privateListingType: s,
					profileName: o,
					routeName: a,
					toggleTooltip: i,
					isSnoovatar30Enabled: c,
					isSubscriptionsPinned: d
				} = e;
				return r.a.createElement("div", {
					className: k.a.container
				}, r.a.createElement(b.a, {
					bladeOpen: !1,
					offsetLeft: d ? h.u : 0,
					render: () => r.a.createElement(r.a.Fragment, null, M({
						profileName: o,
						isOwnProfile: n,
						routeName: a,
						privateListingType: s,
						isSnoovatar30Enabled: c
					}).map(e => r.a.createElement(T, j({
						key: e.key
					}, e))), r.a.createElement("button", {
						className: Object(m.a)(k.a.mainLink, k.a.overflowMenuButton),
						id: N,
						onClick: () => i(N)
					}, r.a.createElement(v.a, null)), r.a.createElement(I, {
						className: k.a.dropdown,
						isOpen: t,
						tooltipId: N
					}, R({
						profileName: o,
						isOwnProfile: n,
						routeName: a,
						privateListingType: s
					}).map(e => r.a.createElement(L, j({
						key: e.key
					}, e)))))
				}))
			}));
			const T = e => {
					let {
						hideOnNarrow: t,
						isActive: n,
						text: s,
						url: o,
						internal: a
					} = e;
					return a ? r.a.createElement(g.a, {
						className: Object(m.a)(k.a.mainLink, {
							[k.a.hideOnNarrow]: !!t,
							[k.a.isActive]: n
						}),
						to: o
					}, s) : r.a.createElement("a", {
						className: Object(m.a)(k.a.mainLink, {
							[k.a.hideOnNarrow]: !!t,
							[k.a.isActive]: n
						}),
						href: o
					}, s)
				},
				L = e => {
					let {
						isActive: t,
						internal: n,
						key: s,
						url: o,
						showOnNarrow: a,
						text: c
					} = e;
					return n ? r.a.createElement(i.a, {
						className: Object(m.a)(k.a.dropdownLink, {
							[k.a.isActive]: t,
							[k.a.showOnNarrow]: !!a
						}),
						to: o,
						key: s,
						rel: "nofollow noopener noreferrer",
						role: "listitem"
					}, c) : r.a.createElement("a", {
						className: Object(m.a)(k.a.dropdownLink, {
							[k.a.showOnNarrow]: !!a
						}),
						href: o,
						key: s,
						rel: "nofollow noopener noreferrer",
						role: "listitem",
						target: "_blank"
					}, c)
				},
				M = e => {
					let {
						profileName: t,
						isOwnProfile: n,
						routeName: o,
						privateListingType: r,
						isSnoovatar30Enabled: a
					} = e;
					const i = n ? [{
						internal: !0,
						isActive: o === p.yb.PROFILE_PRIVATE && r === y.a.Saved,
						key: "profile.mainmenu.saved",
						text: s.fbt._("Saved", null, {
							hk: "2w1YRh"
						}),
						url: "/user/".concat(t, "/saved/")
					}, {
						hideOnNarrow: !0,
						internal: !0,
						isActive: o === p.yb.PROFILE_PRIVATE && r === y.a.Hidden,
						key: "profile.mainmenu.hidden",
						text: s.fbt._("Hidden", null, {
							hk: "225tka"
						}),
						url: "/user/".concat(t, "/hidden/")
					}, {
						hideOnNarrow: !0,
						internal: !0,
						isActive: o === p.yb.PROFILE_PRIVATE && r === y.a.Upvoted,
						key: "profile.mainmenu.upvoted",
						text: s.fbt._("Upvoted", null, {
							hk: "RKwFZ"
						}),
						url: "/user/".concat(t, "/upvoted/")
					}, {
						hideOnNarrow: !0,
						internal: !0,
						isActive: o === p.yb.PROFILE_PRIVATE && r === y.a.Downvoted,
						key: "profile.mainmenu.downvoted",
						text: s.fbt._("Downvoted", null, {
							hk: "2F9IL4"
						}),
						url: "/user/".concat(t, "/downvoted/")
					}] : [];
					n ? (i.push({
						hideOnNarrow: !0,
						internal: !0,
						isActive: o === p.yb.PROFILE_PRIVATE && r === y.a.ReceivedGildings,
						key: "profile.mainmenu.receiverGildings",
						text: s.fbt._("Awards received", null, {
							hk: "iwLBV"
						}),
						url: "/user/".concat(t, "/gilded/")
					}), i.push({
						hideOnNarrow: !0,
						internal: !0,
						isActive: o === p.yb.PROFILE_PRIVATE && r === y.a.GivenGildings,
						key: "profile.mainmenu.givenGildings",
						text: s.fbt._("Awards given", null, {
							hk: "2UPYZc"
						}),
						url: "/user/".concat(t, "/gilded/given/")
					})) : i.push({
						hideOnNarrow: !0,
						internal: !1,
						isActive: !1,
						key: "profile.mainmenu.gildedLegacy",
						text: s.fbt._("Awards received (legacy)", null, {
							hk: "1YgfYU"
						}),
						url: "".concat(d.a.oldRedditUrl, "/user/").concat(t, "/gilded/")
					});
					const c = a ? [{
						internal: !0,
						isActive: o === p.yb.PROFILE_SNOOBUILDER,
						key: "profile.mainmenu.snoobuilder",
						text: s.fbt._("Snoobuilder", null, {
							hk: "3SSKff"
						}),
						url: "/user/".concat(t, "/snoo/")
					}] : [];
					return [{
						internal: !0,
						isActive: o === p.yb.PROFILE_OVERVIEW,
						key: "profile.mainmenu.overview",
						text: s.fbt._("Overview", null, {
							hk: "2IBbqy"
						}),
						url: "/user/".concat(t, "/")
					}, {
						internal: !0,
						isActive: o === p.yb.PROFILE_POSTS,
						key: "profile.mainmenu.posts",
						text: s.fbt._("Posts", null, {
							hk: "a1BoF"
						}),
						url: "/user/".concat(t, "/posts/")
					}, {
						internal: !0,
						isActive: o === p.yb.PROFILE_COMMENTS,
						key: "profile.mainmenu.comments",
						text: s.fbt._("Comments", null, {
							hk: "2VwjOc"
						}),
						url: "/user/".concat(t, "/comments/")
					}, ...c, ...i]
				},
				R = e => {
					let {
						profileName: t,
						isOwnProfile: n,
						routeName: o,
						privateListingType: r
					} = e;
					const a = n ? [{
						showOnNarrow: !0,
						internal: !0,
						isActive: o === p.yb.PROFILE_PRIVATE && r === y.a.Hidden,
						key: "profile.dropdownmenu.hidden",
						text: s.fbt._("Hidden", null, {
							hk: "225tka"
						}),
						url: "/user/".concat(t, "/hidden/")
					}, {
						showOnNarrow: !0,
						internal: !0,
						isActive: o === p.yb.PROFILE_PRIVATE && r === y.a.Upvoted,
						key: "profile.dropdownmenu.upvoted",
						text: s.fbt._("Upvoted", null, {
							hk: "J0TzC"
						}),
						url: "/user/".concat(t, "/upvoted/")
					}, {
						showOnNarrow: !0,
						internal: !0,
						isActive: o === p.yb.PROFILE_PRIVATE && r === y.a.Downvoted,
						key: "profile.dropdownmenu.downvoted",
						text: s.fbt._("Downvoted", null, {
							hk: "2sxum6"
						}),
						url: "/user/".concat(t, "/downvoted/")
					}] : [];
					return n ? (a.push({
						showOnNarrow: !0,
						internal: !0,
						isActive: o === p.yb.PROFILE_PRIVATE && r === y.a.ReceivedGildings,
						key: "profile.dropdownmenu.receiverGildings",
						text: s.fbt._("Awards received", null, {
							hk: "31obau"
						}),
						url: "/user/".concat(t, "/gilded/")
					}), a.push({
						showOnNarrow: !0,
						internal: !0,
						isActive: o === p.yb.PROFILE_PRIVATE && r === y.a.GivenGildings,
						key: "profile.dropdownmenu.givenGildings",
						text: s.fbt._("Awards given", null, {
							hk: "2UPYZc"
						}),
						url: "/user/".concat(t, "/gilded/given/")
					}), a) : [...a, {
						showOnNarrow: !0,
						internal: !1,
						isActive: !1,
						key: "profile.dropdownmenu.gildedLegacy",
						text: s.fbt._("Awards received (legacy)", null, {
							hk: "2KdewZ"
						}),
						url: "".concat(d.a.oldRedditUrl, "/user/").concat(t, "/gilded/")
					}]
				}
		},
		"./src/reddit/components/ProfileSidebar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/SidebarContainer/index.tsx"),
				i = n("./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx"),
				c = n("./src/reddit/components/SidebarProfileMultireddits/index.tsx"),
				d = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				l = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				m = n("./src/reddit/components/SidebarTrophyCase/index.tsx"),
				p = n("./src/reddit/components/Widgets/ConnectedAccounts/index.tsx"),
				u = n("./src/reddit/constants/posts.ts");
			const b = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-ProfileIdCard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("Settings~reddit-components-ProfileIdCard"), n.e("reddit-components-ProfileIdCard")]).then(n.bind(null, "./src/reddit/components/ProfileIdCard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
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
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, n) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/polished/dist/polished.es.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/actions/page.ts"),
				l = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = n("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				p = n.n(m);
			const u = Object(a.b)(null, e => ({
					onNavigate: t => e(Object(d.G)(t))
				})),
				b = c.a.wrapped(e => r.a.createElement("div", {
					className: e.className,
					dangerouslySetInnerHTML: {
						__html: e.html
					},
					onClick: t => {
						((e, t, n) => {
							if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
								e.preventDefault(), t(e.target.getAttribute("href"))
							}
							e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), n && n(e)
						})(t, e.onNavigate, e.onClick)
					},
					style: Object.assign({}, e.style, {
						"--RawHTMLDisplay-tr-even": Object(s.g)(Object(l.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(s.g)(Object(l.a)(e).line, .8)
					})
				}), "StyledRawHTMLDisplay", p.a);
			t.a = u(Object(i.a)(b))
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/SidebarContainer/index.m.less"),
				r = n.n(o);
			t.a = s.a.div("container", r.a)
		},
		"./src/reddit/components/SidebarExpandableList/index.m.less": function(e, t, n) {
			e.exports = {
				TertiaryButton: "_1rpFWd0ROODHctwG096Da",
				tertiaryButton: "_1rpFWd0ROODHctwG096Da"
			}
		},
		"./src/reddit/components/SidebarExpandableList/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/lodash/take.js"),
				r = n.n(o),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = n("./src/reddit/layout/row/Inline/index.tsx"),
				u = n("./src/reddit/layout/row/RightAlign/index.tsx"),
				b = n("./src/reddit/components/SidebarExpandableList/index.m.less"),
				h = n.n(b),
				x = n("./src/lib/lessComponent.tsx");
			const f = 10,
				g = x.a.wrapped(l.n, "TertiaryButton", h.a);
			class v extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						expanded: !1
					}, this.onButtonClick = () => {
						const {
							expanded: e
						} = this.state, {
							hasMoreItems: t,
							onLoadMore: n
						} = this.props;
						e || this.setState({
							expanded: !0
						}), e && !t && this.setState({
							expanded: !1
						}), t && n && n()
					}, this.renderToggleButton = () => {
						const {
							expanded: e
						} = this.state, {
							hasMoreItems: t,
							onLoadMore: n,
							pending: o
						} = this.props, r = !e || t && n ? s.fbt._("View More", null, {
							hk: "1RK8uA"
						}) : s.fbt._("View Less", null, {
							hk: "1M72mK"
						});
						return i.a.createElement(g, {
							onClick: this.onButtonClick
						}, o ? i.a.createElement(m.a, {
							sizePx: f
						}) : r)
					}
				}
				render() {
					const {
						className: e,
						hasMoreItems: t,
						headerButton: n,
						items: s,
						minimizedLength: o,
						renderItem: a,
						title: c
					} = this.props, {
						expanded: l
					} = this.state, m = s.length > o || t, b = (!m || l ? s : r()(s, o)).map(e => a({
						item: e
					}));
					return i.a.createElement(d.a, {
						className: e,
						headerButton: n,
						title: c
					}, b, i.a.createElement(p.a, null, i.a.createElement(u.a, null, m && this.renderToggleButton())))
				}
			}
			v.defaultProps = {
				minimizedLength: c.Db
			}, t.a = v
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				i = n("./src/reddit/contexts/PageLayer/index.tsx"),
				c = n("./src/reddit/components/SidebarFooter/index.m.less"),
				d = n.n(c);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = r.a.a("Link", d.a), p = Object(i.t)({
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
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3thndRe559UZy14xE1gZ_"
			}
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/profile/index.ts"),
				d = n("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				m = n("./src/reddit/models/User/index.ts"),
				p = n("./src/reddit/selectors/profile.ts"),
				u = n("./src/reddit/selectors/subscriptions.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less"),
				x = n.n(h);
			const f = Object(i.c)({
					currentUser: b.i,
					language: b.Q,
					moderated: p.n,
					subscriptions: u.f,
					hasMoreModerated: p.d,
					loadMorePending: p.a
				}),
				g = Object(a.b)(f, (e, t) => ({
					onLoadMoreGqlModeratedSubreddits: () => e(Object(c.c)(t.profileName))
				}), (e, t, n) => Object.assign({}, n, e, t, {
					onLoadMore: () => {
						e.hasMoreModerated && t.onLoadMoreGqlModeratedSubreddits()
					}
				})),
				v = e => {
					let {
						item: t
					} = e;
					return r.a.createElement(l.a, {
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
			t.a = g(e => {
				const {
					currentUser: t,
					language: n,
					moderated: o,
					profileName: a,
					subscriptions: i,
					hasMoreModerated: c,
					onLoadMore: l,
					loadMorePending: p
				} = e;
				if (0 === o.length) return null;
				const u = t && Object(m.e)(t).toLowerCase() === a.toLowerCase() ? s.fbt._("You're a moderator of these communities", null, {
						hk: "2YoCxy"
					}) : s.fbt._("Moderator of these communities", null, {
						hk: "msvzk"
					}),
					b = function(e, t, n) {
						return e.map(e => ({
							name: e.name,
							subscribers: e.subscribers,
							iconUrl: e.icon.url,
							isNSFW: e.isNSFW,
							isSubscribed: t.has(e.id),
							type: "user" === e.type ? "profile" : "subreddit",
							language: n,
							sendEvent: () => void 0
						}))
					}(o, new Set(i), n);
				return r.a.createElement(d.a, {
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
		"./src/reddit/components/SidebarProfileMultireddits/index.m.less": function(e, t, n) {
			e.exports = {
				listItem: "_3lbnTBPV5H4wHdRz5ATVc9",
				icon: "Vm0_pCIi1Z6JWa0EVf6jK",
				description: "_2xcc4c-4TOL7KOsJidXtl",
				name: "_3nt8_GidTIn88UciXx27E7",
				meta: "_3iC0Hyv57ON8dAtU94HFE_"
			}
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/profile/index.ts"),
				l = n("./src/reddit/components/SidebarExpandableList/index.tsx"),
				m = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				p = n("./src/reddit/selectors/profile.ts"),
				u = n("./src/reddit/components/SidebarProfileMultireddits/index.m.less"),
				b = n.n(u);
			const h = Object(c.c)({
					hasMoreMultireddits: p.e,
					loadMorePending: p.b,
					multireddits: p.o
				}),
				x = Object(a.b)(h, (e, t) => ({
					onLoadMoreMultireddits: () => e(Object(d.f)(t.profileName, !0))
				}), (e, t, n) => Object.assign({}, n, e, t, {
					onLoadMore: () => {
						e.hasMoreMultireddits && t.onLoadMoreMultireddits()
					}
				})),
				f = e => {
					let {
						item: t
					} = e;
					return r.a.createElement("div", {
						className: b.a.listItem,
						key: t.url
					}, r.a.createElement("img", {
						className: b.a.icon,
						src: t.icon
					}), r.a.createElement("div", {
						className: b.a.description
					}, r.a.createElement(i.a, {
						className: b.a.name,
						to: t.url
					}, t.displayText), r.a.createElement("div", {
						className: b.a.meta
					}, s.fbt._({
						"*": "{communities} communities",
						_1: "1 community"
					}, [s.fbt._plural(t.subredditCount, "communities")], {
						hk: "1eyxrS"
					}))))
				};
			t.a = x(e => {
				const {
					hasMoreMultireddits: t,
					loadMorePending: n,
					multireddits: o,
					onLoadMore: a,
					profileName: i
				} = e;
				return o && o.length ? r.a.createElement(m.a, null, r.a.createElement(l.a, {
					hasMoreItems: t,
					items: o,
					onLoadMore: a,
					pending: n,
					renderItem: f,
					title: s.fbt._("Public custom feeds by u/{profileName}", [s.fbt._param("profileName", i)], {
						hk: "16Oicc"
					})
				})) : null
			})
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/SidebarSpacer/index.m.less"),
				o = n.n(s),
				r = n("./src/lib/lessComponent.tsx");
			t.a = r.a.div("Component", o.a)
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./src/lib/classNames/index.ts"),
				o = n("./node_modules/lodash/throttle.js"),
				r = n.n(o),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/components/BackToTop/index.m.less"),
				m = n.n(l);
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var u = e => i.a.createElement("div", {
					className: Object(s.a)(e.className, m.a.container),
					style: e.style
				}, i.a.createElement(d.f, {
					className: m.a.button,
					onClick: () => window.scroll(0, 0)
				}, p._("Back to top", null, {
					hk: "4nq6TO"
				}))),
				b = n("./src/reddit/components/SidebarFooter/index.tsx"),
				h = n("./src/reddit/constants/componentSizes.ts"),
				x = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				g = n.n(f),
				v = n("./src/lib/lessComponent.tsx");

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var E = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
				}
				return n
			};
			const O = c.e[1] + 24,
				w = h.f + 8 + 152 + 32 + 16,
				C = w + O + 8,
				_ = v.a.div("Container", g.a),
				k = v.a.wrapped(e => {
					var {
						className: t
					} = e, n = E(e, ["className"]);
					return i.a.createElement(u, y({
						className: t,
						style: {
							top: "calc(100vh - ".concat(40, "px)")
						}
					}, n))
				}, "BackToTop", g.a),
				j = e => {
					let {
						children: t,
						className: n,
						isSticky: o
					} = e;
					return i.a.createElement("div", {
						className: Object(s.a)(n, {
							[g.a.StickyStyles]: o
						})
					}, t)
				};
			class P extends a.Component {
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
					}, c.E), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
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
							className: n,
							hideFooter: s
						}
					} = this, o = this.state.isAdSticky && !(!e && !t);
					return i.a.createElement(_, {
						className: n,
						innerRef: this.setWrapperRef
					}, i.a.createElement(j, {
						isSticky: o
					}, e, t, !s && i.a.createElement(b.a, null)), !this.props.hideBackToTop && i.a.createElement(k, null))
				}
			}
			const S = Object(x.t)();
			t.a = S(P)
		},
		"./src/reddit/components/SidebarTrophyCase/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SidebarTrophyCase/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/components/SidebarExpandableList/index.tsx"),
				d = n("./src/reddit/controls/OutboundLink/index.tsx"),
				l = n("./src/reddit/controls/Typography/index.tsx"),
				m = n("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				p = n("./node_modules/lodash/isEqual.js"),
				u = n.n(p);
			const b = Object(i.b)(i.d, u.a);
			var h = n("./src/reddit/selectors/profile.ts"),
				x = n("./src/reddit/components/SidebarTrophyCase/index.m.less"),
				f = n.n(x),
				g = n("./src/lib/lessComponent.tsx");
			const v = Object(i.c)({
				trophyCase: (e, t) => {
					let {
						profileName: n
					} = t;
					return Object(h.r)(e, Object(h.m)(e, n))
				}
			}, b);
			t.a = Object(a.b)(v)(e => {
				let {
					trophyCase: t
				} = e;
				return 0 === t.length ? null : r.a.createElement(c.a, {
					title: s.fbt._("Trophy Case ({trophyCount})", [s.fbt._param("trophyCount", "".concat(t.length))], {
						hk: "mzh3V"
					}),
					items: t,
					renderItem: _
				})
			});
			const y = g.a.wrapped(m.a, "TrophyItem", f.a),
				E = g.a.div("TrophyIcon", f.a),
				O = g.a.h5("TrophyName", f.a),
				w = g.a.div("TrophyContent", f.a),
				C = g.a.wrapped(l.c, "Description", f.a);

			function _(e) {
				let {
					item: t
				} = e;
				const n = r.a.createElement("img", {
					src: t.icon,
					title: t.name
				});
				return r.a.createElement(y, {
					key: t.id
				}, r.a.createElement(E, null, t.url ? r.a.createElement(d.a, {
					href: t.url,
					source: void 0,
					isSponsored: !1
				}, n) : n), r.a.createElement(w, null, r.a.createElement(O, null, t.name), r.a.createElement(C, null, t.description)))
			}
		},
		"./src/reddit/components/SourceLink/index.m.less": function(e, t, n) {
			e.exports = {
				OutboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				outboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				SourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				sourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				"m-comment": "_1-PD0_zreH-KVwpFoCLvQF",
				mComment: "_1-PD0_zreH-KVwpFoCLvQF"
			}
		},
		"./src/reddit/components/SourceLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/getShortenedLink.ts"),
				i = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				d = n("./src/reddit/components/SourceLink/index.m.less"),
				l = n.n(d),
				m = n("./src/lib/lessComponent.tsx");
			const p = m.a.wrapped(c.a, "OutboundLinkIcon", l.a),
				u = m.a.div("SourceLinkWrapper", l.a);
			t.a = e => {
				const {
					className: t,
					post: n,
					isCommentsPage: s
				} = e, {
					source: c,
					isSponsored: d
				} = n;
				return c ? o.a.createElement(u, {
					className: Object(r.a)({
						[l.a["m-comment"]]: s
					}, t)
				}, o.a.createElement(i.a, {
					href: c.url,
					isSponsored: d,
					postId: n.id,
					source: c
				}, Object(a.a)(n), o.a.createElement(p, null))) : null
			}
		},
		"./src/reddit/components/StateSort/index.m.less": function(e, t, n) {
			e.exports = {
				_Dropdown: "KZGTzwiGn_74p_B8yZaKw",
				dropdown: "KZGTzwiGn_74p_B8yZaKw",
				Component: "_3-D0oENu00AlV9AmpZqxfm",
				component: "_3-D0oENu00AlV9AmpZqxfm"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, n) {
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
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return k
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/constants/elementClassNames.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				d = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				m = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				p = n.n(m),
				u = n("./src/lib/classNames/index.ts"),
				b = n("./src/lib/lessComponent.tsx");

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var x = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
				}
				return n
			};
			const f = b.a.button("IconButton", p.a),
				g = b.a.wrapped(d.a, "SubscribeIcon", p.a),
				v = b.a.wrapped(c.a, "UnsubscribeIcon", p.a),
				y = b.a.wrapped(e => {
					var {
						border: t,
						small: n
					} = e, s = x(e, ["border", "small"]);
					return r.a.createElement(f, s, r.a.createElement(g, {
						className: Object(u.a)(s.className, {
							[p.a.isSmall]: n
						})
					}))
				}, "SubscribeIconButton", p.a),
				E = b.a.wrapped(e => {
					var {
						border: t,
						small: n
					} = e, s = x(e, ["border", "small"]);
					return t ? r.a.createElement(i.f, h({}, s, {
						className: Object(u.a)(s.className, {
							[p.a.isSmall]: n
						})
					})) : r.a.createElement(i.n, h({}, s, {
						className: Object(u.a)(s.className, {
							[p.a.isSmall]: n
						})
					}))
				}, "SubscribeInternalButton", p.a),
				O = e => {
					var {
						icon: t
					} = e, n = x(e, ["icon"]);
					return t ? r.a.createElement(y, h({}, n, {
						className: Object(u.a)(n.className, {
							[p.a.isSmall]: n.small
						})
					})) : r.a.createElement(E, h({}, n, {
						className: Object(u.a)(n.className, {
							[p.a.isSmall]: n.small
						})
					}))
				},
				w = b.a.wrapped(e => {
					var {
						border: t,
						language: n,
						small: s,
						type: o
					} = e, i = x(e, ["border", "language", "small", "type"]);
					return r.a.createElement(f, i, r.a.createElement(v, {
						className: Object(u.a)(a.n, i.className, {
							[p.a.isSmall]: s
						})
					}))
				}, "UnsubscribeIconButton", p.a),
				C = b.a.wrapped(e => {
					var {
						border: t,
						language: n,
						small: o,
						type: a
					} = e, c = x(e, ["border", "language", "small", "type"]);
					const d = r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
							className: p.a.UnsubscribeButtonDefault
						}, "subreddit" === a ? s.fbt._("Joined", null, {
							hk: "1MTmIz"
						}) : s.fbt._("Following", null, {
							hk: "1wQlVR"
						})), r.a.createElement("span", {
							className: p.a.UnsubscribeButtonHover
						}, "subreddit" === a ? s.fbt._("Leave", null, {
							hk: "2lLnnn"
						}) : s.fbt._("Unfollow", null, {
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
					} = e, n = x(e, ["icon"]);
					return t ? r.a.createElement(w, h({}, n, {
						className: Object(u.a)(n.className, {
							[p.a.isSmall]: n.small
						})
					})) : r.a.createElement(C, h({}, n, {
						className: Object(u.a)(n.className, {
							[p.a.isSmall]: n.small
						})
					}))
				};
			class k extends r.a.Component {
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
						icon: n = !1,
						id: s,
						language: o,
						small: a = !1
					} = this.props, i = {
						border: e,
						className: t,
						icon: n,
						onClick: this.onClick,
						small: a
					};
					return this.props.userIsSubscriber ? r.a.createElement(_, h({}, i, {
						language: o,
						type: this.props.identifier.type
					})) : r.a.createElement(O, h({}, i, {
						id: s
					}), this.props.children, Object(l.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, n) {
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
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/TrackingHelper/index.tsx"),
				a = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				d = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				m = n("./src/reddit/components/SubscribeButton/Inline.m.less"),
				p = n.n(m),
				u = n("./src/lib/classNames/index.ts"),
				b = n("./src/lib/lessComponent.tsx");

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var x = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
				}
				return n
			};
			const f = b.a.wrapped(e => {
					var {
						small: t,
						shouldReverseColor: n
					} = e, s = x(e, ["small", "shouldReverseColor"]);
					const r = n ? i.i : i.f;
					return o.a.createElement(r, h({}, s, {
						className: Object(u.a)(s.className, {
							[p.a.isLarge]: !t
						})
					}))
				}, "SubscribeInternalButton", p.a),
				g = b.a.wrapped(e => {
					var {
						small: t,
						belongsToType: n,
						shouldReverseColor: s
					} = e, r = x(e, ["small", "belongsToType", "shouldReverseColor"]);
					const a = s ? i.f : i.i;
					return o.a.createElement(a, h({}, r, {
						className: Object(u.a)(r.className, {
							[p.a.isLarge]: !t
						})
					}))
				}, "UnsubscribeButton", p.a),
				v = b.a.wrapped(c.a, "Checkmark", p.a),
				y = b.a.wrapped(d.a, "Plus", p.a),
				E = b.a.div("ButtonSpacer", p.a);
			class O extends o.a.Component {
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
							identifier: n,
							language: s,
							onSubscribe: r,
							onUnsubscribe: a,
							postId: i,
							sendEvent: c,
							small: d = !1,
							userIsSubscriber: m,
							doNotHideOtherSubscribeButtons: b,
							getEventFactory: O,
							onSubscriptionsRequested: w
						} = e,
						C = x(e, ["className", "identifier", "language", "onSubscribe", "onUnsubscribe", "postId", "sendEvent", "small", "userIsSubscriber", "doNotHideOtherSubscribeButtons", "getEventFactory", "onSubscriptionsRequested"]),
						_ = this.state.isHovered;
					let k = m ? "subscribed" : "subscribe";
					m && _ && (k = "unsubscribe");
					const j = Object(l.a)({
						type: n.type,
						key: k
					});
					return m ? this.state.hasJustSubscribed || b ? o.a.createElement(g, h({
						className: Object(u.a)(t, {
							[p.a.isLarge]: !d,
							[p.a.unsubscribeButtonHoverStyles]: !d
						}),
						onClick: this.onClick,
						small: d,
						belongsToType: n.type,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, C), d && o.a.createElement(v, null), !d && !_ && o.a.createElement(v, null), !d && j) : d ? null : o.a.createElement(E, null) : o.a.createElement(o.a.Fragment, null, o.a.createElement(f, h({
						className: Object(u.a)(t, {
							[p.a.isLarge]: !d
						}),
						onClick: this.onClick,
						small: d
					}, C, {
						id: "subscribe-button-".concat(i),
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}), o.a.createElement(y, null), !d && j))
				}
			}
			t.a = Object(a.a)(Object(r.c)(O))
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const o = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				r = {
					subredditActions: {
						subscribe: () => s.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => s.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => s.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => s.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => s.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => s.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				a = e => {
					let {
						type: t,
						key: n
					} = e;
					return r[o({
						type: t
					})][n]()
				}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/TrackingHelper/index.tsx"),
				o = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				r = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(o.a)(Object(s.c)(r.a))
		},
		"./src/reddit/components/TimeSort/index.m.less": function(e, t, n) {
			e.exports = {
				ListingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey",
				listingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey"
			}
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, n) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/SEOTitle/index.tsx"),
				i = n("./src/reddit/components/Widgets/Base/index.m.less"),
				c = n.n(i),
				d = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
					}
					return n
				};
			const l = r.a.div("WidgetBackground", c.a),
				m = r.a.wrapped(e => {
					var {
						children: t
					} = e, n = d(e, ["children"]);
					return o.a.createElement("div", n, o.a.createElement(a.b, {
						type: a.a.Widget
					}, t))
				}, "WidgetHeader", c.a);
			t.b = e => o.a.createElement("div", {
				className: e.className
			}, o.a.createElement(l, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return j
			})), n.d(t, "a", (function() {
				return S
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/Flair/index.tsx"),
				m = n("./src/reddit/components/SubscribeButton/index.tsx"),
				p = n("./src/reddit/actions/subscription/index.ts"),
				u = n("./src/reddit/selectors/user.ts");
			const b = Object(c.c)({
				language: u.Q
			});
			var h = Object(a.b)(b, (e, t) => {
					const n = t.widget.id || void 0;
					return {
						onSubscribe: () => e(p.d([t.identifier], !0, n)),
						onSubscriptionsRequested: () => e(p.e()),
						onUnsubscribe: () => e(p.d([t.identifier], !1, n))
					}
				})(n("./src/reddit/components/SubscribeButton/Base.tsx").a),
				x = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				f = n("./src/reddit/constants/componentSizes.ts"),
				g = n("./src/reddit/controls/Button/index.tsx"),
				v = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				y = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				E = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				O = n("./src/reddit/models/Flair/index.ts"),
				w = n("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				C = n("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				_ = n.n(C);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const j = e => r.a.createElement(x.a, {
					className: Object(d.a)(_.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, r.a.createElement("div", {
					className: _.a.container
				}, e.isLoading ? r.a.createElement(v.a, {
					className: _.a.loadingIcon,
					sizePx: 32
				}) : r.a.createElement(r.a.Fragment, null, e.isError ? r.a.createElement("p", {
					className: _.a.errorMsg
				}, e.errorMsg || s.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : r.a.createElement(r.a.Fragment, null, e.communities.map(t => r.a.createElement(S, k({
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
				})))), e.bottomButtonText && e.onBottomButtonClick && r.a.createElement(g.n, {
					className: _.a.bottomButton,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				P = Object(c.c)({
					hideNSFWPref: u.z
				}),
				S = Object(a.b)(P)(e => r.a.createElement("div", {
					className: _.a.communityItemContainer
				}, r.a.createElement(E.a, {
					widthRight: f.t
				}, r.a.createElement("div", {
					className: _.a.iconContainer
				}, e.communityIcon || e.iconUrl ? r.a.createElement("img", {
					className: _.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : r.a.createElement(y.a, {
					className: _.a.planetIcon,
					"data-redditstyle": !0
				})), r.a.createElement("div", {
					className: _.a.communityDescriptionContainer
				}, r.a.createElement(i.a, {
					className: _.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(w.b)(e.name, e.type),
					to: Object(w.a)(e.name, e.type)
				}, Object(w.b)(e.name, e.type)), r.a.createElement("div", {
					className: _.a.communityInfoContainer
				}, !!e.subscribers && r.a.createElement("p", {
					className: _.a.subscriberCount
				}, s.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [s.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && r.a.createElement(l.b, {
					flair: {
						type: O.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? r.a.createElement(v.a, {
					className: Object(d.a)(_.a.communityCta, _.a.smallLoadingIcon),
					sizePx: 12
				}) : r.a.createElement(g.n, {
					className: Object(d.a)(_.a.communityCta, {
						[_.a.showOnHover]: e.showTertiaryButtonOnHover
					}),
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? r.a.createElement(h, {
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
				}) : r.a.createElement(m.a, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					small: !0
				})), !!e.description && r.a.createElement("p", {
					title: e.description,
					className: _.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/posts.ts"),
				o = n("./src/reddit/helpers/name/index.ts");

			function r(e, t) {
				return (t === s.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function a(e, t) {
				return t === s.a.PROFILE ? Object(o.c)(e) : Object(o.b)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1zLylbOLqdzG2C4JhdkEVQ",
				twitterLogo: "_1N1dJvzR-m3nNoVl8cxHul",
				link: "JqNsQRTEcAPCq8_G0O5mO",
				linkDescription: "_2Y1Xv08xrWbsDZuEvIuRKo",
				name: "_28fbIV1TS_oSVjfzjWnM0f",
				linkTitle: "elMVR2YfkbHdFTihhlUK4",
				linkIcon: "oi2L0mBSRAULcOPEtjXSh",
				description: "KKNu_jB7N6A-PuBrW0WoR",
				visitButton: "NBL39n3gjYvG4c9qlXJIk"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.m.less": function(e, t, n) {
			e.exports = {
				account: "_25M-5tlJjQOChCI8sg84QU"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/components/Widgets/Base/index.tsx"),
				l = n("./src/reddit/constants/posts.ts"),
				m = n("./src/reddit/helpers/trackers/profileSettings.ts"),
				p = n("./src/reddit/models/ExternalAccount/index.ts"),
				u = n("./src/reddit/selectors/externalAccount.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				h = n("./node_modules/fbt/lib/FbtPublic.js"),
				x = n("./src/reddit/controls/OutboundLink/index.tsx"),
				f = n("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				g = n("./src/reddit/icons/svgs/Twitter/index.tsx"),
				v = n("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				y = n("./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less"),
				E = n.n(y);
			var O = e => {
					const {
						account: t,
						clickEvent: n,
						provider: s
					} = e;
					let r, a = t.username,
						i = "";
					return s !== p.a.Twitter ? null : (r = o.a.createElement(g.a, {
						className: E.a.twitterLogo
					}), i = h.fbt._("View on Twitter", null, {
						hk: "39S5oy"
					}), a = "@".concat(t.username), o.a.createElement(v.a, null, o.a.createElement("span", {
						className: E.a.icon
					}, r), o.a.createElement(x.a, {
						className: E.a.link,
						href: t.link,
						isSponsored: !1,
						source: void 0,
						onClick: n
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
				w = n("./src/reddit/components/Widgets/ConnectedAccounts/index.m.less"),
				C = n.n(w);
			const {
				fbt: _
			} = n("./node_modules/fbt/lib/FbtPublic.js"), k = Object(a.c)({
				twitterAccount: (e, t) => {
					let {
						subredditOrProfile: n
					} = t;
					return n.type === l.a.PROFILE ? Object(u.c)(e, {
						profileName: n.name
					}) : null
				},
				user: (e, t) => {
					let {
						subredditOrProfile: n
					} = t;
					return n.type === l.a.PROFILE ? Object(b.eb)(e, {
						userName: n.name
					}) : null
				}
			}), j = Object(r.b)(k, e => ({
				trackTwitterAccountClicked: t => e((e, n) => m.k(n(), t))
			}), (e, t, n) => Object.assign({}, n, e, t, {
				onTwitterAccountClicked: () => t.trackTwitterAccountClicked(e.user)
			}));
			t.a = Object(c.c)(j(e => {
				const {
					onTwitterAccountClicked: t,
					twitterAccount: n
				} = e;
				return n ? o.a.createElement(i.a, null, o.a.createElement(d.b, null, o.a.createElement(d.a, null, _._("Connected accounts", null, {
					hk: "1ce9Jz"
				})), n && o.a.createElement("div", {
					className: C.a.account
				}, o.a.createElement(O, {
					provider: p.a.Twitter,
					account: n,
					clickEvent: t
				})))) : null
			}))
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/reddit/components/SEOTitle/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/selectors/telemetry.ts");
			const b = (e, t) => n => Object.assign({
				source: "community_widgets",
				action: "click",
				noun: "see_more",
				widget: Object(u.widget)(n, {
					subredditId: e,
					widgetKind: t
				})
			}, u.defaults);
			var h = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				x = n("./src/reddit/selectors/experiments/topPosts.ts"),
				f = n("./src/reddit/selectors/structuredStyles.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/models/Theme/index.ts"),
				y = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const E = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(y.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				O = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(y.a)(e).widgetColors.sidebarWidgetHeaderColor,
				w = e => {
					const t = E(e);
					return Object(v.f)(t)
				},
				C = e => {
					const t = O(e);
					return Object(v.f)(t)
				};
			var _ = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				k = n.n(_);
			const {
				fbt: j
			} = n("./node_modules/fbt/lib/FbtPublic.js"), P = Object(m.t)(), S = Object(r.b)(() => Object(a.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(m.m)(e, t) || void 0,
						s = t.redditStyle || Object(f.m)(e, {
							subredditId: n
						}),
						o = Object(g.S)(e);
					return s || o
				},
				nigtmode: g.S,
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
					return e.backgroundColor = E(this.props), e.borderColor = Object(h.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = w(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = O(this.props), e.color = e.fill = C(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: n,
						forceRedditStyle: s,
						headerButton: r,
						onClick: a,
						title: c,
						titleClassName: l,
						truncateThreshold: m
					} = this.props, u = n ? k.a.widgetContentOnly : k.a.widgetContent, b = !s && this.props.styles, h = b ? this.getWidgetBackgroundStyles() : {}, x = b ? this.getWidgetHeaderStyles() : {};
					return o.a.createElement("div", {
						className: Object(i.a)(t, k.a.widgetBackground, {
							[k.a.redditStyle]: s,
							[k.a.clickable]: !!a,
							[k.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": s,
						onClick: a,
						style: h
					}, c && o.a.createElement("div", {
						className: k.a.widgetHeader,
						style: x
					}, o.a.createElement("div", {
						className: Object(i.a)(k.a.widgetTitle, l)
					}, o.a.createElement(d.b, {
						type: d.a.Widget
					}, c)), r), o.a.createElement("div", {
						className: Object(i.a)(u, {
							[k.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? m : "none"
						}
					}, e), this.state.isTruncated && o.a.createElement(p.n, {
						className: k.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, j._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = P(S(Object(c.a)(Object(l.c)(I))))
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return x
			})), n.d(t, "b", (function() {
				return f
			}));
			var s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/post.ts"),
				a = n("./src/reddit/actions/tooltip.ts"),
				i = n("./src/reddit/models/Vote/index.ts"),
				c = n("./src/reddit/contexts/InsideOverlay.tsx"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/selectors/activeModalId.ts"),
				m = n("./src/reddit/selectors/experiments/chatPost.ts"),
				p = n("./src/reddit/selectors/moderatorPermissions.ts"),
				u = n("./src/reddit/selectors/postFlair.ts"),
				b = n("./src/reddit/selectors/posts.ts"),
				h = n("./src/reddit/selectors/user.ts");
			const x = {
					autoplayPref: h.b,
					activeModalId: l.a,
					crosspost: b.d,
					currentUser: h.i,
					isActive: b.j,
					isChatPostExperiment: m.d,
					isCurrentUserProfilePost: b.k,
					isExpanded: b.m,
					isLoggedIn: h.H,
					isMeta: (e, t) => {
						let {
							postId: n
						} = t;
						return Object(b.r)(e, n)
					},
					language: h.Q,
					moderatorPermissions: p.i,
					modModeEnabled: d.P,
					post: b.O,
					poll: (e, t) => {
						const n = e.posts.metaMap[t.postId];
						return n ? e.polls.models[n] : null
					},
					showEditFlair: u.a,
					showMedia: d.r,
					subredditOrProfile: b.bb,
					userIsOp: h.hb,
					flairStyleTemplate: d.R
				},
				f = (e, t) => {
					let {
						listingKey: n,
						listingName: s,
						postId: o
					} = t;
					return {
						handleVote: t => {
							const n = t === i.a.upvoted ? Object(r.cb)(o) : Object(r.y)(o);
							e(n)
						},
						onIgnoreReports: () => e(Object(r.ab)(o)),
						onOpenReportsDropdown: t => e(Object(a.h)({
							tooltipId: t
						}))
					}
				},
				g = Object(s.b)(() => Object(o.c)(x), f, (e, t, n) => Object.assign({}, e, t, n, {
					formatTitle: e => e.title
				}));
			t.a = e => g(Object(c.b)(e))
		},
		"./src/reddit/connectors/ClassicPost/searchResults.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.regexp.split.js"), n("./node_modules/core-js/modules/es6.regexp.constructor.js"), n("./node_modules/core-js/modules/es6.regexp.replace.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/LRUCache/index.ts"),
				c = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/connectors/ClassicPost/index.tsx");
			const l = Object(c.t)({
					searchQuery: c.V
				}),
				m = new i.a(250),
				p = e => {
					const t = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const n = "".concat(e.id, "-").concat(t);
						let s = m.get(n);
						if (void 0 === s) {
							const r = new RegExp("(\\b".concat(t, "\\b)"), "gi"),
								a = e.title.split(r);
							for (let e = 1; e < a.length; e += 2) a[e] = o.a.createElement("em", {
								style: {
									fontWeight: 700
								}
							}, a[e]);
							s = o.a.createElement("span", {
								style: {
									fontWeight: "normal"
								}
							}, o.a.Children.toArray(a)), m.set(n, s)
						}
						return s
					}
				},
				u = Object(r.b)(() => Object(a.c)(d.c), d.b, (e, t, n) => Object.assign({}, e, t, n, {
					formatTitle: p(n.searchQuery || "")
				}));
			t.a = e => l(u(e))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/subscription/index.ts"),
				a = n("./src/reddit/selectors/subreddit.ts"),
				i = n("./src/reddit/selectors/user.ts");
			t.a = Object(s.b)(() => Object(o.c)({
				language: i.Q,
				userIsSubscriber: a.bb
			}), (e, t) => {
				let {
					identifier: n
				} = t;
				return {
					onSubscribe: () => e(r.d([n], !0)),
					onSubscriptionsRequested: () => e(r.e()),
					onUnsubscribe: () => e(r.d([n], !1))
				}
			})
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts");
			const r = {
					[o.M.BEST]: () => s.fbt._("best", null, {
						hk: "4tcUbl"
					}),
					[o.M.HOT]: () => s.fbt._("hot", null, {
						hk: "44QCEp"
					}),
					[o.M.NEW]: () => s.fbt._("new", null, {
						hk: "3VBhPb"
					}),
					[o.M.CONTROVERSIAL]: () => s.fbt._("controversial", null, {
						hk: "4jWP0T"
					}),
					[o.M.RISING]: () => s.fbt._("rising", null, {
						hk: "1KmbkT"
					}),
					[o.M.TOP]: () => s.fbt._("top", null, {
						hk: "4pcLmp"
					})
				},
				a = e => {
					const t = r[e];
					return t && t() || ""
				},
				i = {
					[o.Pb.HOUR]: () => s.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[o.Pb.DAY]: () => s.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[o.Pb.WEEK]: () => s.fbt._("This week", null, {
						hk: "3Y5JkE"
					}),
					[o.Pb.MONTH]: () => s.fbt._("This month", null, {
						hk: "3NWWQf"
					}),
					[o.Pb.YEAR]: () => s.fbt._("This year", null, {
						hk: "3jD0mx"
					}),
					[o.Pb.ALL]: () => s.fbt._("All time", null, {
						hk: "2cL1Yf"
					})
				},
				c = e => {
					const t = i[e];
					return t && t() || ""
				}
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = o.a.createContext({})
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, n) {
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
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
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
				d = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = n("./src/reddit/controls/Checkbox/index.m.less"),
				m = n.n(l);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var u = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
				}
				return n
			};
			const b = e => t => {
					const {
						className: n,
						disabled: s,
						redditStyle: a,
						"data-redditstyle": i
					} = t, c = u(t, ["className", "disabled", "redditStyle", "data-redditstyle"]), d = ((e, t, n) => {
						const s = !(!t && !n);
						let o = "";
						return o = e ? s ? m.a.mDisabledRedditStyle : m.a.mDisabled : s ? m.a.mActiveRedditStyle : m.a.mActive
					})(s, a, i);
					return o.a.createElement(e, p({
						className: Object(r.a)(m.a.Checkbox, d, n)
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
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/lodash/throttle.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				m = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/index.m.less"),
				u = n.n(p),
				b = n("./src/reddit/controls/Dropdown/row.m.less"),
				h = n.n(b);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var f = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
				}
				return n
			};
			class g extends a.a.Component {
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
					}, n = Object(i.a)(h.a.iconWrapper, e.iconWrapperClassName);
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
						className: n
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
						className: n
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
				} = e, n = f(e, ["className"]);
				const s = Object(i.a)(h.a.row, t, {
					[h.a.mIsInteractive]: !n.noHover,
					[h.a.mIsSelected]: n.isSelected,
					[h.a.topics]: n.isTopicsStyle
				});
				return a.a.createElement(g, x({
					className: s
				}, n))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, n) {
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
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, n) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "d", (function() {
				return b
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/lib/prettyPrintNumber/index.ts"),
				c = (n("./src/lib/timeAgo/index.ts"), n("./src/reddit/controls/MetaData/index.m.less")),
				d = n.n(c),
				l = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
					}
					return n
				};
			const m = a.a.span("metaText", d.a),
				p = e => r.a.createElement(m, e, " · "),
				u = e => {
					var {
						isScoreHidden: t,
						language: n,
						score: o,
						useUpvotes: a
					} = e, c = l(e, ["isScoreHidden", "language", "score", "useUpvotes"]);
					const d = Object(i.b)(o),
						p = s.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [s.fbt._plural(o, "number", d)], {
							hk: "2L3T21"
						}),
						u = t ? s.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : a ? p : s.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [s.fbt._plural(o, "number", d)], {
							hk: "gf67v"
						});
					return r.a.createElement(m, c, u)
				},
				b = (e, t) => r.a.createElement(m, null, s.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [s.fbt._plural(e, "number", Object(i.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, n) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/InternalLink/index.tsx"),
				r = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				a = n.n(r);
			t.a = s.a.wrapped(o.a, "unstyledInternalLink", a.a)
		},
		"./src/reddit/helpers/describeApiError/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts");

			function r(e) {
				let {
					apiError: t,
					isLoggedOut: n
				} = e;
				switch (t.type) {
					case o.C.AUTHORIZATION_ERROR:
						return n ? s.fbt._("You might need to be logged in to do that.", null, {
							hk: "1313fG"
						}) : s.fbt._("It looks like you aren't allowed to do that.", null, {
							hk: "5tQod"
						});
					case o.C.VALIDATION_ERROR:
						return s.fbt._("We weren't able to handle your request.", null, {
							hk: "4umMwv"
						});
					case o.C.NOT_FOUND_ERROR:
						return s.fbt._("Sorry, there doesn't seem to be anything here.", null, {
							hk: "2UmS4e"
						});
					case o.C.SERVER_ERROR:
						return s.fbt._("Sorry, for some reason reddit can't be reached.", null, {
							hk: "1Sxl7y"
						});
					case o.C.LIKELY_UBLOCK_ERROR:
						return s.fbt._("It looks like one or more software blocking extensions you are using may be interfering with Reddit's ability to serve you content. Please try disabling them or changing the rules you use.", null, {
							hk: "6Gh68"
						});
					default:
						return s.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "FsWrq"
						})
				}
			}
		},
		"./src/reddit/helpers/getClickInfo.ts": function(e, t, n) {
			"use strict";
			t.a = e => ({
				hasNewTabModifier: !(!e.metaKey && !e.ctrlKey && 1 !== e.button)
			})
		},
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModFullPermissions/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e && !!e.all
		},
		"./src/reddit/helpers/postComponentForLayout/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "b", (function() {
				return E
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/lib/isUrl/index.ts"),
				i = n("./src/lib/logs/console.ts"),
				c = n("./src/reddit/constants/postLayout.ts"),
				d = n("./src/reddit/models/Media/index.ts");
			const l = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-BlankPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("reddit-components-BlankPost").then(n.bind(null, "./src/reddit/components/BlankPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/BlankPost/index.tsx"
					}
				}),
				m = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-ClassicPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~9f4422c2"), n.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~be557eac"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~3fa2ee42"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), n.e("Poll~ProfileComments~ProfilePrivate~RpanListingUnit~SearchResults~reddit-components-ClassicPost~redd~f8abff80"), n.e("Poll~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~~da5a0d34"), n.e("reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddit-compo~0e38b796"), n.e("reddit-components-ClassicPost")]).then(n.bind(null, "./src/reddit/components/ClassicPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/ClassicPost/index.tsx"
					}
				}),
				p = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-CompactPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~9f4422c2"), n.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~be557eac"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~3fa2ee42"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), n.e("Poll~ProfileComments~ProfilePrivate~RpanListingUnit~SearchResults~reddit-components-ClassicPost~redd~f8abff80"), n.e("Poll~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~~da5a0d34"), n.e("reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddit-compo~0e38b796"), n.e("reddit-components-CompactPost")]).then(n.bind(null, "./src/reddit/components/CompactPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/CompactPost/index.tsx"
					}
				}),
				u = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-LargePost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~9f4422c2"), n.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~be557eac"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~3fa2ee42"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), n.e("Poll~ProfileComments~ProfilePrivate~RpanListingUnit~SearchResults~reddit-components-ClassicPost~redd~f8abff80"), n.e("Poll~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~~da5a0d34"), n.e("reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddit-compo~0e38b796"), n.e("reddit-components-LargePost")]).then(n.bind(null, "./src/reddit/components/LargePost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/LargePost/index.tsx"
					}
				}),
				b = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-MediumPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), n.e("Poll~ProfileComments~ProfilePrivate~RpanListingUnit~SearchResults~reddit-components-ClassicPost~redd~f8abff80"), n.e("Poll~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~~da5a0d34"), n.e("reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddit-compo~0e38b796"), n.e("reddit-components-MediumPost")]).then(n.bind(null, "./src/reddit/components/MediumPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
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
				f = ["https://www.mcdonalds.com", "https://d2n94wep25xhn0.cloudfront.net", "https://www.dyson.com", "https://dyson.com"],
				g = e => e.source && e.source.url && e.isSponsored && f.some(t => e.source.url.startsWith(t)),
				v = e => !e.media || e.media.type === d.n.EMBED && !(d.b.has(e.media.provider) || g(e)),
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

			function E(e) {
				let {
					isCrosspost: t,
					isFirstPost: n,
					layout: s,
					post: o
				} = e;
				if (o.isBlank) return x;
				const r = !o.media && !!o.source && Object(a.a)(o.source.url),
					d = t && r;
				s === c.g.Large && v(o) && !d && (s = c.g.Medium);
				const l = h[s];
				return void 0 === l ? (Object(i.a)(void 0, "Could not find component for layout ".concat(s, ".")), x) : n && o.isSponsored && s === c.g.Large ? b : l
			}
		},
		"./src/reddit/helpers/styles/mixins/index.m.less": function(e, t, n) {
			e.exports = {
				baseLargeAndMediumPostStyles: "_2lHXa-mLMsRfm1Q5JxgU4r",
				basePostStyles: "REwsaLIz5u3DhM7zbbzIU",
				classicPostStyles: "bE7JgM2ex7W3aF3zci5bm",
				compactPostStyles: "FeLWdhOO-cVXowAo3Rndk",
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
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return p
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "d", (function() {
				return f
			}));
			var s = n("./node_modules/polished/dist/polished.es.js"),
				o = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				a = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = n("./src/reddit/models/Theme/index.ts"),
				c = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = n.n(d);
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
				b = e => Object(s.l)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : m,
				x = e => e.isActive ? l.a.mIsActive : void 0,
				f = e => {
					const t = Object(r.a)(Object(o.a)(e), a.a.actionIcon, a.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/reportPrompt.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const o = (e, t, n, o) => r => ({
					source: "report_prompt",
					noun: n,
					action: o,
					subreddit: s.subredditByName(r, e),
					post: s.post(r, t)
				}),
				r = (e, t, n, o) => r => ({
					source: "report_survey",
					noun: n,
					action: o,
					subreddit: s.subredditByName(r, e),
					post: s.post(r, t)
				})
		},
		"./src/reddit/hooks/useOnClickOutside.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js");

			function o(e, t) {
				const n = Object(s.useCallback)(n => {
					if (!t) return;
					const s = document.getElementById(e);
					s && (s.contains(n.target) || t(n))
				}, [e, t]);
				Object(s.useEffect)(() => {
					if (t) return document.body.addEventListener("click", n), () => {
						document.body.removeEventListener("click", n)
					}
				}, [t, n])
			}
		},
		"./src/reddit/hooks/useTracking.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = s.b
		},
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("archived"), c.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.m.less": function(e, t, n) {
			e.exports = {
				DropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp",
				dropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp"
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				i = n.n(a);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("dropdownTriangle"), " ").concat(e.className)
			}), "DropdownTriangle", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Envelope/index.m.less": function(e, t, n) {
			e.exports = {
				Envelope: "gsQG-L1wCCIUe8dJEOA6C",
				envelope: "gsQG-L1wCCIUe8dJEOA6C"
			}
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Envelope/index.m.less"),
				i = n.n(a);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("envelope"), " ").concat(e.className)
			}), "Envelope", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less": function(e, t, n) {
			e.exports = {
				CollapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI",
				collapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				i = n.n(a);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoArrowCollapse"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "CollapseIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less": function(e, t, n) {
			e.exports = {
				ExpandIcon: "QOwFub52NskNmv0MdMa2_",
				expandIcon: "QOwFub52NskNmv0MdMa2_"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				i = n.n(a);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoArrowExpand"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less": function(e, t, n) {
			e.exports = {
				LightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3",
				lightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.m.less": function(e, t, n) {
			e.exports = {
				MenuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg",
				menuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Menu/index.m.less"),
				i = n.n(a);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("menu"), " ").concat(e.className)
			}), "MenuIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Op/index.m.less": function(e, t, n) {
			e.exports = {
				OpIcon: "_3mrrZsVUDI2b3p1rpkjbph",
				opIcon: "_3mrrZsVUDI2b3p1rpkjbph"
			}
		},
		"./src/reddit/icons/svgs/Best/index.m.less": function(e, t, n) {
			e.exports = {
				best: "_3SejsWL-17KHAzDgcp66kT"
			}
		},
		"./src/reddit/icons/svgs/Cake/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
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
		"./src/reddit/icons/svgs/ClassicPosts/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
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
		"./src/reddit/icons/svgs/CompactPosts/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
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
		"./src/reddit/icons/svgs/Controversial/index.m.less": function(e, t, n) {
			e.exports = {
				controversial: "_2Yq1cYyaAnws8U-1N7H_f0"
			}
		},
		"./src/reddit/icons/svgs/Flag/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
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
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/Hot/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_14JCwSw7Z9KVa3DJCOcJWg"
			}
		},
		"./src/reddit/icons/svgs/LargePosts/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
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
		"./src/reddit/icons/svgs/New/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_14d58ZMXxV3Byed78nS3DU"
			}
		},
		"./src/reddit/icons/svgs/New/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/New/index.m.less"),
				i = n.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("polygon", {
				fill: "inherit",
				points: "17.16 10 19.07 12.936 15.799 14.188 15.619 17.686 12.237 16.776 10.035 19.5 7.833 16.776 4.451 17.686 4.271 14.188 1 12.936 2.91 10 1 7.065 4.271 5.812 4.451 2.315 7.833 3.224 10.035 .5 12.237 3.224 15.619 2.315 15.799 5.812 19.07 7.065"
			})))
		},
		"./src/reddit/icons/svgs/Rising/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_3k-hLnRWy2KVi9lKrKSut"
			}
		},
		"./src/reddit/icons/svgs/Save/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_2qT9eltTv4vv9GxxEZqvc0"
			}
		},
		"./src/reddit/icons/svgs/Top/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_3rlT9yoNCxQn9Q2EW5FjjE"
			}
		},
		"./src/reddit/icons/svgs/Top/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Top/index.m.less"),
				i = n.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				fill: "inherit",
				d: "M1.25,17.5 L1.25,7.5 L6.25,7.5 L6.25,17.5 L1.25,17.5 Z M12.49995,17.5001 L7.49995,17.5001 L7.49995,5.0001 L4.99995,5.0001 L9.99995,0.0006 L14.99995,5.0001 L12.49995,5.0001 L12.49995,17.5001 Z M13.75,17.5 L13.75,12.5 L18.75,12.5 L18.75,17.5 L13.75,17.5 Z"
			})))
		},
		"./src/reddit/icons/svgs/Twitter/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

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
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, n) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/layout/row/RightAlign/index.m.less"),
				r = n.n(o);
			t.a = s.a.div("rightAligned", r.a)
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, n) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				c = n.n(i);
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
		"./src/reddit/pages/ErrorPages/index.m.less": function(e, t, n) {
			e.exports = {
				primaryRouterLink: "WPSTJCepGLEWZl2fETrUM",
				container: "_3pfk0xbr5atzL7KT8pXEZG",
				title: "_3uo9iClHghoc_hoxzdgipi"
			}
		},
		"./src/reddit/pages/ErrorPages/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/pages/ErrorPages/index.m.less"),
				c = n.n(i);
			const d = e => {
					let {
						message: t
					} = e;
					return r.a.createElement("div", {
						className: c.a.container
					}, r.a.createElement("h3", {
						className: c.a.title
					}, t || s.fbt._("Sorry, there doesn't seem to be anything here.", null, {
						hk: "3VvHek"
					})), r.a.createElement(a.h, {
						className: c.a.primaryRouterLink,
						to: "/"
					}, s.fbt._("Go Home", null, {
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
					}, t || s.fbt._("Sorry, You do not have permission to view this page.", null, {
						hk: "4lRbHD"
					})), r.a.createElement(a.h, {
						className: c.a.primaryRouterLink,
						to: "/"
					}, s.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				}
		},
		"./src/reddit/pages/ProfileComments/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			n("./node_modules/core-js/modules/es6.regexp.match.js"), n("./node_modules/core-js/modules/es6.array.sort.js"), n("./node_modules/core-js/modules/es6.regexp.search.js");
			var s = n("./node_modules/lodash/fromPairs.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/extractQueryParams/index.ts"),
				m = n("./src/lib/makeListingKey/index.ts"),
				p = n("./src/reddit/actions/pages/profileComments.ts"),
				u = n("./src/reddit/actions/pages/profileShared.ts"),
				b = n("./src/reddit/components/ContentGate/index.tsx"),
				h = n("./src/reddit/components/EmptyProfile/index.ts"),
				x = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				f = n("./src/reddit/components/JumpToContent/index.tsx"),
				g = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./src/lib/classNames/index.ts")),
				v = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				y = n("./src/lib/lessComponent.tsx"),
				E = n("./src/reddit/components/ClassicPost/index.tsx"),
				O = n("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				w = n("./src/reddit/components/OverviewCommentPost/index.tsx"),
				C = n("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				_ = n("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				k = n("./src/reddit/constants/postLayout.ts"),
				j = n("./src/reddit/contexts/PageLayer/index.tsx"),
				P = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				S = n("./src/reddit/selectors/comments.ts"),
				I = n("./src/reddit/components/ProfileCommentList/ListItem.m.less"),
				N = n.n(I);

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var L = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
				}
				return n
			};
			const M = y.a.wrapped(E.default, "ClassicPost", N.a),
				R = y.a.wrapped(w.a, "OverviewCommentPost", N.a),
				A = Object(j.t)({
					currentProfileName: j.h,
					pageLayer: e => e
				}),
				B = Object(c.c)({
					comment: (e, t) => {
						let {
							itemId: n
						} = t;
						return Object(S.n)(e, {
							commentId: n
						})
					},
					profileName: (e, t) => {
						let {
							currentProfileName: n
						} = t;
						if (n) return ((e, t) => {
							const {
								users: n
							} = e, s = t.toLowerCase(), o = n.models[s];
							return o ? o.username : void 0
						})(e, n)
					}
				});
			var F = A(Object(i.b)(B)(e => {
				const {
					comment: t,
					itemId: n,
					isFirstInCommentList: s,
					isLastInCommentList: o,
					layout: r,
					profileName: i,
					allowModToolsUnderComments: c
				} = e;
				if (r === k.g.Compact) return a.a.createElement(O.a, e);
				const {
					height: d,
					width: l
				} = e, m = L(e, ["height", "width"]);
				return a.a.createElement(D, m, s && a.a.createElement(C.a, {
					isFirst: !0
				}, r === k.g.Large ? a.a.createElement(M, T({}, e, {
					availableWidth: l,
					inSubredditOrProfile: !1,
					isOverlay: !1
				})) : a.a.createElement(R, T({}, e, {
					commentId: n,
					profileName: i
				}))), a.a.createElement(C.a, {
					isLast: o
				}, a.a.createElement(_.a, {
					commentId: n,
					depth: t.parentId ? 1 : 0,
					isFirst: !0,
					isLast: !0,
					key: n,
					profileName: i,
					showModTools: c
				})))
			}));
			const D = Object(v.a)(e => a.a.createElement("div", {
				children: e.children,
				className: Object(g.a)(N.a.backgroundMargin, {
					[N.a.isFirstInCommentList]: e.isFirstInCommentList,
					[N.a.isLastInCommentList]: e.isLastInCommentList
				}),
				style: {
					background: Object(P.e)(e)
				}
			}));
			var H = n("./src/reddit/components/ProfileItemList/index.tsx"),
				W = n("./node_modules/lodash/noop.js"),
				U = n.n(W),
				V = n("./src/reddit/actions/ads/index.ts"),
				G = n("./src/reddit/actions/comment/list.ts"),
				z = n("./src/reddit/actions/post.ts"),
				K = n("./src/reddit/components/TrackingHelper/index.tsx"),
				J = n("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				q = n("./src/reddit/helpers/trackers/post.ts"),
				Q = n("./src/reddit/featureFlags/index.ts"),
				Z = n("./src/reddit/selectors/posts.ts"),
				Y = n("./src/reddit/selectors/profileComments.ts"),
				X = n("./src/reddit/selectors/subreddit.ts"),
				$ = n("./src/reddit/selectors/tracking.ts"),
				ee = n("./src/reddit/selectors/user.ts");
			const te = Object(j.t)(),
				ne = {
					apiError: Y.a,
					apiPending: Y.b,
					currentUser: ee.i,
					measureScrollFPS: Q.d.measureScrollFPS,
					layout: j.N,
					loadMore: Y.d,
					subredditsById: X.X,
					viewportDataLoaded: $.a,
					commentsById: S.r,
					itemIds: Y.f,
					itemIdToPostId: Y.e,
					postsById: Z.R,
					estimateItemHeight: e => (e, t, n) => {
						if (n) switch (t) {
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
				se = Object(c.c)(ne),
				oe = Object(i.b)(se, e => ({
					onBottomViewed: (t, n) => e(Object(G.c)(t, n)),
					adBrandSafetyStatusReceived: t => {
						e(V.d({
							isViewSafe: t
						}))
					},
					openPost: t => e(Object(z.M)(t)),
					fireAdPixelsOfType: U.a,
					trackOnPostEnteredViewport: U.a
				}), (e, t, n) => Object.assign({}, e, t, n, {
					postClickEvent: q.f,
					postComponentForLayout: J.b
				}));

			function re() {
				return (re = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ae = e => a.a.createElement(F, re({}, e, {
					allowModToolsUnderComments: !0
				})),
				ie = (e => Object(K.c)(te(oe(e))))(H.a);
			var ce = e => a.a.createElement(ie, re({}, e, {
					itemComponent: ae
				})),
				de = n("./src/reddit/components/ProfileNavMenu/index.tsx"),
				le = n("./src/reddit/components/ProfileSidebar/index.tsx"),
				me = n("./src/reddit/helpers/trackers/screenview.ts"),
				pe = n("./src/reddit/layout/page/Listing/index.tsx"),
				ue = n("./src/reddit/models/ContentGate.ts"),
				be = n("./src/reddit/pages/ErrorPages/index.tsx"),
				he = n("./src/reddit/selectors/profile.ts");

			function xe() {
				return (xe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const fe = Object(j.t)(),
				ge = Object(c.a)(j.B, ee.V, (e, t) => {
					let {
						location: n
					} = t;
					return o()([...Object(l.a)(n.search)])
				}, j.N, (e, t) => {
					let {
						match: n
					} = t;
					return n.params.profileName
				}, (e, t) => {
					let {
						match: n
					} = t;
					return Object(he.j)(e, {
						profileName: n.params.profileName
					})
				}, ee.H, (e, t) => {
					let {
						match: n
					} = t;
					return Object(ee.e)(e, d.Rb + n.params.profileName)
				}, (e, t, n, s, o, r, a, i) => {
					const {
						sort: c,
						t: d
					} = Object(u.b)(n), l = Object(m.a)("u_".concat(o), c, n);
					return {
						contentGateInfo: i,
						over18Prefs: t,
						isLoggedIn: a,
						isOwnProfile: e,
						isProfileNSFW: !!r && r.isNSFW,
						layout: s,
						listingKey: l,
						profileName: o,
						sort: c,
						timeSort: d
					}
				}),
				ve = Object(i.b)(ge, (e, t) => ({
					onLoadMore: () => e(Object(p.g)()),
					onLayoutChange: () => e(Object(p.h)(Object.assign({}, t.match, {
						queryParams: o()([...Object(l.a)(t.location.search)])
					})))
				}));
			t.default = fe(ve(e => {
				const {
					contentGateInfo: t,
					over18Prefs: n,
					isOwnProfile: s,
					isProfileNSFW: o,
					listingKey: r,
					onLoadMore: i,
					onLayoutChange: c,
					pageLayer: l,
					profileName: m,
					sort: p,
					timeSort: u
				} = e;
				if (!m || !l) return null;
				if (t && t.profileDeleted) return a.a.createElement(b.default, {
					contentGateType: ue.a.ProfileDeleted,
					profileName: m
				});
				if (t && t.profileSuspended) return a.a.createElement(b.default, {
					contentGateType: ue.a.ProfileSuspended,
					profileName: m
				});
				if (451 === l.status || t && t.profileBlockedForLegalReason) return a.a.createElement(b.default, {
					contentGateType: ue.a.ProfileBlockedForLegalReason,
					profileName: m
				});
				if (403 === l.status) return a.a.createElement(be.a, null);
				if (404 === l.status) return a.a.createElement(b.default, {
					contentGateType: ue.a.ProfileDoesNotExist,
					profileName: m
				});
				const g = m.toLowerCase(),
					v = "/user/".concat(m, "/comments/"),
					y = {
						listingKey: r,
						listingName: g
					};
				if (!n && o && !s) return a.a.createElement(b.default, {
					contentGateType: ue.a.Nsfw,
					subredditName: m
				});
				const E = {
					sort: p,
					baseUrl: v,
					sortOptions: d.qb,
					timeSort: u
				};
				return a.a.createElement(pe.a, {
					className: e.className,
					fitPageToContent: !0,
					contentNavBar: a.a.createElement(a.a.Fragment, null, a.a.createElement(de.a, {
						profileName: m
					})),
					content: a.a.createElement(a.a.Fragment, null, a.a.createElement(x.a, E), a.a.createElement(f.a, null), a.a.createElement(ce, {
						listingKey: r,
						listingName: g,
						listingViewed: (e, t) => Object(me.k)(r, p, t, e, u),
						noPostsComponent: () => a.a.createElement(h.b, {
							profileName: m,
							timeSort: u
						}),
						onLoadMore: i,
						onTryAgain: c,
						inSubredditOrProfile: !1
					})),
					sidebar: a.a.createElement(le.a, xe({}, y, {
						profileName: m
					}))
				})
			}))
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = (e, t) => {
				let {
					listingKey: n
				} = t;
				return e.tracking.viewportDataLoaded[n]
			}
		}
	}
]);
//# sourceMappingURL=ProfileComments.69643df2055516ba6c21.js.map