// https://www.redditstatic.com/desktop2x/ProfileComments~ProfileOverview~ProfilePrivate.c46625b9c108261351f6.js
// Retrieved at 7/12/2021, 6:40:05 PM by Reddit Dataminer v1.0.0
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
			s.r(t), s.d(t, "renderMedia", (function() {
				return z
			})), s.d(t, "SearchResultsClassicPost", (function() {
				return K
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/ads/index.ts"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/getShortenedLink.ts"),
				c = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				l = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				m = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				p = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				u = s("./src/reddit/components/ExpandoButton/index.tsx"),
				h = s("./src/reddit/components/Flatlist/index.tsx"),
				b = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				x = s("./src/reddit/components/ModModeReports/index.tsx"),
				v = s("./src/reddit/components/ModModeReports/helpers.ts"),
				f = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				g = s("./src/reddit/components/PostContainer/index.tsx"),
				E = s("./src/reddit/components/PostMedia/index.tsx"),
				C = s("./src/reddit/components/PostMeta/index.tsx"),
				y = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				O = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				w = s("./src/reddit/components/PostTitle/index.tsx"),
				_ = s("./src/reddit/components/PostTopMeta/index.tsx"),
				j = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				P = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				k = s("./src/reddit/models/Media/index.ts"),
				I = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				N = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				M = s("./src/reddit/connectors/ClassicPost/searchResults.tsx"),
				L = s("./src/reddit/contexts/Post/index.tsx"),
				S = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				T = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				R = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				A = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				D = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				F = s.n(D),
				W = s("./src/reddit/components/ClassicPost/index.m.less"),
				B = s.n(W);

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			class V extends o.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						className: e,
						currentUser: t,
						handleVote: s,
						isExpanded: n,
						inSubredditOrProfile: a,
						eventFactory: E,
						first: N,
						flairStyleTemplate: M,
						formatTitle: L,
						hostPostData: D,
						isCheckboxSelected: W,
						isCurrentUserProfilePost: V,
						isCommentCountAnimationEnabled: q,
						isVoteCountAnimationEnabled: H,
						isCountAnimShadowTestEnabled: K,
						isFrontpage: $,
						isGalleryTileLayoutDefault: G,
						isLoggedIn: J,
						isOverlay: Z,
						imageGalleryCurrentItem: Q,
						moderatorPermissions: Y,
						modModeEnabled: X,
						onClickPost: ee,
						onIgnoreReports: te,
						onOpenReportsDropdown: se,
						poll: ne,
						post: oe,
						postId: re,
						redditStyle: ie,
						scrollerItemRef: ae,
						showBulkActionCheckbox: de,
						showEditFlair: ce,
						showMedia: le,
						subredditOrProfile: me,
						toggleCheckbox: pe,
						userIsOp: ue,
						shouldShowGalleryTileOption: he
					} = this.props, be = ie ? void 0 : M, xe = this.props.crosspost || void 0, ve = Object(R.a)(Y), fe = Object(S.a)(Y), ge = Object(T.a)(Y), Ee = X && R.a, Ce = !!oe.media && oe.media.type === k.o.RTJSON, ye = ue && Ce, Oe = a && !le, we = !!oe.media && Object(k.G)(oe.media), _e = {
						flairStyleTemplate: be,
						post: oe,
						inSubredditOrProfile: a,
						isCurrentUserProfilePost: V,
						isOverlay: Z,
						shouldShowSubscribeButton: !($ && J),
						subredditOrProfile: me
					}, je = Object(r.t)(oe, Q), {
						source: Pe
					} = je, ke = o.a.createElement(g.a, {
						className: Object(i.a)(F.a.classicPostStyles, B.a.postContainer, Object(A.a)(this.props), N ? B.a.mFirst : void 0, e),
						isOverlay: Z,
						style: {
							...Object(A.d)(this.props),
							...Object(A.b)(this.props.flairStyleTemplate)
						},
						post: oe,
						onClick: ee,
						eventFactory: E
					}, o.a.createElement(O.a, {
						model: oe,
						handleVote: s,
						showBulkActionCheckbox: de,
						isCheckboxSelected: W,
						isCountAnimShadowTestEnabled: K,
						isVoteCountAnimation: H,
						toggleCheckbox: pe,
						flairStyleTemplate: be,
						redditStyle: ie,
						subreddit: me,
						postId: re
					}), o.a.createElement(f.a, {
						"data-click-id": "background",
						flairStyleTemplate: be
					}, o.a.createElement(p.a, {
						className: B.a.eventMeta,
						post: oe
					}), o.a.createElement("div", {
						className: B.a.mainBody
					}, o.a.createElement("div", {
						className: Oe ? B.a.expandoContainer : B.a.thumbnailContainer
					}, !Oe && o.a.createElement(I.a, {
						className: B.a.classicThumbnail,
						crosspost: xe && oe,
						isMeta: oe.isMeta,
						post: xe || oe,
						redditStyle: ie,
						templatePlaceholderImage: be && be.postPlaceholderImage,
						removeLink: we
					}), o.a.createElement(u.a, {
						crosspost: xe,
						className: B.a.rightExpando,
						isExpanded: !!n,
						post: oe,
						useMediaIcons: !1
					})), o.a.createElement("div", {
						className: Object(i.a)(B.a.content, {
							[B.a.showBulkActionCheckbox]: de
						}),
						"data-click-id": "body"
					}, o.a.createElement(w.c, {
						className: ne ? B.a.titleWithPoll : void 0,
						format: L,
						poll: ne,
						post: oe,
						redditStyle: ie,
						size: w.b.Medium,
						titleColor: be && be.postTitleColor,
						isOverlay: Z
					}, oe.source && !xe && o.a.createElement(P.a, {
						href: oe.source.url,
						isSponsored: oe.isSponsored,
						postId: oe.id,
						source: oe.source
					}, Object(d.a)(oe))), o.a.createElement(C.a, U({
						key: "PostMeta"
					}, _e)), X && ve && Object(v.c)(oe) && o.a.createElement(x.a, {
						onIgnoreReports: te,
						reportable: oe
					}), oe.isSponsored && Pe && Pe.url && o.a.createElement(c.a, {
						className: B.a.adLinkWrapper
					}, o.a.createElement(l.a, {
						post: oe,
						adLinkContent: je
					})), o.a.createElement("div", {
						className: B.a.flatlistContainer
					}, o.a.createElement(u.a, {
						className: B.a.leftExpando,
						crosspost: xe,
						isExpanded: !!n,
						post: oe,
						useMediaIcons: !1
					}), o.a.createElement(m.a, {
						className: B.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: be,
						model: oe,
						onVoteClick: s
					}), o.a.createElement(h.a, {
						className: B.a.flatlistSeparator
					}), o.a.createElement(h.c, {
						className: B.a.flatlist,
						currentUser: t,
						hasModFlairPerms: fe,
						hasModPostPerms: ve,
						hasModFullPerms: ge,
						hostPostData: D,
						isCommentCountAnimation: q,
						isCountAnimShadowTestEnabled: K,
						isOverlay: !!Z,
						modModeEnabled: X,
						onIgnoreReports: te,
						onOpenReportsDropdown: se,
						post: oe,
						showEditPost: ye,
						showEditFlair: ce,
						tooltipType: Z ? _.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(y.b)({
							editPost: !Ee,
							save: !Ee,
							hide: !Ee,
							report: !Ee
						})
					})), o.a.createElement(b.d, null))), z(oe, ae, n, he, G)));
					return o.a.createElement(j.b, null, ke)
				}
			}
			const z = (e, t, s, n, r) => s ? e.crosspostRootId ? o.a.createElement("div", {
					className: B.a.crosspostMediaWrapper
				}, q(e, t, n, r)) : q(e, t, n, r) : null,
				q = (e, t, s, n) => o.a.createElement(E.a, {
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
				}),
				H = Object(a.a)(V),
				K = Object(L.b)(Object(M.a)(H));
			t.default = Object(N.a)(H)
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
			t.a = l(Object(d.c)(m))
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), x = .75, v = 10 * d.I;
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
					}, v), this.onShowMore = e => {
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
			var g = f,
				E = s("./node_modules/fbt/lib/FbtPublic.js"),
				C = s("./node_modules/lodash/noop.js"),
				y = s.n(C),
				O = s("./src/lib/makeCommentPermalink/index.ts"),
				w = s("./src/lib/makeCommentsPageKey/index.ts"),
				_ = s("./src/lib/makeDraftKey/index.ts"),
				j = s("./src/reddit/actions/comment/index.ts"),
				P = s("./src/reddit/actions/comment/authoring.ts"),
				k = s("./src/reddit/actions/comment/moderation.ts"),
				I = s("./src/reddit/actions/gold/modals.ts"),
				N = s("./src/reddit/actions/modal.ts"),
				M = s("./src/reddit/actions/reportFlow/index.ts"),
				L = s("./src/reddit/actions/tooltip.ts"),
				S = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				T = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				R = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				A = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				D = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				F = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				W = s("./src/reddit/components/ModModeReports/helpers.ts"),
				B = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				U = s("./src/reddit/contexts/InsideOverlay.tsx"),
				V = s("./src/reddit/contexts/PageLayer/index.tsx"),
				z = s("./src/reddit/helpers/correlationIdTracker.ts"),
				q = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				H = s("./src/reddit/helpers/overlay/index.ts"),
				K = s("./src/reddit/helpers/trackers/lightbox.ts"),
				$ = s("./src/reddit/models/PostDraft/index.ts"),
				G = s("./src/reddit/selectors/activeModalId.ts"),
				J = s("./src/reddit/selectors/comments.ts"),
				Z = s("./src/reddit/selectors/moderatorPermissions.ts"),
				Q = s("./src/reddit/selectors/posts.ts"),
				Y = s("./src/reddit/selectors/tooltip.ts"),
				X = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				ee = s("./src/reddit/selectors/user.ts"),
				te = s("./src/reddit/components/OverflowMenu/index.tsx"),
				se = s("./src/reddit/components/ReportFlow/index.tsx"),
				ne = s("./src/reddit/components/ReportFlow/new.tsx"),
				oe = s("./src/reddit/components/ShareMenu/index.tsx"),
				re = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ie = s("./src/reddit/controls/Dropdown/Row.tsx"),
				ae = s("./src/reddit/helpers/trackers/modTools.ts"),
				de = s("./src/reddit/layout/row/Inline/index.tsx"),
				ce = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				le = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				me = s("./src/reddit/icons/fonts/Report/index.tsx"),
				pe = s("./src/reddit/icons/svgs/Flag/index.tsx"),
				ue = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				he = s("./src/reddit/icons/svgs/Save/index.tsx"),
				be = s("./src/reddit/icons/svgs/Saved/index.tsx"),
				xe = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				ve = s("./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less"),
				fe = s.n(ve),
				ge = s("./src/lib/lessComponent.tsx"),
				Ee = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx");
			const Ce = ge.a.wrapped(xe.b, "DeleteIcon", fe.a),
				ye = ge.a.wrapped(pe.a, "ReportIcon", fe.a),
				Oe = ge.a.wrapped(ue.a, "PencilIcon", fe.a),
				we = ge.a.wrapped(he.a, "SaveIcon", fe.a),
				_e = ge.a.wrapped(be.a, "SavedIcon", fe.a),
				je = ge.a.wrapped(te.b, "OverflowMenu", fe.a),
				Pe = ge.a.wrapped(T.a, "ModToolsFlatlist", fe.a),
				ke = ge.a.wrapped(F.a, "ModActionsMenu", fe.a),
				Ie = ge.a.wrapped(ie.b, "DropdownRow", fe.a),
				Ne = ge.a.wrapped(de.a, "Flatlist", fe.a),
				Me = ge.a.button("Button", fe.a),
				Le = Object(V.t)(),
				Se = e => `Comment-${e}--Modal--DeleteComment`,
				Te = e => `Distinguish--Dropdown--${e}`,
				Re = (e, t) => `${e}--${t}-overflow-menu`,
				Ae = e => `View--Reports--${e}`,
				De = Object(i.c)({
					activeTooltipId: Y.a,
					isConfirmModalOpen: (e, {
						comment: t
					}) => Object(G.a)(e) === Se(t.id),
					isPendingDeletion: (e, {
						comment: t
					}) => Object(J.C)(e, {
						commentId: t.postId
					}),
					isLoggedIn: ee.K,
					moderatorPermissions: (e, {
						comment: t
					}) => Object(Z.l)(e, {
						subredditId: t.subredditId
					}),
					currentUser: ee.j,
					modModeEnabled: V.Q,
					postIsLocked: (e, {
						comment: t
					}) => Object(Q.A)(e, {
						postId: t.postId
					}),
					postPermalink: (e, {
						comment: t
					}) => Object(Q.E)(e, {
						postId: t.postId
					}),
					reportFlowIsOpen: (e, {
						comment: t
					}) => {
						var s, n;
						return (null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.reportFlow) || void 0 === n ? void 0 : n.postOrCommentId) === t.id
					},
					subreddit: V.q,
					subredditOrProfile: (e, {
						comment: t
					}) => Object(Q.R)(e, {
						postId: t.postId
					}),
					reportingRevampEnabled: X.a
				});
			class Fe extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(ae.a)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleEdit = () => this.props.handleEdit(this.props.comment.permalink), this.handleIgnoreReports = () => {
						this.props.onIgnoreReports(), this.sendCommentReportEvent(this.props.comment.ignoreReports ? "restore_reports" : "ignore_reports")
					}, this.handleGild = async () => {
						const e = Object(z.d)(z.a.GildingFlow, !0);
						this.props.onGildClick(e);
						const {
							clickGildEvent: t
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(t(this.props.comment.id))
					}, this.handleModActionsMenu = () => this.props.sendEvent(Object(ae.a)("comment_mod_action_menu", this.props.comment.id)), this.handleOverflowMenuClick = () => this.props.sendEvent(Object(ae.a)("comment_overflow_menu", this.props.comment.id)), this.handleDelete = () => this.props.handleDelete(), this.handleReply = () => this.props.handleReply(this.props.comment.permalink), this.handleRestrictedButtonClick = () => {
						this.props.onToggleReportsDropdown(), this.sendCommentModEventWithName("comment_report_menu")
					}, this.handleSave = () => {
						this.props.comment.isSaved ? this.props.sendEvent(Object(ae.a)("unsave", this.props.comment.id)) : this.props.sendEvent(Object(ae.a)("save", this.props.comment.id)), this.props.onToggleSave()
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(ae.b)(e, this.props.comment.id)), this.sendCommentEventWithName = e => this.props.sendEvent(Object(K.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentEventWithNameShare = () => this.sendCommentEventWithName("share"), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(ae.a)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(ae.e)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? o.a.createElement(ne.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: se.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					}) : o.a.createElement(se.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: se.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					})
				}
				renderModTools() {
					const {
						comment: e,
						currentUser: t,
						moderatorPermissions: s,
						modModeEnabled: n,
						showModTools: r
					} = this.props, i = Object(q.a)(s), a = !!t && t.displayText === e.author;
					if (r && i) return n ? o.a.createElement(Pe, {
						comment: e,
						isCommentAuthor: a
					}) : o.a.createElement(ke, {
						dropdownId: `${e.id}-profile-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: this.handleModActionsMenu
					}, o.a.createElement(le.a, null), o.a.createElement(S.a, {
						comment: e,
						tooltipId: `${e.id}-profile-mod-actions-menu`
					}))
				}
				renderReportsDropdown() {
					const {
						comment: e,
						modModeEnabled: t,
						showModTools: s
					} = this.props, n = Object(W.a)(e);
					if (s && Object(W.c)(e) && !t) return o.a.createElement(R.a, {
						text: `${n}`,
						onClick: this.handleRestrictedButtonClick,
						selected: this.props.activeTooltipId === Ae(e.id),
						id: Ae(e.id)
					}, o.a.createElement(B.a, {
						model: e,
						onIgnoreReports: this.handleIgnoreReports,
						tooltipId: Ae(e.id)
					}), e.ignoreReports ? o.a.createElement(ce.a, null) : o.a.createElement(me.a, null))
				}
				renderDistinguishDropdown() {
					const {
						comment: e,
						currentUser: t,
						moderatorPermissions: s,
						modModeEnabled: n,
						onDistinguishComment: r,
						showModTools: i
					} = this.props, a = Object(q.a)(s), d = !!t && t.displayText === e.author, c = !!t && t.isEmployee;
					if (i && d && !e.bannedBy && (c || a && !n)) return o.a.createElement(R.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.activeTooltipId === Te(e.id)
					}, o.a.createElement(Ee.a, null), o.a.createElement(D.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.activeTooltipId === Te(e.id),
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: c,
						isUserMod: a,
						onDistinguishComment: r,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: Te(e.id)
					}))
				}
				render() {
					const {
						comment: e,
						className: t,
						commentsPageKey: s,
						currentUser: n,
						deleteComment: r,
						isLoggedIn: i,
						isPendingDeletion: a,
						moderatorPermissions: d,
						postIsLocked: c,
						postPermalink: l,
						subreddit: m,
						toggleDeleteCommentModal: p
					} = this.props, u = Object(q.a)(d), h = !!n && n.displayText === e.author, b = !c && !e.isLocked || u && i, x = n && e.isGildable;
					return o.a.createElement("div", {
						className: t
					}, o.a.createElement(Ne, null, b && o.a.createElement(Me, {
						onClick: this.handleReply,
						disabled: a
					}, E.fbt._("Reply", null, {
						hk: "1xBqIs"
					})), x && o.a.createElement(Me, {
						onClick: this.handleGild
					}, E.fbt._("Give Award", null, {
						hk: "pQJYk"
					})), o.a.createElement(oe.a, {
						dropdownId: `${s}--${e.id}-comment-share-menu`,
						permalink: Object(O.a)(l, e.id),
						sendEventWithName: this.sendCommentEventWithName,
						subreddit: m
					}, o.a.createElement(Me, {
						onClick: this.sendCommentEventWithNameShare
					}, E.fbt._("share", null, {
						hk: "3YIXpa"
					}))), this.renderReportsDropdown(), o.a.createElement(je, {
						dropdownId: Re(s, e.id),
						onClick: this.handleOverflowMenuClick
					}, !h && !a && o.a.createElement(Ie, {
						displayText: E.fbt._("report", null, {
							hk: "ad7CE"
						}),
						onClick: this.props.onReportClick
					}, o.a.createElement(ye, null)), o.a.createElement(Ie, {
						displayText: e.isSaved ? E.fbt._("Unsave", null, {
							hk: "4kQcAP"
						}) : E.fbt._("Save", null, {
							hk: "2rjVP3"
						}),
						isSelected: e.isSaved,
						onClick: this.handleSave
					}, e.isSaved ? o.a.createElement(_e, null) : o.a.createElement(we, null)), h && o.a.createElement(Ie, {
						displayText: E.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						onClick: this.handleEdit
					}, o.a.createElement(Oe, null)), h && o.a.createElement(Ie, {
						displayText: E.fbt._("delete", null, {
							hk: "e8kvB"
						}),
						onClick: this.handleDelete
					}, o.a.createElement(Ce, null))), this.props.isConfirmModalOpen && o.a.createElement(A.a, {
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
						onConfirm: r,
						toggleModal: p,
						trackClick: y.a,
						withOverlay: !0
					}), this.renderModTools(), this.renderDistinguishDropdown()), this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var We = Le(Object(r.b)(De, (e, {
					comment: t,
					commentsPageKey: s
				}) => ({
					deleteComment: () => s && e(Object(P.h)(t.id, t.postId)),
					onDistinguishComment: (s, n) => e(Object(k.b)(t.id, s, n)),
					onIgnoreReports: () => e(Object(k.g)(t.id)),
					onGildClick: s => e(Object(I.d)({
						correlationId: s,
						thingId: t.id
					})),
					onReportClick: () => e(Object(M.c)(t.id)),
					onToggleDistinguishDropdown: () => e(Object(L.h)({
						tooltipId: Te(t.id)
					})),
					onToggleReportsDropdown: () => e(Object(L.h)({
						tooltipId: Ae(t.id)
					})),
					onToggleSave: () => e(Object(j.m)(t.id)),
					handleDelete: () => {
						e(Object(N.i)(Se(t.id))), e(Object(L.h)({
							tooltipId: Re(s, t.id)
						}))
					},
					handleEdit: s => {
						const n = Object(w.a)(t.postId, t.id, {}),
							o = {
								commentId: t.id,
								draftKey: Object(_.a)($.c.edit, t.id),
								text: t.bodyMD || "",
								commentMode: t.media && t.media.rteMode,
								commentsPageKey: n
							};
						e(Object(H.a)(s)), e(Object(P.f)(o))
					},
					handleReply: s => {
						const n = Object(w.a)(t.postId, t.id, {}),
							o = {
								parentCommentId: t.id,
								commentsPageKey: n
							};
						e(Object(H.a)(s)), e(Object(P.g)(o))
					},
					toggleDeleteCommentModal: () => e(Object(N.i)(Se(t.id)))
				}))(Object(re.c)(Object(U.b)(Fe)))),
				Be = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Ue = s("./src/reddit/components/RichTextJson/index.tsx"),
				Ve = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				ze = s("./src/reddit/selectors/commentSelector.ts"),
				qe = s("./src/reddit/components/Comments/ProfileComment/index.m.less"),
				He = s.n(qe);
			const Ke = ge.a.wrapped(Be.a, "TopMeta", He.a),
				$e = ge.a.div("ProfileCommentWrapper", He.a),
				Ge = ge.a.div("CommentBody", He.a),
				Je = Object(r.b)(() => Object(i.c)({
					comment: (e, t) => Object(ze.a)(e, t),
					flair: J.e
				})),
				Ze = Object(c.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.a = Je(e => {
				const {
					comment: t,
					commentsPageKey: s,
					flair: n,
					isExpanded: r,
					showFlatlist: i,
					showModTools: c
				} = e, l = s => o.a.createElement(Ue.a, {
					className: s,
					content: Object(Ve.a)(t),
					mediaMetadata: t.media && t.media.mediaMetadata,
					rtJsonElementProps: Ze(e)
				});
				return o.a.createElement($e, {
					className: Object(a.a)({
						[He.a.isRemoved]: !!t.bannedBy
					})
				}, o.a.createElement(Ke, {
					collapsedBecauseCrowdControl: !1,
					collapsed: !1,
					comment: t,
					commentsPageKey: s,
					flair: n,
					renderedInOverlay: !1
				}), o.a.createElement("div", null, !t.isDeleted && o.a.createElement(Ge, null, r ? l() : o.a.createElement(g, {
					height: d.Pb,
					isExpanded: r
				}, l)), !t.isDeleted && i && o.a.createElement(We, {
					comment: t,
					commentsPageKey: s,
					showModTools: c
				})))
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
				return x
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "d", (function() {
				return g
			})), s.d(t, "a", (function() {
				return w
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/PostList/Placeholder.tsx"),
				c = s("./src/reddit/constants/postLayout.ts"),
				l = s("./src/reddit/components/EmptyProfile/EmptyListing.m.less"),
				m = s.n(l);
			const p = a.a.div("PrimaryText", m.a),
				u = a.a.wrapped(d.a, "BackgroundPlaceholder", m.a),
				h = a.a.div("Wrapper", m.a);
			var b = ({
				children: e,
				className: t
			}) => r.a.createElement(h, {
				className: t
			}, r.a.createElement(u, {
				isLoading: !1,
				layout: c.g.Classic
			}), r.a.createElement(p, null, e));
			var x = ({
				className: e,
				profileName: t,
				timeSort: s = i.bc.ALL
			}) => r.a.createElement(b, {
				className: e
			}, s === i.bc.ALL ? n.fbt._("hmm... {profileName} hasn't commented on anything", [n.fbt._param("profileName", `u/${t}`)], {
				hk: "1MHn3t"
			}) : n.fbt._("hmm... {profileName} hasn't commented recently", [n.fbt._param("profileName", `u/${t}`)], {
				hk: "qN3uL"
			}));
			var v = ({
				className: e,
				profileName: t,
				timeSort: s = i.bc.ALL
			}) => r.a.createElement(b, {
				className: e
			}, s === i.bc.ALL ? n.fbt._("hmm... {profileName} hasn't posted anything", [n.fbt._param("profileName", `u/${t}`)], {
				hk: "28vBEd"
			}) : n.fbt._("hmm... {profileName} hasn't posted recently", [n.fbt._param("profileName", `u/${t}`)], {
				hk: "38GhqN"
			}));
			const {
				fbt: f
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var g = ({
					className: e,
					verb: t
				}) => r.a.createElement(b, {
					className: e
				}, f._("hmm... looks like you haven't {verb} yet", [f._param("verb", t)], {
					hk: "142tKN"
				})),
				E = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				C = s("./src/reddit/components/EmptyProfile/forbidden.m.less"),
				y = s.n(C);
			const {
				fbt: O
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var w = () => r.a.createElement("div", {
				className: y.a.container
			}, r.a.createElement(E.a, {
				className: y.a.hideIcon
			}), r.a.createElement("h3", {
				className: y.a.title
			}, O._("You do not have permission to access this resource", null, {
				hk: "10cPyp"
			})), r.a.createElement("p", {
				className: y.a.subtitle
			}, O._("You can only look at your own saved posts and comments", null, {
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
			const b = Object(m.t)(),
				x = Object(i.c)({
					layout: m.O
				}),
				v = Object(r.b)(x);
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
			t.a = b(v(h.a.wrapped(f, "Component", u.a)))
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
				v = s("./src/reddit/selectors/communityAwards.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/OverviewChronoComment/index.m.less"),
				E = s.n(g);
			const C = Object(i.b)(() => Object(a.c)({
				comment: x.a,
				isAwarded: (e, t) => {
					const s = Object(x.a)(e, t);
					return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
						const s = Object(v.a)(e, t);
						return s && s.coinPrice >= d.g
					})
				},
				isNightmodeOn: f.W
			}), e => ({
				openPost: t => e(Object(m.M)(t))
			}));
			var y = Object(l.a)(C(e => {
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
				w = s("./src/reddit/contexts/PageLayer/index.tsx"),
				_ = s("./src/reddit/helpers/isComment.ts"),
				j = s("./src/reddit/components/OverviewChronoList/ListItem.m.less"),
				P = s.n(j),
				k = s("./src/lib/lessComponent.tsx");

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const N = Object(w.t)({
					currentProfileName: w.h,
					isCommentsPage: w.w,
					isCommentPermalink: w.v,
					isProfilePostListing: w.I,
					pageLayer: e => e
				}),
				M = k.a.wrapped(O.a, "OverviewCommentPost", P.a),
				L = k.a.wrapped(r.default, "ClassicPost", P.a);
			t.a = N(e => {
				const {
					itemId: t,
					isFirstInCommentList: s,
					isLastInCommentList: n,
					allowModToolsUnderComments: r,
					height: i,
					width: a,
					...d
				} = e;
				return Object(_.a)(t) ? s ? o.a.createElement(o.a.Fragment, null, o.a.createElement(M, I({}, d, {
					availableWidth: a,
					commentId: t
				})), o.a.createElement(y, {
					commentId: t,
					first: s,
					last: n,
					showModTools: r
				})) : o.a.createElement(y, {
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
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/controls/InternalLink/index.tsx"),
				p = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				u = s("./src/reddit/selectors/commentSelector.ts"),
				h = s("./src/reddit/components/PostContainer/index.tsx"),
				b = s("./src/reddit/components/PostTitle/index.tsx"),
				x = s("./src/reddit/components/PostTopMeta/index.tsx"),
				v = s("./src/reddit/contexts/Post/index.tsx"),
				f = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				g = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				E = s.n(g),
				C = s("./src/reddit/components/OverviewCommentPost/index.m.less"),
				y = s.n(C);
			const {
				fbt: O
			} = s("./node_modules/fbt/lib/FbtPublic.js"), w = c.a.wrapped(m.a, "InternalLink", y.a), _ = c.a.div("Wrapper", y.a), j = c.a.div("Row", y.a), P = c.a.wrapped(f.a, "CommentIcon", y.a), k = c.a.div("TitleContainer", y.a), I = c.a.div("PostTitleContainer", y.a), N = c.a.wrapped(b.c, "PostTitle", y.a), M = c.a.wrapped(x.d, "PostTopMeta", y.a), L = c.a.wrapped(x.a, "MetaSeparator", y.a), S = Object(r.b)(() => Object(i.c)({
				comment: u.a
			})), T = e => {
				const {
					post: t,
					subredditOrProfile: s
				} = e;
				if (s) return o.a.createElement(n.Fragment, null, o.a.createElement(L, null), o.a.createElement(M, {
					metaSeparatorClassName: y.a.postTopMetaMetaSeparator,
					post: t,
					showSub: !0,
					showTimestamp: !1,
					subredditOrProfile: s
				}))
			}, R = e => {
				const {
					comment: t,
					profileName: s
				} = e;
				if (!t) return null;
				const n = s || t.author;
				return o.a.createElement(w, {
					"data-click-id": "user",
					to: `/user/${n}/`
				}, n)
			};
			t.a = Object(d.a)(Object(v.b)(S(Object(l.c)(e => {
				const {
					className: t,
					eventFactory: s,
					onClickPost: n,
					post: r
				} = e;
				return o.a.createElement(h.a, {
					className: Object(a.a)(E.a.compactPostStyles, y.a.overviewCommentPost, {
						[y.a.banned]: !!e.post.bannedBy,
						[y.a.reported]: !e.post.bannedBy && !!e.post.numReports && e.post.numReports > 0
					}, t),
					post: r,
					onClick: n,
					eventFactory: s
				}, o.a.createElement(_, {
					style: {
						background: Object(p.e)(e)
					}
				}, o.a.createElement(j, null, o.a.createElement(P, null), o.a.createElement(k, null, O._("{postAuthor} commented on {postTitle} {postMeta}", [O._param("postAuthor", R(e)), O._param("postTitle", o.a.createElement(I, null, o.a.createElement(N, {
					outboundLinkClassName: y.a.postTitleOutboundLink,
					post: r,
					size: b.b.Small,
					titleClassName: y.a.postTitleTitle
				}))), O._param("postMeta", T(e))], {
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
				v = s("./src/reddit/contexts/Post/index.tsx"),
				f = s("./src/lib/LRUCache/index.ts"),
				g = s("./src/telemetry/index.ts"),
				E = s("./src/telemetry/models/Timer.ts"),
				C = s("./src/reddit/components/PostList/index.m.less"),
				y = s.n(C);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const w = 500,
				_ = new f.a(w),
				j = new f.a(w),
				P = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				k = (e, t, s, n, o, r) => {
					const i = `entered-${e}-${t}-${s?`last-${n}-${o}`:""}`;
					let a = _.get(i);
					return void 0 === a && (a = () => {
						s && r.onBottomViewed(n, o), r.trackOnPostEnteredViewport(e, t)
					}, _.set(i, a)), a
				},
				I = (e, t) => {
					const s = `click-${e}`;
					let n = j.get(s);
					return void 0 === n && (n = (e, s) => {
						s.isSponsored && t.fireAdPixelsOfType(s, c.a.Click), s.isSponsored && s.source && s.source.outboundUrl ? Object(d.d)(s.source.outboundUrl, d.c.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(b.a)(e)
						})
					}, j.set(s, n)), n
				};
			class N extends i.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new f.a(w), this.updateScrollerRef = e => {
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
						setTimeout(() => Object(g.b)(a.l.Redesign, {
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
						setTimeout(() => Object(g.b)(a.l.Redesign, {
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
						} = this.props, u = p[e], h = `overview-chrono-list-item-[layout: ${r}]-[itemId: ${e}]`, b = k(u, r, s, a, d, this.props), x = {
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
						}, f = this.props.itemComponent;
						m = {
							estHeight: this.props.estimateItemHeight(e, r, n),
							id: e,
							isFocusable: !1,
							trackOnEnteredViewport: b,
							render: e => i.a.createElement(v.a, {
								postId: x.postId
							}, i.a.createElement(f, O({}, x, e)))
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
						className: y.a.placeholder
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
						className: y.a.placeholder
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
			t.a = N
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
				v = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				f = s("./src/reddit/constants/componentSizes.ts"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				E = s("./src/reddit/controls/Dropdown/index.tsx"),
				C = s("./src/reddit/controls/InternalLink/index.tsx"),
				y = s("./src/reddit/icons/fonts/index.tsx"),
				O = s("./src/reddit/models/Profile/index.ts"),
				w = s("./src/reddit/featureFlags/index.ts"),
				_ = s("./src/reddit/selectors/tooltip.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				P = s("./src/reddit/selectors/userPrefs.ts"),
				k = s("./src/reddit/components/ProfileNavMenu/index.m.less"),
				I = s.n(k);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const M = Object(g.t)({
					routeName: g.V,
					privateListingType: g.i
				}),
				L = Object(m.c)({
					isDropdownMenuOpen: e => Object(_.a)(e) === T,
					isOwnProfile: (e, t) => Object(j.O)(e, t.profileName),
					isSnoovatar30Enabled: w.d.snoovatar30,
					isSubscriptionsPinned: P.b
				}),
				S = Object(u.a)(E.a),
				T = "profile-nav-menu-tooltip",
				R = f.g + f.r + f.q;
			var A;
			t.a = M(Object(c.b)(L, e => ({
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
					}), [g, E] = Object(a.useState)(x.filter(e => e.position === A.MENU)), [C, O] = Object(a.useState)([]), w = [], _ = () => {
						const e = document.documentElement.clientWidth - 2 * f.q,
							t = e > R ? R : e;
						let s = 42;
						w.forEach(e => {
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
							w.push({
								text: e.textContent.toLowerCase(),
								offsetWidth: e.offsetWidth
							})
						}), _())
					}), window.addEventListener("resize", _), () => {
						window.removeEventListener("resize", _)
					}), []), d.a.createElement("div", {
						className: I.a.container
					}, d.a.createElement(v.a, {
						bladeOpen: !1,
						offsetLeft: m ? f.u : 0,
						render: () => d.a.createElement(d.a.Fragment, null, d.a.createElement("div", {
							className: I.a.menuContainer,
							ref: b
						}, g.map(e => d.a.createElement(D, N({}, e, {
							key: e.key
						})))), p && d.a.createElement("button", {
							className: Object(h.a)(I.a.mainLink),
							id: T,
							onClick: () => c(T)
						}, d.a.createElement(y.a, {
							name: "overflow_horizontal"
						})), p && d.a.createElement(S, {
							className: I.a.dropdown,
							isOpen: e,
							tooltipId: T
						}, C.map(e => d.a.createElement(F, N({}, e, {
							key: e.key
						})))))
					}))
				})),
				function(e) {
					e.MENU = "menu", e.DROPDOWN = "dropdown"
				}(A || (A = {}));
			const D = ({
					isActive: e,
					text: t,
					url: s,
					internal: n
				}) => n ? d.a.createElement(C.a, {
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
				F = ({
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
						isActive: s === b.Jb.PROFILE_PRIVATE && o === O.a.Saved,
						key: "profile.mainmenu.saved",
						text: n.fbt._("Saved", null, {
							hk: "2w1YRh"
						}),
						url: `/user/${e}/saved/`,
						position: A.MENU
					}, {
						internal: !0,
						isActive: s === b.Jb.PROFILE_PRIVATE && o === O.a.Hidden,
						key: "profile.mainmenu.hidden",
						text: n.fbt._("Hidden", null, {
							hk: "225tka"
						}),
						url: `/user/${e}/hidden/`,
						position: A.MENU
					}, {
						internal: !0,
						isActive: s === b.Jb.PROFILE_PRIVATE && o === O.a.Upvoted,
						key: "profile.mainmenu.upvoted",
						text: n.fbt._("Upvoted", null, {
							hk: "RKwFZ"
						}),
						url: `/user/${e}/upvoted/`,
						position: A.MENU
					}, {
						internal: !0,
						isActive: s === b.Jb.PROFILE_PRIVATE && o === O.a.Downvoted,
						key: "profile.mainmenu.downvoted",
						text: n.fbt._("Downvoted", null, {
							hk: "2F9IL4"
						}),
						url: `/user/${e}/downvoted/`,
						position: A.MENU
					}] : [];
					t ? (i.push({
						internal: !0,
						isActive: s === b.Jb.PROFILE_PRIVATE && o === O.a.ReceivedGildings,
						key: "profile.mainmenu.receiverGildings",
						text: n.fbt._("Awards received", null, {
							hk: "iwLBV"
						}),
						url: `/user/${e}/gilded/`,
						position: A.MENU
					}), i.push({
						internal: !0,
						isActive: s === b.Jb.PROFILE_PRIVATE && o === O.a.GivenGildings,
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
						isActive: s === b.Jb.PROFILE_SNOOBUILDER,
						key: "profile.mainmenu.snoobuilder",
						text: n.fbt._("Snoobuilder", null, {
							hk: "3SSKff"
						}),
						url: `/user/${e}/snoo/`,
						position: A.MENU
					}] : [];
					return [{
						internal: !0,
						isActive: s === b.Jb.PROFILE_OVERVIEW,
						key: "profile.mainmenu.overview",
						text: n.fbt._("Overview", null, {
							hk: "2IBbqy"
						}),
						url: `/user/${e}/`,
						position: A.MENU
					}, {
						internal: !0,
						isActive: s === b.Jb.PROFILE_POSTS,
						key: "profile.mainmenu.posts",
						text: n.fbt._("Posts", null, {
							hk: "a1BoF"
						}),
						url: `/user/${e}/posts/`,
						position: A.MENU
					}, {
						internal: !0,
						isActive: s === b.Jb.PROFILE_COMMENTS,
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
			const v = Object(n.a)({
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
				f = e => {
					const t = Object(i.e)(e => Object(x.h)(e));
					return r.a.createElement(a.a, {
						className: e.className
					}, r.a.createElement(v, {
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
			f.defaultProps = {
				isOverlay: !1
			}, t.a = f
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
					renderItem: v,
					title: f
				} = e, [g, E] = Object(i.useState)(!1), C = d.length > h || s, y = (!C || g ? d : r()(d, h)).map(e => v({
					item: e
				})), O = () => {
					g || E(!0), g && !s && E(!1), s && b && b()
				};
				return a.a.createElement(c.a, {
					className: t,
					headerButton: o,
					title: f
				}, y, a.a.createElement(p.a, null, a.a.createElement(u.a, null, C && (() => {
					const e = !g || s && b ? n.fbt._("View More", null, {
						hk: "1RK8uA"
					}) : n.fbt._("View Less", null, {
						hk: "1M72mK"
					});
					return a.a.createElement(l.o, {
						onClick: O
					}, x ? a.a.createElement(m.a, {
						sizePx: 10
					}) : e)
				})())))
			};
			h.defaultProps = {
				minimizedLength: d.Ob
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
			const v = Object(a.c)({
					currentUser: h.j,
					moderated: p.n,
					subscriptions: u.f,
					hasMoreModerated: p.d,
					loadMorePending: p.a
				}),
				f = Object(i.b)(v, (e, t) => ({
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
			t.a = f(e => {
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
				v = ({
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
					renderItem: v,
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
						n = Object(m.e)(e);
					return (s && n ? n[s.id] : null) || []
				}
			});

			function v({
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
				renderItem: v
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
				v = s("./src/reddit/components/SidebarTrophyCase/index.m.less"),
				f = s.n(v),
				g = s("./src/lib/lessComponent.tsx"),
				E = s("./src/lib/opener/index.ts");
			const C = Object(a.c)({
				trophyCase: (e, {
					profileName: t
				}) => Object(x.r)(e, Object(x.m)(e, t))
			}, b);
			t.a = Object(i.b)(C)(({
				trophyCase: e
			}) => 0 === e.length ? null : r.a.createElement(d.a, {
				title: n.fbt._("Trophy Case ({trophyCount})", [n.fbt._param("trophyCount", `${e.length}`)], {
					hk: "mzh3V"
				}),
				items: e,
				renderItem: P
			}));
			const y = g.a.wrapped(p.a, "TrophyItem", f.a),
				O = g.a.div("TrophyIcon", f.a),
				w = g.a.h5("TrophyName", f.a),
				_ = g.a.div("TrophyContent", f.a),
				j = g.a.wrapped(c.c, "Description", f.a),
				P = ({
					item: e
				}) => {
					const t = Object(m.a)(),
						s = r.a.createElement("img", {
							src: e.icon,
							title: e.name
						});
					return r.a.createElement(y, {
						key: e.id
					}, r.a.createElement(O, null, e.url ? r.a.createElement("a", {
						target: E.c.BLANK,
						rel: E.b,
						href: e.url,
						onClick: () => t((e => t => ({
							source: "trophy",
							action: "click",
							noun: "trophy",
							...l.defaults(t),
							actionInfo: Object(l.actionInfo)(t, {
								paneName: "profile_about"
							}),
							profile: l.profile(t),
							trophy: e
						}))({
							id: e.id,
							name: e.name
						}))
					}, s) : s), r.a.createElement(_, null, r.a.createElement(w, null, e.name), r.a.createElement(j, null, e.description)))
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
				v = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				f = s("./src/reddit/icons/svgs/Twitter/index.tsx"),
				g = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				E = s("./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less"),
				C = s.n(E);
			var y = e => {
					const {
						account: t,
						clickEvent: s,
						provider: n
					} = e;
					let r, i = t.username,
						a = "";
					return n !== p.a.Twitter ? null : (r = o.a.createElement(f.a, {
						className: C.a.twitterLogo
					}), a = b.fbt._("View on Twitter", null, {
						hk: "39S5oy"
					}), i = `@${t.username}`, o.a.createElement(g.a, null, o.a.createElement("span", {
						className: C.a.icon
					}, r), o.a.createElement(x.b, {
						className: C.a.link,
						href: t.link,
						onClick: s
					}, o.a.createElement("div", {
						className: C.a.linkTitle
					}, o.a.createElement("span", {
						className: C.a.name
					}, i), o.a.createElement(v.a, {
						className: C.a.linkIcon
					})), o.a.createElement("div", {
						className: C.a.linkDescription
					}, a))))
				},
				O = s("./src/reddit/components/Widgets/ConnectedAccounts/index.m.less"),
				w = s.n(O);
			const {
				fbt: _
			} = s("./node_modules/fbt/lib/FbtPublic.js"), j = Object(i.c)({
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
			}), P = Object(r.b)(j, e => ({
				trackTwitterAccountClicked: t => e((e, s) => m.l(s(), t))
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
				return s ? o.a.createElement(a.a, null, o.a.createElement(c.b, null, o.a.createElement(c.a, null, _._("Connected accounts", null, {
					hk: "1ce9Jz"
				})), s && o.a.createElement("div", {
					className: w.a.account
				}, o.a.createElement(y, {
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
				return f
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
				x = s("./src/reddit/selectors/user.ts");
			const v = {
					autoplayPref: x.b,
					activeModalId: m.a,
					crosspost: b.d,
					isActive: b.j,
					isChatPost: p.d,
					isCurrentUserProfilePost: b.k,
					isExpanded: b.l,
					isLoggedIn: x.K,
					moderatorPermissions: u.k,
					modModeEnabled: c.Q,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: h.a,
					showMedia: c.r,
					flairStyleTemplate: c.S
				},
				f = (e, {
					postId: t
				}) => ({
					handleVote: s => {
						const n = s === a.a.upvoted ? Object(r.fb)(t) : Object(r.w)(t);
						e(n)
					},
					onIgnoreReports: () => e(Object(r.bb)(t)),
					onOpenReportsDropdown: t => e(Object(i.h)({
						tooltipId: t
					}))
				}),
				g = Object(n.b)(() => Object(o.c)(v), f, (e, t, s) => ({
					...e,
					...t,
					...s,
					formatTitle: e => e.title
				}));
			t.a = e => Object(l.b)(g(Object(d.b)(e)))
		},
		"./src/reddit/connectors/ClassicPost/searchResults.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/LRUCache/index.ts"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/connectors/ClassicPost/index.tsx");
			const l = Object(d.t)({
					searchQuery: d.W
				}),
				m = new a.a(250),
				p = e => {
					const t = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const s = `${e.id}-${t}`;
						let n = m.get(s);
						if (void 0 === n) {
							const r = new RegExp(`(\\b${t}\\b)`, "gi"),
								i = e.title.split(r);
							for (let e = 1; e < i.length; e += 2) i[e] = o.a.createElement("em", {
								style: {
									fontWeight: 700
								}
							}, i[e]);
							n = o.a.createElement("span", {
								style: {
									fontWeight: "normal"
								}
							}, o.a.Children.toArray(i)), m.set(s, n)
						}
						return n
					}
				},
				u = Object(r.b)(() => Object(i.c)(c.c), c.b, (e, t, s) => ({
					...e,
					...t,
					...s,
					formatTitle: p(s.searchQuery || "")
				}));
			t.a = e => l(u(e))
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
				return v
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
				h = e => Object(n.l)(.2, e),
				b = e => e && e.postBackgroundColor ? {
					backgroundColor: h(e.postBackgroundColor)
				} : m,
				x = e => e.isActive ? l.a.mIsActive : void 0,
				v = e => {
					const t = Object(r.a)(Object(o.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
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
		"./src/reddit/icons/svgs/Save/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_2qT9eltTv4vv9GxxEZqvc0"
			}
		},
		"./src/reddit/icons/svgs/Save/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Save/index.m.less"),
				a = s.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("defs", null, o.a.createElement("path", {
				id: "save-svga",
				d: "M14 16.209l-3.403-1.486a1.52 1.52 0 0 0-1.198.002L6 16.21V5.5c0-.52-.087-1.024-.255-1.5H12.5c.827 0 1.5.673 1.5 1.5V16.21zM12.5 2h-11a.5.5 0 1 0 0 1C2.879 3 4 4.12 4 5.5v12.236a.999.999 0 0 0 1.4.916l4.6-2.008 4.6 2.008a1 1 0 0 0 1.4-.917V5.5C16 3.57 14.43 2 12.5 2z"
			})), o.a.createElement("g", {
				fill: "inherit",
				fillRule: "evenodd"
			}, o.a.createElement("path", {
				d: "M0 20h20V0H0z",
				fill: "none"
			}), o.a.createElement("mask", {
				id: "save-svgb",
				fill: "none"
			}, o.a.createElement("use", {
				xlinkHref: "#save-svga"
			})), o.a.createElement("use", {
				fill: "inherit",
				xlinkHref: "#save-svga"
			}), o.a.createElement("g", {
				mask: "url(#save-svgb)",
				fill: "none"
			}, o.a.createElement("path", {
				d: "M0 0h20v20H0z"
			}))))
		},
		"./src/reddit/icons/svgs/Saved/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_2OUcXcp-8gkoFyUSKdNTxF"
			}
		},
		"./src/reddit/icons/svgs/Saved/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Saved/index.m.less"),
				a = s.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M12.5 2h-11a.5.5 0 0 0 0 1A2.5 2.5 0 0 1 4 5.5v12.24a1 1 0 0 0 1.4.92l4.6-2 4.6 2a1 1 0 0 0 1.4-.92V5.5A3.5 3.5 0 0 0 12.5 2zm1 6.53l-4.26 4.29a.75.75 0 0 1-1.06 0L6.47 11.1A.75.75 0 0 1 7.53 10l1.18 1.18 3.76-3.76a.75.75 0 0 1 1.06 1.06z"
			}))
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileComments~ProfileOverview~ProfilePrivate.c46625b9c108261351f6.js.map