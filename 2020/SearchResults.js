// https://www.redditstatic.com/desktop2x/SearchResults.30b601e1717f603de7bf.js
// Retrieved at 3/5/2020, 3:00:07 PM by Reddit Dataminer v1.0.0
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
				return Object(i.b)(t)
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
		"./src/reddit/actions/subreddit/inlineEditing.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return y
			})), s.d(t, "a", (function() {
				return O
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
			const h = Object(r.a)(a.p),
				g = Object(r.a)(a.q),
				x = Object(r.a)(a.o),
				y = (e, t, s) => async (n, r, o) => {
					const a = Object(u.y)(r(), {
						subredditName: e
					});
					if (a) return O(a, t, s)(n, r, o)
				}, f = () => n.fbt._("Error uploading image, please try again later", null, {
					hk: "7ZIYs"
				}), O = (e, t, s) => async (r, a, u) => {
					const y = await Object(l.e)(t);
					r(h());
					const O = a();
					try {
						await Object(o.g)("communityIcon", y, e.id)(r, a, u)
					} catch (E) {
						return Object(b.a)(Object(d.c)(O, "something went wrong with the uploading the image")), r(Object(i.e)({
							kind: m.b.Error,
							text: f()
						})), void r(x())
					}
					const v = Object(p.d)(a(), {
						name: "communityIcon"
					});
					if (!v) return Object(b.a)(Object(d.c)(O, "image is null")), r(Object(i.e)({
						kind: m.b.Error,
						text: f()
					})), void r(x());
					await Object(o.k)(e.id, {
						communityIcon: v
					}, c.b.idCard, s)(r, a, u), r(Object(i.e)({
						kind: m.b.SuccessCommunity,
						text: n.fbt._("Successfully updated Community Icon!", null, {
							hk: "29LGdg"
						})
					})), r(g())
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
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
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
				g = s("./src/reddit/components/ModModeReports/index.tsx"),
				x = s("./src/reddit/components/ModModeReports/helpers.ts"),
				y = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				f = s("./src/reddit/components/PostContainer/index.tsx"),
				O = s("./src/reddit/components/PostMedia/index.tsx"),
				v = s("./src/reddit/components/PostMeta/index.tsx"),
				E = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				C = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				j = s("./src/reddit/components/PostTitle/index.tsx"),
				S = s("./src/reddit/components/PostTopMeta/index.tsx"),
				k = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				_ = s("./src/reddit/models/Media/index.ts"),
				P = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				w = s("./node_modules/react-redux/es/index.js"),
				I = s("./node_modules/reselect/es/index.js"),
				T = s("./src/reddit/actions/post.ts"),
				N = s("./src/reddit/actions/tooltip.ts"),
				L = s("./src/reddit/models/Vote/index.ts"),
				M = s("./src/reddit/contexts/InsideOverlay.tsx"),
				R = s("./src/reddit/contexts/PageLayer/index.tsx"),
				F = s("./src/reddit/selectors/activeModalId.ts"),
				A = s("./src/reddit/selectors/experiments/chatPost.ts"),
				B = s("./src/reddit/selectors/moderatorPermissions.ts"),
				D = s("./src/reddit/selectors/postFlair.ts"),
				U = s("./src/reddit/selectors/posts.ts"),
				V = s("./src/reddit/selectors/user.ts");
			const W = {
					autoplayPref: V.b,
					activeModalId: F.a,
					crosspost: U.c,
					currentUser: V.i,
					isActive: U.h,
					isChatPostExperiment: A.d,
					isCurrentUserProfilePost: U.i,
					isExpanded: U.k,
					isLoggedIn: V.G,
					isMeta: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(U.p)(e, s)
					},
					language: V.O,
					moderatorPermissions: B.i,
					modModeEnabled: R.N,
					post: U.M,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: D.a,
					showMedia: R.r,
					subredditOrProfile: U.Y,
					userIsOp: V.eb,
					flairStyleTemplate: R.P
				},
				H = (e, t) => {
					let {
						listingKey: s,
						listingName: n,
						postId: r
					} = t;
					return {
						handleVote: t => {
							const s = t === L.a.upvoted ? Object(T.X)(r) : Object(T.u)(r);
							e(s)
						},
						onIgnoreReports: () => e(Object(T.V)(r)),
						onOpenReportsDropdown: t => e(Object(N.h)({
							tooltipId: t
						}))
					}
				},
				q = Object(w.b)(() => Object(I.c)(W), H, (e, t, s) => Object.assign({}, e, t, s, {
					formatTitle: e => e.title
				}));
			s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./node_modules/core-js/modules/es6.regexp.constructor.js");
			var z = s("./src/lib/LRUCache/index.ts");
			const K = Object(R.t)({
					searchQuery: R.T
				}),
				J = new z.a(250),
				G = e => {
					const t = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const s = "".concat(e.id, "-").concat(t);
						let n = J.get(s);
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
							}, r.a.Children.toArray(a)), J.set(s, n)
						}
						return n
					}
				},
				Q = Object(w.b)(() => Object(I.c)(W), H, (e, t, s) => Object.assign({}, e, t, s, {
					formatTitle: G(s.searchQuery || "")
				}));
			var Y = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				Z = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				X = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				$ = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				ee = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				te = s.n(ee),
				se = s("./src/reddit/components/ClassicPost/index.m.less"),
				ne = s.n(se);

			function re() {
				return (re = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "renderMedia", (function() {
				return ie
			})), s.d(t, "SearchResultsClassicPost", (function() {
				return le
			}));
			const oe = 16;
			class ae extends r.a.Component {
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
						inSubredditOrProfile: O,
						eventFactory: w,
						first: I,
						flairStyleTemplate: T,
						formatTitle: N,
						isCheckboxSelected: L,
						isCurrentUserProfilePost: M,
						isFrontpage: R,
						isLoggedIn: F,
						isOverlay: A,
						language: B,
						moderatorPermissions: D,
						modModeEnabled: U,
						onClickPost: V,
						onIgnoreReports: W,
						onOpenReportsDropdown: H,
						poll: q,
						post: z,
						redditStyle: K,
						scrollerItemRef: J,
						showBulkActionCheckbox: G,
						showEditFlair: Q,
						showMedia: ee,
						subredditOrProfile: se,
						toggleCheckbox: ae,
						userIsOp: ce
					} = this.props, de = K ? void 0 : T, le = this.props.crosspost || void 0, me = Object(X.a)(D), pe = Object(Y.a)(D), ue = Object(Z.a)(D), be = U && X.a, he = !!z.media && z.media.type === _.n.RTJSON, ge = ce && he, xe = O && !ee, ye = !!z.media && Object(_.C)(z.media), fe = {
						flairStyleTemplate: de,
						post: z,
						inSubredditOrProfile: O,
						isCurrentUserProfilePost: M,
						isOverlay: A,
						shouldShowSubscribeButton: !(R && F),
						subredditOrProfile: se,
						language: B
					}, Oe = r.a.createElement(f.a, {
						className: Object(a.a)(te.a.classicPostStyles, ne.a.postContainer, Object($.a)(this.props), I ? ne.a.mFirst : void 0, e),
						isOverlay: A,
						style: Object.assign({}, Object($.d)(this.props), Object($.b)(this.props.flairStyleTemplate)),
						post: z,
						onClick: V,
						eventFactory: w
					}, r.a.createElement(C.a, {
						model: z,
						handleVote: s,
						showBulkActionCheckbox: G,
						isCheckboxSelected: L,
						toggleCheckbox: ae,
						flairStyleTemplate: de,
						redditStyle: K
					}), r.a.createElement(y.a, {
						"data-click-id": "background",
						flairStyleTemplate: de
					}, r.a.createElement(p.a, {
						className: ne.a.eventMeta,
						post: z,
						language: B
					}), r.a.createElement("div", {
						className: ne.a.mainBody
					}, r.a.createElement("div", {
						className: xe ? ne.a.expandoContainer : ne.a.thumbnailContainer
					}, !xe && r.a.createElement(P.a, {
						className: ne.a.classicThumbnail,
						crosspost: le && z,
						isMeta: i,
						post: le || z,
						redditStyle: K,
						templatePlaceholderImage: de && de.postPlaceholderImage,
						removeLink: ye
					}), r.a.createElement(u.a, {
						crosspost: le,
						className: ne.a.rightExpando,
						isExpanded: !!n,
						post: z,
						useMediaIcons: !1
					})), r.a.createElement("div", {
						className: ne.a.content,
						"data-click-id": "body",
						style: {
							paddingBottom: "".concat(oe, "px")
						}
					}, r.a.createElement(j.c, {
						className: q ? ne.a.titleWithPoll : void 0,
						format: N,
						poll: q,
						post: z,
						redditStyle: K,
						size: j.b.Medium,
						titleColor: de && de.postTitleColor,
						isOverlay: A
					}, z.source && !le && r.a.createElement(k.a, {
						href: z.source.url,
						isSponsored: z.isSponsored,
						source: z.source
					}, Object(c.a)(z))), r.a.createElement(v.a, re({
						key: "PostMeta"
					}, fe)), U && me && Object(x.c)(z) && r.a.createElement(g.a, {
						language: B,
						onIgnoreReports: W,
						reportable: z
					}), r.a.createElement("div", {
						className: ne.a.spacer
					}), z.source && z.source.url && z.isSponsored && r.a.createElement(d.a, {
						className: ne.a.adLinkWrapper
					}, r.a.createElement(k.a, {
						href: z.source.url.replace(o.a.redditUrl, ""),
						isSponsored: z.isSponsored,
						source: z.source
					}, z.source.displayText), z.callToAction && r.a.createElement(l.a, {
						href: z.source.url.replace(o.a.redditUrl, ""),
						isSponsored: z.isSponsored,
						source: z.source
					}, z.callToAction)), r.a.createElement("div", {
						className: ne.a.flatlistContainer
					}, r.a.createElement(u.a, {
						className: ne.a.leftExpando,
						crosspost: le,
						isExpanded: !!n,
						post: z,
						useMediaIcons: !1
					}), r.a.createElement(m.a, {
						className: ne.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: de,
						model: z,
						onVoteClick: s
					}), r.a.createElement(b.a, {
						className: ne.a.flatlistSeparator
					}), r.a.createElement(b.c, {
						className: ne.a.flatlist,
						currentUser: t,
						hasModFlairPerms: pe,
						hasModPostPerms: me,
						hasModFullPerms: ue,
						isOverlay: !!A,
						language: B,
						modModeEnabled: U,
						onIgnoreReports: W,
						onOpenReportsDropdown: H,
						post: z,
						showEditPost: ge,
						showEditFlair: Q,
						tooltipType: A ? S.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(E.h)({
							editPost: !be,
							save: !be,
							hide: !be,
							report: !be
						})
					})), r.a.createElement(h.d, {
						postId: z.id
					}))), ie(z, J, n)));
					return r.a.createElement(r.a.Fragment, null, Oe)
				}
			}
			const ie = (e, t, s) => s ? e.crosspostRootId ? r.a.createElement("div", {
					className: ne.a.crosspostMediaWrapper
				}, ce(e, t)) : ce(e, t) : null,
				ce = (e, t) => r.a.createElement(O.a, {
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
			t.default = (e => q(Object(M.b)(e)))(de)
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
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
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
				g = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				x = s("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				y = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				f = s("./src/reddit/featureFlags/index.ts"),
				O = s("./src/reddit/selectors/economics.ts"),
				v = s("./src/reddit/components/Economics/TopTippers/Icon/index.tsx"),
				E = s("./src/reddit/components/Economics/TopTippers/CommentUsername/index.m.less"),
				C = s.n(E);
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
			var S = Object(o.b)(() => Object(a.c)({
					post: (e, t) => {
						let {
							contentId: s
						} = t;
						return e.posts.models[s]
					},
					tippers: (e, t) => {
						if (f.d.spTopTippers(e)) return Object(O.v)(e, t)
					}
				}))((function(e) {
					if (e.tippers && e.tippers.allTippers.has(e.userId)) {
						const t = e.tippers.topTippers.ranking[e.userId] || 5,
							s = r.a.cloneElement(r.a.Children.only(e.children), {
								style: j(t)
							});
						return r.a.createElement("div", {
							className: C.a.container
						}, r.a.createElement(v.a, {
							className: C.a.badge,
							creatorId: e.creatorId || e.post && e.post.authorId,
							rank: t,
							subredditId: e.subredditId
						}), s)
					}
					return e.children
				})),
				k = s("./src/reddit/components/Flair/index.tsx"),
				_ = s("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				P = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				w = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				I = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				T = s("./src/reddit/components/PostTopMeta/index.tsx"),
				N = s("./src/reddit/helpers/isRemoved.ts"),
				L = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				M = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				R = s("./src/reddit/i18n/utils.ts"),
				F = s("./src/reddit/actions/comment/index.ts"),
				A = s("./src/reddit/models/Comment/index.ts"),
				B = s("./src/reddit/models/Flair/index.ts"),
				D = s("./src/reddit/icons/fonts/Admin/index.tsx"),
				U = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				V = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				W = s("./src/reddit/icons/fonts/helpers.tsx"),
				H = s("./src/reddit/icons/fonts/Op/index.m.less"),
				q = s.n(H);
			var z = p.a.wrapped(e => r.a.createElement("i", {
					className: "".concat(Object(W.b)("op"), " ").concat(e.className),
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, r.a.createElement(W.a, null, e.desc)), "OpIcon", q.a),
				K = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				J = s("./src/reddit/icons/fonts/Report/index.tsx"),
				G = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				Q = s("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				Y = s("./src/reddit/icons/svgs/Cake/index.tsx"),
				Z = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				X = s("./src/reddit/controls/MetaData/index.tsx"),
				$ = s("./src/reddit/selectors/experiments/publicAwarding.ts"),
				ee = s("./src/reddit/selectors/subreddit.ts"),
				te = s("./src/reddit/selectors/userFlair.ts"),
				se = s("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				ne = s.n(se);

			function re() {
				return (re = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var oe = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const ae = p.a.wrapped(k.b, "RightPositionedAuthorFlair", ne.a),
				ie = p.a.wrapped(D.a, "AdminIcon", ne.a),
				ce = p.a.wrapped(U.a, "Approve", ne.a),
				de = p.a.wrapped(V.a, "Lock", ne.a),
				le = p.a.div("AdminEmeritus", ne.a),
				me = p.a.wrapped(Q.a, "Automoderator", ne.a),
				pe = p.a.wrapped(Y.a, "CakeIcon", ne.a),
				ue = p.a.wrapped(Z.a, "Moderator", ne.a),
				be = p.a.wrapped(K.a, "Remove", ne.a),
				he = p.a.wrapped(J.a, "Report", ne.a),
				ge = p.a.wrapped(G.a, "Spam", ne.a),
				xe = p.a.wrapped(z, "Op", ne.a),
				ye = p.a.wrapped(D.a, "Contractor", ne.a),
				fe = p.a.a("MetaLink", ne.a),
				Oe = p.a.wrapped(X.a, "EditedText", ne.a),
				ve = p.a.wrapped(X.a, "StickiedText", ne.a),
				Ee = p.a.span("DeletedText", ne.a),
				Ce = p.a.wrapped(X.a, "MetaSeparator", ne.a),
				je = p.a.wrapped(X.a, "CrowdControlText", ne.a),
				Se = p.a.wrapped(P.b, "AuthorHoverCard", ne.a),
				ke = p.a.a("RemovalReason", ne.a),
				_e = p.a.wrapped(g.b, "Component", ne.a),
				Pe = Object(i.c)("comment.children"),
				we = Object(i.c)("comment.moreThanChildren"),
				Ie = e => (t, s) => {
					let {
						comment: n,
						renderedInOverlay: r
					} = s;
					return "".concat(e).concat(n.id).concat(r ? "inOverlay" : "")
				},
				Te = Object(i.d)("comment.tooltips.admin"),
				Ne = Object(i.d)("comment.tooltips.cakeday"),
				Le = Object(i.d)("comment.tooltips.adminEmeritus"),
				Me = Object(i.d)("comment.tooltips.moderator"),
				Re = Object(i.d)("comment.tooltips.op"),
				Fe = Object(i.d)("comment.tooltips.contractor"),
				Ae = Object(o.b)(() => Object(a.c)({
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
						return !!Object(O.t)(e, s.subredditId, s.authorId).length
					},
					subredditDisplayText: (e, t) => {
						const s = Object(ee.G)(e, {
							commentId: t.comment.id
						});
						return s ? s.displayText : ""
					},
					topTippersEnabled: f.d.spTopTippers,
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
								window.removeEventListener("focus", s), e(Object(F.N)({
									commentListNodeId: t
								})), window.setTimeout(() => e(Object(F.N)({
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
			t.a = Ae(e => {
				const {
					adminEmeritusTooltipId: t,
					adminTooltipId: s,
					approveTooltipId: n,
					automodTooltipId: o,
					cakedayTooltipId: a,
					children: i,
					className: c,
					collapsed: m,
					collapsedBecauseCrowdControl: p,
					comment: u,
					commentsPageKey: b,
					contractorTooltipId: g,
					compact: f,
					flair: O,
					flairPosition: v,
					hasBadges: E,
					isLivestreaming: C,
					ignoreFlairPosition: j,
					ignoreLock: S,
					language: P,
					lockedTooltipId: w,
					modTooltipId: N,
					onHideTooltip: L,
					onShowTooltip: M,
					opTooltipId: R,
					openRemovalReasonModal: F,
					publicAwardersEnabled: D,
					removeTooltipId: U,
					renderContractorBadge: V,
					renderedInOverlay: W,
					reportTooltipId: H,
					spamTooltipId: q,
					subredditDisplayText: z,
					topTippersEnabled: K
				} = e;
				if (u.isDeleted) return r.a.createElement(Be, re({}, e, {
					className: Object(d.a)(c, ne.a.container, {
						[ne.a.collapsed]: m
					})
				}));
				if (m) return r.a.createElement(De, re({}, e, {
					className: Object(d.a)(c, ne.a.container, {
						[ne.a.collapsed]: m
					})
				}));
				const J = !j && v === B.b.Left;
				return r.a.createElement("div", {
					className: Object(d.a)(c, ne.a.container, {
						[ne.a.collapsed]: m,
						[ne.a.hasBadges]: E,
						[ne.a.liveStreaming]: C
					})
				}, O && J && r.a.createElement(k.b, {
					flair: O,
					forceSmallEmojis: f
				}), !Object(A.d)(u) && r.a.createElement(_e, {
					showAddCustom: !0,
					subredditId: u.subredditId,
					userId: u.authorId,
					uniqueIdentifier: u.id
				}), r.a.createElement(Se, {
					postOrComment: u,
					tooltipType: W ? T.c.Lightbox : void 0
				}, r.a.createElement(x.b, {
					ignore: Object(A.d)(u) || !!u.distinguishType && u.distinguishType !== l.C.NONE,
					subredditId: u.subredditId,
					userId: u.authorId
				}, r.a.createElement(Ve, {
					comment: u,
					isLivestreaming: C,
					isStrong: !!f,
					isAuthorDeleted: Object(A.d)(u),
					topTippersEnabled: K
				}, i && i))), p && r.a.createElement(je, null, "Crowd Control"), p && r.a.createElement(X.c, {
					className: ne.a.metaText,
					key: "crowdControlSeparator"
				}), O && !J && r.a.createElement(ae, {
					flair: O,
					forceSmallEmojis: f
				}), !f && r.a.createElement(_.a, {
					className: ne.a.publicPoints,
					contentId: u.id,
					subredditId: u.subredditId,
					userId: u.authorId,
					username: u.author
				}), r.a.createElement(r.a.Fragment, null, r.a.createElement(I.b, {
					commentId: u.id
				}), r.a.createElement(I.a, {
					commentId: u.id,
					commentsPageKey: b
				}), r.a.createElement(qe, {
					comment: u,
					compact: f,
					adminTooltipId: s,
					adminEmeritusTooltipId: t,
					cakedayTooltipId: a,
					contractorTooltipId: g,
					language: P,
					modTooltipId: N,
					onHideTooltip: L,
					onShowTooltip: M,
					opTooltipId: R,
					renderContractorBadge: V,
					subredditDisplayText: z
				})), !f && r.a.createElement(r.a.Fragment, null, !u.isDeleted && r.a.createElement(X.b, {
					className: ne.a.metaText,
					isScoreHidden: u.isScoreHidden,
					language: P,
					score: u.score
				}), r.a.createElement(X.c, {
					className: ne.a.metaText,
					key: "scoreCreatedSeparator"
				}), r.a.createElement(We, re({
					key: "Created"
				}, e)), u.isStickied && Ke(P), u.editedAt && Ue(P, u.editedAt)), r.a.createElement(r.a.Fragment, null, r.a.createElement(ze, {
					comment: u,
					approveTooltipId: n,
					automodTooltipId: o,
					ignoreLock: S,
					language: P,
					lockedTooltipId: w,
					onHideTooltip: L,
					onShowTooltip: M,
					openRemovalReasonModal: F,
					removeTooltipId: U,
					reportTooltipId: H,
					spamTooltipId: q
				}), r.a.createElement(y.a, {
					className: ne.a.DonationAmount,
					contentId: u.id,
					subredditId: u.subredditId
				})), r.a.createElement(h.a, {
					showAwarders: D,
					tooltipType: W ? T.c.Lightbox : void 0,
					thing: u
				}))
			});
			const Be = e => {
					const {
						language: t,
						childrenInfo: s,
						collapsed: n,
						className: o,
						comment: a
					} = e;
					return r.a.createElement("div", {
						className: o
					}, r.a.createElement(Ee, null, a.deletedBy === A.a.User ? Object(i.a)(t, "comment.commentDeletedByAuthor") : Object(i.a)(t, "comment.commentDeletedByMod")), r.a.createElement(We, re({
						key: "Created"
					}, e)), n && He({
						childrenInfo: s,
						language: t
					}))
				},
				De = e => {
					const {
						comment: t,
						language: s,
						className: n,
						childrenInfo: o
					} = e;
					return r.a.createElement("div", {
						className: n
					}, r.a.createElement("div", null, r.a.createElement(Ve, {
						comment: t,
						isAuthorDeleted: Object(A.d)(t),
						topTippersEnabled: !1
					})), r.a.createElement(X.b, {
						className: ne.a.metaText,
						isScoreHidden: t.isScoreHidden,
						language: s,
						score: t.score
					}), r.a.createElement(X.c, {
						className: ne.a.metaText,
						key: "scoreCreatedSeparator"
					}), r.a.createElement(We, re({
						key: "Created"
					}, e)), He({
						childrenInfo: o,
						language: s
					}))
				},
				Ue = (e, t) => r.a.createElement(n.Fragment, null, r.a.createElement(X.c, {
					className: ne.a.metaText
				}), r.a.createElement(Oe, null, Object(i.a)(e, "comment.edited", {
					time: Object(u.d)(e, t)
				}))),
				Ve = e => {
					const t = r.a.createElement(b.a, {
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
					return e.topTippersEnabled ? r.a.createElement(S, {
						contentId: e.comment.postId,
						subredditId: e.comment.subredditId,
						userId: e.comment.authorId
					}, t) : t
				};
			class We extends r.a.PureComponent {
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
						o = oe(e, ["comment", "language", "onCreatedClick"]);
					return r.a.createElement(fe, {
						href: t.permalink,
						id: o.createdTooltipId,
						onClick: n,
						onMouseEnter: this.onShowCreatedTooltip,
						onMouseLeave: o.onHideTooltip,
						rel: "nofollow",
						target: "_blank"
					}, r.a.createElement("span", null, Object(u.d)(s, t.created)), Je(o.createdTooltipId, Object(m.a)(t.created)))
				}
			}
			const He = e => {
				const {
					hasContinueThread: t,
					numChildren: s
				} = e.childrenInfo || {
					hasContinueThread: !1,
					numChildren: 0
				};
				return r.a.createElement(Ce, {
					className: ne.a.metaText
				}, "(", t ? we(e.language, s, {
					numChildren: s
				}) : Pe(e.language, s, {
					numChildren: s
				}), ")")
			};
			class qe extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCakedayTooltip = () => this.props.onShowTooltip(this.props.cakedayTooltipId), this.onShowAdminTooltip = () => this.props.onShowTooltip(this.props.adminTooltipId), this.onShowAdminEmeritusTooltip = () => this.props.onShowTooltip(this.props.adminEmeritusTooltipId), this.onShowModTooltip = () => this.props.onShowTooltip(this.props.modTooltipId), this.onShowOpTooltip = () => this.props.onShowTooltip(this.props.opTooltipId), this.onShowContractorTooltip = () => this.props.onShowTooltip(this.props.contractorTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t
						} = e,
						s = oe(e, ["comment"]);
					return r.a.createElement(n.Fragment, null, t.isAuthorCakeday && r.a.createElement(pe, {
						"aria-label": Ne(s.language),
						id: s.cakedayTooltipId,
						onMouseEnter: this.onShowCakedayTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isAuthorCakeday && Je(s.cakedayTooltipId, Ne(s.language)), t.isAdmin && r.a.createElement(ie, {
						desc: Te(s.language),
						id: s.adminTooltipId,
						onMouseEnter: this.onShowAdminTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isAdmin && Je(s.adminTooltipId, Te(s.language)), t.distinguishType === l.C.ALUMNI_ADMIN && r.a.createElement(le, {
						"aria-label": Le(s.language),
						children: "Δ",
						id: s.adminEmeritusTooltipId,
						onMouseEnter: this.onShowAdminEmeritusTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.distinguishType === l.C.ALUMNI_ADMIN && Je(s.adminEmeritusTooltipId, Le(s.language)), t.isMod && r.a.createElement(ue, {
						desc: Me(s.language, {
							displayText: s.subredditDisplayText
						}),
						id: s.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isMod && Je(s.modTooltipId, Me(s.language, {
						displayText: s.subredditDisplayText
					})), t.isOp && r.a.createElement(xe, {
						desc: Re(s.language),
						id: s.opTooltipId,
						onMouseEnter: this.onShowOpTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isOp && Je(s.opTooltipId, Re(s.language)), s.renderContractorBadge && r.a.createElement(ye, {
						desc: Fe(s.language),
						id: s.contractorTooltipId,
						onMouseEnter: this.onShowContractorTooltip,
						onMouseLeave: s.onHideTooltip
					}), s.renderContractorBadge && Je(s.contractorTooltipId, Fe(s.language)))
				}
			}
			class ze extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowApproveTooltip = () => this.props.onShowTooltip(this.props.approveTooltipId), this.onShowRemoveTooltip = () => this.props.onShowTooltip(this.props.removeTooltipId), this.onShowSpamTooltip = () => this.props.onShowTooltip(this.props.spamTooltipId), this.onShowAutomodTooltip = () => this.props.onShowTooltip(this.props.automodTooltipId), this.onShowReportTooltip = () => this.props.onShowTooltip(this.props.reportTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t
						} = e,
						s = oe(e, ["comment"]);
					return r.a.createElement(n.Fragment, null, (t.approvedBy || t.isApproved) && r.a.createElement(ce, {
						desc: Object(L.a)(s.language, t),
						id: s.approveTooltipId,
						onMouseEnter: this.onShowApproveTooltip,
						onMouseLeave: s.onHideTooltip
					}), (t.approvedBy || t.isApproved) && Je(s.approveTooltipId, Object(L.a)(s.language, t)), Object(N.a)(t) && r.a.createElement(be, {
						desc: Object(L.c)(s.language, t),
						id: s.removeTooltipId,
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: s.onHideTooltip
					}), Object(N.a)(t) && Je(s.removeTooltipId, Object(L.c)(s.language, t)), Object(N.a)(t) && t.isRemoved && !t.modNote && !t.modRemovalReason && r.a.createElement(ke, {
						onClick: s.openRemovalReasonModal
					}, Object(i.a)(s.language, "modTools.addARemovalReason")), Object(N.a)(t) && !(t.isRemoved && !t.modNote && !t.modRemovalReason) && r.a.createElement(ke, {
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: s.onHideTooltip
					}, Object(i.a)(s.language, "modTools.removalReason")), t.isLocked && !s.ignoreLock && r.a.createElement(de, {
						desc: Object(R.c)("Locked"),
						id: s.lockedTooltipId,
						onMouseEnter: () => {
							s.onShowTooltip(s.lockedTooltipId)
						},
						onMouseLeave: s.onHideTooltip
					}), t.bannedBy && t.isSpam && r.a.createElement(ge, {
						desc: Object(L.e)(s.language, t),
						id: s.spamTooltipId,
						onMouseEnter: this.onShowSpamTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.bannedBy && t.isSpam && Je(s.spamTooltipId, Object(L.e)(s.language, t)), ("AutoModerator" === t.bannedBy || "AutoModerator" === t.approvedBy) && r.a.createElement(me, {
						className: Object(d.a)({
							[ne.a.removed]: !!t.bannedBy
						}),
						desc: Object(L.b)(s.language),
						id: s.automodTooltipId,
						key: s.automodTooltipId,
						onMouseEnter: this.onShowAutomodTooltip,
						onMouseLeave: s.onHideTooltip
					}), ("AutoModerator" === t.bannedBy || "AutoModerator" === t.approvedBy) && Je(s.automodTooltipId, Object(L.b)(s.language)), Object(M.a)(t) && r.a.createElement(he, {
						desc: Object(L.d)(s.language, t.numReports),
						id: s.reportTooltipId,
						onMouseEnter: this.onShowReportTooltip,
						onMouseLeave: s.onHideTooltip
					}), Object(M.a)(t) && Je(s.reportTooltipId, Object(L.d)(s.language, t.numReports)))
				}
			}
			const Ke = e => r.a.createElement(n.Fragment, null, r.a.createElement(X.c, {
					className: ne.a.metaText
				}), r.a.createElement(ve, null, Object(i.a)(e, "comment.stickied"))),
				Je = (e, t) => r.a.createElement(w.c, {
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/overlay/index.ts"),
				p = s("./src/reddit/helpers/trackers/subredditCreation.ts"),
				u = s("./src/reddit/i18n/components.tsx"),
				b = s("./src/reddit/i18n/utils.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/CreateCommunityButton/index.m.less"),
				x = s.n(g),
				y = s("./src/lib/lessComponent.tsx");
			const f = "create-community-button",
				O = y.a.wrapped(l.i, "SecondaryButton", x.a),
				v = y.a.wrapped(c.c, "StyledTooltip", x.a),
				E = Object(a.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.Y)(e),
					userIsSuspended: h.K
				});
			t.a = Object(o.b)(E, (e, t) => {
				let {
					eventSource: s
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(p.b)(s)), e(Object(m.a)("/subreddits/create"))
					},
					onShowTooltip: () => e(Object(i.f)({
						tooltipId: f
					})),
					onHideTooltip: () => e(Object(i.i)())
				}
			})(Object(d.b)(e => {
				let {
					className: t,
					eventSource: s,
					onShowTooltip: n,
					onHideTooltip: o,
					openCommunityCreation: a,
					sendEvent: i,
					userDoesNotHaveEnoughExpToCreateCommunity: c,
					userIsSuspended: d
				} = e;
				return r.a.createElement(O, {
					className: t,
					disabled: d || c,
					onClick: () => a(i),
					onMouseEnter: n,
					onMouseLeave: o,
					id: f
				}, r.a.createElement(u.c, null, "Create Community"), c ? r.a.createElement(v, {
					caretOnTop: !0,
					tooltipId: f,
					text: Object(b.c)("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.")
				}) : d ? r.a.createElement(v, {
					caretOnTop: !0,
					tooltipId: f,
					text: Object(b.c)("Accounts banned from the site can not create communities until the ban is lifted.")
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/app/strings/index.ts"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Media/index.tsx"),
				p = s("./src/reddit/components/PostMeta/index.tsx"),
				u = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/SourceLink/index.tsx"),
				h = s("./src/reddit/components/Thumbnail/index.tsx"),
				g = s("./src/lib/constants/index.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/components/CrosspostBox/index.m.less"),
				O = s.n(f),
				v = s("./src/lib/lessComponent.tsx");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const C = v.a.div("Container", O.a),
				j = v.a.div("PostMetaWrapper", O.a),
				S = v.a.wrapped(u.c, "PostTitle", O.a),
				k = v.a.div("FlatList", O.a),
				_ = v.a.div("FlatItem", O.a),
				P = v.a.span("FlatListDotSpacer", O.a),
				w = v.a.wrapped(C, "LinkContainer", O.a),
				I = v.a.div("Content", O.a),
				T = v.a.div("ThumbnailContainer", O.a),
				N = Object(i.c)({
					isCurrentUserProfilePost: x.i,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== g.zb.TOPIC),
					language: y.O,
					post: x.M,
					shouldOpenPostInNewTab: y.S,
					subreddit: x.Y
				}),
				L = Object(o.b)(N);
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
				return a && !a.media ? r.a.createElement(w, {
					className: l
				}, r.a.createElement(I, null, r.a.createElement(j, null, r.a.createElement(p.a, d)), M(a), a.source && r.a.createElement(b.a, {
					post: a
				}), F(e)), B(e)) : r.a.createElement(C, {
					className: l
				}, r.a.createElement(j, null, r.a.createElement(p.a, d)), M(a), R(e), F(e))
			});
			const M = e => r.a.createElement(S, {
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
						className: O.a.mediaContainer
					})))
				},
				F = e => {
					const {
						language: t,
						post: s
					} = e, {
						score: n
					} = s;
					return r.a.createElement(k, null, r.a.createElement(_, null, Object(c.b)(t, "posts.points.noun", n, {
						count: Object(l.b)(n)
					})), r.a.createElement(P, null), r.a.createElement(_, null, A(e)))
				},
				A = e => {
					const {
						language: t,
						post: s,
						shouldOpenPostInNewTab: n
					} = e, {
						numComments: o
					} = s;
					return r.a.createElement(a.a, {
						"data-click-id": "comments",
						to: Object(d.a)(s.permalink, !0),
						target: n ? "_blank" : void 0
					}, Object(c.b)(t, "posts.comments.noun", o, {
						count: Object(l.b)(o)
					}))
				},
				B = e => r.a.createElement(T, null, r.a.createElement(h.a, {
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
			var n = s("./node_modules/lodash/values.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/constants/colors.ts");
			const d = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
				return "".concat(t, "-du-left-").concat(e)
			};
			var l = e => {
				const {
					seed: t = ""
				} = e, s = d("a", t), n = d("b", t), r = d("c", t), o = d("d", t);
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
					fill: c.a.black,
					filter: "url(#".concat(s, ")"),
					xlinkHref: "#".concat(n)
				}), a.a.createElement("use", {
					fill: c.a.white,
					xlinkHref: "#".concat(n)
				})), a.a.createElement("g", {
					transform: "matrix(0 1 1 0 17.174 14.174)"
				}, a.a.createElement("path", {
					d: "M0 16h16V0H0z"
				}), a.a.createElement("mask", {
					id: o,
					fill: c.a.white
				}, a.a.createElement("use", {
					xlinkHref: "#".concat(r)
				})), a.a.createElement("use", {
					fill: c.a.black,
					xlinkHref: "#".concat(r)
				}), a.a.createElement("g", {
					fill: c.a.alienblue,
					mask: "url(#".concat(o, ")")
				}, a.a.createElement("path", {
					d: "M0 0h16v16H0z"
				})))))
			};
			const m = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
				return "".concat(t, "-du-right-").concat(e)
			};
			var p = e => {
					const {
						seed: t = ""
					} = e, s = m("a", t), n = m("b", t), r = m("c", t), o = m("d", t);
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
						fill: c.a.black,
						filter: "url(#".concat(s, ")"),
						xlinkHref: "#".concat(n)
					}), a.a.createElement("use", {
						fill: c.a.white,
						xlinkHref: "#".concat(n)
					})), a.a.createElement("g", {
						transform: "rotate(90 9.326 23.5)"
					}, a.a.createElement("path", {
						d: "M0 16h16V0H0z"
					}), a.a.createElement("mask", {
						id: o,
						fill: c.a.white
					}, a.a.createElement("use", {
						xlinkHref: "#".concat(r)
					})), a.a.createElement("use", {
						fill: c.a.black,
						xlinkHref: "#".concat(r)
					}), a.a.createElement("g", {
						fill: c.a.alienblue,
						mask: "url(#".concat(o, ")")
					}, a.a.createElement("path", {
						d: "M0 0h16v16H0z"
					})))))
				},
				u = s("./src/reddit/components/DiscoveryUnit/CarouselBase/index.m.less"),
				b = s.n(u);
			s.d(t, "a", (function() {
				return h
			})), s.d(t, "b", (function() {
				return g
			}));
			const h = e => a.a.createElement("button", {
					className: Object(i.a)(b.a.arrow, e.className),
					onClick: e.onClick
				}, a.a.createElement(l, {
					className: b.a.arrowIcon,
					seed: e.seed
				})),
				g = e => a.a.createElement("button", {
					className: Object(i.a)(b.a.arrow, e.className),
					onClick: e.onClick
				}, a.a.createElement(p, {
					className: b.a.arrowIcon,
					seed: e.seed
				}));
			class x extends a.a.Component {
				constructor(e) {
					super(e), this.state = {
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
					}, this.itemsFitInContainer = e => {
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
					}, this.id = "", this.onClickNext = this.onClickNext.bind(this), this.onClickPrev = this.onClickPrev.bind(this)
				}
				componentDidMount() {
					const e = this.getVisibleItemsCount();
					this.setState({
						visibleItemsCount: e
					})
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
			t.c = x
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
				p = s("./src/lib/isUrl/index.ts"),
				u = s("./src/lib/prettyPrintNumber/index.ts"),
				b = s("./src/app/strings/index.ts"),
				h = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				g = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				x = s("./src/lib/timeAgo/index.ts"),
				y = s("./src/reddit/constants/posts.ts"),
				f = s("./src/reddit/components/Translated/index.tsx"),
				O = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				v = s("./src/reddit/layout/row/Inline/index.tsx"),
				E = s("./src/reddit/components/DiscoveryUnit/PostAuthor/index.m.less"),
				C = s.n(E);
			var j = e => {
					const t = y.a.PROFILE,
						s = Object(O.a)(e.author, t);
					return o.a.createElement("div", {
						className: Object(c.a)(C.a.container, e.className)
					}, o.a.createElement(v.a, {
						className: C.a.layout
					}, o.a.createElement("div", {
						className: C.a.textContainer
					}, o.a.createElement("span", {
						className: C.a.description
					}, o.a.createElement(f.a, {
						msgId: "posts.postedBy"
					})), o.a.createElement(g.a, {
						className: C.a.authorName,
						to: s
					}, Object(O.b)(e.author, t)), o.a.createElement("span", {
						className: C.a.timestamp
					}, Object(x.d)(e.language, e.created / 1e3)))))
				},
				S = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				k = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				_ = s("./src/reddit/components/DiscoveryUnit/PostCommunity/index.m.less"),
				P = s.n(_);
			var w = e => {
					const t = Object(O.a)(e.name, e.type);
					return o.a.createElement("div", {
						className: Object(c.a)(P.a.container, e.className)
					}, o.a.createElement(k.a, {
						className: P.a.layout
					}, o.a.createElement("div", {
						className: P.a.iconContainer
					}, e.iconUrl ? o.a.createElement("img", {
						className: P.a.icon,
						src: e.iconUrl
					}) : o.a.createElement(S.a, {
						className: P.a.planetIcon,
						"data-redditstyle": !0
					})), o.a.createElement("div", {
						className: P.a.textContainer
					}, o.a.createElement(g.a, {
						className: P.a.name,
						to: t
					}, Object(O.b)(e.displayText || e.name, e.type)), o.a.createElement("span", {
						className: P.a.separator
					}, "•"), o.a.createElement("span", {
						className: P.a.timestamp
					}, Object(x.d)(e.language, e.created / 1e3)))))
				},
				I = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				T = s("./src/reddit/components/Media/index.tsx"),
				N = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				L = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				M = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				R = s("./src/reddit/components/PostContainer/index.tsx"),
				F = s("./src/reddit/components/PostTitle/index.tsx"),
				A = s("./src/reddit/connectors/miniCardPost.ts"),
				B = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				D = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				U = s("./src/reddit/models/Media/index.ts"),
				V = s("./src/reddit/models/Subreddit/index.ts"),
				W = s("./src/reddit/models/Widgets/index.ts"),
				H = s("./src/reddit/components/MiniCardPost/index.m.less"),
				q = s.n(H),
				z = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				K = s.n(z),
				J = s("./src/reddit/components/DiscoveryUnit/Layout/Posts/TopPostsLargePost/index.m.less"),
				G = s.n(J);

			function Q() {
				return (Q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			class Y extends o.a.Component {
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
						onClickPost: g,
						post: x,
						scrollerItemRef: y,
						shouldPause: f,
						showAuthorBlock: O = !1,
						showMetaLine: v = !0,
						showSubscribeBlock: E = !1,
						subredditOrProfile: C
					} = this.props, {
						media: S
					} = n || x, k = !S && !!x.source && Object(p.a)(x.source.url);
					let _ = S && o.a.createElement(T.a, {
							autoplayPref: e,
							availableWidth: t,
							className: q.a.media,
							forceAspectRatio: U.c,
							imageBoxClassName: q.a.mediaImageBox,
							imageBoxContentImageClassName: q.a.mediaImageBoxContentImage,
							isListing: !0,
							isMiniCard: m,
							isNotCardView: !0,
							post: n || x,
							scrollerItemRef: y,
							shouldPause: f,
							shouldLoad: d,
							showCentered: !1,
							showFull: !1
						}),
						P = !1;
					S && _ && (S.type !== U.n.RTJSON && S.type !== U.n.TEXT ? (_ = o.a.createElement("div", {
						className: G.a.mediaWrapper
					}, _), P = !0) : S && S.content && Object(B.a)(x) && (_ = o.a.createElement("div", {
						className: G.a.textWrapper
					}, _)));
					const A = !P && !k;
					let H;
					return C && (H = Object(V.e)(C) ? Object(W.h)(C) : Object(W.i)(C)), o.a.createElement(R.a, {
						className: Object(c.a)(G.a.container, K.a.largeAndMediumActiveStyles, K.a.largeAndMediumPostStyles, q.a.postContainer, Object(D.a)(this.props), s),
						post: x,
						onClick: g,
						eventFactory: a,
						style: Object.assign({}, Object(D.b)(this.props.flairStyleTemplate), Object(D.d)(this.props), this.props.style)
					}, o.a.createElement(M.a, {
						className: q.a.backgroundWrapper,
						flairStyleTemplate: i
					}, o.a.createElement("div", {
						className: Object(c.a)(G.a.innerContainer, q.a.innerContainer)
					}, E && C && o.a.createElement(w, Q({
						created: x.created,
						language: h
					}, H)), O && C && o.a.createElement(j, Q({
						created: x.created,
						language: h,
						author: x.author
					}, H)), o.a.createElement(F.c, {
						className: A ? G.a.postTitle : G.a.postTitleCompact,
						disableFlair: !0,
						hideSourceLink: !0,
						post: x,
						size: F.b.Large,
						titleColor: i && i.postTitleColor
					}), v && C && o.a.createElement(N.a, {
						className: G.a.metaLine,
						crosspostSubredditOrProfile: r,
						hideNSFWPref: l,
						language: h,
						post: x,
						subredditOrProfile: C
					}), (P || k) && o.a.createElement("div", {
						className: G.a.flexSpacer
					}), k && o.a.createElement("div", {
						className: G.a.mediaWrapper
					}, o.a.createElement(L.a, {
						className: G.a.thumbnailWrapper,
						thumbnailClassName: G.a.thumbnail,
						thumbnailContainerClassName: G.a.thumbnailContainer,
						post: x,
						templatePlaceholderImage: i && i.postPlaceholderImage
					})), _, o.a.createElement("div", {
						className: G.a.metaWrapper
					}, o.a.createElement("span", {
						className: G.a.meta
					}, Object(b.b)(h, "posts.points.noun", x.score, {
						count: Object(u.b)(x.score)
					})), o.a.createElement("span", {
						className: G.a.meta
					}, Object(b.b)(h, "posts.comments.noun", x.numComments, {
						count: Object(u.b)(x.numComments)
					}))))), o.a.createElement(I.d, {
						postId: x.id
					}))
				}
			}
			var Z = Object(A.a)(Object(h.a)(Y)),
				X = s("./node_modules/reselect/es/index.js"),
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
				de = Object(X.c)({
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
						className: Object(c.a)(oe.a.container, K.a.largeAndMediumPostStyles, t)
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
				ge = s("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.m.less"),
				xe = s.n(ge),
				ye = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};
			const fe = 326,
				Oe = 12,
				ve = {
					stiffness: 210,
					damping: 30
				},
				Ee = 100,
				Ce = e => {
					var {
						root: t,
						handleVisibilityChange: s,
						renderPost: r
					} = e, a = ye(e, ["root", "handleVisibilityChange", "renderPost"]);
					const i = r ? r(a) : o.a.createElement(Z, a);
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
			class Se extends d.c {
				constructor(e) {
					super(e), this.state = {
						scrollIndex: 0,
						viewableItems: {},
						visibleItemsCount: null
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
						return o.a.createElement(Ce, {
							className: xe.a.largePost,
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
						className: xe.a.posts,
						style: e
					}, this.props.items.map(this.renderPost)), this.id = "PostsCarousel"
				}
				componentDidMount() {
					super.componentDidMount()
				}
				componentDidUpdate(e, t) {
					this.state !== t && this.trackPostsViewed(this.props)
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
						itemWidth: l = fe
					} = this.props, {
						scrollIndex: m,
						visibleItemsCount: p
					} = this.state, u = this.getMaxScrollIndex(p), b = this.getAdjustment({
						itemWidth: l,
						maxScrollIndex: u,
						scrollIndex: m,
						spacerWidth: Oe,
						visibleItemsCount: p
					}), h = e ? Ee : this.getMarginLeft({
						adjustment: b,
						itemWidth: l,
						scrollIndex: m,
						spacerWidth: Oe
					}), g = this.itemsFitInContainer({
						container: this.container,
						items: this.props.items,
						itemWidth: l,
						spacerWidth: Oe
					});
					return o.a.createElement("div", {
						className: Object(c.a)(xe.a.postsWrapper, this.props.className),
						id: this.id,
						ref: this.setContainerRef
					}, o.a.createElement(a.Motion, {
						defaultStyle: {
							marginLeft: e || r ? Ee : 0
						},
						style: {
							marginLeft: Object(a.spring)(h, i || ve)
						}
					}, this.renderPosts), 0 !== m && o.a.createElement(d.a, {
						className: Object(c.a)(xe.a.arrowLeft, t),
						onClick: this.onClickPrev,
						seed: n
					}), !g && (null == u || m < u) && o.a.createElement(d.b, {
						className: Object(c.a)(xe.a.arrowRight, r && !e && xe.a.slideIn, s),
						onClick: this.onClickNext,
						seed: n
					}))
				}
			}
			t.a = je(Se)
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
			t.a = e => r.a.createElement("div", {
				className: Object(o.a)(i.a.heroContainer, e.className)
			}, r.a.createElement("div", {
				className: Object(o.a)(i.a.header, e.headerClassName)
			}, e.header), r.a.createElement("div", {
				className: Object(o.a)(e.hidePadding ? i.a.bodyHidePadding : i.a.body, e.bodyClassName)
			}, e.children))
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
				community: "_1tyb0MHpubC9eZwyNDYbS",
				communitiesWrapper: "ASRebb1StRvOIky_q-Mo3",
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
					g = p && Object(a.c)(p.eventStart, p.eventEnd);
				return r.a.createElement("div", {
					className: Object(o.a)(u.a.container, t, {
						[u.a.isCompact]: !!s
					})
				}, r.a.createElement(b, {
					className: u.a.eventMetaWrapper
				}, r.a.createElement(c.a, {
					language: n,
					post: i
				}), !h && g && r.a.createElement(d.a, {
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
				g = b.a.span("PostEventPastText", u.a),
				x = b.a.span("PostEventNowText", u.a),
				y = b.a.span("Container", u.a),
				f = b.a.wrapped(l.a, "CalendarIcon", u.a),
				O = b.a.wrapped(m.a, "LiveIcon", u.a),
				v = b.a.div("LoadingState", u.a);
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
					} = n, u = Object(o.e)(p, l);
					let b, E;
					if (this.state.mounted || u === o.a.Live) b = function(e, t, s, n) {
						const r = Object(o.e)(e, t),
							d = new Date(e * i.Db);
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
						b = r.a.createElement(v, {
							className: e
						})
					}
					if (m) E = r.a.createElement(x, null, r.a.createElement(O, null), b);
					else if (u === o.a.Future) E = r.a.createElement(h, null, r.a.createElement(f, null), b);
					else {
						if (u !== o.a.Past) return null;
						E = r.a.createElement(g, null, r.a.createElement(f, null), b)
					}
					return r.a.createElement(y, {
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				d = s("./src/reddit/i18n/utils.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				p = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				u = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				b = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"),
				h = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				g = s("./src/reddit/icons/fonts/helpers.tsx"),
				x = s("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less"),
				y = s.n(x);
			var f = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
					className: "".concat(Object(g.b)("expandoMediaLightbox"), " ").concat(e.className),
					onClick: e.onClick
				}), "LightboxIcon", y.a),
				O = s("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"),
				v = s("./src/reddit/icons/fonts/Gif/index.tsx"),
				E = s("./src/reddit/icons/fonts/Link/index.tsx"),
				C = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				j = s("./src/reddit/icons/fonts/Photos/index.tsx"),
				S = s("./src/reddit/icons/fonts/Text/index.tsx"),
				k = s("./src/reddit/models/Media/index.ts"),
				_ = s("./src/reddit/components/ExpandoButton/index.m.less"),
				P = s.n(_);
			const w = Object(o.b)(null, (e, t) => ({
					toggle: () => e(Object(l.v)({
						postId: t.post.id
					}))
				})),
				I = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					const s = Object(i.a)(P.a.icon, P.a.hideOnHover);
					if (t) return r.a.createElement(u.a, {
						className: s
					});
					switch (e) {
						case k.n.GIFVIDEO:
							return r.a.createElement(v.a, {
								className: s
							});
						case k.n.IMAGE:
							return r.a.createElement(j.a, {
								className: s
							});
						case k.n.TEXT:
						case k.n.RTJSON:
							return r.a.createElement(S.a, {
								className: s
							});
						case k.n.VIDEO:
							return r.a.createElement(O.a, {
								className: s
							});
						case k.n.EMBED:
						default:
							return r.a.createElement(E.a, {
								className: s
							})
					}
				};
			t.a = w(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: n,
					isExpanded: o,
					post: l,
					toggle: u,
					useMediaIcons: g
				} = e, x = s || l, y = n && !!s;
				return x.media && !(("rtjson" === x.media.type || "text" === x.media.type) && !Object(p.a)(x)) ? r.a.createElement("button", {
					"aria-expanded": o,
					"aria-haspopup": !0,
					"aria-label": Object(d.c)("Expand content"),
					className: Object(i.a)(t, P.a.outer),
					"data-click-id": o ? "expando_close" : "expando_open",
					onClick: u
				}, o ? r.a.createElement(b.a, {
					className: P.a.icon
				}) : g ? r.a.createElement(r.a.Fragment, null, I(x.media && x.media.type, y), r.a.createElement(h.a, {
					className: Object(i.a)(P.a.icon, P.a.showOnHover)
				})) : r.a.createElement(h.a, {
					className: P.a.icon
				})) : x.source && x.source.url ? r.a.createElement(m.a, {
					"aria-label": Object(d.c)("Open external content"),
					className: Object(i.a)(t, P.a.outer),
					"data-click-id": "expando_open",
					href: x.source.url,
					isSponsored: l.isSponsored,
					source: l.source,
					target: "_blank"
				}, r.a.createElement(C.a, {
					className: Object(i.a)(P.a.icon, P.a.outboundLinkIcon)
				})) : r.a.createElement(a.a, {
					"aria-label": Object(d.c)("View content"),
					className: Object(i.a)(t, P.a.outer),
					"data-click-id": "expando_open",
					to: Object(c.a)(x.permalink),
					rel: "nofollow"
				}, r.a.createElement(f, {
					className: P.a.icon
				}))
			})
		},
		"./src/reddit/components/GildModal/Loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				r = s("./src/lib/loadWithRetries/index.ts");
			const o = Object(n.a)({
				getComponent: () => Object(r.a)(() => Promise.all([s.e("FramedGild~GildModal"), s.e("GildModal")]).then(s.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
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
					subreddit: g,
					onOpenFilePicker: x
				} = e, y = u.url ? p._("Update icon", null, {
					hk: "GXdPy"
				}) : p._("Add icon", null, {
					hk: "31odkm"
				});
				return r.a.createElement("div", {
					className: Object(a.a)(l.a.Title, e.className)
				}, t && g ? r.a.createElement(c.a, {
					className: n ? l.a.largeSubredditIcon : l.a.subredditIcon,
					key: u.url,
					iconUrl: u.url,
					primaryColor: h,
					subreddit: g,
					inTopBar: !1
				}) : r.a.createElement(i.b, {
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
				}, b), t && g && x && r.a.createElement("div", {
					className: l.a.editIconText,
					onClick: x
				}, y)))
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
				SubscriberCount: "nEdqRRzLEN43xauwtgTmj",
				subscriberCount: "nEdqRRzLEN43xauwtgTmj",
				Online: "_3_HlHJ56dAfStT19Jgl1bF",
				online: "_3_HlHJ56dAfStT19Jgl1bF",
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
				CreatePostButton: "_326PJFFRv8chYfOlaEYmGt",
				createPostButton: "_326PJFFRv8chYfOlaEYmGt",
				CreateCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
				createCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/app/strings/index.ts"),
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
					hideNSFWPref: n,
					language: m,
					post: p,
					subredditOrProfile: h
				} = e;
				return r.a.createElement("div", {
					className: Object(a.a)(u.a.container, t)
				}, r.a.createElement(d.a, {
					className: u.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: h.url
				}, r.a.createElement(c.b, {
					className: u.a.subredditIcon,
					shouldHideNsfwIcon: n,
					subredditOrProfile: h
				}), r.a.createElement("span", null, h.displayText)), ((e, t, s) => {
					if (s) return r.a.createElement("div", {
						role: "img",
						"aria-label": Object(o.a)(e, "posts.crosspostedByFrom", {
							by: Object(l.c)(t),
							from: s.displayText
						})
					}, r.a.createElement(b, null))
				})(m, p.author, s), h && h.isQuarantined && r.a.createElement(i.a, null))
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/loadWithRetries/index.ts"),
				c = s("./src/reddit/i18n/components.tsx"),
				d = s("./src/reddit/components/ModModeReports/index.m.less"),
				l = s.n(d);
			const m = a.a.div("Text", l.a),
				p = a.a.div("Placeholder", l.a),
				u = Object(o.a)({
					ErrorComponent: e => {
						let {
							className: t
						} = e;
						return r.a.createElement(p, {
							className: t
						})
					},
					getComponent: () => Object(i.a)(() => s.e("ModerationDropdowns").then(s.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")).then(e => e.default)),
					LoadingComponent: e => {
						let {
							className: t
						} = e;
						return r.a.createElement(p, {
							className: t
						}, r.a.createElement(m, null, r.a.createElement(c.c, null, "Loading reports…")))
					}
				});
			t.a = e => r.a.createElement(u, e)
		},
		"./src/reddit/components/MoreCommunitiesIcon/index.m.less": function(e, t, s) {
			e.exports = {
				moreCommunities: "z54Tq9pM9dZADYsxyAlMi",
				numCommunities: "_1-PSRpyxO4pzCPYOJNRMwe",
				InternalLink: "_1YInFAwL0if5cbF4P9QIJb",
				internalLink: "_1YInFAwL0if5cbF4P9QIJb"
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
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
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
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/helpers/isRemoved.ts"),
				y = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				f = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				O = s("./src/reddit/models/Post/index.ts"),
				v = s("./src/reddit/selectors/posts.ts"),
				E = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				C = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				j = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				S = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				k = s("./src/reddit/icons/fonts/Report/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				P = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				w = s("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				I = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				T = s("./src/reddit/components/PostBadges/index.m.less"),
				N = s.n(T);

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const M = e => r.a.createElement("span", L({
					className: N.a.removalReason
				}, e), e.children),
				R = Object(d.d)("posts.archived"),
				F = Object(d.d)("modTools.commentsLocked"),
				A = Object(d.d)("modTools.moderatorOf"),
				B = Object(d.d)("modTools.stickiedPost"),
				D = Object(d.d)("modTools.pinnedPost"),
				U = (e, t, s) => {
					const n = "PostBadges--".concat(e, "--").concat(t);
					return s ? "".concat(n, "--").concat(s) : n
				},
				V = Object(g.t)({
					isProfilePostListing: g.H,
					isSubreddit: g.I,
					pageLayer: e => e
				}),
				W = Object(c.c)({
					isPinned: (e, t) => {
						let {
							post: s
						} = t;
						return Object(v.s)(e, {
							postId: s.id
						})
					},
					modModeEnabled: g.N
				}),
				H = Object(o.b)(W, (e, t) => ({
					onHideTooltip: () => e(Object(p.i)()),
					onOpenRemovalReasonModal: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(s => e(s.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(p.f)({
						tooltipId: t
					}))
				}));
			t.a = V(H(e => {
				let {
					className: t,
					displayText: s,
					isSubreddit: o,
					inSubredditOrProfile: c,
					isCompactPinnedPost: d,
					isPinned: p,
					isProfilePostListing: g,
					language: v,
					modModeEnabled: T,
					onHideTooltip: V,
					onOpenRemovalReasonModal: W,
					onShowTooltip: H,
					post: q,
					tooltipType: z
				} = e;
				const K = {
						caretOnTop: !1
					},
					J = q.isRemoved && !q.modRemovalReason && !q.modNote && q.belongsTo.type === h.a.SUBREDDIT,
					G = U("Approve", q.id, z),
					Q = U("Archived", q.id, z),
					Y = U("Automod", q.id, z),
					Z = U("Lock", q.id, z),
					X = U("Mod", q.id, z),
					$ = U("Remove", q.id, z),
					ee = U("Report", q.id, z),
					te = U("Spam", q.id, z),
					se = U("Sticky", q.id, z),
					ne = U("Pinned", q.id, z);
				return r.a.createElement("div", {
					className: t
				}, c && s && q.distinguishType === m.C.MODERATOR && r.a.createElement(n.Fragment, null, r.a.createElement(I.a, {
					className: N.a.modIcon,
					desc: A(v, {
						displayText: s
					}),
					id: X,
					onMouseEnter: H(X),
					onMouseLeave: V
				}), r.a.createElement(u.c, L({
					tooltipId: X,
					text: A(v, {
						displayText: s
					})
				}, K))), q.isArchived && r.a.createElement(n.Fragment, null, r.a.createElement(C.a, {
					className: N.a.archivedIcon,
					desc: R(v),
					id: Q,
					onMouseEnter: H(Q),
					onMouseLeave: V
				}), r.a.createElement(u.c, L({
					tooltipId: Q,
					text: R(v)
				}, K))), q.isLocked && r.a.createElement(n.Fragment, null, r.a.createElement(j.a, {
					className: N.a.lockIcon,
					desc: F(v),
					id: Z,
					onMouseEnter: H(Z),
					onMouseLeave: V
				}), r.a.createElement(u.c, L({
					tooltipId: Z,
					text: F(v)
				}, K))), o && Object(O.k)(q) && !d && r.a.createElement(n.Fragment, null, r.a.createElement(P.a, {
					className: N.a.stickyIcon,
					desc: B(v),
					id: se,
					onMouseEnter: H(se),
					onMouseLeave: V
				}), r.a.createElement(u.c, L({
					tooltipId: se,
					text: B(v)
				}, K))), g && p && r.a.createElement(n.Fragment, null, r.a.createElement(P.a, {
					className: N.a.stickyIcon,
					desc: D(v),
					id: ne,
					onMouseEnter: H(ne),
					onMouseLeave: V
				}), r.a.createElement(u.c, L({
					tooltipId: ne,
					text: D(v)
				}, K))), (q.isApproved || q.approvedBy) && r.a.createElement(n.Fragment, null, r.a.createElement(E.a, {
					className: N.a.approveIcon,
					desc: Object(y.a)(v, q),
					id: G,
					onMouseEnter: H(G),
					onMouseLeave: V
				}), r.a.createElement(u.c, L({
					tooltipId: G,
					text: Object(y.a)(v, q)
				}, K))), Object(x.a)(q) && r.a.createElement(n.Fragment, null, r.a.createElement(S.a, {
					className: N.a.removeIcon,
					desc: Object(y.c)(v, q),
					id: $,
					onMouseEnter: H($),
					onMouseLeave: V
				}), J && r.a.createElement(b.a, {
					className: N.a.addRemovalReason,
					onClick: W,
					text: Object(i.c)("Add a removal reason")
				}), (q.modRemovalReason || q.modNote) && r.a.createElement(M, {
					onMouseEnter: H($),
					onMouseLeave: V
				}, r.a.createElement(a.c, null, "Removal reason")), r.a.createElement(u.c, L({
					tooltipId: $,
					text: Object(y.c)(v, q)
				}, K))), q.bannedBy && q.isSpam && r.a.createElement(n.Fragment, null, r.a.createElement(_.a, {
					className: N.a.spamIcon,
					desc: Object(y.e)(v, q),
					id: te,
					onMouseEnter: H(te),
					onMouseLeave: V
				}), r.a.createElement(u.c, L({
					tooltipId: te,
					text: Object(y.e)(v, q)
				}, K))), ("AutoModerator" === q.approvedBy || "AutoModerator" === q.bannedBy) && r.a.createElement(n.Fragment, null, r.a.createElement(w.a, {
					className: Object(l.a)(N.a.automoderator, !!q.bannedBy && N.a.isRemoved),
					desc: Object(y.b)(v),
					id: Y,
					onMouseEnter: H(Y),
					onMouseLeave: V
				}), r.a.createElement(u.c, L({
					tooltipId: Y,
					text: Object(y.b)(v)
				}, K))), Object(f.a)(q) && !T && r.a.createElement(n.Fragment, null, r.a.createElement(k.a, {
					className: N.a.reportIcon,
					desc: Object(y.d)(v, q.numReports),
					id: ee,
					onMouseEnter: H(ee),
					onMouseLeave: V
				}), r.a.createElement(u.c, L({
					tooltipId: ee,
					text: Object(y.d)(v, q.numReports)
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
			s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.symbol.js");
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
				g = s.n(h),
				x = s("./src/lib/lessComponent.tsx");

			function y() {
				return (y = Object.assign || function(e) {
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
			const O = x.a.div("WrappedPost", g.a),
				v = Object(o.c)({
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
				E = Object(d.a)(v),
				C = e => {
					const t = Object(b.d)(e.target, e.currentTarget),
						s = Object(b.b)(e.target, e.currentTarget, b.a.buttons);
					return "subreddit" !== t && s
				};
			class j extends r.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const e = this.props,
						{
							pixelPostHasEnteredView: t,
							pixelPostHasExitedView: s,
							afterClickTracking: n,
							buffering: o,
							children: i,
							className: d,
							continuousViewingStartedAt: m,
							gildModalIsOpen: p,
							makePostContainerId: b,
							playing: h,
							post: g,
							onClick: x,
							onPostContentClick: v,
							onPostViewable: E,
							isOverlay: j
						} = e,
						S = f(e, ["pixelPostHasEnteredView", "pixelPostHasExitedView", "afterClickTracking", "buffering", "children", "className", "continuousViewingStartedAt", "gildModalIsOpen", "makePostContainerId", "playing", "post", "onClick", "onPostContentClick", "onPostViewable", "isOverlay"]),
						k = r.a.createElement(O, y({}, S, {
							onMouseUp: e => {
								0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
									this.cancelClick = !1
								}, 1e3))
							},
							onClick: e => {
								!this.cancelClick && e.button < 2 && (n(() => x && x(e, g))(e), v && C(e) && v(e, g))
							},
							className: Object(u.a)(d, "Post ".concat(g.id), {
								promotedlink: g.isSponsored
							}),
							id: b ? b(g.id) : g.id,
							tabIndex: -1
						}), i, p && r.a.createElement(c.a, null)),
						_ = !!g.media && g.media.type === l.n.VIDEO;
					return g.isSponsored || _ ? r.a.createElement(a.a, {
						onViewable: e => E(g, e),
						pixelPostHasEnteredView: e => t(g, e),
						pixelPostHasExitedView: e => s(g, e),
						children: k,
						trackVideoMetrics: _ && !o && h,
						continuousViewingStartedAt: m
					}) : k
				}
			}
			t.a = E(Object(b.c)(j))
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
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/components/Translated/index.tsx"),
				m = s("./src/reddit/helpers/trackers/postCollection.ts"),
				p = s("./src/reddit/components/PostFollow/index.m.less"),
				u = s.n(p);
			class b extends r.a.Component {
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
					} = this.props, n = this.state.isHovered, o = s.isFollowed;
					let a = o ? "collection.follow.followed" : "collection.follow.follow";
					return o && n && (a = "collection.follow.unfollow"), r.a.createElement("button", {
						className: Object(i.a)(u.a.collectionFollow, {
							[u.a.isFollowed]: !!s.isFollowed,
							[u.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, r.a.createElement(l.a, {
						msgId: a
					}))
				}
			}
			const h = Object(o.b)(() => Object(a.c)({}), (e, t) => {
				let {
					post: s
				} = t;
				return {
					onFollow: () => e(Object(c.B)(s.isSponsored ? s.postId : s.id))
				}
			})(Object(d.b)(b))
		},
		"./src/reddit/components/PostList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return K
			})), s.d(t, "a", (function() {
				return G
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/history/esm/history.js"),
				r = s("./node_modules/lodash/debounce.js"),
				o = s.n(r),
				a = s("./node_modules/lodash/last.js"),
				i = s.n(a),
				c = s("./node_modules/react/index.js"),
				d = s.n(c),
				l = s("./node_modules/react-dom/index.js"),
				m = s("./src/lib/addQueryParams/index.ts"),
				p = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/constants/index.ts"),
				b = s("./src/lib/fastdom/index.ts"),
				h = s("./src/lib/lessComponent.tsx"),
				g = s("./src/lib/opener/index.ts"),
				x = s("./src/lib/sentry/index.ts"),
				y = s("./src/reddit/components/PostList/LoadMore.tsx"),
				f = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				O = s("./src/reddit/components/Scroller/Simple.tsx"),
				v = s("./src/reddit/components/Translated/index.tsx"),
				E = s("./src/reddit/constants/adEvents.ts"),
				C = s("./src/reddit/constants/componentSizes.ts"),
				j = s("./src/reddit/constants/postLayout.ts"),
				S = s("./src/reddit/controls/InternalLink/index.tsx"),
				k = s("./src/reddit/helpers/getClickInfo.ts"),
				_ = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				P = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				w = s("./src/reddit/models/Media/index.ts"),
				I = s("./src/reddit/helpers/brandSafety/index.ts"),
				T = s("./src/lib/LRUCache/index.ts"),
				N = s("./src/telemetry/index.ts"),
				L = s("./src/telemetry/models/Timer.ts"),
				M = s("./src/reddit/components/PostList/index.m.less"),
				R = s.n(M),
				F = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};
			const A = 500,
				B = new T.a(A),
				D = new T.a(A),
				U = new T.a(A),
				V = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				W = h.a.div("SeeMore", R.a),
				H = h.a.wrapped(P.a, "ArrowRight", R.a),
				q = (e, t, s, n, r, o, a, i) => {
					const c = s ? "last-".concat(n, "-").concat(r) : "",
						d = "entered-".concat(e, "-").concat(t, "-").concat(c, "-").concat(o);
					let l = B.get(d);
					return void 0 === l && (l = () => {
						s && a.onBottomViewed(n, r), a.trackOnPostEnteredViewport(e, t, i)
					}, B.set(d, l)), l
				},
				z = (e, t, s, n) => {
					const r = "left-".concat(e, "-").concat(t);
					let o = D.get(r);
					return void 0 === o && (o = r => {
						s.trackOnPostExitedViewport(e, t, r, n)
					}, D.set(r, o)), o
				},
				K = (e, t) => {
					const s = "click-".concat(e);
					let n = U.get(s);
					return void 0 === n && (n = (e, s) => {
						s.isSponsored && t.fireAdPixelsOfType(s, E.a.Click), s.isSponsored && s.source && s.source.outboundUrl ? Object(g.d)(s.source.outboundUrl, g.c.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(k.a)(e)
						})
					}, U.set(s, n)), n
				},
				J = (e, t) => {
					const s = [...e];
					return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
						s.splice(e, 0, t[e])
					}), s
				};
			class G extends d.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new T.a(A), this.updateScrollerRef = e => {
						const t = e && Object(l.findDOMNode)(e);
						this.scrollerRef = t instanceof Element ? t : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						this.dispatchBrandSafety(e)
					}, this.dispatchBrandSafety = o()(e => {
						let {
							getVisibleItemsInViewport: t
						} = e;
						const {
							postsById: s,
							subredditsById: n
						} = this.props, r = t(), o = [];
						r.forEach(e => o.push(e.id));
						const a = o.map(e => s[e]).filter(Boolean),
							i = a.map(e => n[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(I.a)(a, i))
					}, u.d, {
						leading: !0
					})
				}
				componentWillMount() {
					this.timerId && N.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = N.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = N.c.end(this.timerId);
						setTimeout(() => Object(N.b)(u.l.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				componentWillUpdate(e) {
					this.timerId && N.c.cancel(this.timerId), e.postIds.length && (this.timerId = N.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (b.a.read(() => this.checkAndSendScreenview()), this.timerId && N.c.has(this.timerId)) {
						const e = N.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(N.b)(u.l.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && N.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && i()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return N.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const n = N.c.end(e);
					setTimeout(() => {
						s(t(n, L.TimerType.InApp))
					}, 0)
				}
				showPlaceholder() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s
					} = this.props;
					return !s && (Boolean(e) || !1 !== t)
				}
				hasPosts() {
					return this.props.postIds.length > 0
				}
				isLoadingMore() {
					const {
						loadMore: e,
						postIds: t
					} = this.props;
					return Boolean(e && e.token) && t.length > 0
				}
				shouldComponentUpdate(e) {
					const t = this.props,
						{
							postsById: s
						} = t,
						n = F(t, ["postsById"]),
						{
							postsById: r
						} = e,
						o = F(e, ["postsById"]),
						a = Object.keys(n),
						i = Object.keys(o);
					if (i.length !== a.length) return !0;
					if (i.some(e => n[e] !== o[e])) return !0;
					if (s === r) return !1;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: t
						} = this.props;
						return this.props.postIds.some((n, o) => {
							const a = 0 === o;
							return t({
								isFirstPost: a,
								layout: e,
								post: s[n]
							}) !== t({
								isFirstPost: a,
								layout: e,
								post: r[n]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, s, n) {
					const {
						currentProfileName: r,
						isCommentPermalink: o,
						isCommentsPage: a,
						isFrontpage: i,
						isProfilePostListing: c,
						isTopicPage: l,
						listingKey: m,
						listingName: p,
						pageLayer: b,
						pageReferrer: h,
						postClickEvent: g,
						redditStyle: y
					} = this.props, f = 0 === t, O = s ? "last-index" : "", v = "post-".concat(n, "-").concat(e, "-").concat(t, "-").concat(O, "-").concat(p, "-").concat(m, "-").concat(h);
					let E;
					if (void 0 === (E = this.scrollChildCache.get(v))) {
						const {
							inSubredditOrProfile: O,
							postsById: C
						} = this.props, S = C[e], k = S.crosspostRootId && C[S.crosspostRootId] ? C[S.crosspostRootId] : S;
						S.crosspostRootId && !C[S.crosspostRootId] && x.c.withScope(e => {
							e.setExtra("errorType", u.q.API), e.setExtra("description", "Post ".concat(S.id, " is crosspost of ").concat(S.crosspostRootId, ", but ") + "".concat(S.crosspostRootId, " details are missing in the state")), x.c.captureMessage("Crosspost parent details are missing")
						});
						const P = this.props.postComponentForLayout({
								isCrosspost: !!S.crosspostRootId,
								isFirstPost: f,
								layout: n,
								post: k
							}),
							I = "post-list-item-[layout: ".concat(n, "]-[postId: ").concat(e, "]"),
							T = q(e, n, s, m, p, h, this.props, t),
							N = z(e, n, this.props, t),
							L = K(e, this.props),
							M = k.media && k.media.type === w.n.EMBED ? k.media.provider : null;
						E = {
							estHeight: Object(_.c)(S, n),
							id: e,
							isFocusable: !(!k.media || n !== j.g.Large) && (w.d.has(k.media.type) && (!M || !w.q.has(M)) && !k.isSpoiler && !k.isNSFW),
							trackOnEnteredViewport: T,
							trackOnExitedViewport: N,
							render: t => {
								let {
									className: n,
									height: u,
									width: h,
									remeasure: x,
									setScrollerChildRef: v,
									shouldLoadInitially: E
								} = t;
								return d.a.createElement(P, {
									className: n,
									currentProfileName: r,
									key: I,
									availableWidth: h,
									eventFactory: g,
									first: f,
									forceLoadMedia: E,
									inSubredditOrProfile: O,
									isCommentPermalink: o,
									isCommentsPage: a,
									isFrontpage: i,
									isProfilePostListing: c,
									isTopicPage: l,
									listingKey: m,
									listingName: p,
									pageLayer: b,
									last: s,
									onClickPost: L,
									onSizeChanged: x,
									postId: e,
									redditStyle: y,
									sendEvent: this.props.sendEvent,
									scrollerItemRef: v
								})
							}
						}, this.scrollChildCache.set(v, E)
					}
					return E
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return d.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						disablePlaceholder: s,
						layout: n,
						onTryAgain: r,
						postListPlaceholderComponent: o
					} = this.props;
					if (s) return;
					const a = o;
					return d.a.createElement("div", {
						className: R.a.placeholder
					}, d.a.createElement(a, {
						className: t,
						isLoading: !e,
						layout: n
					}), !!e && d.a.createElement(f.a, {
						apiError: e,
						onTryAgain: r
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s,
						layout: n,
						loadMoreClassName: r,
						onLoadMore: o
					} = this.props;
					if (!s) return d.a.createElement("div", {
						className: R.a.placeholder
					}, d.a.createElement(y.a, {
						className: r,
						isLoading: !!t,
						layout: n,
						countOverride: V[n]
					}), !!e && d.a.createElement(f.a, {
						apiError: e,
						onTryAgain: o
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: s,
						injectChildren: r,
						isTruncated: o,
						layout: a,
						location: i,
						loadMore: l,
						postIds: b,
						onLoadMore: h
					} = this.props;
					let g = b.map((e, t, s) => {
						const n = t === b.length - 1;
						return this.scrollChildForPost(e, t, n, a)
					});
					r && (g = J(g, r));
					const x = this.props.measureScrollFPS ? "post-listings-".concat(a) : void 0,
						y = i ? Object(n.e)(i) : null,
						f = y || o;
					return d.a.createElement(c.Fragment, null, d.a.createElement(O.b, {
						innerRef: this.updateScrollerRef,
						className: f ? R.a.truncatedPostList : Object(p.a)(R.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: l && l.token ? l.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: h,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: x,
						viewportTopPadding: C.f
					}, g), y && d.a.createElement(W, {
						className: R.a.seeMoreButton
					}, d.a.createElement(S.a, {
						className: R.a.seeMorePostsText,
						to: Object(m.a)(y, {
							type: u.Lb.Posts
						})
					}, d.a.createElement(v.a, {
						msgId: "search.seeMorePosts"
					}), d.a.createElement(H, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			G.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: d.a.Fragment
			}
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
				g = s("./src/reddit/helpers/trackers/post.ts"),
				x = s("./src/reddit/models/Subreddit/index.ts"),
				y = s("./src/reddit/components/PostMeta/index.m.less"),
				f = s.n(y);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: n,
					isCurrentUserProfilePost: y,
					isOverlay: O,
					isTopicPage: v,
					language: E,
					post: C,
					shouldShowSubscribeButton: j,
					subredditOrProfile: S,
					tooltipType: k
				} = e, _ = !!v;
				return r.a.createElement("div", {
					className: f.a.metaContainer
				}, !n && !C.isSponsored && S && r.a.createElement(i.a, {
					postId: C.id,
					subredditName: S.name
				}, r.a.createElement(p.a, {
					className: f.a.subredditName,
					"data-click-id": "subreddit",
					to: S.url
				}, S.displayText)), S && S.isQuarantined && r.a.createElement(m.a, null), !n && !C.isSponsored && S && j && !y && r.a.createElement(u.a, {
					getEventFactory: e => Object(g.f)(C.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: S.name,
						type: Object(x.e)(S) ? b.a.PROFILE : b.a.SUBREDDIT
					},
					postId: C.id,
					small: !0
				}), !n && !C.isSponsored && r.a.createElement(h.b, null), !n && !C.isSponsored && r.a.createElement(c.h, {
					type: C.belongsTo.type,
					id: C.belongsTo.id
				}), r.a.createElement(l.d, {
					className: f.a.postTopMeta,
					flairStyleTemplate: t,
					language: E,
					post: C,
					tooltipType: k
				}), r.a.createElement(d.a, {
					displayText: S ? S.displayText : null,
					inSubredditOrProfile: !!n,
					language: E,
					post: C,
					tooltipType: k
				}), S && r.a.createElement(a.a, {
					className: f.a.donationAmount,
					contentId: C.id,
					subredditId: S.id
				}), !_ && r.a.createElement(o.a, {
					hideCta: s,
					isOverlay: O,
					thing: C,
					tooltipType: k
				}))
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/components/PostLeftRail/index.tsx"),
				a = s("./src/reddit/components/VerticalVotes/index.tsx"),
				i = s("./src/reddit/controls/Checkbox/index.tsx"),
				c = s("./src/reddit/helpers/isPost.ts"),
				d = s("./src/reddit/helpers/showReportIndicator/index.ts");
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: n = !1,
					isCheckboxSelected: l = !1,
					toggleCheckbox: m = (() => {}),
					flairStyleTemplate: p,
					redditStyle: u
				} = e, b = "upvote-button-".concat(t.id);
				return r.a.createElement(o.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(d.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: u
				}, n && r.a.createElement(i.a, {
					isCheckboxSelected: l,
					toggleCheckbox: m
				}), r.a.createElement(a.a, {
					flairStyleTemplate: p,
					model: t,
					onVoteClick: s,
					redditStyle: u,
					upvoteTooltipId: b
				}))
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
						"--RawHTMLDisplay-tr-even": Object(n.j)(Object(l.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(n.j)(Object(l.a)(e).line, .8)
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
				mediaWrapper: "_1FoZeus-f2nDzrVv5WpY_G",
				mediaPlaceholder: "_2C0inkNJdF-Ov9MOBPF4zU",
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
				mediaWrapper: "_1eIKxpeFNBTQ699qAcQRbd",
				mediaPlaceholder: "_3d88aDP4u4C5DLMu8SfYZ8",
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
				descriptionContainer: "_3zCQAIsCB1OIYQILnEJD61",
				description: "_3C8z4MmIB_gou30f3ojB0V",
				button: "DEgV8HnF3Dr9R22X_SHUw"
			}
		},
		"./src/reddit/components/SearchResultsContent/NoResults/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "FkQALOgNG0XnM_qGE3GOB",
				text: "_1tEoY-vmgG3yWH6hCdgy3p",
				semiBold: "_2Kn5gtljobl1Fv05YLAeKK",
				noResults: "_1VDJFxZ-XJSB8yo1UyJzsi"
			}
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
				i = s("./src/reddit/components/SidebarFooter/index.m.less"),
				c = s.n(i);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = o.a.a("Link", c.a);
			t.a = e => r.a.createElement(a.a, {
				className: c.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, r.a.createElement("div", {
				className: c.a.LinkContainer
			}, r.a.createElement("div", {
				className: c.a.Column
			}, r.a.createElement(l, {
				href: "https://www.reddithelp.com"
			}, d._("help", null, {
				hk: "4lyYaD"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/mobile/download"
			}, d._("Reddit App", null, {
				hk: "1ehrjP"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/coins"
			}, d._("Reddit coins", null, {
				hk: "32iMaN"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/premium"
			}, d._("Reddit premium", null, {
				hk: "RuO3A"
			})), r.a.createElement(l, {
				href: "http://redditgifts.com/"
			}, d._("Reddit gifts", null, {
				hk: "2XziRN"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, d._("Communities", null, {
				hk: "3CJu37"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/posts/a-1/"
			}, d._("Top Posts", null, {
				hk: "2NOEW2"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/topics/a-1/"
			}, d._("Topics", null, {
				hk: "349RFt"
			}))), r.a.createElement("div", {
				className: c.a.Column
			}, r.a.createElement(l, {
				href: "https://about.reddit.com"
			}, d._("about", null, {
				hk: "1sqJKs"
			})), r.a.createElement(l, {
				href: "https://about.reddit.com/careers/"
			}, d._("careers", null, {
				hk: "26ABvc"
			})), r.a.createElement(l, {
				href: "https://about.reddit.com/press/"
			}, d._("press", null, {
				hk: "2Qmgdz"
			})), r.a.createElement(l, {
				href: "https://www.redditinc.com/advertising"
			}, d._("advertise", null, {
				hk: "Mt40U"
			})), r.a.createElement(l, {
				href: "http://www.redditblog.com/"
			}, d._("blog", null, {
				hk: "46IQJw"
			})), r.a.createElement(l, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, d._("Terms", null, {
				hk: "4qRzfE"
			})), r.a.createElement(l, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, d._("Content policy", null, {
				hk: "1DyxZS"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/help/privacypolicy"
			}, d._("Privacy policy", null, {
				hk: "10K04G"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, d._("Mod policy", null, {
				hk: "2gYc2T"
			})))), r.a.createElement("div", {
				className: c.a.Copyright
			}, d._("Reddit Inc © {year}. All rights reserved", [d._param("year", (new Date).getFullYear().toString())], {
				hk: "4BrCkA"
			})))
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
				l = s("./src/reddit/i18n/components.tsx"),
				m = s("./src/reddit/components/BackToTop/index.m.less"),
				p = s.n(m),
				u = e => i.a.createElement("div", {
					className: Object(n.a)(e.className, p.a.container),
					style: e.style
				}, i.a.createElement(d.f, {
					className: p.a.button,
					onClick: () => window.scroll(0, 0)
				}, i.a.createElement(l.c, null, "Back to top"))),
				b = s("./src/reddit/components/SidebarFooter/index.tsx"),
				h = s("./src/reddit/constants/componentSizes.ts"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				y = s.n(x),
				f = s("./src/lib/lessComponent.tsx");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var v = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const E = c.e[1] + 24,
				C = h.f + 8 + 152 + 32 + 16,
				j = C + E + 8,
				S = f.a.div("Container", y.a),
				k = f.a.wrapped(e => {
					var {
						className: t
					} = e, s = v(e, ["className"]);
					return i.a.createElement(u, O({
						className: t,
						style: {
							top: "calc(100vh - ".concat(40, "px)")
						}
					}, s))
				}, "BackToTop", y.a),
				_ = e => {
					let {
						children: t,
						className: s,
						isSticky: r
					} = e;
					return i.a.createElement("div", {
						className: Object(n.a)(s, {
							[y.a.StickyStyles]: r
						})
					}, t)
				};
			class P extends a.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > j,
						shouldFooterSticky: this.windowHeight > C
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
					} = this, r = this.state.isAdSticky && !(!e && !t);
					return i.a.createElement(S, {
						className: s,
						innerRef: this.setWrapperRef
					}, i.a.createElement(_, {
						isSticky: r
					}, e, t, !n && i.a.createElement(b.a, null)), !this.props.hideBackToTop && i.a.createElement(k, null))
				}
			}
			const w = Object(g.t)();
			t.a = w(P)
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
					source: c
				}, Object(a.a)(s), r.a.createElement(p, null))) : null
			}
		},
		"./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/subreddit/inlineEditing.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/ImageInput/index.tsx"),
				m = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = s("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				u = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				b = s("./src/reddit/i18n/components.tsx"),
				h = s("./src/reddit/i18n/utils.ts"),
				g = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				x = e => r.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 16 17",
					version: "1.1"
				}, r.a.createElement("path", {
					d: "M8.566 5.835l2.4 2.4a.8.8 0 0 1-1.132 1.131L8.8 8.332V13.6a.8.8 0 1 1-1.6 0V8.332L6.166 9.366a.8.8 0 0 1-1.132-1.131l2.4-2.4a.803.803 0 0 1 1.132 0zm3.091-2.292A3.547 3.547 0 0 1 15.2 7.085a.8.8 0 0 1-1.6 0 1.945 1.945 0 0 0-2.318-1.904.802.802 0 0 1-.869-.43A4.206 4.206 0 0 0 6.628 2.4 4.233 4.233 0 0 0 2.4 6.629a.8.8 0 0 1-1.6 0A5.835 5.835 0 0 1 6.628.799a5.788 5.788 0 0 1 4.941 2.745l.088-.001z",
					id: "a"
				})),
				y = s("./src/reddit/models/ApiRequestState/index.ts"),
				f = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				O = s("./src/reddit/components/SubredditIcon/index.m.less"),
				v = s.n(O);

			function E() {
				return (E = Object.assign || function(e) {
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
			class j extends r.a.Component {
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
						o = C(e, ["subredditId", "className", "inTopBar"]),
						a = [s, v.a.inTopBar, v.a.iconContainer];
					return n ? a.push(v.a.emptyEditableIconInTopBar) : a.push(v.a.editableIcon, v.a.emptyEditableIcon), r.a.createElement("span", E({}, o, {
						className: Object(i.a)(...a)
					}), n ? r.a.createElement(x, {
						className: v.a.emptyUploadButton
					}) : r.a.createElement(g.a, {
						className: v.a.emptyPlusButton
					}), this.props.children)
				}
			}
			const S = e => {
					const {
						iconColor: t,
						className: s,
						alt: n,
						role: o,
						onClick: a,
						inTopBar: c,
						src: d
					} = e;
					return r.a.createElement("span", {
						className: v.a.iconContainer
					}, r.a.createElement("img", {
						onClick: a,
						role: o,
						alt: n,
						src: d,
						className: Object(i.a)(s, {
							[v.a.editableIcon]: !c
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				k = Object(a.c)({
					isLoading: f.b
				});
			class _ extends r.a.PureComponent {
				constructor(e) {
					super(e), this.inputRef = null, this.openImageUpload = () => {
						this.inputRef && this.inputRef.click(), this.props.sendEvent(u.b)
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => r.a.createElement(l.a, {
						className: v.a.imageUploader,
						inputRef: this.setInputRef,
						multiple: !1,
						onChange: e => {
							const t = Object(y.b)();
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
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					});
					return this.props.inTopBar ? r.a.createElement("span", {
						className: v.a.clickableUploadText,
						onClick: this.openImageUpload
					}, e ? r.a.createElement(b.c, null, "Update icon") : r.a.createElement(b.c, null, "Add icon")) : null
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
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), s = r.a.createElement(r.a.Fragment, null, r.a.createElement(S, E({
						src: e,
						alt: Object(h.c)("Subreddit icon"),
						iconColor: t,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader());
					return this.props.linkTo ? r.a.createElement("a", {
						href: this.props.linkTo
					}, s) : s
				}
				renderEmptyState() {
					return this.props.linkTo ? r.a.createElement("a", {
						href: this.props.linkTo
					}, r.a.createElement(j, E({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : r.a.createElement(r.a.Fragment, null, r.a.createElement(j, E({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader())
				}
				renderSpinner() {
					if (this.props.isLoading) {
						const e = [v.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(v.a.loadingIconInTopBar), t = 32), r.a.createElement(m.a, {
							className: Object(i.a)(...e),
							sizePx: t
						})
					}
					return null
				}
				render() {
					const {
						url: e
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), t = e ? this.renderEditableIcon() : this.renderEmptyState(), s = this.renderEditButton();
					return s ? r.a.createElement("div", {
						className: v.a.flexContainer
					}, t, s) : t
				}
			}
			t.a = Object(o.b)(k, (e, t) => ({
				onFileSelected: (s, n) => {
					e(Object(c.a)(t.subreddit, s, n))
				}
			}))(Object(d.b)(_))
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
			var g = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const x = b.a.button("IconButton", p.a),
				y = b.a.wrapped(d.a, "SubscribeIcon", p.a),
				f = b.a.wrapped(c.a, "UnsubscribeIcon", p.a),
				O = b.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, n = g(e, ["border", "small"]);
					return o.a.createElement(x, n, o.a.createElement(y, {
						className: Object(u.a)(n.className, {
							[p.a.isSmall]: s
						})
					}))
				}, "SubscribeIconButton", p.a),
				v = b.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, n = g(e, ["border", "small"]);
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
				E = e => {
					var {
						icon: t
					} = e, s = g(e, ["icon"]);
					return t ? o.a.createElement(O, h({}, s, {
						className: Object(u.a)(s.className, {
							[p.a.isSmall]: s.small
						})
					})) : o.a.createElement(v, h({}, s, {
						className: Object(u.a)(s.className, {
							[p.a.isSmall]: s.small
						})
					}))
				},
				C = b.a.wrapped(e => {
					var {
						border: t,
						language: s,
						small: n,
						type: r
					} = e, i = g(e, ["border", "language", "small", "type"]);
					return o.a.createElement(x, i, o.a.createElement(f, {
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
					} = e, c = g(e, ["border", "language", "small", "type"]);
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
				S = e => {
					var {
						icon: t
					} = e, s = g(e, ["icon"]);
					return t ? o.a.createElement(C, h({}, s, {
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
					return this.props.userIsSubscriber ? o.a.createElement(S, h({}, i, {
						language: r,
						type: this.props.identifier.type
					})) : o.a.createElement(E, h({}, i, {
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
			var g = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const x = b.a.wrapped(e => {
					var {
						small: t,
						shouldReverseColor: s
					} = e, n = g(e, ["small", "shouldReverseColor"]);
					const o = s ? i.i : i.f;
					return r.a.createElement(o, h({}, n, {
						className: Object(u.a)(n.className, {
							[p.a.isLarge]: !t
						})
					}))
				}, "SubscribeInternalButton", p.a),
				y = b.a.wrapped(e => {
					var {
						small: t,
						belongsToType: s,
						shouldReverseColor: n
					} = e, o = g(e, ["small", "belongsToType", "shouldReverseColor"]);
					const a = n ? i.f : i.i;
					return r.a.createElement(a, h({}, o, {
						className: Object(u.a)(o.className, {
							[p.a.isLarge]: !t
						})
					}))
				}, "UnsubscribeButton", p.a),
				f = b.a.wrapped(c.a, "Checkmark", p.a),
				O = b.a.wrapped(d.a, "Plus", p.a),
				v = b.a.div("ButtonSpacer", p.a);
			class E extends r.a.Component {
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
							getEventFactory: E,
							onSubscriptionsRequested: C
						} = e,
						j = g(e, ["className", "identifier", "language", "onSubscribe", "onUnsubscribe", "postId", "sendEvent", "small", "userIsSubscriber", "doNotHideOtherSubscribeButtons", "getEventFactory", "onSubscriptionsRequested"]),
						S = this.state.isHovered;
					let k = m ? "subscribed" : "subscribe";
					m && S && (k = "unsubscribe");
					const _ = Object(l.a)({
						type: s.type,
						key: k
					});
					return m ? this.state.hasJustSubscribed || b ? r.a.createElement(y, h({
						className: Object(u.a)(t, {
							[p.a.isLarge]: !d,
							[p.a.unsubscribeButtonHoverStyles]: !d
						}),
						onClick: this.onClick,
						small: d,
						belongsToType: s.type,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, j), d && r.a.createElement(f, null), !d && !S && r.a.createElement(f, null), !d && _) : d ? null : r.a.createElement(v, null) : r.a.createElement(r.a.Fragment, null, r.a.createElement(x, h({
						className: Object(u.a)(t, {
							[p.a.isLarge]: !d
						}),
						onClick: this.onClick,
						small: d
					}, j, {
						id: "subscribe-button-".concat(i),
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}), r.a.createElement(O, null), !d && _))
				}
			}
			t.a = Object(a.a)(Object(o.b)(E))
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
			t.a = Object(r.a)(Object(n.b)(o.a))
		},
		"./src/reddit/components/TabNav/index.m.less": function(e, t, s) {
			e.exports = {
				Gear: "_1USoXyqC8EXT8sZzm2JJYM",
				gear: "_1USoXyqC8EXT8sZzm2JJYM",
				Title: "_1VNcq3ynegRchfLyPqmKJ_",
				title: "_1VNcq3ynegRchfLyPqmKJ_",
				mConstrainWidth: "_2F7lbod1n6khHmvkBHQLQW",
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
				return n
			})), s.d(t, "a", (function() {
				return E
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n, r = s("./node_modules/lodash/throttle.js"),
				o = s.n(r),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/constants/componentSizes.ts"),
				p = s("./src/reddit/constants/zIndex.ts"),
				u = s("./src/reddit/controls/InternalLink/index.tsx"),
				b = s("./src/reddit/icons/svgs/Settings/index.tsx"),
				h = s("./src/reddit/components/TabNav/index.m.less"),
				g = s.n(h),
				x = function(e, t) {
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
			}(n || (n = {}));
			const y = l.a.wrapped(b.a, "Gear", g.a),
				f = l.a.h3("Title", g.a),
				O = l.a.div("TabNavContainer", g.a),
				v = l.a.div("Tabs", g.a),
				E = l.a.wrapped(e => {
					var {
						active: t,
						enabled: s
					} = e, n = x(e, ["active", "enabled"]);
					return i.a.createElement(u.a, {
						"aria-selected": t,
						className: Object(c.a)(n.className, {
							[g.a.mIsActive]: t,
							[g.a.mIsEnabled]: !1 !== s
						}),
						role: "tab",
						to: n.to
					}, n.children)
				}, "Tab", g.a),
				C = e => {
					switch (e) {
						case n.GEAR:
							return i.a.createElement(y, null);
						default:
							return null
					}
				},
				j = () => window.pageYOffset || window.scrollY,
				S = 75,
				k = {
					paddingLeft: 15,
					left: 0,
					position: "fixed",
					right: 0,
					top: m.f,
					willChange: "transform",
					zIndex: p.f
				};
			class _ extends i.a.Component {
				constructor(e) {
					super(e), this.toggleSticky = o()(() => {
						this.state.sticky || this.forceUnsticky ? j() < S && (this.forceUnsticky = !0, this.wrapperRef.firstElementChild.setAttribute("style", ""), this.setState({
							sticky: !1
						}, () => this.forceUnsticky = !1)) : j() >= S && this.setState({
							sticky: !0
						})
					}, d.G), this.forceUnsticky = !1, this.wrapperRef = null, this.state = {
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
					return i.a.createElement(O, {
						className: this.props.className
					}, i.a.createElement(f, {
						className: Object(c.a)({
							[g.a.mConstrainWidth]: !!this.props.constrainWidth
						})
					}, C(this.props.icon), this.props.title), i.a.createElement(v, {
						className: Object(c.a)({
							[g.a.mConstrainWidth]: !!this.props.constrainWidth
						}),
						role: "tablist",
						innerRef: e => this.wrapperRef = e,
						style: this.props.isCategoryPage && this.state.sticky && !this.forceUnsticky ? k : void 0
					}, this.props.children))
				}
			}
			t.c = _
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
				g = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/helpers/correlationIdTracker.ts"),
				y = s("./src/reddit/helpers/flair.ts"),
				f = s("./src/reddit/helpers/trackers/postFlair.ts"),
				O = s("./src/reddit/models/Widgets/index.ts"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				C = s.n(E);

			function j() {
				return (j = Object.assign || function(e) {
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
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const k = 129,
				_ = Object(h.t)({
					filterName: e => Object(h.Q)(e)[b.f],
					url: e => Object(h.U)(e)
				}),
				P = Object(i.c)({
					subredditId: (e, t) => Object(v.D)(e, t.subredditName)
				}),
				w = Object(a.b)(P),
				I = l.a.div("WidgetContent", C.a),
				T = e => {
					var {
						display: t,
						isFlairFilter: s,
						onMouseDown: n
					} = e, r = S(e, ["display", "isFlairFilter", "onMouseDown"]);
					return o.a.createElement("li", {
						className: Object(c.a)(C.a.StyledFlair, t === O.d.Cloud && C.a.cloudDisplay, {
							[C.a.flairFilter]: s,
							[C.a["m-selected"]]: r.isSelected
						}),
						onMouseDown: n
					}, o.a.createElement(m.b, j({}, r, {
						className: C.a.Flair,
						isFlairFilter: s,
						forceSmallEmojis: !0
					})))
				};
			class N extends o.a.Component {
				constructor(e) {
					super(e), this.flairListRef = o.a.createRef(), this.trackFlairWidgetClick = e => {
						this.props.sendEvent(Object(f.f)(e))
					}, this.trackFlairWidgetClear = e => this.props.sendEvent(Object(f.c)(e)), this.trackFlairOverflowClick = () => {
						this.props.sendEvent(Object(f.d)())
					}, this.onClick = e => {
						const t = {
							id: this.props.subredditId,
							eventType: "subreddit",
							originElement: "post_flair_widget",
							postFlairName: e
						};
						Object(x.d)(x.a.SearchResults), this.props.sendEvent(Object(f.b)(t))
					}, this.onToggleCollapse = () => this.setState(e => ({
						isCollapsed: !e.isCollapsed
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(y.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(y.c)(this.props.widget.templates[e])), this.state = {
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
					return o.a.createElement(g.n, {
						className: C.a.flairFilterButton,
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
					}, e.map(e => o.a.createElement(T, {
						key: e.templateId,
						display: s.display,
						flair: e,
						isFlairFilter: !0,
						large: !0,
						onMouseDown: () => this.trackFlairWidgetClick(e),
						subredditName: t,
						to: Object(y.e)(this.props.url, Object(y.j)(e))
					})))
				}
				renderFlairFilters(e) {
					const {
						isCollapsed: t
					} = this.state, s = t ? k : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return o.a.createElement("div", {
						className: C.a.flairFilterContainer,
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
					return o.a.createElement("ul", null, o.a.createElement(T, {
						key: e.templateId,
						display: s.display,
						flair: e,
						isFlairFilter: !0,
						isSelected: !0,
						large: !0,
						onCloseClick: t => this.handleCloseClick(t, e),
						subredditName: t,
						to: Object(y.e)(this.props.url, Object(y.j)(e))
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
			t.a = _(w(Object(p.b)(N)))
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
			var h = s("./src/reddit/i18n/components.tsx"),
				g = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				x = s("./src/reddit/selectors/experiments/topPosts.ts"),
				y = s("./src/reddit/selectors/structuredStyles.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/models/Theme/index.ts"),
				v = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const E = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(v.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				C = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(v.a)(e).widgetColors.sidebarWidgetHeaderColor,
				j = e => {
					const t = E(e);
					return Object(O.f)(t)
				},
				S = e => {
					const t = C(e);
					return Object(O.f)(t)
				};
			var k = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				_ = s.n(k);
			const P = Object(m.t)(),
				w = Object(o.b)(() => Object(a.c)({
					forceRedditStyle: (e, t) => {
						const s = Object(m.m)(e, t) || void 0,
							n = t.redditStyle || Object(y.m)(e, {
								subredditId: s
							}),
							r = Object(f.Q)(e);
						return n || r
					},
					nigtmode: f.Q,
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
					return e.backgroundColor = E(this.props), e.borderColor = Object(g.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = j(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = C(this.props), e.color = e.fill = S(this.props), e
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
					} = this.props, u = s ? _.a.widgetContentOnly : _.a.widgetContent, b = !n && this.props.styles, g = b ? this.getWidgetBackgroundStyles() : {}, x = b ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(i.a)(t, _.a.widgetBackground, {
							[_.a.redditStyle]: n,
							[_.a.clickable]: !!a,
							[_.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: a,
						style: g
					}, c && r.a.createElement("div", {
						className: _.a.widgetHeader,
						style: x
					}, r.a.createElement("div", {
						className: Object(i.a)(_.a.widgetTitle, l)
					}, r.a.createElement(d.b, {
						type: d.a.Widget
					}, c)), o), r.a.createElement("div", {
						className: Object(i.a)(u, {
							[_.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? m : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(p.n, {
						className: _.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, r.a.createElement(h.c, null, "See More")))
				}
			}
			t.a = P(w(Object(c.a)(Object(l.b)(I))))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return f
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "b", (function() {
				return C
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/actions/ads/index.ts"),
				i = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/actions/postList.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				p = s("./src/reddit/helpers/trackers/post.ts"),
				u = s("./src/reddit/components/PostList/Placeholder.tsx"),
				b = s("./src/reddit/featureFlags/index.ts"),
				h = s("./src/reddit/selectors/listings.ts"),
				g = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/selectors/tracking.ts");

			function f() {
				return Object(l.t)({
					currentProfileName: l.h,
					isCommentPermalink: l.v,
					isCommentsPage: l.w,
					isFrontpage: l.y,
					isProfilePostListing: l.H,
					isTopicPage: l.K,
					pageLayer: e => e
				})
			}
			const O = f(),
				v = {
					apiError: h.c,
					apiPending: h.d,
					measureScrollFPS: b.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(l.L)(e, t),
					loadMore: h.g,
					postsById: g.X,
					postIds: Object(o.a)((e, t) => {
						let {
							listingKey: s,
							listingName: n,
							inSubredditOrProfile: r
						} = t;
						return Object(g.I)(e, s, n, r)
					}),
					subredditsById: x.V,
					viewportDataLoaded: y.a,
					pageReferrer: l.O,
					postListPlaceholderComponent: () => u.a
				},
				E = Object(r.c)(v),
				C = (e, t) => ({
					onBottomViewed: (t, s) => e(c.c(t, s)),
					adBrandSafetyStatusReceived: t => {
						e(a.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						e(i.H(t))
					},
					fireAdPixelsOfType: (t, s) => {
						e(i.y(t, s))
					},
					trackOnPostEnteredViewport: (t, s, n) => {
						e(i.K(t, n))
					},
					trackOnPostExitedViewport: (t, s, n, r) => {
						e(i.L(t, n, r))
					}
				}),
				j = Object(n.b)(E, C, (e, t, s) => Object.assign({}, e, t, s, {
					postClickEvent: p.f,
					postComponentForLayout: e => Object(m.b)(Object.assign({}, e))
				}));
			t.a = e => Object(d.b)(O(j(e)))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/subscription/index.ts"),
				a = s("./src/reddit/selectors/subreddit.ts"),
				i = s("./src/reddit/selectors/user.ts");
			t.a = Object(n.b)(() => Object(r.c)({
				language: i.O,
				userIsSubscriber: a.Z
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
				crosspostRoot: u.c,
				crosspostSubredditOrProfile: u.d,
				currentUser: b.i,
				flairStyleTemplate: d.P,
				hideNSFWPref: b.y,
				isActive: u.h,
				language: b.O,
				moderatorPermissions: m.i,
				modModeEnabled: d.N,
				post: u.M,
				showEditFlair: p.a,
				subredditOrProfile: u.Y,
				userIsOp: b.eb
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
						const n = t === c.a.upvoted ? Object(o.X)(s) : Object(o.u)(s);
						e(n)
					},
					onIgnoreReports: () => e(Object(o.V)(s)),
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
			}));
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
				g = b(c);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? g : e.isCheckboxSelected ? h : a.a;
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
				return p
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "d", (function() {
				return g
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/app/strings/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/prettyPrintNumber/index.ts"),
				c = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/i18n/utils.ts")),
				d = s("./src/reddit/controls/MetaData/index.m.less"),
				l = s.n(d),
				m = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};
			const p = a.a.span("metaText", l.a),
				u = e => r.a.createElement(p, e, " · "),
				b = Object(o.c)("comment.point"),
				h = e => {
					var {
						isScoreHidden: t,
						language: s,
						score: n,
						useUpvotes: o
					} = e, a = m(e, ["isScoreHidden", "language", "score", "useUpvotes"]);
					const d = Object(i.b)(n),
						l = Object(c.c)("\n    ".concat(Object(c.b)("score", d), " ").concat(Object(c.a)("upvotes", ["upvote", "upvotes"], n), "\n  ")),
						u = t ? Object(c.c)("Score hidden") : o ? l : b(s, n, {
							count: d
						});
					return r.a.createElement(p, a, u)
				},
				g = (e, t) => {
					const s = Object(o.b)(t, "posts.comments.noun", e, {
						count: Object(i.b)(e)
					});
					return r.a.createElement(p, null, s)
				}
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
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return p
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "a", (function() {
				return g
			})), s.d(t, "d", (function() {
				return x
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
				b = e => Object(n.o)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : m,
				g = e => e.isActive ? l.a.mIsActive : void 0,
				x = e => {
					const t = Object(o.a)(Object(r.a)(e), a.a.actionIcon, a.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
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
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
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
				sidebar: "_35ky2Wm3TP6kFdIh-DOxmA"
			}
		},
		"./src/reddit/pages/SearchResults/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.regexp.match.js");
			var n = s("./node_modules/lodash/pick.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/makeSearchKey/index.ts"),
				m = s("./src/reddit/components/JumpToContent/index.tsx"),
				p = s("./src/reddit/actions/search.ts"),
				u = s("./src/lib/search/index.ts"),
				b = s("./node_modules/lodash/memoize.js"),
				h = s.n(b),
				g = s("./src/app/strings/index.ts"),
				x = s("./src/lib/makeListingKey/index.ts"),
				y = s("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),
				f = s("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.tsx"),
				O = s("./src/reddit/components/Widgets/Base/index.tsx"),
				v = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				E = s("./src/reddit/selectors/discoveryUnit.ts"),
				C = s("./src/reddit/selectors/listings.ts");
			const j = [];
			var S = s("./src/reddit/selectors/user.ts"),
				k = s("./src/reddit/components/DiscoveryUnit/PostsDiscoveryUnit/index.m.less"),
				_ = s.n(k);
			var P = Object(i.b)(() => {
					const e = Object(E.a)();
					return Object(c.c)({
						language: S.O,
						isDataPending: (e, t) => {
							let {
								categoryId: s,
								discoveryUnit: n,
								listingKey: r
							} = t;
							if (r) return Object(C.h)(e, {
								listingKey: r
							});
							if (!s || !n) return !1;
							const o = Object(x.a)(n.unitName, d.O.HOT, {
								category: s
							});
							return Object(C.h)(e, {
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
								if (!e) return j;
								const s = e.postOrder;
								if (t && s) {
									const e = s.indexOf(t);
									if (e > -1) return s.splice(e, 1), s
								}
								return s || j
							})(o, a)
						}
					})
				}, e => ({
					trackPostView: h()((t, s, n) => e((e, r) => v.A(r(), t, s, n)), (e, t) => {
						let {
							id: s
						} = e;
						return "".concat(s, "-").concat(t)
					})
				}))(e => {
					const t = a.a.createElement(a.a.Fragment, null, a.a.createElement(O.a, {
						className: _.a.widgetHeader
					}, e.categoryId ? Object(g.a)(e.language, "discoveryUnits.topPostsInCategory", {
						category: e.category
					}) : Object(g.a)(e.language, "discoveryUnits.topPostsAcrossReddit", {
						category: e.category
					})));
					return e.isDataPending || e.postIds && 0 !== e.postIds.length ? a.a.createElement("div", {
						className: e.className
					}, a.a.createElement(y.a, {
						className: _.a.layout,
						header: t,
						hidePadding: !0
					}, a.a.createElement(f.a, {
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
				w = s("./node_modules/react-router-redux/es/index.js"),
				I = s("./src/reddit/selectors/category.ts"),
				T = s("./src/reddit/selectors/subreddit.ts"),
				N = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js")),
				L = s("./node_modules/react-motion/lib/react-motion.js"),
				M = s("./src/reddit/actions/tooltip.ts"),
				R = s("./src/reddit/components/DiscoveryUnit/CarouselBase/index.tsx"),
				F = s("./src/lib/classNames/index.ts"),
				A = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				B = s("./src/lib/prettyPrintNumber/index.ts"),
				D = s("./src/reddit/components/IdCard/Title.tsx"),
				U = s("./src/reddit/components/SubscribeButton/index.tsx"),
				V = s("./src/reddit/models/Theme/index.ts"),
				W = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				H = s("./src/reddit/components/IdCard/index.m.less"),
				q = s.n(H),
				z = s("./src/reddit/components/DiscoveryUnit/SearchCommunity/index.m.less"),
				K = s.n(z);
			class J extends a.a.Component {
				render() {
					const e = Object(V.g)(this.props.bannerBackgroundColor || this.props.primaryColor || Object(W.a)(this.props).active, this.props.bannerBackgroundImage || Object(W.a)(this.props).banner.backgroundImage, "cover");
					return a.a.createElement("div", {
						className: Object(F.a)(K.a.container, this.props.className),
						style: this.props.style
					}, a.a.createElement("div", {
						className: K.a.searchCommunity,
						onClick: this.props.onClick
					}, a.a.createElement("div", {
						className: K.a.banner,
						style: {
							background: e
						}
					}), a.a.createElement(D.a, {
						className: K.a.titleWrapper,
						largeSubredditIcon: !0,
						linkUrl: "r/".concat(this.props.name),
						subredditIcon: {
							url: this.props.iconUrl
						},
						titleText: "r/".concat(this.props.name),
						primaryColor: this.props.primaryColor
					}), this.props.subscribers && a.a.createElement("span", {
						className: K.a.count
					}, Object(g.a)(this.props.language, "discoveryUnits.subscribers", {
						number: Object(B.b)(this.props.subscribers)
					})), a.a.createElement("div", {
						className: Object(F.a)(q.a.Description, K.a.description)
					}, this.props.description), a.a.createElement("div", {
						className: K.a.subscribeButtonWrapper
					}, a.a.createElement(U.a, {
						className: K.a.subscribeButton,
						identifier: {
							name: this.props.name,
							type: this.props.type
						},
						getEventFactory: this.props.getSubscribeEventFactory,
						onClick: e => e.stopPropagation()
					}))))
				}
			}
			const G = Object(A.a)(J);
			class Q extends a.a.Component {
				render() {
					return a.a.createElement(G, this.props)
				}
			}
			var Y = Q,
				Z = s("./src/reddit/components/IdCard/Placeholder.tsx"),
				X = s("./src/reddit/constants/posts.ts"),
				$ = s("./src/reddit/selectors/tooltip.ts"),
				ee = s("./src/reddit/components/DiscoveryUnit/SubredditsDiscoveryUnit/SearchCommunities/index.m.less"),
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
			const re = 338,
				oe = {
					stiffness: 210,
					damping: 30
				},
				ae = Object(i.b)(() => Object(c.c)({
					language: S.O,
					toolTipId: $.a
				}), (e, t) => ({
					toggleTooltip: t => e(Object(M.h)({
						tooltipId: t
					}))
				})),
				ie = e => {
					var {
						root: t,
						handleVisibilityChange: s
					} = e, n = ne(e, ["root", "handleVisibilityChange"]);
					return a.a.createElement(N.a, {
						root: t,
						threshold: .99,
						rootMargin: "0px 0px 0px 0px",
						onChange: s
					}, a.a.createElement(Y, n))
				};
			class ce extends R.c {
				constructor(e) {
					super(e), this.state = {
						scrollIndex: 0,
						viewableItems: {},
						visibleItemsCount: null
					}, this.id = "CollectionInfoCommunities"
				}
				componentDidMount() {
					super.componentDidMount()
				}
				componentDidUpdate(e) {
					this.trackCommunitiesViewed()
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
						language: s,
						searchResults: n,
						toggleTooltip: r
					} = this.props, o = !t && e.length > 0, {
						scrollIndex: i,
						visibleItemsCount: c
					} = this.state, d = this.getMaxScrollIndex(c), l = this.getAdjustment({
						itemWidth: re,
						maxScrollIndex: d,
						scrollIndex: i,
						visibleItemsCount: c
					}), m = this.getMarginLeft({
						adjustment: l,
						itemWidth: re,
						scrollIndex: i
					}), p = this.itemsFitInContainer({
						container: this.container,
						items: e,
						itemWidth: re
					});
					return a.a.createElement(a.a.Fragment, null, n && o && a.a.createElement("div", {
						className: te.a.communitiesWrapper,
						id: this.id,
						ref: this.setContainerRef
					}, a.a.createElement(L.Motion, {
						defaultStyle: {
							marginLeft: 0
						},
						style: {
							marginLeft: Object(L.spring)(m, oe)
						}
					}, t => a.a.createElement(a.a.Fragment, null, e.map((e, n) => a.a.createElement(ie, se({}, e, {
						language: s,
						className: te.a.community,
						handleVisibilityChange: this.makeVisibilityChangeHandler(n),
						key: e.name,
						root: this.id,
						style: 0 === n ? t : void 0,
						onClick: () => this.props.onCommunityClick(e),
						toggleTooltip: r,
						type: e.type || X.a.SUBREDDIT
					}))))), 0 !== i && a.a.createElement(R.a, {
						className: te.a.arrowLeft,
						onClick: this.onClickPrev
					}), !p && (null == d || i < d) && a.a.createElement(R.b, {
						className: te.a.arrowRight,
						onClick: this.onClickNext
					})), n && !o && a.a.createElement("div", {
						className: te.a.searchCommunityPlaceholder
					}, a.a.createElement(Z.a, null), a.a.createElement(Z.a, null), a.a.createElement(Z.a, null), a.a.createElement(Z.a, null)))
				}
			}
			var de = ae(ce),
				le = s("./src/reddit/components/DiscoveryUnit/SubredditsDiscoveryUnit/index.m.less"),
				me = s.n(le);
			class pe extends a.a.Component {
				trackCommunityView(e) {
					this.props.discoveryUnit ? this.props.trackSubredditView(this.props.discoveryUnit, e) : this.props.searchDiscoveryUnit && this.props.trackSubredditView(this.props.searchDiscoveryUnit, e)
				}
				onCommunityClick(e) {
					this.props.navigateToSubreddit(e)
				}
				render() {
					const e = a.a.createElement(O.a, {
						className: me.a.widgetHeader
					}, this.props.categoryName ? Object(g.a)(this.props.language, "discoveryUnits.topSubredditsInCategory", {
						category: this.props.categoryName
					}) : Object(g.a)(this.props.language, "discoveryUnits.communitiesTalkingAboutThis"));
					return this.props.isDataPending || this.props.communities && 0 !== this.props.communities.length ? a.a.createElement("div", {
						className: me.a.container
					}, a.a.createElement(y.a, {
						header: e,
						hidePadding: !0,
						className: me.a.layout
					}, a.a.createElement(de, {
						category: this.props.subredditCategory,
						items: this.props.communities,
						isLoading: this.props.isDataPending,
						onCommunityClick: e => this.onCommunityClick(e),
						onCommunityView: e => this.trackCommunityView(e),
						language: this.props.language,
						searchResults: !0
					}))) : null
				}
			}
			var ue = Object(i.b)(() => Object(c.c)({
					subredditCategory: (e, t) => {
						let {
							categoryId: s
						} = t;
						return Object(I.j)(e, {
							id: s
						})
					},
					communities: (e, t) => {
						let {
							categoryId: s,
							searchDiscoveryUnit: n
						} = t;
						return s ? Object(I.a)(e, {
							id: s
						}) : n && n.subredditOrder ? Object(T.f)(e, {
							subredditIds: n.subredditOrder
						}) : []
					},
					language: S.O,
					isDataPending: (e, t) => {
						let {
							categoryId: s,
							listingKey: n
						} = t;
						return s ? !!Object(I.l)(e, {
							id: s
						}) : !!n && Object(C.h)(e, {
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
						trackSubredditView: h()((t, s) => e((e, n) => v.C(n(), t, s, r)), (e, t) => {
							let {
								id: s
							} = e, {
								name: n
							} = t;
							return "".concat(s, "-").concat(n)
						}),
						navigateToSubreddit: t => e((e, r) => {
							s ? v.s(r(), s, t) : n && v.I(r(), n, t), t.displayText && e(Object(w.b)("/".concat(t.displayText)))
						})
					}
				})(pe),
				be = s("./node_modules/lodash/constant.js"),
				he = s.n(be),
				ge = s("./node_modules/lodash/take.js"),
				xe = s.n(ge),
				ye = s("./node_modules/lodash/times.js"),
				fe = s.n(ye),
				Oe = s("./src/lib/addQueryParams/index.ts"),
				ve = s("./src/lib/LRUCache/index.ts"),
				Ee = s("./node_modules/react-dom/index.js"),
				Ce = s("./src/reddit/components/Scroller/Simple.tsx"),
				je = s("./src/reddit/helpers/correlationIdTracker.ts"),
				Se = s("./src/reddit/helpers/trackers/searchResults.ts"),
				ke = s("./src/reddit/selectors/telemetry.ts");
			const _e = new ve.a(250),
				Pe = (e, t, s, n) => {
					const r = "last-".concat(t),
						o = "entered-".concat(e.id, "-").concat(r);
					let a = _e.get(o);
					return void 0 === a && (a = "subreddit" === e.type ? () => Ie(s, e.id, n) : () => we(s, e.id, n), _e.set(o, a)), a
				},
				we = (e, t, s) => e(e => Object.assign({}, Object(Se.b)(e, s), {
					source: "search",
					action: "view",
					noun: "search_results_profile",
					correlationId: Object(je.c)(je.a.SearchResults),
					actionInfo: ke.actionInfo(e),
					search: ke.search(e, s),
					profile: ke.profile(e)
				})),
				Ie = (e, t, s) => e(e => Object.assign({}, Object(Se.b)(e, s), {
					source: "search",
					action: "view",
					noun: "search_results_subreddit",
					correlationId: Object(je.c)(je.a.SearchResults),
					actionInfo: ke.actionInfo(e),
					search: ke.search(e, s),
					subreddit: ke.subreddit(e)
				}));
			var Te = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Ne = s("./node_modules/fbt/lib/FbtPublic.js"),
				Le = s("./src/reddit/components/Flair/index.tsx"),
				Me = s("./src/reddit/components/SubredditIcon/index.tsx"),
				Re = s("./src/reddit/constants/tracking.ts"),
				Fe = s("./src/reddit/controls/InternalLink/index.tsx"),
				Ae = s("./src/reddit/models/Flair/index.ts"),
				Be = s("./src/reddit/contexts/PageLayer/index.tsx");
			const De = {},
				Ue = e => {
					let {
						pageLayer: t
					} = e;
					return t && t.locationState || De
				},
				Ve = Object(c.a)((e, t) => Ue(t), e => e.fromPage && e.fromPage.subredditName),
				We = Object(c.a)((e, t) => Ue(t), e => e.fromPage && e.fromPage.routeName),
				He = e => {
					let {
						pageLayer: t
					} = e;
					return t && t.locationState && t.locationState.searchSwitcherType
				},
				qe = Object(c.a)(We, (e, t) => {
					let {
						pageLayer: s
					} = t;
					return Object(Be.z)(s)
				}, (e, t) => t && (e === d.zb.COMMENTS || e === d.zb.SUBREDDIT));
			var ze = s("./src/reddit/components/SearchResultsContent/Community/index.m.less"),
				Ke = s.n(ze);
			const Je = Object(c.c)({
					hideNSFWPref: S.y,
					language: S.O,
					subredditOrProfile: T.J,
					subredditOrProfileAboutInfo: T.F,
					userIsSubscriber: T.Z
				}),
				Ge = Object(i.b)(Je),
				Qe = e => {
					e.preventDefault(), e.stopPropagation()
				};
			var Ye = Ge(Object(Te.b)(e => {
					if (!e.subredditOrProfile) return null;
					const t = e.subredditOrProfile.displayText,
						s = e.subredditOrProfileAboutInfo.publicDescription;
					let n, r;
					const o = t => {
						if (!t) return ((e, t) => s => ({
							source: "search",
							action: Re.c.CLICK,
							noun: "result_subscribe_".concat(e),
							correlationId: Object(je.c)(je.a.SearchResults),
							actionInfo: ke.actionInfo(s),
							search: ke.search(s, t)
						}))(e.identifier.type, e.searchOptions)
					};
					if ("subreddit" === e.identifier.type) {
						const t = e.subredditOrProfileAboutInfo;
						n = "number" == typeof t.subscribers ? Ne.fbt._({
							"*": "{number of subscribers} Members",
							_1: "1 Member"
						}, [Ne.fbt._plural(t.subscribers, "number of subscribers", Object(B.b)(t.subscribers))], {
							hk: "vb11y"
						}) : null, r = "number" != typeof t.subscribers ? null : a.a.createElement(U.a, {
							identifier: {
								name: e.subredditOrProfile.name,
								type: "subreddit"
							},
							onClick: Qe,
							getEventFactory: o,
							small: !0
						})
					} else {
						const t = e.subredditOrProfileAboutInfo,
							s = Object(B.b)(t.commentKarma + t.postKarma);
						n = Ne.fbt._({
							"*": "{karma count} Karma",
							_1: "1 Karma"
						}, [Ne.fbt._plural(t.commentKarma + t.postKarma, "karma count", s)], {
							hk: "4r0tyT"
						}), r = a.a.createElement(U.a, {
							identifier: {
								name: e.subredditOrProfile.name,
								type: "profile"
							},
							onClick: Qe,
							getEventFactory: o,
							small: !0
						})
					}
					return a.a.createElement(Fe.a, {
						className: Object(F.a)(Ke.a.container, e.className),
						onClick: () => {
							e.sendEvent(Object(Se.h)(e.identifier.type, e.searchOptions, He(e)))
						},
						to: e.subredditOrProfile.url
					}, a.a.createElement("div", {
						className: Ke.a.userInfo
					}, a.a.createElement(Me.b, {
						className: Ke.a.subredditIcon,
						shouldHideNsfwIcon: e.hideNSFWPref,
						subredditOrProfile: e.subredditOrProfile
					}), a.a.createElement("div", {
						className: Ke.a.titleContainer
					}, a.a.createElement("div", {
						className: Ke.a.title
					}, t), n ? a.a.createElement("div", {
						className: Ke.a.subtitle
					}, n) : null, e.subredditOrProfile.isNSFW && a.a.createElement(Le.b, {
						flair: {
							type: Ae.f.Nsfw,
							text: "nsfw"
						}
					}))), a.a.createElement("div", {
						className: Ke.a.description
					}, s), a.a.createElement("div", {
						className: Ke.a.buttonContainer
					}, r))
				})),
				Ze = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				Xe = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.m.less"),
				$e = s.n(Xe),
				et = e => a.a.createElement("div", {
					className: Object(F.a)($e.a.container, e.className)
				}, a.a.createElement("div", {
					className: $e.a.userInfo
				}, a.a.createElement(Me.b, {
					className: Object(F.a)($e.a.subreddtiIcon, Object(Ze.a)(e))
				}), a.a.createElement("div", {
					className: $e.a.titleContainer
				}, a.a.createElement("div", {
					className: Object(F.a)($e.a.title, Object(Ze.b)(e))
				}), a.a.createElement("div", {
					className: Object(F.a)($e.a.subtitle, Object(Ze.b)(e))
				}))), a.a.createElement("div", {
					className: $e.a.descriptionContainer
				}, a.a.createElement("div", {
					className: Object(F.a)($e.a.description, Object(Ze.b)(e))
				}), a.a.createElement("div", {
					className: Object(F.a)($e.a.description, Object(Ze.b)(e))
				})), a.a.createElement("div", {
					className: Object(F.a)($e.a.button, Object(Ze.b)(e))
				})),
				tt = s("./src/reddit/helpers/trackers/screenview.ts"),
				st = s("./src/reddit/selectors/searchResults.ts"),
				nt = s("./src/reddit/selectors/tracking.ts"),
				rt = s("./src/telemetry/index.ts"),
				ot = s("./src/telemetry/models/Timer.ts"),
				at = s("./src/reddit/components/SearchResultsContent/CommunitiesList/index.m.less"),
				it = s.n(at);
			const ct = 32,
				dt = 250,
				lt = Object(c.c)({
					apiError: st.d,
					apiPending: st.e,
					loadMore: st.f,
					viewportDataLoaded: nt.a
				}),
				mt = [d.Lb.Subreddits, d.Lb.Users];
			class pt extends a.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new ve.a(dt), this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.updateScrollerRef = e => {
						const t = e && Object(Ee.findDOMNode)(e);
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
					const n = rt.c.end(e);
					s(Object(tt.o)(e, t, ot.TimerType.InApp, n))
				}
				componentDidMount() {
					this.checkAndSendScreenview(), this.timerId && Object(rt.b)(d.l.Redesign, {
						type: "mount",
						component: "communitySearchResults",
						duration: rt.c.end(this.timerId)
					})
				}
				componentDidUpdate(e) {
					if (this.checkAndSendScreenview(), this.timerId && rt.c.has(this.timerId)) {
						const e = rt.c.end(this.timerId);
						if (e < 10) return;
						Object(rt.b)(d.l.Redesign, {
							duration: e,
							type: "mount",
							component: "communitySearchResults"
						})
					}
				}
				componentWillUpdate(e) {
					this.timerId && rt.c.cancel(this.timerId), e.identifiers.length && (this.timerId = rt.c.start()), (e.listingKey !== this.props.listingKey || !this.isListLongEnough() && e.identifiers.length !== this.props.identifiers.length) && (this.didRenderLastVisibleChild = !1)
				}
				componentWillUnmount() {
					this.timerId && rt.c.cancel(this.timerId), this.scrollerRef = void 0, this.didRenderLastVisibleChild = !1
				}
				scrollChildForItem(e, t) {
					const {
						listingKey: s,
						searchOptions: n,
						sendEvent: r
					} = this.props, o = Object.assign({}, n, {
						id: e.id,
						eventType: e.type
					}), i = "community-search-".concat(t, "-").concat(s), c = Pe(e, s, r, o);
					let d;
					if (void 0 === (d = this.scrollChildCache.get(i))) {
						const t = "community-search-item-[id:".concat(e.id, "]");
						d = {
							estHeight: ct,
							trackOnEnteredViewport: c,
							id: e.id,
							render: () => a.a.createElement(Ye, {
								className: it.a.separatedCommunity,
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
					return a.a.createElement("div", null, fe()(10, t => a.a.createElement(et, {
						className: it.a.communityPlaceholder,
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
					} = this.props, r = e.map((e, t) => this.scrollChildForItem(e, t));
					return a.a.createElement(Ce.b, {
						key: t,
						innerRef: this.updateScrollerRef,
						loadMoreToken: s && s.token ? s.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: n
					}, r)
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props, n = this.isListLongEnough();
					return rt.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (n || s)))
				}
			}
			var ut = Object(i.b)(lt, e => ({
					onLoadMore: () => e(Object(p.g)(mt))
				}))(Object(Te.b)(pt)),
				bt = s("./src/reddit/components/SearchResultsContent/Communities/index.m.less"),
				ht = s.n(bt);
			const {
				fbt: gt
			} = s("./node_modules/fbt/lib/FbtPublic.js"), xt = Object(Be.t)({
				pageLayer: e => e,
				queryParams: Be.Q
			}), yt = Object(c.c)({
				apiError: st.d,
				apiPending: st.e,
				identifiers: st.b,
				loadMore: st.f
			}), ft = 36, Ot = 5, vt = Object(i.b)(yt), Et = (e, t) => () => e(e => Object.assign({}, Object(Se.b)(e), {
				source: "search",
				action: "click",
				noun: "view_more_communities",
				correlationId: Object(je.c)(je.a.SearchResults),
				actionInfo: ke.actionInfo(e),
				search: ke.search(e, t)
			})), Ct = e => {
				const {
					loadMore: t,
					identifiers: s
				} = e;
				return Boolean(t && t.token) && s.length > 0
			};
			class jt extends a.a.Component {
				constructor() {
					super(...arguments), this.scrollChildCache = new ve.a(Ot)
				}
				scrollChildForItem(e, t) {
					const {
						listingKey: s,
						pageLayer: n,
						searchOptions: r,
						sendEvent: o
					} = this.props, i = Object.assign({}, r, {
						id: e.id,
						eventType: e.type
					}), c = Pe(e, s, o, r), d = "community-search-".concat(t, "-").concat(s);
					let l;
					return void 0 === (l = this.scrollChildCache.get(d)) && (l = {
						estHeight: ft,
						trackOnEnteredViewport: c,
						id: e.id,
						render: () => a.a.createElement(Ye, {
							className: ht.a.previewCommunityStyles,
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
						loadMore: r,
						preview: o,
						queryParams: i,
						searchOptions: c,
						sendEvent: d
					} = this.props;
					if (o) {
						let n;
						if (t || e) n = fe()(3, t => a.a.createElement(et, {
							className: ht.a.previewCommunityStyles,
							key: t,
							isLoading: !e
						}));
						else {
							let e = s.map((e, t) => this.scrollChildForItem(e, t));
							e = xe()(e, 3), n = a.a.createElement(Ce.b, null, e)
						}
						return a.a.createElement("div", {
							className: ht.a.container
						}, a.a.createElement("span", {
							className: ht.a.title
						}, gt._("Communities and users", null, {
							hk: "3edzgd"
						})), a.a.createElement("div", {
							className: ht.a.separator
						}), n, a.a.createElement(Fe.a, {
							className: ht.a.viewMore,
							onClick: Et(d, c),
							to: Object(Oe.a)("/search", Object.assign({}, i, {
								type: "sr,user"
							}))
						}, gt._("View more", null, {
							hk: "JKJPb"
						})))
					}
					return a.a.createElement("div", {
						className: ht.a.container
					}, !c.is_multi && a.a.createElement(ut, {
						identifiers: s,
						listingKey: n,
						searchOptions: c
					}), Ct({
						identifiers: s,
						loadMore: r
					}) && a.a.Children.toArray(fe()(3, he()(a.a.createElement(et, {
						className: ht.a.loadMoreItem,
						isLoading: !0
					})))))
				}
			}
			var St = xt(vt(Object(Te.b)(jt)));
			var kt = e => {
				return /\b(author|subreddit|flair|nsfw|self|selftext|site|url):[^\b]+/.test(e)
			};

			function _t() {
				return (_t = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var Pt = e => a.a.createElement("svg", _t({
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 6 50 43"
				}, e), a.a.createElement("path", {
					d: "M38.89 17.7a3.37 3.37 0 0 1-3-.49 17.79 17.79 0 0 0-7.63-2.81 17.34 17.34 0 0 0-4.26-.07 48.12 48.12 0 0 0-5.83 1.38 26.66 26.66 0 0 0-3.08 1.53 2.24 2.24 0 0 1-1.34.23c-4.27-1.06-7.54.28-10 4-2.09 3.17-.74 8 1.58 9.76a2.39 2.39 0 0 1 .91 1.53 12.18 12.18 0 0 0 5 8.87c.16.13.33.24.49.35a25.65 25.65 0 0 0 5.52 2.81A24 24 0 0 0 25.61 46c2.74-.09 5.49-.1 8.06-1.18a22.6 22.6 0 0 0 6.25-4c2.21-2.67 4.31-5.45 4.62-9a11.29 11.29 0 0 1 1.64-4.91 4.66 4.66 0 0 0 .54-1.58c.79-4.74-3.49-9.23-7.83-7.63z"
				}), a.a.createElement("path", {
					fill: "#fff",
					d: "M41.17 18.88a12.74 12.74 0 0 0-2.48 0c1.76 2.1 3.33 3.86 4 6.23-4-5.95-9.64-9.32-16.71-9.37A19.14 19.14 0 0 0 9 24.76c-.17-.53-.51-1-.38-1.3a9.3 9.3 0 0 1 4.18-4.51c-3-1.13-6.34.54-8 3.85-1.29 2.58-.52 6.08 1.74 7.5a18.14 18.14 0 0 1 .55-2.24 15.39 15.39 0 0 1 1-1.9.86.86 0 0 1 .07.69 12.41 12.41 0 0 0 .4 8.24 11.06 11.06 0 0 0 3.82 5.31c7.18 5.27 17.21 6.56 25.28.91a13.72 13.72 0 0 0 5.74-10.45c.1-1.13.1-2.26.15-3.4l.3.27c.44-.29 1.12-.49 1.3-.9a6.06 6.06 0 0 0-3.98-7.95z"
				}), a.a.createElement("path", {
					d: "M32 37c-2.43-2.06-9.28-2.47-11.58.17-.55.63-1.87.06-.9-.76 3.77-3.18 9.79-3.13 12.76-.43.79.73.3 1.53-.28 1.02zM19.83 24.64a4.94 4.94 0 0 0-4-.8h-.07l-.17.06a2.72 2.72 0 0 0-.9.42v.1c-1.42 1.15-2.26 3.53-1.09 5.16a2.38 2.38 0 0 0 1.82.9 10.49 10.49 0 0 0 2 0 6.32 6.32 0 0 0 2.53-.74c.81-.38 1.16-.67 1.2-1.51a5.3 5.3 0 0 0-1.32-3.59zM37.58 25.53a4.65 4.65 0 0 0-4.51-1.76.37.37 0 0 0-.15 0h-.06l-.29.06c-.14 0-.16.1-.12.16a3.83 3.83 0 0 0-1.08 5.22 2.24 2.24 0 0 0 1.84.93 10.6 10.6 0 0 1 2.55.48 2.4 2.4 0 0 0 1.2.08c.9-.11 1.26-1.56 1.36-2.31a4.18 4.18 0 0 0-.74-2.86z"
				}), a.a.createElement("path", {
					fill: "#ff4500",
					d: "M17.34 29.52a10 10 0 0 1-1 .12c-1 .09-1.46.05-1.76-.84a2.88 2.88 0 0 1 1.82-3.64l.31-.08a2.62 2.62 0 0 1 3.14 2.67c0 1.92-1.53 1.6-2.51 1.77zM37 28.88c-.29 1.13-1.17 1.09-2.1.82a3.83 3.83 0 0 0-1.06-.15 1.61 1.61 0 0 1-1.77-1.5 2.62 2.62 0 0 1 1.55-3.11A3 3 0 0 1 37 27.11a3.24 3.24 0 0 1 0 1.77z"
				}), a.a.createElement("path", {
					d: "M26.55 9.48a2.79 2.79 0 0 0-2.42-1.7c-3.48-.29-6.76 1.65-8.87 3.32l-.34-.23a3.23 3.23 0 0 0-1.06-.58l-.45-.1a2.06 2.06 0 0 0-1 .1 3 3 0 0 0-1.41.54s-.37.31-.46.41A4.09 4.09 0 0 0 9.52 15a3 3 0 0 0 2.37 2.09 4 4 0 0 0 .87.1 3.42 3.42 0 0 0 2.76-1.35 3.8 3.8 0 0 0 .61-3.12 2.92 2.92 0 0 0-.21-.63h.05l.15-.13A16.39 16.39 0 0 1 21 9.17c2-.72 3.55-.32 4.22 1a4.15 4.15 0 0 1-.42 3.93.37.37 0 0 0 0 .36c.14.27.57.34.79.34a.57.57 0 0 0 .51-.22 5.9 5.9 0 0 0 .45-5.1z"
				}), a.a.createElement("path", {
					fill: "#fff",
					d: "M10.82 13.06a2.9 2.9 0 0 1 2.4-1.66 1.79 1.79 0 0 1 .87.22 3.13 3.13 0 0 1 .2.3v.09a5.83 5.83 0 0 1 .53 1.38 2.58 2.58 0 0 1-.55 2 2.16 2.16 0 0 1-1.67 1 2.21 2.21 0 0 1-1.76-1.17 2.07 2.07 0 0 1-.02-2.16z"
				}), a.a.createElement("path", {
					fill: "#0079d3",
					d: "M14.53 29.43h-.05a3.3 3.3 0 0 0-3.27.77 1.49 1.49 0 0 0-.37 1.54c.19.53.93.65 1.4.73 1.34.21 3 .31 3.91-.84a1.46 1.46 0 0 0 .2-1.63c-.21-.43-1.4-.53-1.82-.57zM38.77 31.39c-.35-1-1.73-1.25-2.64-1.32H36a1.21 1.21 0 0 0-1.36 1.57c.08.39.83.8 1.15 1a4.16 4.16 0 0 0 1.62.42 1.41 1.41 0 0 0 1.24-.33 1.35 1.35 0 0 0 .12-1.34z"
				}), a.a.createElement("path", {
					fill: "#91cff6",
					d: "M13.26 32.13c-.66-.07-1.43-.15-1.52-.94-.13-1.06 1.26-1.64 2.08-1.4h.08a.57.57 0 0 0 .18 0c.66.06 1.42.17 1.45.94.04 1.27-1.39 1.49-2.27 1.4zM37.63 32.57c-.32.37-1.33-.25-1.59-.45a1 1 0 0 1-.46-.74c0-.18.17-1 .49-.88a.79.79 0 0 0 .41 0 1.6 1.6 0 0 1 1.27.71 1.16 1.16 0 0 1-.12 1.36z"
				})),
				wt = s("./src/reddit/components/SearchResultsContent/NoResults/index.m.less"),
				It = s.n(wt);
			const {
				fbt: Tt
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var Nt;
			! function(e) {
				e.Category = "category", e.Communities = "communities", e.Posts = "posts"
			}(Nt || (Nt = {}));
			var Lt = e => {
					if (kt(e.query)) return null;
					let t = Tt._("Sorry, there were no results for {=“ [search query] ”}", [Tt._param("=“ [search query] ”", a.a.createElement("span", {
						className: It.a.semiBold
					}, Tt._("“ {search query} ”", [Tt._param("search query", e.query)], {
						hk: "1VMw0P"
					})))], {
						hk: "4eAu8m"
					});
					return e.type === Nt.Category ? t = Tt._("Sorry, there were no results for the category {=“ [search query] ”}", [Tt._param("=“ [search query] ”", a.a.createElement("span", {
						className: It.a.semiBold
					}, Tt._("“ {search query} ”", [Tt._param("search query", e.query)], {
						hk: "2vXsw0"
					})))], {
						hk: "42nr3u"
					}) : e.type === Nt.Communities ? t = Tt._("Sorry, there were no community results for {=“ [search query] ”}", [Tt._param("=“ [search query] ”", a.a.createElement("span", {
						className: It.a.semiBold
					}, Tt._("“ {search query} ”", [Tt._param("search query", e.query)], {
						hk: "41Nh2l"
					})))], {
						hk: "ztoCJ"
					}) : e.type === Nt.Posts && (t = Tt._("Sorry, there were no post results for {=“ [search query] ”}", [Tt._param("=“ [search query] ”", a.a.createElement("span", {
						className: It.a.semiBold
					}, Tt._("“ {search query} ”", [Tt._param("search query", e.query)], {
						hk: "2n8mO1"
					})))], {
						hk: "3fsKtO"
					})), a.a.createElement("div", {
						className: It.a.noResults
					}, a.a.createElement(Pt, {
						className: It.a.icon
					}), a.a.createElement("div", {
						className: It.a.text
					}, t))
				},
				Mt = s("./src/reddit/components/PostList/index.tsx"),
				Rt = s("./src/reddit/components/ClassicPost/index.tsx"),
				Ft = s("./src/reddit/constants/postLayout.ts"),
				At = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				Bt = s("./src/reddit/helpers/trackers/post.ts"),
				Dt = s("./src/reddit/selectors/posts.ts"),
				Ut = s("./src/reddit/connectors/PostList/index.ts");
			const Vt = Object(Ut.c)(),
				Wt = Object(c.c)(Object.assign({}, Ut.d, {
					layout: () => Ft.g.Classic,
					viewportDataLoaded: nt.a,
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
								if (t > -1) return a.splice(t, 1), Object(Dt.Z)(e, a)
							}
							return Object(Dt.Z)(e, a)
						}
						const {
							models: i
						} = e.posts;
						return Object(Dt.I)(e, n, r, !!o).filter(e => i && i[e] && !i[e].isSponsored)
					}
				})),
				Ht = Object(i.b)(Wt, (e, t) => Object.assign({}, Object(Ut.b)(e, t), {
					trackOnPostEnteredViewport: e => {
						t.sendEvent(Object(Se.g)(t.listingKey, e, Object.assign({}, t.searchOptions, {
							id: e,
							eventType: "post"
						}), He(t)))
					}
				}), (e, t, s) => Object.assign({}, e, t, s, {
					openPost: e => t.openPost(e),
					postClickEvent: (e, t) => ("body" === t ? s.sendEvent(Object(Se.f)(s.listingKey, e, Object.assign({}, s.searchOptions, {
						id: e,
						eventType: "post"
					}), He(s))) : "subreddit" === t ? s.sendEvent(Object(Se.i)(Object.assign({}, s.searchOptions, {
						id: e,
						eventType: "subreddit"
					}), He(s))) : "comments" === t && function(e, t) {
						let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "post";
						e(e => Object.assign({}, Object(Se.b)(e, t), {
							action: "click",
							noun: s,
							source: "search_results"
						}))
					}(s.sendEvent, s.searchOptions, "comments"), Object(Bt.f)(e, t)),
					postComponentForLayout: e => {
						let {
							post: t
						} = e;
						return t.isBlank ? At.a : Rt.SearchResultsClassicPost
					}
				}));
			var qt = (e => Object(Te.b)(Vt(Ht(e))))(Mt.a),
				zt = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				Kt = s("./src/lib/lessComponent.tsx"),
				Jt = s("./node_modules/lodash/fromPairs.js"),
				Gt = s.n(Jt),
				Qt = s("./src/higherOrderComponents/asTooltip.tsx"),
				Yt = s("./src/lib/extractQueryParams/index.ts"),
				Zt = s("./src/reddit/controls/Dropdown/index.tsx"),
				Xt = s("./src/reddit/controls/Dropdown/Row.tsx"),
				$t = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				es = s("./src/reddit/components/SearchResultsSubNav/Select.m.less"),
				ts = s.n(es);

			function ss() {
				return (ss = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var ns = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const rs = Object(Qt.a)(Kt.a.wrapped(Zt.a, "Component", ts.a)),
				os = Kt.a.div("Title", ts.a),
				as = Kt.a.wrapped($t.b, "DropdownTriangle", ts.a),
				is = Kt.a.div("Wrapper", ts.a),
				cs = Kt.a.wrapped(e => {
					var {
						isOpen: t
					} = e, s = ns(e, ["isOpen"]);
					return a.a.createElement("div", ss({
						className: Object(F.a)(ts.a.ValueWrapper, {
							[ts.a.mIsOpen]: !!t
						})
					}, s))
				}, "ValueWrapper", ts.a),
				ds = Kt.a.wrapped(Xt.b, "SelectOption", ts.a),
				ls = (e, t, s, n) => () => e(e => Object.assign({}, Object(Se.b)(e), {
					source: "search",
					action: "click",
					noun: t,
					correlationId: Object(je.c)(je.a.SearchResults),
					actionInfo: ke.actionInfo(e),
					search: ke.search(e, ms(s, n))
				})),
				ms = (e, t) => {
					const s = Gt()([...Object(Yt.a)(e)]);
					return Object(d.Zb)(s.sort) && (t.sort = s.sort), Object(d.Zb)(s.t) && (t.t = s.t), t
				},
				ps = Object(c.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object($.b)(s)(e)
					}
				}),
				us = Object(i.b)(ps, (e, t) => ({
					onClose: () => e(Object(M.i)()),
					onOpen: () => e(Object(M.f)({
						tooltipId: t.tooltipId
					}))
				}), (e, t, s) => Object.assign({}, e, s, {
					onToggle: e.isOpen ? t.onClose : t.onOpen
				}));
			var bs = Object(Te.b)(us(e => a.a.createElement(is, {
					className: e.className,
					onClick: e.onToggle
				}, a.a.createElement(os, null, e.label), a.a.createElement(cs, {
					id: e.tooltipId
				}, e.optionLabels[e.value], a.a.createElement(as, null), a.a.createElement(rs, {
					isOpen: !!e.isOpen,
					tooltipId: e.tooltipId
				}, e.options.map(t => a.a.createElement(zt.a, {
					key: t,
					to: t,
					onClick: ls(e.sendEvent, "full_search_filter_changed", t, e.searchOptions)
				}, a.a.createElement(ds, {
					className: Object(F.a)({
						[ts.a.mIsSelected]: t === e.value
					}),
					displayText: e.optionLabels[t],
					isSelected: t === e.value
				})))))))),
				hs = s("./src/reddit/controls/Button/index.tsx"),
				gs = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				xs = s("./src/reddit/constants/page.ts"),
				ys = s("./src/reddit/constants/parameters.ts");
			s("./node_modules/core-js/modules/es6.regexp.replace.js");

			function fs(e, t) {
				let s = "/search",
					n = "",
					r = e && e[ys.o] || "";
				t ? (r = r.replace("flair:", "flair_name:"), s = "/r/".concat(t, "/search"), n = "1") : r = r.replace("flair_name:", "flair:");
				const o = Object(Oe.a)(s, {
					[ys.o]: r,
					[ys.p]: n
				});
				return Object(u.c)(o, r, {
					[ys.p]: n
				})
			}
			var Os = s("./src/reddit/layout/row/Inline/index.tsx"),
				vs = s("./src/reddit/components/SearchResultsSubNav/index.m.less"),
				Es = s.n(vs),
				Cs = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};
			const js = [d.Jb.Relevance, d.Jb.Top, d.Jb.New, d.Jb.Comments],
				Ss = {
					[d.Jb.Relevance]: () => Ne.fbt._("Relevance", null, {
						hk: "LvJkD"
					}),
					[d.Jb.Top]: () => Ne.fbt._("Top", null, {
						hk: "bijGV"
					}),
					[d.Jb.New]: () => Ne.fbt._("New", null, {
						hk: "23egpt"
					}),
					[d.Jb.Comments]: () => Ne.fbt._("Comments", null, {
						hk: "3s76RE"
					})
				},
				ks = [d.Qb.HOUR, d.Qb.DAY, d.Qb.WEEK, d.Qb.MONTH, d.Qb.YEAR, d.Qb.ALL],
				_s = {
					[d.Qb.HOUR]: () => Ne.fbt._("Past Hour", null, {
						hk: "4qCarL"
					}),
					[d.Qb.DAY]: () => Ne.fbt._("Past 24 Hours", null, {
						hk: "GI5qN"
					}),
					[d.Qb.WEEK]: () => Ne.fbt._("Past Week", null, {
						hk: "3jQHYQ"
					}),
					[d.Qb.MONTH]: () => Ne.fbt._("Past Month", null, {
						hk: "11eVJy"
					}),
					[d.Qb.YEAR]: () => Ne.fbt._("Past Year", null, {
						hk: "38MavC"
					}),
					[d.Qb.ALL]: () => Ne.fbt._("All Time", null, {
						hk: "2buTB7"
					})
				},
				Ps = Kt.a.wrapped(bs, "LeftSelect", Es.a),
				ws = Kt.a.wrapped(gs.a, "ArrowRight", Es.a),
				Is = Kt.a.wrapped(hs.n, "TertiaryButton", Es.a),
				Ts = Kt.a.wrapped(Is, "AllRedditResultsButton", Es.a),
				Ns = Object(Be.t)({
					queryParams: Be.Q,
					url: Be.U
				}),
				Ls = Object(c.c)({
					subreddit: T.y,
					shouldSeeNSFW: S.T
				}),
				Ms = Object(i.b)(Ls),
				Rs = e => {
					const t = e.queryParams && e.queryParams[ys.o] || "",
						s = Object(u.b)(t),
						n = e.queryParams && e.queryParams[ys.r],
						r = {};
					let o = Object(u.c)(e.url || "", s, {
						[ys.r]: d.Bb
					});
					const i = [];
					for (const a of js) {
						const t = Object(u.c)(e.url || "", s, {
							sort: a
						});
						r[t] = Ss[a](), i.push(t), n === a && (o = t)
					}
					return a.a.createElement(Ps, {
						label: Ne.fbt._("Sort By", null, {
							hk: "4Dbt40"
						}),
						options: i,
						optionLabels: r,
						tooltipId: "search-results-sort",
						value: o,
						searchOptions: e.searchOptions
					})
				},
				Fs = e => {
					const t = e.queryParams && e.queryParams[ys.o] || "",
						s = Object(u.b)(t),
						n = e.queryParams && e.queryParams[ys.t],
						r = {};
					let o = Object(u.c)(e.url || "", s, {
						[ys.t]: d.Cb
					});
					const i = [];
					for (const a of ks) {
						const t = Object(u.c)(e.url || "", s, {
							[ys.t]: a
						});
						r[t] = _s[a](), i.push(t), n === a && (o = t)
					}
					const c = e.tab === xs.g.Listings ? Ne.fbt._("Communities From", null, {
						hk: "1oVrVu"
					}) : Ne.fbt._("Posts From", null, {
						hk: "1abcgn"
					});
					return a.a.createElement(Ps, {
						label: c,
						options: i,
						optionLabels: r,
						tooltipId: "search-results-time",
						value: o,
						searchOptions: e.searchOptions
					})
				};
			class As extends a.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						this.props.sendEvent(e => Object.assign({}, Object(Se.b)(e, this.props.searchOptions), {
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
					return a.a.createElement(zt.a, {
						to: fs(e.queryParams)
					}, a.a.createElement(Ts, {
						onClick: this.onClick,
						"data-redditstyle": !0
					}, Ne.fbt._("All reddit results", null, {
						hk: "2IBCsX"
					}), a.a.createElement(ws, null)))
				}
			}
			var Bs = Kt.a.wrapped(Ns(Ms(Object(Te.b)(e => {
					var {
						className: t
					} = e, s = Cs(e, ["className"]);
					return a.a.createElement(Os.a, {
						className: t
					}, a.a.createElement(Rs, s), s.searchOptions && s.searchOptions.sort !== d.O.NEW && a.a.createElement(Fs, s), s.subreddit && !!s.searchOptions.restrict_sr && !s.shouldHideGlobalSearchLink && a.a.createElement(As, s))
				}))), "Component", Es.a),
				Ds = (s("./node_modules/core-js/modules/es6.regexp.search.js"), s("./node_modules/url/url.js")),
				Us = s.n(Ds),
				Vs = s("./src/reddit/components/ThemeProvider/index.tsx"),
				Ws = s("./src/reddit/components/SearchSwitcher/index.m.less"),
				Hs = s.n(Ws);
			const {
				fbt: qs
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class zs extends a.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const {
							searchOptions: e,
							sendEvent: t,
							subreddit: s
						} = this.props;
						t(Object(Se.n)(!!s, e))
					}
				}
				render() {
					const {
						subreddit: e,
						url: t
					} = this.props, s = {
						[Hs.a.mSr]: !!e
					}, {
						pathname: n,
						search: r
					} = Us.a.parse(t), o = e ? d.Kb.ToSubreddit : d.Kb.ToGlobal, i = e ? a.a.createElement(a.a.Fragment, null, a.a.createElement("span", null, qs._("Show results from", null, {
						hk: "3aVDvz"
					})), a.a.createElement(Me.b, {
						className: Hs.a.subredditIcon,
						subredditOrProfile: e
					}), a.a.createElement("p", {
						className: Object(F.a)(Hs.a.searchSwitcherText, s)
					}, e.displayText)) : a.a.createElement(a.a.Fragment, null, qs._("{=Show results from}{=all of Reddit}", [qs._param("=Show results from", a.a.createElement("span", null, qs._("Show results from", null, {
						hk: "4l8fSw"
					}))), qs._param("=all of Reddit", a.a.createElement("p", {
						className: Object(F.a)(Hs.a.searchSwitcherText, s)
					}, qs._("all of Reddit", null, {
						hk: "rc9dH"
					})))], {
						hk: "2NDUqb"
					}));
					return a.a.createElement(Fe.a, {
						className: Object(F.a)(Hs.a.searchSwitcher, s),
						onClick: this.onClick,
						to: {
							pathname: n,
							search: r,
							state: {
								searchSwitcherType: o
							}
						}
					}, i, a.a.createElement(gs.a, {
						className: Object(F.a)(Hs.a.arrowIcon, s)
					}))
				}
			}
			var Ks = Object(Te.b)(e => e.subreddit ? a.a.createElement(Vs.b, {
					subredditName: e.subreddit.name
				}, a.a.createElement(zs, e)) : a.a.createElement(zs, e)),
				Js = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/BestResults.m.less"),
				Gs = s.n(Js);
			const Qs = Kt.a.div("Spacer", Gs.a),
				Ys = () => null,
				Zs = Object(Be.t)({
					pageLayer: e => e,
					queryParams: Be.Q
				}),
				Xs = Object(c.c)({
					fromSubreddit: (e, t) => {
						const s = Ve(e, t);
						return s ? Object(T.y)(e, {
							subredditName: s
						}) : null
					},
					shouldShowGlobalSearchSwitcher: qe
				});
			var $s = Zs(Object(i.b)(Xs)(e => {
					const {
						hasCommunityResults: t,
						hasPostResults: s,
						fromSubreddit: n,
						listingKey: r,
						listingName: o,
						morePostsRequested: i,
						onViewed: c,
						postsDiscoveryUnit: d,
						searchOptions: l,
						shouldShowGlobalSearchSwitcher: m,
						subredditsDiscoveryUnit: p,
						tab: b,
						queryParams: h
					} = e, g = Object(u.a)(l[ys.b]), x = l.category, y = l.is_multi, f = !l.restrict_sr && !x && !g, O = d && x && g, v = p && x && g, E = t && !kt(l.q) && !l.category;
					return a.a.createElement(a.a.Fragment, null, m && n && a.a.createElement(Ks, {
						searchOptions: l,
						subreddit: n,
						url: fs(h, n.name)
					}), f && a.a.createElement(Qs, {
						key: "subNav"
					}, a.a.createElement(Bs, {
						searchOptions: l,
						subredditName: o,
						tab: b
					})), v && a.a.createElement(ue, {
						key: "subredditsDiscoveryUnit",
						categoryId: x,
						categoryName: g,
						discoveryUnit: p
					}), O && a.a.createElement(P, {
						key: "postsDiscoveryUnit",
						categoryId: x,
						category: g,
						discoveryUnit: d
					}), E ? a.a.createElement(Qs, {
						key: "communitiesPreview"
					}, a.a.createElement(St, {
						listingKey: r,
						preview: !0,
						searchOptions: l
					})) : !y && !x && a.a.createElement(Lt, {
						query: Object(u.a)(l.q || ""),
						type: Nt.Communities
					}), s ? a.a.createElement(qt, {
						key: "posts",
						listingKey: r,
						listingName: o,
						listingViewed: c,
						inSubredditOrProfile: !1,
						noPostsComponent: Ys,
						onLoadMore: i,
						searchOptions: l
					}) : a.a.createElement(Lt, {
						query: Object(u.a)(l.q || ""),
						type: x ? void 0 : Nt.Posts
					}))
				})),
				en = e => {
					const {
						hasCommunityResults: t,
						listingKey: s,
						listingName: n,
						searchOptions: r,
						tab: o
					} = e, i = !r.is_multi && !r.category;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(Bs, {
						key: "subNav",
						searchOptions: r,
						subredditName: n,
						tab: o
					}), t && !kt(r.q) ? a.a.createElement(St, {
						key: "communitiesPreview",
						listingKey: s,
						searchOptions: r
					}) : !i && a.a.createElement(Lt, {
						query: Object(u.a)(r.q || ""),
						type: Nt.Communities
					}))
				};
			const tn = () => null,
				sn = Object(Be.t)({
					pageLayer: e => e,
					queryParams: Be.Q
				}),
				nn = Object(c.c)({
					shouldShowSrSearchSwitcher: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(Be.J)(s)
					}
				});
			var rn = sn(Object(i.b)(nn)(e => {
					const {
						hasPostResults: t,
						listingKey: s,
						listingName: n,
						location: r,
						morePostsRequested: o,
						onViewed: i,
						searchOptions: c,
						shouldShowSrSearchSwitcher: d,
						tab: l,
						queryParams: m
					} = e, p = Object(u.a)(c[ys.b]), b = c.category, h = !b && !p;
					return a.a.createElement(a.a.Fragment, null, d && a.a.createElement(Ks, {
						searchOptions: c,
						url: fs(m)
					}), h && a.a.createElement(Bs, {
						key: "subNav",
						searchOptions: c,
						shouldHideGlobalSearchLink: d,
						subredditName: n,
						tab: l
					}), t ? a.a.createElement(qt, {
						key: "posts",
						listingKey: s,
						listingName: n,
						listingViewed: i,
						location: r,
						inSubredditOrProfile: !1,
						noPostsComponent: tn,
						onLoadMore: o,
						searchOptions: c
					}) : a.a.createElement(Lt, {
						query: p,
						type: b && p ? Nt.Category : Nt.Posts
					}))
				})),
				on = s("./src/config.ts"),
				an = s("./src/lib/intersectionObserver/index.ts"),
				cn = s("./src/lib/isUrl/index.ts"),
				dn = s("./src/lib/objectSelector/index.ts"),
				ln = s("./src/lib/opener/index.ts"),
				mn = s("./src/reddit/actions/post.ts"),
				pn = s("./src/reddit/components/BlankPost/index.tsx"),
				un = s("./src/reddit/components/Media/index.tsx"),
				bn = s("./src/reddit/components/PostContainer/index.tsx"),
				hn = s("./src/reddit/components/Thumbnail/index.tsx"),
				gn = s("./src/reddit/connectors/PostViewable/index.ts"),
				xn = s("./src/reddit/constants/adEvents.ts"),
				yn = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				fn = s("./src/reddit/helpers/overlay/index.ts"),
				On = s("./src/reddit/models/Media/index.ts"),
				vn = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				En = s("./src/reddit/components/PostTitle/index.tsx"),
				Cn = s("./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx"),
				jn = s("./src/reddit/components/RichTextJson/index.tsx"),
				Sn = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				kn = s("./src/reddit/components/SearchDiscoveryUnits/HeroUnit/CommentMeta.m.less"),
				_n = s.n(kn),
				Pn = e => a.a.createElement(Os.a, {
					className: Object(F.a)(_n.a.commentMeta, e.className)
				}, a.a.createElement(Os.a, {
					className: _n.a.postedInfo
				}, a.a.createElement(Sn.a, {
					collapsedBecauseCrowdControl: !1,
					collapsed: !1,
					comment: e.comment,
					flair: e.flair,
					language: e.language,
					renderedInOverlay: !1
				}))),
				wn = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				In = s("./src/reddit/selectors/comments.ts"),
				Tn = s("./src/reddit/components/SearchDiscoveryUnits/HeroUnit/UnthreadedComment.m.less"),
				Nn = s.n(Tn);
			const Ln = Object(c.c)({
					comment: (e, t) => Object(In.n)(e, t),
					flair: In.e,
					language: S.O,
					subreddit: T.G
				}),
				Mn = Object(i.b)(Ln),
				Rn = Object(dn.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			var Fn = Mn(e => {
					const {
						className: t,
						comment: s,
						flair: n,
						language: r,
						subreddit: o
					} = e;
					return a.a.createElement(Cn.a, {
						className: Object(F.a)(Nn.a.container, t),
						clickTrackingId: s.id,
						permalink: s.permalink
					}, a.a.createElement("div", null, a.a.createElement(Pn, {
						comment: s,
						flair: n,
						language: r,
						subredditName: o ? o.displayText : null
					}), a.a.createElement("div", {
						className: Nn.a.commentContentWrapper
					}, a.a.createElement("div", {
						className: Nn.a.commentBody
					}, a.a.createElement(jn.a, {
						content: Object(wn.a)(s),
						rtJsonElementProps: Rn(e)
					})))))
				}),
				An = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				Bn = s("./src/lib/timeAgo/index.ts"),
				Dn = s("./src/reddit/components/PostBadges/index.tsx"),
				Un = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				Vn = s("./src/reddit/controls/MetaData/index.tsx"),
				Wn = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				Hn = s("./src/reddit/helpers/name/index.ts"),
				qn = s("./src/reddit/components/SearchDiscoveryUnits/index.m.less"),
				zn = s.n(qn),
				Kn = e => {
					const {
						className: t,
						language: s,
						post: n,
						subredditOrProfile: r
					} = e, {
						isSponsored: o,
						author: i
					} = n;
					return a.a.createElement("div", {
						className: Object(F.a)(t, zn.a.metadataContainer)
					}, !o && r && a.a.createElement(a.a.Fragment, null, a.a.createElement(Me.b, {
						className: zn.a.postIcon,
						subredditOrProfile: r
					}), a.a.createElement(Un.a, {
						"data-click-id": "subreddit",
						to: r.url
					}, r.displayText)), o && a.a.createElement(a.a.Fragment, null, a.a.createElement(Me.b, {
						className: zn.a.postIcon,
						subredditOrProfile: r
					}), Object(Hn.c)(i)), a.a.createElement(vn.e, {
						post: n
					}), a.a.createElement(Wn.b, {
						className: zn.a.metaSeparator
					}), Object(Bn.d)(s, n.created / 1e3), !o && a.a.createElement(a.a.Fragment, null, a.a.createElement(Wn.b, {
						className: zn.a.metaSeparator
					}), a.a.createElement(Vn.b, {
						isScoreHidden: n.isScoreHidden,
						language: s,
						score: n.score
					})), o && r && a.a.createElement(Dn.a, {
						className: zn.a.postBadges,
						displayText: r.displayText,
						inSubredditOrProfile: !1,
						language: s,
						post: n
					}))
				},
				Jn = s("./src/reddit/components/ClassicPost/index.m.less"),
				Gn = s.n(Jn),
				Qn = s("./src/reddit/components/SearchDiscoveryUnits/HeroUnit/index.m.less"),
				Yn = s.n(Qn);
			const {
				fbt: Zn
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var Xn = e => {
					let {
						language: t,
						mainContent: s,
						post: n,
						previewText: r,
						searchDiscoveryUnit: o,
						subredditOrProfile: i
					} = e;
					const c = {
						inSubredditOrProfile: !0,
						language: t,
						post: n,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: i
					};
					return a.a.createElement("div", {
						className: Gn.a.mainBody,
						"data-click-id": "body"
					}, s, a.a.createElement("div", {
						className: Yn.a.innerContainer
					}, a.a.createElement(Kn, c), a.a.createElement(En.c, {
						className: Yn.a.postTitle,
						isOverlay: !1,
						post: n,
						size: En.b.Medium
					}), r, a.a.createElement("div", {
						className: Yn.a.numComments
					}, a.a.createElement(An.a, {
						className: Object(F.a)(Yn.a.icon, Yn.a.commentIcon)
					}), Zn._({
						"*": "{Comments count} Comments",
						_1: "1 Comment"
					}, [Zn._plural(n.numComments, "Comments count")], {
						hk: "1EFnt0"
					})), a.a.createElement(vn.d, {
						postId: n.id
					}), a.a.createElement("div", {
						className: Yn.a.commentWrapper
					}, o.commentOrder && o.commentOrder.map(e => a.a.createElement(Fn, {
						commentId: e,
						key: e
					}))), a.a.createElement("div", {
						className: Yn.a.seeFullPost
					}, Zn._("See full post", null, {
						hk: "SntP8"
					}), a.a.createElement(gs.a, {
						className: Yn.a.arrowIcon
					}))))
				},
				$n = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				er = s("./src/reddit/components/CallToActionButton/index.tsx"),
				tr = s("./src/reddit/controls/OutboundLink/index.tsx"),
				sr = s("./src/reddit/components/SearchDiscoveryUnits/HeroUnit/PromotedHeroUnit/index.m.less"),
				nr = s.n(sr);
			var rr = e => {
				let {
					header: t,
					language: s,
					mainContent: n,
					post: r,
					subredditOrProfile: o
				} = e;
				const i = {
					inSubredditOrProfile: !0,
					language: s,
					post: r,
					shouldShowSubscribeButton: !1,
					subredditOrProfile: o
				};
				return a.a.createElement("div", {
					className: Object(F.a)(Gn.a.mainBody, Gn.a.promotedMainBody),
					"data-click-id": "body"
				}, n, a.a.createElement("div", {
					className: nr.a.innerContainer
				}, a.a.createElement(Kn, i), a.a.createElement(En.c, {
					className: nr.a.postTitle,
					isOverlay: !1,
					post: r,
					size: En.b.Large
				}), !(!r.source || !r.source.url) && a.a.createElement($n.a, {
					className: nr.a.adLinkWrapper
				}, a.a.createElement(tr.a, {
					className: nr.a.outboundLink,
					href: r.source.url.replace(on.a.redditUrl, ""),
					isSponsored: r.isSponsored,
					source: r.source
				}, r.source.displayText), r.callToAction && a.a.createElement(er.a, {
					className: nr.a.callToAction,
					href: r.source.url.replace(on.a.redditUrl, ""),
					isSponsored: r.isSponsored,
					source: r.source
				}, r.callToAction)), a.a.createElement(vn.d, {
					postId: r.id
				})), a.a.createElement("hr", null), t)
			};
			const {
				fbt: or
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ar = "".concat(on.a.assetPath, "/img/link-placeholder.png"), ir = (e, t) => t && t.length ? Object(Dt.M)(e, {
				postId: t[0]
			}) : void 0, cr = {
				fireAdPixelsOfType: mn.y,
				openLightbox: e => Object(fn.a)(e.permalink)
			};
			class dr extends a.a.Component {
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
						t && (this.props.sendEvent(Object(Se.j)(t.id, "search_result_post", this.props.searchOptions, this.props.searchDiscoveryUnit)), t.isSponsored ? (this.props.fireAdPixelsOfType(t, xn.a.Click), t.source ? t.source.outboundUrl ? Object(ln.d)(t.source.outboundUrl, ln.c.BLANK) : Object(ln.d)(t.source.url, ln.c.BLANK) : Object(ln.d)(t.permalink, ln.c.BLANK)) : this.props.openLightbox(t))
					}
				}
				componentDidMount() {
					this.ref && an.a(this.ref, (e, t) => {
						this.scrollerItemRef && (t ? this.scrollerItemRef.focusContent() : this.scrollerItemRef.pauseContent())
					}), Object(Se.d)(this.props.listingKey, this.props.searchOptions, this.props.searchDiscoveryUnit)
				}
				componentWillUnmount() {
					this.ref && an.b(this.ref), this.scrollerItemRef && this.scrollerItemRef.stopContent(), this.ref = null, this.scrollerItemRef = null
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
						return !!s && (s.type === On.n.VIDEO || s.type === On.n.GIFVIDEO)
					}
					return !1
				}
				render() {
					const {
						pixelPostHasEnteredView: e,
						pixelPostHasExitedView: t,
						autoplayPref: s,
						crosspostRoot: n,
						eventFactory: r,
						language: o,
						post: i,
						onPostViewable: c,
						searchDiscoveryUnit: d,
						subredditOrProfile: l
					} = this.props;
					if (!i) return null;
					if (i.isBlank) return a.a.createElement(pn.BlankPost, {
						pixelPostHasEnteredView: e,
						pixelPostHasExitedView: t,
						onPostViewable: c,
						post: i
					});
					const {
						media: m
					} = n || i, p = i.isSponsored ? nr.a : Yn.a, u = i.isSponsored ? rr : Xn, b = m && a.a.createElement("div", {
						onClickCapture: e => this.onClickMedia(e),
						ref: this.setRef
					}, a.a.createElement(un.a, {
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
					let h = a.a.createElement("div", {
						className: p.flexSpacer
					});
					const g = !!i.source && Object(cn.a)(i.source.url) || !!i.thumbnail && Object(cn.a)(i.thumbnail.url);
					let x;
					if (!m && g) h = a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: p.mediaWrapper
					}, a.a.createElement(hn.a, {
						className: p.thumbnail,
						post: i,
						templatePlaceholderImage: ar,
						usePreview: !0
					})));
					else if (m && b)
						if (m.type !== On.n.RTJSON && m.type !== On.n.TEXT) h = a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
							className: p.mediaWrapper
						}, b));
						else {
							h = a.a.createElement("div", {
								className: p.mediaPlaceholder
							}), (m.type === On.n.RTJSON && m.richtextContent || m.type === On.n.TEXT && m.content) && Object(yn.a)(i) && (x = a.a.createElement("div", {
								className: p.textMediaWrapper,
								onClickCapture: e => this.onClickPost(e)
							}, a.a.createElement(un.a, {
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
							}), a.a.createElement("div", {
								className: p.seeMore
							}, "...", or._("More", null, {
								hk: "362mDE"
							}))))
						} const f = a.a.createElement(O.a, {
						className: p.header
					}, i.isSponsored ? or._("Promoted", null, {
						hk: "2QTd86"
					}) : or._("Top Post", null, {
						hk: "R69MV"
					}));
					return a.a.createElement(bn.a, {
						className: p.container,
						eventFactory: r,
						onClick: e => this.onClickPost(e),
						post: i
					}, a.a.createElement(y.a, {
						className: p.layout,
						headerClassName: Object(F.a)({
							[p.layoutHeader]: i.isSponsored
						}),
						bodyClassName: Object(F.a)({
							[p.layoutBody]: i.isSponsored
						}),
						header: i.isSponsored ? null : f
					}, a.a.createElement(u, {
						header: f,
						language: o,
						mainContent: h,
						post: i,
						previewText: x,
						searchDiscoveryUnit: d,
						subredditOrProfile: l
					})))
				}
			}
			var lr = Object(gn.a)(() => Object(c.c)({
					autoplayPref: S.b,
					crosspostRoot: (e, t) => {
						const s = ir(e, t.searchDiscoveryUnit.postOrder);
						if (s) return Object(Dt.c)(e, {
							postId: s.id
						})
					},
					language: S.O,
					post: (e, t) => ir(e, t.searchDiscoveryUnit.postOrder),
					subredditOrProfile: Object(dn.a)((e, t) => {
						const s = ir(e, t.searchDiscoveryUnit.postOrder);
						if (s) return Object(T.J)(e, {
							identifier: s.belongsTo
						})
					})
				}), cr)(Object(Te.b)(dr)),
				mr = s("./src/reddit/models/SearchDiscoveryUnit/index.ts"),
				pr = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/index.m.less"),
				ur = s.n(pr);
			const br = () => null;
			var hr = e => {
					const {
						listingKey: t,
						listingName: s,
						location: n,
						morePostsRequested: r,
						onViewed: o,
						searchDiscoveryUnitsModels: i,
						searchDiscoveryUnitsOrder: c,
						searchOptions: d
					} = e, l = (e => {
						for (const t in e) {
							const s = e[t];
							if (s.layout.viewTypeWeb === mr.b.Hero) return s.postOrder[0]
						}
					})(i);
					return a.a.createElement(a.a.Fragment, null, c.map(e => {
						if (i[e]) return ((e, i) => {
							const {
								viewTypeWeb: c
							} = e.layout, {
								Carousel: l,
								Hero: m,
								PromotedTrendHero: p,
								Row: u
							} = mr.b;
							switch (e.type) {
								case mr.a.Posts:
									if (c === l) return a.a.createElement(P, {
										heroPostId: i,
										listingKey: t,
										key: "postsDiscoveryUnit",
										searchDiscoveryUnit: e,
										searchOptions: d
									});
									if (c === m || c === p) return a.a.createElement(lr, {
										key: "heroUnit",
										searchDiscoveryUnit: e,
										searchOptions: d,
										listingKey: t
									});
									if (c === u) return a.a.createElement(qt, {
										className: ur.a.postList,
										disablePlaceholder: !0,
										heroPostId: i,
										key: "posts",
										listingKey: t,
										listingName: s,
										listingViewed: o,
										location: n,
										inSubredditOrProfile: !1,
										noPostsComponent: br,
										onLoadMore: r,
										searchOptions: d,
										postOrder: e.postOrder
									});
									break;
								case mr.a.Communities:
									if (c === l) return a.a.createElement(ue, {
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
				gr = s("./src/reddit/models/DiscoveryUnit/index.ts");
			const xr = {
					unitName: gr.g
				},
				yr = {
					unitName: gr.h
				},
				fr = Object(c.c)({
					hasCommunityResults: (e, t) => !!Object(st.e)(e, t) || !Object(st.d)(e, t) && Object(st.b)(e, t).length > 0,
					hasPostResults: (e, t) => !!Object(st.e)(e, t) || !Object(st.d)(e, t) && Object(Dt.S)(e, t).length > 0,
					postsDiscoveryUnit: e => Object(E.c)(e, xr),
					subredditsDiscoveryUnit: e => Object(E.c)(e, yr),
					searchDiscoveryUnitsModels: e => {
						const t = e.listings.activeKey,
							s = e.searchDiscoveryUnits.models[t];
						return s || {}
					},
					searchDiscoveryUnitsOrder: e => {
						const t = e.listings.activeKey,
							s = e.searchDiscoveryUnits.order[t];
						return s || j
					},
					viewTreatment: st.h
				}),
				Or = Object(i.b)(fr, e => ({
					morePostsRequested: () => e(p.g([d.Lb.Posts]))
				}));
			class vr extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onViewed = (e, t) => Object(tt.o)(this.props.listingKey, this.props.searchOptions, t, e, He(this.props))
				}
				render() {
					const {
						hasCommunityResults: e,
						hasPostResults: t,
						listingKey: s,
						listingName: n,
						location: r,
						morePostsRequested: o,
						postsDiscoveryUnit: i,
						searchDiscoveryUnitsModels: c,
						searchDiscoveryUnitsOrder: d,
						searchOptions: l,
						subredditsDiscoveryUnit: m,
						tab: p,
						viewTreatment: u
					} = this.props;
					switch (p) {
						case xs.g.Posts:
							return a.a.createElement(rn, {
								hasPostResults: t,
								listingKey: s,
								listingName: n,
								location: r,
								morePostsRequested: o,
								onViewed: this.onViewed,
								searchOptions: l,
								tab: p
							});
						case xs.g.Listings:
							return a.a.createElement(en, {
								hasCommunityResults: e,
								listingKey: s,
								listingName: n,
								searchOptions: l,
								tab: p
							});
						case xs.g.Top:
						default: {
							const b = u === mr.c.Trending;
							return a.a.createElement(a.a.Fragment, null, b ? a.a.createElement(hr, {
								listingKey: s,
								listingName: n,
								location: r,
								morePostsRequested: o,
								onViewed: this.onViewed,
								searchDiscoveryUnitsModels: c,
								searchDiscoveryUnitsOrder: d,
								searchOptions: l
							}) : a.a.createElement($s, {
								hasCommunityResults: e,
								hasPostResults: t,
								listingKey: s,
								listingName: n,
								morePostsRequested: o,
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
			var Er = Object(Be.t)()(Or(vr)),
				Cr = (s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/history/esm/history.js")),
				jr = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				Sr = s("./src/reddit/components/MoreCommunitiesIcon/index.m.less"),
				kr = s.n(Sr);
			const _r = Kt.a.wrapped(Fe.a, "InternalLink", kr.a),
				Pr = e => {
					let {
						currentPageUrl: t,
						numCommunities: s,
						searchQuery: n
					} = e;
					return a.a.createElement(_r, {
						className: kr.a.moreCommunities,
						to: t ? Object(u.c)(t, n, {
							type: [d.Lb.Subreddits, d.Lb.Users].join(",")
						}) : "#"
					}, a.a.createElement("span", {
						className: kr.a.numCommunities
					}, s))
				};
			var wr = s("./src/reddit/components/ShareMenu/index.tsx"),
				Ir = s("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				Tr = s("./src/reddit/i18n/components.tsx"),
				Nr = s("./src/reddit/icons/fonts/Share/index.tsx"),
				Lr = s("./src/reddit/icons/svgs/Plus/index.tsx");
			const Mr = 5,
				Rr = [];
			class Fr extends a.a.Component {
				constructor(e) {
					super(e), this.onFollow = () => {
						this.props.sendEvent(Object(Se.c)("trending_header", this.state.isFollowed ? "unfollow" : "follow", this.props.searchOptions)), this.setState({
							isFollowed: !this.state.isFollowed
						})
					}, this.onShare = () => {
						this.props.sendEvent(Object(Se.c)("trending_header", "share", this.props.searchOptions))
					}, this.onShareMenuClick = e => {
						this.props.sendEvent(Object(Se.o)(e, this.props.searchOptions))
					}, this.state = {
						isFollowed: !1
					}
				}
				render() {
					const {
						currentPageUrl: e,
						headerContent: t,
						isCategorySearch: s,
						isInFollowExperiment: n,
						isSubreddit: r,
						isTrendingSearch: o,
						searchOptions: i,
						searchQuery: c,
						suffix: d
					} = this.props, l = t && !r && t.subredditIcons ? t.subredditIcons.length <= Mr ? t.subredditIcons : t.subredditIcons.slice(0, Mr - 1) : Rr, m = Object(u.a)(c).replace("flair_name:", "flair:").replace('"', "").replace('"', ""), p = t && t.subredditIcons.length > Mr && a.a.createElement(Pr, {
						currentPageUrl: e,
						searchQuery: c,
						numCommunities: t.subredditIcons.length ? t.subredditIcons.length - Mr + 1 : 0
					});
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("span", {
						className: zn.a.bold
					}, s ? i[ys.b] : m), a.a.createElement("p", {
						className: zn.a.metaData
					}, d), a.a.createElement("div", {
						className: zn.a.metaDataContainer
					}, a.a.createElement(Ir.a, {
						className: zn.a.metaData,
						isHeaderContent: !0,
						subredditIcons: l,
						suffix: p
					}), o && n && (this.state.isFollowed ? a.a.createElement(hs.i, {
						className: zn.a.follow,
						onClick: this.onFollow
					}, a.a.createElement(Tr.c, null, "Unfollow")) : a.a.createElement(hs.f, {
						className: zn.a.follow,
						onClick: this.onFollow
					}, a.a.createElement(Lr.a, {
						className: zn.a.icon
					}), a.a.createElement(Tr.c, null, "Follow"))), o && !n && e && a.a.createElement(wr.a, {
						dropdownId: "rails-share-button",
						permalink: e,
						sendEventWithName: this.onShareMenuClick,
						subreddit: null
					}, a.a.createElement(hs.n, {
						className: zn.a.share,
						"data-click-id": "share",
						onClick: this.onShare
					}, a.a.createElement(Nr.a, {
						className: zn.a.icon
					}), a.a.createElement(Tr.c, null, "share")))))
				}
			}
			var Ar = Fr,
				Br = s("./src/reddit/components/TabNav/index.tsx"),
				Dr = s("./src/reddit/components/SearchResultsNav/index.m.less"),
				Ur = s.n(Dr);
			class Vr extends a.a.Component {
				constructor() {
					super(...arguments), this.sendTopTabClickEvent = () => {
						this.props.tab === xs.g.Top && this.props.sendEvent(Object(Se.e)(Se.a.TopResults, this.props.searchOptions))
					}, this.sendPostsTabClickEvent = () => {
						this.props.tab === xs.g.Posts && this.props.sendEvent(Object(Se.e)(Se.a.Posts, this.props.searchOptions))
					}, this.sendCommunitiesTabClickEvent = () => {
						this.props.tab === xs.g.Listings && this.props.sendEvent(Object(Se.e)(Se.a.CommunitiesAndUsers, this.props.searchOptions))
					}
				}
				render() {
					const {
						currentPageUrl: e,
						headerContent: t,
						isInFollowExperiment: s,
						location: n,
						searchOptions: r,
						sendEvent: o,
						subreddit: i,
						tab: c,
						viewTreatment: l
					} = this.props, m = r[ys.b] || (t ? t.searchQuery || "" : r.q || ""), p = !(!i || !r.restrict_sr), b = !!r[ys.b], h = l === mr.c.Trending, g = Object(Cr.e)(n);
					let x = Ne.fbt._("Search results", null, {
						hk: "1N3gsY"
					});
					m && (p ? x = i.icon && i.icon.url ? a.a.createElement("span", null, Ne.fbt._("Search results in {subreddit name}", [Ne.fbt._param("subreddit name", a.a.createElement(jr.a, {
						subredditName: i.name
					}, a.a.createElement(Fe.a, {
						to: "/r/".concat(i.name, "/")
					}, a.a.createElement(Me.b, {
						className: Ur.a.icon,
						key: i.icon.url,
						iconUrl: i.icon.url
					}), a.a.createElement("span", {
						className: Ur.a.subredditName
					}, i.displayText))))], {
						hk: "JrpKl"
					})) : Ne.fbt._("Search results in {subreddit name}", [Ne.fbt._param("subreddit name", i.displayText)], {
						hk: "JrpKl"
					}) : (b || h) && t && t.displayText && (x = Ne.fbt._("Topic • {topic name} and {num occurrences} more communities talking about this", [Ne.fbt._param("topic name", t.displayText), Ne.fbt._param("num occurrences", t.subredditOccurrences.toString())], {
						hk: "4hWnTn"
					})));
					const y = a.a.createElement(Ar, {
						currentPageUrl: e,
						headerContent: h || b ? t : void 0,
						isInFollowExperiment: s,
						isSubreddit: p,
						isCategorySearch: b,
						isTrendingSearch: h,
						searchOptions: r,
						searchQuery: m,
						sendEvent: o,
						suffix: x
					});
					return a.a.createElement(Br.c, {
						title: y,
						isCategoryPage: !!r[ys.b]
					}, !p && a.a.createElement(a.a.Fragment, null, a.a.createElement(Br.a, {
						active: c === xs.g.Top,
						onClick: this.sendTopTabClickEvent,
						key: "top",
						to: Object(u.c)(g, m, {
							type: ""
						})
					}, Ne.fbt._("Best results", null, {
						hk: "40v7Dh"
					})), !kt(m) && a.a.createElement(Br.a, {
						active: c === xs.g.Posts,
						onClick: this.sendPostsTabClickEvent,
						key: "posts",
						to: Object(u.c)(g, m, {
							type: d.Lb.Posts
						})
					}, Ne.fbt._("Posts", null, {
						hk: "vNVpl"
					})), !kt(m) && !r.is_multi && a.a.createElement(Br.a, {
						active: c === xs.g.Listings,
						onClick: this.sendCommunitiesTabClickEvent,
						key: "listings",
						to: Object(u.c)(g, m, {
							type: [d.Lb.Subreddits, d.Lb.Users].join(",")
						})
					}, Ne.fbt._("Communities and users", null, {
						hk: "xcZ7c"
					}))))
				}
			}
			var Wr = Object(Te.b)(Vr),
				Hr = s("./src/reddit/components/CreateCommunityButton/index.tsx"),
				qr = s("./src/reddit/components/CreateCommunitySidebar/index.m.less"),
				zr = s.n(qr);
			const Kr = Kt.a.div("ButtonContainer", zr.a),
				Jr = Kt.a.div("Container", zr.a),
				Gr = Kt.a.img("BannerImg", zr.a),
				Qr = Kt.a.img("SnooImg", zr.a),
				Yr = Kt.a.div("CommunityText", zr.a);
			var Zr = Object(i.b)(() => Object(c.c)({
					language: S.O
				}))(e => a.a.createElement(Jr, null, a.a.createElement(Gr, {
					src: "".concat(on.a.assetPath, "/img/search-results-community-banner.png")
				}), a.a.createElement(Qr, {
					src: "".concat(on.a.assetPath, "/img/snoo-thinking.png")
				}), a.a.createElement(Yr, null, a.a.createElement(Tr.c, null, "Have an idea for a new community?")), a.a.createElement(Kr, null, a.a.createElement(Hr.a, {
					eventSource: "sidebar"
				})))),
				Xr = s("./src/reddit/components/IdCard/async.tsx"),
				$r = s("./src/reddit/components/SidebarContainer/index.tsx"),
				eo = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				to = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				so = s("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				no = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				ro = s("./src/reddit/i18n/utils.ts"),
				oo = s("./src/reddit/icons/svgs/Search/index.tsx"),
				ao = s("./src/reddit/components/Widgets/RelatedQueries/index.m.less"),
				io = s.n(ao);
			var co = Object(Te.b)(e => {
					const {
						className: t,
						relatedQueries: s,
						searchOptions: n,
						sendEvent: r
					} = e;
					return a.a.createElement(no.a, {
						className: t,
						title: Object(ro.c)("People also searched for")
					}, s.slice(0, 8).map(e => {
						r(Object(Se.k)("view", n));
						const t = Object.assign({}, n, {
							q: e.q
						});
						return a.a.createElement(Fe.a, {
							className: io.a.relatedQuery,
							key: e.q,
							onClick: e => r(Object(Se.k)("click", t)),
							to: Object(Oe.a)("/search", {
								q: e.q
							})
						}, a.a.createElement("li", {
							className: io.a.relatedQueryItem
						}, a.a.createElement(oo.a, {
							className: io.a.searchIcon
						}), e.q))
					}))
				}),
				lo = s("./src/reddit/selectors/widgets.ts");
			const mo = Object(c.c)({
				isLoggedIn: S.G,
				language: S.O,
				subredditId: (e, t) => {
					let {
						listingName: s
					} = t;
					return Object(T.D)(e, s)
				},
				postFlairWidgets: (e, t) => {
					let {
						listingName: s
					} = t;
					const n = Object(T.D)(e, s);
					return Object(lo.g)(e, {
						subredditId: n
					})
				},
				relatedQueries: (e, t) => {
					let {
						searchOptions: s
					} = t;
					return Object(st.g)(e, s.q)
				}
			});
			var po = Object(i.b)(mo)(e => a.a.createElement($r.a, {
					className: e.className
				}, e.subredditId && e.searchOptions.restrict_sr && a.a.createElement(Xr.a, {
					listingName: e.listingName
				}), !e.searchOptions.restrict_sr && e.isLoggedIn && a.a.createElement(Zr, null), e.subredditId && e.searchOptions.restrict_sr && e.postFlairWidgets && e.postFlairWidgets.map((t, s) => a.a.createElement(eo.a, {
					key: "widgetSpacer-".concat(s)
				}, a.a.createElement(so.a, {
					subredditName: e.listingName,
					widget: t
				}))), e.searchOptions.q && e.relatedQueries && e.relatedQueries.length > 0 && a.a.createElement(eo.a, {
					key: "widgetSpacer-relatedQueries"
				}, a.a.createElement(co, {
					searchOptions: e.searchOptions,
					relatedQueries: e.relatedQueries
				})), a.a.createElement(to.a, null))),
				uo = s("./src/reddit/layout/page/Listing/index.tsx"),
				bo = s("./src/reddit/constants/experiments.ts"),
				ho = s("./src/reddit/helpers/chooseVariant/index.ts");
			const go = e => bo.qb.Treatment1 === Object(ho.c)(e, {
				experimentEligibilitySelector: ho.a,
				experimentName: bo.pb
			});
			var xo = s("./src/reddit/selectors/meta.ts"),
				yo = s("./src/reddit/pages/SearchResults/index.m.less"),
				fo = s.n(yo);
			const Oo = Object(Be.t)({
					currentPageUrl: Be.e,
					queryParams: Be.Q
				}),
				vo = Object(i.b)(() => Object(c.c)({
					headerContent: st.a,
					isInFollowExperiment: go,
					origin: xo.h,
					subreddit: (e, t) => Object(T.y)(e, {
						subredditName: t.match.params.subredditName
					}),
					viewTreatment: st.h
				}));
			class Eo extends a.a.Component {
				componentDidMount() {
					Object(je.c)(je.a.SearchResults) || Object(je.d)(je.a.SearchResults)
				}
				componentWillUnmount() {
					Object(je.b)(je.a.SearchResults)
				}
				render() {
					const {
						currentPageUrl: e,
						headerContent: t,
						isInFollowExperiment: s,
						location: n,
						match: o,
						origin: i,
						queryParams: c,
						subreddit: p,
						viewTreatment: u
					} = this.props, b = o.params.subredditName || o.params.multiredditName || "", h = o.params.username, g = Object(l.c)(r()(c || {}, ys.q)), x = Object.assign({}, g, {
						sort: g.category ? d.Jb.Relevance : g.sort,
						t: g.category ? d.Qb.DAY : g.t
					}), y = Object(l.b)(b, h, x);
					let f;
					return f = p && g.restrict_sr || 1 === x.type.length && x.type[0] === d.Lb.Posts ? xs.g.Posts : x.type.length > 0 && -1 === x.type.indexOf(d.Lb.Posts) && (x.type.indexOf(d.Lb.Subreddits) > -1 || x.type.indexOf(d.Lb.Users) > -1) ? xs.g.Listings : xs.g.Top, a.a.createElement(uo.a, {
						className: this.props.className,
						navBar: a.a.Children.toArray([a.a.createElement(Wr, {
							currentPageUrl: "".concat(i).concat(e),
							headerContent: t,
							isInFollowExperiment: s,
							location: n,
							searchOptions: x,
							subreddit: p,
							tab: f,
							viewTreatment: u
						})]),
						content: a.a.createElement(a.a.Fragment, null, a.a.createElement(m.a, null), a.a.createElement(Er, {
							listingKey: y,
							listingName: b,
							location: n,
							searchOptions: x,
							tab: f
						})),
						sidebar: a.a.createElement(po, {
							className: fo.a.sidebar,
							listingKey: y,
							listingName: b || xs.b,
							searchOptions: x,
							tab: f
						})
					})
				}
			}
			t.default = Oo(vo(Eo))
		},
		"./src/reddit/selectors/experiments/publicAwarding.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				const t = Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: n.hb
				});
				return Object(n.Ob)(t) ? void 0 : t
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
//# sourceMappingURL=SearchResults.30b601e1717f603de7bf.js.map