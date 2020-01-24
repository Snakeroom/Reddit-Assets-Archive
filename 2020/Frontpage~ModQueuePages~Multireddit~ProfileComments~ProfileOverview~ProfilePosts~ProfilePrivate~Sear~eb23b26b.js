// https://www.redditstatic.com/desktop2x/Frontpage~ModQueuePages~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate~Sear~eb23b26b.5084e16d80a3d8ca9f41.js
// Retrieved at 1/24/2020, 9:19:31 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Frontpage~ModQueuePages~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate~Sear~eb23b26b"], {
		"./src/reddit/components/ClassicPost/Placeholder.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			}));
			var o = s("./node_modules/react/index.js"),
				a = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/PostLeftRail/index.tsx"),
				d = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				p = s("./src/reddit/models/Vote/index.ts"),
				u = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				b = s.n(u),
				x = s("./src/reddit/components/ClassicPost/placeholder.m.less"),
				h = s.n(x);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const g = Object(l.t)(),
				E = Object(n.c)({
					isFakeSubreddit: l.y
				}),
				y = Object(r.b)(E),
				f = e => {
					const t = {
						interactive: !1,
						voteState: p.a.notVoted
					};
					return a.a.createElement("div", {
						className: Object(c.a)(e.className, h.a.emptyVerticalVotes)
					}, a.a.createElement(d.d, O({
						key: "u"
					}, t)), e.children, a.a.createElement(d.c, O({
						key: "d"
					}, t)))
				},
				v = () => a.a.createElement(f, null, a.a.createElement("div", {
					className: h.a.emptyScore,
					key: "s"
				}));
			t.b = g(y(e => a.a.createElement("div", {
				className: Object(c.a)(e.className, b.a.classicPostStyles, b.a.classicAndCompactPlaceholderStyles)
			}, a.a.createElement(i.b, null, a.a.createElement(v, null)), a.a.createElement("div", {
				className: h.a.mainBody
			}, a.a.createElement("div", {
				className: h.a.thumbnailContainer
			}, a.a.createElement("div", {
				className: Object(c.a)(h.a.thumbnail, Object(m.b)(e))
			})), a.a.createElement("div", {
				className: h.a.content
			}, a.a.createElement("div", {
				key: "a"
			}, a.a.createElement("div", {
				key: "aa",
				className: Object(c.a)(h.a.title, Object(m.b)(e))
			}), a.a.createElement("div", {
				key: "ab",
				className: Object(c.a)(h.a.meta, Object(m.b)(e))
			})), a.a.createElement("div", {
				key: "f",
				className: h.a.flatlist
			}, a.a.createElement("div", {
				key: "fa",
				className: Object(c.a)(h.a.flatlistExpando, Object(m.b)(e))
			}), a.a.createElement("div", {
				key: "fb",
				className: h.a.flatlistSeparator
			}), a.a.createElement("div", {
				key: "fc",
				className: Object(c.a)(h.a.flatListItemOne, Object(m.b)(e))
			}), a.a.createElement("div", {
				key: "fd",
				className: Object(c.a)(h.a.flatListItemTwo, Object(m.b)(e))
			})))))))
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var o = s("./node_modules/react/index.js"),
				a = s.n(o),
				r = s("./src/config.ts"),
				n = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/lib/getShortenedLink.ts"),
				d = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				l = s("./src/reddit/components/CallToActionButton/index.tsx"),
				m = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				p = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				u = s("./src/reddit/components/ExpandoButton/index.tsx"),
				b = s("./src/reddit/components/Flatlist/index.tsx"),
				x = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				h = s("./src/reddit/components/LargePost/index.tsx"),
				O = s("./src/reddit/components/ModModeReports/index.tsx"),
				g = s("./src/reddit/components/ModModeReports/helpers.ts"),
				E = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				y = s("./src/reddit/components/PostContainer/index.tsx"),
				f = s("./src/reddit/components/PostMedia/index.tsx"),
				v = s("./src/reddit/components/PostMeta/index.tsx"),
				j = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				P = s("./src/reddit/components/PostTitle/index.tsx"),
				_ = s("./src/reddit/components/PostTopMeta/index.tsx"),
				S = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				C = s("./src/reddit/models/Media/index.ts"),
				N = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				w = s("./node_modules/react-redux/es/index.js"),
				k = s("./node_modules/reselect/es/index.js"),
				L = s("./src/reddit/actions/post.ts"),
				M = s("./src/reddit/actions/tooltip.ts"),
				I = s("./src/reddit/models/Vote/index.ts"),
				T = s("./src/reddit/contexts/InsideOverlay.tsx"),
				R = s("./src/reddit/contexts/PageLayer/index.tsx"),
				V = s("./src/reddit/selectors/activeModalId.ts"),
				F = s("./src/reddit/selectors/experiments/chatPost.ts"),
				A = s("./src/reddit/selectors/experiments/m2mHomeRedirect.ts"),
				B = s("./src/reddit/selectors/moderatorPermissions.ts"),
				D = s("./src/reddit/selectors/monthsToMinutes.ts"),
				U = s("./src/reddit/selectors/postFlair.ts"),
				W = s("./src/reddit/selectors/posts.ts"),
				H = s("./src/reddit/selectors/user.ts");
			const K = {
					autoplayPref: H.b,
					activeModalId: V.a,
					crosspost: W.c,
					currentUser: H.i,
					isActive: W.g,
					isChatPostExperiment: F.d,
					isCurrentUserProfilePost: W.h,
					isExpanded: W.j,
					isFrontpageHome: D.g,
					isM2MHomeRedirectEnabled: A.c,
					isMeta: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(W.o)(e, s)
					},
					language: H.S,
					moderatorPermissions: B.i,
					modModeEnabled: R.O,
					post: W.I,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: U.a,
					showMedia: R.r,
					subredditOrProfile: W.T,
					userIsOp: H.jb,
					flairStyleTemplate: R.Q
				},
				Z = (e, t) => {
					let {
						listingKey: s,
						listingName: o,
						postId: a
					} = t;
					return {
						handleVote: t => {
							const s = t === I.a.upvoted ? Object(L.N)(a) : Object(L.o)(a);
							e(s)
						},
						onIgnoreReports: () => e(Object(L.L)(a)),
						onOpenReportsDropdown: t => e(Object(M.g)({
							tooltipId: t
						}))
					}
				},
				X = Object(w.b)(() => Object(k.c)(K), Z, (e, t, s) => Object.assign({}, e, t, s, {
					formatTitle: e => e.title
				}));
			s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./node_modules/core-js/modules/es6.regexp.constructor.js");
			var Q = s("./src/lib/LRUCache/index.ts");
			const z = Object(R.t)({
					searchQuery: R.U
				}),
				G = new Q.a(250),
				Y = e => {
					const t = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const s = "".concat(e.id, "-").concat(t);
						let o = G.get(s);
						if (void 0 === o) {
							const r = new RegExp("(\\b".concat(t, "\\b)"), "gi"),
								n = e.title.split(r);
							for (let e = 1; e < n.length; e += 2) n[e] = a.a.createElement("em", {
								style: {
									fontWeight: 700
								}
							}, n[e]);
							o = a.a.createElement("span", {
								style: {
									fontWeight: "normal"
								}
							}, a.a.Children.toArray(n)), G.set(s, o)
						}
						return o
					}
				},
				J = Object(w.b)(() => Object(k.c)(K), Z, (e, t, s) => Object.assign({}, e, t, s, {
					formatTitle: Y(s.searchQuery || "")
				}));
			var q = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				$ = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				ee = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				te = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				se = s.n(te),
				oe = s("./src/reddit/components/ClassicPost/index.m.less"),
				ae = s.n(oe);

			function re() {
				return (re = Object.assign || function(e) {
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
			class ce extends a.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						className: e,
						currentUser: t,
						handleVote: s,
						isExpanded: o,
						isMeta: c,
						inSubredditOrProfile: f,
						eventFactory: w,
						first: k,
						flairStyleTemplate: L,
						formatTitle: M,
						isCheckboxSelected: I,
						isCurrentUserProfilePost: T,
						isFrontpage: R,
						isFrontpageHome: V,
						isM2MHomeRedirectEnabled: F,
						isOverlay: A,
						language: B,
						moderatorPermissions: D,
						modModeEnabled: U,
						onClickPost: W,
						onIgnoreReports: H,
						onOpenReportsDropdown: K,
						poll: Z,
						post: X,
						redditStyle: Q,
						scrollerItemRef: z,
						showBulkActionCheckbox: G,
						showEditFlair: Y,
						showMedia: J,
						subredditOrProfile: te,
						toggleCheckbox: oe,
						userIsOp: ce
					} = this.props, de = Q ? void 0 : L, le = this.props.crosspost || void 0, me = Object($.a)(D), pe = Object(q.a)(D), ue = U && $.a, be = !!X.media && X.media.type === C.n.RTJSON, xe = ce && be, he = f && !J, Oe = {
						flairStyleTemplate: de,
						post: X,
						inSubredditOrProfile: f,
						isCurrentUserProfilePost: T,
						isOverlay: A,
						shouldShowSubscribeButton: !(R && V),
						subredditOrProfile: te,
						language: B
					}, ge = a.a.createElement(y.a, {
						className: Object(n.a)(se.a.classicPostStyles, ae.a.postContainer, Object(ee.a)(this.props), k ? ae.a.mFirst : void 0, e),
						isOverlay: A,
						style: Object.assign({}, Object(ee.d)(this.props), Object(ee.b)(this.props.flairStyleTemplate)),
						post: X,
						onClick: W,
						eventFactory: w
					}, Object(h.b)(X, s, G, I, oe, de, Q), a.a.createElement(E.a, {
						"data-click-id": "background",
						flairStyleTemplate: de
					}, a.a.createElement(p.a, {
						className: ae.a.eventMeta,
						post: X,
						language: B
					}), a.a.createElement("div", {
						className: ae.a.mainBody
					}, a.a.createElement("div", {
						className: he ? ae.a.expandoContainer : ae.a.thumbnailContainer
					}, !he && a.a.createElement(N.a, {
						className: ae.a.classicThumbnail,
						crosspost: le && X,
						isMeta: c,
						post: le || X,
						redditStyle: Q,
						templatePlaceholderImage: de && de.postPlaceholderImage
					}), a.a.createElement(u.a, {
						crosspost: le,
						className: ae.a.rightExpando,
						isExpanded: !!o,
						post: X,
						useMediaIcons: !1
					})), a.a.createElement("div", {
						className: ae.a.content,
						"data-click-id": "body",
						style: {
							paddingBottom: "".concat(ne, "px")
						}
					}, a.a.createElement(P.c, {
						className: Z ? ae.a.titleWithPoll : void 0,
						format: M,
						poll: Z,
						post: X,
						redditStyle: Q,
						size: P.b.Medium,
						titleColor: de && de.postTitleColor,
						isM2MHomeRedirectEnabled: F,
						isOverlay: A
					}, X.source && !le && a.a.createElement(S.a, {
						href: X.source.url,
						isSponsored: X.isSponsored,
						source: X.source
					}, Object(i.a)(X))), a.a.createElement(v.a, re({
						key: "PostMeta"
					}, Oe)), U && me && Object(g.c)(X) && a.a.createElement(O.a, {
						language: B,
						onIgnoreReports: H,
						reportable: X
					}), a.a.createElement("div", {
						className: ae.a.spacer
					}), X.source && X.source.url && X.isSponsored && a.a.createElement(d.a, {
						className: ae.a.adLinkWrapper
					}, a.a.createElement(S.a, {
						href: X.source.url.replace(r.a.redditUrl, ""),
						isSponsored: X.isSponsored,
						source: X.source
					}, X.source.displayText), X.callToAction && a.a.createElement(l.a, {
						href: X.source.url.replace(r.a.redditUrl, ""),
						isSponsored: X.isSponsored,
						source: X.source
					}, X.callToAction)), a.a.createElement("div", {
						className: ae.a.flatlistContainer
					}, a.a.createElement(u.a, {
						className: ae.a.leftExpando,
						crosspost: le,
						isExpanded: !!o,
						post: X,
						useMediaIcons: !1
					}), a.a.createElement(m.a, {
						className: ae.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: de,
						model: X,
						onVoteClick: s
					}), a.a.createElement(b.a, {
						className: ae.a.flatlistSeparator
					}), a.a.createElement(b.c, {
						className: ae.a.flatlist,
						currentUser: t,
						hasModFlairPerms: pe,
						hasModPostPerms: me,
						isOverlay: !!A,
						language: B,
						modModeEnabled: U,
						onIgnoreReports: H,
						onOpenReportsDropdown: K,
						post: X,
						showEditPost: xe,
						showEditFlair: Y,
						tooltipType: A ? _.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(j.h)({
							editPost: !ue,
							save: !ue,
							hide: !ue,
							report: !ue
						})
					})), a.a.createElement(x.d, {
						postId: X.id
					}))), ie(X, z, o)));
					return a.a.createElement(a.a.Fragment, null, ge)
				}
			}
			const ie = (e, t, s) => s ? e.crosspostRootId ? a.a.createElement("div", {
					className: ae.a.crosspostMediaWrapper
				}, de(e, t)) : de(e, t) : null,
				de = (e, t) => a.a.createElement(f.a, {
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
				le = Object(c.a)(ce),
				me = (e => z(J(e)))(le);
			t.b = (e => X(Object(T.b)(e)))(le)
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
				a = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/SubredditIcon/index.tsx"),
				d = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				p = s("./src/reddit/models/Vote/index.ts"),
				u = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				b = s.n(u),
				x = s("./src/reddit/components/CompactPost/Placeholder/index.m.less"),
				h = s.n(x);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const g = Object(l.t)(),
				E = Object(n.c)({
					isFakeSubreddit: l.y
				}),
				y = Object(r.b)(E),
				f = e => {
					const t = {
						interactive: !1,
						voteState: p.a.notVoted
					};
					return a.a.createElement("div", {
						className: h.a.emptyVotes
					}, a.a.createElement(d.d, O({
						key: "u"
					}, t)), a.a.createElement("div", {
						key: "s",
						className: h.a.emptyScore
					}), a.a.createElement(d.c, O({
						key: "d"
					}, t)))
				},
				v = e => a.a.createElement(i.a, {
					className: Object(m.a)(e)
				}),
				j = e => a.a.createElement("div", {
					className: h.a.flatList
				}, a.a.createElement("div", {
					className: Object(c.a)(h.a.comments, Object(m.b)(e))
				}), a.a.createElement("div", {
					className: Object(c.a)(h.a.ellipsis, Object(m.b)(e))
				}));
			t.a = g(y(e => a.a.createElement("div", {
				className: Object(c.a)(e.className, b.a.compactPostStyles, b.a.classicAndCompactPlaceholderStyles)
			}, a.a.createElement("div", {
				className: h.a.wrapper
			}, a.a.createElement(f, O({
				key: "c"
			}, e)), a.a.createElement("div", {
				key: "a",
				className: h.a.expandoContainer
			}, a.a.createElement("div", {
				className: Object(c.a)(h.a.expando, Object(m.a)(e))
			})), a.a.createElement("div", {
				key: "d",
				className: h.a.subredditIconContainer
			}, a.a.createElement(v, {
				isLoading: !1
			})), a.a.createElement("div", {
				key: "e",
				className: h.a.topLine
			}, a.a.createElement("div", {
				key: "ea",
				className: Object(c.a)(h.a.title, Object(m.b)(e))
			}), a.a.createElement("div", {
				key: "eb",
				className: Object(c.a)(h.a.meta, Object(m.b)(e))
			})), a.a.createElement(j, O({
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
				a = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				n = (s("./node_modules/react-router-dom/esm/react-router-dom.js"), s("./node_modules/reselect/es/index.js")),
				c = s("./src/config.ts"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/constants/postLayout.ts"),
				p = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				u = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				b = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				x = s("./src/reddit/helpers/trackers/post.ts"),
				h = s("./src/reddit/models/Media/index.ts"),
				O = s("./src/reddit/models/User/index.ts"),
				g = s("./src/reddit/models/Vote/index.ts"),
				E = s("./src/reddit/actions/post.ts"),
				y = s("./src/reddit/actions/postFlair.ts"),
				f = s("./src/reddit/actions/tooltip.ts"),
				v = s("./src/reddit/selectors/activeModalId.ts"),
				j = s("./src/reddit/selectors/experiments/adSidebar.ts"),
				P = s("./src/reddit/selectors/moderatorPermissions.ts"),
				_ = s("./src/reddit/selectors/postFlair.ts"),
				S = s("./src/reddit/selectors/posts.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				N = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				w = s("./src/reddit/components/AwardBadges/index.tsx"),
				k = s("./src/reddit/components/CallToActionButton/index.tsx"),
				L = s("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				M = s("./src/reddit/components/CommentsLink/index.tsx"),
				I = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				T = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				R = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				V = s("./src/reddit/components/ExpandoButton/index.tsx"),
				F = s("./src/reddit/components/Flatlist/index.tsx"),
				A = s("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				B = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				D = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				U = s("./src/reddit/components/ModModeReports/index.tsx"),
				W = s("./src/reddit/components/ModModeReports/helpers.ts"),
				H = s("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				K = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				Z = s("./src/reddit/components/PostBadges/index.tsx"),
				X = s("./src/reddit/components/PostContainer/index.tsx"),
				Q = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				z = s("./src/reddit/components/PostLeftRail/index.tsx"),
				G = s("./src/reddit/components/PostMedia/index.tsx"),
				Y = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				J = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				q = s("./src/reddit/components/PostTitle/index.tsx"),
				$ = s("./src/reddit/components/PostTopMeta/index.tsx"),
				ee = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				te = s("./src/reddit/components/SponsoredLabel/index.tsx"),
				se = (s("./src/reddit/components/SubredditIcon/index.tsx"), s("./src/reddit/components/VerticalVotes/index.tsx")),
				oe = s("./src/reddit/components/ViewReportsDropdown/index.tsx"),
				ae = s("./src/reddit/contexts/InsideOverlay.tsx"),
				re = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ne = s("./src/reddit/controls/Checkbox/index.tsx"),
				ce = s("./src/reddit/controls/MetaData/index.tsx"),
				ie = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				de = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				le = s("./src/reddit/helpers/postEvent.ts"),
				me = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				pe = s("./src/reddit/icons/fonts/Report/index.tsx"),
				ue = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				be = s.n(ue),
				xe = s("./src/reddit/components/CompactPost/index.m.less"),
				he = s.n(xe);

			function Oe() {
				return (Oe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var ge = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (o = Object.getOwnPropertySymbols(e); a < o.length; a++) t.indexOf(o[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[a]) && (s[o[a]] = e[o[a]])
				}
				return s
			};
			const Ee = e => {
					var {
						isCompact: t
					} = e, s = ge(e, ["isCompact"]);
					return a.a.createElement(V.a, Oe({
						className: Object(i.a)(he.a.responsiveExpandoButton, {
							[he.a.mHideAboveSmallTablets]: !!t,
							[he.a.mHideBelowSmallTablets]: !t
						})
					}, s))
				},
				ye = Object(r.b)(() => Object(n.c)({
					activeModalId: v.a,
					crosspost: S.c,
					currentUser: C.i,
					flairStyleTemplate: re.Q,
					isActive: S.g,
					isExpanded: S.j,
					language: C.S,
					layout: re.M,
					moderatorPermissions: P.i,
					modModeEnabled: re.O,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						if (s) return e.polls.models[s]
					},
					post: S.I,
					showEditFlair: _.a,
					subredditOrProfile: S.T,
					userIsOp: C.jb,
					isInAdLeftSidebarExperiment: j.a
				}), (e, t) => {
					let {
						listingKey: s,
						listingName: o,
						postId: a
					} = t;
					return {
						dispatchFlairChanged: t => {
							let {
								post: s,
								previewFlair: o,
								selectedTemplateId: a
							} = t;
							return e(Object(y.h)({
								post: s,
								previewFlair: o,
								selectedTemplateId: a
							}))
						},
						handleVote: t => {
							const s = t === g.a.upvoted ? Object(E.N)(a) : Object(E.o)(a);
							e(s)
						},
						onIgnoreReports: () => e(Object(E.L)(a)),
						onOpenReportsDropdown: t => e(Object(f.g)({
							tooltipId: t
						}))
					}
				}, (e, t, s) => Object.assign({}, s, e, t, {
					onFlairChanged: s => {
						let {
							previewFlair: o,
							selectedTemplateId: a
						} = s;
						return t.dispatchFlairChanged({
							post: e.post,
							previewFlair: o,
							selectedTemplateId: a
						})
					}
				}));
			class fe extends a.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						activeModalId: e,
						className: t,
						currentProfileName: s,
						crosspost: o,
						currentUser: r,
						eventFactory: n,
						flairStyleTemplate: d,
						handleVote: l,
						isCheckboxSelected: g = !1,
						isCommentsPage: E,
						isCommentPermalink: y,
						isExpanded: f,
						isInAdLeftSidebarExperiment: v,
						isOverlay: j,
						isProfilePostListing: P,
						inSubredditOrProfile: _ = !1,
						language: S,
						layout: C,
						moderatorPermissions: V,
						modModeEnabled: G,
						onClickPost: te,
						onFlairChanged: ae,
						onIgnoreReports: re,
						poll: ce,
						post: ue,
						subredditOrProfile: xe,
						userIsOp: Oe,
						hideModTools: ge,
						scrollerItemRef: Ee,
						showBulkActionCheckbox: ye,
						showEditFlair: fe,
						toggleCheckbox: je,
						tooltipType: Se,
						sendEvent: Ce
					} = this.props, Ne = !!ue.media && ue.media.type === h.n.RTJSON, we = Oe && Ne, ke = Object(Q.b)(ue.id, j), Le = Object(p.a)(V), Me = Object(de.a)(V), Ie = "-mod-actions-menu-".concat(ue.id), Te = !!r && Object(O.f)(r) === ue.author, Re = Object(W.c)(ue), Ve = Object(A.a)("View--Reports", ue.id, Se), Fe = Object(W.a)(ue), Ae = !(j || E || y), Be = e => Ce(Object(x.f)(ue.id, e)), De = a.a.createElement(X.a, {
						className: Object(i.a)(be.a.compactPostStyles, he.a.postContainer, Object(b.a)(this.props), t),
						isOverlay: j,
						style: Object.assign({}, Object(b.d)(this.props), Object(b.b)(this.props.flairStyleTemplate)),
						post: ue,
						onClick: te,
						eventFactory: n
					}, a.a.createElement("div", {
						className: he.a.compactWrapper
					}, a.a.createElement("div", {
						className: he.a.leftRailWrapper
					}, a.a.createElement("div", {
						className: he.a.leftRail,
						style: {
							borderColor: Object(z.c)({
								isRemoved: !!ue.bannedBy,
								isReported: Object(u.a)(ue),
								isSponsored: ue.isSponsored,
								theme: this.props.theme,
								isInAdLeftSidebarExperiment: v
							})
						}
					}, ye && a.a.createElement(ne.a, {
						className: he.a.bulkActionCheckbox,
						isCheckboxSelected: g,
						toggleCheckbox: je
					}), a.a.createElement(se.a, {
						className: he.a.verticalVotes,
						compact: !0,
						flairStyleTemplate: d,
						model: ue,
						onVoteClick: l
					}), a.a.createElement(I.a, {
						className: he.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: d,
						model: ue,
						onVoteClick: l
					}))), a.a.createElement(K.a, {
						className: Object(i.a)(he.a.content, {
							[he.a.isEvent]: Object(le.a)(ue)
						}),
						"data-click-id": "background",
						flairStyleTemplate: d
					}, a.a.createElement(R.a, {
						isCompactMode: !0,
						language: S,
						post: ue
					}), a.a.createElement("div", {
						className: he.a.compactPostRow
					}, !ge && Pe(ue, o, f, !1), !_ && !ue.isSponsored && a.a.createElement(B.h, {
						type: ue.belongsTo.type,
						id: ue.belongsTo.id
					}), a.a.createElement("div", {
						className: he.a.topLine,
						"data-click-id": "body"
					}, a.a.createElement(q.c, {
						post: ue,
						poll: ce,
						size: q.b.Small,
						titleColor: d && d.postTitleColor,
						isOverlay: !1
					}), _e(ue, xe, S), a.a.createElement($.d, {
						className: he.a.postTopMeta,
						flairStyleTemplate: d,
						language: S,
						post: ue,
						showSub: !!xe && !_ && !ue.isSponsored,
						subredditOrProfile: xe
					}), a.a.createElement(Z.a, {
						className: he.a.postBadges,
						displayText: xe ? xe.displayText : null,
						inSubredditOrProfile: _,
						language: S,
						post: ue
					}), xe && a.a.createElement(T.a, {
						className: he.a.donationAmount,
						contentId: ue.id,
						subredditId: xe.id
					}), a.a.createElement(w.a, {
						isOverlay: j,
						tooltipType: Se,
						thing: ue
					})), Ae && a.a.createElement("div", null, a.a.createElement(L.a, {
						className: he.a.liveDiscussionIcon,
						isMod: Le,
						postId: ue.postId
					})), a.a.createElement("div", {
						className: he.a.flatList
					}, a.a.createElement(M.a, {
						className: he.a.commentsLink,
						hasModPostPerms: Le,
						isCommentsPage: E,
						isCommentPermalink: y,
						isOverlay: j,
						postId: ue.id,
						modModeEnabled: G,
						numComments: ue.numComments,
						type: m.g.Compact
					}), a.a.createElement(H.a, {
						className: he.a.modToolsFlatlist,
						isOverlay: !1,
						layout: C,
						modModeEnabled: G,
						post: ue,
						sendEvent: Ce,
						showIconsOnly: !0
					}), Le && a.a.createElement(D.a, {
						dropdownId: Ie,
						onClick: () => Be("post_mod_action_menu")
					}, a.a.createElement(F.b, null), a.a.createElement(Y.a, {
						canEditFlair: Me && fe,
						hasModPostPerms: Le,
						isOverlay: !1,
						isPostAuthor: Te,
						language: S,
						modModeEnabled: G,
						post: ue,
						tooltipId: Ie
					})), Le && Re && !G && a.a.createElement(ee.c, {
						text: "".concat(Fe),
						onClick: () => {
							this.props.onOpenReportsDropdown(Ve), Be("post_report_menu")
						},
						id: Ve
					}, a.a.createElement(oe.a, {
						model: ue,
						onIgnoreReports: () => {
							re(), Be(ue.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: Ve
					}), ue.ignoreReports ? a.a.createElement(me.a, null) : a.a.createElement(pe.a, null)), a.a.createElement(J.g, {
						currentProfileName: s,
						isCommentsPage: E,
						isOverlay: !1,
						isProfilePostListing: P,
						layout: C,
						permalink: ue.permalink,
						postId: ue.postId,
						sendEvent: Ce,
						showEditPost: we,
						showEditFlair: fe,
						dropdownId: "".concat(ue.id, "-overflow-menu"),
						useFlatlistBreakpoints: Object(J.h)({
							share: !1,
							editPost: !1,
							save: !1,
							gild: !1,
							hide: !1,
							report: !1
						})
					}), !ge && Pe(ue, o, f, !0))), ue.source && ue.source.url && ue.isSponsored && a.a.createElement(N.a, {
						className: he.a.adLinkWrapper
					}, a.a.createElement(ie.a, {
						href: ue.source.url.replace(c.a.redditUrl, ""),
						isSponsored: ue.isSponsored,
						source: ue.source
					}, ue.source.displayText), ue.callToAction && a.a.createElement(k.a, {
						href: ue.source.url.replace(c.a.redditUrl, ""),
						isSponsored: ue.isSponsored,
						source: ue.source,
						isNotCardView: !0
					}, ue.callToAction)), G && Le && Re && a.a.createElement("div", {
						className: he.a.compactPostRow
					}, a.a.createElement(U.a, {
						language: S,
						onIgnoreReports: re,
						reportable: ue
					})), a.a.createElement(B.d, {
						postId: ue.id
					}))), f && a.a.createElement(ve, {
						post: ue,
						scrollerItemRef: Ee,
						flairStyleTemplate: d
					}), e === ke && a.a.createElement(Q.a, {
						flairs: ue.flair,
						subredditId: ue.belongsTo.id,
						modalId: ke,
						onFlairChanged: ae
					}));
					return a.a.createElement(a.a.Fragment, null, De)
				}
			}
			const ve = e => a.a.createElement(K.a, {
					className: Object(i.a)(e.className, he.a.expandedContentWrapper),
					flairStyleTemplate: e.flairStyleTemplate
				}, e.post.crosspostRootId ? a.a.createElement("div", {
					className: he.a.crosspostMediaWrapper
				}, je(e.post, e.scrollerItemRef)) : je(e.post, e.scrollerItemRef)),
				je = (e, t) => a.a.createElement(G.a, {
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
				Pe = (e, t, s, o) => a.a.createElement(Ee, {
					crosspost: t,
					isCompact: o,
					isExpanded: s,
					post: e,
					useMediaIcons: !0
				}),
				_e = (e, t, s) => a.a.createElement("div", {
					className: he.a.responsiveMeta
				}, a.a.createElement(ce.b, {
					isScoreHidden: e.scoreHidden,
					language: s,
					score: e.score
				}), a.a.createElement(ce.c, null), Object(ce.d)(e.numComments, s), a.a.createElement(ce.c, null), t && a.a.createElement("a", {
					href: t.url
				}, a.a.createElement(ce.a, null, t.displayText)), e.isSponsored && [a.a.createElement(te.a, {
					key: "label"
				}), a.a.createElement(ce.c, {
					key: "separator"
				})], !e.isSponsored && a.a.createElement(ce.a, null, " Posted by "), a.a.createElement($.b, {
					post: e
				}));
			t.a = ye(Object(l.b)(Object(ae.b)(Object(d.a)(fe))))
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
		"./src/reddit/components/PostList/LoadMore.m.less": function(e, t, s) {
			e.exports = {
				Component: "_3tBFh6Ty3gSaxW4gcm6hZ_",
				component: "_3tBFh6Ty3gSaxW4gcm6hZ_"
			}
		},
		"./src/reddit/components/PostList/LoadMore.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/PostList/Placeholder.tsx"),
				r = s("./src/reddit/components/PostList/LoadMore.m.less"),
				n = s.n(r);
			t.a = o.a.wrapped(a.a, "Component", n.a)
		},
		"./src/reddit/components/PostList/Placeholder.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/lodash/constant.js"),
				a = s.n(o),
				r = s("./node_modules/lodash/times.js"),
				n = s.n(r),
				c = s("./node_modules/react/index.js"),
				i = s.n(c),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/fastdom/index.ts"),
				p = s("./src/lib/intersectionObserver/index.ts"),
				u = s("./src/reddit/constants/postLayout.ts"),
				b = s("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				x = s("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				h = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./src/lib/classNames/index.ts")),
				O = s("./src/reddit/components/PostLeftRail/index.tsx"),
				g = s("./src/reddit/components/SubredditIcon/index.tsx"),
				E = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				y = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				v = s("./src/reddit/models/Vote/index.ts"),
				j = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				P = s.n(j),
				_ = s("./src/reddit/components/LargePost/placeholder.m.less"),
				S = s.n(_);

			function C() {
				return (C = Object.assign || function(e) {
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
					var a = 0;
					for (o = Object.getOwnPropertySymbols(e); a < o.length; a++) t.indexOf(o[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[a]) && (s[o[a]] = e[o[a]])
				}
				return s
			};
			const w = Object(y.t)(),
				k = Object(l.c)({
					isFakeSubreddit: y.y
				}),
				L = Object(d.b)(k),
				M = e => {
					const t = {
						interactive: !1,
						voteState: v.a.notVoted
					};
					return i.a.createElement("div", {
						className: S.a.emptyVerticalVotes
					}, i.a.createElement(E.d, C({
						key: "u"
					}, t)), i.a.createElement("div", {
						className: S.a.emptyScore,
						key: "s"
					}), i.a.createElement(E.c, C({
						key: "d"
					}, t)))
				},
				I = e => {
					var {
						isLoading: t
					} = e, s = N(e, ["isLoading"]);
					return i.a.createElement(g.b, C({
						className: Object(f.a)({
							isLoading: t
						})
					}, s))
				};
			var T = w(L(e => {
				var {
					className: t,
					dispatch: s,
					pageLayer: o
				} = e, a = N(e, ["className", "dispatch", "pageLayer"]);
				return i.a.createElement("div", {
					className: Object(h.a)(P.a.baseLargeAndMediumPostStyles, t)
				}, i.a.createElement(O.b, {
					key: "a"
				}, i.a.createElement(M, a)), i.a.createElement("div", {
					className: S.a.content,
					key: "b"
				}, i.a.createElement("div", {
					className: S.a.topLine,
					key: "ba"
				}, a.isFakeSubreddit && i.a.createElement(I, {
					key: "baa",
					isLoading: !1
				}), i.a.createElement("div", {
					key: "bab",
					className: Object(h.a)(S.a.topMetaOne, Object(f.b)(a))
				}), i.a.createElement("div", {
					key: "bac",
					className: Object(h.a)(S.a.topMetaTwo, Object(f.b)(a))
				})), i.a.createElement("div", {
					key: "bb",
					className: Object(h.a)(S.a.title, Object(f.b)(a))
				})), i.a.createElement("div", {
					key: "c",
					className: Object(h.a)(S.a.media, Object(f.a)(a))
				}), i.a.createElement("div", {
					className: S.a.content,
					key: "d"
				}, i.a.createElement("div", {
					className: S.a.flatlist
				}, i.a.createElement("div", {
					className: Object(h.a)(S.a.flatlistItemOne, Object(f.b)(a))
				}), i.a.createElement("div", {
					className: Object(h.a)(S.a.flatListItemTwo, Object(f.b)(a))
				}))))
			}));
			const R = {
				[u.g.Large]: [T, 2],
				[u.g.Classic]: [b.b, 10],
				[u.g.Compact]: [x.a, 30]
			};

			function V(e) {
				return R[e]
			}
			const F = .1,
				A = Object(l.c)({
					loadingPostComponentForLayout: () => V
				}),
				B = Object(d.b)(A);
			class D extends i.a.Component {
				constructor() {
					super(...arguments), this.mounted = !1, this.state = {
						visible: !1
					}, this.setWrapperRef = e => {
						e !== this.wrapperRef && (this.wrapperRef && p.b(this.wrapperRef), e && p.a(e, this.updateVisibleState)), this.wrapperRef = e
					}, this.updateVisibleState = e => {
						const t = e.intersectionRatio >= F;
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
						loadingPostComponentForLayout: r
					} = this.props, {
						visible: c
					} = this.state, [d, l] = r(o), m = t || l, p = a()(i.a.createElement(d, {
						isLoading: s && c
					})), u = n()(m, p);
					return i.a.createElement("div", {
						className: e,
						ref: this.setWrapperRef
					}, i.a.Children.toArray(u))
				}
			}
			t.a = B(D)
		},
		"./src/reddit/components/PostList/SomethingWrong.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./src/reddit/connectors/connectToLanguage.ts"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				i = s("./src/reddit/helpers/describeApiError/index.ts"),
				d = s("./src/reddit/components/PostList/index.m.less"),
				l = s.n(d);
			t.a = Object(n.a)(e => {
				const {
					language: t,
					onTryAgain: s,
					apiError: a
				} = e;
				let n = o.fbt._("Something went wrong while loading.", null, {
					hk: "1ijaef"
				});
				return a && (n = Object(i.a)({
					apiError: a,
					language: t,
					isLoggedOut: !1
				})), r.a.createElement("div", {
					className: l.a.somethingWrong
				}, r.a.createElement("div", {
					className: l.a.somethingWrongText
				}, n), s && r.a.createElement(c.f, {
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
		"./src/reddit/connectors/connectToLanguage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/selectors/user.ts");
			const n = Object(a.c)({
				language: r.S
			});

			function c(e) {
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
				a = s.n(o),
				r = s("./src/app/strings/index.ts"),
				n = s("./src/lib/lessComponent.tsx"),
				c = s("./src/lib/prettyPrintNumber/index.ts"),
				i = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/i18n/utils.ts")),
				d = s("./src/reddit/controls/MetaData/index.m.less"),
				l = s.n(d),
				m = function(e, t) {
					var s = {};
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (o = Object.getOwnPropertySymbols(e); a < o.length; a++) t.indexOf(o[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[a]) && (s[o[a]] = e[o[a]])
					}
					return s
				};
			const p = n.a.span("metaText", l.a),
				u = e => a.a.createElement(p, e, " · "),
				b = Object(r.d)("comment.point"),
				x = e => {
					var {
						isScoreHidden: t,
						language: s,
						score: o,
						useUpvotes: r
					} = e, n = m(e, ["isScoreHidden", "language", "score", "useUpvotes"]);
					const d = Object(c.b)(o),
						l = Object(i.c)("\n    ".concat(Object(i.b)("score", d), " ").concat(Object(i.a)("upvotes", ["upvote", "upvotes"], o), "\n  ")),
						u = t ? Object(i.c)("Score hidden") : r ? l : b(s, o, {
							count: d
						});
					return a.a.createElement(p, n, u)
				},
				h = (e, t) => {
					const s = Object(r.c)(t, "posts.comments.noun", e, {
						count: Object(c.b)(e)
					});
					return a.a.createElement(p, null, s)
				}
		},
		"./src/reddit/helpers/describeApiError/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/app/strings/index.ts"),
				a = s("./src/lib/constants/index.ts");

			function r(e) {
				let {
					apiError: t,
					isLoggedOut: s,
					language: r
				} = e;
				switch (t.type) {
					case a.D.AUTHORIZATION_ERROR:
						return s ? Object(o.a)(r, "error.type.notLoggedIn") : Object(o.a)(r, "error.type.notAuthorized");
					case a.D.VALIDATION_ERROR:
						return Object(o.a)(r, "error.type.validation");
					case a.D.NOT_FOUND_ERROR:
						return Object(o.a)(r, "error.type.notFound");
					case a.D.SERVER_ERROR:
						return Object(o.a)(r, "error.type.server");
					case a.D.LIKELY_UBLOCK_ERROR:
						return Object(o.a)(r, "error.type.blocked");
					default:
						return Object(o.a)(r, "error.type.generic")
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
			s.d(t, "a", (function() {
				return x
			})), s.d(t, "b", (function() {
				return g
			}));
			var o = s("./node_modules/react/index.js"),
				a = s.n(o),
				r = s("./src/lib/isUrl/index.ts"),
				n = s("./src/lib/logs/console.ts"),
				c = s("./src/reddit/components/BlankPost/index.tsx"),
				i = s("./src/reddit/components/ClassicPost/index.tsx"),
				d = s("./src/reddit/components/CompactPost/index.tsx"),
				l = s("./src/reddit/components/LargePost/index.tsx"),
				m = s("./src/reddit/components/MediumPost/index.tsx"),
				p = s("./src/reddit/constants/postLayout.ts"),
				u = s("./src/reddit/models/Media/index.ts");
			const b = {
					[p.g.Large]: l.a,
					[p.g.Medium]: m.b,
					[p.g.Classic]: i.b,
					[p.g.Compact]: d.a
				},
				x = e => a.a.createElement(c.b, e),
				h = ["https://www.mcdonalds.com", "https://d2n94wep25xhn0.cloudfront.net", "https://www.dyson.com", "https://dyson.com"],
				O = e => !e.media || e.media.type === u.n.EMBED && !(u.b.has(e.media.provider) || (e => e.source && e.source.url && e.isSponsored && h.some(t => e.source.url.startsWith(t)))(e));

			function g(e) {
				let {
					isCrosspost: t,
					isFirstPost: s,
					layout: o,
					post: a
				} = e;
				if (a.isBlank) return x;
				const c = !a.media && !!a.source && Object(r.a)(a.source.url),
					i = t && c;
				o === p.g.Large && O(a) && !i && (o = p.g.Medium);
				const d = b[o];
				return void 0 === d ? (Object(n.a)(void 0, "Could not find component for layout ".concat(o, ".")), x) : s && a.isSponsored && o === p.g.Large ? m.b : d
			}
		}
	}
]);
//# sourceMappingURL=Frontpage~ModQueuePages~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate~Sear~eb23b26b.5084e16d80a3d8ca9f41.js.map