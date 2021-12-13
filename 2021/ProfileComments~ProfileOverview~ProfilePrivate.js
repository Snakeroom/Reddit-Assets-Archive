// https://www.redditstatic.com/desktop2x/ProfileComments~ProfileOverview~ProfilePrivate.f522191eb2b157fab4cf.js
// Retrieved at 12/13/2021, 9:40:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileComments~ProfileOverview~ProfilePrivate"], {
		"./node_modules/lodash/take.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseSlice.js"),
				o = s("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, s) {
				return e && e.length ? (t = s || void 0 === t ? 1 : o(t), n(e, 0, t < 0 ? 0 : t)) : []
			}
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "SearchResultsClassicPost", (function() {
				return oe
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/ads/index.ts"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/getShortenedLink.ts"),
				c = s("./src/lib/hooks/usePrevious.ts"),
				l = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				m = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				p = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				u = s("./src/config.ts"),
				h = s("./node_modules/react-redux/es/index.js"),
				b = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/components/Econ/Audio/index.m.less"),
				f = s.n(x),
				v = s("./src/reddit/components/Econ/Audio/MuteIcon.tsx"),
				g = s("./src/reddit/components/Econ/Audio/SpeakerRings.tsx");
			const {
				fbt: E
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var y = ({
					post: e
				}) => {
					const {
						audioRoom: t
					} = e, s = () => Math.floor(10 * Math.random() + 1), r = Object(h.e)(b.X), [a, d] = Object(n.useState)(!1), [c, l] = Object(n.useState)(s());
					return Object(n.useEffect)(() => {
						const e = setInterval(() => {
							d(!0), setTimeout(() => d(!1), 3500), l(s())
						}, 6e3);
						return () => clearInterval(e)
					}, []), (null == t ? void 0 : t.isLive) ? o.a.createElement("a", {
						href: `https://www.reddit.com/talk/${t.roomId}`,
						target: "_blank",
						rel: "noopener noreferrer",
						className: f.a.liveClassicContainer,
						"data-testid": "audioroom-classic-live"
					}, o.a.createElement("div", {
						className: f.a.classicSpeaker
					}, a && o.a.createElement(g.a, {
						className: Object(i.a)(f.a.speakerRings, {
							[f.a.nightMode]: r
						})
					}), o.a.createElement("img", {
						key: `audioPostAvatar--${c}`,
						className: f.a.snoovatar,
						src: `${u.a.assetPath}/img/talk/avatars/${c}.png`,
						alt: E._("Reddit Talk", null, {
							hk: "XNl4V"
						})
					}), !a && o.a.createElement("div", {
						className: f.a.muteContainer
					}, o.a.createElement(v.a, {
						className: f.a.muteIcon
					})))) : o.a.createElement("div", {
						className: f.a.endedClassicContainer
					}, o.a.createElement(v.a, {
						className: f.a.muteIcon
					}))
				},
				C = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				O = s("./src/reddit/components/ExpandoButton/index.tsx"),
				_ = s("./src/reddit/components/Flatlist/index.tsx"),
				j = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				k = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				P = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				w = s("./src/reddit/components/ModModeReports/index.tsx"),
				I = s("./src/reddit/components/ModModeReports/helpers.ts"),
				M = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				N = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				L = s("./src/reddit/components/PostContainer/index.tsx"),
				S = s("./src/reddit/components/PostMeta/index.tsx"),
				T = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				R = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				A = s("./src/reddit/components/PostTitle/index.tsx"),
				F = s("./src/reddit/components/PostTopMeta/index.tsx"),
				D = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				W = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				B = s("./src/reddit/models/Audio/index.ts"),
				U = s("./src/reddit/models/Media/index.ts"),
				V = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				z = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				q = s("./src/reddit/connectors/ClassicPost/searchResults.tsx"),
				H = s("./src/reddit/constants/postLayout.ts"),
				K = s("./src/reddit/contexts/Post/index.tsx"),
				$ = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				G = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				Z = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				J = s("./src/reddit/helpers/search/renderMedia.tsx"),
				Q = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				Y = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				X = s.n(Y),
				ee = s("./src/reddit/components/ClassicPost/index.m.less"),
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
			const ne = Object(a.a)(e => {
					const {
						className: t,
						crosspost: s,
						currentUser: a,
						handleVote: u,
						isExpanded: h,
						inSubredditOrProfile: b,
						eventFactory: x,
						first: f,
						flairStyleTemplate: v,
						formatTitle: g,
						hostPostData: E,
						isCheckboxSelected: z,
						isCurrentUserProfilePost: q,
						isFrontpage: K,
						isGalleryTileLayoutDefault: Y,
						isLoggedIn: ee,
						isOverlay: ne,
						imageGalleryCurrentItem: oe,
						moderatorPermissions: re,
						modModeEnabled: ie,
						onClickPost: ae,
						onIgnoreReports: de,
						onOpenReportsDropdown: ce,
						onSizeChanged: le,
						poll: me,
						post: pe,
						postId: ue,
						redditStyle: he,
						scrollerItemRef: be,
						showBulkActionCheckbox: xe,
						showEditFlair: fe,
						showMedia: ve,
						subredditOrProfile: ge,
						toggleCheckbox: Ee,
						userIsOp: ye,
						shouldShowGalleryTileOption: Ce,
						showPromotedCTA: Oe
					} = e, _e = Object(c.a)(h);
					Object(n.useEffect)(() => {
						le && _e !== h && le(pe.id)
					}, [h, le, pe.id, _e]);
					const je = he ? void 0 : v,
						ke = s || void 0,
						Pe = Object(Z.a)(re),
						we = Object($.a)(re),
						Ie = Object(G.a)(re),
						Me = ie && Z.a,
						Ne = Object(P.a)(pe),
						Le = Object(I.c)(pe),
						Se = !!pe.media && pe.media.type === U.o.RTJSON,
						Te = ye && Se,
						Re = b && !ve,
						Ae = !!pe.media && Object(U.H)(pe.media),
						Fe = !!pe.recommendationContext,
						De = {
							flairStyleTemplate: je,
							post: pe,
							inSubredditOrProfile: b,
							isCurrentUserProfilePost: q,
							isOverlay: ne,
							shouldShowSubscribeButton: !(K && ee) || Fe && ee,
							subredditOrProfile: ge
						},
						We = Object(r.t)(pe, oe),
						{
							source: Be
						} = We;
					let Ue = o.a.createElement(V.a, {
						className: te.a.classicThumbnail,
						crosspost: ke && pe,
						isMeta: pe.isMeta,
						post: ke || pe,
						redditStyle: he,
						templatePlaceholderImage: je && je.postPlaceholderImage,
						removeLink: Ae
					});
					Object(B.b)(pe) && (Ue = o.a.createElement(y, {
						post: pe
					}));
					const Ve = o.a.createElement(L.a, {
						className: Object(i.a)(X.a.classicPostStyles, te.a.postContainer, Object(Q.a)(e), f ? te.a.mFirst : void 0, t),
						isOverlay: ne,
						style: {
							...Object(Q.d)(e),
							...Object(Q.b)(je)
						},
						post: pe,
						onClick: ae,
						eventFactory: x
					}, o.a.createElement(R.a, {
						model: pe,
						handleVote: u,
						showBulkActionCheckbox: xe,
						isCheckboxSelected: z,
						toggleCheckbox: Ee,
						flairStyleTemplate: je,
						redditStyle: he,
						postId: ue
					}), o.a.createElement(N.a, {
						"data-click-id": "background",
						flairStyleTemplate: je
					}, o.a.createElement(C.a, {
						className: te.a.eventMeta,
						post: pe
					}), o.a.createElement("div", {
						className: te.a.mainBody
					}, o.a.createElement("div", {
						className: Re ? te.a.expandoContainer : te.a.thumbnailContainer
					}, !Re && Ue, o.a.createElement(O.a, {
						crosspost: ke,
						className: te.a.rightExpando,
						isExpanded: !!h,
						post: pe,
						useMediaIcons: !1
					})), o.a.createElement("div", {
						className: Object(i.a)(te.a.content, {
							[te.a.showBulkActionCheckbox]: xe
						}),
						"data-click-id": "body"
					}, !!pe.recommendationContext && o.a.createElement(M.a, {
						content: pe.recommendationContext.content,
						layout: H.g.Classic,
						post: pe
					}), o.a.createElement(A.c, {
						className: me ? te.a.titleWithPoll : void 0,
						format: g,
						poll: me,
						post: pe,
						redditStyle: he,
						size: A.b.Medium,
						titleColor: je && je.postTitleColor,
						isOverlay: ne
					}, pe.source && !ke && o.a.createElement(W.a, {
						href: pe.source.url,
						isSponsored: pe.isSponsored,
						postId: pe.id,
						source: pe.source
					}, Object(d.a)(pe))), o.a.createElement(S.a, se({
						key: "PostMeta"
					}, De)), ie && Pe && Ne && o.a.createElement(k.a, {
						thing: pe
					}), ie && Pe && Le && o.a.createElement(w.a, {
						onIgnoreReports: de,
						reportable: pe
					}), Oe && Be && Be.url && o.a.createElement(l.a, {
						className: te.a.adLinkWrapper
					}, o.a.createElement(m.a, {
						post: pe,
						adLinkContent: We
					})), o.a.createElement("div", {
						className: te.a.flatlistContainer
					}, o.a.createElement(O.a, {
						className: te.a.leftExpando,
						crosspost: ke,
						isExpanded: !!h,
						post: pe,
						useMediaIcons: !1
					}), o.a.createElement(p.a, {
						className: te.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: je,
						model: pe,
						onVoteClick: u
					}), o.a.createElement(_.a, {
						className: te.a.flatlistSeparator
					}), o.a.createElement(_.c, {
						className: te.a.flatlist,
						currentUser: a,
						hasModFlairPerms: we,
						hasModPostPerms: Pe,
						hasModFullPerms: Ie,
						hostPostData: E,
						isOverlay: !!ne,
						modModeEnabled: ie,
						onIgnoreReports: de,
						onOpenReportsDropdown: ce,
						post: pe,
						showEditPost: Te,
						showEditFlair: fe,
						tooltipType: ne ? F.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(T.b)({
							editPost: !Me,
							hide: !Me,
							report: !Me
						})
					})), o.a.createElement(j.d, null))), Object(J.a)(pe, te.a, be, h, Ce, Y)));
					return o.a.createElement(D.b, null, Ve)
				}),
				oe = Object(K.b)(Object(q.a)(ne));
			t.default = Object(z.a)(ne)
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/higherOrderComponents/withClickTracking/index.tsx");
			const c = Object(i.c)({
					clickTrackingId: (e, {
						comment: t
					}) => t.id
				}),
				l = Object(r.b)(c);
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
						style: i
					} = this.props;
					return o.a.createElement("div", {
						className: Object(a.a)(s, `Comment ${n.id}`),
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: t => {
							!this.cancelClick && t.button < 2 && e(() => r && r(t, n))(t)
						},
						style: i
					}, t)
				}
			}
			t.a = l(Object(d.a)(m))
		},
		"./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less": function(e, t, s) {
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
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/objectSelector/index.ts"),
				l = s("./node_modules/lodash/throttle.js"),
				m = s.n(l),
				p = s("./src/lib/fastdom/index.ts"),
				u = s("./src/reddit/components/CommentBodyExpander/index.m.less"),
				h = s.n(u);
			const {
				fbt: b
			} = s("./node_modules/fbt/lib/FbtPublic.js"), x = .75, f = 10 * d.K;
			class v extends o.a.Component {
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
						onClick: this.onShowMore
					}, b._("see more", null, {
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
					var e, t;
					if (this.state.expandToggled) return null;
					!(null === (t = null === (e = this.commentElement) || void 0 === e ? void 0 : e.textContent) || void 0 === t ? void 0 : t.trim().includes("\n")) && (window.addEventListener("resize", this.handleResize), this.handleResize())
				}
				componentWillUnmount() {
					window && window.removeEventListener("resize", this.handleResize)
				}
			}
			var g = v,
				E = s("./node_modules/fbt/lib/FbtPublic.js"),
				y = s("./node_modules/lodash/noop.js"),
				C = s.n(y),
				O = s("./src/lib/makeCommentsPageKey/index.ts"),
				_ = s("./src/lib/makeDraftKey/index.ts"),
				j = s("./src/reddit/actions/comment/index.ts"),
				k = s("./src/reddit/actions/comment/authoring.ts"),
				P = s("./src/reddit/actions/comment/moderation.ts"),
				w = s("./src/reddit/actions/gold/modals.ts"),
				I = s("./src/reddit/actions/modal.ts"),
				M = s("./src/reddit/actions/reportFlow/index.ts"),
				N = s("./src/reddit/actions/tooltip.ts"),
				L = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				S = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				T = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				R = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				A = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				F = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				D = s("./src/reddit/components/ModModeReports/helpers.ts"),
				W = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				B = s("./src/reddit/contexts/InsideOverlay.tsx"),
				U = s("./src/reddit/contexts/PageLayer/index.tsx"),
				V = s("./src/reddit/helpers/correlationIdTracker.ts"),
				z = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				q = s("./src/reddit/helpers/overlay/index.ts"),
				H = s("./src/reddit/helpers/trackers/lightbox.ts"),
				K = s("./src/reddit/models/PostDraft/index.ts"),
				$ = s("./src/reddit/selectors/activeModalId.ts"),
				G = s("./src/reddit/selectors/comments.ts"),
				Z = s("./src/reddit/selectors/moderatorPermissions.ts"),
				J = s("./src/reddit/selectors/posts.ts"),
				Q = s("./src/reddit/selectors/tooltip.ts"),
				Y = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				X = s("./src/reddit/selectors/user.ts"),
				ee = s("./src/reddit/components/OverflowMenu/index.tsx"),
				te = s("./src/reddit/components/ReportFlow/index.tsx"),
				se = s("./src/reddit/components/ReportFlow/new.tsx"),
				ne = s("./src/reddit/components/ShareMenu/index.tsx"),
				oe = s("./src/reddit/components/TrackingHelper/index.tsx"),
				re = s("./src/reddit/controls/Dropdown/Row.tsx"),
				ie = s("./src/reddit/helpers/trackers/modTools.ts"),
				ae = s("./src/reddit/layout/row/Inline/index.tsx"),
				de = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				ce = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				le = s("./src/reddit/icons/fonts/Report/index.tsx"),
				me = s("./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less"),
				pe = s.n(me),
				ue = s("./src/lib/constants/icons.ts"),
				he = s("./src/lib/lessComponent.tsx"),
				be = s("./src/reddit/icons/fonts/index.tsx"),
				xe = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx");
			const fe = he.a.wrapped(ee.b, "OverflowMenu", pe.a),
				ve = he.a.wrapped(S.a, "ModToolsFlatlist", pe.a),
				ge = he.a.wrapped(F.a, "ModActionsMenu", pe.a),
				Ee = he.a.wrapped(re.b, "DropdownRow", pe.a),
				ye = he.a.wrapped(ae.a, "Flatlist", pe.a),
				Ce = he.a.button("Button", pe.a),
				Oe = Object(U.u)(),
				_e = e => `Comment-${e}--Modal--DeleteComment`,
				je = e => `Distinguish--Dropdown--${e}`,
				ke = (e, t) => `${e}--${t}-overflow-menu`,
				Pe = e => `View--Reports--${e}`,
				we = Object(i.c)({
					activeTooltipId: Q.a,
					isConfirmModalOpen: (e, {
						comment: t
					}) => Object($.a)(e) === _e(t.id),
					isPendingDeletion: (e, {
						comment: t
					}) => Object(G.B)(e, {
						commentId: t.postId
					}),
					isLoggedIn: X.K,
					moderatorPermissions: (e, {
						comment: t
					}) => Object(Z.m)(e, {
						subredditId: t.subredditId
					}),
					currentUser: X.k,
					modModeEnabled: U.S,
					postIsLocked: (e, {
						comment: t
					}) => Object(J.C)(e, {
						postId: t.postId
					}),
					commentPermalink: (e, {
						comment: t
					}) => Object(G.m)(e, {
						commentId: t.id
					}),
					reportFlowIsOpen: (e, {
						comment: t
					}) => {
						var s, n;
						return (null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.reportFlow) || void 0 === n ? void 0 : n.postOrCommentId) === t.id
					},
					subreddit: U.r,
					subredditOrProfile: (e, {
						comment: t
					}) => Object(J.U)(e, {
						postId: t.postId
					}),
					reportingRevampEnabled: Y.a
				});
			class Ie extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(ie.a)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleEdit = () => this.props.handleEdit(this.props.commentPermalink), this.handleIgnoreReports = () => {
						this.props.onIgnoreReports(), this.sendCommentReportEvent(this.props.comment.ignoreReports ? "restore_reports" : "ignore_reports")
					}, this.handleGild = async () => {
						const e = Object(V.e)(V.a.GildingFlow, !0);
						this.props.onGildClick(e);
						const {
							clickGildEvent: t
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(t(this.props.comment.id))
					}, this.handleModActionsMenu = () => this.props.sendEvent(Object(ie.a)("comment_mod_action_menu", this.props.comment.id)), this.handleOverflowMenuClick = () => this.props.sendEvent(Object(ie.a)("comment_overflow_menu", this.props.comment.id)), this.handleDelete = () => this.props.handleDelete(), this.handleReply = () => this.props.handleReply(this.props.commentPermalink), this.handleRestrictedButtonClick = () => {
						this.props.onToggleReportsDropdown(), this.sendCommentModEventWithName("comment_report_menu")
					}, this.handleSave = () => {
						this.props.comment.isSaved ? this.props.sendEvent(Object(ie.a)("unsave", this.props.comment.id)) : this.props.sendEvent(Object(ie.a)("save", this.props.comment.id)), this.props.onToggleSave()
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(ie.b)(e, this.props.comment.id)), this.sendCommentEventWithName = e => this.props.sendEvent(Object(H.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentEventWithNameShare = () => this.sendCommentEventWithName("share"), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(ie.a)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(ie.e)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? o.a.createElement(se.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: te.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					}) : o.a.createElement(te.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: te.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					})
				}
				renderModTools() {
					const {
						comment: e,
						moderatorPermissions: t,
						modModeEnabled: s,
						showModTools: n
					} = this.props, r = Object(z.a)(t);
					if (n && r) return s ? o.a.createElement(ve, {
						comment: e
					}) : o.a.createElement(ge, {
						dropdownId: `${e.id}-profile-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: this.handleModActionsMenu
					}, o.a.createElement(ce.a, null), o.a.createElement(L.a, {
						comment: e,
						tooltipId: `${e.id}-profile-mod-actions-menu`
					}))
				}
				renderReportsDropdown() {
					const {
						comment: e,
						modModeEnabled: t,
						showModTools: s
					} = this.props, n = Object(D.a)(e);
					if (s && Object(D.c)(e) && !t) return o.a.createElement(T.a, {
						text: `${n}`,
						onClick: this.handleRestrictedButtonClick,
						selected: this.props.activeTooltipId === Pe(e.id),
						id: Pe(e.id)
					}, o.a.createElement(W.a, {
						model: e,
						onIgnoreReports: this.handleIgnoreReports,
						tooltipId: Pe(e.id)
					}), e.ignoreReports ? o.a.createElement(de.a, null) : o.a.createElement(le.a, null))
				}
				renderDistinguishDropdown() {
					const {
						comment: e,
						currentUser: t,
						moderatorPermissions: s,
						modModeEnabled: n,
						onDistinguishComment: r,
						showModTools: i
					} = this.props, a = Object(z.a)(s), d = !!t && t.displayText === e.author, c = !!t && t.isEmployee;
					if (i && d && !e.bannedBy && (c || a && !n)) return o.a.createElement(T.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.activeTooltipId === je(e.id)
					}, o.a.createElement(xe.a, null), o.a.createElement(A.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.activeTooltipId === je(e.id),
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: c,
						isUserMod: a,
						onDistinguishComment: r,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: je(e.id)
					}))
				}
				render() {
					const {
						comment: e,
						commentPermalink: t,
						className: s,
						commentsPageKey: n,
						currentUser: r,
						deleteComment: i,
						isLoggedIn: a,
						isPendingDeletion: d,
						moderatorPermissions: c,
						postIsLocked: l,
						subreddit: m,
						toggleDeleteCommentModal: p
					} = this.props, u = Object(z.a)(c), h = !!r && r.displayText === e.author, b = !l && !e.isLocked || u && a, x = r && e.isGildable;
					return o.a.createElement("div", {
						className: s
					}, o.a.createElement(ye, null, b && o.a.createElement(Ce, {
						onClick: this.handleReply,
						disabled: d
					}, E.fbt._("Reply", null, {
						hk: "1xBqIs"
					})), x && o.a.createElement(Ce, {
						onClick: this.handleGild
					}, E.fbt._("Give Award", null, {
						hk: "pQJYk"
					})), o.a.createElement(ne.a, {
						dropdownId: `${n}--${e.id}-comment-share-menu`,
						permalink: t,
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == m ? void 0 : m.type
					}, o.a.createElement(Ce, {
						onClick: this.sendCommentEventWithNameShare
					}, E.fbt._("share", null, {
						hk: "3YIXpa"
					}))), this.renderReportsDropdown(), o.a.createElement(fe, {
						dropdownId: ke(n, e.id),
						onClick: this.handleOverflowMenuClick
					}, !h && !d && o.a.createElement(Ee, {
						displayText: E.fbt._("report", null, {
							hk: "ad7CE"
						}),
						onClick: this.props.onReportClick
					}, o.a.createElement(be.a, {
						name: ue.a.report
					})), o.a.createElement(Ee, {
						displayText: e.isSaved ? E.fbt._("Unsave", null, {
							hk: "4kQcAP"
						}) : E.fbt._("Save", null, {
							hk: "4yMsMq"
						}),
						isSelected: e.isSaved,
						onClick: this.handleSave
					}, e.isSaved ? o.a.createElement(be.a, {
						name: ue.a.saved
					}) : o.a.createElement(be.a, {
						name: ue.a.save
					})), h && o.a.createElement(Ee, {
						displayText: E.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						onClick: this.handleEdit
					}, o.a.createElement(be.a, {
						name: ue.a.edit
					})), h && o.a.createElement(Ee, {
						displayText: E.fbt._("delete", null, {
							hk: "e8kvB"
						}),
						onClick: this.handleDelete
					}, o.a.createElement(be.a, {
						name: ue.a.delete
					}))), this.props.isConfirmModalOpen && o.a.createElement(R.a, {
						actionText: E.fbt._("Delete", null, {
							hk: "3hQAl"
						}),
						cancelActionText: E.fbt._("Keep", null, {
							hk: "3vWZkQ"
						}),
						headerText: E.fbt._("Delete comment", null, {
							hk: "2ErmbC"
						}),
						modalText: E.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "21h9zY"
						}),
						onConfirm: i,
						toggleModal: p,
						trackClick: C.a,
						withOverlay: !0
					}), this.renderModTools(), this.renderDistinguishDropdown()), this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var Me = Oe(Object(r.b)(we, (e, {
					comment: t,
					commentsPageKey: s
				}) => ({
					deleteComment: () => s && e(Object(k.h)(t.id, t.postId)),
					onDistinguishComment: (s, n) => e(Object(P.b)(t.id, s, n)),
					onIgnoreReports: () => e(Object(P.g)(t.id)),
					onGildClick: s => e(Object(w.d)({
						correlationId: s,
						thingId: t.id
					})),
					onReportClick: () => e(Object(M.c)(t.id)),
					onToggleDistinguishDropdown: () => e(Object(N.h)({
						tooltipId: je(t.id)
					})),
					onToggleReportsDropdown: () => e(Object(N.h)({
						tooltipId: Pe(t.id)
					})),
					onToggleSave: () => e(Object(j.m)(t.id)),
					handleDelete: () => {
						e(Object(I.i)(_e(t.id))), e(Object(N.h)({
							tooltipId: ke(s, t.id)
						}))
					},
					handleEdit: s => {
						const n = Object(O.a)(t.postId, t.id, {}),
							o = {
								commentId: t.id,
								draftKey: Object(_.a)(K.c.edit, t.id),
								text: t.bodyMD || "",
								commentMode: t.media && t.media.rteMode,
								commentsPageKey: n
							};
						e(Object(q.a)(s)), e(Object(k.f)(o))
					},
					handleReply: s => {
						const n = Object(O.a)(t.postId, t.id, {}),
							o = {
								parentCommentId: t.id,
								commentsPageKey: n
							};
						e(Object(q.a)(s)), e(Object(k.g)(o))
					},
					toggleDeleteCommentModal: () => e(Object(I.i)(_e(t.id)))
				}))(Object(oe.c)(Object(B.b)(Ie)))),
				Ne = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Le = s("./src/reddit/components/RichTextJson/index.tsx"),
				Se = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				Te = s("./src/reddit/selectors/commentSelector.ts"),
				Re = s("./src/reddit/components/Comments/ProfileComment/index.m.less"),
				Ae = s.n(Re);
			const Fe = he.a.wrapped(Ne.a, "TopMeta", Ae.a),
				De = he.a.div("ProfileCommentWrapper", Ae.a),
				We = he.a.div("CommentBody", Ae.a),
				Be = Object(r.b)(() => Object(i.c)({
					comment: (e, t) => Object(Te.b)(e, t),
					flair: G.e
				})),
				Ue = Object(c.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.a = Be(e => {
				const {
					comment: t,
					commentsPageKey: s,
					flair: n,
					isExpanded: r,
					showFlatlist: i,
					showModTools: c
				} = e, l = s => o.a.createElement(Le.a, {
					className: s,
					content: Object(Se.a)(t),
					mediaMetadata: t.media && t.media.mediaMetadata,
					rtJsonElementProps: Ue(e)
				});
				return o.a.createElement(De, {
					className: Object(a.a)({
						[Ae.a.isRemoved]: !!t.bannedBy
					})
				}, o.a.createElement(Fe, {
					collapsedBecauseCrowdControl: !1,
					collapsed: !1,
					comment: t,
					commentsPageKey: s,
					flair: n,
					renderedInOverlay: !1
				}), o.a.createElement("div", null, !t.isDeleted && o.a.createElement(We, null, r ? l() : o.a.createElement(g, {
					height: d.Tb,
					isExpanded: r
				}, l)), !t.isDeleted && i && o.a.createElement(Me, {
					comment: t,
					commentsPageKey: s,
					showModTools: c
				})))
			})
		},
		"./src/reddit/components/Econ/Audio/MuteIcon.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = ({
				className: e
			}) => o.a.createElement("svg", {
				className: e,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("g", {
				id: "icons_flat",
				"data-name": "icons flat"
			}, o.a.createElement("path", {
				d: "M13.5,9.5v-5A3.493,3.493,0,0,0,6.723,3.3l6.724,6.723A3.524,3.524,0,0,0,13.5,9.5Z"
			}), o.a.createElement("path", {
				d: "M15.5,9.5a5.472,5.472,0,0,1-.436,2.144l1.487,1.486A7.428,7.428,0,0,0,17.5,9.5Z"
			}), o.a.createElement("path", {
				d: "M2.341,4.1,6.5,8.258V9.5A3.5,3.5,0,0,0,10,13a3.441,3.441,0,0,0,1.059-.183l1.529,1.529A5.449,5.449,0,0,1,10,15,5.506,5.506,0,0,1,4.5,9.5h-2A7.5,7.5,0,0,0,9,16.925V18H7.581v2h4.838V18H11V16.925a7.388,7.388,0,0,0,3.026-1.141l1.044,1.044,1.414-1.414L3.755,2.686Z"
			})))
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = ({
				className: e
			}) => o.a.createElement("svg", {
				className: e,
				width: "226",
				height: "226",
				viewBox: "0 0 226 226",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				opacity: "0.8"
			}, o.a.createElement("rect", {
				opacity: "0.8",
				x: "36.7704",
				y: "36.7703",
				width: "152.462",
				height: "152.462",
				rx: "76.2308",
				stroke: "url(#paint0_linear)",
				strokeWidth: "4"
			}), o.a.createElement("rect", {
				opacity: "0.5",
				x: "18.8851",
				y: "18.8822",
				width: "188.231",
				height: "188.231",
				rx: "94.1153",
				stroke: "url(#paint1_linear)",
				strokeWidth: "3"
			}), o.a.createElement("rect", {
				opacity: "0.3",
				x: "1.25",
				y: "1.25",
				width: "223.5",
				height: "223.5",
				rx: "111.75",
				stroke: "url(#paint2_linear)",
				strokeWidth: "2.5"
			})), o.a.createElement("defs", null, o.a.createElement("linearGradient", {
				id: "paint0_linear",
				x1: "17.886",
				y1: "34.7703",
				x2: "213.283",
				y2: "40.3684",
				gradientUnits: "userSpaceOnUse"
			}, o.a.createElement("stop", {
				stopColor: "#FF538C"
			}), o.a.createElement("stop", {
				offset: "0.989583",
				stopColor: "#FFAB39"
			})), o.a.createElement("linearGradient", {
				id: "paint1_linear",
				x1: "-3.25127",
				y1: "17.3822",
				x2: "235.567",
				y2: "24.2243",
				gradientUnits: "userSpaceOnUse"
			}, o.a.createElement("stop", {
				stopColor: "#FF538C"
			}), o.a.createElement("stop", {
				offset: "0.989583",
				stopColor: "#FFAB39"
			})), o.a.createElement("linearGradient", {
				id: "paint2_linear",
				x1: "-24.3885",
				y1: "2.87774e-05",
				x2: "257.851",
				y2: "8.08615",
				gradientUnits: "userSpaceOnUse"
			}, o.a.createElement("stop", {
				stopColor: "#FF538C"
			}), o.a.createElement("stop", {
				offset: "0.989583",
				stopColor: "#FFAB39"
			}))))
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
				return u
			})), s.d(t, "c", (function() {
				return h
			})), s.d(t, "d", (function() {
				return b
			})), s.d(t, "a", (function() {
				return E
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/PostList/Placeholder.tsx"),
				c = s("./src/reddit/constants/postLayout.ts"),
				l = s("./src/reddit/components/EmptyProfile/EmptyListing.m.less"),
				m = s.n(l);
			var p = ({
				children: e,
				className: t
			}) => r.a.createElement("div", {
				className: Object(a.a)(m.a.Wrapper, t)
			}, r.a.createElement(d.a, {
				className: m.a.BackgroundPlaceholder,
				isLoading: !1,
				layout: c.g.Classic
			}), r.a.createElement("div", {
				className: m.a.PrimaryText
			}, e));
			var u = ({
				className: e,
				profileName: t,
				timeSort: s = i.fc.ALL
			}) => r.a.createElement(p, {
				className: e
			}, s === i.fc.ALL ? n.fbt._("hmm... {profileName} hasn't commented on anything", [n.fbt._param("profileName", `u/${t}`)], {
				hk: "1MHn3t"
			}) : n.fbt._("hmm... {profileName} hasn't commented recently", [n.fbt._param("profileName", `u/${t}`)], {
				hk: "qN3uL"
			}));
			var h = ({
				className: e,
				profileName: t,
				timeSort: s = i.fc.ALL
			}) => r.a.createElement(p, {
				className: e
			}, s === i.fc.ALL ? n.fbt._("hmm... {profileName} hasn't posted anything", [n.fbt._param("profileName", `u/${t}`)], {
				hk: "28vBEd"
			}) : n.fbt._("hmm... {profileName} hasn't posted recently", [n.fbt._param("profileName", `u/${t}`)], {
				hk: "38GhqN"
			}));
			var b = ({
					className: e,
					text: t
				}) => r.a.createElement(p, {
					className: e
				}, t),
				x = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				f = s("./src/reddit/components/EmptyProfile/forbidden.m.less"),
				v = s.n(f);
			const {
				fbt: g
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var E = () => r.a.createElement("div", {
				className: v.a.container
			}, r.a.createElement(x.a, {
				className: v.a.hideIcon
			}), r.a.createElement("h3", {
				className: v.a.title
			}, g._("You do not have permission to access this resource", null, {
				hk: "10cPyp"
			})), r.a.createElement("p", {
				className: v.a.subtitle
			}, g._("You can only look at your own saved posts and comments", null, {
				hk: "3pWGtF"
			})))
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
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/constants/componentSizes.ts"),
				c = s("./src/reddit/constants/postLayout.ts"),
				l = s("./src/reddit/constants/screenWidths.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less"),
				u = s.n(p),
				h = s("./src/lib/lessComponent.tsx");
			const b = Object(m.u)(),
				x = Object(i.c)({
					layout: m.Q
				}),
				f = Object(r.b)(x);
			class v extends o.a.Component {
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
							__html: `\n          .${u.a.Component} {\n            --layoutNavigation-considerateNav-offsetLeft: ${this.props.offsetLeft}px;\n          }\n        `
						}
					}), this.getLargeLayoutStyle())
				}
				getLargeLayoutStyle() {
					const e = this.props.offsetLeft + 2 * d.m + d.q + d.r,
						t = l.a - e,
						s = d.g - t,
						n = l.a + s + (this.props.bladeOpen ? d.a : 0);
					return this.props.layout !== c.g.Large ? null : o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n            @media (min-width: ${n}px) {\n              .${u.a.Component} {\n                left: calc((100% + var(--layoutNavigation-considerateNav-offsetLeft) - ${d.g+d.q+d.r}px) / 2);\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ${d.r}px) / 2);\n              }\n\n              .${u.a.Component}.${u.a["m-consider-sidebar"]} {\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ${d.g+d.q+d.r}px) / 2);\n              }\n            }\n          `
						}
					})
				}
				render() {
					const e = Object(a.a)(this.props.className, u.a.Component, {
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
			t.a = b(f(h.a.wrapped(v, "Component", u.a)))
		},
		"./src/reddit/components/OneFeed/PostRecommendationContext.m.less": function(e, t, s) {
			e.exports = {
				RecommendationContextStyles: "nAL34ZVf4KfyEoZIzUgmN",
				recommendationContextStyles: "nAL34ZVf4KfyEoZIzUgmN",
				classicLayout: "_3gsfwiq-rM6zSz9YoMlnJ0",
				compactLayout: "_9huHAs0mdMzeF-pUhJbwX",
				largeLayout: "_3hWVRt6y8PqOoC2VuZETZI"
			}
		},
		"./src/reddit/components/OneFeed/PostRecommendationContext.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/components/RichTextJson/index.tsx"),
				d = s("./src/reddit/constants/postLayout.ts"),
				c = s("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				l = s.n(c);
			const m = Object(i.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = ({
				content: e,
				layout: t,
				post: s
			}) => o.a.createElement(a.a, {
				className: Object(r.a)(l.a.RecommendationContextStyles, {
					[l.a.classicLayout]: t === d.g.Classic,
					[l.a.compactLayout]: t === d.g.Compact,
					[l.a.largeLayout]: t === d.g.Large
				}),
				content: e,
				rtJsonElementProps: m(s),
				useExplicitTextColor: !0
			})
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/ClassicPost/index.tsx"),
				i = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/react-redux/es/index.js")),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/constants/gold.ts"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/components/CommentContainer/index.tsx"),
				u = s("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				h = s("./src/reddit/helpers/getClickInfo.ts"),
				b = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				x = s("./src/reddit/selectors/commentSelector.ts"),
				f = s("./src/reddit/selectors/communityAwards.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/OverviewChronoComment/index.m.less"),
				E = s.n(g);
			const y = Object(i.b)(() => Object(a.c)({
				comment: x.b,
				isAwarded: (e, t) => {
					const s = Object(x.b)(e, t);
					return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
						const s = Object(f.a)(e, t);
						return s && s.coinPrice >= d.g
					})
				},
				isNightmodeOn: v.X
			}), e => ({
				openPost: t => e(Object(m.L)(t))
			}));
			var C = Object(l.a)(y(e => {
					const {
						comment: t,
						commentId: s,
						first: n,
						isAwarded: r,
						isNightmodeOn: i,
						last: a,
						openPost: d,
						showModTools: l
					} = e;
					if (!t) return null;
					return o.a.createElement(p.a, {
						comment: t,
						onClick: (e, t) => {
							d({
								postOrComment: t,
								clickInfo: Object(h.a)(e),
								queryParams: {
									context: 3
								}
							})
						},
						style: {
							background: Object(b.e)(e)
						}
					}, o.a.createElement("div", {
						className: Object(c.a)(E.a.commentOuterWrapper, {
							[E.a.isLast]: a,
							[E.a.isAwarded]: r,
							[E.a.isNightmodeOn]: i
						})
					}, o.a.createElement("div", {
						className: Object(c.a)(E.a.commentWrapper, {
							[E.a.isFirst]: n
						})
					}, o.a.createElement("div", {
						className: E.a.commentSeparator
					}), t.parentId && o.a.createElement("div", {
						className: E.a.commentSeparator
					}), o.a.createElement("div", {
						className: E.a.commentContentWrapper
					}, o.a.createElement(u.a, {
						commentId: s,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: !0,
						showModTools: l,
						isExpanded: !0
					})))))
				})),
				O = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				_ = s("./src/reddit/contexts/PageLayer/index.tsx"),
				j = s("./src/reddit/helpers/isComment.ts"),
				k = s("./src/reddit/components/OverviewChronoList/ListItem.m.less"),
				P = s.n(k),
				w = s("./src/lib/lessComponent.tsx");

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const M = Object(_.u)({
					currentProfileName: _.i,
					isCommentsPage: _.x,
					isCommentPermalink: _.w,
					isProfilePostListing: _.K,
					pageLayer: e => e
				}),
				N = w.a.wrapped(O.a, "OverviewCommentPost", P.a),
				L = w.a.wrapped(r.default, "ClassicPost", P.a);
			t.a = M(e => {
				const {
					itemId: t,
					isFirstInCommentList: s,
					isLastInCommentList: n,
					allowModToolsUnderComments: r,
					height: i,
					width: a,
					...d
				} = e;
				return Object(j.a)(t) ? s ? o.a.createElement(o.a.Fragment, null, o.a.createElement(N, I({}, d, {
					availableWidth: a,
					commentId: t
				})), o.a.createElement(C, {
					commentId: t,
					first: s,
					last: n,
					showModTools: r
				})) : o.a.createElement(C, {
					commentId: t,
					first: s,
					last: n,
					showModTools: r
				}) : o.a.createElement(L, I({}, d, {
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
				MetaSeparator: "_3RjYJMG6TaMnSwb88daQ7W",
				metaSeparator: "_3RjYJMG6TaMnSwb88daQ7W",
				postTopMetaMetaSeparator: "_2IhK-xvBLjMsX4HZ-T6j-W"
			}
		},
		"./src/reddit/components/OverviewCommentPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/components/PostContainer/index.tsx"),
				p = s("./src/reddit/components/PostTitle/index.tsx"),
				u = s("./src/reddit/components/PostTopMeta/index.tsx"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/contexts/Post/index.tsx"),
				x = s("./src/reddit/controls/InternalLink/index.tsx"),
				f = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				v = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				g = s.n(v),
				E = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				y = s("./src/reddit/selectors/commentSelector.ts"),
				C = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				O = s("./src/reddit/components/OverviewCommentPost/index.m.less"),
				_ = s.n(O);
			const {
				fbt: j
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = c.a.wrapped(x.a, "InternalLink", _.a), P = c.a.div("Wrapper", _.a), w = c.a.div("Row", _.a), I = c.a.wrapped(E.a, "CommentIcon", _.a), M = c.a.div("TitleContainer", _.a), N = c.a.div("PostTitleContainer", _.a), L = c.a.wrapped(p.c, "PostTitle", _.a), S = c.a.wrapped(u.d, "PostTopMeta", _.a), T = c.a.wrapped(u.a, "MetaSeparator", _.a), R = Object(r.b)(() => Object(i.c)({
				comment: y.b,
				isBlockingInterstitialEnabled: C.b
			}), e => ({
				showModalOnAuthorLinkClick: t => e(Object(l.cb)(t))
			})), A = e => {
				const {
					post: t,
					subredditOrProfile: s
				} = e;
				if (s) return o.a.createElement(n.Fragment, null, o.a.createElement(T, null), o.a.createElement(S, {
					metaSeparatorClassName: _.a.postTopMetaMetaSeparator,
					post: t,
					showSub: !0,
					showTimestamp: !1,
					subredditOrProfile: s
				}))
			}, F = e => {
				const {
					comment: t,
					profileName: s,
					isBlockingInterstitialEnabled: n,
					showModalOnAuthorLinkClick: r
				} = e;
				if (!t) return null;
				const i = s || t.author,
					a = `/user/${i}/`;
				return o.a.createElement(k, {
					"data-click-id": "user",
					to: a,
					onClick: e => {
						n && (e.preventDefault(), r(a))
					}
				}, i)
			};
			t.a = Object(d.a)(Object(b.b)(R(Object(h.c)(e => {
				const {
					className: t,
					eventFactory: s,
					onClickPost: n,
					post: r
				} = e;
				return o.a.createElement(m.a, {
					className: Object(a.a)(g.a.compactPostStyles, _.a.overviewCommentPost, {
						[_.a.banned]: !!e.post.bannedBy,
						[_.a.reported]: !e.post.bannedBy && !!e.post.numReports && e.post.numReports > 0
					}, t),
					post: r,
					onClick: n,
					eventFactory: s
				}, o.a.createElement(P, {
					style: {
						background: Object(f.e)(e)
					}
				}, o.a.createElement(w, null, o.a.createElement(I, null), o.a.createElement(M, null, j._("{postAuthor} commented on {postTitle} {postMeta}", [j._param("postAuthor", F({
					...e
				})), j._param("postTitle", o.a.createElement(N, null, o.a.createElement(L, {
					outboundLinkClassName: _.a.postTitleOutboundLink,
					post: r,
					size: p.b.Small,
					titleClassName: _.a.postTitleTitle
				}))), j._param("postMeta", A(e))], {
					hk: "d6l8e"
				})))))
			}))))
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				d = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				c = s.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(i.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: n,
					onClick: i,
					post: d,
					redditStyle: m,
					theme: p,
					...u
				} = e;
				return o.a.createElement("div", l({
					className: Object(r.a)(c.a.backgroundWrapper, s),
					style: Object(a.c)(n, e),
					onClick: i
				}, u), t)
			})
		},
		"./src/reddit/components/ProfileItemList/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/last.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/opener/index.ts"),
				c = s("./src/reddit/constants/adEvents.ts"),
				l = s("./src/reddit/components/PostList/LoadMore.tsx"),
				m = s("./src/reddit/components/PostList/Placeholder.tsx"),
				p = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				u = s("./src/reddit/components/Scroller/Simple.tsx"),
				h = s("./src/reddit/constants/componentSizes.ts"),
				b = s("./src/reddit/helpers/getClickInfo.ts"),
				x = s("./src/reddit/helpers/isComment.ts"),
				f = s("./src/reddit/contexts/Post/index.tsx"),
				v = s("./src/lib/LRUCache/index.ts"),
				g = s("./src/telemetry/index.ts"),
				E = s("./src/telemetry/models/Timer.ts"),
				y = s("./src/reddit/components/PostList/index.m.less"),
				C = s.n(y);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = 500,
				j = new v.a(_),
				k = new v.a(_),
				P = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				w = (e, t, s, n, o, r) => {
					const i = `entered-${e}-${t}-${s?`last-${n}-${o}`:""}`;
					let a = j.get(i);
					return void 0 === a && (a = () => {
						s && r.onBottomViewed(n, o), r.trackOnPostEnteredViewport(e, t)
					}, j.set(i, a)), a
				},
				I = (e, t) => {
					const s = `click-${e}`;
					let n = k.get(s);
					return void 0 === n && (n = (e, s) => {
						s.isSponsored && t.fireAdPixelsOfType(s, c.a.Click), s.isSponsored && s.source && s.source.outboundUrl ? Object(d.e)(s.source.outboundUrl, d.d.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(b.a)(e)
						})
					}, k.set(s, n)), n
				};
			class M extends i.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new v.a(_), this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}
				}
				UNSAFE_componentWillMount() {
					this.timerId && g.c.cancel(this.timerId), this.props.itemIds.length && (this.timerId = g.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = g.c.end(this.timerId);
						setTimeout(() => Object(g.b)(a.n.Redesign, {
							type: "mount",
							component: "overviewChronoList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && g.c.cancel(this.timerId), e.itemIds.length && (this.timerId = g.c.start()), (e.listingKey !== this.props.listingKey || e.itemIds.length !== this.props.itemIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (this.checkAndSendScreenview(), this.timerId && g.c.has(this.timerId)) {
						const e = g.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(g.b)(a.n.Redesign, {
							duration: e,
							type: "mount",
							component: "overviewChronoList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && g.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
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
					return g.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const n = g.c.end(e);
					setTimeout(() => s(t(n, E.TimerType.InApp)), 0)
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
					const {
						itemIds: t,
						...s
					} = this.props, {
						itemIds: n,
						...o
					} = e, r = Object.keys(s), i = Object.keys(o);
					return i.length !== r.length || !!i.some(e => s[e] !== o[e])
				}
				scrollChildForItem(e, t, s, n, o, r) {
					const {
						listingKey: a,
						listingName: d,
						postClickEventFactory: c
					} = this.props, l = `post-${r}-${e}-${t}-${s?"last-index":""}-${d}-${a}`;
					let m;
					if (void 0 === (m = this.scrollChildCache.get(l))) {
						const {
							inSubredditOrProfile: t,
							itemIdToPostId: p
						} = this.props, u = p[e], h = `overview-chrono-list-item-[layout: ${r}]-[itemId: ${e}]`, b = w(u, r, s, a, d, this.props), x = {
							key: h,
							eventFactory: c,
							inSubredditOrProfile: t,
							isFirstInCommentList: n,
							isLastInCommentList: o,
							isOverlay: !1,
							itemId: e,
							last: s,
							layout: r,
							onClickPost: I(e, this.props),
							postId: u
						}, v = this.props.itemComponent;
						m = {
							estHeight: this.props.estimateItemHeight(e, r, n),
							id: e,
							isFocusable: !1,
							trackOnEnteredViewport: b,
							render: e => i.a.createElement(f.a, {
								postId: x.postId
							}, i.a.createElement(v, O({}, x, e)))
						}, this.scrollChildCache.set(l, m)
					}
					return m
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return i.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						layout: s,
						onTryAgain: n
					} = this.props;
					return i.a.createElement("div", {
						className: C.a.placeholder
					}, i.a.createElement(m.a, {
						className: t,
						isLoading: !e,
						layout: s
					}), !!e && i.a.createElement(p.a, {
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
					return i.a.createElement("div", {
						className: C.a.placeholder
					}, i.a.createElement(l.a, {
						isLoading: !!t,
						layout: s,
						countOverride: P[s]
					}), !!e && i.a.createElement(p.a, {
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
						const i = o === n.length - 1,
							a = o && n[o - 1],
							d = !i && n[o + 1],
							c = !!Object(x.a)(s) && (!a || !Object(x.a)(a) || e[a].postId !== e[s].postId),
							l = !!Object(x.a)(s) && (!d || !Object(x.a)(d) || e[d].postId !== e[s].postId);
						return this.scrollChildForItem(s, o, i, c, l, t)
					});
					return i.a.createElement("div", null, i.a.createElement(u.b, {
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
			t.a = M
		},
		"./src/reddit/components/ProfileNavMenu/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2vH__bwuub4wzWRqcvhh3m",
				menuContainer: "LSvZ4rzt8zI_VpizIGPDF",
				dropdown: "_3ulncTe6l8jRF_TM6HZZFk",
				mainLink: "_1JNzvBgvzSnX27gUBKqqmJ",
				isActive: "Zvl1svdkcyUlRhf5RHGKc",
				dropdownLink: "_3FXf9zUWKXtpapv4rBHh1L"
			}
		},
		"./src/reddit/components/ProfileNavMenu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/fastdom/index.ts"),
				r = s("./node_modules/lodash/isEqual.js"),
				i = s.n(r),
				a = s("./node_modules/react/index.js"),
				d = s.n(a),
				c = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				m = s("./node_modules/reselect/es/index.js"),
				p = s("./src/config.ts"),
				u = s("./src/higherOrderComponents/asTooltip.tsx"),
				h = s("./src/lib/classNames/index.ts"),
				b = s("./src/lib/constants/index.ts"),
				x = s("./src/reddit/actions/tooltip.ts"),
				f = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				v = s("./src/reddit/constants/componentSizes.ts"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				E = s("./src/reddit/controls/Dropdown/index.tsx"),
				y = s("./src/reddit/controls/InternalLink/index.tsx"),
				C = s("./src/reddit/icons/fonts/index.tsx"),
				O = s("./src/reddit/models/Profile/index.ts"),
				_ = s("./src/reddit/featureFlags/index.ts"),
				j = s("./src/reddit/selectors/tooltip.ts"),
				k = s("./src/reddit/selectors/user.ts"),
				P = s("./src/reddit/selectors/userPrefs.ts"),
				w = s("./src/reddit/components/ProfileNavMenu/index.m.less"),
				I = s.n(w);

			function M() {
				return (M = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const N = Object(g.u)({
					routeName: g.X,
					privateListingType: g.j
				}),
				L = Object(m.c)({
					isDropdownMenuOpen: e => Object(j.a)(e) === T,
					isOwnProfile: (e, t) => Object(k.Q)(e, t.profileName),
					isSnoovatar30Enabled: _.d.snoovatar30,
					isSubscriptionsPinned: P.b
				}),
				S = Object(u.a)(E.a),
				T = "profile-nav-menu-tooltip",
				R = v.g + v.r + v.q;
			var A;
			t.a = N(Object(c.b)(L, e => ({
					toggleTooltip: t => e(Object(x.h)({
						tooltipId: t
					}))
				}))(({
					isDropdownMenuOpen: e,
					isOwnProfile: t,
					privateListingType: s,
					profileName: n,
					routeName: r,
					toggleTooltip: c,
					isSnoovatar30Enabled: l,
					isSubscriptionsPinned: m
				}) => {
					const [p, u] = Object(a.useState)(!1), b = Object(a.useRef)(null), x = W({
						profileName: n,
						isOwnProfile: t,
						routeName: r,
						privateListingType: s,
						isSnoovatar30Enabled: l
					}), [g, E] = Object(a.useState)(x.filter(e => e.position === A.MENU)), [y, O] = Object(a.useState)([]), _ = [], j = () => {
						const e = document.documentElement.clientWidth - 2 * v.q,
							t = e > R ? R : e;
						let s = 42;
						_.forEach(e => {
							s += e.offsetWidth;
							const n = x.find(t => t.text.toString().toLowerCase() === e.text);
							n.position = s > t ? A.DROPDOWN : A.MENU
						});
						const n = x.filter(e => e.position === A.MENU);
						E(e => i()(n, e) ? e : n);
						const o = x.filter(e => e.position === A.DROPDOWN);
						O(e => i()(o, e) ? e : o), u(o.length > 0)
					};
					return Object(a.useEffect)(() => (o.a.read(() => {
						const e = b.current;
						e && (e.childNodes.forEach((e, t) => {
							_.push({
								text: e.textContent.toLowerCase(),
								offsetWidth: e.offsetWidth
							})
						}), j())
					}), window.addEventListener("resize", j), () => {
						window.removeEventListener("resize", j)
					}), []), d.a.createElement("div", {
						className: I.a.container
					}, d.a.createElement(f.a, {
						bladeOpen: !1,
						offsetLeft: m ? v.u : 0,
						render: () => d.a.createElement(d.a.Fragment, null, d.a.createElement("div", {
							className: I.a.menuContainer,
							ref: b
						}, g.map(e => d.a.createElement(F, M({}, e, {
							key: e.key
						})))), p && d.a.createElement("button", {
							className: Object(h.a)(I.a.mainLink),
							id: T,
							onClick: () => c(T)
						}, d.a.createElement(C.a, {
							name: "overflow_horizontal"
						})), p && d.a.createElement(S, {
							className: I.a.dropdown,
							isOpen: e,
							tooltipId: T
						}, y.map(e => d.a.createElement(D, M({}, e, {
							key: e.key
						})))))
					}))
				})),
				function(e) {
					e.MENU = "menu", e.DROPDOWN = "dropdown"
				}(A || (A = {}));
			const F = ({
					isActive: e,
					text: t,
					url: s,
					internal: n
				}) => n ? d.a.createElement(y.a, {
					className: Object(h.a)(I.a.mainLink, {
						[I.a.isActive]: e
					}),
					to: s
				}, t) : d.a.createElement("a", {
					className: Object(h.a)(I.a.mainLink, {
						[I.a.isActive]: e
					}),
					href: s
				}, t),
				D = ({
					isActive: e,
					internal: t,
					url: s,
					text: n
				}) => t ? d.a.createElement(l.a, {
					className: Object(h.a)(I.a.dropdownLink, {
						[I.a.isActive]: e
					}),
					to: s,
					rel: "nofollow noopener noreferrer",
					role: "listitem"
				}, n) : d.a.createElement("a", {
					className: Object(h.a)(I.a.dropdownLink),
					href: s,
					rel: "nofollow noopener noreferrer",
					role: "listitem",
					target: "_blank"
				}, n),
				W = ({
					profileName: e,
					isOwnProfile: t,
					routeName: s,
					privateListingType: o,
					isSnoovatar30Enabled: r
				}) => {
					const i = t ? [{
						internal: !0,
						isActive: s === b.Mb.PROFILE_PRIVATE && o === O.b.Saved,
						key: "profile.mainmenu.saved",
						text: n.fbt._("Saved", null, {
							hk: "2w1YRh"
						}),
						url: `/user/${e}/saved/`,
						position: A.MENU
					}, {
						internal: !0,
						isActive: s === b.Mb.PROFILE_PRIVATE && o === O.b.Hidden,
						key: "profile.mainmenu.hidden",
						text: n.fbt._("Hidden", null, {
							hk: "225tka"
						}),
						url: `/user/${e}/hidden/`,
						position: A.MENU
					}, {
						internal: !0,
						isActive: s === b.Mb.PROFILE_PRIVATE && o === O.b.Upvoted,
						key: "profile.mainmenu.upvoted",
						text: n.fbt._("Upvoted", null, {
							hk: "RKwFZ"
						}),
						url: `/user/${e}/upvoted/`,
						position: A.MENU
					}, {
						internal: !0,
						isActive: s === b.Mb.PROFILE_PRIVATE && o === O.b.Downvoted,
						key: "profile.mainmenu.downvoted",
						text: n.fbt._("Downvoted", null, {
							hk: "2F9IL4"
						}),
						url: `/user/${e}/downvoted/`,
						position: A.MENU
					}] : [];
					t ? (i.push({
						internal: !0,
						isActive: s === b.Mb.PROFILE_PRIVATE && o === O.b.ReceivedGildings,
						key: "profile.mainmenu.receiverGildings",
						text: n.fbt._("Awards received", null, {
							hk: "iwLBV"
						}),
						url: `/user/${e}/gilded/`,
						position: A.MENU
					}), i.push({
						internal: !0,
						isActive: s === b.Mb.PROFILE_PRIVATE && o === O.b.GivenGildings,
						key: "profile.mainmenu.givenGildings",
						text: n.fbt._("Awards given", null, {
							hk: "2UPYZc"
						}),
						url: `/user/${e}/gilded/given/`,
						position: A.MENU
					})) : i.push({
						internal: !1,
						isActive: !1,
						key: "profile.mainmenu.gildedLegacy",
						text: n.fbt._("Awards received (legacy)", null, {
							hk: "1YgfYU"
						}),
						url: `${p.a.oldRedditUrl}/user/${e}/gilded/`,
						position: A.MENU
					});
					const a = r ? [{
						internal: !0,
						isActive: s === b.Mb.PROFILE_SNOOBUILDER,
						key: "profile.mainmenu.snoobuilder",
						text: n.fbt._("Snoobuilder", null, {
							hk: "3SSKff"
						}),
						url: `/user/${e}/snoo/`,
						position: A.MENU
					}] : [];
					return [{
						internal: !0,
						isActive: s === b.Mb.PROFILE_OVERVIEW,
						key: "profile.mainmenu.overview",
						text: n.fbt._("Overview", null, {
							hk: "2IBbqy"
						}),
						url: `/user/${e}/`,
						position: A.MENU
					}, {
						internal: !0,
						isActive: s === b.Mb.PROFILE_POSTS,
						key: "profile.mainmenu.posts",
						text: n.fbt._("Posts", null, {
							hk: "a1BoF"
						}),
						url: `/user/${e}/posts/`,
						position: A.MENU
					}, {
						internal: !0,
						isActive: s === b.Mb.PROFILE_COMMENTS,
						key: "profile.mainmenu.comments",
						text: n.fbt._("Comments", null, {
							hk: "2VwjOc"
						}),
						url: `/user/${e}/comments/`,
						position: A.MENU
					}, ...a, ...i]
				}
		},
		"./src/reddit/components/ProfileSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/SidebarContainer/index.tsx"),
				d = s("./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx"),
				c = s("./src/reddit/components/SidebarProfileMultireddits/index.tsx"),
				l = s("./src/reddit/components/SidebarProfilePowerupContributions/index.tsx"),
				m = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				p = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				u = s("./src/reddit/components/SidebarTrophyCase/index.tsx"),
				h = s("./src/reddit/components/Widgets/ConnectedAccounts/index.tsx"),
				b = s("./src/reddit/constants/posts.ts"),
				x = s("./src/reddit/selectors/experiments/econ/index.ts");
			const f = Object(n.a)({
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
				v = e => {
					const t = Object(i.e)(e => Object(x.l)(e));
					return r.a.createElement(a.a, {
						className: e.className
					}, r.a.createElement(f, {
						profileName: e.profileName,
						isOverlay: e.isOverlay
					}), r.a.createElement(h.a, {
						subredditOrProfile: {
							name: e.profileName,
							type: b.a.PROFILE
						}
					}), r.a.createElement(d.a, {
						profileName: e.profileName
					}), r.a.createElement(c.a, {
						profileName: e.profileName
					}), !t && r.a.createElement(m.a, null, r.a.createElement(l.a, {
						profileName: e.profileName
					})), r.a.createElement(m.a, null, r.a.createElement(u.a, {
						profileName: e.profileName
					})), r.a.createElement(p.a, {
						hideBackToTop: e.hideBackToTop
					}))
				};
			v.defaultProps = {
				isOverlay: !1
			}, t.a = v
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
		"./src/reddit/components/SidebarExpandableList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/take.js"),
				r = s.n(o),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = s("./src/reddit/layout/row/Inline/index.tsx"),
				u = s("./src/reddit/layout/row/RightAlign/index.tsx");
			const h = e => {
				const {
					className: t,
					hasMoreItems: s,
					headerButton: o,
					items: d,
					minimizedLength: h,
					onLoadMore: b,
					pending: x,
					renderItem: f,
					title: v
				} = e, [g, E] = Object(i.useState)(!1), y = d.length > h || s, C = (!y || g ? d : r()(d, h)).map(e => f({
					item: e
				})), O = () => {
					g || E(!0), g && !s && E(!1), s && b && b()
				};
				return a.a.createElement(c.a, {
					className: t,
					headerButton: o,
					title: v
				}, C, a.a.createElement(p.a, null, a.a.createElement(u.a, null, y && (() => {
					const e = !g || s && b ? n.fbt._("View More", null, {
						hk: "1RK8uA"
					}) : n.fbt._("View Less", null, {
						hk: "1M72mK"
					});
					return a.a.createElement(l.r, {
						onClick: O
					}, x ? a.a.createElement(m.a, {
						sizePx: 10
					}) : e)
				})())))
			};
			h.defaultProps = {
				minimizedLength: d.Sb
			}, t.a = h
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3thndRe559UZy14xE1gZ_"
			}
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/profile/index.ts"),
				c = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				m = s("./src/reddit/models/User/index.ts"),
				p = s("./src/reddit/selectors/profile.ts"),
				u = s("./src/reddit/selectors/subscriptions.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				b = s("./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less"),
				x = s.n(b);
			const f = Object(a.c)({
					currentUser: h.k,
					moderated: p.n,
					subscriptions: u.e,
					hasMoreModerated: p.d,
					loadMorePending: p.a
				}),
				v = Object(i.b)(f, (e, t) => ({
					onLoadMoreGqlModeratedSubreddits: () => e(Object(d.c)(t.profileName))
				}), (e, t, s) => ({
					...s,
					...e,
					...t,
					onLoadMore: () => {
						e.hasMoreModerated && t.onLoadMoreGqlModeratedSubreddits()
					}
				})),
				g = ({
					item: e
				}) => r.a.createElement(l.a, {
					id: e.id,
					iconUrl: e.iconUrl,
					isNSFW: e.isNSFW,
					key: `${e.type}-${e.name}`,
					name: e.name,
					subscribers: e.subscribers,
					isSubscribed: e.isSubscribed,
					widget: void 0,
					sendEvent: () => void 0,
					type: e.type
				});
			t.a = v(e => {
				const {
					currentUser: t,
					moderated: s,
					profileName: o,
					subscriptions: i,
					hasMoreModerated: a,
					onLoadMore: d,
					loadMorePending: l
				} = e;
				if (0 === s.length) return null;
				const p = t && Object(m.e)(t).toLowerCase() === o.toLowerCase() ? n.fbt._("You're a moderator of these communities", null, {
						hk: "2YoCxy"
					}) : n.fbt._("Moderator of these communities", null, {
						hk: "msvzk"
					}),
					u = function(e, t) {
						return e.map(e => ({
							name: e.name,
							subscribers: e.subscribers,
							iconUrl: e.icon.url,
							isNSFW: e.isNSFW,
							isSubscribed: t.has(e.id),
							type: "user" === e.type ? "profile" : "subreddit",
							sendEvent: () => void 0
						}))
					}(s, new Set(i));
				return r.a.createElement(c.a, {
					className: x.a.container,
					title: p,
					items: u,
					renderItem: g,
					hasMoreItems: a,
					onLoadMore: d,
					pending: l
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/profile/index.ts"),
				l = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				m = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				p = s("./src/reddit/selectors/profile.ts"),
				u = s("./src/reddit/components/SidebarProfileMultireddits/index.m.less"),
				h = s.n(u);
			const b = Object(d.c)({
					hasMoreMultireddits: p.e,
					loadMorePending: p.b,
					multireddits: p.o
				}),
				x = Object(i.b)(b, (e, t) => ({
					onLoadMoreMultireddits: () => e(Object(c.g)(t.profileName, !0))
				}), (e, t, s) => ({
					...s,
					...e,
					...t,
					onLoadMore: () => {
						e.hasMoreMultireddits && t.onLoadMoreMultireddits()
					}
				})),
				f = ({
					item: e
				}) => r.a.createElement("div", {
					className: h.a.listItem,
					key: e.url
				}, r.a.createElement("img", {
					className: h.a.icon,
					src: e.icon
				}), r.a.createElement("div", {
					className: h.a.description
				}, r.a.createElement(a.a, {
					className: h.a.name,
					to: e.url
				}, e.displayText), r.a.createElement("div", {
					className: h.a.meta
				}, n.fbt._({
					"*": "{communities} communities",
					_1: "1 community"
				}, [n.fbt._plural(e.subredditCount, "communities")], {
					hk: "1eyxrS"
				}))));
			t.a = x(e => {
				const {
					hasMoreMultireddits: t,
					loadMorePending: s,
					multireddits: o,
					onLoadMore: i,
					profileName: a
				} = e;
				return o && o.length ? r.a.createElement(m.a, null, r.a.createElement(l.a, {
					hasMoreItems: t,
					items: o,
					onLoadMore: i,
					pending: s,
					renderItem: f,
					title: n.fbt._("Public custom feeds by u/{profileName}", [n.fbt._param("profileName", a)], {
						hk: "16Oicc"
					})
				})) : null
			})
		},
		"./src/reddit/components/SidebarProfilePowerupContributions/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				c = s("./src/reddit/components/SubredditIcon/index.tsx"),
				l = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				m = s("./src/reddit/selectors/gold/powerups/index.ts"),
				p = s("./src/reddit/selectors/user.ts"),
				u = s("./node_modules/reselect/es/index.js"),
				h = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				b = s.n(h);
			const x = Object(u.c)({
				subreddits: function(e, {
					profileName: t
				}) {
					const s = Object(p.nb)(e, {
							userName: t
						}),
						n = Object(m.f)(e);
					return (s && n ? n[s.id] : null) || []
				}
			});

			function f({
				item: e
			}) {
				const t = e.subredditInfo,
					s = r.a.createElement(c.b, {
						iconUrl: t.styles.icon,
						className: b.a.subredditIcon
					});
				return r.a.createElement(l.a, {
					className: b.a.communityItemContainer,
					key: t.id
				}, r.a.createElement("div", {
					className: b.a.iconContainer
				}, r.a.createElement(a.a, {
					to: t.path
				}, s)), r.a.createElement("div", {
					className: b.a.communityDescription
				}, r.a.createElement("div", {
					className: b.a.communityName
				}, r.a.createElement(a.a, {
					to: t.path
				}, t.prefixedName)), r.a.createElement("div", {
					className: b.a.subscriberCount
				}, n.fbt._({
					"*": "{number} Powerups",
					_1: "1 Powerup"
				}, [n.fbt._plural(e.powerups, "number")], {
					hk: "3fbcDy"
				}))))
			}
			t.a = Object(i.b)(x)(({
				subreddits: e
			}) => ! function(e) {
				return e.length > 0 && e.every(e => e.subredditInfo)
			}(e) ? null : r.a.createElement(d.a, {
				title: n.fbt._("Supports Communities", null, {
					hk: "1vCNdZ"
				}),
				items: e,
				renderItem: f
			}))
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
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				c = s("./src/reddit/controls/Typography/index.tsx"),
				l = s("./src/reddit/selectors/telemetry.ts");
			var m = s("./src/reddit/hooks/useTracking.ts"),
				p = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				u = s("./node_modules/lodash/isEqual.js"),
				h = s.n(u);
			const b = Object(a.b)(a.d, h.a);
			var x = s("./src/reddit/selectors/profile.ts"),
				f = s("./src/reddit/components/SidebarTrophyCase/index.m.less"),
				v = s.n(f),
				g = s("./src/lib/lessComponent.tsx"),
				E = s("./src/lib/opener/index.ts");
			const y = Object(a.c)({
				trophyCase: (e, {
					profileName: t
				}) => Object(x.r)(e, Object(x.m)(e, t))
			}, b);
			t.a = Object(i.b)(y)(({
				trophyCase: e
			}) => 0 === e.length ? null : r.a.createElement(d.a, {
				title: n.fbt._("Trophy Case ({trophyCount})", [n.fbt._param("trophyCount", `${e.length}`)], {
					hk: "mzh3V"
				}),
				items: e,
				renderItem: P
			}));
			const C = g.a.wrapped(p.a, "TrophyItem", v.a),
				O = g.a.div("TrophyIcon", v.a),
				_ = g.a.h5("TrophyName", v.a),
				j = g.a.div("TrophyContent", v.a),
				k = g.a.wrapped(c.c, "Description", v.a),
				P = ({
					item: e
				}) => {
					const t = Object(m.a)(),
						s = r.a.createElement("img", {
							src: e.icon,
							title: e.name
						});
					return r.a.createElement(C, {
						key: e.id
					}, r.a.createElement(O, null, e.url ? r.a.createElement("a", {
						target: E.d.BLANK,
						rel: E.c,
						href: e.url,
						onClick: () => t((e => t => ({
							source: "trophy",
							action: "click",
							noun: "trophy",
							...l.o(t),
							actionInfo: Object(l.d)(t, {
								paneName: "profile_about"
							}),
							profile: l.R(t),
							trophy: e
						}))({
							id: e.id,
							name: e.name
						}))
					}, s) : s), r.a.createElement(j, null, r.a.createElement(_, null, e.name), r.a.createElement(k, null, e.description)))
				}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less": function(e, t, s) {
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
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/components/Widgets/Base/index.tsx"),
				l = s("./src/reddit/constants/posts.ts"),
				m = s("./src/reddit/helpers/trackers/profileSettings.ts"),
				p = s("./src/reddit/models/ExternalAccount/index.ts"),
				u = s("./src/reddit/selectors/externalAccount.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				b = s("./node_modules/fbt/lib/FbtPublic.js"),
				x = s("./src/reddit/controls/OutboundLink/index.tsx"),
				f = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				v = s("./src/reddit/icons/svgs/Twitter/index.tsx"),
				g = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				E = s("./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less"),
				y = s.n(E);
			var C = e => {
					const {
						account: t,
						clickEvent: s,
						provider: n
					} = e;
					let r, i = t.username,
						a = "";
					return n !== p.a.Twitter ? null : (r = o.a.createElement(v.a, {
						className: y.a.twitterLogo
					}), a = b.fbt._("View on Twitter", null, {
						hk: "39S5oy"
					}), i = `@${t.username}`, o.a.createElement(g.a, null, o.a.createElement("span", {
						className: y.a.icon
					}, r), o.a.createElement(x.b, {
						className: y.a.link,
						href: t.link,
						onClick: s
					}, o.a.createElement("div", {
						className: y.a.linkTitle
					}, o.a.createElement("span", {
						className: y.a.name
					}, i), o.a.createElement(f.a, {
						className: y.a.linkIcon
					})), o.a.createElement("div", {
						className: y.a.linkDescription
					}, a))))
				},
				O = s("./src/reddit/components/Widgets/ConnectedAccounts/index.m.less"),
				_ = s.n(O);
			const {
				fbt: j
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = Object(i.c)({
				twitterAccount: (e, {
					subredditOrProfile: t
				}) => t.type === l.a.PROFILE ? Object(u.c)(e, {
					profileName: t.name
				}) : null,
				user: (e, {
					subredditOrProfile: t
				}) => t.type === l.a.PROFILE ? Object(h.nb)(e, {
					userName: t.name
				}) : null
			}), P = Object(r.b)(k, e => ({
				trackTwitterAccountClicked: t => e((e, s) => m.m(s(), t))
			}), (e, t, s) => ({
				...s,
				...e,
				...t,
				onTwitterAccountClicked: () => t.trackTwitterAccountClicked(e.user)
			}));
			t.a = Object(d.c)(P(e => {
				const {
					onTwitterAccountClicked: t,
					twitterAccount: s
				} = e;
				return s ? o.a.createElement(a.a, null, o.a.createElement(c.b, null, o.a.createElement(c.a, null, j._("Connected accounts", null, {
					hk: "1ce9Jz"
				})), s && o.a.createElement("div", {
					className: _.a.account
				}, o.a.createElement(C, {
					provider: p.a.Twitter,
					account: s,
					clickEvent: t
				})))) : null
			}))
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return v
			})), s.d(t, "b", (function() {
				return g
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/post.ts"),
				i = s("./src/reddit/actions/tooltip.ts"),
				a = s("./src/reddit/models/Vote/index.ts"),
				d = s("./src/reddit/contexts/InsideOverlay.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/contexts/Post/index.tsx"),
				m = s("./src/reddit/selectors/activeModalId.ts"),
				p = s("./src/reddit/selectors/chatPost.ts"),
				u = s("./src/reddit/selectors/moderatorPermissions.ts"),
				h = s("./src/reddit/selectors/postFlair.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/showPromotedCTA.ts"),
				f = s("./src/reddit/selectors/user.ts");
			const v = {
					autoplayPref: f.b,
					activeModalId: m.a,
					crosspost: b.d,
					isActive: b.j,
					isChatPost: p.d,
					isCurrentUserProfilePost: b.l,
					isExpanded: b.m,
					isLoggedIn: f.K,
					showPromotedCTA: x.a,
					moderatorPermissions: u.l,
					modModeEnabled: c.S,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: h.a,
					showMedia: c.s,
					flairStyleTemplate: c.U
				},
				g = (e, {
					postId: t
				}) => ({
					handleVote: s => {
						const n = s === a.a.upvoted ? Object(r.jb)(t) : Object(r.w)(t);
						e(n)
					},
					onIgnoreReports: () => e(Object(r.fb)(t)),
					onOpenReportsDropdown: t => e(Object(i.h)({
						tooltipId: t
					}))
				}),
				E = Object(n.b)(() => Object(o.c)(v), g, (e, t, s) => ({
					...e,
					...t,
					...s,
					formatTitle: e => e.title
				}));
			t.a = e => Object(l.b)(E(Object(d.b)(e)))
		},
		"./src/reddit/connectors/ClassicPost/searchResults.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/connectors/SearchPost/searchSyntaxHighlight.tsx"),
				c = s("./src/reddit/connectors/ClassicPost/index.tsx");
			const l = Object(a.u)({
					searchQuery: a.Y
				}),
				m = Object(r.b)(() => Object(i.c)(c.c), c.b, (e, t, s) => ({
					...e,
					...t,
					...s,
					formatTitle: Object(d.a)(s.searchQuery || "", e => o.a.createElement("em", {
						style: {
							fontWeight: 700
						}
					}, e), e => o.a.createElement("span", {
						style: {
							fontWeight: "normal"
						}
					}, e))
				}));
			t.a = e => l(m(e))
		},
		"./src/reddit/connectors/SearchPost/searchSyntaxHighlight.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/lib/LRUCache/index.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o);
			const i = new n.a(250),
				a = (e, t, s) => {
					const n = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const o = `${e.id}-${n}`;
						let a = i.get(o);
						if (void 0 === a) {
							const d = new RegExp(`(\\b${n}\\b)`, "gi"),
								c = e.title.split(d);
							a = s(r.a.createElement(r.a.Fragment, null, r.a.Children.toArray(c.map((e, s) => s % 2 != 0 ? t(e) : e)))), i.set(o, a)
						}
						return a
					}
				}
		},
		"./src/reddit/helpers/search/renderMedia.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/PostMedia/index.tsx");
			const i = (e, t, s, n, r, i) => n ? e.crosspostRootId ? o.a.createElement("div", {
					className: t.crosspostMediaWrapper
				}, a(e, s, r, i)) : a(e, s, r, i) : null,
				a = (e, t, s, n) => o.a.createElement(r.a, {
					isExpando: !0,
					isGalleryTileLayoutDefault: n,
					isListing: !0,
					isNotCardView: !0,
					post: e,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					shouldShowGalleryTileOption: s,
					showCentered: !0,
					showFull: !0
				})
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return p
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "a", (function() {
				return x
			})), s.d(t, "d", (function() {
				return f
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				o = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				a = s("./src/reddit/models/Theme/index.ts"),
				d = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				c = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(c);
			const m = {},
				p = e => Object(a.g)(Object(d.a)(e).post, Object(d.a)(e).backgroundImage, Object(d.a)(e).backgroundImagePosition),
				u = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(a.g)(e.postBackgroundColor || Object(d.a)(t).post, e.postBackgroundImage, Object(d.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(a.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: p(t)
					}
				},
				h = e => Object(n.k)(.2, e),
				b = e => e && e.postBackgroundColor ? {
					backgroundColor: h(e.postBackgroundColor)
				} : m,
				x = e => e.isActive ? l.a.mIsActive : void 0,
				f = e => {
					const t = Object(r.a)(Object(o.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileComments~ProfileOverview~ProfilePrivate.f522191eb2b157fab4cf.js.map