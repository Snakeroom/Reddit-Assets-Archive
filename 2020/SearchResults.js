// https://www.redditstatic.com/desktop2x/SearchResults.009cb94b2e430eaab42c.js
// Retrieved at 6/1/2020, 1:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SearchResults", "reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddit-compo~0e38b796", "InFeedChaining~SubredditTopContent~TopWeekPostsDiscoveryUnit", "ChatPost~ModQueuePages"], {
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
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
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
				return r => {
					const o = b(r.target, r.currentTarget);
					u(r.target, r.currentTarget, p.anchors) ? o && t && e(t(s, o)) : o && t && e(e => Object.assign({}, t(s, o)(e), {
						actionInfo: Object(c.previousPageActionInfo)(e)
					})), u(r.target, r.currentTarget, p.anchorsAndButtons) && n(r)
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
						return a.a.createElement(e, d({}, r()(this.props, "sendEvent", "eventFactory", "clickTrackingId"), {
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
			const r = new Map,
				o = new Map;
			"undefined" != typeof window && (s("./node_modules/intersection-observer/intersection-observer.js"), n = new IntersectionObserver(e => {
				e.forEach(e => {
					const t = e.target,
						s = e.intersectionRatio > 0;
					if (s !== !!o.get(t)) {
						o.set(t, s);
						const n = r.get(t);
						if (n) {
							n(e, s && !!o.get(t))
						}
					}
				})
			}, {
				threshold: [.001]
			}));
			const a = (e, t) => {
					try {
						r.set(e, t), n && n.observe(e)
					} catch (s) {
						0
					}
				},
				i = e => {
					try {
						r.delete(e), n && n.unobserve(e)
					} catch (t) {
						0
					}
				}
		},
		"./src/reddit/actions/subreddit/inlineEditing.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return g
			})), s.d(t, "a", (function() {
				return v
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/structuredStyles/index.ts"),
				a = s("./src/reddit/actions/subreddit/constants.ts"),
				i = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/constants/blade.ts"),
				d = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				l = s("./src/reddit/models/Image/index.tsx"),
				m = s("./src/reddit/models/Toast/index.ts"),
				p = s("./src/reddit/selectors/structuredStyles.ts"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				b = s("./src/telemetry/index.ts");
			const h = Object(r.a)(a.r),
				x = Object(r.a)(a.s),
				f = Object(r.a)(a.q),
				g = (e, t, s) => async (n, r, o) => {
					const a = Object(u.z)(r(), {
						subredditName: e
					});
					if (a) return v(a, t, s)(n, r, o)
				}, y = () => n.fbt._("Error uploading image, please try again later", null, {
					hk: "7ZIYs"
				}), v = (e, t, s) => async (r, a, u) => {
					const g = await Object(l.e)(t);
					r(h());
					const v = a();
					try {
						await Object(o.g)("communityIcon", g, e.id)(r, a, u)
					} catch (C) {
						return Object(b.a)(Object(d.c)(v, "something went wrong with the uploading the image")), r(Object(i.e)({
							kind: m.b.Error,
							text: y()
						})), void r(f())
					}
					const O = Object(p.d)(a(), {
						name: "communityIcon"
					});
					if (!O) return Object(b.a)(Object(d.c)(v, "image is null")), r(Object(i.e)({
						kind: m.b.Error,
						text: y()
					})), void r(f());
					await Object(o.k)(e.id, {
						communityIcon: O
					}, c.b.idCard, s)(r, a, u), r(Object(i.e)({
						kind: m.b.SuccessCommunity,
						text: n.fbt._("Successfully updated Community Icon!", null, {
							hk: "29LGdg"
						})
					})), r(x())
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
				r = s.n(n);
			const o = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", r.a);
			t.a = o
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
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
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			t.a = e => {
				var {
					className: t
				} = e, s = l(e, ["className"]);
				return r.a.createElement(a.a, d({
					className: Object(o.a)(t, c.a.CallToActionButton, {
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
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
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

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const g = Object(l.t)(),
				y = Object(a.c)({
					isFakeSubreddit: l.x
				}),
				v = Object(o.b)(y),
				O = e => {
					const t = {
						interactive: !1,
						voteState: p.a.notVoted
					};
					return r.a.createElement("div", {
						className: Object(i.a)(e.className, x.a.emptyVerticalVotes)
					}, r.a.createElement(d.d, f({
						key: "u"
					}, t)), e.children, r.a.createElement(d.c, f({
						key: "d"
					}, t)))
				},
				C = () => r.a.createElement(O, null, r.a.createElement("div", {
					className: x.a.emptyScore,
					key: "s"
				}));
			t.b = g(v(e => r.a.createElement("div", {
				className: Object(i.a)(e.className, b.a.classicPostStyles, b.a.classicAndCompactPlaceholderStyles)
			}, r.a.createElement(c.b, null, r.a.createElement(C, null)), r.a.createElement("div", {
				className: x.a.mainBody
			}, r.a.createElement("div", {
				className: x.a.thumbnailContainer
			}, r.a.createElement("div", {
				className: Object(i.a)(x.a.thumbnail, Object(m.b)(e))
			})), r.a.createElement("div", {
				className: x.a.content
			}, r.a.createElement("div", {
				key: "a"
			}, r.a.createElement("div", {
				key: "aa",
				className: Object(i.a)(x.a.title, Object(m.b)(e))
			}), r.a.createElement("div", {
				key: "ab",
				className: Object(i.a)(x.a.meta, Object(m.b)(e))
			})), r.a.createElement("div", {
				key: "f",
				className: x.a.flatlist
			}, r.a.createElement("div", {
				key: "fa",
				className: Object(i.a)(x.a.flatlistExpando, Object(m.b)(e))
			}), r.a.createElement("div", {
				key: "fb",
				className: x.a.flatlistSeparator
			}), r.a.createElement("div", {
				key: "fc",
				className: Object(i.a)(x.a.flatListItemOne, Object(m.b)(e))
			}), r.a.createElement("div", {
				key: "fd",
				className: Object(i.a)(x.a.flatListItemTwo, Object(m.b)(e))
			})))))))
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "renderMedia", (function() {
				return V
			})), s.d(t, "SearchResultsClassicPost", (function() {
				return z
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/config.ts"),
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
				f = s("./src/reddit/components/ModModeReports/helpers.ts"),
				g = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				y = s("./src/reddit/components/PostContainer/index.tsx"),
				v = s("./src/reddit/components/PostMedia/index.tsx"),
				O = s("./src/reddit/components/PostMeta/index.tsx"),
				C = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				E = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				j = s("./src/reddit/components/PostTitle/index.tsx"),
				_ = s("./src/reddit/components/PostTopMeta/index.tsx"),
				k = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				P = s("./src/reddit/models/Media/index.ts"),
				S = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				w = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				I = s("./src/reddit/connectors/ClassicPost/searchResults.tsx"),
				N = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				T = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				M = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				L = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				R = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				F = s.n(R),
				A = s("./src/reddit/components/ClassicPost/index.m.less"),
				B = s.n(A);

			function D() {
				return (D = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const U = 16;
			class W extends r.a.Component {
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
						inSubredditOrProfile: v,
						eventFactory: w,
						first: I,
						flairStyleTemplate: R,
						formatTitle: A,
						isCheckboxSelected: W,
						isCurrentUserProfilePost: H,
						isFrontpage: q,
						isLoggedIn: z,
						isOverlay: K,
						language: G,
						moderatorPermissions: J,
						modModeEnabled: Q,
						onClickPost: X,
						onIgnoreReports: Y,
						onOpenReportsDropdown: Z,
						poll: $,
						post: ee,
						redditStyle: te,
						scrollerItemRef: se,
						showBulkActionCheckbox: ne,
						showEditFlair: re,
						showMedia: oe,
						subredditOrProfile: ae,
						toggleCheckbox: ie,
						userIsOp: ce
					} = this.props, de = te ? void 0 : R, le = this.props.crosspost || void 0, me = Object(M.a)(J), pe = Object(N.a)(J), ue = Object(T.a)(J), be = Q && M.a, he = !!ee.media && ee.media.type === P.n.RTJSON, xe = ce && he, fe = v && !oe, ge = !!ee.media && Object(P.B)(ee.media), ye = {
						flairStyleTemplate: de,
						post: ee,
						inSubredditOrProfile: v,
						isCurrentUserProfilePost: H,
						isOverlay: K,
						shouldShowSubscribeButton: !(q && z),
						subredditOrProfile: ae,
						language: G
					}, ve = r.a.createElement(y.a, {
						className: Object(a.a)(F.a.classicPostStyles, B.a.postContainer, Object(L.a)(this.props), I ? B.a.mFirst : void 0, e),
						isOverlay: K,
						style: Object.assign({}, Object(L.d)(this.props), Object(L.b)(this.props.flairStyleTemplate)),
						post: ee,
						onClick: X,
						eventFactory: w
					}, r.a.createElement(E.a, {
						model: ee,
						handleVote: s,
						showBulkActionCheckbox: ne,
						isCheckboxSelected: W,
						toggleCheckbox: ie,
						flairStyleTemplate: de,
						redditStyle: te,
						subreddit: ae
					}), r.a.createElement(g.a, {
						"data-click-id": "background",
						flairStyleTemplate: de
					}, r.a.createElement(p.a, {
						className: B.a.eventMeta,
						post: ee,
						language: G
					}), r.a.createElement("div", {
						className: B.a.mainBody
					}, r.a.createElement("div", {
						className: fe ? B.a.expandoContainer : B.a.thumbnailContainer
					}, !fe && r.a.createElement(S.a, {
						className: B.a.classicThumbnail,
						crosspost: le && ee,
						isMeta: i,
						post: le || ee,
						redditStyle: te,
						templatePlaceholderImage: de && de.postPlaceholderImage,
						removeLink: ge
					}), r.a.createElement(u.a, {
						crosspost: le,
						className: B.a.rightExpando,
						isExpanded: !!n,
						post: ee,
						useMediaIcons: !1
					})), r.a.createElement("div", {
						className: B.a.content,
						"data-click-id": "body",
						style: {
							paddingBottom: "".concat(U, "px")
						}
					}, r.a.createElement(j.c, {
						className: $ ? B.a.titleWithPoll : void 0,
						format: A,
						poll: $,
						post: ee,
						redditStyle: te,
						size: j.b.Medium,
						titleColor: de && de.postTitleColor,
						isOverlay: K
					}, ee.source && !le && r.a.createElement(k.a, {
						href: ee.source.url,
						isSponsored: ee.isSponsored,
						postId: ee.id,
						source: ee.source
					}, Object(c.a)(ee))), r.a.createElement(O.a, D({
						key: "PostMeta"
					}, ye)), Q && me && Object(f.c)(ee) && r.a.createElement(x.a, {
						onIgnoreReports: Y,
						reportable: ee
					}), r.a.createElement("div", {
						className: B.a.spacer
					}), ee.source && ee.source.url && ee.isSponsored && r.a.createElement(d.a, {
						className: B.a.adLinkWrapper
					}, r.a.createElement(k.a, {
						href: ee.source.url.replace(o.a.redditUrl, ""),
						isSponsored: ee.isSponsored,
						postId: ee.id,
						source: ee.source
					}, ee.source.displayText), ee.callToAction && r.a.createElement(l.a, {
						href: ee.source.url.replace(o.a.redditUrl, ""),
						isSponsored: ee.isSponsored,
						postId: ee.id,
						source: ee.source
					}, ee.callToAction)), r.a.createElement("div", {
						className: B.a.flatlistContainer
					}, r.a.createElement(u.a, {
						className: B.a.leftExpando,
						crosspost: le,
						isExpanded: !!n,
						post: ee,
						useMediaIcons: !1
					}), r.a.createElement(m.a, {
						className: B.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: de,
						model: ee,
						onVoteClick: s
					}), r.a.createElement(b.a, {
						className: B.a.flatlistSeparator
					}), r.a.createElement(b.c, {
						className: B.a.flatlist,
						currentUser: t,
						hasModFlairPerms: pe,
						hasModPostPerms: me,
						hasModFullPerms: ue,
						isOverlay: !!K,
						language: G,
						modModeEnabled: Q,
						onIgnoreReports: Y,
						onOpenReportsDropdown: Z,
						post: ee,
						showEditPost: xe,
						showEditFlair: re,
						tooltipType: K ? _.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(C.h)({
							editPost: !be,
							save: !be,
							hide: !be,
							report: !be
						})
					})), r.a.createElement(h.d, {
						postId: ee.id
					}))), V(ee, se, n)));
					return r.a.createElement(r.a.Fragment, null, ve)
				}
			}
			const V = (e, t, s) => s ? e.crosspostRootId ? r.a.createElement("div", {
					className: B.a.crosspostMediaWrapper
				}, H(e, t)) : H(e, t) : null,
				H = (e, t) => r.a.createElement(v.a, {
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
				q = Object(i.a)(W),
				z = Object(I.a)(q);
			t.default = Object(w.a)(q)
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
				CrowdControlText: "Eoj3NCGwtl7hQcr7Rnc0N",
				crowdControlText: "Eoj3NCGwtl7hQcr7Rnc0N",
				metaText: "_3_GZIIN1xcMEC5AVuv4kfa"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/tooltip.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/humanizeDateTime/index.ts"),
				p = s("./src/lib/lessComponent.tsx"),
				u = s("./src/lib/timeAgo/index.ts"),
				b = s("./src/reddit/components/AuthorLink/index.tsx"),
				h = s("./src/reddit/components/AwardBadges/index.tsx"),
				x = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				f = s("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				g = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				y = s("./src/reddit/featureFlags/index.ts"),
				v = s("./src/reddit/selectors/economics.ts"),
				O = s("./src/reddit/components/Economics/TopTippers/Icon/index.tsx"),
				C = s("./src/reddit/components/Economics/TopTippers/CommentUsername/index.m.less"),
				E = s.n(C);
			const j = e => {
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
							contentId: s
						} = t;
						return e.posts.models[s]
					},
					tippers: (e, t) => {
						if (y.d.spTopTippers(e)) return Object(v.y)(e, t)
					}
				}))((function(e) {
					if (e.tippers && e.tippers.allTippers.has(e.userId)) {
						const t = e.tippers.topTippers.ranking[e.userId] || 5,
							s = o.a.cloneElement(o.a.Children.only(e.children), {
								style: j(t)
							});
						return o.a.createElement("div", {
							className: E.a.container
						}, o.a.createElement(O.a, {
							className: E.a.badge,
							creatorId: e.creatorId || e.post && e.post.authorId,
							rank: t,
							subredditId: e.subredditId
						}), s)
					}
					return e.children
				})),
				k = s("./src/reddit/components/Flair/index.tsx"),
				P = s("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				S = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				w = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				I = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				N = s("./src/reddit/components/PostTopMeta/index.tsx"),
				T = s("./src/reddit/helpers/isRemoved.ts"),
				M = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				L = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				R = s("./src/reddit/actions/comment/index.ts"),
				F = s("./src/reddit/models/Comment/index.ts"),
				A = s("./src/reddit/models/Flair/index.ts"),
				B = s("./src/reddit/icons/fonts/Admin/index.tsx"),
				D = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				U = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				W = s("./src/reddit/icons/fonts/helpers.tsx"),
				V = s("./src/reddit/icons/fonts/Op/index.m.less"),
				H = s.n(V);
			var q = p.a.wrapped(e => o.a.createElement("i", {
					className: "".concat(Object(W.b)("op"), " ").concat(e.className),
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, o.a.createElement(W.a, null, e.desc)), "OpIcon", H.a),
				z = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				K = s("./src/reddit/icons/fonts/Report/index.tsx"),
				G = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				J = s("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				Q = s("./src/reddit/icons/svgs/Cake/index.tsx"),
				X = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				Y = s("./src/reddit/controls/MetaData/index.tsx"),
				Z = s("./src/reddit/selectors/subreddit.ts"),
				$ = s("./src/reddit/selectors/userFlair.ts"),
				ee = s("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				te = s.n(ee);

			function se() {
				return (se = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var ne = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const re = p.a.wrapped(k.b, "RightPositionedAuthorFlair", te.a),
				oe = p.a.wrapped(B.a, "AdminIcon", te.a),
				ae = p.a.wrapped(D.a, "Approve", te.a),
				ie = p.a.wrapped(U.a, "Lock", te.a),
				ce = p.a.div("AdminEmeritus", te.a),
				de = p.a.wrapped(J.a, "Automoderator", te.a),
				le = p.a.wrapped(Q.a, "CakeIcon", te.a),
				me = p.a.wrapped(X.a, "Moderator", te.a),
				pe = p.a.wrapped(z.a, "Remove", te.a),
				ue = p.a.wrapped(K.a, "Report", te.a),
				be = p.a.wrapped(G.a, "Spam", te.a),
				he = p.a.wrapped(q, "Op", te.a),
				xe = p.a.wrapped(B.a, "Contractor", te.a),
				fe = p.a.a("MetaLink", te.a),
				ge = p.a.wrapped(Y.a, "EditedText", te.a),
				ye = p.a.wrapped(Y.a, "StickiedText", te.a),
				ve = p.a.span("DeletedText", te.a),
				Oe = p.a.wrapped(Y.a, "MetaSeparator", te.a),
				Ce = p.a.wrapped(Y.a, "CrowdControlText", te.a),
				Ee = p.a.wrapped(S.b, "AuthorHoverCard", te.a),
				je = p.a.a("RemovalReason", te.a),
				_e = p.a.wrapped(x.b, "Component", te.a),
				ke = e => (t, s) => {
					let {
						comment: n,
						renderedInOverlay: r
					} = s;
					return "".concat(e).concat(n.id).concat(r ? "inOverlay" : "")
				},
				Pe = () => n.fbt._("Reddit admin, speaking officially", null, {
					hk: "3vg8wE"
				}),
				Se = () => n.fbt._("Cake day", null, {
					hk: "1xptSi"
				}),
				we = () => n.fbt._("Reddit admin emeritus", null, {
					hk: "1Md5AV"
				}),
				Ie = e => n.fbt._("Moderator of {subredditDisplayText}, speaking officially", [n.fbt._param("subredditDisplayText", e)], {
					hk: "3pHm3n"
				}),
				Ne = () => n.fbt._("Original Poster", null, {
					hk: "3DqK8z"
				}),
				Te = () => n.fbt._("Reddit contractor", null, {
					hk: "3APwEh"
				}),
				Me = Object(a.b)(() => Object(i.c)({
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
							comment: s
						} = t;
						return !!Object(v.w)(e, s.subredditId, s.authorId).length
					},
					subredditDisplayText: (e, t) => {
						const s = Object(Z.H)(e, {
							commentId: t.comment.id
						});
						return s ? s.displayText : ""
					},
					topTippersEnabled: y.d.spTopTippers,
					flairPosition: (e, t) => {
						let {
							comment: s
						} = t;
						return Object($.d)(e, {
							subredditId: s.subredditId
						})
					}
				}), (e, t) => ({
					onCreatedClick: () => {
						window.addEventListener("focus", (function s() {
							((e, t, s) => {
								window.removeEventListener("focus", s), e(Object(R.N)({
									commentListNodeId: t
								})), window.setTimeout(() => e(Object(R.N)({
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
			t.a = Me(e => {
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
					compact: y,
					flair: v,
					flairPosition: O,
					hasBadges: C,
					isAvatarsInCommentsEnabled: E,
					isLivestreaming: j,
					ignoreFlairPosition: _,
					ignoreLock: S,
					language: w,
					lockedTooltipId: T,
					modTooltipId: M,
					onHideTooltip: L,
					onShowTooltip: R,
					opTooltipId: B,
					openRemovalReasonModal: D,
					removeTooltipId: U,
					renderContractorBadge: W,
					renderedInOverlay: V,
					reportTooltipId: H,
					spamTooltipId: q,
					subredditDisplayText: z,
					topTippersEnabled: K
				} = e;
				if (u.isDeleted) return o.a.createElement(Le, se({}, e, {
					className: Object(d.a)(c, te.a.container, {
						[te.a.collapsed]: m
					})
				}));
				if (m) return o.a.createElement(Re, se({}, e, {
					className: Object(d.a)(c, te.a.container, {
						[te.a.collapsed]: m
					})
				}));
				const G = !_ && O === A.b.Left;
				return o.a.createElement("div", {
					className: Object(d.a)(c, te.a.container, {
						[te.a.collapsed]: m,
						[te.a.hasBadges]: C,
						[te.a.liveStreaming]: j
					})
				}, v && G && o.a.createElement(k.b, {
					flair: v,
					forceSmallEmojis: y
				}), !Object(F.d)(u) && o.a.createElement(_e, {
					showAddCustom: !0,
					subredditId: u.subredditId,
					userId: u.authorId,
					uniqueIdentifier: u.id
				}), o.a.createElement(Ee, {
					postOrComment: u,
					tooltipType: V ? N.c.Lightbox : void 0
				}, o.a.createElement(f.b, {
					ignore: Object(F.d)(u) || !!u.distinguishType && u.distinguishType !== l.A.NONE,
					subredditId: u.subredditId,
					userId: u.authorId
				}, o.a.createElement(Ae, {
					comment: u,
					isLivestreaming: j,
					isStrong: !!y,
					isAuthorDeleted: Object(F.d)(u),
					topTippersEnabled: K
				}, i && i))), p && o.a.createElement(Ce, null, "Crowd Control"), p && o.a.createElement(Y.c, {
					className: te.a.metaText,
					key: "crowdControlSeparator"
				}), v && !G && o.a.createElement(re, {
					flair: v,
					forceSmallEmojis: y
				}), !y && o.a.createElement(P.a, {
					className: te.a.publicPoints,
					contentId: u.id,
					metaSeparator: o.a.createElement(Y.c, {
						className: te.a.metaText
					}),
					subredditId: u.subredditId,
					userId: u.authorId,
					username: u.author
				}), o.a.createElement(o.a.Fragment, null, o.a.createElement(I.b, {
					commentId: u.id
				}), o.a.createElement(I.a, {
					commentId: u.id,
					commentsPageKey: b
				}), o.a.createElement(Ue, {
					comment: u,
					compact: y,
					adminTooltipId: s,
					adminEmeritusTooltipId: t,
					cakedayTooltipId: a,
					contractorTooltipId: x,
					language: w,
					modTooltipId: M,
					onHideTooltip: L,
					onShowTooltip: R,
					opTooltipId: B,
					renderContractorBadge: W,
					subredditDisplayText: z
				})), !y && o.a.createElement(o.a.Fragment, null, !u.isDeleted && !E && o.a.createElement(Y.b, {
					className: te.a.metaText,
					isScoreHidden: u.isScoreHidden,
					language: w,
					score: u.score
				}), !E && o.a.createElement(Y.c, {
					className: te.a.metaText,
					key: "scoreCreatedSeparator"
				}), o.a.createElement(Be, se({
					key: "Created"
				}, e)), u.isStickied && Ve(), u.editedAt && Fe(u.editedAt)), o.a.createElement(o.a.Fragment, null, o.a.createElement(We, {
					comment: u,
					approveTooltipId: n,
					automodTooltipId: r,
					ignoreLock: S,
					language: w,
					lockedTooltipId: T,
					onHideTooltip: L,
					onShowTooltip: R,
					openRemovalReasonModal: D,
					removeTooltipId: U,
					reportTooltipId: H,
					spamTooltipId: q
				}), o.a.createElement(g.a, {
					className: te.a.DonationAmount,
					contentId: u.id,
					subredditId: u.subredditId
				})), o.a.createElement(h.a, {
					isOverlay: V,
					thing: u
				}))
			});
			const Le = e => {
					const {
						childrenInfo: t,
						collapsed: s,
						className: r,
						comment: a
					} = e;
					return o.a.createElement("div", {
						className: r
					}, o.a.createElement(ve, null, a.deletedBy === F.a.User ? n.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : n.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), o.a.createElement(Be, se({
						key: "Created"
					}, e)), s && De({
						childrenInfo: t
					}))
				},
				Re = e => {
					const {
						comment: t,
						language: s,
						className: n,
						childrenInfo: r
					} = e;
					return o.a.createElement("div", {
						className: n
					}, o.a.createElement("div", null, o.a.createElement(Ae, {
						comment: t,
						isAuthorDeleted: Object(F.d)(t),
						topTippersEnabled: !1
					})), o.a.createElement(Y.b, {
						className: te.a.metaText,
						isScoreHidden: t.isScoreHidden,
						language: s,
						score: t.score
					}), o.a.createElement(Y.c, {
						className: te.a.metaText,
						key: "scoreCreatedSeparator"
					}), o.a.createElement(Be, se({
						key: "Created"
					}, e)), De({
						childrenInfo: r
					}))
				},
				Fe = e => o.a.createElement(r.Fragment, null, o.a.createElement(Y.c, {
					className: te.a.metaText
				}), o.a.createElement(ge, null, n.fbt._("edited {time}", [n.fbt._param("time", Object(u.f)(e))], {
					hk: "1tiB0u"
				}))),
				Ae = e => {
					const t = o.a.createElement(b.a, {
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
					return e.topTippersEnabled ? o.a.createElement(_, {
						contentId: e.comment.postId,
						subredditId: e.comment.subredditId,
						userId: e.comment.authorId
					}, t) : t
				};
			class Be extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCreatedTooltip = () => this.props.onShowTooltip(this.props.createdTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t,
							onCreatedClick: s
						} = e,
						n = ne(e, ["comment", "onCreatedClick"]);
					return o.a.createElement(fe, {
						href: t.permalink,
						id: n.createdTooltipId,
						onClick: s,
						onMouseEnter: this.onShowCreatedTooltip,
						onMouseLeave: n.onHideTooltip,
						rel: "nofollow",
						target: "_blank"
					}, o.a.createElement("span", null, Object(u.f)(t.created)), He(n.createdTooltipId, Object(m.a)(t.created)))
				}
			}
			const De = e => {
				const {
					hasContinueThread: t,
					numChildren: s
				} = e.childrenInfo || {
					hasContinueThread: !1,
					numChildren: 0
				};
				return o.a.createElement(Oe, {
					className: te.a.metaText
				}, t ? n.fbt._({
					"*": "More than {number} children",
					_1: "More than 1 child"
				}, [n.fbt._plural(s, "number")], {
					hk: "13XC7a"
				}) : n.fbt._({
					"*": "{number} children",
					_1: "1 child"
				}, [n.fbt._plural(s, "number")], {
					hk: "dhX9w"
				}))
			};
			class Ue extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCakedayTooltip = () => this.props.onShowTooltip(this.props.cakedayTooltipId), this.onShowAdminTooltip = () => this.props.onShowTooltip(this.props.adminTooltipId), this.onShowAdminEmeritusTooltip = () => this.props.onShowTooltip(this.props.adminEmeritusTooltipId), this.onShowModTooltip = () => this.props.onShowTooltip(this.props.modTooltipId), this.onShowOpTooltip = () => this.props.onShowTooltip(this.props.opTooltipId), this.onShowContractorTooltip = () => this.props.onShowTooltip(this.props.contractorTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t
						} = e,
						s = ne(e, ["comment"]);
					return o.a.createElement(r.Fragment, null, t.isAuthorCakeday && o.a.createElement(le, {
						"aria-label": Se(),
						id: s.cakedayTooltipId,
						onMouseEnter: this.onShowCakedayTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isAuthorCakeday && He(s.cakedayTooltipId, Se()), t.isAdmin && o.a.createElement(oe, {
						desc: Pe(),
						id: s.adminTooltipId,
						onMouseEnter: this.onShowAdminTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isAdmin && He(s.adminTooltipId, Pe()), t.distinguishType === l.A.ALUMNI_ADMIN && o.a.createElement(ce, {
						"aria-label": we(),
						id: s.adminEmeritusTooltipId,
						onMouseEnter: this.onShowAdminEmeritusTooltip,
						onMouseLeave: s.onHideTooltip
					}, "Δ"), t.distinguishType === l.A.ALUMNI_ADMIN && He(s.adminEmeritusTooltipId, we()), t.isMod && o.a.createElement(me, {
						desc: Ie(s.subredditDisplayText),
						id: s.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isMod && He(s.modTooltipId, Ie(s.subredditDisplayText)), t.isOp && o.a.createElement(he, {
						desc: Ne(),
						id: s.opTooltipId,
						onMouseEnter: this.onShowOpTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isOp && He(s.opTooltipId, Ne()), s.renderContractorBadge && o.a.createElement(xe, {
						desc: Te(),
						id: s.contractorTooltipId,
						onMouseEnter: this.onShowContractorTooltip,
						onMouseLeave: s.onHideTooltip
					}), s.renderContractorBadge && He(s.contractorTooltipId, Te()))
				}
			}
			class We extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowApproveTooltip = () => this.props.onShowTooltip(this.props.approveTooltipId), this.onShowRemoveTooltip = () => this.props.onShowTooltip(this.props.removeTooltipId), this.onShowSpamTooltip = () => this.props.onShowTooltip(this.props.spamTooltipId), this.onShowAutomodTooltip = () => this.props.onShowTooltip(this.props.automodTooltipId), this.onShowReportTooltip = () => this.props.onShowTooltip(this.props.reportTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t
						} = e,
						s = ne(e, ["comment"]);
					return o.a.createElement(r.Fragment, null, (t.approvedBy || t.isApproved) && o.a.createElement(ae, {
						desc: Object(M.a)(t),
						id: s.approveTooltipId,
						onMouseEnter: this.onShowApproveTooltip,
						onMouseLeave: s.onHideTooltip
					}), (t.approvedBy || t.isApproved) && He(s.approveTooltipId, Object(M.a)(t)), Object(T.a)(t) && o.a.createElement(pe, {
						desc: Object(M.c)(t),
						id: s.removeTooltipId,
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: s.onHideTooltip
					}), Object(T.a)(t) && He(s.removeTooltipId, Object(M.c)(t)), Object(T.a)(t) && t.isRemoved && !t.modNote && !t.modRemovalReason && o.a.createElement(je, {
						onClick: s.openRemovalReasonModal
					}, n.fbt._("Add a removal reason", null, {
						hk: "L6yrL"
					})), Object(T.a)(t) && !(t.isRemoved && !t.modNote && !t.modRemovalReason) && o.a.createElement(je, {
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: s.onHideTooltip
					}, n.fbt._("Removal reason", null, {
						hk: "20NRw8"
					})), t.isLocked && !s.ignoreLock && o.a.createElement(ie, {
						desc: n.fbt._("Locked", null, {
							hk: "40Ju3g"
						}),
						id: s.lockedTooltipId,
						onMouseEnter: () => {
							s.onShowTooltip(s.lockedTooltipId)
						},
						onMouseLeave: s.onHideTooltip
					}), t.bannedBy && t.isSpam && o.a.createElement(be, {
						desc: Object(M.e)(s.language, t),
						id: s.spamTooltipId,
						onMouseEnter: this.onShowSpamTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.bannedBy && t.isSpam && He(s.spamTooltipId, Object(M.e)(s.language, t)), ("AutoModerator" === t.bannedBy || "AutoModerator" === t.approvedBy) && o.a.createElement(de, {
						className: Object(d.a)({
							[te.a.removed]: !!t.bannedBy
						}),
						desc: M.b,
						id: s.automodTooltipId,
						key: s.automodTooltipId,
						onMouseEnter: this.onShowAutomodTooltip,
						onMouseLeave: s.onHideTooltip
					}), ("AutoModerator" === t.bannedBy || "AutoModerator" === t.approvedBy) && He(s.automodTooltipId, M.b), Object(L.a)(t) && o.a.createElement(ue, {
						desc: Object(M.d)(t.numReports),
						id: s.reportTooltipId,
						onMouseEnter: this.onShowReportTooltip,
						onMouseLeave: s.onHideTooltip
					}), Object(L.a)(t) && He(s.reportTooltipId, Object(M.d)(t.numReports)))
				}
			}
			const Ve = () => o.a.createElement(r.Fragment, null, o.a.createElement(Y.c, {
					className: te.a.metaText
				}), o.a.createElement(ye, null, n.fbt._("Stickied comment", null, {
					hk: "XUSav"
				}))),
				He = (e, t) => o.a.createElement(w.c, {
					tooltipId: e,
					text: t
				})
		},
		"./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/addQueryParams/index.ts"),
				i = s("./src/higherOrderComponents/withClickTracking.tsx"),
				c = s("./src/reddit/helpers/overlay/index.ts"),
				d = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};
			const l = Object(o.b)(null, e => ({
				openLightbox: t => e(Object(c.a)(t))
			}));
			class m extends r.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const e = this.props,
						{
							afterClickTracking: t,
							permalink: s,
							openLightbox: n
						} = e,
						o = d(e, ["afterClickTracking", "permalink", "openLightbox"]),
						i = e => t(() => e.metaKey || e.ctrlKey || 1 === e.button ? window.open(Object(a.a)(s, {
							context: 3
						})) : n(Object(a.a)(s, {
							context: 3
						})))(e);
					return r.a.createElement("div", {
						className: o.className,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3)), 1 === e.button && i(e)
						},
						onClick: e => {
							!this.cancelClick && 0 === e.button && i(e)
						}
					}, o.children)
				}
			}
			t.a = l(Object(i.c)(m))
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
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
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
				f = s("./src/lib/lessComponent.tsx");
			const g = "create-community-button",
				y = f.a.wrapped(m.i, "SecondaryButton", x.a),
				v = f.a.wrapped(d.c, "StyledTooltip", x.a),
				O = Object(i.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(b.ab)(e),
					userIsSuspended: b.M
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
						tooltipId: g
					})),
					onHideTooltip: () => e(Object(c.i)())
				}
			})(Object(l.c)(e => {
				let {
					className: t,
					eventSource: s,
					onShowTooltip: r,
					onHideTooltip: a,
					openCommunityCreation: i,
					sendEvent: c,
					userDoesNotHaveEnoughExpToCreateCommunity: d,
					userIsSuspended: l
				} = e;
				return o.a.createElement(y, {
					className: t,
					disabled: l || d,
					onClick: () => i(c),
					onMouseEnter: r,
					onMouseLeave: a,
					id: g
				}, n.fbt._("Create Community", null, {
					hk: "RLA8A"
				}), d ? o.a.createElement(v, {
					caretOnTop: !0,
					tooltipId: g,
					text: n.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? o.a.createElement(v, {
					caretOnTop: !0,
					tooltipId: g,
					text: n.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/CreateCommunitySidebar/index.m.less": function(e, t, s) {
			e.exports = {
				BannerImg: "_2ddpn_fVcA1SYZzLivK-SD",
				bannerImg: "_2ddpn_fVcA1SYZzLivK-SD",
				ButtonContainer: "_2ymEyPXQM0ccuwfvIOMpnZ",
				buttonContainer: "_2ymEyPXQM0ccuwfvIOMpnZ",
				CommunityText: "_9jODC2-h7cM9Y6Duqs_W4",
				communityText: "_9jODC2-h7cM9Y6Duqs_W4",
				Container: "_3lfTEmyI7x9ib1wz4e8RWP",
				container: "_3lfTEmyI7x9ib1wz4e8RWP",
				SnooImg: "_20axzOalQqYkHj-7Idfqun",
				snooImg: "_20axzOalQqYkHj-7Idfqun"
			}
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
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
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
				f = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				y = s("./src/reddit/components/CrosspostBox/index.m.less"),
				v = s.n(y),
				O = s("./src/lib/lessComponent.tsx");

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const E = O.a.div("Container", v.a),
				j = O.a.div("PostMetaWrapper", v.a),
				_ = O.a.wrapped(u.c, "PostTitle", v.a),
				k = O.a.div("FlatList", v.a),
				P = O.a.div("FlatItem", v.a),
				S = O.a.span("FlatListDotSpacer", v.a),
				w = O.a.wrapped(E, "LinkContainer", v.a),
				I = O.a.div("Content", v.a),
				N = O.a.div("ThumbnailContainer", v.a),
				T = Object(c.c)({
					isCurrentUserProfilePost: f.k,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== x.yb.TOPIC),
					language: g.Q,
					post: f.O,
					shouldOpenPostInNewTab: g.U,
					subreddit: f.bb
				}),
				M = Object(a.b)(T);
			t.a = M(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: n,
					mediaProps: r,
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
						tooltipType: "".concat("CrosspostBox", "--").concat(r.isListing)
					},
					l = t;
				return a && !a.media ? o.a.createElement(w, {
					className: l
				}, o.a.createElement(I, null, o.a.createElement(j, null, o.a.createElement(p.a, d)), L(a), a.source && o.a.createElement(b.a, {
					post: a
				}), F(e)), B(e)) : o.a.createElement(E, {
					className: l
				}, o.a.createElement(j, null, o.a.createElement(p.a, d)), L(a), R(e), F(e))
			});
			const L = e => o.a.createElement(_, {
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
					return o.a.createElement("div", null, o.a.createElement(m.a, C({}, n, {
						className: v.a.mediaContainer
					})))
				},
				F = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return o.a.createElement(k, null, o.a.createElement(P, null, n.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [n.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), o.a.createElement(S, null), o.a.createElement(P, null, A(e)))
				},
				A = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: r
					} = t;
					return o.a.createElement(i.a, {
						"data-click-id": "comments",
						to: Object(d.a)(t.permalink, !0),
						target: s ? "_blank" : void 0
					}, n.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [n.fbt._plural(r, "comment count", Object(l.b)(r))], {
						hk: "xPYWL"
					}))
				},
				B = e => o.a.createElement(N, null, o.a.createElement(h.a, {
					post: e.post
				}))
		},
		"./src/reddit/components/DiscoveryUnit/CarouselBase/index.m.less": function(e, t, s) {
			e.exports = {
				arrow: "_22LJahVHZg-w-Ok4e54Ekf",
				arrowIcon: "_2vWDDpepKDRWqekB9vJEi"
			}
		},
		"./src/reddit/components/DiscoveryUnit/CarouselBase/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			})), s.d(t, "b", (function() {
				return f
			}));
			var n = s("./node_modules/lodash/values.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/fastdom/index.ts"),
				d = s("./src/reddit/constants/colors.ts");
			const l = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
				return "".concat(t, "-du-left-").concat(e)
			};
			var m = e => {
				const {
					seed: t = ""
				} = e, s = l("a", t), n = l("b", t), r = l("c", t), o = l("d", t);
				return a.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "4 0 45 45",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("defs", null, a.a.createElement("circle", {
					id: n,
					cx: "18",
					cy: "18",
					r: "18"
				}), a.a.createElement("filter", {
					id: s,
					x: "-33.3%",
					y: "-25%",
					width: "166.7%",
					height: "166.7%"
				}, a.a.createElement("feOffset", {
					dy: "3",
					in: "SourceAlpha",
					result: "shadowOffsetOuter1"
				}), a.a.createElement("feGaussianBlur", {
					in: "shadowOffsetOuter1",
					result: "shadowBlurOuter1"
				}), a.a.createElement("feColorMatrix", {
					in: "shadowBlurOuter1",
					values: "0 0 0 0 0.101960784 0 0 0 0 0.101960784 0 0 0 0 0.105882353 0 0 0 0.3 0"
				})), a.a.createElement("path", {
					id: r,
					d: "M12 8a.798.798 0 0 1-.566-.234L8 4.33 4.566 7.766a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 8zm0 4.8a.798.798 0 0 1-.566-.234L8 9.13l-3.434 3.435a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 12.8z"
				})), a.a.createElement("g", {
					fill: "none",
					fillRule: "evenodd"
				}, a.a.createElement("g", {
					fillRule: "nonzero",
					transform: "matrix(-1 0 0 1 43 4)"
				}, a.a.createElement("use", {
					fill: d.a.black,
					filter: "url(#".concat(s, ")"),
					xlinkHref: "#".concat(n)
				}), a.a.createElement("use", {
					fill: d.a.white,
					xlinkHref: "#".concat(n)
				})), a.a.createElement("g", {
					transform: "matrix(0 1 1 0 17.174 14.174)"
				}, a.a.createElement("path", {
					d: "M0 16h16V0H0z"
				}), a.a.createElement("mask", {
					id: o,
					fill: d.a.white
				}, a.a.createElement("use", {
					xlinkHref: "#".concat(r)
				})), a.a.createElement("use", {
					fill: d.a.black,
					xlinkHref: "#".concat(r)
				}), a.a.createElement("g", {
					fill: d.a.alienblue,
					mask: "url(#".concat(o, ")")
				}, a.a.createElement("path", {
					d: "M0 0h16v16H0z"
				})))))
			};
			const p = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
				return "".concat(t, "-du-right-").concat(e)
			};
			var u = e => {
					const {
						seed: t = ""
					} = e, s = p("a", t), n = p("b", t), r = p("c", t), o = p("d", t);
					return a.a.createElement("svg", {
						className: e.className,
						onClick: e.onClick,
						viewBox: "4 0 45 45",
						version: "1.1",
						xmlns: "http://www.w3.org/2000/svg"
					}, a.a.createElement("defs", null, a.a.createElement("circle", {
						id: n,
						cx: "18",
						cy: "18",
						r: "18"
					}), a.a.createElement("filter", {
						id: s,
						x: "-33.3%",
						y: "-25%",
						width: "166.7%",
						height: "166.7%"
					}, a.a.createElement("feOffset", {
						dy: "3",
						in: "SourceAlpha",
						result: "shadowOffsetOuter1"
					}), a.a.createElement("feGaussianBlur", {
						in: "shadowOffsetOuter1",
						result: "shadowBlurOuter1"
					}), a.a.createElement("feColorMatrix", {
						in: "shadowBlurOuter1",
						values: "0 0 0 0 0.101960784 0 0 0 0 0.101960784 0 0 0 0 0.105882353 0 0 0 0.3 0"
					})), a.a.createElement("path", {
						id: r,
						d: "M12 8a.798.798 0 0 1-.566-.234L8 4.33 4.566 7.766a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 8zm0 4.8a.798.798 0 0 1-.566-.234L8 9.13l-3.434 3.435a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 12.8z"
					})), a.a.createElement("g", {
						fill: "none",
						fillRule: "evenodd"
					}, a.a.createElement("g", {
						fillRule: "nonzero",
						transform: "translate(7 4)"
					}, a.a.createElement("use", {
						fill: d.a.black,
						filter: "url(#".concat(s, ")"),
						xlinkHref: "#".concat(n)
					}), a.a.createElement("use", {
						fill: d.a.white,
						xlinkHref: "#".concat(n)
					})), a.a.createElement("g", {
						transform: "rotate(90 9.326 23.5)"
					}, a.a.createElement("path", {
						d: "M0 16h16V0H0z"
					}), a.a.createElement("mask", {
						id: o,
						fill: d.a.white
					}, a.a.createElement("use", {
						xlinkHref: "#".concat(r)
					})), a.a.createElement("use", {
						fill: d.a.black,
						xlinkHref: "#".concat(r)
					}), a.a.createElement("g", {
						fill: d.a.alienblue,
						mask: "url(#".concat(o, ")")
					}, a.a.createElement("path", {
						d: "M0 0h16v16H0z"
					})))))
				},
				b = s("./src/reddit/components/DiscoveryUnit/CarouselBase/index.m.less"),
				h = s.n(b);
			const x = e => a.a.createElement("button", {
					className: Object(i.a)(h.a.arrow, e.className),
					onClick: e.onClick
				}, a.a.createElement(m, {
					className: h.a.arrowIcon,
					seed: e.seed
				})),
				f = e => a.a.createElement("button", {
					className: Object(i.a)(h.a.arrow, e.className),
					onClick: e.onClick
				}, a.a.createElement(u, {
					className: h.a.arrowIcon,
					seed: e.seed
				}));
			class g extends a.a.Component {
				constructor(e) {
					super(e), this.state = {
						itemsFitInContainer: !1,
						scrollIndex: 0,
						viewableItems: {},
						visibleItemsCount: null
					}, this.makeVisibilityChangeHandler = e => t => {
						this.setState({
							viewableItems: Object.assign({}, this.state.viewableItems, {
								[e]: t.isIntersecting && t.intersectionRatio >= .99
							})
						})
					}, this.getVisibleItemsCount = () => {
						return r()(this.state.viewableItems).reduce((e, t) => e + (t ? 1 : 0), 0)
					}, this.getMaxScrollIndex = e => null != e && this.props.items ? this.props.items.length - e : null, this.getSpacerCount = e => e + 1, this.getMarginLeft = e => {
						let {
							adjustment: t,
							itemWidth: s,
							scrollIndex: n,
							spacerWidth: r = 0
						} = e;
						return t - n * (s + r) + r
					}, this.getAdjustment = e => {
						let {
							itemWidth: t,
							maxScrollIndex: s,
							scrollIndex: n,
							spacerWidth: r = 0,
							visibleItemsCount: o
						} = e, a = 0;
						if (n === s && o) {
							const e = o * t + this.getSpacerCount(o) * r;
							a = (this.container ? this.container.offsetWidth : e) - e
						} else n > 0 && (a = 0);
						return a
					}, this.setContainerRef = e => {
						this.container = e
					}, this.id = "", this.spacerWidth = 0, this.itemWidth = 0, this.onClickNext = this.onClickNext.bind(this), this.onClickPrev = this.onClickPrev.bind(this)
				}
				componentDidMount() {
					const e = this.getVisibleItemsCount();
					this.setState({
						visibleItemsCount: e
					}), this.calcItemsFitInContainer()
				}
				componentDidUpdate(e, t) {
					this.calcItemsFitInContainer()
				}
				calcItemsFitInContainer() {
					c.a.read(() => {
						this.setState(e => {
							const t = this.doItemsFitInContainer({
								container: this.container,
								items: this.props.items,
								itemWidth: this.itemWidth,
								spacerWidth: this.spacerWidth
							});
							return e.itemsFitInContainer !== t ? {
								itemsFitInContainer: t
							} : null
						})
					})
				}
				doItemsFitInContainer(e) {
					let {
						container: t,
						items: s,
						itemWidth: n,
						spacerWidth: r = 0
					} = e;
					if (!t) return !0;
					const o = s.length * n,
						a = this.getSpacerCount(s.length) * r;
					return t.offsetWidth >= o + a
				}
				onClickNext() {
					const e = this.getVisibleItemsCount(),
						t = this.getMaxScrollIndex(e),
						s = Math.max(1, e),
						n = Math.min(this.state.scrollIndex + s, t);
					this.setState({
						scrollIndex: n,
						visibleItemsCount: e
					})
				}
				onClickPrev() {
					const e = this.getVisibleItemsCount(),
						t = Math.max(1, e),
						s = Math.max(0, this.state.scrollIndex - t);
					this.setState({
						scrollIndex: s,
						visibleItemsCount: e
					})
				}
			}
			t.c = g
		},
		"./src/reddit/components/DiscoveryUnit/Layout/Posts/TopPostsLargePost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "DZ4N46-GxcZN4myRo1Jov",
				metaLine: "_3RsomDBMRm4zJwQoMA4H1I",
				bodyWrapper: "_8QyJR-f-gRDrBnB_U9d9M",
				mediaWrapper: "aAoswTeXSP59D_O0jbLMm",
				textWrapper: "_2QMHsv2ah510M8yVPnDIDo",
				meta: "_3OnBTLhwkjT_qb7jDZaN9k",
				metaWrapper: "_2kgjZeq5YSkBzbG2wBt-_",
				thumbnailWrapper: "_1QpRu40opbkSjXtHCoSpBr",
				thumbnail: "_1DSgZoQLneHjWE3l_dVvDG",
				thumbnailContainer: "_1cYdO4iDTKirKmKc6pjuYh",
				flatlist: "_15Tcsv4uOZy408GvAhSm6S",
				postTitle: "_20l1A0LHN5sLYdsFa4q_mv",
				postTitleCompact: "-si4FJBkXt7YGgVfE6_gR",
				flexSpacer: "oE0WBXnmx0c_cycbOzIeZ",
				innerContainer: "_2-GgqVSOuBRpxRqecJixsh"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/Posts/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_380AW2tV1AjseFZoaW2xp3",
				topPosts: "_3RDCFf4elKrhJHKKZkPPD",
				topPostsLargePostsContainer: "_1iE8_7IcegvYg_Wg3A0jTR",
				largePosts: "_2jBymLZmAms1MelhCFZsUI",
				"m-large": "_2lujqkV5X6gCVwiA3jxvA1",
				mLarge: "_2lujqkV5X6gCVwiA3jxvA1",
				"m-subreddit": "_3UFkxiq8tu1X9rAES7YEk7",
				mSubreddit: "_3UFkxiq8tu1X9rAES7YEk7",
				topPostLargePosts: "_1B27sUe973sxluKyC6_HnP",
				topPost: "_3_Nr3saSmaO8BeqrN2u7Pb",
				largePost: "_21q6EU8IrGnKgnRi9Fcrko",
				topPostLargePost: "_3rjlIRqkC_nm_BoSlEQ8u-",
				smallPosts: "_1XdjckgSGhgpGEGUohL62w",
				smallPost: "_69IUkr5xucpVcbGP5l070"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.m.less": function(e, t, s) {
			e.exports = {
				topPostsLargePostsContainer: "blJHXrhp2aDTr_eU2819a",
				postsWrapper: "_31N1g4ul5_oWaf7McMDm4z",
				arrow: "_3PrQgt3ZKPk7QhsYwrdYga",
				arrowLeft: "_1GoqoM-Z9VRJCHgekfYoZE",
				arrowRight: "SGDu37agzx7_Dwp8seKWa",
				posts: "Fa7qwmMMPp0OdoJcQuaNG",
				largePost: "_2rsZ95X0CQMIjB--1M9rHS",
				slideIn: "_11Gk71fxo8Xiw2sUIcEJd7"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-motion/lib/react-motion.js"),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/DiscoveryUnit/CarouselBase/index.tsx"),
				l = s("./src/reddit/helpers/overlay/index.ts"),
				m = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				p = s("./node_modules/fbt/lib/FbtPublic.js"),
				u = s("./src/lib/isUrl/index.ts"),
				b = s("./src/lib/prettyPrintNumber/index.ts"),
				h = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				x = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				f = s("./src/lib/timeAgo/index.ts"),
				g = s("./src/reddit/constants/posts.ts"),
				y = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				v = s("./src/reddit/layout/row/Inline/index.tsx"),
				O = s("./src/reddit/components/DiscoveryUnit/PostAuthor/index.m.less"),
				C = s.n(O);
			var E = e => {
					const t = g.a.PROFILE,
						s = Object(y.a)(e.author, t);
					return o.a.createElement("div", {
						className: Object(c.a)(C.a.container, e.className)
					}, o.a.createElement(v.a, {
						className: C.a.layout
					}, o.a.createElement("div", {
						className: C.a.textContainer
					}, o.a.createElement("span", {
						className: C.a.description
					}, p.fbt._("posted by", null, {
						hk: "wl0iP"
					})), o.a.createElement(x.a, {
						className: C.a.authorName,
						to: s
					}, Object(y.b)(e.author, t)), o.a.createElement("span", {
						className: C.a.timestamp
					}, Object(f.d)(e.language, e.created / 1e3)))))
				},
				j = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				_ = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				k = s("./src/reddit/components/DiscoveryUnit/PostCommunity/index.m.less"),
				P = s.n(k);
			var S = e => {
					const t = Object(y.a)(e.name, e.type);
					return o.a.createElement("div", {
						className: Object(c.a)(P.a.container, e.className)
					}, o.a.createElement(_.a, {
						className: P.a.layout
					}, o.a.createElement("div", {
						className: P.a.iconContainer
					}, e.iconUrl ? o.a.createElement("img", {
						className: P.a.icon,
						src: e.iconUrl
					}) : o.a.createElement(j.a, {
						className: P.a.planetIcon,
						"data-redditstyle": !0
					})), o.a.createElement("div", {
						className: P.a.textContainer
					}, o.a.createElement(x.a, {
						className: P.a.name,
						to: t
					}, Object(y.b)(e.displayText || e.name, e.type)), o.a.createElement("span", {
						className: P.a.separator
					}, "•"), o.a.createElement("span", {
						className: P.a.timestamp
					}, Object(f.d)(e.language, e.created / 1e3)))))
				},
				w = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				I = s("./src/reddit/components/Media/index.tsx"),
				N = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				T = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				M = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				L = s("./src/reddit/components/PostContainer/index.tsx"),
				R = s("./src/reddit/components/PostTitle/index.tsx"),
				F = s("./src/reddit/connectors/miniCardPost.ts"),
				A = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				B = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				D = s("./src/reddit/models/Media/index.ts"),
				U = s("./src/reddit/models/Subreddit/index.ts"),
				W = s("./src/reddit/models/Widgets/index.ts"),
				V = s("./src/reddit/components/MiniCardPost/index.m.less"),
				H = s.n(V),
				q = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				z = s.n(q),
				K = s("./src/reddit/components/DiscoveryUnit/Layout/Posts/TopPostsLargePost/index.m.less"),
				G = s.n(K);

			function J() {
				return (J = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			class Q extends o.a.Component {
				render() {
					const {
						autoplayPref: e,
						availableWidth: t,
						className: s,
						crosspostRoot: n,
						crosspostSubredditOrProfile: r,
						eventFactory: a,
						flairStyleTemplate: i,
						forceLoadMedia: d,
						hideNSFWPref: l,
						isMiniCard: m = !0,
						language: h,
						onClickPost: x,
						post: f,
						scrollerItemRef: g,
						shouldPause: y,
						showAuthorBlock: v = !1,
						showMetaLine: O = !0,
						showSubscribeBlock: C = !1,
						subredditOrProfile: j
					} = this.props, {
						media: _
					} = n || f, k = !_ && !!f.source && Object(u.a)(f.source.url);
					let P = _ && o.a.createElement(I.a, {
							autoplayPref: e,
							availableWidth: t,
							className: H.a.media,
							forceAspectRatio: D.c,
							imageBoxClassName: H.a.mediaImageBox,
							imageBoxContentImageClassName: H.a.mediaImageBoxContentImage,
							isListing: !0,
							isMiniCard: m,
							isNotCardView: !0,
							post: n || f,
							scrollerItemRef: g,
							shouldPause: y,
							shouldLoad: d,
							showCentered: !1,
							showFull: !1
						}),
						F = !1;
					_ && P && (_.type !== D.n.RTJSON && _.type !== D.n.TEXT ? (P = o.a.createElement("div", {
						className: G.a.mediaWrapper
					}, P), F = !0) : _ && _.content && Object(A.a)(f) && (P = o.a.createElement("div", {
						className: G.a.textWrapper
					}, P)));
					const V = !F && !k;
					let q;
					return j && (q = Object(U.f)(j) ? Object(W.h)(j) : Object(W.i)(j)), o.a.createElement(L.a, {
						className: Object(c.a)(G.a.container, z.a.largeAndMediumActiveStyles, z.a.largeAndMediumPostStyles, H.a.postContainer, Object(B.a)(this.props), s),
						post: f,
						onClick: x,
						eventFactory: a,
						style: Object.assign({}, Object(B.b)(this.props.flairStyleTemplate), Object(B.d)(this.props), this.props.style)
					}, o.a.createElement(M.a, {
						className: H.a.backgroundWrapper,
						flairStyleTemplate: i
					}, o.a.createElement("div", {
						className: Object(c.a)(G.a.innerContainer, H.a.innerContainer)
					}, C && j && o.a.createElement(S, J({
						created: f.created,
						language: h
					}, q)), v && j && o.a.createElement(E, J({
						created: f.created,
						language: h,
						author: f.author
					}, q)), o.a.createElement(R.c, {
						className: V ? G.a.postTitle : G.a.postTitleCompact,
						disableFlair: !0,
						hideSourceLink: !0,
						post: f,
						size: R.b.Large,
						titleColor: i && i.postTitleColor
					}), O && j && o.a.createElement(N.a, {
						className: G.a.metaLine,
						crosspostSubredditOrProfile: r,
						hideNSFWPref: l,
						post: f,
						subredditOrProfile: j
					}), (F || k) && o.a.createElement("div", {
						className: G.a.flexSpacer
					}), k && o.a.createElement("div", {
						className: G.a.mediaWrapper
					}, o.a.createElement(T.a, {
						className: G.a.thumbnailWrapper,
						thumbnailClassName: G.a.thumbnail,
						thumbnailContainerClassName: G.a.thumbnailContainer,
						post: f,
						templatePlaceholderImage: i && i.postPlaceholderImage
					})), P, o.a.createElement("div", {
						className: G.a.metaWrapper
					}, o.a.createElement("span", {
						className: G.a.meta
					}, p.fbt._({
						"*": "{number} points",
						_1: "1 score"
					}, [p.fbt._plural(f.score, "number", Object(b.b)(f.score))], {
						hk: "2ncFte"
					})), o.a.createElement("span", {
						className: G.a.meta
					}, p.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [p.fbt._plural(f.numComments, "number", Object(b.b)(f.numComments))], {
						hk: "1QQoSA"
					}))))), o.a.createElement(w.d, {
						postId: f.id
					}))
				}
			}
			const X = Object(F.a)(Object(h.a)(Q));
			var Y = class extends o.a.Component {
					render() {
						return o.a.createElement(X, this.props)
					}
				},
				Z = s("./node_modules/reselect/es/index.js"),
				$ = s("./src/reddit/components/SubredditIcon/index.tsx"),
				ee = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				te = s("./src/reddit/contexts/PageLayer/index.tsx"),
				se = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				ne = s("./src/reddit/models/Vote/index.ts"),
				re = s("./src/reddit/components/MiniCardPost/Placeholder/index.m.less"),
				oe = s.n(re);

			function ae() {
				return (ae = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var ie = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const ce = Object(te.t)(),
				de = Object(Z.c)({
					isFakeSubreddit: te.x
				}),
				le = Object(i.b)(de),
				me = e => {
					const t = {
						interactive: !1,
						voteState: ne.a.notVoted
					};
					return o.a.createElement("div", {
						className: Object(c.a)(oe.a.emptyVotes, e.className)
					}, o.a.createElement(ee.d, t), o.a.createElement("div", {
						className: Object(c.a)(oe.a.emptyScore, Object(se.b)({
							isLoading: e.isLoading
						}))
					}), o.a.createElement(ee.c, t))
				};
			var pe = ce(le(Object(h.a)(e => {
					var {
						className: t,
						isLoading: s,
						showSubreddit: n
					} = e, r = ie(e, ["className", "isLoading", "showSubreddit"]);
					return o.a.createElement("div", {
						className: Object(c.a)(oe.a.container, z.a.largeAndMediumPostStyles, t)
					}, o.a.createElement("div", {
						className: Object(c.a)(oe.a.thumbnail, Object(se.b)({
							isLoading: s
						}))
					}), o.a.createElement("div", {
						className: oe.a.content
					}, o.a.createElement("div", {
						className: oe.a.titleContainer
					}, o.a.createElement("div", {
						className: Object(c.a)(oe.a.title, Object(se.b)({
							isLoading: s
						}))
					}), o.a.createElement("div", {
						className: Object(c.a)(oe.a.title, Object(se.b)({
							isLoading: s
						}))
					})), n && o.a.createElement(v.a, {
						className: oe.a.subreddit
					}, o.a.createElement($.a, ae({
						className: Object(c.a)(Object(se.b)({
							isLoading: !1
						}))
					}, r)), o.a.createElement("div", {
						className: Object(c.a)(oe.a.subredditName, Object(se.b)({
							isLoading: s
						}))
					})), o.a.createElement(v.a, null, o.a.createElement(me, ae({
						isLoading: s
					}, r)), o.a.createElement("div", {
						className: Object(c.a)(oe.a.comments, Object(se.b)({
							isLoading: s
						}))
					}), o.a.createElement("div", {
						className: Object(c.a)(oe.a.share, Object(se.b)({
							isLoading: s
						}))
					}), o.a.createElement("div", {
						className: Object(c.a)(oe.a.ellipsis, Object(se.b)({
							isLoading: s
						}))
					}))))
				}))),
				ue = s("./src/reddit/components/DiscoveryUnit/Layout/Posts/index.m.less"),
				be = s.n(ue);
			var he = e => o.a.createElement("div", {
					className: Object(c.a)(be.a.container, e.className)
				}, o.a.createElement("div", {
					className: be.a.largePosts
				}, o.a.createElement(pe, {
					className: be.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}), o.a.createElement(pe, {
					className: be.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}), o.a.createElement(pe, {
					className: be.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}))),
				xe = s("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.m.less"),
				fe = s.n(xe),
				ge = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};
			const ye = 326,
				ve = 12,
				Oe = {
					stiffness: 210,
					damping: 30
				},
				Ce = 100,
				Ee = e => {
					var {
						root: t,
						handleVisibilityChange: s,
						renderPost: r
					} = e, a = ge(e, ["root", "handleVisibilityChange", "renderPost"]);
					const i = r ? r(a) : o.a.createElement(Y, a);
					return o.a.createElement(n.a, {
						root: t,
						threshold: .99,
						rootMargin: "0px 0px 0px 0px",
						onChange: s
					}, i)
				},
				je = Object(i.b)(null, (e, t) => {
					let {
						discoveryUnit: s,
						searchDiscoveryUnit: n
					} = t;
					return {
						openOverlay: t => e(Object(l.a)(t.permalink)),
						trackPostClick: (t, s) => e((e, r) => n ? m.v(r(), n, t, s) : null),
						trackPostSubredditClick: t => e((e, r) => s ? m.x(r(), s, t) : n ? m.x(r(), n, t) : null)
					}
				});
			class _e extends d.c {
				constructor(e) {
					super(e), this.state = {
						scrollIndex: 0,
						viewableItems: {},
						visibleItemsCount: null,
						itemsFitInContainer: !1
					}, this.onClickPost = (e, t) => {
						this.props.openOverlay(t), this.props.trackPostClick(t.id, this.props.searchOptions)
					}, this.itemPostClickEventFactory = e => {
						const {
							discoveryUnit: t,
							discoveryUnitSubreddit: s,
							searchDiscoveryUnit: n
						} = this.props;
						return (n ? m.F() : m.u(t, s))(e)
					}, this.renderPost = (e, t) => {
						const {
							isMiniCard: s,
							renderPost: n,
							singleSubredditMode: r
						} = this.props;
						return o.a.createElement(Ee, {
							className: fe.a.largePost,
							eventFactory: this.itemPostClickEventFactory,
							forceLoadMedia: !0,
							isMiniCard: s,
							onClickPost: this.onClickPost,
							showAuthorBlock: !!r,
							showMetaLine: !1,
							showSubscribeBlock: !r,
							handleVisibilityChange: this.makeVisibilityChangeHandler(t),
							renderPost: n,
							root: this.id,
							key: e,
							postId: e
						})
					}, this.renderPosts = e => o.a.createElement("div", {
						className: fe.a.posts,
						style: e
					}, this.props.items.map(this.renderPost)), this.id = "PostsCarousel", this.itemWidth = e.itemWidth
				}
				componentDidMount() {
					super.componentDidMount()
				}
				componentDidUpdate(e, t) {
					super.componentDidUpdate(e, t), this.state !== t && this.trackPostsViewed(this.props)
				}
				componentWillReceiveProps(e) {
					this.props.items !== e.items && this.trackPostsViewed(e)
				}
				trackPostsViewed(e) {
					if (e.isLoading || 0 === e.items.length) return;
					const t = Math.min(this.state.scrollIndex + this.getVisibleItemsCount(), this.props.items.length);
					e.items.slice(this.state.scrollIndex, t).forEach(t => this.props.searchDiscoveryUnit ? e.onPostView(this.props.searchDiscoveryUnit, t, e.searchOptions) : this.props.discoveryUnit ? e.onPostView(this.props.discoveryUnit, t) : null)
				}
				trackArrowClick() {
					const {
						discoveryUnit: e,
						onArrowClick: t,
						searchDiscoveryUnit: s,
						searchOptions: n
					} = this.props, r = s || e;
					r && t && t(r, n)
				}
				onClickNext() {
					super.onClickNext(), this.trackArrowClick(), this.trackPostsViewed(this.props)
				}
				onClickPrev() {
					super.onClickPrev(), this.trackArrowClick(), this.trackPostsViewed(this.props)
				}
				render() {
					const {
						isHidden: e,
						leftArrowClassName: t,
						rightArrowClassName: s,
						seed: n,
						shouldSlideIn: r,
						springConfig: i
					} = this.props;
					if (this.props.isLoading || 0 === this.props.items.length) return o.a.createElement(he, {
						shouldUseSmallCardLayout: !1,
						showSubreddit: this.props.showSubreddit
					});
					const {
						itemWidth: l = ye
					} = this.props, {
						scrollIndex: m,
						visibleItemsCount: p
					} = this.state, u = this.getMaxScrollIndex(p), b = this.getAdjustment({
						itemWidth: l,
						maxScrollIndex: u,
						scrollIndex: m,
						spacerWidth: ve,
						visibleItemsCount: p
					}), h = e ? Ce : this.getMarginLeft({
						adjustment: b,
						itemWidth: l,
						scrollIndex: m,
						spacerWidth: ve
					});
					return o.a.createElement("div", {
						className: Object(c.a)(fe.a.postsWrapper, this.props.className),
						id: this.id,
						ref: this.setContainerRef
					}, o.a.createElement(a.Motion, {
						defaultStyle: {
							marginLeft: e || r ? Ce : 0
						},
						style: {
							marginLeft: Object(a.spring)(h, i || Oe)
						}
					}, this.renderPosts), 0 !== m && o.a.createElement(d.a, {
						className: Object(c.a)(fe.a.arrowLeft, t),
						onClick: this.onClickPrev,
						seed: n
					}), !this.state.itemsFitInContainer && (null == u || m < u) && o.a.createElement(d.b, {
						className: Object(c.a)(fe.a.arrowRight, r && !e && fe.a.slideIn, s),
						onClick: this.onClickNext,
						seed: n
					}))
				}
			}
			t.a = je(_e)
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3lILa1kmfAauhn7UzHzjLJ",
				heroContainer: "_2xvhS-vDti9NRsRHMeqFmX",
				smallContainer: "_11h2c3EwgJFkGto36dozz7",
				oldContainer: "_24S-GP9dX3BODxJwehVvRx",
				header: "_3UiOKr6dA-zB_4O4l14Icx",
				bodyHidePadding: "M4vA4bj3WWpggduxPTpBA",
				body: "_1l2RfnlEvwmRPfDwe46NRR"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/DiscoveryUnit/Layout/index.m.less"),
				i = s.n(a);
			class c extends r.a.Component {
				render() {
					return r.a.createElement("div", {
						className: Object(o.a)(i.a.heroContainer, this.props.className)
					}, r.a.createElement("div", {
						className: Object(o.a)(i.a.header, this.props.headerClassName)
					}, this.props.header), r.a.createElement("div", {
						className: Object(o.a)(this.props.hidePadding ? i.a.bodyHidePadding : i.a.body, this.props.bodyClassName)
					}, this.props.children))
				}
			}
			t.a = c
		},
		"./src/reddit/components/DiscoveryUnit/PostAuthor/index.m.less": function(e, t, s) {
			e.exports = {
				layout: "_2REdLXF0mpSj8m3oeNFnQI",
				textContainer: "_25evCORf3YPgobOP7A0KBH",
				timestamp: "_12ZMpGOwwzQ5LQDmj2sycd",
				authorName: "_2cI137mSn1p19S7GzCn4aj",
				description: "_3WMX64jyXL-FNQ0kNYl267"
			}
		},
		"./src/reddit/components/DiscoveryUnit/PostCommunity/index.m.less": function(e, t, s) {
			e.exports = {
				layout: "_3w4KSJJGE7TS9xZVlkChNX",
				iconContainer: "_8eVKEiEgNTHopUF8DqZhu",
				separator: "_2dPygXwKlm02lGuxfWM6hJ",
				subscribeIcon: "_3C-lBXRQY9_CCGVZfQJODL",
				subscribeButton: "_26ierA6Rodr6VMGHkKwTPE",
				textContainer: "ZseEDtQar85FcCdC4sPE7",
				timestamp: "_3AdY0o-9CnsxnxO_VDj8Zh",
				icon: "_3YX9w39yU25-vbz-5gk236",
				planetIcon: "f6zRrQi4zqlZ4aoPrzGIN",
				name: "lyBM6dpYVMHQASC9SYGiO",
				subscribers: "uPyUGlwdDzPsq3i6O_w_G",
				right: "_9gZLJghZHrkIQlPvwZYDE",
				visitCommunity: "_1BAg1jhNwLExU7vX1TAvxR",
				description: "_3PWARIYmlsbZulr9sGQAVC",
				descriptionLine: "_2-CpYCxMGuxCYjr8tTgDTR"
			}
		},
		"./src/reddit/components/DiscoveryUnit/PostsDiscoveryUnit/index.m.less": function(e, t, s) {
			e.exports = {
				layout: "_9NiPD_Y6ULK2kfnj6HAWU",
				widgetHeader: "_399v9gOxlS3W_H9wZmXoNb"
			}
		},
		"./src/reddit/components/DiscoveryUnit/SearchCommunity/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1COz1Tx5o15cdern21VVSz",
				banner: "_2QcNoBY8XDHeNxLPPWosos",
				count: "_3dhl5ru8XWXWiHceQZgvmX",
				description: "_2NDrYKicDgvwWzXCzmbe3B",
				searchCommunity: "_2avCQIRO_XhtwE35l4pHKk",
				subscribeButton: "_3rBXfFCJtMOpkX5d1qOs3t",
				subscribeButtonWrapper: "qvXmbzEDFiJbX3a20kAq2",
				titleWrapper: "_2As61Nvoof8WaOWg8gK3hL",
				userCounts: "_11nEOgdNBB8PVfb7gfCXMS"
			}
		},
		"./src/reddit/components/DiscoveryUnit/SubredditsDiscoveryUnit/SearchCommunities/index.m.less": function(e, t, s) {
			e.exports = {
				communitiesWrapper: "ASRebb1StRvOIky_q-Mo3",
				community: "_1tyb0MHpubC9eZwyNDYbS",
				more: "_2KPjJc9CYMGLqb1xtu4BRB",
				arrow: "R7D7NBsG_dBVhgcyLjeRr",
				arrowLeft: "_2XUWhMpaHEcva44sK2SHlK",
				arrowRight: "_1VaaTlcbtbOY3vMVVUs95z",
				searchCommunityPlaceholder: "_1TqF5iTUMrGQD9IW-Geul6"
			}
		},
		"./src/reddit/components/DiscoveryUnit/SubredditsDiscoveryUnit/index.m.less": function(e, t, s) {
			e.exports = {
				container: "MDNEpwVbINN2HKkEgewE",
				title: "_28leyXRU4PE0vSyWQBBfCO",
				categoryColor: "_3IpRhkSUKq2uGRGPp6qbrS",
				categoryIcon: "_3pQECr4zYB0SAUZkRjo6YZ",
				categoryIconImage: "_1SQZ_ROOFGoOb-mG8rau8h",
				categoryName: "_1JAksQIWTP0gR9_SMTJ9zL",
				categoryNameLink: "ZYsipABw5xewyrDRkYWOH",
				titlePlaceholder: "_2XTuSC4OKqz0VJ6Tjr3-KI",
				categoryIconPlaceholder: "_2Ycj9YQX1II68m3spPXScd",
				categoryNamePlaceholder: "_2k0YcuIbGygzb-DrLnF5H6",
				subTitle: "X17uzKWGZ45lx2ERTqFPA",
				viewCategoryLink: "_3kOnUMhkqJziBPMilQ9yPH",
				layout: "_31dK3_ftR_ZBlLq-y0ygJV",
				widgetHeader: "SrCd6nizt-45KR76UdCv3"
			}
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
				r = s.n(n),
				o = s("./src/config.ts");
			const a = new Set(["t2_ktrtg"]),
				i = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
						t = arguments.length > 1 ? arguments[1] : void 0;
					return "".concat(o.a.assetPath, "/img/badges/topTippers/").concat(t, "/rank-").concat(e, ".png")
				};
			t.a = e => r.a.createElement("img", {
				className: e.className,
				src: i(e.rank, e.creatorId && a.has(e.creatorId) ? e.creatorId : e.subredditId)
			})
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
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
				return r.a.createElement("div", {
					className: Object(o.a)(u.a.container, t, {
						[u.a.isCompact]: !!s
					})
				}, r.a.createElement(b, {
					className: u.a.eventMetaWrapper
				}, r.a.createElement(c.a, {
					language: n,
					post: i
				}), !h && x && r.a.createElement(d.a, {
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
				r = s.n(n),
				o = s("./src/lib/eventTools/index.ts"),
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
				f = b.a.span("PostEventNowText", u.a),
				g = b.a.span("Container", u.a),
				y = b.a.wrapped(l.a, "CalendarIcon", u.a),
				v = b.a.wrapped(m.a, "LiveIcon", u.a),
				O = b.a.div("LoadingState", u.a);
			class C extends n.Component {
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
					} = n, u = Object(o.e)(p, l);
					let b, C;
					if (this.state.mounted || u === o.a.Live) b = function(e, t, s, n) {
						const r = Object(o.e)(e, t),
							d = new Date(e * i.Cb);
						let l;
						if (r === o.a.Live || n) return Object(a.a)(s, "posts.event.inProgress");
						r === o.a.Future ? l = Object(o.d)(e) ? Object(a.a)(s, "posts.event.today") : Object(o.b)(e) >= 5 ? c(d, s) : function(e, t) {
							return e.toLocaleDateString(t, {
								weekday: "long"
							})
						}(d, s) : r === o.a.Past && (l = Object(o.d)(e) ? Object(a.a)(s, "posts.event.today") : c(d, s));
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
						b = r.a.createElement(O, {
							className: e
						})
					}
					if (m) C = r.a.createElement(f, null, r.a.createElement(v, null), b);
					else if (u === o.a.Future) C = r.a.createElement(h, null, r.a.createElement(y, null), b);
					else {
						if (u !== o.a.Past) return null;
						C = r.a.createElement(x, null, r.a.createElement(y, null), b)
					}
					return r.a.createElement(g, {
						className: e
					}, C)
				}
			}
			t.a = C
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
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
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
				f = s("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less"),
				g = s.n(f);
			var y = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
					className: "".concat(Object(x.b)("expandoMediaLightbox"), " ").concat(e.className),
					onClick: e.onClick
				}), "LightboxIcon", g.a),
				v = s("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"),
				O = s("./src/reddit/icons/fonts/Gif/index.tsx"),
				C = s("./src/reddit/icons/fonts/Link/index.tsx"),
				E = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				j = s("./src/reddit/icons/fonts/Photos/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Text/index.tsx"),
				k = s("./src/reddit/icons/svgs/Poll/index.tsx"),
				P = s("./src/reddit/models/Media/index.ts"),
				S = s("./src/reddit/components/ExpandoButton/index.m.less"),
				w = s.n(S);
			const I = Object(a.b)(null, (e, t) => ({
					toggle: () => e(Object(l.z)({
						postId: t.post.id
					}))
				})),
				N = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 ? arguments[2] : void 0;
					const n = Object(c.a)(w.a.icon, w.a.hideOnHover);
					if (t) return o.a.createElement(u.a, {
						className: n
					});
					if (s.pollData) return o.a.createElement(k.a, {
						className: n
					});
					switch (e) {
						case P.n.GIFVIDEO:
							return o.a.createElement(O.a, {
								className: n
							});
						case P.n.IMAGE:
							return o.a.createElement(j.a, {
								className: n
							});
						case P.n.TEXT:
						case P.n.RTJSON:
							return o.a.createElement(_.a, {
								className: n
							});
						case P.n.VIDEO:
							return o.a.createElement(v.a, {
								className: n
							});
						case P.n.EMBED:
						default:
							return o.a.createElement(C.a, {
								className: n
							})
					}
				};
			t.a = I(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: r,
					isExpanded: a,
					post: l,
					toggle: u,
					useMediaIcons: x
				} = e, f = s || l, g = r && !!s;
				return f.media && !(("rtjson" === f.media.type || "text" === f.media.type) && !Object(p.a)(f)) || !!l.pollData ? o.a.createElement("button", {
					"aria-expanded": a,
					"aria-haspopup": !0,
					"aria-label": n.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(c.a)(t, w.a.outer),
					"data-click-id": a ? "expando_close" : "expando_open",
					onClick: u
				}, a ? o.a.createElement(b.a, {
					className: w.a.icon
				}) : x ? o.a.createElement(o.a.Fragment, null, N(f.media && f.media.type, g, l), o.a.createElement(h.a, {
					className: Object(c.a)(w.a.icon, w.a.showOnHover)
				})) : o.a.createElement(h.a, {
					className: w.a.icon
				})) : f.source && f.source.url ? o.a.createElement(m.a, {
					"aria-label": n.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(c.a)(t, w.a.outer),
					"data-click-id": "expando_open",
					href: f.source.url,
					isSponsored: l.isSponsored,
					postId: l.id,
					source: l.source,
					target: "_blank"
				}, o.a.createElement(E.a, {
					className: Object(c.a)(w.a.icon, w.a.outboundLinkIcon)
				})) : o.a.createElement(i.a, {
					"aria-label": n.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(c.a)(t, w.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(f.permalink),
					rel: "nofollow"
				}, o.a.createElement(y, {
					className: w.a.icon
				}))
			})
		},
		"./src/reddit/components/GildModal/Loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				r = s("./src/lib/loadWithRetries/index.ts");
			const o = Object(n.a)({
				getComponent: () => Object(r.a)(() => Promise.all([s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~9f4422c2"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~be557eac"), s.e("FramedGild~GildModal"), s.e("GildModal")]).then(s.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			t.a = o
		},
		"./src/reddit/components/IdCard/Placeholder.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/IdCard/placeholder.m.less"),
				i = s.n(a);
			t.a = r.a.memo(e => r.a.createElement("div", {
				className: Object(o.a)(i.a.container)
			}, r.a.createElement("div", {
				className: Object(o.a)(i.a.shimmer, i.a.banner)
			}), r.a.createElement("div", {
				className: i.a.title
			}, r.a.createElement("div", {
				className: Object(o.a)(i.a.shimmer, i.a.icon)
			}), r.a.createElement("div", {
				className: Object(o.a)(i.a.shimmer, i.a.name)
			})), r.a.createElement("div", {
				className: i.a.counts
			}, r.a.createElement("div", {
				className: i.a.side
			}, r.a.createElement("div", {
				className: Object(o.a)(i.a.shimmer, i.a.count)
			}), r.a.createElement("div", {
				className: Object(o.a)(i.a.shimmer, i.a.text)
			})), r.a.createElement("div", {
				className: i.a.side
			}, r.a.createElement("div", {
				className: Object(o.a)(i.a.shimmer, i.a.count)
			}), r.a.createElement("div", {
				className: Object(o.a)(i.a.shimmer, i.a.text)
			}))), r.a.createElement("div", {
				className: Object(o.a)(i.a.shimmer, i.a.desc, i.a.one)
			}), r.a.createElement("div", {
				className: Object(o.a)(i.a.shimmer, i.a.desc, i.a.two)
			}), r.a.createElement("div", {
				className: Object(o.a)(i.a.shimmer, i.a.desc, i.a.three)
			}), r.a.createElement("div", {
				className: Object(o.a)(i.a.shimmer, i.a.desc, i.a.four)
			}), r.a.createElement("div", {
				className: Object(o.a)(i.a.shimmer, i.a.subscribe)
			})))
		},
		"./src/reddit/components/IdCard/Title.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/SubredditIcon/index.tsx"),
				c = s("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				d = s("./src/reddit/components/IdCard/index.m.less"),
				l = s.n(d);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function u(e) {
				const {
					canEditIcon: t,
					isTargetBlank: s,
					largeSubredditIcon: n,
					linkUrl: d,
					subredditIcon: u,
					titleText: b,
					primaryColor: h,
					subreddit: x,
					onOpenFilePicker: f
				} = e, g = u.url ? p._("Update icon", null, {
					hk: "GXdPy"
				}) : p._("Add icon", null, {
					hk: "31odkm"
				});
				return r.a.createElement("div", {
					className: Object(a.a)(l.a.Title, e.className)
				}, t && x ? r.a.createElement(c.a, {
					className: n ? l.a.largeSubredditIcon : l.a.subredditIcon,
					key: u.url,
					iconUrl: u.url,
					primaryColor: h,
					subreddit: x,
					inTopBar: !1
				}) : r.a.createElement(i.b, {
					altText: u.altText,
					className: n ? l.a.largeSubredditIcon : l.a.subredditIcon,
					key: u.url,
					iconUrl: u.url,
					primaryColor: h
				}), r.a.createElement("div", {
					className: l.a.titleTextContainer
				}, d ? r.a.createElement(o.a, m({
					className: l.a.TitleLink,
					key: d,
					to: d,
					onClick: e => e.stopPropagation()
				}, s ? {
					target: "_blank"
				} : {}), r.a.createElement("span", {
					className: l.a.TitleText,
					title: b
				}, b)) : r.a.createElement("span", {
					className: l.a.TitleText,
					key: b
				}, b), t && x && f && r.a.createElement("div", {
					className: l.a.editIconText,
					onClick: f
				}, g)))
			}
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "IdCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("IdCard~SubredditWiki"), s.e("IdCard")]).then(s.bind(null, "./src/reddit/components/IdCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/IdCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/IdCard/index.m.less": function(e, t, s) {
			e.exports = {
				categoryContainer: "_2cn386lOe1A_DTmBUA-qSM",
				icon: "_2XJvPvYIEYtcS4ORsDXwa3",
				subredditIcon: "_2Vkdik1Q8k0lBEhhA_lRKE",
				largeSubredditIcon: "eGjjbHtkgFc-SYka3LM3M",
				metaTextContainer: "j9k2MUR13FjoBBeLo1C1m",
				metaText: "_3Evl5aOozId3QVjs7iry2c",
				memberIcon: "_1qhTBEK-QmJbvMP4ckhAbh",
				headerButtonsContainer: "_3nzVPnRRnrls4DOXO_I0fn",
				overflowButton: "_1LAmcxBaaqShJsi8RNT-Vp",
				communityCoinCount: "_2bWoGvMqVhMWwhp4Pgt4LP",
				coinIcon: "tWeTbHFf02PguTEonwJD0",
				coinsTooltipContent: "_2AbGMsrZJPHrLm9e-oyW1E",
				helpIcon: "_1cB7-TWJtfCxXAqqeyVb2q",
				Banner: "hpxKmfWP2ZiwdKaWpefMn",
				banner: "hpxKmfWP2ZiwdKaWpefMn",
				Title: "_20Kb6TX_CdnePoT8iEsls6",
				title: "_20Kb6TX_CdnePoT8iEsls6",
				TitleShifted: "t9oUK2WY0d28lhLAh3N5q",
				titleShifted: "t9oUK2WY0d28lhLAh3N5q",
				AdorableSnoo: "_2KqgQ5WzoQRJqjjoznu22o",
				adorableSnoo: "_2KqgQ5WzoQRJqjjoznu22o",
				TitleLink: "_2D7eYuDY6cYGtybECmsxvE",
				titleLink: "_2D7eYuDY6cYGtybECmsxvE",
				TitleText: "_19bCWnxeTjqzBElWZfIlJb",
				titleText: "_19bCWnxeTjqzBElWZfIlJb",
				TitleTextShiftedContainer: "_2TC7AdkcuxFIFKRO_VWis8",
				titleTextShiftedContainer: "_2TC7AdkcuxFIFKRO_VWis8",
				TitleTextWithSecondaryTitle: "_35WVFxUni5zeFkPk7O4iiB",
				titleTextWithSecondaryTitle: "_35WVFxUni5zeFkPk7O4iiB",
				UserCounts: "_7kAMkb9SAVF8xJ3L53gcW",
				userCounts: "_7kAMkb9SAVF8xJ3L53gcW",
				Online: "_3_HlHJ56dAfStT19Jgl1bF",
				online: "_3_HlHJ56dAfStT19Jgl1bF",
				SubscriberCount: "nEdqRRzLEN43xauwtgTmj",
				subscriberCount: "nEdqRRzLEN43xauwtgTmj",
				CakeDay: "_2QZ7T4uAFMs_N83BZcN-Em",
				cakeDay: "_2QZ7T4uAFMs_N83BZcN-Em",
				cakeIcon: "_19sQCxYe2NApNbYNX5P5-L",
				Count: "_3XFx6CfPlg-4Usgxm0gK8R",
				count: "_3XFx6CfPlg-4Usgxm0gK8R",
				CountMetaText: "_34InTQ51PAhJivuc_InKjJ",
				countMetaText: "_34InTQ51PAhJivuc_InKjJ",
				UserType: "_29_mu5qI8E1fq6Uq5koje8",
				userType: "_29_mu5qI8E1fq6Uq5koje8",
				WidgetHeader: "_2BY2-wxSbNFYqAy98jWyTC",
				widgetHeader: "_2BY2-wxSbNFYqAy98jWyTC",
				Description: "_3sGbDVmLJd_8OV8Kfl7dVv",
				description: "_3sGbDVmLJd_8OV8Kfl7dVv",
				Buttons: "_1qiHDKK74j6hUNxM0p9ZIp",
				buttons: "_1qiHDKK74j6hUNxM0p9ZIp",
				SubscribeButton: "_1eMniuqQCoYf3kOpyx83Jj",
				subscribeButton: "_1eMniuqQCoYf3kOpyx83Jj",
				CreateCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
				createCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
				CreatePostButton: "_326PJFFRv8chYfOlaEYmGt",
				createPostButton: "_326PJFFRv8chYfOlaEYmGt",
				VisitCommunityButton: "_1cDoUuVvel5B1n5wa3K507",
				visitCommunityButton: "_1cDoUuVvel5B1n5wa3K507",
				ModSettings: "_2_w8DCFR-DCxgxlP1SGNq5",
				modSettings: "_2_w8DCFR-DCxgxlP1SGNq5",
				ModToolsLink: "_1aS-wQ7rpbcxKT0d5kjrbh",
				modToolsLink: "_1aS-wQ7rpbcxKT0d5kjrbh",
				CategoryContainer: "_2cn386lOe1A_DTmBUA-qSM",
				titleTextContainer: "_2Zdkj7cQEO3zSGHGK2XnZv",
				editIconText: "wzFxUZxKK8HkWiEhs0tyE",
				iconFilePicker: "_3R24jLERJTaoRbM_vYd9v0",
				HorizontalLine: "_38lwnrIpIyqxDfAF1iwhcV",
				horizontalLine: "_38lwnrIpIyqxDfAF1iwhcV",
				subredditTitle: "yobE-ux_T1smVDcFMMKFv",
				CommunityTypeContainer: "_2DVpJZAGplELzFy4mB0epQ",
				communityTypeContainer: "_2DVpJZAGplELzFy4mB0epQ",
				communityType: "x1f6lYW8eQcUFu0VIPZzb",
				communityTypeIcon: "LTiNLdCS1ZPRx9wBlY2rD",
				communityTypeText: "_18e78ihYD3tNypPhtYISq3"
			}
		},
		"./src/reddit/components/IdCard/placeholder.m.less": function(e, t, s) {
			e.exports = {
				banner: "c_dVyWK3BXRxSN3ULLJ_t",
				title: "_1OQL3FCA9BfgI57ghHHgV3",
				icon: "_33jgwegeMTJ-FJaaHMeOjV",
				name: "_1wQQNkVR4qNpQCzA19X4B6",
				counts: "_39IvqNe6cqNVXcMFxFWFxx",
				side: "_29TSdL_ZMpyzfQ_bfdcBSc",
				count: "JEV9fXVlt_7DgH-zLepBH",
				text: "_3YCOmnWpGeRBW_Psd5WMPR",
				desc: "_2iO5zt81CSiYhWRF9WylyN",
				one: "_2E9u5XvlGwlpnzki78vasG",
				two: "fDElwzn43eJToKzSCkejE",
				three: "_2kNB7LAYYqYdyS85f8pqfi",
				four: "_1XmngqAPKZO_1lDBwcQrR7",
				subscribe: "_3XbVvl-zJDbcDeEdSgxV4_",
				shimmer: "_2hgXdc8jVQaXYAXvnqEyED",
				gradientAnimation: "_3XkHjK4wMgxtjzC1TvoXrb",
				container: "_1KWSZXqSM_BLhBzkPyJFGR"
			}
		},
		"./src/reddit/components/MiniCardPost/MetaLine/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_35Bx3s8VlFspHwPlg1MaHt",
				subredditNameLink: "_20yDd2SHTuiJkQnTV4zehJ",
				subredditIcon: "_32Ni_aGBoPzRxNSy5eC_ck",
				CrosspostIcon: "y4hzYjyQqdKpwuDyNnLeW",
				crosspostIcon: "y4hzYjyQqdKpwuDyNnLeW"
			}
		},
		"./src/reddit/components/MiniCardPost/MetaLine/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				c = s("./src/reddit/components/SubredditIcon/index.tsx"),
				d = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				l = s("./src/reddit/helpers/name/index.ts"),
				m = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				p = s("./src/reddit/components/MiniCardPost/MetaLine/index.m.less"),
				u = s.n(p);
			const b = s("./src/lib/lessComponent.tsx").a.wrapped(m.a, "CrosspostIcon", u.a);
			t.a = e => {
				const {
					className: t,
					crosspostSubredditOrProfile: s,
					hideNSFWPref: r,
					post: m,
					subredditOrProfile: p
				} = e;
				return o.a.createElement("div", {
					className: Object(a.a)(u.a.container, t)
				}, o.a.createElement(d.a, {
					className: u.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: p.url
				}, o.a.createElement(c.b, {
					className: u.a.subredditIcon,
					shouldHideNsfwIcon: r,
					subredditOrProfile: p
				}), o.a.createElement("span", null, p.displayText)), ((e, t) => {
					if (t) return o.a.createElement("div", {
						role: "img",
						"aria-label": n.fbt._("Crossposted by{author}from{community}", [n.fbt._param("author", Object(l.c)(e)), n.fbt._param("community", t.displayText)], {
							hk: "2OZoR0"
						})
					}, o.a.createElement(b, null))
				})(m.author, s), p && p.isQuarantined && o.a.createElement(i.a, null))
			}
		},
		"./src/reddit/components/MiniCardPost/Placeholder/index.m.less": function(e, t, s) {
			e.exports = {
				container: "qxO-jkRl1-0EUFMSW12Wx",
				thumbnail: "_10app6y4qukOnb1vd3WjaL",
				content: "Dmp1nT-wBa1YnTs1m5Qh-",
				titleContainer: "_3zDhT2pkq9c_2I1Wc0TC7W",
				title: "_1baTc1hWul6JGRus85W_n9",
				subreddit: "_1QAmOEgKAW-xepM1iAQ1vt",
				subredditIcon: "_2kjKnQFVUV8rujMRQ0FJcM",
				subredditName: "_1gWkHloK0RuxI3PqEBqAlk",
				comments: "_3Se1TreUiuh_QYZKmggj-E",
				share: "_1auh4Ct-kA4za4GqRMTChm",
				ellipsis: "_3KZqW8v85dlRDNmHXcrU5X",
				emptyScore: "_1vYoQQMevPpZ7Szpl9imM",
				emptyVotes: "zNcTz0MkZAJvitPlo_eI7"
			}
		},
		"./src/reddit/components/MiniCardPost/Thumbnail/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1HoOlmppFDBC4s5XWY-Qcd",
				thumbnail: "_1XZerRCUnHmbtEN1gqPwnw",
				thumbnailContainer: "_3fS9xUAmm4zWkzfM1ce7Jk",
				thumbnailLinkIcon: "_2JCMpuchwaEmL9S0QsJ9Ok",
				thumbnailLinkText: "_2vJWD7kgxbAQRGL328NxHg",
				thumbnailOutboundLinkIcon: "_4GTpE-l9TNXVeix3ZOE-_"
			}
		},
		"./src/reddit/components/MiniCardPost/Thumbnail/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Thumbnail/index.tsx"),
				i = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				c = s.n(i);
			t.a = e => {
				const {
					source: t
				} = e.post;
				return r.a.createElement("div", {
					className: Object(o.a)(c.a.container, e.className)
				}, r.a.createElement(a.a, {
					className: Object(o.a)(c.a.thumbnail, e.thumbnailClassName),
					containerClassName: Object(o.a)(c.a.thumbnailContainer, e.thumbnailContainerClassName),
					linkIconClassName: Object(o.a)(c.a.thumbnailLinkIcon, e.thumbnailLinkIconClassName),
					linkTextClassName: c.a.thumbnailLinkText,
					outboundLinkIconClassName: c.a.thumbnailOutboundLinkIcon,
					post: e.post,
					showContentType: e.showPlaceholderContentType,
					templatePlaceholderImage: e.templatePlaceholderImage,
					text: t ? t.url : "",
					usePreview: e.usePreview
				}))
			}
		},
		"./src/reddit/components/MiniCardPost/index.m.less": function(e, t, s) {
			e.exports = {
				flexSpacer: "_3FMwep96W9D-wkC9u2Pc0L",
				backgroundWrapper: "_2yVioz8mzc0YBV2JyNXzRj",
				innerContainer: "_3mrITcnODXcvMf9oonBXeD",
				metaLine: "_20xUo-97VDWkydk8rn74dR",
				media: "_1qlC_L_v_Aher9NBsvBIMR",
				mediaWrapper: "_1UmG626eNsebZt_eyKdDL4",
				postTitleCompact: "_3wSK3_gZiuaUZtqPKu9z3M",
				mediaImageBox: "Xqhz61TRPUo_ek11O2hcV",
				mediaImageBoxContentImage: "_2t6Z9GgOnrWn2b5Ndv_T5K",
				postContainer: "_3Ud8ZDEFc0kXFg6R9KhDPS"
			}
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
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/ModModeReports/index.m.less"),
				c = s.n(i);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = a.a.div("Text", c.a), m = a.a.div("Placeholder", c.a), p = () => o.a.createElement(m, null, o.a.createElement(l, null, d._("Loading reports…", null, {
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
				fallback: o.a.createElement(p, null),
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
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
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
				} = e, [x, f] = Object(r.useState)(!0), g = Object(b.b)(s.id, h), y = Object(a.c)(), v = Object(u.a)(), O = Object(b.a)(s, h), C = (e, n) => v(Object(p.a)(t, s.id, e, n));
				Object(r.useEffect)(() => {
					O && C("modal", "show")
				}, [O]);
				if (!O || !x) return null;
				const E = n.fbt._("Help r/{subredditName} mods", [n.fbt._param("subredditName", t)], {
					hk: "1rusN4"
				});
				return o.a.createElement(l.a, {
					id: g,
					title: E,
					onClose: () => {
						f(!1), C("close", "click"), y(Object(c.I)()), y(Object(c.T)({
							[s.id]: {
								moderationPrompt: void 0
							}
						}))
					},
					onClickOutside: () => {
						y(Object(c.I)())
					}
				}, o.a.createElement("p", null, n.fbt._("Report this post if it's breaking {=Reddit} or {=community} rules.", [n.fbt._param("=Reddit", o.a.createElement("a", {
					href: "https://www.redditinc.com/policies/content-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, n.fbt._("Reddit", null, {
					hk: "4g8g4O"
				}))), n.fbt._param("=community", o.a.createElement(i.a, {
					to: "/r/".concat(t, "/about/rules"),
					target: "_blank"
				}, n.fbt._("community", null, {
					hk: "1cy8jU"
				})))], {
					hk: "sfngx"
				})), o.a.createElement(m.a, {
					onClick: () => (f(!1), C("report", "click"), void y(Object(d.j)(s.id)))
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
			var n, r = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
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
				} = e, [f, g] = Object(o.useState)(n.Survey), y = Object(h.b)(s.id, x), v = Object(i.c)(), O = Object(b.a)(), C = Object(h.a)(s, x), E = (e, n) => O(Object(u.b)(t, s.id, e, n));
				Object(o.useEffect)(() => {
					C && E("modal", "show")
				}, [C]);
				const j = e => {
					g(n.Closed), E("site" === e ? "breaks_reddit_rules" : "breaks_community_rules", "click"), v(Object(l.j)(s.id, void 0, void 0, e))
				};
				if (!C) return null;
				let _ = null;
				const k = {
					id: y,
					title: r.fbt._("Why did you downvote this post?", null, {
						hk: "2tTiIx"
					}),
					onClose: () => {
						g(n.Closed), E("close", "click"), v(Object(d.I)())
					},
					onClickOutside: () => {
						v(Object(d.I)())
					}
				};
				switch (f) {
					case n.Survey:
						_ = a.a.createElement(m.a, k, a.a.createElement("p", null, r.fbt._("Your answer helps r/ {subredditName} mods improve this community.", [r.fbt._param("subredditName", t)], {
							hk: "DNEel"
						})), a.a.createElement(p.a, {
							onClick: () => {
								g(n.OffTopic), E("off_topic", "click")
							}
						}, r.fbt._("It's off topic", null, {
							hk: "4iG26l"
						})), a.a.createElement(p.a, {
							onClick: () => {
								g(n.DontLike), E("dont_like", "click")
							}
						}, r.fbt._("I don't like it", null, {
							hk: "1jB1Mh"
						})), a.a.createElement(p.a, {
							onClick: () => {
								g(n.BreaksRules), E("breaks_rules", "click")
							}
						}, r.fbt._("It breaks the rules", null, {
							hk: "1yQBhi"
						})));
						break;
					case n.OffTopic:
						_ = a.a.createElement(m.a, k, a.a.createElement("p", null, r.fbt._("Got it. Thanks for helping out this community.", null, {
							hk: "22pTV3"
						})));
						break;
					case n.DontLike:
						_ = a.a.createElement(m.a, k, a.a.createElement("p", null, r.fbt._("Just a reminder, it’s not an official rule but it is considered improper Reddiquette to downvote an otherwise acceptable post because you don’t personally like it.", null, {
							hk: "3mRvPM"
						})));
						break;
					case n.BreaksRules:
						_ = a.a.createElement(m.a, k, a.a.createElement("p", null, r.fbt._("Let us know if it breaks {=Reddit} or {=community} rules.", [r.fbt._param("=Reddit", a.a.createElement("a", {
							href: "https://www.redditinc.com/policies/content-policy",
							target: "_blank",
							rel: "noopener noreferrer"
						}, r.fbt._("Reddit", null, {
							hk: "1amvzD"
						}))), r.fbt._param("=community", a.a.createElement(c.a, {
							to: "/r/".concat(t, "/about/rules"),
							target: "_blank"
						}, r.fbt._("community", null, {
							hk: "2TnSrt"
						})))], {
							hk: "1mXxTX"
						})), a.a.createElement(p.a, {
							onClick: () => j("site")
						}, r.fbt._("It breaks Reddit rules", null, {
							hk: "3MxBm9"
						})), a.a.createElement(p.a, {
							onClick: () => j("community")
						}, r.fbt._("It breaks community rules", null, {
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
		"./src/reddit/components/MoreCommunitiesIcon/index.m.less": function(e, t, s) {
			e.exports = {
				moreCommunities: "z54Tq9pM9dZADYsxyAlMi",
				numCommunities: "_1-PSRpyxO4pzCPYOJNRMwe",
				InternalLink: "_1YInFAwL0if5cbF4P9QIJb",
				internalLink: "_1YInFAwL0if5cbF4P9QIJb"
			}
		},
		"./src/reddit/components/Popup/Button.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/components/Popup/index.m.less"),
				a = s.n(o);

			function i(e) {
				return r.a.createElement("button", {
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
				return l
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/uuid/v4.js"),
				a = s.n(o),
				i = s("./src/reddit/hooks/useOnClickOutside.ts"),
				c = s("./src/reddit/components/Popup/index.m.less"),
				d = s.n(c);

			function l(e) {
				const {
					id: t = a()(),
					onClose: s,
					onClickOutside: n,
					title: o,
					children: c
				} = e;
				return Object(i.a)(t, n), r.a.createElement("div", {
					id: t,
					"aria-modal": !0,
					className: d.a.popup,
					role: "dialog",
					tabIndex: -1
				}, r.a.createElement("h3", {
					className: d.a.header
				}, r.a.createElement("span", {
					className: d.a.title
				}, o), r.a.createElement("button", {
					className: d.a.closeButton,
					onClick: s
				}, "✕")), c)
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
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
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
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
				return r.a.createElement("div", l({
					className: Object(o.a)(d.a.backgroundWrapper, s),
					style: Object(i.c)(n, e),
					onClick: a
				}, b), t)
			})
		},
		"./src/reddit/components/PostBadges/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/PostBadges/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				p = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				u = s("./src/reddit/constants/posts.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/helpers/isRemoved.ts"),
				x = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				f = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				g = s("./src/reddit/models/Post/index.ts"),
				y = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				O = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				C = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				E = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				j = s("./src/reddit/icons/fonts/Report/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				k = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				P = s("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				S = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				w = s("./src/reddit/components/PostBadges/index.m.less"),
				I = s.n(w);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const T = e => o.a.createElement("span", N({
					className: I.a.removalReason
				}, e), e.children),
				M = () => n.fbt._("Archived", null, {
					hk: "zv3q3"
				}),
				L = () => n.fbt._("Comments are locked", null, {
					hk: "8HjJ9"
				}),
				R = e => n.fbt._("Moderator of {community name}", [n.fbt._param("community name", e)], {
					hk: "nJqIB"
				}),
				F = () => n.fbt._("Stickied post", null, {
					hk: "3qSaBs"
				}),
				A = () => n.fbt._("Pinned post", null, {
					hk: "2oxErI"
				}),
				B = (e, t, s) => {
					const n = "PostBadges--".concat(e, "--").concat(t);
					return s ? "".concat(n, "--").concat(s) : n
				},
				D = Object(b.t)({
					isProfilePostListing: b.I,
					isSubreddit: b.K,
					pageLayer: e => e
				}),
				U = Object(i.c)({
					isPinned: (e, t) => {
						let {
							post: s
						} = t;
						return Object(y.u)(e, {
							postId: s.id
						})
					},
					modModeEnabled: b.P
				}),
				W = Object(a.b)(U, (e, t) => ({
					onHideTooltip: () => e(Object(l.i)()),
					onOpenRemovalReasonModal: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(s => e(s.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(l.f)({
						tooltipId: t
					}))
				}));
			t.a = D(W(e => {
				let {
					className: t,
					displayText: s,
					isSubreddit: a,
					inSubredditOrProfile: i,
					isCompactPinnedPost: l,
					isPinned: b,
					isProfilePostListing: y,
					language: w,
					modModeEnabled: D,
					onHideTooltip: U,
					onOpenRemovalReasonModal: W,
					onShowTooltip: V,
					post: H,
					tooltipType: q
				} = e;
				const z = {
						caretOnTop: !1
					},
					K = H.isRemoved && !H.modRemovalReason && !H.modNote && H.belongsTo.type === u.a.SUBREDDIT,
					G = B("Approve", H.id, q),
					J = B("Archived", H.id, q),
					Q = B("Automod", H.id, q),
					X = B("Lock", H.id, q),
					Y = B("Mod", H.id, q),
					Z = B("Remove", H.id, q),
					$ = B("Report", H.id, q),
					ee = B("Spam", H.id, q),
					te = B("Sticky", H.id, q),
					se = B("Pinned", H.id, q);
				return o.a.createElement("div", {
					className: t
				}, i && s && H.distinguishType === d.A.MODERATOR && o.a.createElement(r.Fragment, null, o.a.createElement(S.a, {
					className: I.a.modIcon,
					desc: R(s),
					id: Y,
					onMouseEnter: V(Y),
					onMouseLeave: U
				}), o.a.createElement(m.c, N({
					tooltipId: Y,
					text: R(s)
				}, z))), H.isArchived && o.a.createElement(r.Fragment, null, o.a.createElement(O.a, {
					className: I.a.archivedIcon,
					desc: M(),
					id: J,
					onMouseEnter: V(J),
					onMouseLeave: U
				}), o.a.createElement(m.c, N({
					tooltipId: J,
					text: M()
				}, z))), H.isLocked && o.a.createElement(r.Fragment, null, o.a.createElement(C.a, {
					className: I.a.lockIcon,
					desc: L(),
					id: X,
					onMouseEnter: V(X),
					onMouseLeave: U
				}), o.a.createElement(m.c, N({
					tooltipId: X,
					text: L()
				}, z))), a && Object(g.k)(H) && !l && o.a.createElement(r.Fragment, null, o.a.createElement(k.a, {
					className: I.a.stickyIcon,
					desc: F(),
					id: te,
					onMouseEnter: V(te),
					onMouseLeave: U
				}), o.a.createElement(m.c, N({
					tooltipId: te,
					text: F()
				}, z))), y && b && o.a.createElement(r.Fragment, null, o.a.createElement(k.a, {
					className: I.a.stickyIcon,
					desc: A(),
					id: se,
					onMouseEnter: V(se),
					onMouseLeave: U
				}), o.a.createElement(m.c, N({
					tooltipId: se,
					text: A()
				}, z))), (H.isApproved || H.approvedBy) && o.a.createElement(r.Fragment, null, o.a.createElement(v.a, {
					className: I.a.approveIcon,
					desc: Object(x.a)(H),
					id: G,
					onMouseEnter: V(G),
					onMouseLeave: U
				}), o.a.createElement(m.c, N({
					tooltipId: G,
					text: Object(x.a)(H)
				}, z))), Object(h.a)(H) && o.a.createElement(r.Fragment, null, o.a.createElement(E.a, {
					className: I.a.removeIcon,
					desc: Object(x.c)(H),
					id: Z,
					onMouseEnter: V(Z),
					onMouseLeave: U
				}), K && o.a.createElement(p.a, {
					className: I.a.addRemovalReason,
					onClick: W,
					text: n.fbt._("Add a removal reason", null, {
						hk: "1YDo3"
					})
				}), (H.modRemovalReason || H.modNote) && o.a.createElement(T, {
					onMouseEnter: V(Z),
					onMouseLeave: U
				}, n.fbt._("Removal reason", null, {
					hk: "2DhKVZ"
				})), o.a.createElement(m.c, N({
					tooltipId: Z,
					text: Object(x.c)(H)
				}, z))), H.bannedBy && H.isSpam && o.a.createElement(r.Fragment, null, o.a.createElement(_.a, {
					className: I.a.spamIcon,
					desc: Object(x.e)(w, H),
					id: ee,
					onMouseEnter: V(ee),
					onMouseLeave: U
				}), o.a.createElement(m.c, N({
					tooltipId: ee,
					text: Object(x.e)(w, H)
				}, z))), ("AutoModerator" === H.approvedBy || "AutoModerator" === H.bannedBy) && o.a.createElement(r.Fragment, null, o.a.createElement(P.a, {
					className: Object(c.a)(I.a.automoderator, !!H.bannedBy && I.a.isRemoved),
					desc: x.b,
					id: Q,
					onMouseEnter: V(Q),
					onMouseLeave: U
				}), o.a.createElement(m.c, N({
					tooltipId: Q,
					text: x.b
				}, z))), Object(f.a)(H) && !D && o.a.createElement(r.Fragment, null, o.a.createElement(j.a, {
					className: I.a.reportIcon,
					desc: Object(x.d)(H.numReports),
					id: $,
					onMouseEnter: V($),
					onMouseLeave: U
				}), o.a.createElement(m.c, N({
					tooltipId: $,
					text: Object(x.d)(H.numReports)
				}, z))))
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
				r = s.n(n),
				o = s("./node_modules/reselect/es/index.js"),
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
			const f = Object(o.c)({
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
						const r = Object(i.b)(n.postId, s);
						return Object(m.c)(e, r)
					},
					playing: (e, t) => {
						let {
							post: s
						} = t;
						return Object(p.f)(e, {
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
				g = Object(d.a)(f),
				y = e => {
					const t = Object(b.d)(e.target, e.currentTarget),
						s = Object(b.b)(e.target, e.currentTarget, b.a.buttons);
					return "subreddit" !== t && s
				};
			class v extends r.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						children: t,
						className: s,
						gildModalIsOpen: n,
						makePostContainerId: o,
						post: i,
						onClick: d,
						onPostContentClick: m,
						style: p,
						ref: b
					} = this.props, h = r.a.createElement("div", {
						style: p,
						ref: b,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: t => {
							!this.cancelClick && t.button < 2 && (e(() => d && d(t, i))(t), m && y(t) && m(t, i))
						},
						className: Object(u.a)(x.a.WrappedPost, s, "Post ".concat(i.id), {
							promotedlink: i.isSponsored
						}),
						id: o ? o(i.id) : i.id,
						tabIndex: -1
					}, t, n && r.a.createElement(c.a, null)), f = !!i.media && i.media.type === l.n.VIDEO;
					return i.isSponsored || f ? r.a.createElement(a.a, {
						post: i,
						trackVideo: !0,
						trackDisplay: !0
					}, h) : h
				}
			}
			t.a = g(Object(b.c)(v))
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
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
							sendEvent: r
						} = this.props, o = !!n;
						r(e ? Object(m.o)({
							postId: s,
							isFollowed: o
						}) : Object(m.g)({
							postId: s,
							isFollowed: o
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
					} = this.props, r = this.state.isHovered, a = s.isFollowed;
					let i = a ? n.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : n.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return a && r && (i = n.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), o.a.createElement("button", {
						className: Object(c.a)(u.a.collectionFollow, {
							[u.a.isFollowed]: !!s.isFollowed,
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
					post: s
				} = t;
				return {
					onFollow: () => e(Object(d.E)(s.isSponsored ? s.postId : s.id))
				}
			})(Object(l.c)(b))
		},
		"./src/reddit/components/PostLeftRail/index.m.less": function(e, t, s) {
			e.exports = {
				postLeftRail: "_23h0-EcaBUorIHC-JZyh6J"
			}
		},
		"./src/reddit/components/PostLeftRail/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "c", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/constants/colors.ts"),
				c = s("./src/reddit/components/PostLeftRail/index.m.less"),
				d = s.n(c);
			const l = 40,
				m = e => e.isRemoved ? i.a.removed : e.isReported ? i.a.reported : "transparent",
				p = Object(a.a)(e => {
					const t = m(e),
						s = {
							width: "".concat(l, "px"),
							borderLeft: "4px solid ".concat(t)
						};
					return r.a.createElement("div", {
						className: Object(o.a)(d.a.postLeftRail, e.className),
						style: e.withoutComputedStyles ? {} : s
					}, e.children)
				});
			t.b = p
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/components/CrosspostBox/index.tsx"),
				a = s("./src/reddit/components/Media/index.tsx");
			t.a = e => {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? r.a.createElement(o.a, {
					postId: t.crosspostRootId,
					mediaProps: Object.assign({}, e, {
						crosspost: t,
						primaryContent: !1
					})
				}) : r.a.createElement(a.a, Object.assign({}, e, {
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
				r = s.n(n),
				o = s("./src/reddit/components/AwardBadges/index.tsx"),
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
				f = s("./src/reddit/models/Subreddit/index.ts"),
				g = s("./src/reddit/components/PostMeta/index.m.less"),
				y = s.n(g);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: n,
					isCurrentUserProfilePost: g,
					isOverlay: v,
					isTopicPage: O,
					language: C,
					post: E,
					shouldShowSubscribeButton: j,
					subredditOrProfile: _,
					tooltipType: k
				} = e, P = !!O;
				return r.a.createElement("div", {
					className: y.a.metaContainer
				}, !n && !E.isSponsored && _ && r.a.createElement(i.a, {
					postId: E.id,
					subredditName: _.name
				}, r.a.createElement(p.a, {
					className: y.a.subredditName,
					"data-click-id": "subreddit",
					to: _.url
				}, _.displayText)), _ && _.isQuarantined && r.a.createElement(m.a, null), !n && !E.isSponsored && _ && j && !g && r.a.createElement(u.a, {
					getEventFactory: e => Object(x.f)(E.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: _.name,
						type: Object(f.f)(_) ? b.a.PROFILE : b.a.SUBREDDIT
					},
					postId: E.id,
					small: !0
				}), !n && !E.isSponsored && r.a.createElement(h.b, null), !n && !E.isSponsored && r.a.createElement(c.h, {
					type: E.belongsTo.type,
					id: E.belongsTo.id
				}), r.a.createElement(l.d, {
					className: y.a.postTopMeta,
					flairStyleTemplate: t,
					language: C,
					post: E,
					tooltipType: k
				}), r.a.createElement(d.a, {
					displayText: _ ? _.displayText : null,
					inSubredditOrProfile: !!n,
					language: C,
					post: E,
					tooltipType: k
				}), _ && r.a.createElement(a.a, {
					className: y.a.donationAmount,
					contentId: E.id,
					subredditId: _.id
				}), !P && r.a.createElement(o.a, {
					hideCta: s,
					isOverlay: !!v,
					thing: E
				}))
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/components/ModerationPrompts/Prompt.tsx"),
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
					subreddit: f,
					isOverlay: g
				} = e, y = "upvote-button-".concat(t.id).concat(g ? "-overlay" : ""), {
					moderationPrompt: v
				} = t;
				return r.a.createElement(c.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(p.a)(t),
					isSponsored: !!Object(m.b)(t) && t.isSponsored,
					redditStyle: x
				}, n && r.a.createElement(l.a, {
					isCheckboxSelected: u,
					toggleCheckbox: b
				}), r.a.createElement(d.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: s,
					redditStyle: x,
					upvoteTooltipId: y
				}), v && r.a.createElement(i.b, {
					rightOf: y
				}, "survey" === v ? r.a.createElement(a.a, {
					post: t,
					subredditName: f.name,
					isOverlay: !!g
				}) : r.a.createElement(o.a, {
					post: t,
					subredditName: f.name,
					isOverlay: !!g
				})))
			}
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
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
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
				b = c.a.wrapped(e => o.a.createElement("div", {
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
		"./src/reddit/components/SearchDiscoveryUnits/HeroUnit/CommentMeta.m.less": function(e, t, s) {
			e.exports = {
				commentMeta: "_2GB9z5qEEGqUlVd7_AZ0Gd",
				postedInfo: "_1IuU3sDpVjxHmNu8hy7ke-"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/HeroUnit/PromotedHeroUnit/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1EfAVKHNVRtvNT-8VkDC-8",
				layout: "CVce26qZfY7ojFzPuc8YO",
				icon: "_3HND8rCvmfwgjXVVqJERhm",
				header: "_2_cX1qWUgmW8pfAWGvFh8p",
				postTitle: "O2eUhZf8GsGivGF4UEz5D",
				postIcon: "K-RJ57NaqoKc87tgv6tg7",
				innerContainer: "_2AFBK0BD8EbiNGolgAo1Hq",
				bodyWrapper: "_1tvEudu_F3pE1RiVAQrGvD",
				mediaPlaceholder: "_2C0inkNJdF-Ov9MOBPF4zU",
				mediaWrapper: "_1FoZeus-f2nDzrVv5WpY_G",
				thumbnail: "_3gEhWanOXMU-ksmhp_q6lV",
				flexSpacer: "vB0xdI2bqGNNfqozIzmfD",
				arrowIcon: "_1R6w1GOLZm3dSI11WCzCQG",
				seeFullPost: "_1cwpynsCToYyTFd63E30QA",
				commentWrapper: "_1OQ-tv6o7fwLv-Xi-aDeHM",
				numComments: "_2Y_MxrLEpKLdjpgTcHwdp",
				commentIcon: "_2-ZseoXCsZV7Xau4_E7Om_",
				textMediaWrapper: "_3pcRVwv7cNJ8Pv-9ZM98wD",
				textMedia: "DX83wFTjNyEjCXYelqumz",
				seeMore: "_3Tyc8Rp7EGv_mZ37PKjpfQ",
				outboundLink: "_1hIKBJ8OWtaPMnfYwyHGFc",
				adLinkWrapper: "_3A4sFX94xrspYFRVMV-s6U",
				layoutBody: "_2tbAAoNeEb_-ogWVF8pxCo",
				layoutHeader: "_3mCoL3r3LzuKXr4dtE3b_v",
				callToAction: "_1i9ocNVQgxgTH0Os3zmf_6"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/HeroUnit/UnthreadedComment.m.less": function(e, t, s) {
			e.exports = {
				container: "_1qi8CaHgb-Xm_3oGIAF8wc",
				commentContentWrapper: "_5y5OcwmowpRI5lhW8hAf8",
				commentBody: "_1vkza3ACM30oYHiA5vOGJh"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/HeroUnit/index.m.less": function(e, t, s) {
			e.exports = {
				container: "h5UKl2V1Is5GCXY54VWZi",
				layout: "_3jaIP3UzpcymE9ShGaYPRY",
				icon: "_1pffhH3DYAI7rRTUAlHpsg",
				header: "_3mXJ9ydjIpRKpQ-KxPLqwA",
				postTitle: "_2VhF1mF_293NpbRPStvDPF",
				postIcon: "T0ysSxk3cKkw05qgwX4rE",
				innerContainer: "_3MpvbgSzWyQ81sLfHzYAgT",
				bodyWrapper: "_2OVKLZk2ubyZ0t5amZqqZN",
				mediaPlaceholder: "_3d88aDP4u4C5DLMu8SfYZ8",
				mediaWrapper: "_1eIKxpeFNBTQ699qAcQRbd",
				thumbnail: "_22Yz5UFhuhlNCyt3gMwKtc",
				flexSpacer: "_16ij1n1alsDJYUSapHkvTu",
				arrowIcon: "_2j1ValrGx6OpuxteMFAH40",
				seeFullPost: "_20vqKvo2gYgPLLM2nvt9xx",
				commentWrapper: "_28vLaY2cJfWy30C_YcyA76",
				numComments: "_3Nr7HrlwLllPDfaR7Mo2-l",
				commentIcon: "_6cbxXo8Vg0cqLtcSW7sfq",
				textMediaWrapper: "_2ZlSdmjvWREfUPvdtzIAN_",
				textMedia: "_2dnz6aKPWeFF1opQ_XsTYW",
				seeMore: "_2oliTAoFFxS1mse-sOZinV"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/index.m.less": function(e, t, s) {
			e.exports = {
				bold: "_3j9XjJayuKq7dJ8huVnCuS",
				container: "_2SYp_6fbfcr6uPKUz5DybH",
				metaDataContainer: "_2eSrmICxfeYScrkl_a0PPz",
				metaData: "_1z_GZgOeapyyCdKo34Eqir",
				icon: "GDc4zpCBZubZHeypInBQJ",
				follow: "tlgyC9DArM6YOdfYfAA4R",
				share: "_1zFWIhf2ANVvGFxQN9FG5X",
				header: "_3S4kZJ2srKP3X_EH9Rx1wn",
				postIcon: "HU9OnSjgAUl0uezzCEN8G",
				metadataContainer: "_3sYSU_0JVt4q8DdUaqBPDp",
				metaSeparator: "_3GCG9ku78CvsDODsUdz3ze",
				postBadges: "_2_3bLbSOJmeKpz84PVvmCy"
			}
		},
		"./src/reddit/components/SearchResultsContent/Communities/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2mO8vClBdPxiJ30y_C6od2",
				title: "_1hYBlRBooHG-eY5iAHen-R",
				separator: "_1LvQXvsxpSVi-JRudk3e4e",
				previewCommunityStyles: "_3MfNPE_vLKliHPkiYMAtZm",
				loadMoreItem: "_1mLDB-TFHMY0SRGTRD-ipK",
				viewMore: "DMHO9Pay4I5LSwZTtE4TY"
			}
		},
		"./src/reddit/components/SearchResultsContent/CommunitiesList/index.m.less": function(e, t, s) {
			e.exports = {
				communityPlaceholder: "_1fqvxIYppV310uLQjODSFf",
				separatedCommunity: "_12I4LEbhoIMSoIIXC_OHwT"
			}
		},
		"./src/reddit/components/SearchResultsContent/Community/index.m.less": function(e, t, s) {
			e.exports = {
				container: "ei8_Bq_te0jjwNIqmk8Tw",
				userInfo: "_3eEGmb1TERzQ2jBCUr-XNg",
				subredditIcon: "_2YBzxh6YUsSdcmbcJ-kE5L",
				titleContainer: "NnbPVsleaxwPg_xH-gVn4",
				title: "_2torGbn_fNOMbGw3UAasPl",
				subtitle: "_3CUjJH8t2eFynKUAv1ER7C",
				description: "_3JYXhJlwZCvjZTBplEncbq",
				buttonContainer: "_3llSmEBMCJTcO537oPxHIH"
			}
		},
		"./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2ObyNmd6TiLgPGR5-1jj_R",
				userInfo: "_3_4sSzkdFVidwJjdKcy3N1",
				subreddtiIcon: "_3yGdKsP-cHl-Cb_SH-PyXp",
				titleContainer: "_1PHQ-ZJkmjaCiPbk9dZtbl",
				title: "_11V3zVIqp59I7JvzWnky0w",
				subtitle: "_1udmVL2hhq7PSlgxTaeJw2",
				description: "_3C8z4MmIB_gou30f3ojB0V",
				descriptionContainer: "_3zCQAIsCB1OIYQILnEJD61",
				button: "DEgV8HnF3Dr9R22X_SHUw"
			}
		},
		"./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/SubredditIcon/index.tsx"),
				i = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				c = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.m.less"),
				d = s.n(c);
			t.a = e => r.a.createElement("div", {
				className: Object(o.a)(d.a.container, e.className)
			}, r.a.createElement("div", {
				className: d.a.userInfo
			}, r.a.createElement(a.b, {
				className: Object(o.a)(d.a.subreddtiIcon, Object(i.a)(e))
			}), r.a.createElement("div", {
				className: d.a.titleContainer
			}, r.a.createElement("div", {
				className: Object(o.a)(d.a.title, Object(i.b)(e))
			}), r.a.createElement("div", {
				className: Object(o.a)(d.a.subtitle, Object(i.b)(e))
			}))), r.a.createElement("div", {
				className: d.a.descriptionContainer
			}, r.a.createElement("div", {
				className: Object(o.a)(d.a.description, Object(i.b)(e))
			}), r.a.createElement("div", {
				className: Object(o.a)(d.a.description, Object(i.b)(e))
			})), r.a.createElement("div", {
				className: Object(o.a)(d.a.button, Object(i.b)(e))
			}))
		},
		"./src/reddit/components/SearchResultsContent/NoResults/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "FkQALOgNG0XnM_qGE3GOB",
				text: "_1tEoY-vmgG3yWH6hCdgy3p",
				semiBold: "_2Kn5gtljobl1Fv05YLAeKK",
				noResults: "_1VDJFxZ-XJSB8yo1UyJzsi"
			}
		},
		"./src/reddit/components/SearchResultsContent/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/actions/search.ts"),
				d = s("./src/lib/search/index.ts"),
				l = s("./node_modules/fbt/lib/FbtPublic.js"),
				m = s("./node_modules/lodash/memoize.js"),
				p = s.n(m),
				u = s("./src/lib/makeListingKey/index.ts"),
				b = s("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),
				h = s("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.tsx"),
				x = s("./src/reddit/components/Widgets/Base/index.tsx"),
				f = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				g = s("./src/reddit/selectors/discoveryUnit.ts"),
				y = s("./src/reddit/selectors/listings.ts");
			const v = [];
			var O = s("./src/reddit/components/DiscoveryUnit/PostsDiscoveryUnit/index.m.less"),
				C = s.n(O);
			var E = Object(o.b)(() => {
					const e = Object(g.a)();
					return Object(a.c)({
						isDataPending: (e, t) => {
							let {
								categoryId: s,
								discoveryUnit: n,
								listingKey: r
							} = t;
							if (r) return Object(y.h)(e, {
								listingKey: r
							});
							if (!s || !n) return !1;
							const o = Object(u.a)(n.unitName, i.M.HOT, {
								category: s
							});
							return Object(y.h)(e, {
								listingKey: o
							})
						},
						postIds: (t, s) => {
							let {
								categoryId: n,
								discoveryUnit: r,
								searchDiscoveryUnit: o,
								heroPostId: a
							} = s;
							return n && r ? e(t, {
								unitName: r.unitName,
								id: n
							}) : ((e, t) => {
								if (!e) return v;
								const s = e.postOrder;
								if (t && s) {
									const e = s.indexOf(t);
									if (e > -1) return s.splice(e, 1), s
								}
								return s || v
							})(o, a)
						}
					})
				}, e => ({
					trackPostView: p()((t, s, n) => e((e, r) => f.A(r(), t, s, n)), (e, t) => {
						let {
							id: s
						} = e;
						return "".concat(s, "-").concat(t)
					})
				}))(e => {
					const t = r.a.createElement(r.a.Fragment, null, r.a.createElement(x.a, {
						className: C.a.widgetHeader
					}, e.categoryId && e.category ? l.fbt._("Top {category} Posts", [l.fbt._param("category", e.category)], {
						hk: "zMaSt"
					}) : l.fbt._("Top posts across Reddit", null, {
						hk: "SCQfF"
					})));
					return e.isDataPending || e.postIds && 0 !== e.postIds.length ? r.a.createElement("div", {
						className: e.className
					}, r.a.createElement(b.a, {
						className: C.a.layout,
						header: t,
						hidePadding: !0
					}, r.a.createElement(h.a, {
						discoveryUnit: e.discoveryUnit,
						searchDiscoveryUnit: e.searchDiscoveryUnit,
						isLoading: e.isDataPending,
						items: e.postIds,
						searchOptions: e.searchOptions,
						showSubreddit: !0,
						showTopPosts: !0,
						onPostView: e.trackPostView
					}))) : null
				}),
				j = s("./node_modules/react-router-redux/es/index.js"),
				_ = s("./src/reddit/selectors/category.ts"),
				k = s("./src/reddit/selectors/subreddit.ts"),
				P = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js")),
				S = s("./node_modules/react-motion/lib/react-motion.js"),
				w = s("./src/reddit/actions/tooltip.ts"),
				I = s("./src/reddit/components/DiscoveryUnit/CarouselBase/index.tsx"),
				N = s("./src/lib/classNames/index.ts"),
				T = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				M = s("./src/lib/prettyPrintNumber/index.ts"),
				L = s("./src/reddit/components/IdCard/Title.tsx"),
				R = s("./src/reddit/components/SubscribeButton/index.tsx"),
				F = s("./src/reddit/models/Theme/index.ts"),
				A = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				B = s("./src/reddit/components/IdCard/index.m.less"),
				D = s.n(B),
				U = s("./src/reddit/components/DiscoveryUnit/SearchCommunity/index.m.less"),
				W = s.n(U);
			class V extends r.a.Component {
				render() {
					const e = Object(F.g)(this.props.bannerBackgroundColor || this.props.primaryColor || Object(A.a)(this.props).active, this.props.bannerBackgroundImage || Object(A.a)(this.props).banner.backgroundImage, "cover");
					return r.a.createElement("div", {
						className: Object(N.a)(W.a.container, this.props.className),
						style: this.props.style
					}, r.a.createElement("div", {
						className: W.a.searchCommunity,
						onClick: this.props.onClick
					}, r.a.createElement("div", {
						className: W.a.banner,
						style: {
							background: e
						}
					}), r.a.createElement(L.a, {
						className: W.a.titleWrapper,
						largeSubredditIcon: !0,
						linkUrl: "r/".concat(this.props.name),
						subredditIcon: {
							url: this.props.iconUrl
						},
						titleText: "r/".concat(this.props.name),
						primaryColor: this.props.primaryColor
					}), this.props.subscribers && r.a.createElement("span", {
						className: W.a.count
					}, l.fbt._({
						"*": "{number} members",
						_1: "1 member"
					}, [l.fbt._plural(this.props.subscribers, "number", Object(M.b)(this.props.subscribers))], {
						hk: "2ji2gJ"
					})), r.a.createElement("div", {
						className: Object(N.a)(D.a.Description, W.a.description)
					}, this.props.description), r.a.createElement("div", {
						className: W.a.subscribeButtonWrapper
					}, r.a.createElement(R.a, {
						className: W.a.subscribeButton,
						identifier: {
							name: this.props.name,
							type: this.props.type
						},
						getEventFactory: this.props.getSubscribeEventFactory,
						onClick: e => e.stopPropagation()
					}))))
				}
			}
			const H = Object(T.a)(V);
			class q extends r.a.Component {
				render() {
					return r.a.createElement(H, this.props)
				}
			}
			var z = q,
				K = s("./src/reddit/components/IdCard/Placeholder.tsx"),
				G = s("./src/reddit/constants/posts.ts"),
				J = s("./src/reddit/selectors/tooltip.ts"),
				Q = s("./src/reddit/components/DiscoveryUnit/SubredditsDiscoveryUnit/SearchCommunities/index.m.less"),
				X = s.n(Q);

			function Y() {
				return (Y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var Z = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const $ = 338,
				ee = {
					stiffness: 210,
					damping: 30
				},
				te = Object(o.b)(() => Object(a.c)({
					toolTipId: J.a
				}), (e, t) => ({
					toggleTooltip: t => e(Object(w.h)({
						tooltipId: t
					}))
				})),
				se = e => {
					var {
						root: t,
						handleVisibilityChange: s
					} = e, n = Z(e, ["root", "handleVisibilityChange"]);
					return r.a.createElement(P.a, {
						root: t,
						threshold: .99,
						rootMargin: "0px 0px 0px 0px",
						onChange: s
					}, r.a.createElement(z, n))
				};
			class ne extends I.c {
				constructor(e) {
					super(e), this.state = {
						scrollIndex: 0,
						viewableItems: {},
						visibleItemsCount: null,
						itemsFitInContainer: !1
					}, this.id = "CollectionInfoCommunities", this.itemWidth = $, this.spacerWidth = 0
				}
				componentDidMount() {
					super.componentDidMount()
				}
				componentDidUpdate(e, t) {
					super.componentDidUpdate(e, t), this.trackCommunitiesViewed()
				}
				onClickNext() {
					super.onClickNext(), this.trackCommunitiesViewed()
				}
				onClickPrev() {
					super.onClickPrev(), this.trackCommunitiesViewed()
				}
				trackCommunitiesViewed() {
					if (this.props.isLoading || 0 === this.props.items.length) return;
					const e = Math.min(this.state.scrollIndex + this.getVisibleItemsCount(), this.props.items.length),
						t = this.state.scrollIndex;
					void 0 !== t && this.props.items.slice(t, e).map(e => this.props.onCommunityView(e))
				}
				render() {
					const {
						items: e,
						isLoading: t,
						searchResults: s,
						toggleTooltip: n
					} = this.props, o = !t && e.length > 0, {
						scrollIndex: a,
						visibleItemsCount: i
					} = this.state, c = this.getMaxScrollIndex(i), d = this.getAdjustment({
						itemWidth: $,
						maxScrollIndex: c,
						scrollIndex: a,
						visibleItemsCount: i
					}), l = this.getMarginLeft({
						adjustment: d,
						itemWidth: $,
						scrollIndex: a
					});
					return r.a.createElement(r.a.Fragment, null, s && o && r.a.createElement("div", {
						className: X.a.communitiesWrapper,
						id: this.id,
						ref: this.setContainerRef
					}, r.a.createElement(S.Motion, {
						defaultStyle: {
							marginLeft: 0
						},
						style: {
							marginLeft: Object(S.spring)(l, ee)
						}
					}, t => r.a.createElement(r.a.Fragment, null, e.map((e, s) => r.a.createElement(se, Y({}, e, {
						className: X.a.community,
						handleVisibilityChange: this.makeVisibilityChangeHandler(s),
						key: e.name,
						root: this.id,
						style: 0 === s ? t : void 0,
						onClick: () => this.props.onCommunityClick(e),
						toggleTooltip: n,
						type: e.type || G.a.SUBREDDIT
					}))))), 0 !== a && r.a.createElement(I.a, {
						className: X.a.arrowLeft,
						onClick: this.onClickPrev
					}), !this.state.itemsFitInContainer && (null == c || a < c) && r.a.createElement(I.b, {
						className: X.a.arrowRight,
						onClick: this.onClickNext
					})), s && !o && r.a.createElement("div", {
						className: X.a.searchCommunityPlaceholder
					}, r.a.createElement(K.a, null), r.a.createElement(K.a, null), r.a.createElement(K.a, null), r.a.createElement(K.a, null)))
				}
			}
			var re = te(ne),
				oe = s("./src/reddit/components/DiscoveryUnit/SubredditsDiscoveryUnit/index.m.less"),
				ae = s.n(oe);
			class ie extends r.a.Component {
				trackCommunityView(e) {
					this.props.discoveryUnit ? this.props.trackSubredditView(this.props.discoveryUnit, e) : this.props.searchDiscoveryUnit && this.props.trackSubredditView(this.props.searchDiscoveryUnit, e)
				}
				onCommunityClick(e) {
					this.props.navigateToSubreddit(e)
				}
				render() {
					const {
						categoryName: e
					} = this.props, t = r.a.createElement(x.a, {
						className: ae.a.widgetHeader
					}, e ? l.fbt._("Top {categoryName} Communities", [l.fbt._param("categoryName", e)], {
						hk: "301UWB"
					}) : l.fbt._("Communities talking about this", null, {
						hk: "Azews"
					}));
					return this.props.isDataPending || this.props.communities && 0 !== this.props.communities.length ? r.a.createElement("div", {
						className: ae.a.container
					}, r.a.createElement(b.a, {
						header: t,
						hidePadding: !0,
						className: ae.a.layout
					}, r.a.createElement(re, {
						category: this.props.subredditCategory,
						items: this.props.communities,
						isLoading: this.props.isDataPending,
						onCommunityClick: e => this.onCommunityClick(e),
						onCommunityView: e => this.trackCommunityView(e),
						searchResults: !0
					}))) : null
				}
			}
			var ce = Object(o.b)(() => Object(a.c)({
					subredditCategory: (e, t) => {
						let {
							categoryId: s
						} = t;
						return Object(_.j)(e, {
							id: s
						})
					},
					communities: (e, t) => {
						let {
							categoryId: s,
							searchDiscoveryUnit: n
						} = t;
						return s ? Object(_.a)(e, {
							id: s
						}) : n && n.subredditOrder ? Object(k.f)(e, {
							subredditIds: n.subredditOrder
						}) : []
					},
					isDataPending: (e, t) => {
						let {
							categoryId: s,
							listingKey: n
						} = t;
						return s ? !!Object(_.l)(e, {
							id: s
						}) : !!n && Object(y.h)(e, {
							listingKey: n
						})
					}
				}), (e, t) => {
					let {
						discoveryUnit: s,
						searchDiscoveryUnit: n,
						searchOptions: r
					} = t;
					return {
						trackSubredditView: p()((t, s) => e((e, n) => f.C(n(), t, s, r)), (e, t) => {
							let {
								id: s
							} = e, {
								name: n
							} = t;
							return "".concat(s, "-").concat(n)
						}),
						navigateToSubreddit: t => e((e, r) => {
							s ? f.s(r(), s, t) : n && f.I(r(), n, t), t.displayText && e(Object(j.b)("/".concat(t.displayText)))
						})
					}
				})(ie),
				de = s("./node_modules/lodash/constant.js"),
				le = s.n(de),
				me = s("./node_modules/lodash/take.js"),
				pe = s.n(me),
				ue = s("./node_modules/lodash/times.js"),
				be = s.n(ue),
				he = s("./src/lib/addQueryParams/index.ts"),
				xe = s("./src/lib/LRUCache/index.ts"),
				fe = s("./node_modules/react-dom/index.js"),
				ge = s("./src/reddit/components/Scroller/Simple.tsx"),
				ye = s("./src/reddit/helpers/correlationIdTracker.ts"),
				ve = s("./src/reddit/helpers/trackers/searchResults.ts"),
				Oe = s("./src/reddit/selectors/telemetry.ts");
			const Ce = new xe.a(250),
				Ee = (e, t, s, n) => {
					const r = "last-".concat(t),
						o = "entered-".concat(e.id, "-").concat(r);
					let a = Ce.get(o);
					return void 0 === a && (a = "subreddit" === e.type ? () => _e(s, e.id, n) : () => je(s, e.id, n), Ce.set(o, a)), a
				},
				je = (e, t, s) => e(e => Object.assign({}, Object(ve.c)(e, s), {
					source: "search",
					action: "view",
					noun: "search_results_profile",
					correlationId: Object(ye.c)(ye.a.SearchResults),
					actionInfo: Oe.actionInfo(e),
					search: Oe.search(e, s),
					profile: Oe.profile(e)
				})),
				_e = (e, t, s) => e(e => Object.assign({}, Object(ve.c)(e, s), {
					source: "search",
					action: "view",
					noun: "search_results_subreddit",
					correlationId: Object(ye.c)(ye.a.SearchResults),
					actionInfo: Oe.actionInfo(e),
					search: Oe.search(e, s),
					subreddit: Oe.subreddit(e)
				}));
			var ke = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Pe = s("./src/reddit/components/Flair/index.tsx"),
				Se = s("./src/reddit/components/SubredditIcon/index.tsx"),
				we = s("./src/reddit/constants/tracking.ts"),
				Ie = s("./src/reddit/controls/InternalLink/index.tsx"),
				Ne = s("./src/reddit/models/Flair/index.ts"),
				Te = s("./src/reddit/contexts/PageLayer/index.tsx");
			const Me = {},
				Le = e => {
					let {
						pageLayer: t
					} = e;
					return t && t.locationState || Me
				},
				Re = Object(a.a)((e, t) => Le(t), e => e.fromPage && e.fromPage.subredditName),
				Fe = Object(a.a)((e, t) => Le(t), e => e.fromPage && e.fromPage.routeName),
				Ae = e => {
					let {
						pageLayer: t
					} = e;
					return t && t.locationState && t.locationState.searchSwitcherType
				},
				Be = Object(a.a)(Fe, (e, t) => {
					let {
						pageLayer: s
					} = t;
					return Object(Te.z)(s)
				}, (e, t) => t && (e === i.yb.COMMENTS || e === i.yb.SUBREDDIT));
			var De = s("./src/reddit/selectors/user.ts"),
				Ue = s("./src/reddit/components/SearchResultsContent/Community/index.m.less"),
				We = s.n(Ue);
			const Ve = Object(a.c)({
					hideNSFWPref: De.z,
					language: De.Q,
					subredditOrProfile: k.K,
					subredditOrProfileAboutInfo: k.G,
					userIsSubscriber: k.bb
				}),
				He = Object(o.b)(Ve),
				qe = e => {
					e.preventDefault(), e.stopPropagation()
				};
			var ze = He(Object(ke.c)(e => {
					if (!e.subredditOrProfile) return null;
					const t = e.subredditOrProfile.displayText,
						s = e.subredditOrProfileAboutInfo.publicDescription;
					let n, o;
					const a = t => {
						if (!t) return ((e, t) => s => ({
							source: "search",
							action: we.c.CLICK,
							noun: "result_subscribe_".concat(e),
							correlationId: Object(ye.c)(ye.a.SearchResults),
							actionInfo: Oe.actionInfo(s),
							search: Oe.search(s, t)
						}))(e.identifier.type, e.searchOptions)
					};
					if ("subreddit" === e.identifier.type) {
						const t = e.subredditOrProfileAboutInfo;
						n = "number" == typeof t.subscribers ? l.fbt._({
							"*": "{number of subscribers} Members",
							_1: "1 Member"
						}, [l.fbt._plural(t.subscribers, "number of subscribers", Object(M.b)(t.subscribers))], {
							hk: "vb11y"
						}) : null, o = "number" != typeof t.subscribers ? null : r.a.createElement(R.a, {
							identifier: {
								name: e.subredditOrProfile.name,
								type: "subreddit"
							},
							onClick: qe,
							getEventFactory: a,
							small: !0
						})
					} else {
						const t = e.subredditOrProfileAboutInfo,
							s = Object(M.b)(t.commentKarma + t.postKarma);
						n = l.fbt._({
							"*": "{karma count} Karma",
							_1: "1 Karma"
						}, [l.fbt._plural(t.commentKarma + t.postKarma, "karma count", s)], {
							hk: "4r0tyT"
						}), o = r.a.createElement(R.a, {
							identifier: {
								name: e.subredditOrProfile.name,
								type: "profile"
							},
							onClick: qe,
							getEventFactory: a,
							small: !0
						})
					}
					return r.a.createElement(Ie.a, {
						className: Object(N.a)(We.a.container, e.className),
						onClick: () => {
							e.sendEvent(Object(ve.i)(e.identifier.type, e.searchOptions, Ae(e)))
						},
						to: e.subredditOrProfile.url
					}, r.a.createElement("div", {
						className: We.a.userInfo
					}, r.a.createElement(Se.b, {
						className: We.a.subredditIcon,
						shouldHideNsfwIcon: e.hideNSFWPref,
						subredditOrProfile: e.subredditOrProfile
					}), r.a.createElement("div", {
						className: We.a.titleContainer
					}, r.a.createElement("div", {
						className: We.a.title
					}, t), n ? r.a.createElement("div", {
						className: We.a.subtitle
					}, n) : null, e.subredditOrProfile.isNSFW && r.a.createElement(Pe.b, {
						flair: {
							type: Ne.f.Nsfw,
							text: "nsfw"
						}
					}))), r.a.createElement("div", {
						className: We.a.description
					}, s), r.a.createElement("div", {
						className: We.a.buttonContainer
					}, o))
				})),
				Ke = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx"),
				Ge = s("./src/reddit/helpers/trackers/screenview.ts"),
				Je = s("./src/reddit/selectors/searchResults.ts"),
				Qe = s("./src/reddit/selectors/tracking.ts"),
				Xe = s("./src/telemetry/index.ts"),
				Ye = s("./src/telemetry/models/Timer.ts"),
				Ze = s("./src/reddit/components/SearchResultsContent/CommunitiesList/index.m.less"),
				$e = s.n(Ze);
			const et = 32,
				tt = 250,
				st = Object(a.c)({
					apiError: Je.d,
					apiPending: Je.e,
					loadMore: Je.f,
					viewportDataLoaded: Qe.a
				}),
				nt = [i.Kb.Subreddits, i.Kb.Users];
			class rt extends r.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new xe.a(tt), this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.updateScrollerRef = e => {
						const t = e && Object(fe.findDOMNode)(e);
						this.scrollerRef = t instanceof Element ? t : void 0
					}
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						searchOptions: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const n = Xe.c.end(e);
					s(Object(Ge.p)(e, t, Ye.TimerType.InApp, n))
				}
				componentDidMount() {
					this.checkAndSendScreenview(), this.timerId && Object(Xe.b)(i.k.Redesign, {
						type: "mount",
						component: "communitySearchResults",
						duration: Xe.c.end(this.timerId)
					})
				}
				componentDidUpdate(e) {
					if (this.checkAndSendScreenview(), this.timerId && Xe.c.has(this.timerId)) {
						const e = Xe.c.end(this.timerId);
						if (e < 10) return;
						Object(Xe.b)(i.k.Redesign, {
							duration: e,
							type: "mount",
							component: "communitySearchResults"
						})
					}
				}
				componentWillUpdate(e) {
					this.timerId && Xe.c.cancel(this.timerId), e.identifiers.length && (this.timerId = Xe.c.start()), (e.listingKey !== this.props.listingKey || !this.isListLongEnough() && e.identifiers.length !== this.props.identifiers.length) && (this.didRenderLastVisibleChild = !1)
				}
				componentWillUnmount() {
					this.timerId && Xe.c.cancel(this.timerId), this.scrollerRef = void 0, this.didRenderLastVisibleChild = !1
				}
				scrollChildForItem(e, t) {
					const {
						listingKey: s,
						searchOptions: n,
						sendEvent: o
					} = this.props, a = Object.assign({}, n, {
						id: e.id,
						eventType: e.type
					}), i = "community-search-".concat(t, "-").concat(s), c = Ee(e, s, o, a);
					let d;
					if (void 0 === (d = this.scrollChildCache.get(i))) {
						const t = "community-search-item-[id:".concat(e.id, "]");
						d = {
							estHeight: et,
							trackOnEnteredViewport: c,
							id: e.id,
							render: () => r.a.createElement(ze, {
								className: $e.a.separatedCommunity,
								identifier: e,
								key: t,
								searchOptions: this.props.searchOptions
							})
						}
					}
					return this.scrollChildCache.set(i, d), d
				}
				hasAttemptedLoad() {
					const {
						apiError: e,
						apiPending: t
					} = this.props;
					return Boolean(e) || !1 === t
				}
				hasContent() {
					return this.props.identifiers.length > 0
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && e.pop();
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				render() {
					return this.hasContent() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.hasAttemptedLoad() ? (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty()) : (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder())
				}
				renderEmpty() {
					return this.renderList()
				}
				renderPlaceholder() {
					const e = !this.props.apiError;
					return r.a.createElement("div", null, be()(10, t => r.a.createElement(Ke.a, {
						className: $e.a.communityPlaceholder,
						key: t,
						isLoading: e
					})))
				}
				renderList() {
					const {
						identifiers: e,
						listingKey: t,
						loadMore: s,
						onLoadMore: n
					} = this.props, o = e.map((e, t) => this.scrollChildForItem(e, t));
					return r.a.createElement(ge.b, {
						key: t,
						innerRef: this.updateScrollerRef,
						loadMoreToken: s && s.token ? s.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: n
					}, o)
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props, n = this.isListLongEnough();
					return Xe.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (n || s)))
				}
			}
			var ot = Object(o.b)(st, e => ({
					onLoadMore: () => e(Object(c.g)(nt))
				}))(Object(ke.c)(rt)),
				at = s("./src/reddit/components/SearchResultsContent/Communities/index.m.less"),
				it = s.n(at);
			const {
				fbt: ct
			} = s("./node_modules/fbt/lib/FbtPublic.js"), dt = Object(Te.t)({
				pageLayer: e => e,
				queryParams: Te.S
			}), lt = Object(a.c)({
				apiError: Je.d,
				apiPending: Je.e,
				identifiers: Je.b,
				loadMore: Je.f
			}), mt = 36, pt = 5, ut = Object(o.b)(lt), bt = (e, t) => () => e(e => Object.assign({}, Object(ve.c)(e), {
				source: "search",
				action: "click",
				noun: "view_more_communities",
				correlationId: Object(ye.c)(ye.a.SearchResults),
				actionInfo: Oe.actionInfo(e),
				search: Oe.search(e, t)
			})), ht = e => {
				const {
					loadMore: t,
					identifiers: s
				} = e;
				return Boolean(t && t.token) && s.length > 0
			};
			class xt extends r.a.Component {
				constructor() {
					super(...arguments), this.scrollChildCache = new xe.a(pt)
				}
				scrollChildForItem(e, t) {
					const {
						listingKey: s,
						pageLayer: n,
						searchOptions: o,
						sendEvent: a
					} = this.props, i = Object.assign({}, o, {
						id: e.id,
						eventType: e.type
					}), c = Ee(e, s, a, o), d = "community-search-".concat(t, "-").concat(s);
					let l;
					return void 0 === (l = this.scrollChildCache.get(d)) && (l = {
						estHeight: mt,
						trackOnEnteredViewport: c,
						id: e.id,
						render: () => r.a.createElement(ze, {
							className: it.a.previewCommunityStyles,
							identifier: e,
							key: e.id,
							pageLayer: n,
							searchOptions: i
						})
					}), this.scrollChildCache.set(d, l), l
				}
				render() {
					const {
						apiError: e,
						apiPending: t,
						identifiers: s,
						listingKey: n,
						loadMore: o,
						preview: a,
						queryParams: i,
						searchOptions: c,
						sendEvent: d
					} = this.props;
					if (a) {
						let n;
						if (t || e) n = be()(3, t => r.a.createElement(Ke.a, {
							className: it.a.previewCommunityStyles,
							key: t,
							isLoading: !e
						}));
						else {
							let e = s.map((e, t) => this.scrollChildForItem(e, t));
							e = pe()(e, 3), n = r.a.createElement(ge.b, null, e)
						}
						return r.a.createElement("div", {
							className: it.a.container
						}, r.a.createElement("span", {
							className: it.a.title
						}, ct._("Communities and users", null, {
							hk: "3edzgd"
						})), r.a.createElement("div", {
							className: it.a.separator
						}), n, r.a.createElement(Ie.a, {
							className: it.a.viewMore,
							onClick: bt(d, c),
							to: Object(he.a)("/search", Object.assign({}, i, {
								type: "sr,user"
							}))
						}, ct._("View more", null, {
							hk: "JKJPb"
						})))
					}
					return r.a.createElement("div", {
						className: it.a.container
					}, !c.is_multi && r.a.createElement(ot, {
						identifiers: s,
						listingKey: n,
						searchOptions: c
					}), ht({
						identifiers: s,
						loadMore: o
					}) && r.a.Children.toArray(be()(3, le()(r.a.createElement(Ke.a, {
						className: it.a.loadMoreItem,
						isLoading: !0
					})))))
				}
			}
			var ft = dt(ut(Object(ke.c)(xt))),
				gt = s("./src/reddit/helpers/search/hasSearchGrammar.ts");

			function yt() {
				return (yt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var vt = e => r.a.createElement("svg", yt({
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 6 50 43"
				}, e), r.a.createElement("path", {
					d: "M38.89 17.7a3.37 3.37 0 0 1-3-.49 17.79 17.79 0 0 0-7.63-2.81 17.34 17.34 0 0 0-4.26-.07 48.12 48.12 0 0 0-5.83 1.38 26.66 26.66 0 0 0-3.08 1.53 2.24 2.24 0 0 1-1.34.23c-4.27-1.06-7.54.28-10 4-2.09 3.17-.74 8 1.58 9.76a2.39 2.39 0 0 1 .91 1.53 12.18 12.18 0 0 0 5 8.87c.16.13.33.24.49.35a25.65 25.65 0 0 0 5.52 2.81A24 24 0 0 0 25.61 46c2.74-.09 5.49-.1 8.06-1.18a22.6 22.6 0 0 0 6.25-4c2.21-2.67 4.31-5.45 4.62-9a11.29 11.29 0 0 1 1.64-4.91 4.66 4.66 0 0 0 .54-1.58c.79-4.74-3.49-9.23-7.83-7.63z"
				}), r.a.createElement("path", {
					fill: "#fff",
					d: "M41.17 18.88a12.74 12.74 0 0 0-2.48 0c1.76 2.1 3.33 3.86 4 6.23-4-5.95-9.64-9.32-16.71-9.37A19.14 19.14 0 0 0 9 24.76c-.17-.53-.51-1-.38-1.3a9.3 9.3 0 0 1 4.18-4.51c-3-1.13-6.34.54-8 3.85-1.29 2.58-.52 6.08 1.74 7.5a18.14 18.14 0 0 1 .55-2.24 15.39 15.39 0 0 1 1-1.9.86.86 0 0 1 .07.69 12.41 12.41 0 0 0 .4 8.24 11.06 11.06 0 0 0 3.82 5.31c7.18 5.27 17.21 6.56 25.28.91a13.72 13.72 0 0 0 5.74-10.45c.1-1.13.1-2.26.15-3.4l.3.27c.44-.29 1.12-.49 1.3-.9a6.06 6.06 0 0 0-3.98-7.95z"
				}), r.a.createElement("path", {
					d: "M32 37c-2.43-2.06-9.28-2.47-11.58.17-.55.63-1.87.06-.9-.76 3.77-3.18 9.79-3.13 12.76-.43.79.73.3 1.53-.28 1.02zM19.83 24.64a4.94 4.94 0 0 0-4-.8h-.07l-.17.06a2.72 2.72 0 0 0-.9.42v.1c-1.42 1.15-2.26 3.53-1.09 5.16a2.38 2.38 0 0 0 1.82.9 10.49 10.49 0 0 0 2 0 6.32 6.32 0 0 0 2.53-.74c.81-.38 1.16-.67 1.2-1.51a5.3 5.3 0 0 0-1.32-3.59zM37.58 25.53a4.65 4.65 0 0 0-4.51-1.76.37.37 0 0 0-.15 0h-.06l-.29.06c-.14 0-.16.1-.12.16a3.83 3.83 0 0 0-1.08 5.22 2.24 2.24 0 0 0 1.84.93 10.6 10.6 0 0 1 2.55.48 2.4 2.4 0 0 0 1.2.08c.9-.11 1.26-1.56 1.36-2.31a4.18 4.18 0 0 0-.74-2.86z"
				}), r.a.createElement("path", {
					fill: "#ff4500",
					d: "M17.34 29.52a10 10 0 0 1-1 .12c-1 .09-1.46.05-1.76-.84a2.88 2.88 0 0 1 1.82-3.64l.31-.08a2.62 2.62 0 0 1 3.14 2.67c0 1.92-1.53 1.6-2.51 1.77zM37 28.88c-.29 1.13-1.17 1.09-2.1.82a3.83 3.83 0 0 0-1.06-.15 1.61 1.61 0 0 1-1.77-1.5 2.62 2.62 0 0 1 1.55-3.11A3 3 0 0 1 37 27.11a3.24 3.24 0 0 1 0 1.77z"
				}), r.a.createElement("path", {
					d: "M26.55 9.48a2.79 2.79 0 0 0-2.42-1.7c-3.48-.29-6.76 1.65-8.87 3.32l-.34-.23a3.23 3.23 0 0 0-1.06-.58l-.45-.1a2.06 2.06 0 0 0-1 .1 3 3 0 0 0-1.41.54s-.37.31-.46.41A4.09 4.09 0 0 0 9.52 15a3 3 0 0 0 2.37 2.09 4 4 0 0 0 .87.1 3.42 3.42 0 0 0 2.76-1.35 3.8 3.8 0 0 0 .61-3.12 2.92 2.92 0 0 0-.21-.63h.05l.15-.13A16.39 16.39 0 0 1 21 9.17c2-.72 3.55-.32 4.22 1a4.15 4.15 0 0 1-.42 3.93.37.37 0 0 0 0 .36c.14.27.57.34.79.34a.57.57 0 0 0 .51-.22 5.9 5.9 0 0 0 .45-5.1z"
				}), r.a.createElement("path", {
					fill: "#fff",
					d: "M10.82 13.06a2.9 2.9 0 0 1 2.4-1.66 1.79 1.79 0 0 1 .87.22 3.13 3.13 0 0 1 .2.3v.09a5.83 5.83 0 0 1 .53 1.38 2.58 2.58 0 0 1-.55 2 2.16 2.16 0 0 1-1.67 1 2.21 2.21 0 0 1-1.76-1.17 2.07 2.07 0 0 1-.02-2.16z"
				}), r.a.createElement("path", {
					fill: "#0079d3",
					d: "M14.53 29.43h-.05a3.3 3.3 0 0 0-3.27.77 1.49 1.49 0 0 0-.37 1.54c.19.53.93.65 1.4.73 1.34.21 3 .31 3.91-.84a1.46 1.46 0 0 0 .2-1.63c-.21-.43-1.4-.53-1.82-.57zM38.77 31.39c-.35-1-1.73-1.25-2.64-1.32H36a1.21 1.21 0 0 0-1.36 1.57c.08.39.83.8 1.15 1a4.16 4.16 0 0 0 1.62.42 1.41 1.41 0 0 0 1.24-.33 1.35 1.35 0 0 0 .12-1.34z"
				}), r.a.createElement("path", {
					fill: "#91cff6",
					d: "M13.26 32.13c-.66-.07-1.43-.15-1.52-.94-.13-1.06 1.26-1.64 2.08-1.4h.08a.57.57 0 0 0 .18 0c.66.06 1.42.17 1.45.94.04 1.27-1.39 1.49-2.27 1.4zM37.63 32.57c-.32.37-1.33-.25-1.59-.45a1 1 0 0 1-.46-.74c0-.18.17-1 .49-.88a.79.79 0 0 0 .41 0 1.6 1.6 0 0 1 1.27.71 1.16 1.16 0 0 1-.12 1.36z"
				})),
				Ot = s("./src/reddit/components/SearchResultsContent/NoResults/index.m.less"),
				Ct = s.n(Ot);
			const {
				fbt: Et
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var jt;
			! function(e) {
				e.Category = "category", e.Communities = "communities", e.Posts = "posts"
			}(jt || (jt = {}));
			var _t = e => {
					if (Object(gt.a)(e.query)) return null;
					let t = Et._("Sorry, there were no results for {=“ [search query] ”}", [Et._param("=“ [search query] ”", r.a.createElement("span", {
						className: Ct.a.semiBold
					}, Et._("“ {search query} ”", [Et._param("search query", e.query)], {
						hk: "1VMw0P"
					})))], {
						hk: "4eAu8m"
					});
					return e.type === jt.Category ? t = Et._("Sorry, there were no results for the category {=“ [search query] ”}", [Et._param("=“ [search query] ”", r.a.createElement("span", {
						className: Ct.a.semiBold
					}, Et._("“ {search query} ”", [Et._param("search query", e.query)], {
						hk: "2vXsw0"
					})))], {
						hk: "42nr3u"
					}) : e.type === jt.Communities ? t = Et._("Sorry, there were no community results for {=“ [search query] ”}", [Et._param("=“ [search query] ”", r.a.createElement("span", {
						className: Ct.a.semiBold
					}, Et._("“ {search query} ”", [Et._param("search query", e.query)], {
						hk: "41Nh2l"
					})))], {
						hk: "ztoCJ"
					}) : e.type === jt.Posts && (t = Et._("Sorry, there were no post results for {=“ [search query] ”}", [Et._param("=“ [search query] ”", r.a.createElement("span", {
						className: Ct.a.semiBold
					}, Et._("“ {search query} ”", [Et._param("search query", e.query)], {
						hk: "2n8mO1"
					})))], {
						hk: "3fsKtO"
					})), r.a.createElement("div", {
						className: Ct.a.noResults
					}, r.a.createElement(vt, {
						className: Ct.a.icon
					}), r.a.createElement("div", {
						className: Ct.a.text
					}, t))
				},
				kt = s("./src/reddit/components/PostList/index.tsx"),
				Pt = s("./src/reddit/components/ClassicPost/index.tsx"),
				St = s("./src/reddit/constants/postLayout.ts"),
				wt = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				It = s("./src/reddit/helpers/trackers/post.ts"),
				Nt = s("./src/reddit/selectors/posts.ts"),
				Tt = s("./src/reddit/connectors/PostList/index.ts");
			const Mt = Object(Tt.c)(),
				Lt = Object(a.c)(Object.assign({}, Tt.d, {
					layout: () => St.g.Classic,
					viewportDataLoaded: Qe.a,
					postIds: (e, t) => {
						let {
							heroPostId: s,
							listingKey: n,
							listingName: r,
							inSubredditOrProfile: o,
							postOrder: a
						} = t;
						if (a && a.length > 0) {
							if (s) {
								const t = a.indexOf(s);
								if (t > -1) return a.splice(t, 1), Object(Nt.db)(e, a)
							}
							return Object(Nt.db)(e, a)
						}
						const {
							models: i
						} = e.posts;
						return Object(Nt.K)(e, n, r, !!o).filter(e => i && i[e] && !i[e].isSponsored)
					}
				})),
				Rt = Object(o.b)(Lt, (e, t) => Object.assign({}, Object(Tt.b)(e, t), {
					trackOnPostEnteredViewport: e => {
						t.sendEvent(Object(ve.h)(t.listingKey, e, Object.assign({}, t.searchOptions, {
							id: e,
							eventType: "post"
						}), Ae(t)))
					}
				}), (e, t, s) => Object.assign({}, e, t, s, {
					openPost: e => t.openPost(e),
					postClickEvent: (e, t) => ("body" === t ? s.sendEvent(Object(ve.g)(s.listingKey, e, Object.assign({}, s.searchOptions, {
						id: e,
						eventType: "post"
					}), Ae(s))) : "subreddit" === t ? s.sendEvent(Object(ve.j)(Object.assign({}, s.searchOptions, {
						id: e,
						eventType: "subreddit"
					}), Ae(s))) : "comments" === t && function(e, t) {
						let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "post";
						e(e => Object.assign({}, Object(ve.c)(e, t), {
							action: "click",
							noun: s,
							source: "search_results"
						}))
					}(s.sendEvent, s.searchOptions, "comments"), Object(It.f)(e, t)),
					postComponentForLayout: e => {
						let {
							post: t
						} = e;
						return t.isBlank ? wt.a : Pt.SearchResultsClassicPost
					}
				}));
			var Ft = (e => Object(ke.c)(Mt(Rt(e))))(kt.a),
				At = (s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/react-router-dom/esm/react-router-dom.js")),
				Bt = s("./src/lib/lessComponent.tsx"),
				Dt = s("./node_modules/lodash/fromPairs.js"),
				Ut = s.n(Dt),
				Wt = s("./src/higherOrderComponents/asTooltip.tsx"),
				Vt = s("./src/lib/extractQueryParams/index.ts"),
				Ht = s("./src/reddit/controls/Dropdown/index.tsx"),
				qt = s("./src/reddit/controls/Dropdown/Row.tsx"),
				zt = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				Kt = s("./src/reddit/components/SearchResultsSubNav/Select.m.less"),
				Gt = s.n(Kt);

			function Jt() {
				return (Jt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var Qt = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const Xt = Object(Wt.a)(Bt.a.wrapped(Ht.a, "Component", Gt.a)),
				Yt = Bt.a.div("Title", Gt.a),
				Zt = Bt.a.wrapped(zt.b, "DropdownTriangle", Gt.a),
				$t = Bt.a.div("Wrapper", Gt.a),
				es = Bt.a.wrapped(e => {
					var {
						isOpen: t
					} = e, s = Qt(e, ["isOpen"]);
					return r.a.createElement("div", Jt({
						className: Object(N.a)(Gt.a.ValueWrapper, {
							[Gt.a.mIsOpen]: !!t
						})
					}, s))
				}, "ValueWrapper", Gt.a),
				ts = Bt.a.wrapped(qt.b, "SelectOption", Gt.a),
				ss = (e, t, s, n) => () => e(e => Object.assign({}, Object(ve.c)(e), {
					source: "search",
					action: "click",
					noun: t,
					correlationId: Object(ye.c)(ye.a.SearchResults),
					actionInfo: Oe.actionInfo(e),
					search: Oe.search(e, ns(s, n))
				})),
				ns = (e, t) => {
					const s = Ut()([...Object(Vt.a)(e)]);
					return Object(i.Yb)(s.sort) && (t.sort = s.sort), Object(i.Yb)(s.t) && (t.t = s.t), t
				},
				rs = Object(a.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(J.b)(s)(e)
					}
				}),
				os = Object(o.b)(rs, (e, t) => ({
					onClose: () => e(Object(w.i)()),
					onOpen: () => e(Object(w.f)({
						tooltipId: t.tooltipId
					}))
				}), (e, t, s) => Object.assign({}, e, s, {
					onToggle: e.isOpen ? t.onClose : t.onOpen
				}));
			var as = Object(ke.c)(os(e => r.a.createElement($t, {
					className: e.className,
					onClick: e.onToggle
				}, r.a.createElement(Yt, null, e.label), r.a.createElement(es, {
					id: e.tooltipId
				}, e.optionLabels[e.value], r.a.createElement(Zt, null), r.a.createElement(Xt, {
					isOpen: !!e.isOpen,
					tooltipId: e.tooltipId
				}, e.options.map(t => r.a.createElement(At.a, {
					key: t,
					to: t,
					onClick: ss(e.sendEvent, "full_search_filter_changed", t, e.searchOptions)
				}, r.a.createElement(ts, {
					className: Object(N.a)({
						[Gt.a.mIsSelected]: t === e.value
					}),
					displayText: e.optionLabels[t],
					isSelected: t === e.value
				})))))))),
				is = s("./src/reddit/controls/Button/index.tsx"),
				cs = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				ds = s("./src/reddit/constants/page.ts"),
				ls = s("./src/reddit/constants/parameters.ts");
			s("./node_modules/core-js/modules/es6.regexp.replace.js");

			function ms(e, t) {
				let s = "/search",
					n = "",
					r = e && e[ls.o] || "";
				t ? (r = r.replace("flair:", "flair_name:"), s = "/r/".concat(t, "/search"), n = "1") : r = r.replace("flair_name:", "flair:");
				const o = Object(he.a)(s, {
					[ls.o]: r,
					[ls.p]: n
				});
				return Object(d.c)(o, r, {
					[ls.p]: n
				})
			}
			var ps = s("./src/reddit/layout/row/Inline/index.tsx"),
				us = s("./src/reddit/components/SearchResultsSubNav/index.m.less"),
				bs = s.n(us),
				hs = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};
			const xs = [i.Ib.Relevance, i.Ib.Hot, i.Ib.Top, i.Ib.New, i.Ib.Comments],
				fs = {
					[i.Ib.Hot]: () => l.fbt._("Hot", null, {
						hk: "3c99Ga"
					}),
					[i.Ib.Relevance]: () => l.fbt._("Relevance", null, {
						hk: "LvJkD"
					}),
					[i.Ib.Top]: () => l.fbt._("Top", null, {
						hk: "bijGV"
					}),
					[i.Ib.New]: () => l.fbt._("New", null, {
						hk: "23egpt"
					}),
					[i.Ib.Comments]: () => l.fbt._("Comments", null, {
						hk: "3s76RE"
					})
				},
				gs = [i.Pb.HOUR, i.Pb.DAY, i.Pb.WEEK, i.Pb.MONTH, i.Pb.YEAR, i.Pb.ALL],
				ys = {
					[i.Pb.HOUR]: () => l.fbt._("Past Hour", null, {
						hk: "4qCarL"
					}),
					[i.Pb.DAY]: () => l.fbt._("Past 24 Hours", null, {
						hk: "GI5qN"
					}),
					[i.Pb.WEEK]: () => l.fbt._("Past Week", null, {
						hk: "3jQHYQ"
					}),
					[i.Pb.MONTH]: () => l.fbt._("Past Month", null, {
						hk: "11eVJy"
					}),
					[i.Pb.YEAR]: () => l.fbt._("Past Year", null, {
						hk: "38MavC"
					}),
					[i.Pb.ALL]: () => l.fbt._("All Time", null, {
						hk: "2buTB7"
					})
				},
				vs = Bt.a.wrapped(as, "LeftSelect", bs.a),
				Os = Bt.a.wrapped(cs.a, "ArrowRight", bs.a),
				Cs = Bt.a.wrapped(is.n, "TertiaryButton", bs.a),
				Es = Bt.a.wrapped(Cs, "AllRedditResultsButton", bs.a),
				js = Object(Te.t)({
					queryParams: Te.S,
					url: Te.X
				}),
				_s = Object(a.c)({
					subreddit: k.z,
					shouldSeeNSFW: De.V
				}),
				ks = Object(o.b)(_s),
				Ps = e => {
					const t = e.queryParams && e.queryParams[ls.o] || "",
						s = Object(d.b)(t),
						n = e.queryParams && e.queryParams[ls.r],
						o = {};
					let a = Object(d.c)(e.url || "", s, {
						[ls.r]: i.Ab
					});
					const c = [];
					for (const r of xs) {
						const t = Object(d.c)(e.url || "", s, {
							sort: r
						});
						o[t] = fs[r](), c.push(t), n === r && (a = t)
					}
					return r.a.createElement(vs, {
						label: l.fbt._("Sort By", null, {
							hk: "4Dbt40"
						}),
						options: c,
						optionLabels: o,
						tooltipId: "search-results-sort",
						value: a,
						searchOptions: e.searchOptions
					})
				},
				Ss = e => {
					const t = e.queryParams && e.queryParams[ls.o] || "",
						s = Object(d.b)(t),
						n = e.queryParams && e.queryParams[ls.t],
						o = {};
					let a = Object(d.c)(e.url || "", s, {
						[ls.t]: i.Bb
					});
					const c = [];
					for (const r of gs) {
						const t = Object(d.c)(e.url || "", s, {
							[ls.t]: r
						});
						o[t] = ys[r](), c.push(t), n === r && (a = t)
					}
					const m = e.tab === ds.g.Listings ? l.fbt._("Communities From", null, {
						hk: "1oVrVu"
					}) : l.fbt._("Posts From", null, {
						hk: "1abcgn"
					});
					return r.a.createElement(vs, {
						label: m,
						options: c,
						optionLabels: o,
						tooltipId: "search-results-time",
						value: a,
						searchOptions: e.searchOptions
					})
				};
			class ws extends r.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						this.props.sendEvent(e => Object.assign({}, Object(ve.c)(e, this.props.searchOptions), {
							action: "click",
							noun: "unrestrict_to_subreddit",
							source: "search_results"
						}))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return r.a.createElement(At.a, {
						to: ms(e.queryParams)
					}, r.a.createElement(Es, {
						onClick: this.onClick,
						"data-redditstyle": !0
					}, l.fbt._("All reddit results", null, {
						hk: "2IBCsX"
					}), r.a.createElement(Os, null)))
				}
			}
			var Is = Bt.a.wrapped(js(ks(Object(ke.c)(e => {
					var {
						className: t
					} = e, s = hs(e, ["className"]);
					return r.a.createElement(ps.a, {
						className: t
					}, r.a.createElement(Ps, s), s.searchOptions && s.searchOptions.sort !== i.M.NEW && r.a.createElement(Ss, s), s.subreddit && !!s.searchOptions.restrict_sr && !s.shouldHideGlobalSearchLink && r.a.createElement(ws, s))
				}))), "Component", bs.a),
				Ns = (s("./node_modules/core-js/modules/es6.regexp.search.js"), s("./node_modules/node-libs-browser/node_modules/url/url.js")),
				Ts = s.n(Ns),
				Ms = s("./src/reddit/components/ThemeProvider/index.tsx"),
				Ls = s("./src/reddit/components/SearchSwitcher/index.m.less"),
				Rs = s.n(Ls);
			const {
				fbt: Fs
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class As extends r.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const {
							searchOptions: e,
							sendEvent: t,
							subreddit: s
						} = this.props;
						t(Object(ve.o)(!!s, e))
					}
				}
				render() {
					const {
						subreddit: e,
						url: t
					} = this.props, s = {
						[Rs.a.mSr]: !!e
					}, {
						pathname: n,
						search: o
					} = Ts.a.parse(t), a = e ? i.Jb.ToSubreddit : i.Jb.ToGlobal, c = e ? r.a.createElement(r.a.Fragment, null, r.a.createElement("span", null, Fs._("Show results from", null, {
						hk: "3aVDvz"
					})), r.a.createElement(Se.b, {
						className: Rs.a.subredditIcon,
						subredditOrProfile: e
					}), r.a.createElement("p", {
						className: Object(N.a)(Rs.a.searchSwitcherText, s)
					}, e.displayText)) : r.a.createElement(r.a.Fragment, null, Fs._("{=Show results from}{=all of Reddit}", [Fs._param("=Show results from", r.a.createElement("span", null, Fs._("Show results from", null, {
						hk: "4l8fSw"
					}))), Fs._param("=all of Reddit", r.a.createElement("p", {
						className: Object(N.a)(Rs.a.searchSwitcherText, s)
					}, Fs._("all of Reddit", null, {
						hk: "rc9dH"
					})))], {
						hk: "2NDUqb"
					}));
					return r.a.createElement(Ie.a, {
						className: Object(N.a)(Rs.a.searchSwitcher, s),
						onClick: this.onClick,
						to: {
							pathname: n,
							search: o,
							state: {
								searchSwitcherType: a
							}
						}
					}, c, r.a.createElement(cs.a, {
						className: Object(N.a)(Rs.a.arrowIcon, s)
					}))
				}
			}
			var Bs = Object(ke.c)(e => e.subreddit ? r.a.createElement(Ms.b, {
					subredditName: e.subreddit.name
				}, r.a.createElement(As, e)) : r.a.createElement(As, e)),
				Ds = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/BestResults.m.less"),
				Us = s.n(Ds);
			const Ws = Bt.a.div("Spacer", Us.a),
				Vs = () => null,
				Hs = Object(Te.t)({
					pageLayer: e => e,
					queryParams: Te.S
				}),
				qs = Object(a.c)({
					fromSubreddit: (e, t) => {
						const s = Re(e, t);
						return s ? Object(k.z)(e, {
							subredditName: s
						}) : null
					},
					shouldShowGlobalSearchSwitcher: Be
				});
			var zs = Hs(Object(o.b)(qs)(e => {
					const {
						hasCommunityResults: t,
						hasPostResults: s,
						fromSubreddit: n,
						listingKey: o,
						listingName: a,
						morePostsRequested: i,
						onViewed: c,
						postsDiscoveryUnit: l,
						searchOptions: m,
						shouldShowGlobalSearchSwitcher: p,
						subredditsDiscoveryUnit: u,
						tab: b,
						queryParams: h
					} = e, x = Object(d.a)(m[ls.b]), f = m.category, g = m.is_multi, y = !m.restrict_sr && !f && !x, v = l && f && x, O = u && f && x, C = t && !Object(gt.a)(m.q) && !m.category;
					return r.a.createElement(r.a.Fragment, null, p && n && r.a.createElement(Bs, {
						searchOptions: m,
						subreddit: n,
						url: ms(h, n.name)
					}), y && r.a.createElement(Ws, {
						key: "subNav"
					}, r.a.createElement(Is, {
						searchOptions: m,
						subredditName: a,
						tab: b
					})), O && r.a.createElement(ce, {
						key: "subredditsDiscoveryUnit",
						categoryId: f,
						categoryName: x,
						discoveryUnit: u
					}), v && r.a.createElement(E, {
						key: "postsDiscoveryUnit",
						categoryId: f,
						category: x,
						discoveryUnit: l
					}), C ? r.a.createElement(Ws, {
						key: "communitiesPreview"
					}, r.a.createElement(ft, {
						listingKey: o,
						preview: !0,
						searchOptions: m
					})) : !g && !f && r.a.createElement(_t, {
						query: Object(d.a)(m.q || ""),
						type: jt.Communities
					}), s ? r.a.createElement(Ft, {
						key: "posts",
						listingKey: o,
						listingName: a,
						listingViewed: c,
						inSubredditOrProfile: !1,
						noPostsComponent: Vs,
						onLoadMore: i,
						searchOptions: m
					}) : r.a.createElement(_t, {
						query: Object(d.a)(m.q || ""),
						type: f ? void 0 : jt.Posts
					}))
				})),
				Ks = e => {
					const {
						hasCommunityResults: t,
						listingKey: s,
						listingName: n,
						searchOptions: o,
						tab: a
					} = e, i = !o.is_multi && !o.category;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(Is, {
						key: "subNav",
						searchOptions: o,
						subredditName: n,
						tab: a
					}), t && !Object(gt.a)(o.q) ? r.a.createElement(ft, {
						key: "communitiesPreview",
						listingKey: s,
						searchOptions: o
					}) : !i && r.a.createElement(_t, {
						query: Object(d.a)(o.q || ""),
						type: jt.Communities
					}))
				};
			const Gs = () => null,
				Js = Object(Te.t)({
					pageLayer: e => e,
					queryParams: Te.S
				}),
				Qs = Object(a.c)({
					shouldShowSrSearchSwitcher: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(Te.L)(s)
					}
				});
			var Xs = Js(Object(o.b)(Qs)(e => {
					const {
						hasPostResults: t,
						listingKey: s,
						listingName: n,
						location: o,
						morePostsRequested: a,
						onViewed: i,
						searchOptions: c,
						shouldShowSrSearchSwitcher: l,
						tab: m,
						queryParams: p
					} = e, u = Object(d.a)(c[ls.b]), b = c.category, h = !b && !u;
					return r.a.createElement(r.a.Fragment, null, l && r.a.createElement(Bs, {
						searchOptions: c,
						url: ms(p)
					}), h && r.a.createElement(Is, {
						key: "subNav",
						searchOptions: c,
						shouldHideGlobalSearchLink: l,
						subredditName: n,
						tab: m
					}), t ? r.a.createElement(Ft, {
						key: "posts",
						listingKey: s,
						listingName: n,
						listingViewed: i,
						location: o,
						inSubredditOrProfile: !1,
						noPostsComponent: Gs,
						onLoadMore: a,
						searchOptions: c
					}) : r.a.createElement(_t, {
						query: u,
						type: b && u ? jt.Category : jt.Posts
					}))
				})),
				Ys = s("./src/config.ts"),
				Zs = s("./src/lib/intersectionObserver/index.ts"),
				$s = s("./src/lib/isUrl/index.ts"),
				en = s("./src/lib/objectSelector/index.ts"),
				tn = s("./src/lib/opener/index.ts"),
				sn = s("./src/reddit/actions/post.ts"),
				nn = s("./src/reddit/components/BlankPost/index.tsx"),
				rn = s("./src/reddit/components/Media/index.tsx"),
				on = s("./src/reddit/components/PostContainer/index.tsx"),
				an = s("./src/reddit/components/Thumbnail/index.tsx"),
				cn = s("./src/reddit/connectors/PostViewable/index.ts"),
				dn = s("./src/reddit/constants/adEvents.ts"),
				ln = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				mn = s("./src/reddit/helpers/overlay/index.ts"),
				pn = s("./src/reddit/models/Media/index.ts"),
				un = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				bn = s("./src/reddit/components/PostTitle/index.tsx"),
				hn = s("./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx"),
				xn = s("./src/reddit/components/RichTextJson/index.tsx"),
				fn = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				gn = s("./src/reddit/components/SearchDiscoveryUnits/HeroUnit/CommentMeta.m.less"),
				yn = s.n(gn),
				vn = e => r.a.createElement(ps.a, {
					className: Object(N.a)(yn.a.commentMeta, e.className)
				}, r.a.createElement(ps.a, {
					className: yn.a.postedInfo
				}, r.a.createElement(fn.a, {
					collapsedBecauseCrowdControl: !1,
					collapsed: !1,
					comment: e.comment,
					flair: e.flair,
					language: e.language,
					renderedInOverlay: !1
				}))),
				On = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				Cn = s("./src/reddit/selectors/comments.ts"),
				En = s("./src/reddit/components/SearchDiscoveryUnits/HeroUnit/UnthreadedComment.m.less"),
				jn = s.n(En);
			const _n = Object(a.c)({
					comment: (e, t) => Object(Cn.n)(e, t),
					flair: Cn.e,
					language: De.Q,
					subreddit: k.H
				}),
				kn = Object(o.b)(_n),
				Pn = Object(en.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			var Sn = kn(e => {
					const {
						className: t,
						comment: s,
						flair: n,
						language: o,
						subreddit: a
					} = e;
					return r.a.createElement(hn.a, {
						className: Object(N.a)(jn.a.container, t),
						clickTrackingId: s.id,
						permalink: s.permalink
					}, r.a.createElement("div", null, r.a.createElement(vn, {
						comment: s,
						flair: n,
						language: o,
						subredditName: a ? a.displayText : null
					}), r.a.createElement("div", {
						className: jn.a.commentContentWrapper
					}, r.a.createElement("div", {
						className: jn.a.commentBody
					}, r.a.createElement(xn.a, {
						content: Object(On.a)(s),
						rtJsonElementProps: Pn(e)
					})))))
				}),
				wn = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				In = s("./src/lib/timeAgo/index.ts"),
				Nn = s("./src/reddit/components/PostBadges/index.tsx"),
				Tn = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				Mn = s("./src/reddit/controls/MetaData/index.tsx"),
				Ln = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				Rn = s("./src/reddit/helpers/name/index.ts"),
				Fn = s("./src/reddit/components/SearchDiscoveryUnits/index.m.less"),
				An = s.n(Fn),
				Bn = e => {
					const {
						className: t,
						language: s,
						post: n,
						subredditOrProfile: o
					} = e, {
						isSponsored: a,
						author: i
					} = n;
					return r.a.createElement("div", {
						className: Object(N.a)(t, An.a.metadataContainer)
					}, !a && o && r.a.createElement(r.a.Fragment, null, r.a.createElement(Se.b, {
						className: An.a.postIcon,
						subredditOrProfile: o
					}), r.a.createElement(Tn.a, {
						"data-click-id": "subreddit",
						to: o.url
					}, o.displayText)), a && r.a.createElement(r.a.Fragment, null, r.a.createElement(Se.b, {
						className: An.a.postIcon,
						subredditOrProfile: o
					}), Object(Rn.c)(i)), r.a.createElement(un.e, {
						post: n
					}), r.a.createElement(Ln.b, {
						className: An.a.metaSeparator
					}), Object(In.d)(s, n.created / 1e3), !a && r.a.createElement(r.a.Fragment, null, r.a.createElement(Ln.b, {
						className: An.a.metaSeparator
					}), r.a.createElement(Mn.b, {
						isScoreHidden: n.isScoreHidden,
						language: s,
						score: n.score
					})), a && o && r.a.createElement(Nn.a, {
						className: An.a.postBadges,
						displayText: o.displayText,
						inSubredditOrProfile: !1,
						language: s,
						post: n
					}))
				},
				Dn = s("./src/reddit/components/ClassicPost/index.m.less"),
				Un = s.n(Dn),
				Wn = s("./src/reddit/components/SearchDiscoveryUnits/HeroUnit/index.m.less"),
				Vn = s.n(Wn);
			const {
				fbt: Hn
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var qn = e => {
					let {
						language: t,
						mainContent: s,
						post: n,
						previewText: o,
						searchDiscoveryUnit: a,
						subredditOrProfile: i
					} = e;
					const c = {
						inSubredditOrProfile: !0,
						language: t,
						post: n,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: i
					};
					return r.a.createElement("div", {
						className: Un.a.mainBody,
						"data-click-id": "body"
					}, s, r.a.createElement("div", {
						className: Vn.a.innerContainer
					}, r.a.createElement(Bn, c), r.a.createElement(bn.c, {
						className: Vn.a.postTitle,
						isOverlay: !1,
						post: n,
						size: bn.b.Medium
					}), o, r.a.createElement("div", {
						className: Vn.a.numComments
					}, r.a.createElement(wn.a, {
						className: Object(N.a)(Vn.a.icon, Vn.a.commentIcon)
					}), Hn._({
						"*": "{Comments count} Comments",
						_1: "1 Comment"
					}, [Hn._plural(n.numComments, "Comments count")], {
						hk: "1EFnt0"
					})), r.a.createElement(un.d, {
						postId: n.id
					}), r.a.createElement("div", {
						className: Vn.a.commentWrapper
					}, a.commentOrder && a.commentOrder.map(e => r.a.createElement(Sn, {
						commentId: e,
						key: e
					}))), r.a.createElement("div", {
						className: Vn.a.seeFullPost
					}, Hn._("See full post", null, {
						hk: "SntP8"
					}), r.a.createElement(cs.a, {
						className: Vn.a.arrowIcon
					}))))
				},
				zn = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				Kn = s("./src/reddit/components/CallToActionButton/index.tsx"),
				Gn = s("./src/reddit/controls/OutboundLink/index.tsx"),
				Jn = s("./src/reddit/components/SearchDiscoveryUnits/HeroUnit/PromotedHeroUnit/index.m.less"),
				Qn = s.n(Jn);
			var Xn = e => {
				let {
					header: t,
					language: s,
					mainContent: n,
					post: o,
					subredditOrProfile: a
				} = e;
				const i = {
					inSubredditOrProfile: !0,
					language: s,
					post: o,
					shouldShowSubscribeButton: !1,
					subredditOrProfile: a
				};
				return r.a.createElement("div", {
					className: Object(N.a)(Un.a.mainBody, Un.a.promotedMainBody),
					"data-click-id": "body"
				}, n, r.a.createElement("div", {
					className: Qn.a.innerContainer
				}, r.a.createElement(Bn, i), r.a.createElement(bn.c, {
					className: Qn.a.postTitle,
					isOverlay: !1,
					post: o,
					size: bn.b.Large
				}), !(!o.source || !o.source.url) && r.a.createElement(zn.a, {
					className: Qn.a.adLinkWrapper
				}, r.a.createElement(Gn.a, {
					className: Qn.a.outboundLink,
					href: o.source.url.replace(Ys.a.redditUrl, ""),
					isSponsored: o.isSponsored,
					postId: o.id,
					source: o.source
				}, o.source.displayText), o.callToAction && r.a.createElement(Kn.a, {
					className: Qn.a.callToAction,
					href: o.source.url.replace(Ys.a.redditUrl, ""),
					isSponsored: o.isSponsored,
					postId: o.id,
					source: o.source
				}, o.callToAction)), r.a.createElement(un.d, {
					postId: o.id
				})), r.a.createElement("hr", null), t)
			};
			const {
				fbt: Yn
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Zn = "".concat(Ys.a.assetPath, "/img/link-placeholder.png"), $n = (e, t) => t && t.length ? Object(Nt.O)(e, {
				postId: t[0]
			}) : void 0, er = {
				fireAdPixelsOfType: sn.B,
				openLightbox: e => Object(mn.a)(e.permalink)
			};
			class tr extends r.a.Component {
				constructor() {
					super(...arguments), this.ref = null, this.scrollerItemRef = null, this.setRef = e => {
						this.ref = e
					}, this.scrollerItemRefFn = e => {
						this.scrollerItemRef = e && this.isVideo() && this.isSponsored() ? e : null
					}, this.onClickMedia = e => {
						this.isSponsored() && this.isVideo() || this.onClickPost(e)
					}, this.onClickPost = e => {
						e.stopPropagation(), e.preventDefault();
						const {
							post: t
						} = this.props;
						t && (this.props.sendEvent(Object(ve.k)(t.id, "search_result_post", this.props.searchOptions, this.props.searchDiscoveryUnit)), t.isSponsored ? (this.props.fireAdPixelsOfType(t, dn.a.Click), t.source ? t.source.outboundUrl ? Object(tn.d)(t.source.outboundUrl, tn.c.BLANK) : Object(tn.d)(t.source.url, tn.c.BLANK) : Object(tn.d)(t.permalink, tn.c.BLANK)) : this.props.openLightbox(t))
					}
				}
				componentDidMount() {
					this.ref && Zs.a(this.ref, (e, t) => {
						this.scrollerItemRef && (t ? this.scrollerItemRef.focusContent() : this.scrollerItemRef.pauseContent())
					}), Object(ve.e)(this.props.listingKey, this.props.searchOptions, this.props.searchDiscoveryUnit)
				}
				componentWillUnmount() {
					this.ref && Zs.b(this.ref), this.scrollerItemRef && this.scrollerItemRef.stopContent(), this.ref = null, this.scrollerItemRef = null
				}
				isSponsored() {
					return !!this.props.post && this.props.post.isSponsored
				}
				isVideo() {
					const {
						crosspostRoot: e,
						post: t
					} = this.props;
					if (t) {
						const {
							media: s
						} = e || t;
						return !!s && (s.type === pn.n.VIDEO || s.type === pn.n.GIFVIDEO)
					}
					return !1
				}
				render() {
					const {
						pixelPostHasEnteredView: e,
						pixelPostHasExitedView: t,
						autoplayPref: s,
						crosspostRoot: n,
						eventFactory: o,
						language: a,
						post: i,
						onPostViewable: c,
						searchDiscoveryUnit: d,
						subredditOrProfile: l
					} = this.props;
					if (!i) return null;
					if (i.isBlank) return r.a.createElement(nn.BlankPost, {
						pixelPostHasEnteredView: e,
						pixelPostHasExitedView: t,
						onPostViewable: c,
						post: i
					});
					const {
						media: m
					} = n || i, p = i.isSponsored ? Qn.a : Vn.a, u = i.isSponsored ? Xn : qn, h = m && r.a.createElement("div", {
						onClickCapture: e => this.onClickMedia(e),
						ref: this.setRef
					}, r.a.createElement(rn.a, {
						autoplayPref: s,
						isListing: !1,
						isMiniCard: !i.isSponsored,
						isNotCardView: !1,
						isPromotedTrend: i.isSponsored,
						post: n || i,
						primaryContent: i.isSponsored,
						scrollerItemRef: this.scrollerItemRefFn,
						shouldLoad: !0,
						shouldPause: !0,
						showCentered: !1,
						showFull: i.isSponsored
					}));
					let f = r.a.createElement("div", {
						className: p.flexSpacer
					});
					const g = !!i.source && Object($s.a)(i.source.url) || !!i.thumbnail && Object($s.a)(i.thumbnail.url);
					let y;
					if (!m && g) f = r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: p.mediaWrapper
					}, r.a.createElement(an.a, {
						className: p.thumbnail,
						post: i,
						templatePlaceholderImage: Zn,
						usePreview: !0
					})));
					else if (m && h)
						if (m.type !== pn.n.RTJSON && m.type !== pn.n.TEXT) f = r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
							className: p.mediaWrapper
						}, h));
						else {
							f = r.a.createElement("div", {
								className: p.mediaPlaceholder
							}), (m.type === pn.n.RTJSON && m.richtextContent || m.type === pn.n.TEXT && m.content) && Object(ln.a)(i) && (y = r.a.createElement("div", {
								className: p.textMediaWrapper,
								onClickCapture: e => this.onClickPost(e)
							}, r.a.createElement(rn.a, {
								autoplayPref: s,
								className: p.textMedia,
								isListing: !1,
								isMiniCard: !1,
								isNotCardView: !1,
								post: n || i,
								shouldPause: !0,
								shouldLoad: !0,
								showCentered: !1,
								showFull: !0
							}), r.a.createElement("div", {
								className: p.seeMore
							}, "...", Yn._("More", null, {
								hk: "362mDE"
							}))))
						} const v = r.a.createElement(x.a, {
						className: p.header
					}, i.isSponsored ? Yn._("Promoted", null, {
						hk: "2QTd86"
					}) : Yn._("Top Post", null, {
						hk: "R69MV"
					}));
					return r.a.createElement(on.a, {
						className: p.container,
						eventFactory: o,
						onClick: e => this.onClickPost(e),
						post: i
					}, r.a.createElement(b.a, {
						className: p.layout,
						headerClassName: Object(N.a)({
							[p.layoutHeader]: i.isSponsored
						}),
						bodyClassName: Object(N.a)({
							[p.layoutBody]: i.isSponsored
						}),
						header: i.isSponsored ? null : v
					}, r.a.createElement(u, {
						header: v,
						language: a,
						mainContent: f,
						post: i,
						previewText: y,
						searchDiscoveryUnit: d,
						subredditOrProfile: l
					})))
				}
			}
			var sr = Object(cn.a)(() => Object(a.c)({
					autoplayPref: De.b,
					crosspostRoot: (e, t) => {
						const s = $n(e, t.searchDiscoveryUnit.postOrder);
						if (s) return Object(Nt.d)(e, {
							postId: s.id
						})
					},
					language: De.Q,
					post: (e, t) => $n(e, t.searchDiscoveryUnit.postOrder),
					subredditOrProfile: Object(en.a)((e, t) => {
						const s = $n(e, t.searchDiscoveryUnit.postOrder);
						if (s) return Object(k.K)(e, {
							identifier: s.belongsTo
						})
					})
				}), er)(Object(ke.c)(tr)),
				nr = s("./src/reddit/models/SearchDiscoveryUnit/index.ts"),
				rr = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/index.m.less"),
				or = s.n(rr);
			const ar = () => null;
			var ir = e => {
					const {
						listingKey: t,
						listingName: s,
						location: n,
						morePostsRequested: o,
						onViewed: a,
						searchDiscoveryUnitsModels: i,
						searchDiscoveryUnitsOrder: c,
						searchOptions: d
					} = e, l = (e => {
						for (const t in e) {
							const s = e[t];
							if (s.layout.viewTypeWeb === nr.b.Hero) return s.postOrder[0]
						}
					})(i);
					return r.a.createElement(r.a.Fragment, null, c.map(e => {
						if (i[e]) return ((e, i) => {
							const {
								viewTypeWeb: c
							} = e.layout, {
								Carousel: l,
								Hero: m,
								PromotedTrendHero: p,
								Row: u
							} = nr.b;
							switch (e.type) {
								case nr.a.Posts:
									if (c === l) return r.a.createElement(E, {
										heroPostId: i,
										listingKey: t,
										key: "postsDiscoveryUnit",
										searchDiscoveryUnit: e,
										searchOptions: d
									});
									if (c === m || c === p) return r.a.createElement(sr, {
										key: "heroUnit",
										searchDiscoveryUnit: e,
										searchOptions: d,
										listingKey: t
									});
									if (c === u) return r.a.createElement(Ft, {
										className: or.a.postList,
										disablePlaceholder: !0,
										heroPostId: i,
										key: "posts",
										listingKey: t,
										listingName: s,
										listingViewed: a,
										location: n,
										inSubredditOrProfile: !1,
										noPostsComponent: ar,
										onLoadMore: o,
										searchOptions: d,
										postOrder: e.postOrder
									});
									break;
								case nr.a.Communities:
									if (c === l) return r.a.createElement(ce, {
										listingKey: t,
										key: "subredditsDiscoveryUnit",
										searchDiscoveryUnit: e,
										searchOptions: d
									});
									break;
								default:
									return null
							}
						})(i[e], l)
					}))
				},
				cr = s("./src/reddit/models/DiscoveryUnit/index.ts");
			const dr = {
					unitName: cr.g
				},
				lr = {
					unitName: cr.h
				},
				mr = Object(a.c)({
					hasCommunityResults: (e, t) => !!Object(Je.e)(e, t) || !Object(Je.d)(e, t) && Object(Je.b)(e, t).length > 0,
					hasPostResults: (e, t) => !!Object(Je.e)(e, t) || !Object(Je.d)(e, t) && Object(Nt.U)(e, t).length > 0,
					postsDiscoveryUnit: e => Object(g.c)(e, dr),
					subredditsDiscoveryUnit: e => Object(g.c)(e, lr),
					searchDiscoveryUnitsModels: e => {
						const t = e.listings.activeKey,
							s = e.searchDiscoveryUnits.models[t];
						return s || {}
					},
					searchDiscoveryUnitsOrder: e => {
						const t = e.listings.activeKey,
							s = e.searchDiscoveryUnits.order[t];
						return s || v
					},
					viewTreatment: Je.h
				}),
				pr = Object(o.b)(mr, e => ({
					morePostsRequested: () => e(c.g([i.Kb.Posts]))
				})),
				ur = Object(Te.t)();
			class br extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onViewed = (e, t) => Object(Ge.p)(this.props.listingKey, this.props.searchOptions, t, e, Ae(this.props))
				}
				render() {
					const {
						hasCommunityResults: e,
						hasPostResults: t,
						listingKey: s,
						listingName: n,
						location: o,
						morePostsRequested: a,
						postsDiscoveryUnit: i,
						searchDiscoveryUnitsModels: c,
						searchDiscoveryUnitsOrder: d,
						searchOptions: l,
						subredditsDiscoveryUnit: m,
						tab: p,
						viewTreatment: u
					} = this.props;
					switch (p) {
						case ds.g.Posts:
							return r.a.createElement(Xs, {
								hasPostResults: t,
								listingKey: s,
								listingName: n,
								location: o,
								morePostsRequested: a,
								onViewed: this.onViewed,
								searchOptions: l,
								tab: p
							});
						case ds.g.Listings:
							return r.a.createElement(Ks, {
								hasCommunityResults: e,
								listingKey: s,
								listingName: n,
								searchOptions: l,
								tab: p
							});
						case ds.g.Top:
						default: {
							const b = u === nr.c.Trending;
							return r.a.createElement(r.a.Fragment, null, b ? r.a.createElement(ir, {
								listingKey: s,
								listingName: n,
								location: o,
								morePostsRequested: a,
								onViewed: this.onViewed,
								searchDiscoveryUnitsModels: c,
								searchDiscoveryUnitsOrder: d,
								searchOptions: l
							}) : r.a.createElement(zs, {
								hasCommunityResults: e,
								hasPostResults: t,
								listingKey: s,
								listingName: n,
								morePostsRequested: a,
								onViewed: this.onViewed,
								postsDiscoveryUnit: i,
								searchOptions: l,
								subredditsDiscoveryUnit: m,
								tab: p
							}))
						}
					}
				}
			}
			t.a = ur(pr(br))
		},
		"./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/BestResults.m.less": function(e, t, s) {
			e.exports = {
				Spacer: "GOElXytTteFnMub22F_Vt",
				spacer: "GOElXytTteFnMub22F_Vt"
			}
		},
		"./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/index.m.less": function(e, t, s) {
			e.exports = {
				postList: "_3DKpvMPtj9USfmesFmERqc"
			}
		},
		"./src/reddit/components/SearchResultsNav/index.m.less": function(e, t, s) {
			e.exports = {
				subredditName: "_2qt_wFNwf1Nfy1x73i1HFG",
				icon: "_3DuNwpHyVCczHzo0uGKTbQ"
			}
		},
		"./src/reddit/components/SearchResultsNav/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/history/esm/history.js"),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/search/index.ts"),
				d = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = (s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./src/reddit/controls/InternalLink/index.tsx")),
				m = s("./src/reddit/components/MoreCommunitiesIcon/index.m.less"),
				p = s.n(m);
			const u = s("./src/lib/lessComponent.tsx").a.wrapped(l.a, "InternalLink", p.a),
				b = e => {
					let {
						currentPageUrl: t,
						numCommunities: s,
						searchQuery: n
					} = e;
					return a.a.createElement(u, {
						className: p.a.moreCommunities,
						to: t ? Object(c.c)(t, n, {
							type: [i.Kb.Subreddits, i.Kb.Users].join(",")
						}) : "#"
					}, a.a.createElement("span", {
						className: p.a.numCommunities
					}, s))
				};
			var h = s("./src/reddit/components/ShareMenu/index.tsx"),
				x = s("./src/reddit/constants/parameters.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				y = s("./src/reddit/helpers/trackers/searchResults.ts"),
				v = s("./src/reddit/icons/fonts/Share/index.tsx"),
				O = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				C = s("./src/reddit/components/SearchDiscoveryUnits/index.m.less"),
				E = s.n(C);
			const j = 5,
				_ = [];
			class k extends a.a.Component {
				constructor(e) {
					super(e), this.onFollow = () => {
						this.props.sendEvent(Object(y.d)("trending_header", this.state.isFollowed ? "unfollow" : "follow", this.props.searchOptions)), this.setState({
							isFollowed: !this.state.isFollowed
						})
					}, this.onShare = () => {
						this.props.sendEvent(Object(y.d)("trending_header", "share", this.props.searchOptions))
					}, this.onShareMenuClick = e => {
						this.props.sendEvent(Object(y.p)(e, this.props.searchOptions))
					}, this.state = {
						isFollowed: !1
					}
				}
				render() {
					const {
						currentPageUrl: e,
						headerContent: t,
						isCategorySearch: s,
						isInFollowExperiment: r,
						isSubreddit: o,
						isTrendingSearch: i,
						searchOptions: d,
						searchQuery: l,
						suffix: m
					} = this.props, p = t && !o && t.subredditIcons ? t.subredditIcons.length <= j ? t.subredditIcons : t.subredditIcons.slice(0, j - 1) : _, u = Object(c.a)(l).replace("flair_name:", "flair:").replace('"', "").replace('"', ""), y = t && t.subredditIcons.length > j && a.a.createElement(b, {
						currentPageUrl: e,
						searchQuery: l,
						numCommunities: t.subredditIcons.length ? t.subredditIcons.length - j + 1 : 0
					});
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("span", {
						className: E.a.bold
					}, s ? d[x.b] : u), a.a.createElement("p", {
						className: E.a.metaData
					}, m), a.a.createElement("div", {
						className: E.a.metaDataContainer
					}, a.a.createElement(g.a, {
						className: E.a.metaData,
						isHeaderContent: !0,
						subredditIcons: p,
						suffix: y
					}), i && r && (this.state.isFollowed ? a.a.createElement(f.i, {
						className: E.a.follow,
						onClick: this.onFollow
					}, n.fbt._("Unfollow", null, {
						hk: "ddl2J"
					})) : a.a.createElement(f.f, {
						className: E.a.follow,
						onClick: this.onFollow
					}, a.a.createElement(O.a, {
						className: E.a.icon
					}), n.fbt._("Follow", null, {
						hk: "4ddkyZ"
					}))), i && !r && e && a.a.createElement(h.a, {
						dropdownId: "rails-share-button",
						permalink: e,
						sendEventWithName: this.onShareMenuClick,
						subreddit: null
					}, a.a.createElement(f.n, {
						className: E.a.share,
						"data-click-id": "share",
						onClick: this.onShare
					}, a.a.createElement(v.a, {
						className: E.a.icon
					}), n.fbt._("share", null, {
						hk: "mmJV5"
					})))))
				}
			}
			var P = k,
				S = s("./src/reddit/components/SubredditIcon/index.tsx"),
				w = s("./src/reddit/components/TabNav/index.tsx"),
				I = s("./src/reddit/components/TrackingHelper/index.tsx"),
				N = s("./src/reddit/constants/page.ts"),
				T = s("./src/reddit/helpers/search/hasSearchGrammar.ts"),
				M = s("./src/reddit/models/SearchDiscoveryUnit/index.ts"),
				L = s("./src/reddit/components/SearchResultsNav/index.m.less"),
				R = s.n(L);
			class F extends a.a.Component {
				constructor() {
					super(...arguments), this.sendTopTabClickEvent = () => {
						this.props.tab === N.g.Top && this.props.sendEvent(Object(y.f)(y.a.TopResults, this.props.searchOptions))
					}, this.sendPostsTabClickEvent = () => {
						this.props.tab === N.g.Posts && this.props.sendEvent(Object(y.f)(y.a.Posts, this.props.searchOptions))
					}, this.sendCommunitiesTabClickEvent = () => {
						this.props.tab === N.g.Listings && this.props.sendEvent(Object(y.f)(y.a.CommunitiesAndUsers, this.props.searchOptions))
					}
				}
				render() {
					const {
						currentPageUrl: e,
						headerContent: t,
						isInFollowExperiment: s,
						location: o,
						searchOptions: m,
						sendEvent: p,
						subreddit: u,
						tab: b,
						viewTreatment: h
					} = this.props, f = m[x.b] || (t ? t.searchQuery || "" : m.q || ""), g = !(!u || !m.restrict_sr), y = !!m[x.b], v = h === M.c.Trending, O = Object(r.e)(o);
					let C = n.fbt._("Search results", null, {
						hk: "1N3gsY"
					});
					f && (g ? C = u.icon && u.icon.url ? a.a.createElement("span", null, n.fbt._("Search results in {subreddit name}", [n.fbt._param("subreddit name", a.a.createElement(d.a, {
						subredditName: u.name
					}, a.a.createElement(l.a, {
						to: "/r/".concat(u.name, "/")
					}, a.a.createElement(S.b, {
						className: R.a.icon,
						key: u.icon.url,
						iconUrl: u.icon.url
					}), a.a.createElement("span", {
						className: R.a.subredditName
					}, u.displayText))))], {
						hk: "JrpKl"
					})) : n.fbt._("Search results in {subreddit name}", [n.fbt._param("subreddit name", u.displayText)], {
						hk: "JrpKl"
					}) : (y || v) && t && t.displayText && (C = n.fbt._("Topic • {topic name} and {num occurrences} more communities talking about this", [n.fbt._param("topic name", t.displayText), n.fbt._param("num occurrences", t.subredditOccurrences.toString())], {
						hk: "4hWnTn"
					})));
					const E = a.a.createElement(P, {
						currentPageUrl: e,
						headerContent: v || y ? t : void 0,
						isInFollowExperiment: s,
						isSubreddit: g,
						isCategorySearch: y,
						isTrendingSearch: v,
						searchOptions: m,
						searchQuery: f,
						sendEvent: p,
						suffix: C
					});
					return a.a.createElement(w.c, {
						title: E,
						isCategoryPage: !!m[x.b]
					}, !g && a.a.createElement(a.a.Fragment, null, a.a.createElement(w.a, {
						active: b === N.g.Top,
						onClick: this.sendTopTabClickEvent,
						key: "top",
						to: Object(c.c)(O, f, {
							type: ""
						})
					}, n.fbt._("Best results", null, {
						hk: "40v7Dh"
					})), !Object(T.a)(f) && a.a.createElement(w.a, {
						active: b === N.g.Posts,
						onClick: this.sendPostsTabClickEvent,
						key: "posts",
						to: Object(c.c)(O, f, {
							type: i.Kb.Posts
						})
					}, n.fbt._("Posts", null, {
						hk: "vNVpl"
					})), !Object(T.a)(f) && !m.is_multi && a.a.createElement(w.a, {
						active: b === N.g.Listings,
						onClick: this.sendCommunitiesTabClickEvent,
						key: "listings",
						to: Object(c.c)(O, f, {
							type: [i.Kb.Subreddits, i.Kb.Users].join(",")
						})
					}, n.fbt._("Communities and users", null, {
						hk: "xcZ7c"
					}))))
				}
			}
			t.a = Object(I.c)(F)
		},
		"./src/reddit/components/SearchResultsSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/config.ts"),
				c = s("./src/reddit/components/CreateCommunityButton/index.tsx"),
				d = s("./src/reddit/selectors/user.ts"),
				l = s("./src/reddit/components/CreateCommunitySidebar/index.m.less"),
				m = s.n(l),
				p = s("./src/lib/lessComponent.tsx");
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = p.a.div("ButtonContainer", m.a), h = p.a.div("Container", m.a), x = p.a.img("BannerImg", m.a), f = p.a.img("SnooImg", m.a), g = p.a.div("CommunityText", m.a);
			var y = Object(o.b)(() => Object(a.c)({
					language: d.Q
				}))(e => r.a.createElement(h, null, r.a.createElement(x, {
					src: "".concat(i.a.assetPath, "/img/search-results-community-banner.png")
				}), r.a.createElement(f, {
					src: "".concat(i.a.assetPath, "/img/snoo-thinking.png")
				}), r.a.createElement(g, null, u._("Have an idea for a new community?", null, {
					hk: "LfgUP"
				})), r.a.createElement(b, null, r.a.createElement(c.a, {
					eventSource: "sidebar"
				})))),
				v = s("./src/reddit/components/IdCard/async.tsx"),
				O = s("./src/reddit/components/SidebarContainer/index.tsx"),
				C = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				E = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				j = s("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				_ = s("./node_modules/fbt/lib/FbtPublic.js"),
				k = s("./src/lib/addQueryParams/index.ts"),
				P = s("./src/reddit/components/TrackingHelper/index.tsx"),
				S = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				w = s("./src/reddit/controls/InternalLink/index.tsx"),
				I = s("./src/reddit/helpers/trackers/searchResults.ts"),
				N = s("./src/reddit/icons/svgs/Search/index.tsx"),
				T = s("./src/reddit/components/Widgets/RelatedQueries/index.m.less"),
				M = s.n(T);
			var L = Object(P.c)(e => {
					const {
						className: t,
						relatedQueries: s,
						searchOptions: n,
						sendEvent: o
					} = e;
					return r.a.createElement(S.a, {
						className: t,
						title: _.fbt._("People also searched for", null, {
							hk: "tjjwf"
						})
					}, s.slice(0, 8).map(e => {
						o(Object(I.l)("view", n));
						const t = Object.assign({}, n, {
							q: e.q
						});
						return r.a.createElement(w.a, {
							className: M.a.relatedQuery,
							key: e.q,
							onClick: e => o(Object(I.l)("click", t)),
							to: Object(k.a)("/search", {
								q: e.q
							})
						}, r.a.createElement("li", {
							className: M.a.relatedQueryItem
						}, r.a.createElement(N.a, {
							className: M.a.searchIcon
						}), e.q))
					}))
				}),
				R = s("./src/reddit/selectors/searchResults.ts"),
				F = s("./src/reddit/selectors/subreddit.ts"),
				A = s("./src/reddit/selectors/widgets.ts");
			const B = Object(a.c)({
				isLoggedIn: d.H,
				language: d.Q,
				subredditId: (e, t) => {
					let {
						listingName: s
					} = t;
					return Object(F.E)(e, s)
				},
				postFlairWidgets: (e, t) => {
					let {
						listingName: s
					} = t;
					const n = Object(F.E)(e, s);
					return Object(A.g)(e, {
						subredditId: n
					})
				},
				relatedQueries: (e, t) => {
					let {
						searchOptions: s
					} = t;
					return Object(R.g)(e, s.q)
				}
			});
			t.a = Object(o.b)(B)(e => r.a.createElement(O.a, {
				className: e.className
			}, e.subredditId && e.searchOptions.restrict_sr && r.a.createElement(v.a, {
				listingName: e.listingName
			}), !e.searchOptions.restrict_sr && e.isLoggedIn && r.a.createElement(y, null), e.subredditId && e.searchOptions.restrict_sr && e.postFlairWidgets && e.postFlairWidgets.map((t, s) => r.a.createElement(C.a, {
				key: "widgetSpacer-".concat(s)
			}, r.a.createElement(j.a, {
				subredditName: e.listingName,
				widget: t
			}))), e.searchOptions.q && e.relatedQueries && e.relatedQueries.length > 0 && r.a.createElement(C.a, {
				key: "widgetSpacer-relatedQueries"
			}, r.a.createElement(L, {
				searchOptions: e.searchOptions,
				relatedQueries: e.relatedQueries
			})), r.a.createElement(E.a, null)))
		},
		"./src/reddit/components/SearchResultsSubNav/Select.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2IEJWluPyA1cstR9aDWVE5",
				component: "_2IEJWluPyA1cstR9aDWVE5",
				Title: "_3g64D6uVm5QtFZxpgrLt0x",
				title: "_3g64D6uVm5QtFZxpgrLt0x",
				DropdownTriangle: "_3gVMU-TMInP74AYvzlITk0",
				dropdownTriangle: "_3gVMU-TMInP74AYvzlITk0",
				Wrapper: "Ok_V8Hz99m2KvmtrN-eKW",
				wrapper: "Ok_V8Hz99m2KvmtrN-eKW",
				ValueWrapper: "_37VvvhtKn3kg8VG5ZIjfGE",
				valueWrapper: "_37VvvhtKn3kg8VG5ZIjfGE",
				mIsOpen: "_G07hxQI8X2C6IUlaYQqO",
				SelectOption: "_1FuIuPDupAajDS-8lDP3nq",
				selectOption: "_1FuIuPDupAajDS-8lDP3nq",
				mIsSelected: "_7BNV9rHjX9oIq_WWuCr38"
			}
		},
		"./src/reddit/components/SearchResultsSubNav/index.m.less": function(e, t, s) {
			e.exports = {
				LeftSelect: "_3gCS2R6Y3iUcpUIWBCd6k9",
				leftSelect: "_3gCS2R6Y3iUcpUIWBCd6k9",
				RightLink: "_3AmQ4JXJufVLUdOsC6v61i",
				rightLink: "_3AmQ4JXJufVLUdOsC6v61i",
				ArrowRight: "FGX7ywlMTix8BeUr5G7TE",
				arrowRight: "FGX7ywlMTix8BeUr5G7TE",
				TertiaryButton: "_2m_kIMm5x_7I8EyAg72YYX",
				tertiaryButton: "_2m_kIMm5x_7I8EyAg72YYX",
				AllRedditResultsButton: "_2usjl1DPvh2qlLL9D4TlLJ",
				allRedditResultsButton: "_2usjl1DPvh2qlLL9D4TlLJ",
				Component: "_1fPZw9wLFaCEzhzp2Hkx18",
				component: "_1fPZw9wLFaCEzhzp2Hkx18"
			}
		},
		"./src/reddit/components/SearchSwitcher/index.m.less": function(e, t, s) {
			e.exports = {
				searchSwitcher: "_1i7CStyaaHQU2aiG0GdpSA",
				mSr: "_3-pePLWUAV_CAVhht1dfup",
				subredditIcon: "_3swS56fqtrGcixPfTzK_Cl",
				searchSwitcherText: "-V0kqUlRHvLoNRUAUmCy9",
				arrowIcon: "N0zmIZbfRSCGk2rUOGHSS"
			}
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/SidebarContainer/index.m.less"),
				o = s.n(r);
			t.a = n.a.div("container", o.a)
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
				r = s.n(n),
				o = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				i = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/components/SidebarFooter/index.m.less"),
				d = s.n(c);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js"), m = o.a.a("Link", d.a), p = Object(i.t)({
				isFrontpage: i.y
			});
			t.a = p(e => r.a.createElement(a.a, {
				className: d.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, r.a.createElement("div", {
				className: d.a.LinkContainer
			}, r.a.createElement("div", {
				className: d.a.Column
			}, r.a.createElement(m, {
				href: "https://www.reddithelp.com"
			}, l._("help", null, {
				hk: "4lyYaD"
			})), r.a.createElement(m, {
				href: "https://www.reddit.com/mobile/download"
			}, l._("Reddit App", null, {
				hk: "1ehrjP"
			})), r.a.createElement(m, {
				href: "https://www.reddit.com/coins"
			}, l._("Reddit coins", null, {
				hk: "32iMaN"
			})), r.a.createElement(m, {
				href: "https://www.reddit.com/premium"
			}, l._("Reddit premium", null, {
				hk: "RuO3A"
			})), r.a.createElement(m, {
				href: "http://redditgifts.com/"
			}, l._("Reddit gifts", null, {
				hk: "2XziRN"
			})), e.isFrontpage && r.a.createElement(r.a.Fragment, null, r.a.createElement(m, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, l._("Communities", null, {
				hk: "3CJu37"
			})), r.a.createElement(m, {
				href: "https://www.reddit.com/posts/a-1/"
			}, l._("Top Posts", null, {
				hk: "2NOEW2"
			})), r.a.createElement(m, {
				href: "https://www.reddit.com/topics/a-1/"
			}, l._("Topics", null, {
				hk: "349RFt"
			})))), r.a.createElement("div", {
				className: d.a.Column
			}, r.a.createElement(m, {
				href: "https://about.reddit.com"
			}, l._("about", null, {
				hk: "1sqJKs"
			})), r.a.createElement(m, {
				href: "https://about.reddit.com/careers/"
			}, l._("careers", null, {
				hk: "26ABvc"
			})), r.a.createElement(m, {
				href: "https://about.reddit.com/press/"
			}, l._("press", null, {
				hk: "2Qmgdz"
			})), r.a.createElement(m, {
				href: "https://www.redditinc.com/advertising"
			}, l._("advertise", null, {
				hk: "Mt40U"
			})), r.a.createElement(m, {
				href: "http://www.redditblog.com/"
			}, l._("blog", null, {
				hk: "46IQJw"
			})), r.a.createElement(m, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, l._("Terms", null, {
				hk: "4qRzfE"
			})), r.a.createElement(m, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, l._("Content policy", null, {
				hk: "1DyxZS"
			})), r.a.createElement(m, {
				href: "https://www.reddit.com/help/privacypolicy"
			}, l._("Privacy policy", null, {
				hk: "10K04G"
			})), r.a.createElement(m, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, l._("Mod policy", null, {
				hk: "2gYc2T"
			})))), r.a.createElement("div", {
				className: d.a.Copyright
			}, l._("Reddit Inc © {year}. All rights reserved", [l._param("year", (new Date).getFullYear().toString())], {
				hk: "4BrCkA"
			}))))
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
				r = s.n(n),
				o = s("./src/lib/lessComponent.tsx");
			t.a = o.a.div("Component", r.a)
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
				r = s("./node_modules/lodash/throttle.js"),
				o = s.n(r),
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
				f = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				g = s.n(f),
				y = s("./src/lib/lessComponent.tsx");

			function v() {
				return (v = Object.assign || function(e) {
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
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const C = c.e[1] + 24,
				E = h.f + 8 + 152 + 32 + 16,
				j = E + C + 8,
				_ = y.a.div("Container", g.a),
				k = y.a.wrapped(e => {
					var {
						className: t
					} = e, s = O(e, ["className"]);
					return i.a.createElement(u, v({
						className: t,
						style: {
							top: "calc(100vh - ".concat(40, "px)")
						}
					}, s))
				}, "BackToTop", g.a),
				P = e => {
					let {
						children: t,
						className: s,
						isSticky: r
					} = e;
					return i.a.createElement("div", {
						className: Object(n.a)(s, {
							[g.a.StickyStyles]: r
						})
					}, t)
				};
			class S extends a.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > j,
						shouldFooterSticky: this.windowHeight > E
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
					}, this.handleResize = o()(() => {
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
							className: s,
							hideFooter: n
						}
					} = this, r = this.state.isAdSticky && !(!e && !t);
					return i.a.createElement(_, {
						className: s,
						innerRef: this.setWrapperRef
					}, i.a.createElement(P, {
						isSticky: r
					}, e, t, !n && i.a.createElement(b.a, null)), !this.props.hideBackToTop && i.a.createElement(k, null))
				}
			}
			const w = Object(x.t)();
			t.a = w(S)
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
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
				return c ? r.a.createElement(u, {
					className: Object(o.a)({
						[l.a["m-comment"]]: n
					}, t)
				}, r.a.createElement(i.a, {
					href: c.url,
					isSponsored: d,
					postId: s.id,
					source: c
				}, Object(a.a)(s), r.a.createElement(p, null))) : null
			}
		},
		"./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/subreddit/inlineEditing.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/controls/ImageInput/index.tsx"),
				p = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = s("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				b = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				h = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				x = e => o.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 16 17",
					version: "1.1"
				}, o.a.createElement("path", {
					d: "M8.566 5.835l2.4 2.4a.8.8 0 0 1-1.132 1.131L8.8 8.332V13.6a.8.8 0 1 1-1.6 0V8.332L6.166 9.366a.8.8 0 0 1-1.132-1.131l2.4-2.4a.803.803 0 0 1 1.132 0zm3.091-2.292A3.547 3.547 0 0 1 15.2 7.085a.8.8 0 0 1-1.6 0 1.945 1.945 0 0 0-2.318-1.904.802.802 0 0 1-.869-.43A4.206 4.206 0 0 0 6.628 2.4 4.233 4.233 0 0 0 2.4 6.629a.8.8 0 0 1-1.6 0A5.835 5.835 0 0 1 6.628.799a5.788 5.788 0 0 1 4.941 2.745l.088-.001z",
					id: "a"
				})),
				f = s("./src/reddit/models/ApiRequestState/index.ts"),
				g = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				y = s("./src/reddit/components/SubredditIcon/index.m.less"),
				v = s.n(y);

			function O() {
				return (O = Object.assign || function(e) {
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
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			class E extends o.a.Component {
				constructor(e) {
					super(e)
				}
				render() {
					const e = this.props,
						{
							subredditId: t,
							className: s,
							inTopBar: n
						} = e,
						r = C(e, ["subredditId", "className", "inTopBar"]),
						a = [s, v.a.inTopBar, v.a.iconContainer];
					return n ? a.push(v.a.emptyEditableIconInTopBar) : a.push(v.a.editableIcon, v.a.emptyEditableIcon), o.a.createElement("span", O({}, r, {
						className: Object(c.a)(...a)
					}), n ? o.a.createElement(x, {
						className: v.a.emptyUploadButton
					}) : o.a.createElement(h.a, {
						className: v.a.emptyPlusButton
					}), this.props.children)
				}
			}
			const j = e => {
					const {
						iconColor: t,
						className: s,
						alt: n,
						role: r,
						onClick: a,
						inTopBar: i,
						src: d
					} = e;
					return o.a.createElement("span", {
						className: v.a.iconContainer
					}, o.a.createElement("img", {
						alt: n,
						onClick: a,
						role: r,
						src: d,
						className: Object(c.a)(s, {
							[v.a.editableIcon]: !i
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				_ = Object(i.c)({
					isLoading: g.b
				});
			class k extends o.a.PureComponent {
				constructor(e) {
					super(e), this.inputRef = null, this.openImageUpload = () => {
						this.inputRef && this.inputRef.click(), this.props.sendEvent(b.b)
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => o.a.createElement(m.a, {
						className: v.a.imageUploader,
						inputRef: this.setInputRef,
						multiple: !1,
						onChange: e => {
							const t = Object(f.b)();
							this.setState({
								apiRequestId: t
							}), this.props.onFileSelected(e, t)
						}
					}), this.state = {
						apiRequestId: null
					}
				}
				renderEditButton() {
					const {
						url: e
					} = Object(u.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					});
					return this.props.inTopBar ? o.a.createElement("span", {
						className: v.a.clickableUploadText,
						onClick: this.openImageUpload
					}, e ? n.fbt._("Update icon", null, {
						hk: "3zlPxT"
					}) : n.fbt._("Add icon", null, {
						hk: "1bbdMV"
					})) : null
				}
				getSharedProps() {
					return {
						onClick: this.openImageUpload,
						role: "presentation",
						className: this.props.className
					}
				}
				renderEditableIcon() {
					const {
						url: e,
						color: t
					} = Object(u.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), s = o.a.createElement(o.a.Fragment, null, o.a.createElement(j, O({
						alt: n.fbt._("Subreddit icon", null, {
							hk: "1oOA0s"
						}),
						src: e,
						iconColor: t,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader());
					return this.props.linkTo ? o.a.createElement("a", {
						href: this.props.linkTo
					}, s) : s
				}
				renderEmptyState() {
					return this.props.linkTo ? o.a.createElement("a", {
						href: this.props.linkTo
					}, o.a.createElement(E, O({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : o.a.createElement(o.a.Fragment, null, o.a.createElement(E, O({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader())
				}
				renderSpinner() {
					if (this.props.isLoading) {
						const e = [v.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(v.a.loadingIconInTopBar), t = 32), o.a.createElement(p.a, {
							className: Object(c.a)(...e),
							sizePx: t
						})
					}
					return null
				}
				render() {
					const {
						url: e
					} = Object(u.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), t = e ? this.renderEditableIcon() : this.renderEmptyState(), s = this.renderEditButton();
					return s ? o.a.createElement("div", {
						className: v.a.flexContainer
					}, t, s) : t
				}
			}
			t.a = Object(a.b)(_, (e, t) => ({
				onFileSelected: (s, n) => {
					e(Object(d.a)(t.subreddit, s, n))
				}
			}))(Object(l.c)(k))
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
				return k
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
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
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const f = b.a.button("IconButton", p.a),
				g = b.a.wrapped(d.a, "SubscribeIcon", p.a),
				y = b.a.wrapped(c.a, "UnsubscribeIcon", p.a),
				v = b.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, n = x(e, ["border", "small"]);
					return o.a.createElement(f, n, o.a.createElement(g, {
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
					return t ? o.a.createElement(i.f, h({}, n, {
						className: Object(u.a)(n.className, {
							[p.a.isSmall]: s
						})
					})) : o.a.createElement(i.n, h({}, n, {
						className: Object(u.a)(n.className, {
							[p.a.isSmall]: s
						})
					}))
				}, "SubscribeInternalButton", p.a),
				C = e => {
					var {
						icon: t
					} = e, s = x(e, ["icon"]);
					return t ? o.a.createElement(v, h({}, s, {
						className: Object(u.a)(s.className, {
							[p.a.isSmall]: s.small
						})
					})) : o.a.createElement(O, h({}, s, {
						className: Object(u.a)(s.className, {
							[p.a.isSmall]: s.small
						})
					}))
				},
				E = b.a.wrapped(e => {
					var {
						border: t,
						language: s,
						small: n,
						type: r
					} = e, i = x(e, ["border", "language", "small", "type"]);
					return o.a.createElement(f, i, o.a.createElement(y, {
						className: Object(u.a)(a.n, i.className, {
							[p.a.isSmall]: n
						})
					}))
				}, "UnsubscribeIconButton", p.a),
				j = b.a.wrapped(e => {
					var {
						border: t,
						language: s,
						small: r,
						type: a
					} = e, c = x(e, ["border", "language", "small", "type"]);
					const d = o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
							className: p.a.UnsubscribeButtonDefault
						}, "subreddit" === a ? n.fbt._("Joined", null, {
							hk: "1MTmIz"
						}) : n.fbt._("Following", null, {
							hk: "1wQlVR"
						})), o.a.createElement("span", {
							className: p.a.UnsubscribeButtonHover
						}, "subreddit" === a ? n.fbt._("Leave", null, {
							hk: "2lLnnn"
						}) : n.fbt._("Unfollow", null, {
							hk: "2b5ERD"
						}))),
						l = Object(u.a)(c.className, {
							[p.a.isSmall]: r
						});
					return t ? o.a.createElement(i.i, h({}, c, {
						className: l,
						children: d
					})) : o.a.createElement(i.n, h({}, c, {
						className: l,
						children: d
					}))
				}, "UnsubscribeButton", p.a),
				_ = e => {
					var {
						icon: t
					} = e, s = x(e, ["icon"]);
					return t ? o.a.createElement(E, h({}, s, {
						className: Object(u.a)(s.className, {
							[p.a.isSmall]: s.small
						})
					})) : o.a.createElement(j, h({}, s, {
						className: Object(u.a)(s.className, {
							[p.a.isSmall]: s.small
						})
					}))
				};
			class k extends o.a.Component {
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
						language: r,
						small: a = !1
					} = this.props, i = {
						border: e,
						className: t,
						icon: s,
						onClick: this.onClick,
						small: a
					};
					return this.props.userIsSubscriber ? o.a.createElement(_, h({}, i, {
						language: r,
						type: this.props.identifier.type
					})) : o.a.createElement(C, h({}, i, {
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
				r = s.n(n),
				o = s("./src/reddit/components/TrackingHelper/index.tsx"),
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
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const f = b.a.wrapped(e => {
					var {
						small: t,
						shouldReverseColor: s
					} = e, n = x(e, ["small", "shouldReverseColor"]);
					const o = s ? i.i : i.f;
					return r.a.createElement(o, h({}, n, {
						className: Object(u.a)(n.className, {
							[p.a.isLarge]: !t
						})
					}))
				}, "SubscribeInternalButton", p.a),
				g = b.a.wrapped(e => {
					var {
						small: t,
						belongsToType: s,
						shouldReverseColor: n
					} = e, o = x(e, ["small", "belongsToType", "shouldReverseColor"]);
					const a = n ? i.f : i.i;
					return r.a.createElement(a, h({}, o, {
						className: Object(u.a)(o.className, {
							[p.a.isLarge]: !t
						})
					}))
				}, "UnsubscribeButton", p.a),
				y = b.a.wrapped(c.a, "Checkmark", p.a),
				v = b.a.wrapped(d.a, "Plus", p.a),
				O = b.a.div("ButtonSpacer", p.a);
			class C extends r.a.Component {
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
							onSubscribe: o,
							onUnsubscribe: a,
							postId: i,
							sendEvent: c,
							small: d = !1,
							userIsSubscriber: m,
							doNotHideOtherSubscribeButtons: b,
							getEventFactory: C,
							onSubscriptionsRequested: E
						} = e,
						j = x(e, ["className", "identifier", "language", "onSubscribe", "onUnsubscribe", "postId", "sendEvent", "small", "userIsSubscriber", "doNotHideOtherSubscribeButtons", "getEventFactory", "onSubscriptionsRequested"]),
						_ = this.state.isHovered;
					let k = m ? "subscribed" : "subscribe";
					m && _ && (k = "unsubscribe");
					const P = Object(l.a)({
						type: s.type,
						key: k
					});
					return m ? this.state.hasJustSubscribed || b ? r.a.createElement(g, h({
						className: Object(u.a)(t, {
							[p.a.isLarge]: !d,
							[p.a.unsubscribeButtonHoverStyles]: !d
						}),
						onClick: this.onClick,
						small: d,
						belongsToType: s.type,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, j), d && r.a.createElement(y, null), !d && !_ && r.a.createElement(y, null), !d && P) : d ? null : r.a.createElement(O, null) : r.a.createElement(r.a.Fragment, null, r.a.createElement(f, h({
						className: Object(u.a)(t, {
							[p.a.isLarge]: !d
						}),
						onClick: this.onClick,
						small: d
					}, j, {
						id: "subscribe-button-".concat(i),
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}), r.a.createElement(v, null), !d && P))
				}
			}
			t.a = Object(a.a)(Object(o.c)(C))
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js");
			const r = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				o = {
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
					return o[r({
						type: t
					})][s]()
				}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/TrackingHelper/index.tsx"),
				r = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				o = s("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(r.a)(Object(n.c)(o.a))
		},
		"./src/reddit/components/TabNav/index.m.less": function(e, t, s) {
			e.exports = {
				Gear: "_1USoXyqC8EXT8sZzm2JJYM",
				gear: "_1USoXyqC8EXT8sZzm2JJYM",
				Title: "_1VNcq3ynegRchfLyPqmKJ_",
				title: "_1VNcq3ynegRchfLyPqmKJ_",
				mConstrainWidth: "_2F7lbod1n6khHmvkBHQLQW",
				mResponsive: "_28QD3wRQT74vkz8KPzFC43",
				TabNavContainer: "_3FtOlkq31vuUJkzTkq4--W",
				tabNavContainer: "_3FtOlkq31vuUJkzTkq4--W",
				Tabs: "M7VDHU4AdgCc6tHaZ-UUy",
				tabs: "M7VDHU4AdgCc6tHaZ-UUy",
				Tab: "_1PoD47oSHsBQ37RfRPY-G-",
				tab: "_1PoD47oSHsBQ37RfRPY-G-",
				mIsActive: "_1Ico4fvlryEwDknLqa0-lP",
				mIsEnabled: "_3ZTJ0aNoM983-ysCWCpmrA"
			}
		},
		"./src/reddit/components/TabNav/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return f
			})), s.d(t, "a", (function() {
				return E
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/lodash/throttle.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/constants/componentSizes.ts"),
				m = s("./src/reddit/constants/zIndex.ts"),
				p = s("./src/reddit/controls/InternalLink/index.tsx"),
				u = s("./src/reddit/icons/svgs/Settings/index.tsx"),
				b = s("./src/reddit/components/TabNav/index.m.less"),
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
			var f, g = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			! function(e) {
				e.GEAR = "gear"
			}(f || (f = {}));
			const y = d.a.wrapped(u.a, "Gear", h.a),
				v = d.a.h3("Title", h.a),
				O = d.a.div("TabNavContainer", h.a),
				C = d.a.div("Tabs", h.a),
				E = d.a.wrapped(e => {
					var {
						active: t,
						children: s,
						enabled: n
					} = e, r = g(e, ["active", "children", "enabled"]);
					return a.a.createElement(p.a, x({}, r, {
						"aria-selected": t,
						className: Object(i.a)(r.className, {
							[h.a.mIsActive]: t,
							[h.a.mIsEnabled]: !1 !== n
						}),
						role: "tab"
					}), s)
				}, "Tab", h.a),
				j = e => {
					switch (e) {
						case f.GEAR:
							return a.a.createElement(y, null);
						default:
							return null
					}
				},
				_ = () => window.pageYOffset || window.scrollY,
				k = 75,
				P = {
					paddingLeft: 15,
					left: 0,
					position: "fixed",
					right: 0,
					top: l.f,
					willChange: "transform",
					zIndex: m.g
				};
			class S extends a.a.Component {
				constructor(e) {
					super(e), this.toggleSticky = r()(() => {
						this.state.sticky || this.forceUnsticky ? _() < k && (this.forceUnsticky = !0, this.wrapperRef.firstElementChild.setAttribute("style", ""), this.setState({
							sticky: !1
						}, () => this.forceUnsticky = !1)) : _() >= k && this.setState({
							sticky: !0
						})
					}, c.E), this.forceUnsticky = !1, this.wrapperRef = null, this.state = {
						sticky: !1
					}
				}
				componentDidMount() {
					this.props.isCategoryPage && (this.toggleSticky(), window.addEventListener("orientationchange", this.toggleSticky), window.addEventListener("resize", this.toggleSticky), window.addEventListener("scroll", this.toggleSticky))
				}
				componentWillUnmount() {
					this.props.isCategoryPage && (window.removeEventListener("orientationchange", this.toggleSticky), window.removeEventListener("resize", this.toggleSticky), window.removeEventListener("scroll", this.toggleSticky))
				}
				render() {
					const {
						innerRef: e,
						isResponsiveSettingsEnabled: t,
						onTouchMove: s
					} = this.props, n = Object(i.a)({
						[h.a.mResponsive]: t
					});
					return a.a.createElement(O, {
						className: Object(i.a)(n, this.props.className),
						innerRef: e,
						onTouchMove: s
					}, a.a.createElement(v, {
						className: Object(i.a)(n, {
							[h.a.mConstrainWidth]: !!this.props.constrainWidth
						})
					}, j(this.props.icon), this.props.title), a.a.createElement(C, {
						className: Object(i.a)(n, {
							[h.a.mConstrainWidth]: !!this.props.constrainWidth
						}),
						role: "tablist",
						innerRef: e => this.wrapperRef = e,
						style: this.props.isCategoryPage && this.state.sticky && !this.forceUnsticky ? P : void 0
					}, this.props.children))
				}
			}
			t.c = S
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
				r = s.n(n),
				o = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/SEOTitle/index.tsx"),
				i = s("./src/reddit/components/Widgets/Base/index.m.less"),
				c = s.n(i),
				d = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};
			const l = o.a.div("WidgetBackground", c.a),
				m = o.a.wrapped(e => {
					var {
						children: t
					} = e, s = d(e, ["children"]);
					return r.a.createElement("div", s, r.a.createElement(a.b, {
						type: a.a.Widget
					}, t))
				}, "WidgetHeader", c.a);
			t.b = e => r.a.createElement("div", {
				className: e.className
			}, r.a.createElement(l, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/posts.ts"),
				r = s("./src/reddit/helpers/name/index.ts");

			function o(e, t) {
				return (t === n.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function a(e, t) {
				return t === n.a.PROFILE ? Object(r.c)(e) : Object(r.b)(e)
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				widgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				TertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				tertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				StyledFlair: "ij57zT3Rtmsew_4V8vYmY",
				styledFlair: "ij57zT3Rtmsew_4V8vYmY",
				cloudDisplay: "l8B49A4v1dhWGGEwM7vYA",
				flairFilter: "_1Dpo5nORF-CHLCeoDHpZuR",
				Flair: "_3b9QdopIknN9AuNvj2kI9X",
				flair: "_3b9QdopIknN9AuNvj2kI9X",
				"m-selected": "XUSGYTFEMdkVpqVqn1ZsC",
				mSelected: "XUSGYTFEMdkVpqVqn1ZsC",
				flairFilterContainer: "qHKWh5t-0ZHqZ00w567bU",
				flairFilterButton: "_1Uh_u9ypgpntBJ_2RC1Ge3"
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/fastdom/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/components/Flair/index.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = s("./src/reddit/constants/parameters.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/helpers/correlationIdTracker.ts"),
				g = s("./src/reddit/helpers/flair.ts"),
				y = s("./src/reddit/helpers/trackers/postFlair.ts"),
				v = s("./src/reddit/models/Widgets/index.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				E = s.n(C);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var _ = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const k = 129,
				P = Object(h.t)({
					filterName: e => Object(h.S)(e)[b.f],
					url: e => Object(h.X)(e)
				}),
				S = Object(i.c)({
					subredditId: (e, t) => Object(O.E)(e, t.subredditName)
				}),
				w = Object(a.b)(S),
				I = l.a.div("WidgetContent", E.a),
				N = e => {
					var {
						display: t,
						isFlairFilter: s,
						onMouseDown: n
					} = e, r = _(e, ["display", "isFlairFilter", "onMouseDown"]);
					return o.a.createElement("li", {
						className: Object(c.a)(E.a.StyledFlair, t === v.d.Cloud && E.a.cloudDisplay, {
							[E.a.flairFilter]: s,
							[E.a["m-selected"]]: r.isSelected
						}),
						onMouseDown: n
					}, o.a.createElement(m.b, j({}, r, {
						className: E.a.Flair,
						isFlairFilter: s,
						forceSmallEmojis: !0
					})))
				};
			class T extends o.a.Component {
				constructor(e) {
					super(e), this.flairListRef = o.a.createRef(), this.trackFlairWidgetClick = e => {
						this.props.sendEvent(Object(y.f)(e))
					}, this.trackFlairWidgetClear = e => this.props.sendEvent(Object(y.c)(e)), this.trackFlairOverflowClick = () => {
						this.props.sendEvent(Object(y.d)())
					}, this.onClick = e => {
						const t = {
							id: this.props.subredditId,
							eventType: "subreddit",
							originElement: "post_flair_widget",
							postFlairName: e
						};
						Object(f.d)(f.a.SearchResults), this.props.sendEvent(Object(y.b)(t))
					}, this.onToggleCollapse = () => this.setState(e => ({
						isCollapsed: !e.isCollapsed
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(g.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(g.c)(this.props.widget.templates[e])), this.state = {
						isCollapsed: !0
					}
				}
				componentDidMount() {
					d.a.read(() => {
						const e = this.flairListRef.current && this.flairListRef.current.offsetHeight;
						e && e > k && this.setState({
							hasOverflow: !0
						})
					})
				}
				renderButton() {
					return o.a.createElement(x.n, {
						className: E.a.flairFilterButton,
						onMouseDown: this.trackFlairOverflowClick,
						onClick: this.onToggleCollapse
					}, this.state.isCollapsed ? n.fbt._("See more", null, {
						hk: "2fWFes"
					}) : n.fbt._("See less", null, {
						hk: "3oxSZ9"
					}))
				}
				renderFlairs(e) {
					const {
						subredditName: t,
						widget: s
					} = this.props;
					return o.a.createElement("ul", {
						ref: this.flairListRef
					}, e.map(e => o.a.createElement(N, {
						key: e.templateId,
						display: s.display,
						flair: e,
						isFlairFilter: !0,
						large: !0,
						onMouseDown: () => this.trackFlairWidgetClick(e),
						subredditName: t,
						to: Object(g.e)(this.props.url, Object(g.j)(e))
					})))
				}
				renderFlairFilters(e) {
					const {
						isCollapsed: t
					} = this.state, s = t ? k : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return o.a.createElement("div", {
						className: E.a.flairFilterContainer,
						style: {
							maxHeight: s
						}
					}, this.renderFlairs(e))
				}
				renderSelectedFlairFilter(e) {
					const {
						subredditName: t,
						widget: s
					} = this.props;
					return o.a.createElement("ul", null, o.a.createElement(N, {
						key: e.templateId,
						display: s.display,
						flair: e,
						isFlairFilter: !0,
						isSelected: !0,
						large: !0,
						onCloseClick: t => this.handleCloseClick(t, e),
						subredditName: t,
						to: Object(g.e)(this.props.url, Object(g.j)(e))
					}))
				}
				render() {
					const {
						filterName: e,
						widget: t
					} = this.props, {
						hasOverflow: s
					} = this.state, n = t.order, r = this.getFlairsFromIds(n), a = e && this.getSelectedFlair(r) || void 0, i = t.order.length > n.length || s && !a;
					return o.a.createElement(u.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, o.a.createElement(I, null, a && this.renderSelectedFlairFilter(a), !a && this.renderFlairFilters(r), i && this.renderButton()))
				}
			}
			t.a = P(w(Object(p.c)(T)))
		},
		"./src/reddit/components/Widgets/RelatedQueries/index.m.less": function(e, t, s) {
			e.exports = {
				searchIcon: "_340rztSaG5YZbk-QlUAAnx",
				relatedQuery: "BX_EeSBX4OAnmdUGshwZt",
				relatedQueryItem: "_3BhePshwzZv2tclBZKhutZ"
			}
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
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
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
				f = s("./src/reddit/selectors/structuredStyles.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				y = s("./src/reddit/models/Theme/index.ts"),
				v = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const O = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(v.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				C = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(v.a)(e).widgetColors.sidebarWidgetHeaderColor,
				E = e => {
					const t = O(e);
					return Object(y.f)(t)
				},
				j = e => {
					const t = C(e);
					return Object(y.f)(t)
				};
			var _ = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				k = s.n(_);
			const {
				fbt: P
			} = s("./node_modules/fbt/lib/FbtPublic.js"), S = Object(m.t)(), w = Object(o.b)(() => Object(a.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(m.m)(e, t) || void 0,
						n = t.redditStyle || Object(f.m)(e, {
							subredditId: s
						}),
						r = Object(g.S)(e);
					return n || r
				},
				nigtmode: g.S,
				subredditId: m.m,
				topPostVariant: x.d
			}));
			class I extends r.a.Component {
				constructor() {
					super(...arguments), this.contentRef = r.a.createRef(), this.state = {
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
					return e.backgroundColor = O(this.props), e.borderColor = Object(h.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = E(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = C(this.props), e.color = e.fill = j(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: o,
						onClick: a,
						title: c,
						titleClassName: l,
						truncateThreshold: m
					} = this.props, u = s ? k.a.widgetContentOnly : k.a.widgetContent, b = !n && this.props.styles, h = b ? this.getWidgetBackgroundStyles() : {}, x = b ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(i.a)(t, k.a.widgetBackground, {
							[k.a.redditStyle]: n,
							[k.a.clickable]: !!a,
							[k.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: a,
						style: h
					}, c && r.a.createElement("div", {
						className: k.a.widgetHeader,
						style: x
					}, r.a.createElement("div", {
						className: Object(i.a)(k.a.widgetTitle, l)
					}, r.a.createElement(d.b, {
						type: d.a.Widget
					}, c)), o), r.a.createElement("div", {
						className: Object(i.a)(u, {
							[k.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? m : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(p.n, {
						className: k.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, P._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = S(w(Object(c.a)(Object(l.c)(I))))
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return x
			})), s.d(t, "b", (function() {
				return f
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/post.ts"),
				a = s("./src/reddit/actions/tooltip.ts"),
				i = s("./src/reddit/models/Vote/index.ts"),
				c = s("./src/reddit/contexts/InsideOverlay.tsx"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/selectors/activeModalId.ts"),
				m = s("./src/reddit/selectors/experiments/chatPost.ts"),
				p = s("./src/reddit/selectors/moderatorPermissions.ts"),
				u = s("./src/reddit/selectors/postFlair.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/user.ts");
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
							postId: s
						} = t;
						return Object(b.r)(e, s)
					},
					language: h.Q,
					moderatorPermissions: p.i,
					modModeEnabled: d.P,
					post: b.O,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: u.a,
					showMedia: d.r,
					subredditOrProfile: b.bb,
					userIsOp: h.hb,
					flairStyleTemplate: d.R
				},
				f = (e, t) => {
					let {
						listingKey: s,
						listingName: n,
						postId: r
					} = t;
					return {
						handleVote: t => {
							const s = t === i.a.upvoted ? Object(o.cb)(r) : Object(o.y)(r);
							e(s)
						},
						onIgnoreReports: () => e(Object(o.ab)(r)),
						onOpenReportsDropdown: t => e(Object(a.h)({
							tooltipId: t
						}))
					}
				},
				g = Object(n.b)(() => Object(r.c)(x), f, (e, t, s) => Object.assign({}, e, t, s, {
					formatTitle: e => e.title
				}));
			t.a = e => g(Object(c.b)(e))
		},
		"./src/reddit/connectors/ClassicPost/searchResults.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./node_modules/core-js/modules/es6.regexp.constructor.js"), s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/LRUCache/index.ts"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/connectors/ClassicPost/index.tsx");
			const l = Object(c.t)({
					searchQuery: c.V
				}),
				m = new i.a(250),
				p = e => {
					const t = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const s = "".concat(e.id, "-").concat(t);
						let n = m.get(s);
						if (void 0 === n) {
							const o = new RegExp("(\\b".concat(t, "\\b)"), "gi"),
								a = e.title.split(o);
							for (let e = 1; e < a.length; e += 2) a[e] = r.a.createElement("em", {
								style: {
									fontWeight: 700
								}
							}, a[e]);
							n = r.a.createElement("span", {
								style: {
									fontWeight: "normal"
								}
							}, r.a.Children.toArray(a)), m.set(s, n)
						}
						return n
					}
				},
				u = Object(o.b)(() => Object(a.c)(d.c), d.b, (e, t, s) => Object.assign({}, e, t, s, {
					formatTitle: p(s.searchQuery || "")
				}));
			t.a = e => l(u(e))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return v
			})), s.d(t, "d", (function() {
				return C
			})), s.d(t, "b", (function() {
				return j
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/actions/ads/index.ts"),
				i = s("./src/reddit/actions/focusedVerticals/index.ts"),
				c = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/actions/postList.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				u = s("./src/reddit/helpers/trackers/post.ts"),
				b = s("./src/reddit/components/PostList/Placeholder.tsx"),
				h = s("./src/reddit/featureFlags/index.ts"),
				x = s("./src/reddit/selectors/listings.ts"),
				f = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/selectors/tracking.ts");

			function v() {
				return Object(m.t)({
					currentProfileName: m.h,
					isCommentPermalink: m.v,
					isCommentsPage: m.w,
					isFrontpage: m.y,
					isProfilePostListing: m.I,
					isTopicPage: m.M,
					pageLayer: e => e
				})
			}
			const O = v(),
				C = {
					apiError: x.c,
					apiPending: x.d,
					measureScrollFPS: h.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(m.N)(e, t),
					loadMore: x.g,
					postsById: f.Z,
					postIds: Object(o.a)((e, t) => {
						let {
							listingKey: s,
							listingName: n,
							inSubredditOrProfile: r
						} = t;
						return Object(f.K)(e, s, n, r)
					}),
					subredditsById: g.X,
					viewportDataLoaded: y.a,
					pageReferrer: m.Q,
					postListPlaceholderComponent: () => b.a
				},
				E = Object(r.c)(C),
				j = (e, t) => {
					let {
						isFrontpage: s
					} = t;
					return {
						onBottomViewed: (t, s) => e(d.c(t, s)),
						adBrandSafetyStatusReceived: t => {
							e(a.d({
								isViewSafe: t
							}))
						},
						openPost: t => {
							s && e(Object(i.a)({
								lastLoadedEnv: "server"
							})), e(c.M(t))
						},
						fireAdPixelsOfType: (t, s) => {
							e(c.B(t, s))
						},
						trackOnPostEnteredViewport: (t, s, n) => {
							e(c.P(t, n))
						},
						trackOnPostExitedViewport: (t, s, n, r) => {
							e(c.Q(t, n, r))
						}
					}
				},
				_ = Object(n.b)(E, j, (e, t, s) => Object.assign({}, e, t, s, {
					postClickEvent: u.f,
					postComponentForLayout: e => Object(p.b)(Object.assign({}, e))
				}));
			t.a = e => Object(l.c)(O(_(e)))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/subscription/index.ts"),
				a = s("./src/reddit/selectors/subreddit.ts"),
				i = s("./src/reddit/selectors/user.ts");
			t.a = Object(n.b)(() => Object(r.c)({
				language: i.Q,
				userIsSubscriber: a.bb
			}), (e, t) => {
				let {
					identifier: s
				} = t;
				return {
					onSubscribe: () => e(o.d([s], !0)),
					onSubscriptionsRequested: () => e(o.e()),
					onUnsubscribe: () => e(o.d([s], !1))
				}
			})
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/post.ts"),
				a = s("./src/reddit/actions/postFlair.ts"),
				i = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/models/Vote/index.ts"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/selectors/activeModalId.ts"),
				m = s("./src/reddit/selectors/moderatorPermissions.ts"),
				p = s("./src/reddit/selectors/postFlair.ts"),
				u = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = Object(n.b)(() => Object(r.c)({
				activeModalId: l.a,
				autoplayPref: b.b,
				crosspostRoot: u.d,
				crosspostSubredditOrProfile: u.e,
				currentUser: b.i,
				flairStyleTemplate: d.R,
				hideNSFWPref: b.z,
				isActive: u.j,
				language: b.Q,
				moderatorPermissions: m.i,
				modModeEnabled: d.P,
				post: u.O,
				showEditFlair: p.a,
				subredditOrProfile: u.bb,
				userIsOp: b.hb
			}), (e, t) => {
				let {
					postId: s
				} = t;
				return {
					dispatchFlairChanged: t => {
						let {
							post: s,
							previewFlair: n,
							selectedTemplateId: r
						} = t;
						return e(Object(a.h)({
							post: s,
							previewFlair: n,
							selectedTemplateId: r
						}))
					},
					handleVote: t => {
						const n = t === c.a.upvoted ? Object(o.cb)(s) : Object(o.y)(s);
						e(n)
					},
					onIgnoreReports: () => e(Object(o.ab)(s)),
					onOpenReportsDropdown: t => e(Object(i.h)({
						tooltipId: t
					}))
				}
			}, (e, t, s) => Object.assign({}, s, e, t, {
				onFlairChanged: s => {
					let {
						previewFlair: n,
						selectedTemplateId: r
					} = s;
					return t.dispatchFlairChanged({
						post: e.post,
						previewFlair: n,
						selectedTemplateId: r
					})
				}
			}), {
				forwardRef: !0
			});
			t.a = h
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
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
			var c = e => r.a.createElement("svg", i({
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), r.a.createElement("g", {
					transform: "translate(-32.000000, -173.000000)"
				}, r.a.createElement("g", {
					transform: "translate(32.000000, 173.000000)"
				}, r.a.createElement("path", {
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
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
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
						let r = "";
						return r = e ? n ? m.a.mDisabledRedditStyle : m.a.mDisabled : n ? m.a.mActiveRedditStyle : m.a.mActive
					})(n, a, i);
					return r.a.createElement(e, p({
						className: Object(o.a)(m.a.Checkbox, d, s)
					}, c))
				},
				h = b(d.a),
				x = b(c);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? x : e.isCheckboxSelected ? h : a.a;
				return r.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: e.className,
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, r.a.createElement(t, {
					className: Object(o.a)(m.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/lodash/throttle.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
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
			var f = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			class g extends a.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = r()(() => {
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
						onMouseMove: r()(this.handleMouseMove, 500)
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
				} = e, s = f(e, ["className"]);
				const n = Object(i.a)(h.a.row, t, {
					[h.a.mIsInteractive]: !s.noHover,
					[h.a.mIsSelected]: s.isSelected,
					[h.a.topics]: s.isTopicsStyle
				});
				return a.a.createElement(g, x({
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
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			class o extends r.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							s = this.props.multiple ? [...t] : t[0];
						this.props.onChange(s), this.setState(() => ({
							value: s
						}))
					}, this.state = {
						value: e.value || ""
					}
				}
				componentWillReceiveProps(e) {
					this.setState(() => ({
						value: e.value || ""
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this, s = "string" == typeof t.value ? t.value : "", n = "object" == typeof t.value ? t.value : null, o = s || n;
					return r.a.createElement("div", {
						className: e.className
					}, s && r.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: s,
						tabIndex: e.tabIndex
					}), !o && r.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						type: "file",
						onChange: this.onFileInput,
						accept: "image/x-png,image/jpeg",
						multiple: e.multiple || !1,
						tabIndex: e.tabIndex
					}))
				}
			}
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
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/prettyPrintNumber/index.ts"),
				c = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/controls/MetaData/index.m.less")),
				d = s.n(c),
				l = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};
			const m = a.a.span("metaText", d.a),
				p = e => o.a.createElement(m, e, " · "),
				u = e => {
					var {
						isScoreHidden: t,
						language: s,
						score: r,
						useUpvotes: a
					} = e, c = l(e, ["isScoreHidden", "language", "score", "useUpvotes"]);
					const d = Object(i.b)(r),
						p = n.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [n.fbt._plural(r, "number", d)], {
							hk: "2L3T21"
						}),
						u = t ? n.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : a ? p : n.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [n.fbt._plural(r, "number", d)], {
							hk: "gf67v"
						});
					return o.a.createElement(m, c, u)
				},
				b = (e, t) => o.a.createElement(m, null, n.fbt._({
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
				r = s("./src/reddit/controls/InternalLink/index.tsx"),
				o = s("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				a = s.n(o);
			t.a = n.a.wrapped(r.a, "unstyledInternalLink", a.a)
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/models/WhitelistStatus/index.ts");
			const r = (e, t) => {
				const s = e.some(e => e.isNSFW),
					r = t.some(e => e.wls === n.a.NO_ADS);
				return !s && !r
			}
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
				return v
			})), s.d(t, "b", (function() {
				return O
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
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
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~9f4422c2"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~be557eac"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~3fa2ee42"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("Poll~ProfileComments~ProfilePrivate~RpanListingUnit~SearchResults~reddit-components-ClassicPost~redd~f8abff80"), s.e("Poll~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~~da5a0d34"), s.e("reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddit-compo~0e38b796"), s.e("reddit-components-ClassicPost")]).then(s.bind(null, "./src/reddit/components/ClassicPost/index.tsx")),
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
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~9f4422c2"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~be557eac"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~3fa2ee42"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("Poll~ProfileComments~ProfilePrivate~RpanListingUnit~SearchResults~reddit-components-ClassicPost~redd~f8abff80"), s.e("Poll~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~~da5a0d34"), s.e("reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddit-compo~0e38b796"), s.e("reddit-components-CompactPost")]).then(s.bind(null, "./src/reddit/components/CompactPost/index.tsx")),
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
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~9f4422c2"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~be557eac"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~3fa2ee42"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("Poll~ProfileComments~ProfilePrivate~RpanListingUnit~SearchResults~reddit-components-ClassicPost~redd~f8abff80"), s.e("Poll~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~~da5a0d34"), s.e("reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddit-compo~0e38b796"), s.e("reddit-components-LargePost")]).then(s.bind(null, "./src/reddit/components/LargePost/index.tsx")),
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
					importAsync: () => Promise.all([s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("Poll~ProfileComments~ProfilePrivate~RpanListingUnit~SearchResults~reddit-components-ClassicPost~redd~f8abff80"), s.e("Poll~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~~da5a0d34"), s.e("reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddit-compo~0e38b796"), s.e("reddit-components-MediumPost")]).then(s.bind(null, "./src/reddit/components/MediumPost/index.tsx")),
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
				x = e => o.a.createElement(l, e),
				f = ["https://www.mcdonalds.com", "https://d2n94wep25xhn0.cloudfront.net", "https://www.dyson.com", "https://dyson.com"],
				g = e => e.source && e.source.url && e.isSponsored && f.some(t => e.source.url.startsWith(t)),
				y = e => !e.media || e.media.type === d.n.EMBED && !(d.b.has(e.media.provider) || g(e)),
				v = (e, t) => {
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
					post: r
				} = e;
				if (r.isBlank) return x;
				const o = !r.media && !!r.source && Object(a.a)(r.source.url),
					d = t && o;
				n === c.g.Large && y(r) && !d && (n = c.g.Medium);
				const l = h[n];
				return void 0 === l ? (Object(i.a)(void 0, "Could not find component for layout ".concat(n, ".")), x) : s && r.isSponsored && n === c.g.Large ? b : l
			}
		},
		"./src/reddit/helpers/search/hasSearchGrammar.ts": function(e, t, s) {
			"use strict";
			t.a = e => {
				return /\b(author|subreddit|flair|nsfw|self|selftext|site|url):[^\b]+/.test(e)
			}
		},
		"./src/reddit/helpers/styles/mixins/index.m.less": function(e, t, s) {
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
				return f
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				o = s("./src/reddit/helpers/styles/smartTextColor.ts"),
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
				f = e => {
					const t = Object(o.a)(Object(r.a)(e), a.a.actionIcon, a.b.actionIcon);
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
				return r
			})), s.d(t, "b", (function() {
				return o
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const r = (e, t, s, r) => o => ({
					source: "report_prompt",
					noun: s,
					action: r,
					subreddit: n.subredditByName(o, e),
					post: n.post(o, t)
				}),
				o = (e, t, s, r) => o => ({
					source: "report_survey",
					noun: s,
					action: r,
					subreddit: n.subredditByName(o, e),
					post: n.post(o, t)
				})
		},
		"./src/reddit/hooks/useOnClickOutside.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js");

			function r(e, t) {
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
			}
		},
		"./src/reddit/hooks/useTracking.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = n.b
		},
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("archived"), c.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc))
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
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				i = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(o.b)("dropdownTriangle"), " ").concat(e.className)
			}), "DropdownTriangle", i.a);
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
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				i = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(o.b)("expandoArrowCollapse"), " ").concat(e.className),
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
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				i = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(o.b)("expandoArrowExpand"), " ").concat(e.className),
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
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Menu/index.m.less"),
				i = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(o.b)("menu"), " ").concat(e.className)
			}), "MenuIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Op/index.m.less": function(e, t, s) {
			e.exports = {
				OpIcon: "_3mrrZsVUDI2b3p1rpkjbph",
				opIcon: "_3mrrZsVUDI2b3p1rpkjbph"
			}
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Cake/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				className: e.className,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M37.5,22.5V20h-35v15c0,1.4,1.1,2.5,2.5,2.5h30c1.4,0,2.5-1.1,2.5-2.5v0H6.2C5.6,35,5,34.5,5,33.8l0,0c0-0.7,0.6-1.2,1.2-1.2h31.3V30H6.2C5.6,30,5,29.5,5,28.8v0c0-0.7,0.6-1.2,1.2-1.2h31.3V25H6.2C5.6,25,5,24.5,5,23.8v0c0-0.7,0.6-1.2,1.2-1.2H37.5z"
			}), r.a.createElement("path", {
				d: "M22.5,6c0,1.4-1.1,2.5-2.5,2.5S17.5,7.4,17.5,6S20,0,20,0S22.5,4.6,22.5,6z"
			}), r.a.createElement("path", {
				d: "M20,15L20,15c-0.7,0-1.3-0.6-1.3-1.2v-2.5c0-0.7,0.6-1.2,1.2-1.2h0c0.7,0,1.2,0.6,1.2,1.2v2.5C21.2,14.5,20.7,15,20,15z"
			}), r.a.createElement("path", {
				d: "M22.8,11.3v2.3c0,1.4-1,2.7-2.5,2.9c-1.6,0.2-3-1.1-3-2.7v-5c0,0,0-0.1,0-0.1l-0.8-0.4c-0.9-0.4-2-0.3-2.7,0.4L2.5,18.5h35L22.8,11.3z"
			}))))
		},
		"./src/reddit/pages/SearchResults/index.m.less": function(e, t, s) {
			e.exports = {
				sidebar: "_35ky2Wm3TP6kFdIh-DOxmA",
				announcement: "_38miRaQjZDUy2B55AHWYlg"
			}
		},
		"./src/reddit/pages/SearchResults/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/core-js/modules/es6.array.sort.js"),
				r = s.n(n),
				o = s("./node_modules/core-js/modules/es6.regexp.match.js"),
				a = s.n(o),
				i = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				c = s("./node_modules/lodash/pick.js"),
				d = s.n(c),
				l = s("./node_modules/react/index.js"),
				m = s.n(l),
				p = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/reselect/es/index.js"),
				b = s("./src/lib/constants/index.ts"),
				h = s("./src/lib/makeSearchKey/index.ts"),
				x = s("./src/reddit/components/JumpToContent/index.tsx"),
				f = s("./src/reddit/components/SearchResultsContent/index.tsx"),
				g = s("./src/reddit/components/SearchResultsNav/index.tsx"),
				y = s("./src/reddit/components/SearchResultsSidebar/index.tsx"),
				v = s("./src/reddit/components/TrackingHelper/index.tsx"),
				O = s("./src/reddit/constants/covid.ts"),
				C = s("./src/reddit/constants/page.ts"),
				E = s("./src/reddit/constants/parameters.ts"),
				j = s("./src/reddit/contexts/PageLayer/index.tsx"),
				_ = s("./src/reddit/helpers/correlationIdTracker.ts"),
				k = s("./src/reddit/helpers/trackers/searchResults.ts"),
				P = s("./src/reddit/layout/page/Listing/index.tsx"),
				S = s("./src/reddit/selectors/experiments/railsSearchResults.ts"),
				w = s("./src/reddit/selectors/meta.ts"),
				I = s("./src/reddit/selectors/searchResults.ts"),
				N = s("./src/reddit/selectors/subreddit.ts"),
				T = s("./src/reddit/pages/SearchResults/index.m.less"),
				M = s.n(T);
			const L = Object(i.a)({
					resolved: {},
					chunkName: () => "FeaturedLiveEntrypointLegacyAnnouncement",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("FeaturedLiveEntrypointLegacyAnnouncement").then(s.bind(null, "./src/reddit/components/FeaturedLiveEntrypoint/LegacyAnnouncement/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/FeaturedLiveEntrypoint/LegacyAnnouncement/index.tsx"
					}
				}),
				R = Object(j.t)({
					currentPageUrl: j.e,
					queryParams: j.S,
					shouldShowCovidBanner: j.W
				}),
				F = () => Object(u.c)({
					headerContent: I.a,
					isInFollowExperiment: S.a,
					origin: w.k,
					subreddit: (e, t) => Object(N.z)(e, {
						subredditName: t.match.params.subredditName
					}),
					viewTreatment: I.h
				}),
				A = Object(p.b)(F);
			class B extends m.a.Component {
				constructor(e) {
					super(e), this.renderCovidBanner = () => {
						const {
							queryParams: e,
							sendEvent: t
						} = this.props, s = s => t(Object(k.b)(s, Object(h.c)(d()(e || {}, E.q))));
						return this.state.didSendCovidSeenEvent || (s("view"), this.setState({
							didSendCovidSeenEvent: !0
						})), m.a.createElement(L, {
							announcement: O.a,
							className: M.a.announcement,
							onBtnClick: () => s("click"),
							onClose: () => {
								s("dismiss"), this.setState({
									isCovidBannerHidden: !0
								})
							}
						})
					}, this.state = {
						didSendCovidSeenEvent: !1,
						isCovidBannerHidden: !1
					}
				}
				componentDidMount() {
					Object(_.c)(_.a.SearchResults) || Object(_.d)(_.a.SearchResults)
				}
				componentWillUnmount() {
					Object(_.b)(_.a.SearchResults)
				}
				componentDidUpdate(e) {
					this.props.queryParams !== e.queryParams && this.setState({
						didSendCovidSeenEvent: !1,
						isCovidBannerHidden: !1
					})
				}
				render() {
					const {
						currentPageUrl: e,
						headerContent: t,
						isInFollowExperiment: s,
						location: n,
						match: r,
						origin: o,
						queryParams: a,
						shouldShowCovidBanner: i,
						subreddit: c,
						viewTreatment: l
					} = this.props, {
						isCovidBannerHidden: p
					} = this.state, u = r.params.subredditName || r.params.multiredditName || "", v = r.params.username, O = Object(h.c)(d()(a || {}, E.q)), j = Object.assign({}, O, {
						sort: O.category ? b.Ib.Relevance : O.sort,
						t: O.category ? b.Pb.DAY : O.t
					}), _ = Object(h.b)(u, v, j);
					let k;
					return k = c && O.restrict_sr || 1 === j.type.length && j.type[0] === b.Kb.Posts ? C.g.Posts : j.type.length > 0 && -1 === j.type.indexOf(b.Kb.Posts) && (j.type.indexOf(b.Kb.Subreddits) > -1 || j.type.indexOf(b.Kb.Users) > -1) ? C.g.Listings : C.g.Top, m.a.createElement(P.a, {
						className: this.props.className,
						navBar: m.a.createElement(g.a, {
							currentPageUrl: "".concat(o).concat(e),
							headerContent: t,
							isInFollowExperiment: s,
							location: n,
							searchOptions: j,
							subreddit: c,
							tab: k,
							viewTreatment: l
						}),
						content: m.a.createElement(m.a.Fragment, null, m.a.createElement(x.a, null), i && !p && this.renderCovidBanner(), m.a.createElement(f.a, {
							listingKey: _,
							listingName: u,
							location: n,
							searchOptions: j,
							tab: k
						})),
						sidebar: m.a.createElement(y.a, {
							className: M.a.sidebar,
							listingKey: _,
							listingName: u || C.b,
							searchOptions: j,
							tab: k
						})
					})
				}
			}
			t.default = R(A(Object(v.c)(B)))
		},
		"./src/reddit/selectors/experiments/railsSearchResults.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => n.Wb.Treatment1 === Object(r.c)(e, {
				experimentEligibilitySelector: r.a,
				experimentName: n.Ub
			})
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
//# sourceMappingURL=SearchResults.009cb94b2e430eaab42c.js.map