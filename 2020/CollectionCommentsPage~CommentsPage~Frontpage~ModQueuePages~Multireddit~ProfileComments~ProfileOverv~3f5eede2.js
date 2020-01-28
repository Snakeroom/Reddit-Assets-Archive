// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~Multireddit~ProfileComments~ProfileOverv~3f5eede2.f246d69c93a2b17af0e0.js
// Retrieved at 1/28/2020, 6:50:14 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~Multireddit~ProfileComments~ProfileOverv~3f5eede2"], {
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./node_modules/bignumber.js/bignumber.js");

			function r(e, t) {
				const s = new o.BigNumber(e),
					r = new o.BigNumber(t),
					a = new o.BigNumber(s.dividedBy(r)),
					n = new o.BigNumber("100").multipliedBy(a);
				return new o.BigNumber(n).toNumber()
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
			var o = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
				r = s.n(o);
			const a = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", r.a);
			t.a = a
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
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				i = s("./src/reddit/components/CallToActionButton/index.m.less"),
				d = s.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (s[o[r]] = e[o[r]])
				}
				return s
			};
			t.a = e => {
				var {
					className: t
				} = e, s = l(e, ["className"]);
				return r.a.createElement(n.a, c({
					className: Object(a.a)(t, d.a.CallToActionButton, {
						[d.a.mNotCardView]: s.isNotCardView
					})
				}, s))
			}
		},
		"./src/reddit/components/ClassicPost/Placeholder.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return P
			}));
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/PostLeftRail/index.tsx"),
				c = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				p = s("./src/reddit/models/Vote/index.ts"),
				u = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				b = s.n(u),
				x = s("./src/reddit/components/ClassicPost/placeholder.m.less"),
				h = s.n(x);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const y = Object(l.t)(),
				O = Object(n.c)({
					isFakeSubreddit: l.y
				}),
				f = Object(a.b)(O),
				P = e => {
					const t = {
						interactive: !1,
						voteState: p.a.notVoted
					};
					return r.a.createElement("div", {
						className: Object(i.a)(e.className, h.a.emptyVerticalVotes)
					}, r.a.createElement(c.d, g({
						key: "u"
					}, t)), e.children, r.a.createElement(c.c, g({
						key: "d"
					}, t)))
				},
				E = () => r.a.createElement(P, null, r.a.createElement("div", {
					className: h.a.emptyScore,
					key: "s"
				}));
			t.b = y(f(e => r.a.createElement("div", {
				className: Object(i.a)(e.className, b.a.classicPostStyles, b.a.classicAndCompactPlaceholderStyles)
			}, r.a.createElement(d.b, null, r.a.createElement(E, null)), r.a.createElement("div", {
				className: h.a.mainBody
			}, r.a.createElement("div", {
				className: h.a.thumbnailContainer
			}, r.a.createElement("div", {
				className: Object(i.a)(h.a.thumbnail, Object(m.b)(e))
			})), r.a.createElement("div", {
				className: h.a.content
			}, r.a.createElement("div", {
				key: "a"
			}, r.a.createElement("div", {
				key: "aa",
				className: Object(i.a)(h.a.title, Object(m.b)(e))
			}), r.a.createElement("div", {
				key: "ab",
				className: Object(i.a)(h.a.meta, Object(m.b)(e))
			})), r.a.createElement("div", {
				key: "f",
				className: h.a.flatlist
			}, r.a.createElement("div", {
				key: "fa",
				className: Object(i.a)(h.a.flatlistExpando, Object(m.b)(e))
			}), r.a.createElement("div", {
				key: "fb",
				className: h.a.flatlistSeparator
			}), r.a.createElement("div", {
				key: "fc",
				className: Object(i.a)(h.a.flatListItemOne, Object(m.b)(e))
			}), r.a.createElement("div", {
				key: "fd",
				className: Object(i.a)(h.a.flatListItemTwo, Object(m.b)(e))
			})))))))
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/config.ts"),
				n = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/getShortenedLink.ts"),
				c = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				l = s("./src/reddit/components/CallToActionButton/index.tsx"),
				m = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				p = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				u = s("./src/reddit/components/ExpandoButton/index.tsx"),
				b = s("./src/reddit/components/Flatlist/index.tsx"),
				x = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				h = s("./src/reddit/components/ModModeReports/index.tsx"),
				g = s("./src/reddit/components/ModModeReports/helpers.ts"),
				y = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				O = s("./src/reddit/components/PostContainer/index.tsx"),
				f = s("./src/reddit/components/PostMedia/index.tsx"),
				P = s("./src/reddit/components/PostMeta/index.tsx"),
				E = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				v = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				j = s("./src/reddit/components/PostTitle/index.tsx"),
				C = s("./src/reddit/components/PostTopMeta/index.tsx"),
				S = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				k = s("./src/reddit/models/Media/index.ts"),
				N = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				_ = s("./node_modules/react-redux/es/index.js"),
				I = s("./node_modules/reselect/es/index.js"),
				M = s("./src/reddit/actions/post.ts"),
				w = s("./src/reddit/actions/tooltip.ts"),
				T = s("./src/reddit/models/Vote/index.ts"),
				L = s("./src/reddit/contexts/InsideOverlay.tsx"),
				R = s("./src/reddit/contexts/PageLayer/index.tsx"),
				F = s("./src/reddit/selectors/activeModalId.ts"),
				A = s("./src/reddit/selectors/experiments/chatPost.ts"),
				V = s("./src/reddit/selectors/experiments/m2mHomeRedirect.ts"),
				B = s("./src/reddit/selectors/moderatorPermissions.ts"),
				U = s("./src/reddit/selectors/monthsToMinutes.ts"),
				W = s("./src/reddit/selectors/postFlair.ts"),
				H = s("./src/reddit/selectors/posts.ts"),
				D = s("./src/reddit/selectors/user.ts");
			const K = {
					autoplayPref: D.b,
					activeModalId: F.a,
					crosspost: H.c,
					currentUser: D.i,
					isActive: H.g,
					isChatPostExperiment: A.d,
					isCurrentUserProfilePost: H.h,
					isExpanded: H.j,
					isFrontpageHome: U.g,
					isM2MHomeRedirectEnabled: V.c,
					isMeta: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(H.o)(e, s)
					},
					language: D.S,
					moderatorPermissions: B.i,
					modModeEnabled: R.O,
					post: H.I,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: W.a,
					showMedia: R.r,
					subredditOrProfile: H.U,
					userIsOp: D.jb,
					flairStyleTemplate: R.Q
				},
				Q = (e, t) => {
					let {
						listingKey: s,
						listingName: o,
						postId: r
					} = t;
					return {
						handleVote: t => {
							const s = t === T.a.upvoted ? Object(M.N)(r) : Object(M.o)(r);
							e(s)
						},
						onIgnoreReports: () => e(Object(M.L)(r)),
						onOpenReportsDropdown: t => e(Object(w.g)({
							tooltipId: t
						}))
					}
				},
				z = Object(_.b)(() => Object(I.c)(K), Q, (e, t, s) => Object.assign({}, e, t, s, {
					formatTitle: e => e.title
				}));
			s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./node_modules/core-js/modules/es6.regexp.constructor.js");
			var Z = s("./src/lib/LRUCache/index.ts");
			const X = Object(R.t)({
					searchQuery: R.U
				}),
				G = new Z.a(250),
				J = e => {
					const t = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const s = "".concat(e.id, "-").concat(t);
						let o = G.get(s);
						if (void 0 === o) {
							const a = new RegExp("(\\b".concat(t, "\\b)"), "gi"),
								n = e.title.split(a);
							for (let e = 1; e < n.length; e += 2) n[e] = r.a.createElement("em", {
								style: {
									fontWeight: 700
								}
							}, n[e]);
							o = r.a.createElement("span", {
								style: {
									fontWeight: "normal"
								}
							}, r.a.Children.toArray(n)), G.set(s, o)
						}
						return o
					}
				},
				Y = Object(_.b)(() => Object(I.c)(K), Q, (e, t, s) => Object.assign({}, e, t, s, {
					formatTitle: J(s.searchQuery || "")
				}));
			var q = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				$ = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				ee = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				te = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				se = s.n(te),
				oe = s("./src/reddit/components/ClassicPost/index.m.less"),
				re = s.n(oe);

			function ae() {
				return (ae = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "a", (function() {
				return me
			}));
			const ne = 16;
			class ie extends r.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						className: e,
						currentUser: t,
						handleVote: s,
						isExpanded: o,
						isMeta: i,
						inSubredditOrProfile: f,
						eventFactory: _,
						first: I,
						flairStyleTemplate: M,
						formatTitle: w,
						isCheckboxSelected: T,
						isCurrentUserProfilePost: L,
						isFrontpage: R,
						isFrontpageHome: F,
						isM2MHomeRedirectEnabled: A,
						isOverlay: V,
						language: B,
						moderatorPermissions: U,
						modModeEnabled: W,
						onClickPost: H,
						onIgnoreReports: D,
						onOpenReportsDropdown: K,
						poll: Q,
						post: z,
						redditStyle: Z,
						scrollerItemRef: X,
						showBulkActionCheckbox: G,
						showEditFlair: J,
						showMedia: Y,
						subredditOrProfile: te,
						toggleCheckbox: oe,
						userIsOp: ie
					} = this.props, ce = Z ? void 0 : M, le = this.props.crosspost || void 0, me = Object($.a)(U), pe = Object(q.a)(U), ue = W && $.a, be = !!z.media && z.media.type === k.n.RTJSON, xe = ie && be, he = f && !Y, ge = {
						flairStyleTemplate: ce,
						post: z,
						inSubredditOrProfile: f,
						isCurrentUserProfilePost: L,
						isOverlay: V,
						shouldShowSubscribeButton: !(R && F),
						subredditOrProfile: te,
						language: B
					}, ye = r.a.createElement(O.a, {
						className: Object(n.a)(se.a.classicPostStyles, re.a.postContainer, Object(ee.a)(this.props), I ? re.a.mFirst : void 0, e),
						isOverlay: V,
						style: Object.assign({}, Object(ee.d)(this.props), Object(ee.b)(this.props.flairStyleTemplate)),
						post: z,
						onClick: H,
						eventFactory: _
					}, r.a.createElement(v.a, {
						model: z,
						handleVote: s,
						showBulkActionCheckbox: G,
						isCheckboxSelected: T,
						toggleCheckbox: oe,
						flairStyleTemplate: ce,
						redditStyle: Z
					}), r.a.createElement(y.a, {
						"data-click-id": "background",
						flairStyleTemplate: ce
					}, r.a.createElement(p.a, {
						className: re.a.eventMeta,
						post: z,
						language: B
					}), r.a.createElement("div", {
						className: re.a.mainBody
					}, r.a.createElement("div", {
						className: he ? re.a.expandoContainer : re.a.thumbnailContainer
					}, !he && r.a.createElement(N.a, {
						className: re.a.classicThumbnail,
						crosspost: le && z,
						isMeta: i,
						post: le || z,
						redditStyle: Z,
						templatePlaceholderImage: ce && ce.postPlaceholderImage
					}), r.a.createElement(u.a, {
						crosspost: le,
						className: re.a.rightExpando,
						isExpanded: !!o,
						post: z,
						useMediaIcons: !1
					})), r.a.createElement("div", {
						className: re.a.content,
						"data-click-id": "body",
						style: {
							paddingBottom: "".concat(ne, "px")
						}
					}, r.a.createElement(j.c, {
						className: Q ? re.a.titleWithPoll : void 0,
						format: w,
						poll: Q,
						post: z,
						redditStyle: Z,
						size: j.b.Medium,
						titleColor: ce && ce.postTitleColor,
						isM2MHomeRedirectEnabled: A,
						isOverlay: V
					}, z.source && !le && r.a.createElement(S.a, {
						href: z.source.url,
						isSponsored: z.isSponsored,
						source: z.source
					}, Object(d.a)(z))), r.a.createElement(P.a, ae({
						key: "PostMeta"
					}, ge)), W && me && Object(g.c)(z) && r.a.createElement(h.a, {
						language: B,
						onIgnoreReports: D,
						reportable: z
					}), r.a.createElement("div", {
						className: re.a.spacer
					}), z.source && z.source.url && z.isSponsored && r.a.createElement(c.a, {
						className: re.a.adLinkWrapper
					}, r.a.createElement(S.a, {
						href: z.source.url.replace(a.a.redditUrl, ""),
						isSponsored: z.isSponsored,
						source: z.source
					}, z.source.displayText), z.callToAction && r.a.createElement(l.a, {
						href: z.source.url.replace(a.a.redditUrl, ""),
						isSponsored: z.isSponsored,
						source: z.source
					}, z.callToAction)), r.a.createElement("div", {
						className: re.a.flatlistContainer
					}, r.a.createElement(u.a, {
						className: re.a.leftExpando,
						crosspost: le,
						isExpanded: !!o,
						post: z,
						useMediaIcons: !1
					}), r.a.createElement(m.a, {
						className: re.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: ce,
						model: z,
						onVoteClick: s
					}), r.a.createElement(b.a, {
						className: re.a.flatlistSeparator
					}), r.a.createElement(b.c, {
						className: re.a.flatlist,
						currentUser: t,
						hasModFlairPerms: pe,
						hasModPostPerms: me,
						isOverlay: !!V,
						language: B,
						modModeEnabled: W,
						onIgnoreReports: D,
						onOpenReportsDropdown: K,
						post: z,
						showEditPost: xe,
						showEditFlair: J,
						tooltipType: V ? C.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(E.h)({
							editPost: !ue,
							save: !ue,
							hide: !ue,
							report: !ue
						})
					})), r.a.createElement(x.d, {
						postId: z.id
					}))), de(z, X, o)));
					return r.a.createElement(r.a.Fragment, null, ye)
				}
			}
			const de = (e, t, s) => s ? e.crosspostRootId ? r.a.createElement("div", {
					className: re.a.crosspostMediaWrapper
				}, ce(e, t)) : ce(e, t) : null,
				ce = (e, t) => r.a.createElement(f.a, {
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
				le = Object(i.a)(ie),
				me = (e => X(Y(e)))(le);
			t.b = (e => z(Object(L.b)(e)))(le)
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
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/SubredditIcon/index.tsx"),
				c = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				p = s("./src/reddit/models/Vote/index.ts"),
				u = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				b = s.n(u),
				x = s("./src/reddit/components/CompactPost/Placeholder/index.m.less"),
				h = s.n(x);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const y = Object(l.t)(),
				O = Object(n.c)({
					isFakeSubreddit: l.y
				}),
				f = Object(a.b)(O),
				P = e => {
					const t = {
						interactive: !1,
						voteState: p.a.notVoted
					};
					return r.a.createElement("div", {
						className: h.a.emptyVotes
					}, r.a.createElement(c.d, g({
						key: "u"
					}, t)), r.a.createElement("div", {
						key: "s",
						className: h.a.emptyScore
					}), r.a.createElement(c.c, g({
						key: "d"
					}, t)))
				},
				E = e => r.a.createElement(d.a, {
					className: Object(m.a)(e)
				}),
				v = e => r.a.createElement("div", {
					className: h.a.flatList
				}, r.a.createElement("div", {
					className: Object(i.a)(h.a.comments, Object(m.b)(e))
				}), r.a.createElement("div", {
					className: Object(i.a)(h.a.ellipsis, Object(m.b)(e))
				}));
			t.a = y(f(e => r.a.createElement("div", {
				className: Object(i.a)(e.className, b.a.compactPostStyles, b.a.classicAndCompactPlaceholderStyles)
			}, r.a.createElement("div", {
				className: h.a.wrapper
			}, r.a.createElement(P, g({
				key: "c"
			}, e)), r.a.createElement("div", {
				key: "a",
				className: h.a.expandoContainer
			}, r.a.createElement("div", {
				className: Object(i.a)(h.a.expando, Object(m.a)(e))
			})), r.a.createElement("div", {
				key: "d",
				className: h.a.subredditIconContainer
			}, r.a.createElement(E, {
				isLoading: !1
			})), r.a.createElement("div", {
				key: "e",
				className: h.a.topLine
			}, r.a.createElement("div", {
				key: "ea",
				className: Object(i.a)(h.a.title, Object(m.b)(e))
			}), r.a.createElement("div", {
				key: "eb",
				className: Object(i.a)(h.a.meta, Object(m.b)(e))
			})), r.a.createElement(v, g({
				key: "f"
			}, e))))))
		},
		"./src/reddit/components/CompactPost/index.m.less": function(e, t, s) {
			e.exports = {
				hideAboveSmallTablet: "FX_aWE8xMirpzniJDh7I9",
				verticalVotes: "WAapGmF_gr09J509Af-gC",
				responsiveExpandoButton: "_3gazhzxd2iBGYb2k67_HTw",
				mHideAboveSmallTablets: "_2zV_ARVPrYN10xmbbb_4Lu",
				responsiveMeta: "_1xomvNxK4aHGoGa-YDw1Mc",
				hideBelowSmallTablet: "z_7pbLL4hZp6ikYkq0prE",
				horizontalVotes: "_37nbKm3ee5NGx6e-LXErLD",
				mHideBelowSmallTablets: "_3x_hdVQw5uJh6xeAGoZock",
				postTopMeta: "_1ghZRP5m5xDLh0up1rFt0e",
				commentsLink: "Nz0lkWnnj2V_4iBKE0WL7",
				adLinkWrapper: "_4Dt8djtbHlJ5uCZDX_SeV",
				content: "_1B7SUGHK0QDoHimxX2a9D0",
				leftRail: "_2r9FABr2qYEUDyZoenhn6N",
				bulkActionCheckbox: "_44ehKZ_pl1NGGaaTYouZR",
				subredditIcon: "_1kWbgdOrvSeXIZZRIw4uBS",
				topLine: "_2ZjElFi3ORaU3VPrwmdoCp",
				postBadges: "_126a2ACB41algqMEwA34TF",
				flatList: "_3jwri54NGT-SRatPIZYiMo",
				expandedContentWrapper: "_12wy0ZFFaS3a49145uXWXt",
				crosspostMediaWrapper: "_2fCIreZsKBNS3esgsKKksM",
				compactWrapper: "YA9IzN0YR-G5_oD5EUydl",
				compactPostRow: "WnMeTcero48dKo501T-19",
				donationAmount: "_1TjU-e4dgCSlbuHHatC0G9",
				leftRailWrapper: "_3YgWdffoKyCp7UaGAEQpoo",
				proposalMetaData: "_1_B8IWlNlt5jJVg4cKy7nL",
				isEvent: "_1csviRG5jI9xOrcsmpbfwt",
				chain: "_1el-fLKTUXg-19pIbGUHgk",
				modToolsFlatlist: "_20p7Nh6bZU7MOqYuB2uJcy",
				postContainer: "_2bHVWuR_l_wVivC3FKfLFf",
				leftBorderWrapper: "_3ZmFVbkR23TIZ-3nboLYXe"
			}
		},
		"./src/reddit/components/CompactPost/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				n = (s("./node_modules/react-router-dom/esm/react-router-dom.js"), s("./node_modules/reselect/es/index.js")),
				i = s("./src/config.ts"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/constants/postLayout.ts"),
				p = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				u = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				b = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				x = s("./src/reddit/helpers/trackers/post.ts"),
				h = s("./src/reddit/models/Media/index.ts"),
				g = s("./src/reddit/models/User/index.ts"),
				y = s("./src/reddit/models/Vote/index.ts"),
				O = s("./src/reddit/actions/post.ts"),
				f = s("./src/reddit/actions/postFlair.ts"),
				P = s("./src/reddit/actions/tooltip.ts"),
				E = s("./src/reddit/selectors/activeModalId.ts"),
				v = s("./src/reddit/selectors/experiments/adSidebar.ts"),
				j = s("./src/reddit/selectors/moderatorPermissions.ts"),
				C = s("./src/reddit/selectors/postFlair.ts"),
				S = s("./src/reddit/selectors/posts.ts"),
				k = s("./src/reddit/selectors/user.ts"),
				N = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				_ = s("./src/reddit/components/AwardBadges/index.tsx"),
				I = s("./src/reddit/components/CallToActionButton/index.tsx"),
				M = s("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				w = s("./src/reddit/components/CommentsLink/index.tsx"),
				T = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				L = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				R = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				F = s("./src/reddit/components/ExpandoButton/index.tsx"),
				A = s("./src/reddit/components/Flatlist/index.tsx"),
				V = s("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				B = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				U = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				W = s("./src/reddit/components/ModModeReports/index.tsx"),
				H = s("./src/reddit/components/ModModeReports/helpers.ts"),
				D = s("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				K = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				Q = s("./src/reddit/components/PostBadges/index.tsx"),
				z = s("./src/reddit/components/PostContainer/index.tsx"),
				Z = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				X = s("./src/reddit/components/PostLeftRail/index.tsx"),
				G = s("./src/reddit/components/PostMedia/index.tsx"),
				J = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				Y = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				q = s("./src/reddit/components/PostTitle/index.tsx"),
				$ = s("./src/reddit/components/PostTopMeta/index.tsx"),
				ee = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				te = s("./src/reddit/components/SponsoredLabel/index.tsx"),
				se = (s("./src/reddit/components/SubredditIcon/index.tsx"), s("./src/reddit/components/VerticalVotes/index.tsx")),
				oe = s("./src/reddit/components/ViewReportsDropdown/index.tsx"),
				re = s("./src/reddit/contexts/InsideOverlay.tsx"),
				ae = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ne = s("./src/reddit/controls/Checkbox/index.tsx"),
				ie = s("./src/reddit/controls/MetaData/index.tsx"),
				de = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				ce = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				le = s("./src/reddit/helpers/postEvent.ts"),
				me = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				pe = s("./src/reddit/icons/fonts/Report/index.tsx"),
				ue = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				be = s.n(ue),
				xe = s("./src/reddit/components/CompactPost/index.m.less"),
				he = s.n(xe);

			function ge() {
				return (ge = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var ye = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (s[o[r]] = e[o[r]])
				}
				return s
			};
			const Oe = e => {
					var {
						isCompact: t
					} = e, s = ye(e, ["isCompact"]);
					return r.a.createElement(F.a, ge({
						className: Object(d.a)(he.a.responsiveExpandoButton, {
							[he.a.mHideAboveSmallTablets]: !!t,
							[he.a.mHideBelowSmallTablets]: !t
						})
					}, s))
				},
				fe = Object(a.b)(() => Object(n.c)({
					activeModalId: E.a,
					crosspost: S.c,
					currentUser: k.i,
					flairStyleTemplate: ae.Q,
					isActive: S.g,
					isExpanded: S.j,
					language: k.S,
					layout: ae.M,
					moderatorPermissions: j.i,
					modModeEnabled: ae.O,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						if (s) return e.polls.models[s]
					},
					post: S.I,
					showEditFlair: C.a,
					subredditOrProfile: S.U,
					userIsOp: k.jb,
					isInAdLeftSidebarExperiment: v.a
				}), (e, t) => {
					let {
						listingKey: s,
						listingName: o,
						postId: r
					} = t;
					return {
						dispatchFlairChanged: t => {
							let {
								post: s,
								previewFlair: o,
								selectedTemplateId: r
							} = t;
							return e(Object(f.h)({
								post: s,
								previewFlair: o,
								selectedTemplateId: r
							}))
						},
						handleVote: t => {
							const s = t === y.a.upvoted ? Object(O.N)(r) : Object(O.o)(r);
							e(s)
						},
						onIgnoreReports: () => e(Object(O.L)(r)),
						onOpenReportsDropdown: t => e(Object(P.g)({
							tooltipId: t
						}))
					}
				}, (e, t, s) => Object.assign({}, s, e, t, {
					onFlairChanged: s => {
						let {
							previewFlair: o,
							selectedTemplateId: r
						} = s;
						return t.dispatchFlairChanged({
							post: e.post,
							previewFlair: o,
							selectedTemplateId: r
						})
					}
				}));
			class Pe extends r.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						activeModalId: e,
						className: t,
						currentProfileName: s,
						crosspost: o,
						currentUser: a,
						eventFactory: n,
						flairStyleTemplate: c,
						handleVote: l,
						isCheckboxSelected: y = !1,
						isCommentsPage: O,
						isCommentPermalink: f,
						isExpanded: P,
						isInAdLeftSidebarExperiment: E,
						isOverlay: v,
						isProfilePostListing: j,
						inSubredditOrProfile: C = !1,
						language: S,
						layout: k,
						moderatorPermissions: F,
						modModeEnabled: G,
						onClickPost: te,
						onFlairChanged: re,
						onIgnoreReports: ae,
						poll: ie,
						post: ue,
						subredditOrProfile: xe,
						userIsOp: ge,
						hideModTools: ye,
						scrollerItemRef: Oe,
						showBulkActionCheckbox: fe,
						showEditFlair: Pe,
						toggleCheckbox: ve,
						tooltipType: Se,
						sendEvent: ke
					} = this.props, Ne = !!ue.media && ue.media.type === h.n.RTJSON, _e = ge && Ne, Ie = Object(Z.b)(ue.id, v), Me = Object(p.a)(F), we = Object(ce.a)(F), Te = "-mod-actions-menu-".concat(ue.id), Le = !!a && Object(g.f)(a) === ue.author, Re = Object(H.c)(ue), Fe = Object(V.a)("View--Reports", ue.id, Se), Ae = Object(H.a)(ue), Ve = !(v || O || f), Be = e => ke(Object(x.f)(ue.id, e)), Ue = r.a.createElement(z.a, {
						className: Object(d.a)(be.a.compactPostStyles, he.a.postContainer, Object(b.a)(this.props), t),
						isOverlay: v,
						style: Object.assign({}, Object(b.d)(this.props), Object(b.b)(this.props.flairStyleTemplate)),
						post: ue,
						onClick: te,
						eventFactory: n
					}, r.a.createElement("div", {
						className: he.a.compactWrapper
					}, r.a.createElement("div", {
						className: he.a.leftRailWrapper
					}, r.a.createElement("div", {
						className: he.a.leftRail,
						style: {
							borderColor: Object(X.c)({
								isRemoved: !!ue.bannedBy,
								isReported: Object(u.a)(ue),
								isSponsored: ue.isSponsored,
								theme: this.props.theme,
								isInAdLeftSidebarExperiment: E
							})
						}
					}, fe && r.a.createElement(ne.a, {
						className: he.a.bulkActionCheckbox,
						isCheckboxSelected: y,
						toggleCheckbox: ve
					}), r.a.createElement(se.a, {
						className: he.a.verticalVotes,
						compact: !0,
						flairStyleTemplate: c,
						model: ue,
						onVoteClick: l
					}), r.a.createElement(T.a, {
						className: he.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: c,
						model: ue,
						onVoteClick: l
					}))), r.a.createElement(K.a, {
						className: Object(d.a)(he.a.content, {
							[he.a.isEvent]: Object(le.a)(ue)
						}),
						"data-click-id": "background",
						flairStyleTemplate: c
					}, r.a.createElement(R.a, {
						isCompactMode: !0,
						language: S,
						post: ue
					}), r.a.createElement("div", {
						className: he.a.compactPostRow
					}, !ye && je(ue, o, P, !1), !C && !ue.isSponsored && r.a.createElement(B.h, {
						type: ue.belongsTo.type,
						id: ue.belongsTo.id
					}), r.a.createElement("div", {
						className: he.a.topLine,
						"data-click-id": "body"
					}, r.a.createElement(q.c, {
						post: ue,
						poll: ie,
						size: q.b.Small,
						titleColor: c && c.postTitleColor,
						isOverlay: !1
					}), Ce(ue, xe, S), r.a.createElement($.d, {
						className: he.a.postTopMeta,
						flairStyleTemplate: c,
						language: S,
						post: ue,
						showSub: !!xe && !C && !ue.isSponsored,
						subredditOrProfile: xe
					}), r.a.createElement(Q.a, {
						className: he.a.postBadges,
						displayText: xe ? xe.displayText : null,
						inSubredditOrProfile: C,
						language: S,
						post: ue
					}), xe && r.a.createElement(L.a, {
						className: he.a.donationAmount,
						contentId: ue.id,
						subredditId: xe.id
					}), r.a.createElement(_.a, {
						isOverlay: v,
						tooltipType: Se,
						thing: ue
					})), Ve && r.a.createElement("div", null, r.a.createElement(M.a, {
						className: he.a.liveDiscussionIcon,
						isMod: Me,
						postId: ue.postId
					})), r.a.createElement("div", {
						className: he.a.flatList
					}, r.a.createElement(w.a, {
						className: he.a.commentsLink,
						hasModPostPerms: Me,
						isCommentsPage: O,
						isCommentPermalink: f,
						isOverlay: v,
						postId: ue.id,
						modModeEnabled: G,
						numComments: ue.numComments,
						type: m.g.Compact
					}), r.a.createElement(D.a, {
						className: he.a.modToolsFlatlist,
						isOverlay: !1,
						layout: k,
						modModeEnabled: G,
						post: ue,
						sendEvent: ke,
						showIconsOnly: !0
					}), Me && r.a.createElement(U.a, {
						dropdownId: Te,
						onClick: () => Be("post_mod_action_menu")
					}, r.a.createElement(A.b, null), r.a.createElement(J.a, {
						canEditFlair: we && Pe,
						hasModPostPerms: Me,
						isOverlay: !1,
						isPostAuthor: Le,
						language: S,
						modModeEnabled: G,
						post: ue,
						tooltipId: Te
					})), Me && Re && !G && r.a.createElement(ee.c, {
						text: "".concat(Ae),
						onClick: () => {
							this.props.onOpenReportsDropdown(Fe), Be("post_report_menu")
						},
						id: Fe
					}, r.a.createElement(oe.a, {
						model: ue,
						onIgnoreReports: () => {
							ae(), Be(ue.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: Fe
					}), ue.ignoreReports ? r.a.createElement(me.a, null) : r.a.createElement(pe.a, null)), r.a.createElement(Y.g, {
						currentProfileName: s,
						isCommentsPage: O,
						isOverlay: !1,
						isProfilePostListing: j,
						layout: k,
						permalink: ue.permalink,
						postId: ue.postId,
						sendEvent: ke,
						showEditPost: _e,
						showEditFlair: Pe,
						dropdownId: "".concat(ue.id, "-overflow-menu"),
						useFlatlistBreakpoints: Object(Y.h)({
							share: !1,
							editPost: !1,
							save: !1,
							gild: !1,
							hide: !1,
							report: !1
						})
					}), !ye && je(ue, o, P, !0))), ue.source && ue.source.url && ue.isSponsored && r.a.createElement(N.a, {
						className: he.a.adLinkWrapper
					}, r.a.createElement(de.a, {
						href: ue.source.url.replace(i.a.redditUrl, ""),
						isSponsored: ue.isSponsored,
						source: ue.source
					}, ue.source.displayText), ue.callToAction && r.a.createElement(I.a, {
						href: ue.source.url.replace(i.a.redditUrl, ""),
						isSponsored: ue.isSponsored,
						source: ue.source,
						isNotCardView: !0
					}, ue.callToAction)), G && Me && Re && r.a.createElement("div", {
						className: he.a.compactPostRow
					}, r.a.createElement(W.a, {
						language: S,
						onIgnoreReports: ae,
						reportable: ue
					})), r.a.createElement(B.d, {
						postId: ue.id
					}))), P && r.a.createElement(Ee, {
						post: ue,
						scrollerItemRef: Oe,
						flairStyleTemplate: c
					}), e === Ie && r.a.createElement(Z.a, {
						flairs: ue.flair,
						subredditId: ue.belongsTo.id,
						modalId: Ie,
						onFlairChanged: re
					}));
					return r.a.createElement(r.a.Fragment, null, Ue)
				}
			}
			const Ee = e => r.a.createElement(K.a, {
					className: Object(d.a)(e.className, he.a.expandedContentWrapper),
					flairStyleTemplate: e.flairStyleTemplate
				}, e.post.crosspostRootId ? r.a.createElement("div", {
					className: he.a.crosspostMediaWrapper
				}, ve(e.post, e.scrollerItemRef)) : ve(e.post, e.scrollerItemRef)),
				ve = (e, t) => r.a.createElement(G.a, {
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
				je = (e, t, s, o) => r.a.createElement(Oe, {
					crosspost: t,
					isCompact: o,
					isExpanded: s,
					post: e,
					useMediaIcons: !0
				}),
				Ce = (e, t, s) => r.a.createElement("div", {
					className: he.a.responsiveMeta
				}, r.a.createElement(ie.b, {
					isScoreHidden: e.scoreHidden,
					language: s,
					score: e.score
				}), r.a.createElement(ie.c, null), Object(ie.d)(e.numComments, s), r.a.createElement(ie.c, null), t && r.a.createElement("a", {
					href: t.url
				}, r.a.createElement(ie.a, null, t.displayText)), e.isSponsored && [r.a.createElement(te.a, {
					key: "label"
				}), r.a.createElement(ie.c, {
					key: "separator"
				})], !e.isSponsored && r.a.createElement(ie.a, null, " Posted by "), r.a.createElement($.b, {
					post: e
				}));
			t.a = fe(Object(l.b)(Object(re.b)(Object(c.a)(Pe))))
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/higherOrderComponents/makeAsync.tsx"),
				r = s("./src/lib/loadWithRetries/index.ts");
			const a = Object(o.a)({
				getComponent: () => Object(r.a)(() => Promise.all([s.e("vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a"), s.e("Explore~InFeedChaining"), s.e("InFeedChaining")]).then(s.bind(null, "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			t.a = a
		},
		"./src/reddit/components/LargePost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1RYN-7H8gYctjOQeL8p2Q7",
				topCompactPost: "_34QdMmLlbOcjhKm_jp-r3s",
				bottomCompactPost: "_2IWrSJK7OQ27rTgV_N2Zu4",
				backgroundWrapper: "_11R7M_VOgKO1RJyRSRErT3",
				isEvent: "_3js7RHbLSHKV13qUFCVIhb",
				flatListContainer: "_1ixsU4oQRnNfZ91jhBU74y",
				noProposal: "_3KYCJ3N4w1YmvpFMo_3zcn",
				postMediaWrapper: "STit0dLageRsa2yR4te_b",
				postTitle: "_3wiKjmhpIpoTE2r5KCm2o6",
				proposal: "_2dkCPUHQTdBWU2B0dYnkRb",
				mPollIsClosed: "_3sj79JhIvASSGVklMeKgTl",
				mHasNotVoted: "_5iUKicC_Y0zWFXvBBtVQJ",
				mGAPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				mGaPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				chain: "_39yVNiqPz4VPgNZTlpA5fx",
				adLinkWrapper: "_115kZaIAhrTbhLHOXtz01X",
				horizontalVotes: "uFwpR-OdmueYZxdY_rEDX"
			}
		},
		"./src/reddit/components/LargePost/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				i = s("./src/config.ts"),
				d = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				c = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				l = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				m = s("./src/reddit/actions/inFeedChaining.ts"),
				p = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				b = s("./src/reddit/models/Media/index.ts"),
				x = s("./src/reddit/models/Poll/index.ts"),
				h = s("./src/reddit/models/Post/index.ts"),
				g = s("./src/reddit/models/Vote/index.ts"),
				y = s("./src/reddit/selectors/activeModalId.ts"),
				O = s("./src/reddit/selectors/experiments/m2mHomeRedirect.ts"),
				f = s("./src/reddit/selectors/inFeedChaining.ts"),
				P = s("./src/reddit/selectors/moderatorPermissions.ts"),
				E = s("./src/reddit/selectors/monthsToMinutes.ts"),
				v = s("./src/reddit/selectors/posts.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				C = s("./src/lib/classNames/index.ts"),
				S = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				k = s("./src/reddit/components/CallToActionButton/index.tsx"),
				N = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				_ = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx"),
				I = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				M = s("./src/reddit/components/Flatlist/index.tsx"),
				w = s("./src/reddit/components/Governance/Proposal/index.tsx"),
				T = s("./src/reddit/components/Governance/Proposal/NoProposalError/index.tsx"),
				L = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				R = s("./src/reddit/components/ModModeReports/index.tsx"),
				F = s("./src/reddit/components/ModModeReports/helpers.ts"),
				A = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				V = s("./src/reddit/components/PostContainer/index.tsx"),
				B = s("./src/reddit/components/PostLeftRail/index.tsx"),
				U = s("./src/reddit/components/PostMedia/index.tsx"),
				W = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				H = s("./src/reddit/i18n/components.tsx"),
				D = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				K = s("./src/reddit/components/PostPinnedHeader/index.m.less"),
				Q = s.n(K);
			var z = () => r.a.createElement("div", {
					className: Q.a.container
				}, r.a.createElement(D.a, {
					className: Q.a.pinnedIcon
				}), r.a.createElement("span", {
					className: Q.a.metaText
				}, r.a.createElement(H.c, null, "pinned by moderators"))),
				Z = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				X = s("./src/reddit/components/PostTitle/index.tsx"),
				G = s("./src/reddit/components/PostTopLine/index.tsx"),
				J = s("./src/reddit/components/SourceLink/index.tsx"),
				Y = s("./src/reddit/contexts/InsideOverlay.tsx"),
				q = s("./src/reddit/contexts/PageLayer/index.tsx"),
				$ = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				ee = s("./src/reddit/helpers/isCrosspost.ts"),
				te = s("./src/reddit/helpers/postEvent.ts"),
				se = s("./src/reddit/constants/experiments.ts"),
				oe = s("./src/reddit/helpers/chooseVariant/index.ts"),
				re = s("./src/reddit/helpers/getRichTextContent/index.ts");
			const ae = Object(n.a)(v.O, e => e.some(re.c)),
				ne = Object(n.a)(ae, e => e),
				ie = (e, t) => Object(oe.c)(e, {
					experimentName: se.D,
					experimentEligibilitySelector: e => {
						const {
							listingKey: s
						} = t;
						return !!s && ne(e, {
							listingKey: s
						})
					}
				});
			var de = s("./src/reddit/selectors/postFlair.ts"),
				ce = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				le = s.n(ce),
				me = s("./src/reddit/components/LargePost/index.m.less"),
				pe = s.n(me);
			const ue = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(v.O)(e, {
						listingKey: s
					}) : void 0
				},
				be = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(v.C)(e, {
						listingKey: s
					}) : void 0
				},
				xe = Object(a.b)(() => Object(n.c)({
					autoplayPref: j.b,
					activeModalId: y.a,
					currentUser: j.i,
					hideNSFWPref: j.z,
					flairStyleTemplate: q.Q,
					isCurrentUserProfilePost: v.h,
					isFrontpageHome: E.g,
					isM2MHomeRedirectEnabled: O.c,
					language: j.S,
					isActive: v.g,
					isPostChainDismissed: f.c,
					isPostChained: f.d,
					moderatorPermissions: P.i,
					modModeEnabled: q.O,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					pollResult: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.results.byVoters[s] : null
					},
					post: v.I,
					posts: ue,
					postHeightVariant: ie,
					postIds: be,
					showEditFlair: de.a,
					subredditOrProfile: v.U,
					userIsOp: j.jb
				}), (e, t) => {
					let {
						listingKey: s,
						listingName: o,
						postId: r
					} = t;
					return {
						chainPost: () => {
							o && s && e(Object(m.d)({
								listingKey: s,
								listingName: o,
								postId: r
							}))
						},
						handleVote: t => {
							const s = t === g.a.upvoted ? Object(p.N)(r) : Object(p.o)(r);
							e(s)
						},
						onIgnoreReports: () => e(Object(p.L)(r)),
						onOpenReportsDropdown: t => e(Object(u.g)({
							tooltipId: t
						}))
					}
				}),
				he = r.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						chainPost: o,
						className: a,
						currentUser: n,
						eventFactory: m,
						flairStyleTemplate: p,
						forceLoadMedia: u,
						hideNSFWPref: g,
						inSubredditOrProfile: y = !1,
						isCommentsPage: O,
						isCurrentUserProfilePost: f,
						isFrontpage: P,
						isFrontpageHome: E,
						isM2MHomeRedirectEnabled: v,
						isOverlay: j,
						isPostChainDismissed: H,
						isPostChained: D,
						language: K,
						listingKey: Q,
						listingName: Y,
						moderatorPermissions: q,
						modModeEnabled: oe,
						onClickPost: re,
						onIgnoreReports: ae,
						onOpenReportsDropdown: ne,
						poll: ie,
						pollResult: de,
						post: ce,
						postHeightVariant: me,
						scrollerItemRef: ue,
						showEditFlair: be,
						subredditOrProfile: xe,
						userIsOp: he
					} = e, ge = !!e.redditStyle || !!e["data-redditstyle"], ye = ge ? void 0 : p, Oe = Object(c.a)(q), fe = oe && Oe, Pe = Object(d.a)(q), Ee = Object(F.c)(ce), ve = !!ce.media && ce.media.type === b.n.RTJSON, je = he && ve, Ce = s ? s - B.a : void 0, Se = !!de && !!Object.keys(de.options).filter(e => de.options[e].userSelected).length, ke = !(P && E), Ne = (e => e === se.pb.OnlyTitles)(me) && !Object(ee.a)(ce), _e = (e => e === se.pb.MediumHeight)(me) && !Object(ee.a)(ce), Ie = (e => {
						const {
							post: t,
							postIds: s,
							posts: o
						} = e;
						if (!Object(h.k)(t)) return;
						const r = s && 0 === s.indexOf(t.id),
							a = s && 1 === s.indexOf(t.id),
							n = o && o[1] && Object(h.k)(o[1]);
						return {
							hasTopCompactPostStyles: r && n,
							hasBottomCompactPostStyles: a,
							showPinnnedHeader: r
						}
					})(e), Me = r.a.createElement(V.a, {
						className: Object(C.a)(pe.a.container, a, le.a.largeAndMediumPostStyles, le.a.largeAndMediumActiveStyles, Object(l.a)(e), {
							[le.a.mUseRedditTheme]: ge,
							promotedvideolink: ce.isSponsored && !(ce.media && b.a.has(ce.media.type)),
							[pe.a.topCompactPost]: Ie && Ie.hasTopCompactPostStyles,
							[pe.a.bottomCompactPost]: Ie && Ie.hasBottomCompactPostStyles
						}),
						isOverlay: j,
						style: Object(l.b)(e.flairStyleTemplate),
						post: ce,
						onClick: re,
						onPostContentClick: o,
						eventFactory: m
					}, r.a.createElement(Z.a, {
						model: ce,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: ye,
						redditStyle: ge
					}), r.a.createElement(A.a, {
						className: Object(C.a)(pe.a.backgroundWrapper, {
							[pe.a.isEvent]: Object(te.a)(ce)
						}),
						"data-click-id": "background",
						flairStyleTemplate: ye,
						post: ce,
						redditStyle: ge
					}, r.a.createElement(I.a, {
						post: ce,
						language: K
					}), Ie && Ie.showPinnnedHeader && r.a.createElement(z, null), r.a.createElement(G.a, {
						className: pe.a.postTopLine,
						hideNSFWPref: g,
						iconClassName: pe.a.postTopLineIcon,
						inSubredditOrProfile: y,
						isCommentsPage: !!O,
						isCompactPinnedPost: !!Ie,
						isCurrentUserProfilePost: f,
						isOverlay: !!j,
						language: K,
						post: ce,
						shouldShowSubscribeButton: ke,
						showSubreddit: !y && !ce.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: xe
					}), r.a.createElement(X.c, {
						className: pe.a.postTitle,
						post: ce,
						redditStyle: ge,
						size: X.b.Large,
						titleColor: ye && ye.postTitleColor,
						isM2MHomeRedirectEnabled: v,
						isOverlay: j
					}), ce.source && !ce.isSponsored && r.a.createElement(J.a, {
						className: pe.a.sourceLink,
						post: ce
					}), r.a.createElement("div", {
						className: Object(C.a)(pe.a.postMediaWrapper, {
							[pe.a.votedContent]: Se
						})
					}, !Ie && r.a.createElement(U.a, {
						isListing: !0,
						isMediumHeight: _e,
						isNotCardView: !!j,
						isTitleOnly: Ne,
						showCentered: !0,
						flairStyleTemplate: ye,
						post: ce,
						availableWidth: Ce,
						shouldLoad: u,
						scrollerItemRef: ue,
						autoplayPref: t
					})), ie && r.a.createElement(w.a, {
						className: Object(C.a)(pe.a.proposal, {
							[pe.a.mHasNotVoted]: !de,
							[pe.a.mPollIsClosed]: !!de && Object(x.e)(ie, de),
							[pe.a.mGAPoll]: ie.type === x.a.GA
						}),
						pollId: ie.id,
						subredditId: ce.belongsTo.id
					}), ce.isMeta && !ie && r.a.createElement(T.a, {
						className: pe.a.noProposal
					}), ce.source && ce.source.url && ce.isSponsored && r.a.createElement(S.a, {
						className: pe.a.adLinkWrapper
					}, r.a.createElement($.a, {
						href: ce.source.url.replace(i.a.redditUrl, ""),
						isSponsored: ce.isSponsored,
						source: ce.source
					}, ce.source.displayText), ce.callToAction && r.a.createElement(k.a, {
						href: ce.source.url.replace(i.a.redditUrl, ""),
						isSponsored: ce.isSponsored,
						source: ce.source
					}, ce.callToAction)), oe && Oe && Ee && r.a.createElement(R.a, {
						language: K,
						onIgnoreReports: ae,
						reportable: ce
					}), r.a.createElement(L.d, {
						postId: ce.id
					}), r.a.createElement("div", {
						className: pe.a.flatListContainer
					}, r.a.createElement(N.a, {
						className: pe.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: ye,
						model: ce,
						onVoteClick: e.handleVote
					}), r.a.createElement(M.c, {
						currentUser: n,
						hasModFlairPerms: Pe,
						hasModPostPerms: Oe,
						isLargePost: !0,
						isOverlay: !!j,
						language: K,
						modModeEnabled: oe,
						onIgnoreReports: ae,
						onOpenReportsDropdown: ne,
						post: ce,
						showEditPost: je,
						showEditFlair: be,
						useFlatlistBreakpoints: Object(W.h)({
							editPost: !1,
							save: !fe,
							hide: !1,
							report: !1
						})
					}))));
					return r.a.createElement(r.a.Fragment, null, Me, D && !H && r.a.createElement(_.a, {
						className: pe.a.chain,
						listingKey: Q,
						listingName: Y,
						postId: ce.id
					}))
				});
			t.a = xe(Object(Y.b)(he))
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
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				n = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				d = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				c = s.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (s[o[r]] = e[o[r]])
				}
				return s
			};
			t.a = Object(n.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: o,
					onClick: n,
					post: d,
					redditStyle: p,
					theme: u
				} = e, b = m(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return r.a.createElement("div", l({
					className: Object(a.a)(c.a.backgroundWrapper, s),
					style: Object(i.c)(o, e),
					onClick: n
				}, b), t)
			})
		},
		"./src/reddit/components/PostList/LoadMore.m.less": function(e, t, s) {
			e.exports = {
				Component: "_3tBFh6Ty3gSaxW4gcm6hZ_",
				component: "_3tBFh6Ty3gSaxW4gcm6hZ_"
			}
		},
		"./src/reddit/components/PostList/LoadMore.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/PostList/Placeholder.tsx"),
				a = s("./src/reddit/components/PostList/LoadMore.m.less"),
				n = s.n(a);
			t.a = o.a.wrapped(r.a, "Component", n.a)
		},
		"./src/reddit/components/PostList/Placeholder.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/lodash/constant.js"),
				r = s.n(o),
				a = s("./node_modules/lodash/times.js"),
				n = s.n(a),
				i = s("./node_modules/react/index.js"),
				d = s.n(i),
				c = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/fastdom/index.ts"),
				p = s("./src/lib/intersectionObserver/index.ts"),
				u = s("./src/reddit/constants/postLayout.ts"),
				b = s("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				x = s("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				h = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./src/lib/classNames/index.ts")),
				g = s("./src/reddit/components/PostLeftRail/index.tsx"),
				y = s("./src/reddit/components/SubredditIcon/index.tsx"),
				O = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				f = s("./src/reddit/contexts/PageLayer/index.tsx"),
				P = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				E = s("./src/reddit/models/Vote/index.ts"),
				v = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				j = s.n(v),
				C = s("./src/reddit/components/LargePost/placeholder.m.less"),
				S = s.n(C);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var N = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (s[o[r]] = e[o[r]])
				}
				return s
			};
			const _ = Object(f.t)(),
				I = Object(l.c)({
					isFakeSubreddit: f.y
				}),
				M = Object(c.b)(I),
				w = e => {
					const t = {
						interactive: !1,
						voteState: E.a.notVoted
					};
					return d.a.createElement("div", {
						className: S.a.emptyVerticalVotes
					}, d.a.createElement(O.d, k({
						key: "u"
					}, t)), d.a.createElement("div", {
						className: S.a.emptyScore,
						key: "s"
					}), d.a.createElement(O.c, k({
						key: "d"
					}, t)))
				},
				T = e => {
					var {
						isLoading: t
					} = e, s = N(e, ["isLoading"]);
					return d.a.createElement(y.b, k({
						className: Object(P.a)({
							isLoading: t
						})
					}, s))
				};
			var L = _(M(e => {
				var {
					className: t,
					dispatch: s,
					pageLayer: o
				} = e, r = N(e, ["className", "dispatch", "pageLayer"]);
				return d.a.createElement("div", {
					className: Object(h.a)(j.a.baseLargeAndMediumPostStyles, t)
				}, d.a.createElement(g.b, {
					key: "a"
				}, d.a.createElement(w, r)), d.a.createElement("div", {
					className: S.a.content,
					key: "b"
				}, d.a.createElement("div", {
					className: S.a.topLine,
					key: "ba"
				}, r.isFakeSubreddit && d.a.createElement(T, {
					key: "baa",
					isLoading: !1
				}), d.a.createElement("div", {
					key: "bab",
					className: Object(h.a)(S.a.topMetaOne, Object(P.b)(r))
				}), d.a.createElement("div", {
					key: "bac",
					className: Object(h.a)(S.a.topMetaTwo, Object(P.b)(r))
				})), d.a.createElement("div", {
					key: "bb",
					className: Object(h.a)(S.a.title, Object(P.b)(r))
				})), d.a.createElement("div", {
					key: "c",
					className: Object(h.a)(S.a.media, Object(P.a)(r))
				}), d.a.createElement("div", {
					className: S.a.content,
					key: "d"
				}, d.a.createElement("div", {
					className: S.a.flatlist
				}, d.a.createElement("div", {
					className: Object(h.a)(S.a.flatlistItemOne, Object(P.b)(r))
				}), d.a.createElement("div", {
					className: Object(h.a)(S.a.flatListItemTwo, Object(P.b)(r))
				}))))
			}));
			const R = {
				[u.g.Large]: [L, 2],
				[u.g.Classic]: [b.b, 10],
				[u.g.Compact]: [x.a, 30]
			};

			function F(e) {
				return R[e]
			}
			const A = .1,
				V = Object(l.c)({
					loadingPostComponentForLayout: () => F
				}),
				B = Object(c.b)(V);
			class U extends d.a.Component {
				constructor() {
					super(...arguments), this.mounted = !1, this.state = {
						visible: !1
					}, this.setWrapperRef = e => {
						e !== this.wrapperRef && (this.wrapperRef && p.b(this.wrapperRef), e && p.a(e, this.updateVisibleState)), this.wrapperRef = e
					}, this.updateVisibleState = e => {
						const t = e.intersectionRatio >= A;
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
						layout: o,
						loadingPostComponentForLayout: a
					} = this.props, {
						visible: i
					} = this.state, [c, l] = a(o), m = t || l, p = r()(d.a.createElement(c, {
						isLoading: s && i
					})), u = n()(m, p);
					return d.a.createElement("div", {
						className: e,
						ref: this.setWrapperRef
					}, d.a.Children.toArray(u))
				}
			}
			t.a = B(U)
		},
		"./src/reddit/components/PostList/SomethingWrong.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				n = s("./src/reddit/connectors/connectToLanguage.ts"),
				i = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./src/reddit/helpers/describeApiError/index.ts"),
				c = s("./src/reddit/components/PostList/index.m.less"),
				l = s.n(c);
			t.a = Object(n.a)(e => {
				const {
					language: t,
					onTryAgain: s,
					apiError: r
				} = e;
				let n = o.fbt._("Something went wrong while loading.", null, {
					hk: "1ijaef"
				});
				return r && (n = Object(d.a)({
					apiError: r,
					language: t,
					isLoggedOut: !1
				})), a.a.createElement("div", {
					className: l.a.somethingWrong
				}, a.a.createElement("div", {
					className: l.a.somethingWrongText
				}, n), s && a.a.createElement(i.f, {
					onClick: s
				}, o.fbt._("Try again", null, {
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
		"./src/reddit/components/PostPinnedHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_203iZ8LUuIrz_IJbiOAJDH",
				pinnedIcon: "_2xKvAjjyhpXElWBVqyWyml",
				metaText: "rewiG9XNj_xqkQDcyR88j"
			}
		},
		"./src/reddit/connectors/connectToLanguage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/selectors/user.ts");
			const n = Object(r.c)({
				language: a.S
			});

			function i(e) {
				return Object(o.b)(n)(e)
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
				return x
			})), s.d(t, "d", (function() {
				return h
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/app/strings/index.ts"),
				n = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/prettyPrintNumber/index.ts"),
				d = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/i18n/utils.ts")),
				c = s("./src/reddit/controls/MetaData/index.m.less"),
				l = s.n(c),
				m = function(e, t) {
					var s = {};
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (s[o[r]] = e[o[r]])
					}
					return s
				};
			const p = n.a.span("metaText", l.a),
				u = e => r.a.createElement(p, e, " · "),
				b = Object(a.d)("comment.point"),
				x = e => {
					var {
						isScoreHidden: t,
						language: s,
						score: o,
						useUpvotes: a
					} = e, n = m(e, ["isScoreHidden", "language", "score", "useUpvotes"]);
					const c = Object(i.b)(o),
						l = Object(d.c)("\n    ".concat(Object(d.b)("score", c), " ").concat(Object(d.a)("upvotes", ["upvote", "upvotes"], o), "\n  ")),
						u = t ? Object(d.c)("Score hidden") : a ? l : b(s, o, {
							count: c
						});
					return r.a.createElement(p, n, u)
				},
				h = (e, t) => {
					const s = Object(a.c)(t, "posts.comments.noun", e, {
						count: Object(i.b)(e)
					});
					return r.a.createElement(p, null, s)
				}
		},
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return i
			}));
			var o = s("./src/config.ts"),
				r = (s("./src/lib/bigNumberUtils/percent.ts"), s("./src/lib/constants/index.ts")),
				a = s("./src/reddit/endpoints/governance/requester.ts");

			function n(e, t) {
				return Object(a.a)(e, {
					endpoint: "".concat(o.a.metaUrl, "/wallets/").concat(t.subredditId, "/me"),
					method: r.bb.GET
				}).then(e => {
					if (e.ok) {
						const s = e.body,
							o = {
								[t.subredditId]: s
							};
						return Object.assign({}, e, {
							body: o
						})
					}
					return e
				})
			}

			function i(e, t) {
				return Object(a.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: "".concat(o.a.metaUrl, "/wallets/").concat(t.subredditId),
					method: r.bb.POST,
					data: t.userIds
				}).then(e => e.ok ? Object.assign({}, e, {
					body: {
						wallets: e.body
					}
				}) : e)
			}
		},
		"./src/reddit/helpers/describeApiError/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var o = s("./src/app/strings/index.ts"),
				r = s("./src/lib/constants/index.ts");

			function a(e) {
				let {
					apiError: t,
					isLoggedOut: s,
					language: a
				} = e;
				switch (t.type) {
					case r.D.AUTHORIZATION_ERROR:
						return s ? Object(o.a)(a, "error.type.notLoggedIn") : Object(o.a)(a, "error.type.notAuthorized");
					case r.D.VALIDATION_ERROR:
						return Object(o.a)(a, "error.type.validation");
					case r.D.NOT_FOUND_ERROR:
						return Object(o.a)(a, "error.type.notFound");
					case r.D.SERVER_ERROR:
						return Object(o.a)(a, "error.type.server");
					case r.D.LIKELY_UBLOCK_ERROR:
						return Object(o.a)(a, "error.type.blocked");
					default:
						return Object(o.a)(a, "error.type.generic")
				}
			}
		},
		"./src/reddit/helpers/getClickInfo.ts": function(e, t, s) {
			"use strict";
			t.a = e => ({
				hasNewTabModifier: !(!e.metaKey && !e.ctrlKey && 1 !== e.button)
			})
		},
		"./src/reddit/helpers/postComponentForLayout/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/lib/isUrl/index.ts"),
				n = s("./src/lib/logs/console.ts"),
				i = s("./src/reddit/components/BlankPost/index.tsx"),
				d = s("./src/reddit/components/ClassicPost/index.tsx"),
				c = s("./src/reddit/components/CompactPost/index.tsx"),
				l = s("./src/reddit/components/LargePost/index.tsx"),
				m = (s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/react-redux/es/index.js")),
				p = s("./node_modules/reselect/es/index.js"),
				u = s("./src/config.ts"),
				b = s("./src/lib/classNames/index.ts"),
				x = s("./src/reddit/actions/inFeedChaining.ts"),
				h = s("./src/reddit/actions/post.ts"),
				g = s("./src/reddit/actions/tooltip.ts"),
				y = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				O = s("./src/reddit/components/CallToActionButton/index.tsx"),
				f = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				P = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx"),
				E = s("./src/reddit/components/FlairWrapper/index.tsx"),
				v = s("./src/reddit/components/Flatlist/index.tsx"),
				j = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				C = s("./src/reddit/components/ModModeReports/index.tsx"),
				S = s("./src/reddit/components/ModModeReports/helpers.ts"),
				k = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				N = s("./src/reddit/components/PostContainer/index.tsx"),
				_ = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				I = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				M = s("./src/reddit/components/PostTitle/index.tsx"),
				w = s("./src/reddit/components/PostTopLine/index.tsx"),
				T = s("./src/reddit/components/PostTopMeta/index.tsx"),
				L = s("./src/reddit/components/SourceLink/index.tsx"),
				R = s("./src/reddit/contexts/InsideOverlay.tsx"),
				F = s("./src/reddit/contexts/PageLayer/index.tsx"),
				A = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				V = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				B = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				U = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				W = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				H = s("./src/reddit/models/Vote/index.ts"),
				D = s("./src/reddit/selectors/experiments/categories.ts"),
				K = s("./src/reddit/selectors/experiments/m2mHomeRedirect.ts"),
				Q = s("./src/reddit/selectors/inFeedChaining.ts"),
				z = s("./src/reddit/selectors/moderatorPermissions.ts"),
				Z = s("./src/reddit/selectors/monthsToMinutes.ts"),
				X = s("./src/reddit/selectors/postFlair.ts"),
				G = s("./src/reddit/selectors/posts.ts"),
				J = s("./src/reddit/selectors/user.ts"),
				Y = s("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				q = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				$ = s.n(q),
				ee = s("./src/reddit/components/MediumPost/index.m.less"),
				te = s.n(ee);
			var se = Object(m.b)(() => Object(p.c)({
					crosspost: G.c,
					currentUser: J.i,
					flairStyleTemplate: F.Q,
					hideNSFWPref: J.z,
					isActive: G.g,
					isCurrentUserProfilePost: G.h,
					isFrontpageHome: Z.g,
					isM2MHomeRedirectEnabled: K.c,
					isPostChainDismissed: Q.c,
					isPostChained: Q.d,
					language: J.S,
					moderatorPermissions: z.i,
					modModeEnabled: F.O,
					post: G.I,
					showEditFlair: X.a,
					showMedia: F.r,
					isInCategoriesExperiment: D.a,
					subredditOrProfile: G.U
				}), (e, t) => {
					let {
						listingKey: s,
						listingName: o,
						postId: r
					} = t;
					return {
						chainPost: () => {
							o && s && e(Object(x.d)({
								listingKey: s,
								listingName: o,
								postId: r
							}))
						},
						handleVote: t => t === H.a.upvoted ? e(Object(h.N)(r)) : e(Object(h.o)(r)),
						onIgnoreReports: () => e(Object(h.L)(r)),
						onOpenReportsDropdown: t => e(Object(g.g)({
							tooltipId: t
						}))
					}
				})(Object(R.b)(e => {
					const {
						chainPost: t,
						className: s,
						crosspost: o,
						currentUser: a,
						eventFactory: n,
						flairStyleTemplate: i,
						hideNSFWPref: d,
						inSubredditOrProfile: c = !1,
						isCheckboxSelected: l,
						isCommentsPage: m,
						isCurrentUserProfilePost: p,
						isFrontpage: x,
						isFrontpageHome: h,
						isM2MHomeRedirectEnabled: g,
						isOverlay: R,
						isPostChainDismissed: F,
						isPostChained: H,
						language: D,
						listingKey: K,
						listingName: Q,
						moderatorPermissions: z,
						modModeEnabled: Z,
						onClickPost: X,
						onIgnoreReports: G,
						onOpenReportsDropdown: J,
						post: q,
						redditStyle: ee,
						showBulkActionCheckbox: se,
						showEditFlair: oe,
						showMedia: re,
						sendEvent: ae,
						subredditOrProfile: ne,
						toggleCheckbox: ie
					} = e, de = ee ? void 0 : i, ce = Object(U.a)(z), le = Z && ce, me = Object(B.a)(z), pe = Object(S.c)(q), ue = Object(V.a)(q), be = c && !re, xe = be && !!q.source && !o, he = !(x && h || p), ge = r.a.createElement(N.a, {
						className: Object(b.a)(te.a.container, s, $.a.largeAndMediumPostStyles, $.a.largeAndMediumActiveStyles, Object(W.a)(e), {
							[$.a.mUseRedditTheme]: e.redditStyle || e["data-redditstyle"]
						}),
						isOverlay: R,
						style: Object(W.b)(e.flairStyleTemplate),
						post: q,
						onClick: X,
						onPostContentClick: t,
						eventFactory: n
					}, r.a.createElement(I.a, {
						model: q,
						handleVote: e.handleVote,
						showBulkActionCheckbox: se,
						isCheckboxSelected: l,
						toggleCheckbox: ie,
						flairStyleTemplate: de,
						redditStyle: ee
					}), r.a.createElement(k.a, {
						className: te.a.backgroundWrapper,
						"data-click-id": "background",
						flairStyleTemplate: de,
						post: q,
						redditStyle: ee
					}, r.a.createElement("article", {
						className: te.a.mainBody
					}, r.a.createElement("div", {
						className: te.a.content,
						"data-click-id": "body"
					}, r.a.createElement(w.a, {
						className: te.a.postTopLine,
						hideNSFWPref: d,
						iconClassName: te.a.postTopLineIcon,
						inSubredditOrProfile: c,
						isCommentsPage: m,
						isCurrentUserProfilePost: p,
						isOverlay: !!R,
						language: D,
						post: q,
						shouldShowSubscribeButton: !1,
						showCornerOutboundLink: xe,
						showSubreddit: !c && !q.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: ne
					}), r.a.createElement(M.c, {
						className: te.a.postTitle,
						post: q,
						redditStyle: ee,
						size: M.b.Large,
						titleColor: de && de.postTitleColor,
						isM2MHomeRedirectEnabled: g,
						isOverlay: R
					}), m && (q.flair && q.flair.length > 0 || e.isInCategoriesExperiment) && r.a.createElement(E.a, {
						className: m ? te.a.leftPadding : null,
						disableFlair: !m,
						post: q,
						sendEvent: ae,
						showCategoryTag: e.isInCategoriesExperiment && m
					}), q.source && !q.isSponsored && !o && r.a.createElement(L.a, {
						className: te.a.sourceLink,
						isCommentsPage: m,
						post: q
					})), !be && ue && r.a.createElement(Y.a, {
						crosspost: o ? q : void 0,
						hasModPostPerms: ce,
						isCommentsPage: m,
						isOverlay: R,
						modModeEnabled: Z,
						post: o || q,
						redditStyle: ee,
						shouldShowSubscribeButton: he && !c,
						subredditOrProfile: ne,
						templatePlaceholderImage: de && de.postPlaceholderImage
					})), q.source && q.source.url && q.isSponsored && r.a.createElement(y.a, {
						className: te.a.adLinkWrapper
					}, r.a.createElement(A.a, {
						href: q.source.url.replace(u.a.redditUrl, ""),
						isSponsored: q.isSponsored,
						source: q.source
					}, q.source.displayText), q.callToAction && r.a.createElement(O.a, {
						href: q.source.url.replace(u.a.redditUrl, ""),
						isSponsored: q.isSponsored,
						source: q.source,
						isNotCardView: !0
					}, q.callToAction)), Z && ce && pe && r.a.createElement(C.a, {
						className: te.a.modModeReports,
						language: D,
						onIgnoreReports: G,
						reportable: q
					}), r.a.createElement(j.d, {
						postId: q.id
					}), r.a.createElement("div", {
						className: te.a.flatlistContainer
					}, r.a.createElement(f.a, {
						className: te.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: de,
						redditStyle: ee,
						model: q,
						onVoteClick: e.handleVote
					}), r.a.createElement(v.c, {
						currentUser: a,
						hasModFlairPerms: me,
						hasModPostPerms: ce,
						isOverlay: !!R,
						language: D,
						modModeEnabled: Z,
						onIgnoreReports: G,
						onOpenReportsDropdown: J,
						post: q,
						showEditFlair: oe,
						tooltipType: R ? T.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(_.h)({
							editPost: !le,
							save: !le,
							hide: !1,
							report: !1
						})
					}))));
					return r.a.createElement(r.a.Fragment, null, ge, H && !F && r.a.createElement(P.a, {
						className: te.a.chain,
						listingKey: K,
						listingName: Q,
						postId: q.id
					}))
				})),
				oe = s("./src/reddit/constants/postLayout.ts"),
				re = s("./src/reddit/models/Media/index.ts");
			s.d(t, "a", (function() {
				return ne
			})), s.d(t, "b", (function() {
				return ce
			}));
			const ae = {
					[oe.g.Large]: l.a,
					[oe.g.Medium]: se,
					[oe.g.Classic]: d.b,
					[oe.g.Compact]: c.a
				},
				ne = e => r.a.createElement(i.b, e),
				ie = ["https://www.mcdonalds.com", "https://d2n94wep25xhn0.cloudfront.net", "https://www.dyson.com", "https://dyson.com"],
				de = e => !e.media || e.media.type === re.n.EMBED && !(re.b.has(e.media.provider) || (e => e.source && e.source.url && e.isSponsored && ie.some(t => e.source.url.startsWith(t)))(e));

			function ce(e) {
				let {
					isCrosspost: t,
					isFirstPost: s,
					layout: o,
					post: r
				} = e;
				if (r.isBlank) return ne;
				const i = !r.media && !!r.source && Object(a.a)(r.source.url),
					d = t && i;
				o === oe.g.Large && de(r) && !d && (o = oe.g.Medium);
				const c = ae[o];
				return void 0 === c ? (Object(n.a)(void 0, "Could not find component for layout ".concat(o, ".")), ne) : s && r.isSponsored && o === oe.g.Large ? se : c
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
				return x
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "d", (function() {
				return g
			}));
			var o = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				a = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				n = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = s("./src/reddit/models/Theme/index.ts"),
				d = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				c = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(c);
			const m = {},
				p = e => Object(i.g)(Object(d.a)(e).post, Object(d.a)(e).backgroundImage, Object(d.a)(e).backgroundImagePosition),
				u = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(i.g)(e.postBackgroundColor || Object(d.a)(t).post, e.postBackgroundImage, Object(d.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(i.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: p(t)
					}
				},
				b = e => Object(o.o)(.2, e),
				x = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : m,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				g = e => {
					const t = Object(a.a)(Object(r.a)(e), n.a.actionIcon, n.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		}
	}
]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~Multireddit~ProfileComments~ProfileOverv~3f5eede2.f246d69c93a2b17af0e0.js.map