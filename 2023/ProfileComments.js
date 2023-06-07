// https://www.redditstatic.com/desktop2x/ProfileComments.97d728ae6b6712bdc5a8.js
// Retrieved at 6/7/2023, 1:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileComments"], {
		"./src/lib/LiveChatActiveUsers/index.m.less": function(e, t, s) {
			e.exports = {
				liveChatActiveUsers: "_25wqhmS87KWZppCM1ZHphX"
			}
		},
		"./src/lib/LiveChatActiveUsersWithLiveLabel/index.m.less": function(e, t, s) {
			e.exports = {
				liveParticipation: "_3qjBuOjYOffFET145CIGgi"
			}
		},
		"./src/lib/LiveLabel/index.m.less": function(e, t, s) {
			e.exports = {
				LiveLabel: "_1-nQNZpTU7wWajQDxaSGx8",
				liveLabel: "_1-nQNZpTU7wWajQDxaSGx8"
			}
		},
		"./src/reddit/actions/pages/profileComments/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "profileCommentsPending", (function() {
				return S
			})), s.d(t, "profileCommentsLoaded", (function() {
				return R
			})), s.d(t, "profileCommentsFailed", (function() {
				return A
			})), s.d(t, "profileCommentsRequested", (function() {
				return F
			})), s.d(t, "moreItemsPending", (function() {
				return D
			})), s.d(t, "moreItemsLoaded", (function() {
				return B
			})), s.d(t, "moreItemsFailed", (function() {
				return W
			})), s.d(t, "moreItemsRequested", (function() {
				return U
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/lodash/difference.js"),
				n = s.n(o),
				r = s("./node_modules/lodash/pick.js"),
				i = s.n(r),
				a = s("./src/lib/makeActionCreator/index.ts"),
				d = s("./src/lib/makeListingKey/index.ts"),
				c = s("./src/reddit/actions/contentGate.ts"),
				l = s("./src/reddit/actions/externalAccount.ts"),
				m = s("./src/reddit/actions/moderatingSubreddits.ts"),
				p = s("./src/reddit/actions/pages/profileShared.ts"),
				u = s("./src/reddit/actions/platform.ts"),
				h = s("./src/reddit/actions/profile/index.ts"),
				b = s("./src/reddit/actions/subreddit.ts"),
				x = s("./src/reddit/constants/errors.ts"),
				O = s("./src/reddit/constants/parameters.ts"),
				v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				C = s("./src/config.ts"),
				f = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				g = s("./src/lib/constants/index.ts"),
				P = s("./src/lib/makeApiRequest/index.ts"),
				j = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				E = s("./src/reddit/models/Comment/addProfileImgParam.ts"),
				y = s("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				I = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const w = (e, t, s, o) => {
				let n = Object(j.a)(Object(f.a)(Object(y.a)(Object(I.a)(`${C.a.gatewayUrl}/desktopapi/v1/user/${t}/comments`))));
				return o && (n = Object(E.a)(n)), Object(P.a)(e, {
					data: s,
					endpoint: n,
					method: g.pb.GET
				})
			};
			var _ = s("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				k = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				L = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				N = s("./src/reddit/selectors/profile.ts"),
				T = s("./src/reddit/selectors/profileComments.ts"),
				M = s("./src/reddit/actions/pages/profileComments/constants.ts");
			const S = Object(a.a)(M.f),
				R = Object(a.a)(M.e),
				A = Object(a.a)(M.d),
				F = e => async (t, s, o) => {
					const {
						queryParams: n,
						params: r
					} = e, {
						sort: a,
						t: v
					} = Object(p.b)(n), {
						profileName: C
					} = r, f = Object(d.a)(`u_${C}`, a, e.queryParams), {
						profileCommentsPage: g
					} = s(), P = g.commentIds[f], j = g.api.error[f], E = g.api.pending[f];
					if (await t(h.d(C)), E || P && !j) {
						if (P) {
							const e = Object(N.s)(s(), {
								profileName: C
							});
							t(u.n({
								title: e
							}))
						}
						return
					}
					const y = {
						...i()(e.queryParams, [...O.p, O.l]),
						sort: a,
						t: Object(_.a)(a, v)
					};
					t(S({
						key: f
					}));
					const I = await Object(k.a)("profileComments", () => w(o.apiContext(), C, y, Object(L.a)(s())));
					if (!I.ok) return t(A({
						account: I.body.data ? I.body.data.account : null,
						error: I.body.reason ? {
							type: I.body.reason
						} : I.error,
						key: f
					})), I.body.reason === x.a.DeletedProfile && t(Object(c.v)({
						profileName: C
					})), void t(u.o(I.status));
					const T = I.body;
					t(R({
						key: f,
						meta: s().meta,
						...T
					})), await Promise.all([t(Object(p.c)(C)), t(Object(b.q)()), t(Object(m.b)()), t(l.o(C))])
				}, D = Object(a.a)(M.c), B = Object(a.a)(M.b), W = Object(a.a)(M.a), U = () => async (e, t, s) => {
					let {
						apiContext: o
					} = s;
					const r = t(),
						{
							currentPage: a
						} = r.platform;
					if (!a || !a.routeMatch) return;
					const {
						queryParams: c,
						params: l
					} = a.routeMatch.match, {
						sort: m,
						t: u
					} = Object(p.b)(c), {
						profileName: h
					} = l, b = Object(d.a)(`u_${h}`, m, c), x = Object(T.d)(r, {
						listingKey: b
					});
					if (!x) return;
					const C = Object(T.b)(r, {
							listingKey: b
						}),
						f = Object(T.c)(r, {
							listingKey: b
						}),
						g = f && f[x.token];
					if (C || g) return;
					e(D({
						key: b,
						fetchedToken: x.token
					}));
					const P = await w(o(), h, {
						after: x.token,
						dist: x.dist,
						sort: m,
						t: u,
						...i()(c, O.p),
						layout: Object(v.U)(r, {}).toLowerCase()
					}, Object(L.a)(r));
					if (P.ok) {
						const t = Object(T.f)(r, {
								listingKey: b
							}),
							s = {
								...P.body,
								commentIds: n()(P.body.commentIds, t)
							};
						e(B({
							fetchedToken: x.token,
							key: b,
							meta: r.meta,
							...s
						}))
					} else e(W({
						account: P.body.data ? P.body.data.account : null,
						error: P.error,
						fetchedToken: x.token,
						key: b
					}))
				}
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/ads/index.ts"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/getShortenedLink.ts"),
				c = s("./src/lib/hooks/usePrevious.ts"),
				l = s("./src/reddit/hooks/useTracking.ts"),
				m = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				p = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				u = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				h = s("./src/reddit/components/CreatorStats/loader.tsx"),
				b = s("./src/reddit/components/Econ/Audio/index.m.less"),
				x = s.n(b),
				O = s("./src/reddit/components/Econ/Audio/MuteIcon.tsx");
			const {
				fbt: v
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var C = () => n.a.createElement("div", {
					className: x.a.endedClassicContainer
				}, n.a.createElement(O.a, {
					className: x.a.muteIcon
				})),
				f = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				g = s("./src/reddit/components/ExpandoButton/index.tsx"),
				P = s("./src/reddit/components/Flatlist/index.tsx"),
				j = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				E = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				y = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				I = s("./src/reddit/components/ModModeReports/index.tsx"),
				w = s("./src/reddit/components/ModModeReports/helpers.ts"),
				_ = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				k = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				L = s("./src/reddit/components/PostContainer/index.tsx"),
				N = s("./src/reddit/components/PostMeta/index.tsx"),
				T = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				M = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				S = s("./src/reddit/components/PostTitle/index.tsx"),
				R = s("./src/reddit/components/PostTopMeta/index.tsx"),
				A = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				F = s("./src/reddit/models/Audio/index.ts"),
				D = s("./src/reddit/models/Media/index.ts"),
				B = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				W = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				U = s("./src/reddit/constants/postLayout.ts"),
				V = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				K = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				H = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				J = s("./src/reddit/helpers/search/renderMedia.tsx"),
				G = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				z = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				q = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				Z = s.n(q),
				Q = s("./src/reddit/models/Post/index.ts"),
				Y = s("./src/redditGQL/types.ts"),
				X = s("./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx"),
				$ = s("./src/reddit/components/ClassicPost/index.m.less"),
				ee = s.n($);

			function te() {
				return (te = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const se = Object(a.a)(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: a,
					handleVote: b,
					isExpanded: x,
					inSubredditOrProfile: O,
					eventFactory: v,
					flairStyleTemplate: W,
					formatTitle: q,
					hostPostData: $,
					isCheckboxSelected: se,
					isCurrentUserProfilePost: oe,
					isFrontpage: ne,
					isGalleryTileLayoutDefault: re,
					isLoggedIn: ie,
					isOverlay: ae,
					imageGalleryCurrentItem: de,
					moderatorPermissions: ce,
					modModeEnabled: le,
					onClickPost: me,
					onIgnoreReports: pe,
					onOpenReportsDropdown: ue,
					onSizeChanged: he,
					poll: be,
					post: xe,
					postId: Oe,
					redditStyle: ve,
					scrollerItemRef: Ce,
					showBulkActionCheckbox: fe,
					showEditFlair: ge,
					showMedia: Pe,
					shouldShowInsightsButton: je,
					subredditOrProfile: Ee,
					toggleCheckbox: ye,
					userIsOp: Ie,
					shouldShowGalleryTileOption: we,
					showCTAExperimentDesign: _e
				} = e, ke = Object(l.a)(), Le = Object(c.a)(x);
				Object(o.useEffect)(() => {
					he && Le !== x && he(xe.id)
				}, [x, he, xe.id, Le]);
				const Ne = ve ? void 0 : W,
					Te = s || void 0,
					Me = Object(H.a)(ce),
					Se = Object(V.a)(ce),
					Re = Object(K.a)(ce),
					Ae = le && H.a,
					Fe = Object(y.a)(xe),
					De = Object(w.c)(xe),
					Be = !!xe.media && xe.media.type === D.o.RTJSON,
					We = Ie && Be,
					Ue = O && !Pe,
					Ve = !!xe.recommendationContext,
					Ke = {
						flairStyleTemplate: Ne,
						post: xe,
						inSubredditOrProfile: O,
						isCurrentUserProfilePost: oe,
						isOverlay: ae,
						shouldShowSubscribeButton: !(ne && ie) || Ve && ie,
						subredditOrProfile: Ee
					},
					He = Object(r.t)(xe, de),
					[Je, Ge] = Object(o.useState)(!1),
					ze = Object(o.useCallback)(() => {
						Ge(!Je), ke(Object(z.d)(Oe))
					}, [Je, Oe, ke]);
				let qe = n.a.createElement(B.a, {
					className: ee.a.classicThumbnail,
					crosspost: Te && xe,
					isMeta: xe.isMeta,
					post: Te || xe,
					redditStyle: ve,
					templatePlaceholderImage: Ne && Ne.postPlaceholderImage
				});
				Object(F.b)(xe) && (qe = n.a.createElement(C, null));
				const Ze = Object(Q.r)(xe);
				return n.a.createElement(L.b, {
					className: Object(i.a)(Z.a.classicPostStyles, ee.a.postContainer, Object(G.a)(e), {
						[ee.a.shouldShowOverflow]: je
					}, t),
					isOverlay: ae,
					style: {
						...Object(G.d)(e),
						...Object(G.b)(Ne)
					},
					post: xe,
					onClick: me,
					eventFactory: v
				}, n.a.createElement(M.a, {
					model: xe,
					handleVote: b,
					showBulkActionCheckbox: fe,
					isCheckboxSelected: se,
					toggleCheckbox: ye,
					flairStyleTemplate: Ne,
					redditStyle: ve,
					postId: Oe
				}), n.a.createElement(k.a, {
					className: je ? ee.a.shouldUseRoundedBorder : void 0,
					"data-click-id": "background",
					flairStyleTemplate: Ne
				}, n.a.createElement(f.a, {
					className: ee.a.eventMeta,
					post: xe
				}), n.a.createElement("div", {
					className: ee.a.mainBody
				}, n.a.createElement("div", {
					className: Ue ? ee.a.expandoContainer : ee.a.thumbnailContainer
				}, !Ue && qe, n.a.createElement(g.a, {
					crosspost: Te,
					className: ee.a.rightExpando,
					isExpanded: !!x,
					post: xe,
					useMediaIcons: !1
				})), n.a.createElement("div", {
					className: Object(i.a)(ee.a.content, {
						[ee.a.showBulkActionCheckbox]: fe
					}),
					"data-click-id": "body"
				}, Ze && n.a.createElement(_.a, {
					content: xe.recommendationContext.content,
					layout: U.g.Classic,
					post: xe
				}), n.a.createElement(S.c, {
					className: be ? ee.a.titleWithPoll : void 0,
					format: q,
					poll: be,
					post: xe,
					redditStyle: ve,
					size: S.b.Medium,
					titleColor: Ne && Ne.postTitleColor,
					isOverlay: ae
				}, xe.source && !Te && !xe.isSurveyAd && n.a.createElement(A.a, {
					href: xe.source.url,
					isSponsored: xe.isSponsored,
					postId: xe.id,
					source: xe.source
				}, Object(d.a)(xe))), n.a.createElement(N.a, te({
					key: "PostMeta"
				}, Ke)), le && Me && Fe && n.a.createElement(E.a, {
					thing: xe
				}), le && Me && De && n.a.createElement(I.a, {
					onIgnoreReports: pe,
					reportable: xe
				}), Object(r.v)(xe, de) && n.a.createElement(m.a, {
					ctaExperimentDesign: _e && "classic",
					className: Object(i.a)(ee.a.adLinkWrapper, {
						[ee.a.ctaExperiment]: _e
					})
				}, n.a.createElement(p.a, {
					post: xe,
					adLinkContent: He,
					ctaExperimentDesign: _e && "classic"
				})), xe.discussionType === Y.n.Chat && n.a.createElement(X.a, {
					postId: xe.id
				}), n.a.createElement("div", {
					className: ee.a.flatlistContainer
				}, n.a.createElement(g.a, {
					className: ee.a.leftExpando,
					crosspost: Te,
					isExpanded: !!x,
					post: xe,
					useMediaIcons: !1
				}), n.a.createElement(u.a, {
					className: ee.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: Ne,
					model: xe,
					onVoteClick: b
				}), n.a.createElement(P.a, {
					className: ee.a.flatlistSeparator
				}), !xe.isSurveyAd && n.a.createElement(P.c, {
					className: ee.a.flatlist,
					currentUser: a,
					hasModFlairPerms: Se,
					hasModPostPerms: Me,
					hasModFullPerms: Re,
					hostPostData: $,
					isOverlay: !!ae,
					modModeEnabled: le,
					onClickInsightsButton: ze,
					onIgnoreReports: pe,
					onOpenReportsDropdown: ue,
					post: xe,
					shouldShowInsightsButton: je,
					showEditPost: We,
					showEditFlair: ge,
					tooltipType: ae ? R.f.Lightbox : void 0,
					useFlatlistBreakpoints: Object(T.b)({
						editPost: !Ae,
						hide: !Ae,
						report: !Ae,
						mute: !Ae,
						save: !Ae
					})
				})), n.a.createElement(j.d, null))), Object(J.a)(xe, ee.a, Ce, x, we, re), Ee && Je && n.a.createElement(h.a, {
					className: ee.a.creatorStatsContainer,
					post: xe,
					subreddit: Ee,
					isOwnProfileStats: !0
				})))
			});
			t.default = Object(W.a)(se)
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/higherOrderComponents/withClickTracking/index.tsx");
			const c = Object(i.c)({
					clickTrackingId: (e, t) => {
						let {
							comment: s
						} = t;
						return s.id
					}
				}),
				l = Object(r.b)(c);
			class m extends n.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						children: t,
						className: s,
						comment: o,
						onClick: r,
						style: i
					} = this.props;
					return n.a.createElement("div", {
						className: Object(a.a)(s, `Comment ${o.id}`),
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: t => {
							!this.cancelClick && t.button < 2 && e(() => r && r(t, o))(t)
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), x = .75, O = 10 * d.N;
			class v extends n.a.Component {
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
					}, O), this.onShowMore = e => {
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
					return s ? n.a.createElement("div", null, e()) : n.a.createElement("div", {
						className: h.a.collapsedCommentWrapper
					}, n.a.createElement("div", {
						className: h.a.collapsedCommentLine,
						style: {
							height: t
						}
					}, n.a.createElement("div", {
						ref: e => this.commentElement = e
					}, e(h.a.rtjCollapsed))), n.a.createElement("a", {
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
			var C = v,
				f = s("./node_modules/fbt/lib/FbtPublic.js"),
				g = s("./node_modules/lodash/noop.js"),
				P = s.n(g),
				j = s("./src/lib/makeCommentsPageKey/index.ts"),
				E = s("./src/lib/makeDraftKey/index.ts"),
				y = s("./src/reddit/actions/comment/index.ts"),
				I = s("./src/reddit/actions/comment/authoring.ts"),
				w = s("./src/reddit/actions/comment/moderation.ts"),
				_ = s("./src/reddit/actions/gold/modals.ts"),
				k = s("./src/reddit/actions/modal.ts"),
				L = s("./src/reddit/actions/reportFlow/index.ts"),
				N = s("./src/reddit/actions/toaster.ts"),
				T = s("./src/reddit/actions/tooltip.ts"),
				M = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				S = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				R = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				A = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				F = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				D = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				B = s("./src/reddit/components/ModModeReports/helpers.ts"),
				W = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				U = s("./src/reddit/contexts/InsideOverlay.tsx"),
				V = s("./src/reddit/contexts/PageLayer/index.tsx"),
				K = s("./src/reddit/helpers/correlationIdTracker.ts"),
				H = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				J = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				G = s("./src/reddit/helpers/overlay/index.ts"),
				z = s("./src/reddit/helpers/trackers/lightbox.ts"),
				q = s("./src/reddit/models/PostDraft/index.ts"),
				Z = s("./src/reddit/models/Comment/index.ts"),
				Q = s("./src/reddit/selectors/activeModalId.ts"),
				Y = s("./src/reddit/selectors/comments.ts"),
				X = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				$ = s("./src/reddit/selectors/moderatorPermissions.ts"),
				ee = s("./src/reddit/selectors/posts.ts"),
				te = s("./src/reddit/selectors/tooltip.ts"),
				se = s("./src/reddit/selectors/user.ts"),
				oe = s("./src/reddit/components/OverflowMenu/index.tsx"),
				ne = s("./src/reddit/components/ReportFlow/index.tsx"),
				re = s("./src/reddit/components/ReportFlow/new.tsx"),
				ie = s("./src/reddit/components/ShareMenu/index.tsx"),
				ae = s("./src/reddit/components/TrackingHelper/index.tsx"),
				de = s("./src/reddit/controls/Dropdown/Row.tsx"),
				ce = s("./src/reddit/helpers/trackers/modTools.ts"),
				le = s("./src/reddit/layout/row/Inline/index.tsx"),
				me = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				pe = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				ue = s("./src/reddit/icons/fonts/Report/index.tsx"),
				he = s("./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less"),
				be = s.n(he),
				xe = s("./src/lib/collectible-expressions/index.ts"),
				Oe = s("./src/lib/constants/icons.ts"),
				ve = s("./src/lib/lessComponent.tsx"),
				Ce = s("./src/reddit/icons/fonts/index.tsx"),
				fe = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				ge = s("./src/reddit/models/Toast/index.ts");
			const Pe = ve.a.wrapped(oe.b, "OverflowMenu", be.a),
				je = ve.a.wrapped(S.a, "ModToolsFlatlist", be.a),
				Ee = ve.a.wrapped(D.a, "ModActionsMenu", be.a),
				ye = ve.a.wrapped(de.b, "DropdownRow", be.a),
				Ie = ve.a.wrapped(le.a, "Flatlist", be.a),
				we = ve.a.button("Button", be.a),
				_e = Object(V.v)(),
				ke = e => `Comment-${e}--Modal--DeleteComment`,
				Le = e => `Distinguish--Dropdown--${e}`,
				Ne = (e, t) => `${e}--${t}-overflow-menu`,
				Te = e => `View--Reports--${e}`,
				Me = Object(i.c)({
					activeTooltipId: te.a,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Q.a)(e) === ke(s.id)
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Y.E)(e, {
							commentId: s.postId
						})
					},
					isLoggedIn: se.S,
					moderatorPermissions: (e, t) => {
						let {
							comment: s
						} = t;
						return Object($.n)(e, {
							subredditId: s.subredditId
						})
					},
					currentUser: se.m,
					modModeEnabled: V.W,
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(ee.A)(e, {
							postId: s.postId
						})
					},
					commentPermalink: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Y.m)(e, {
							commentId: s.id
						})
					},
					reportFlowIsOpen: (e, t) => {
						let {
							comment: s
						} = t;
						var o, n;
						return (null === (n = null === (o = e.features) || void 0 === o ? void 0 : o.reportFlow) || void 0 === n ? void 0 : n.postOrCommentId) === s.id
					},
					subreddit: V.s,
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(ee.U)(e, {
							postId: s.postId
						})
					},
					reportingRevampEnabled: X.a
				});
			class Se extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(ce.c)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleEdit = () => {
						const e = Object(H.a)(this.props.comment);
						Object(xe.a)(e) ? this.props.showToast({
							text: f.fbt._("Sorry, currently you cannot edit Collectible Expression comments on Web.", null, {
								hk: "4dlNfM"
							}),
							duration: 8e3,
							kind: ge.b.SuccessLockComment
						}) : this.props.handleEdit(this.props.commentPermalink)
					}, this.handleIgnoreReports = () => {
						this.props.onIgnoreReports(), this.sendCommentReportEvent(this.props.comment.ignoreReports ? "restore_reports" : "ignore_reports")
					}, this.handleGild = async () => {
						const e = Object(K.d)(K.a.GildingFlow, !0);
						this.props.onGildClick(e);
						const {
							clickGildEvent: t
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(t(this.props.comment.id))
					}, this.handleModActionsMenu = () => this.props.sendEvent(Object(ce.c)("comment_mod_action_menu", this.props.comment.id)), this.handleOverflowMenuClick = () => this.props.sendEvent(Object(ce.c)("comment_overflow_menu", this.props.comment.id)), this.handleDelete = () => this.props.handleDelete(), this.handleReply = () => this.props.handleReply(this.props.commentPermalink), this.handleRestrictedButtonClick = () => {
						this.props.onToggleReportsDropdown(), this.sendCommentModEventWithName("comment_report_menu")
					}, this.handleSave = () => {
						this.props.comment.isSaved ? this.props.sendEvent(Object(ce.c)("unsave", this.props.comment.id)) : this.props.sendEvent(Object(ce.c)("save", this.props.comment.id)), this.props.onToggleSave()
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(ce.d)(e, this.props.comment.id)), this.sendCommentEventWithName = e => this.props.sendEvent(Object(z.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentEventWithNameShare = () => this.sendCommentEventWithName("share"), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(ce.c)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(ce.g)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? n.a.createElement(re.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: ne.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					}) : n.a.createElement(ne.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: ne.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					})
				}
				renderModTools() {
					const {
						comment: e,
						currentUser: t,
						moderatorPermissions: s,
						modModeEnabled: o,
						showModTools: r
					} = this.props, i = Object(J.a)(s), a = !!t && t.displayText === e.author;
					if (r && i) return o ? n.a.createElement(je, {
						comment: e,
						isCommentAuthor: a
					}) : n.a.createElement(Ee, {
						dropdownId: `${e.id}-profile-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: this.handleModActionsMenu
					}, n.a.createElement(pe.a, null), n.a.createElement(M.a, {
						comment: e,
						tooltipId: `${e.id}-profile-mod-actions-menu`
					}))
				}
				renderReportsDropdown() {
					const {
						comment: e,
						modModeEnabled: t,
						showModTools: s
					} = this.props, o = Object(B.a)(e);
					if (s && Object(B.c)(e) && !t) return n.a.createElement(R.a, {
						text: `${o}`,
						onClick: this.handleRestrictedButtonClick,
						selected: this.props.activeTooltipId === Te(e.id),
						id: Te(e.id)
					}, n.a.createElement(W.a, {
						model: e,
						onIgnoreReports: this.handleIgnoreReports,
						tooltipId: Te(e.id)
					}), e.ignoreReports ? n.a.createElement(me.a, null) : n.a.createElement(ue.a, null))
				}
				renderDistinguishDropdown() {
					const {
						comment: e,
						currentUser: t,
						moderatorPermissions: s,
						modModeEnabled: o,
						onDistinguishComment: r,
						showModTools: i
					} = this.props, a = Object(J.a)(s), d = !!t && t.displayText === e.author, c = !!t && t.isEmployee;
					if (i && d && !e.bannedBy && (c || a && !o)) return n.a.createElement(R.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.activeTooltipId === Le(e.id)
					}, n.a.createElement(fe.a, null), n.a.createElement(F.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.activeTooltipId === Le(e.id),
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: c,
						isUserMod: a,
						onDistinguishComment: r,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: Le(e.id)
					}))
				}
				render() {
					const {
						comment: e,
						commentPermalink: t,
						className: s,
						commentsPageKey: o,
						currentUser: r,
						deleteComment: i,
						isLoggedIn: a,
						isPendingDeletion: d,
						moderatorPermissions: c,
						postIsLocked: l,
						subreddit: m,
						toggleDeleteCommentModal: p
					} = this.props, u = Object(J.a)(c), h = !!r && r.displayText === e.author, b = (!l && !e.isLocked || u && a) && !Object(Z.g)(e), x = r && e.isGildable && !Object(Z.g)(e);
					return n.a.createElement("div", {
						className: s
					}, n.a.createElement(Ie, null, b && n.a.createElement(we, {
						onClick: this.handleReply,
						disabled: d
					}, f.fbt._("Reply", null, {
						hk: "1xBqIs"
					})), x && n.a.createElement(we, {
						onClick: this.handleGild
					}, f.fbt._("Give Award", null, {
						hk: "pQJYk"
					})), n.a.createElement(ie.a, {
						dropdownId: `${o}--${e.id}-comment-share-menu`,
						permalink: t,
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == m ? void 0 : m.type
					}, n.a.createElement(we, {
						onClick: this.sendCommentEventWithNameShare
					}, f.fbt._("share", null, {
						hk: "3YIXpa"
					}))), this.renderReportsDropdown(), n.a.createElement(Pe, {
						dropdownId: Ne(o, e.id),
						onClick: this.handleOverflowMenuClick
					}, !h && !d && n.a.createElement(ye, {
						displayText: f.fbt._("report", null, {
							hk: "ad7CE"
						}),
						onClick: this.props.onReportClick
					}, n.a.createElement(Ce.a, {
						name: Oe.a.report
					})), n.a.createElement(ye, {
						displayText: e.isSaved ? f.fbt._("Unsave", null, {
							hk: "4kQcAP"
						}) : f.fbt._("Save", null, {
							hk: "4yMsMq"
						}),
						isSelected: e.isSaved,
						onClick: this.handleSave
					}, e.isSaved ? n.a.createElement(Ce.a, {
						name: Oe.a.saved
					}) : n.a.createElement(Ce.a, {
						name: Oe.a.save
					})), h && n.a.createElement(ye, {
						displayText: f.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						onClick: this.handleEdit
					}, n.a.createElement(Ce.a, {
						name: Oe.a.edit
					})), h && n.a.createElement(ye, {
						displayText: f.fbt._("delete", null, {
							hk: "e8kvB"
						}),
						onClick: this.handleDelete
					}, n.a.createElement(Ce.a, {
						name: Oe.a.delete
					}))), this.props.isConfirmModalOpen && n.a.createElement(A.a, {
						actionText: f.fbt._("Delete", null, {
							hk: "3hQAl"
						}),
						cancelActionText: f.fbt._("Keep", null, {
							hk: "3vWZkQ"
						}),
						headerText: f.fbt._("Delete comment", null, {
							hk: "2ErmbC"
						}),
						modalText: f.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "21h9zY"
						}),
						onConfirm: i,
						toggleModal: p,
						trackClick: P.a,
						withOverlay: !0
					}), this.renderModTools(), this.renderDistinguishDropdown()), this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var Re = _e(Object(r.b)(Me, (e, t) => {
					let {
						comment: s,
						commentsPageKey: o
					} = t;
					return {
						deleteComment: () => o && e(Object(I.i)(s.id, s.postId)),
						onDistinguishComment: (t, o) => e(Object(w.b)(s.id, t, o)),
						onIgnoreReports: () => e(Object(w.g)(s.id)),
						onGildClick: t => e(Object(_.d)({
							correlationId: t,
							thingId: s.id
						})),
						onReportClick: () => e(Object(L.c)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(T.h)({
							tooltipId: Le(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(T.h)({
							tooltipId: Te(s.id)
						})),
						onToggleSave: () => e(Object(y.o)(s.id)),
						handleDelete: () => {
							e(Object(k.i)(ke(s.id))), e(Object(T.h)({
								tooltipId: Ne(o, s.id)
							}))
						},
						handleEdit: t => {
							const o = Object(j.a)(s.postId, s.id, {}),
								n = {
									commentId: s.id,
									draftKey: Object(E.a)(q.c.edit, s.id),
									text: s.bodyMD || "",
									commentMode: s.media && s.media.rteMode,
									commentsPageKey: o
								};
							e(Object(G.a)(t)), e(Object(I.g)(n))
						},
						handleReply: t => {
							const o = Object(j.a)(s.postId, s.id, {}),
								n = {
									parentCommentId: s.id,
									commentsPageKey: o
								};
							e(Object(G.a)(t)), e(Object(I.h)(n))
						},
						showToast: t => e(Object(N.f)(t)),
						toggleDeleteCommentModal: () => e(Object(k.i)(ke(s.id)))
					}
				})(Object(ae.c)(Object(U.b)(Se)))),
				Ae = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Fe = s("./src/reddit/components/RichTextJson/index.tsx"),
				De = s("./src/reddit/selectors/commentSelector.ts"),
				Be = s("./src/reddit/components/Comments/ProfileComment/index.m.less"),
				We = s.n(Be);
			const Ue = ve.a.wrapped(Ae.a, "TopMeta", We.a),
				Ve = ve.a.div("ProfileCommentWrapper", We.a),
				Ke = ve.a.div("CommentBody", We.a),
				He = Object(r.b)(() => Object(i.c)({
					comment: (e, t) => Object(De.c)(e, t),
					flair: Y.e
				})),
				Je = Object(c.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.a = He(e => {
				const {
					comment: t,
					commentsPageKey: s,
					flair: o,
					isExpanded: r,
					showFlatlist: i,
					showModTools: c
				} = e, l = s => {
					var o;
					return n.a.createElement(Fe.b, {
						className: s,
						content: Object(H.a)(t),
						mediaMetadata: t.media && t.media.mediaMetadata,
						expressionAssetData: null === (o = t.media) || void 0 === o ? void 0 : o.expressionAssetData,
						rtJsonElementProps: Je(e),
						mediaProps: {
							alignLeft: !0,
							renderSmallMedia: !0
						}
					})
				};
				return n.a.createElement(Ve, {
					className: Object(a.a)({
						[We.a.isRemoved]: !!t.bannedBy
					})
				}, n.a.createElement(Ue, {
					collapsedBecauseCrowdControl: !1,
					collapsed: !1,
					comment: t,
					commentsPageKey: s,
					flair: o,
					renderedInOverlay: !1
				}), n.a.createElement("div", null, !t.isDeleted && n.a.createElement(Ke, null, r ? l() : n.a.createElement(C, {
					height: d.Zb,
					isExpanded: r
				}, l)), !t.isDeleted && i && n.a.createElement(Re, {
					comment: t,
					commentsPageKey: s,
					showModTools: c
				})))
			})
		},
		"./src/reddit/components/CreatorStats/loader.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "CreatorStats",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("CreatorStats").then(s.bind(null, "./src/reddit/components/CreatorStats/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CreatorStats/index.tsx"
				}
			})
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
			s.d(t, "b", (function() {
				return E
			})), s.d(t, "a", (function() {
				return y
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Media/index.tsx"),
				p = s("./src/reddit/components/PostMeta/index.tsx"),
				u = s("./src/reddit/components/PostTitle/index.tsx"),
				h = s("./src/reddit/components/SourceLink/index.tsx"),
				b = s("./src/reddit/components/Thumbnail/index.tsx"),
				x = s("./src/lib/constants/index.ts"),
				O = s("./src/reddit/contexts/Post/index.tsx"),
				v = s("./src/reddit/selectors/posts.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/components/CrosspostBox/index.m.less"),
				g = s.n(f),
				P = s("./src/lib/lessComponent.tsx");

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const E = 8,
				y = 1,
				I = P.a.div("Container", g.a),
				w = P.a.div("PostMetaWrapper", g.a),
				_ = P.a.wrapped(u.c, "PostTitle", g.a),
				k = P.a.div("FlatList", g.a),
				L = P.a.div("FlatItem", g.a),
				N = P.a.span("FlatListDotSpacer", g.a),
				T = P.a.wrapped(I, "LinkContainer", g.a),
				M = P.a.div("Content", g.a),
				S = P.a.div("ThumbnailContainer", g.a),
				R = Object(d.c)({
					isCurrentUserProfilePost: v.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== x.Tb.TOPIC),
					shouldOpenPostInNewTab: C.lb
				}),
				A = Object(i.b)(R);
			t.c = Object(O.b)(A(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: o,
					mediaProps: n,
					post: i,
					subredditOrProfile: a
				} = e;
				if (!i) return null;
				const d = {
						post: i,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: o,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: a,
						tooltipType: `CrosspostBox--${n.isListing}`
					},
					c = t;
				return i && !i.media ? r.a.createElement(T, {
					className: c
				}, r.a.createElement(M, null, r.a.createElement(w, null, r.a.createElement(p.a, d)), F(i), i.source && r.a.createElement(h.a, {
					post: i
				}), B(e)), U(e)) : r.a.createElement(I, {
					className: c
				}, r.a.createElement(w, null, r.a.createElement(p.a, d)), F(i), D(e), B(e))
			}));
			const F = e => r.a.createElement(_, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: u.b.Small
				}),
				D = e => {
					const {
						mediaProps: t,
						post: s
					} = e, o = {
						...t,
						post: s,
						crosspost: t.post
					};
					return r.a.createElement("div", null, r.a.createElement(m.a, j({}, o, {
						className: g.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				B = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return r.a.createElement(k, null, r.a.createElement(L, null, o.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [o.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), r.a.createElement(N, null), r.a.createElement(L, null, W(e)))
				},
				W = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: n
					} = t;
					return r.a.createElement(a.a, {
						"data-click-id": "comments",
						to: Object(c.a)(t.permalink, !0),
						target: s ? "_blank" : void 0
					}, o.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [o.fbt._plural(n, "comment count", Object(l.b)(n))], {
						hk: "xPYWL"
					}))
				},
				U = e => r.a.createElement(S, null, r.a.createElement(b.b, {
					post: e.post
				}))
		},
		"./src/reddit/components/Econ/Audio/MuteIcon.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => {
				let {
					className: t
				} = e;
				return n.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, n.a.createElement("g", {
					id: "icons_flat",
					"data-name": "icons flat"
				}, n.a.createElement("path", {
					d: "M13.5,9.5v-5A3.493,3.493,0,0,0,6.723,3.3l6.724,6.723A3.524,3.524,0,0,0,13.5,9.5Z"
				}), n.a.createElement("path", {
					d: "M15.5,9.5a5.472,5.472,0,0,1-.436,2.144l1.487,1.486A7.428,7.428,0,0,0,17.5,9.5Z"
				}), n.a.createElement("path", {
					d: "M2.341,4.1,6.5,8.258V9.5A3.5,3.5,0,0,0,10,13a3.441,3.441,0,0,0,1.059-.183l1.529,1.529A5.449,5.449,0,0,1,10,15,5.506,5.506,0,0,1,4.5,9.5h-2A7.5,7.5,0,0,0,9,16.925V18H7.581v2h4.838V18H11V16.925a7.388,7.388,0,0,0,3.026-1.141l1.044,1.044,1.414-1.414L3.755,2.686Z"
				})))
			}
		},
		"./src/reddit/components/Econ/Audio/index.m.less": function(e, t, s) {
			e.exports = {
				liveContainer: "reBgd-KYxGiWr_ZyzPgr_",
				userRow: "poHPrsWD-JtPCRh7foOm-",
				isListener: "_3DcaFqbAKhkVLYT6i2vxLy",
				speakerRings: "_1XlH7yy1d0pGBQ0hDDAaDv",
				listener: "_3fwbxY1I7EhKfr8MK7xT0S",
				speaker: "_1zEocOo_0euorSuKdx4-t2",
				snoovatar: "_23HWId-tu5O6LulDxLoVD1",
				userIcon: "Xzl_H3G7Qyd756Y0rQz4w",
				classic: "_2XdJHCLvUWJ2gdGBnugD5t",
				buttonContainer: "_2yhW3k4B2CUUSvt-3mqV3S",
				muteContainer: "_3mxKqH41iEa2lxIov7Eup-",
				muteIcon: "_18bneLE5nnOdUrY8P-eepo",
				fullRow: "_2cJzNEK-EGk9V7LDTIEFb-",
				endedContainer: "_21e_ZHJXEi7zMZ6XWWBz",
				nightMode: "z6LY0qX0g0puWE-RPF8XB",
				liveClassicContainer: "_3JLTqaLlFv8aPfzi9eQazu",
				classicSpeaker: "QsNKjj4EDQH2hYFYQB6T4",
				snoovatarHeadshotContainer: "_28VC5AU-z3J-h80HdMusUT",
				endedClassicContainer: "_2YXJIDv8TLzRj5vNdYs-_t",
				metaStatus: "OvWqIzFfbWF0I-5FMZ18I",
				isLive: "_3Vqz8YzNczoVWpOtpwXAit",
				processingButton: "nxYqAuGeco2RA9q0e9ECw"
			}
		},
		"./src/reddit/components/ExpandoButton/index.m.less": function(e, t, s) {
			e.exports = {
				outer: "RvLtAcdRtbOQbhFB7MD_T",
				icon: "saNpcHve-34zjaa0cbIxW",
				hideOnHover: "_25HJpaEPiVNq6Ss3Ad7dp9",
				showOnHover: "_2S05CzViTnl3I2ekCABqFo"
			}
		},
		"./src/reddit/components/ExpandoButton/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				p = s("./src/reddit/helpers/path/index.ts"),
				u = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				h = s("./src/reddit/icons/fonts/index.tsx"),
				b = s("./src/reddit/models/Media/index.ts"),
				x = s("./src/reddit/models/Post/index.ts"),
				O = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				v = s("./src/telemetry/models/Outbound.ts"),
				C = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				f = s("./src/reddit/components/ExpandoButton/index.m.less"),
				g = s.n(f);
			const P = Object(i.b)(null, (e, t) => ({
					toggle: () => e(Object(l.w)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.Z)(Object(p.b)(t.permalink), t.id))
				})),
				j = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 ? arguments[2] : void 0;
					const o = Object(d.a)(g.a.icon, g.a.hideOnHover);
					if (t) return r.a.createElement(h.a, {
						name: "crosspost",
						className: o
					});
					if (s.pollData) return r.a.createElement(h.a, {
						name: "poll_post",
						className: o
					});
					if (s.audioRoom) return r.a.createElement(h.a, {
						name: "audio",
						className: o
					});
					switch (e) {
						case b.o.GIFVIDEO:
							return r.a.createElement(h.a, {
								name: "gif_post",
								className: o
							});
						case b.o.IMAGE:
							return r.a.createElement(h.a, {
								name: "image_post",
								className: o
							});
						case b.o.TEXT:
						case b.o.RTJSON:
							return r.a.createElement(h.a, {
								name: "text_post",
								className: o
							});
						case b.o.VIDEO:
							return r.a.createElement(h.a, {
								name: "video_post",
								className: o
							});
						case b.o.GALLERY:
							return r.a.createElement(h.a, {
								name: "media_gallery",
								className: o
							});
						case b.o.EMBED:
						default:
							return r.a.createElement(h.a, {
								name: "embed",
								className: o
							})
					}
				};
			t.a = P(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: n,
					isCommentsPage: l,
					isExpanded: p,
					post: b,
					toggle: f,
					useMediaIcons: P
				} = e, E = s || b, y = Object(i.e)(O.b), I = Object(i.e)(O.c), w = t => {
					(y || I) && (t.preventDefault(), e.showModalOnPostLinkClick(E))
				}, _ = E.media, k = Object(x.q)(b), L = n && !!s;
				return _ && !k && !(("rtjson" === _.type || "text" === _.type || "liveaudio" === _.type) && !Object(u.a)(E)) || !!b.pollData ? r.a.createElement("button", {
					"aria-expanded": !!p,
					"aria-haspopup": !0,
					"aria-label": o.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(d.a)(t, g.a.outer),
					"data-click-id": p ? "expando_close" : "expando_open",
					"data-adclicklocation": C.a.MEDIA,
					onClick: f
				}, p ? r.a.createElement(h.a, {
					name: "collapse",
					className: g.a.icon
				}) : P ? r.a.createElement(r.a.Fragment, null, j(E.media && E.media.type, L, b), r.a.createElement(h.a, {
					name: "expand",
					className: Object(d.a)(g.a.icon, g.a.showOnHover)
				})) : r.a.createElement(h.a, {
					name: "expand",
					className: g.a.icon
				})) : E.source && E.source.url ? r.a.createElement(m.b, {
					"aria-label": o.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(d.a)(t, g.a.outer),
					"data-click-id": "expando_open",
					href: E.source.url,
					isSponsored: b.isSponsored,
					postId: b.id,
					source: b.source,
					sourceElement: l ? v.SourceElement.PostImage : v.SourceElement.ListingPostImage,
					target: "_blank"
				}, r.a.createElement(h.a, {
					name: "external_link",
					className: Object(d.a)(g.a.icon, g.a.outboundLinkIcon)
				})) : r.a.createElement(a.a, {
					"aria-label": o.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(d.a)(t, g.a.outer),
					"data-click-id": "expando_open",
					to: Object(c.a)(E.permalink),
					rel: "nofollow",
					onClick: w
				}, r.a.createElement(h.a, {
					name: "text_post",
					className: g.a.icon
				}))
			})
		},
		"./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			}));
			var o = s("./src/lib/classNames/index.ts"),
				n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/lib/LiveChatActiveUsers/index.m.less"),
				d = s.n(a);
			const c = e => {
				let {
					userCount: t
				} = e;
				return i.a.createElement("span", {
					className: d.a.liveChatActiveUsers
				}, t > 1 ? n.fbt._("{userCount} here now", [n.fbt._param("userCount", `${t}`)], {
					hk: "4pUoKA"
				}) : n.fbt._("join now", null, {
					hk: "3JGiBG"
				}))
			};
			var l = s("./src/lib/LiveLabel/index.m.less"),
				m = s.n(l);
			const p = () => i.a.createElement("span", {
				className: m.a.LiveLabel
			}, n.fbt._("LIVE", null, {
				hk: "1N5y3d"
			}));
			var u = s("./src/lib/LiveChatActiveUsersWithLiveLabel/index.m.less"),
				h = s.n(u);
			const b = e => {
				let {
					userCount: t = 0,
					className: s
				} = e;
				return i.a.createElement("div", {
					className: Object(o.a)(h.a.liveParticipation, s)
				}, i.a.createElement(p, null), i.a.createElement(c, {
					userCount: t
				}))
			};
			var x = s("./node_modules/react-redux/es/index.js"),
				O = s("./src/reddit/selectors/chat.ts"),
				v = s("./src/reddit/selectors/experiments/chat.ts");
			const C = e => {
				let {
					postId: t,
					className: s
				} = e;
				const o = Object(x.e)(e => Object(O.a)(e, t));
				return Object(x.e)(v.e) ? i.a.createElement(b, {
					userCount: o,
					className: s
				}) : null
			}
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/components/RichTextJson/index.tsx"),
				d = s("./src/reddit/constants/postLayout.ts"),
				c = s("./src/reddit/hooks/useRecommendationPostContext.ts"),
				l = s("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				m = s.n(l);
			const p = Object(i.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = e => {
				let {
					content: t,
					layout: s,
					post: o
				} = e;
				return Object(c.a)().hideRecommendationContext ? null : n.a.createElement(a.b, {
					className: Object(r.a)(m.a.RecommendationContextStyles, {
						[m.a.classicLayout]: s === d.g.Classic,
						[m.a.compactLayout]: s === d.g.Compact,
						[m.a.largeLayout]: s === d.g.Large
					}),
					content: t,
					rtJsonElementProps: p(o),
					useExplicitTextColor: !0
				})
			}
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
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
				O = s("./src/reddit/selectors/communityAwards.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/components/OverviewChronoComment/index.m.less"),
				f = s.n(C);
			const g = Object(i.b)(() => Object(a.c)({
				comment: x.c,
				isAwarded: (e, t) => {
					const s = Object(x.c)(e, t);
					return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
						const s = Object(O.a)(e, t);
						return s && s.coinPrice >= d.g
					})
				},
				isNightmodeOn: v.fb
			}), e => ({
				openPost: t => e(Object(m.K)(t))
			}));
			var P = Object(l.a)(g(e => {
					const {
						comment: t,
						commentId: s,
						first: o,
						isAwarded: r,
						isNightmodeOn: i,
						last: a,
						openPost: d,
						showModTools: l
					} = e;
					if (!t) return null;
					return n.a.createElement(p.a, {
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
					}, n.a.createElement("div", {
						className: Object(c.a)(f.a.commentOuterWrapper, {
							[f.a.isLast]: a,
							[f.a.isAwarded]: r,
							[f.a.isNightmodeOn]: i
						})
					}, n.a.createElement("div", {
						className: Object(c.a)(f.a.commentWrapper, {
							[f.a.isFirst]: o
						})
					}, n.a.createElement("div", {
						className: f.a.commentSeparator
					}), t.parentId && n.a.createElement("div", {
						className: f.a.commentSeparator
					}), n.a.createElement("div", {
						className: f.a.commentContentWrapper
					}, n.a.createElement(u.a, {
						commentId: s,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: !0,
						showModTools: l,
						isExpanded: !0
					})))))
				})),
				j = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				E = s("./src/reddit/contexts/PageLayer/index.tsx"),
				y = s("./src/reddit/helpers/isComment.ts"),
				I = s("./src/reddit/components/OverviewChronoList/ListItem.m.less"),
				w = s.n(I),
				_ = s("./src/lib/lessComponent.tsx");

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const L = Object(E.v)({
					currentProfileName: E.j,
					isCommentsPage: E.y,
					isCommentPermalink: E.x,
					isProfilePostListing: E.N,
					pageLayer: e => e
				}),
				N = _.a.wrapped(j.a, "OverviewCommentPost", w.a),
				T = _.a.wrapped(r.default, "ClassicPost", w.a);
			t.a = L(e => {
				const {
					itemId: t,
					isFirstInCommentList: s,
					isLastInCommentList: o,
					allowModToolsUnderComments: r,
					height: i,
					width: a,
					...d
				} = e;
				return Object(y.a)(t) ? s ? n.a.createElement(n.a.Fragment, null, n.a.createElement(N, k({}, d, {
					availableWidth: a,
					commentId: t
				})), n.a.createElement(P, {
					commentId: t,
					first: s,
					last: o,
					showModTools: r
				})) : n.a.createElement(P, {
					commentId: t,
					first: s,
					last: o,
					showModTools: r
				}) : n.a.createElement(T, k({}, d, {
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
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
				O = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				v = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				C = s.n(v),
				f = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				g = s("./src/reddit/selectors/commentSelector.ts"),
				P = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				j = s("./src/reddit/components/OverviewCommentPost/index.m.less"),
				E = s.n(j);
			const {
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js"), I = c.a.wrapped(x.default, "InternalLink", E.a), w = c.a.div("Wrapper", E.a), _ = c.a.div("Row", E.a), k = c.a.wrapped(f.a, "CommentIcon", E.a), L = c.a.div("TitleContainer", E.a), N = c.a.div("PostTitleContainer", E.a), T = c.a.wrapped(p.c, "PostTitle", E.a), M = c.a.wrapped(u.g, "PostTopMeta", E.a), S = c.a.wrapped(u.a, "MetaSeparator", E.a), R = Object(r.b)(() => Object(i.c)({
				comment: g.c,
				isBlockingInterstitialEnabled: P.b,
				isBlockingInterstitialV2Enabled: P.b
			}), e => ({
				showModalOnAuthorLinkClick: t => e(Object(l.bb)(t))
			})), A = e => {
				const {
					post: t,
					subredditOrProfile: s
				} = e;
				if (s) return n.a.createElement(o.Fragment, null, n.a.createElement(S, null), n.a.createElement(M, {
					metaSeparatorClassName: E.a.postTopMetaMetaSeparator,
					post: t,
					showSub: !0,
					showTimestamp: !1,
					subredditOrProfile: s
				}))
			}, F = e => {
				const {
					comment: t,
					profileName: s,
					isBlockingInterstitialEnabled: o,
					isBlockingInterstitialV2Enabled: r,
					showModalOnAuthorLinkClick: i
				} = e;
				if (!t) return null;
				const a = s || t.author,
					d = `/user/${a}/`;
				return n.a.createElement(I, {
					"data-click-id": "user",
					to: d,
					onClick: e => {
						(o || r) && (e.preventDefault(), i(d))
					}
				}, a)
			};
			t.a = Object(d.a)(Object(b.b)(R(Object(h.c)(e => {
				const {
					className: t,
					eventFactory: s,
					onClickPost: o,
					post: r
				} = e;
				return n.a.createElement(m.b, {
					className: Object(a.a)(C.a.compactPostStyles, E.a.overviewCommentPost, {
						[E.a.banned]: !!e.post.bannedBy,
						[E.a.reported]: !e.post.bannedBy && !!e.post.numReports && e.post.numReports > 0
					}, t),
					post: r,
					onClick: o,
					eventFactory: s
				}, n.a.createElement(w, {
					style: {
						background: Object(O.e)(e)
					}
				}, n.a.createElement(_, null, n.a.createElement(k, null), n.a.createElement(L, null, y._("{postAuthor} commented on {postTitle} {postMeta}", [y._param("postAuthor", F({
					...e
				})), y._param("postTitle", n.a.createElement(N, null, n.a.createElement(T, {
					outboundLinkClassName: E.a.postTitleOutboundLink,
					post: r,
					size: p.b.Small,
					titleClassName: E.a.postTitleTitle
				}))), y._param("postMeta", A(e))], {
					hk: "d6l8e"
				})))))
			}))))
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/OverviewConversationsPost/Border/index.m.less"),
				a = s.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					isFirst: s,
					isLast: o,
					...i
				} = e;
				return n.a.createElement("div", d({
					className: Object(r.a)(a.a.border, {
						[a.a.isFirst]: s,
						[a.a.isLast]: o
					}, t)
				}, i))
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
			var o = s("./node_modules/lodash/times.js"),
				n = s.n(o),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/constants/gold.ts"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/lessComponent.tsx"),
				p = s("./src/reddit/components/CommentContainer/index.tsx"),
				u = s("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				h = s("./src/reddit/actions/post.ts"),
				b = s("./src/reddit/helpers/getClickInfo.ts"),
				x = s("./src/reddit/selectors/commentSelector.ts"),
				O = s("./src/reddit/selectors/communityAwards.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less"),
				f = s.n(C);
			const g = m.a.div("ProfileOwnerCommentWrapper", f.a),
				P = m.a.div("CommentContentWrapper", f.a),
				j = m.a.div("Wrapper", f.a),
				E = m.a.div("CommentSeparator", f.a),
				y = Object(a.b)(() => Object(d.c)({
					comment: (e, t) => Object(x.c)(e, t),
					isAwarded: (e, t) => {
						const s = Object(x.c)(e, t);
						return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
							const s = Object(O.a)(e, t);
							return s && s.coinPrice >= c.g
						})
					},
					isNightmodeOn: v.fb
				}), e => ({
					openPost: t => e(Object(h.K)(t))
				}));
			class I extends i.a.Component {
				render() {
					const {
						comment: e,
						commentId: t,
						depth: s,
						openPost: o,
						isAwarded: r,
						isFirst: a,
						isLast: d,
						isNightmodeOn: c,
						profileName: m,
						showModTools: u
					} = this.props, h = m === e.author ? w : _;
					return i.a.createElement(p.a, {
						comment: e,
						onClick: (e, t) => {
							o({
								postOrComment: t,
								clickInfo: Object(b.a)(e),
								queryParams: {
									context: 3
								}
							}), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
						}
					}, i.a.createElement(j, {
						className: Object(l.a)({
							[f.a.isFirst]: a,
							[f.a.isLast]: d,
							[f.a.isAwarded]: r,
							[f.a.isNightmodeOn]: c
						})
					}, n()(s + 1, e => i.a.createElement(E, {
						key: e
					})), i.a.createElement(P, null, h(t, m, u))))
				}
			}
			const w = (e, t, s) => i.a.createElement(g, null, _(e, t, s, !0, !0)),
				_ = function(e, t, s) {
					let o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
						n = arguments.length > 4 ? arguments[4] : void 0;
					return i.a.createElement(u.a, {
						commentId: e,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: o,
						showModTools: s,
						isExpanded: !!n
					})
				};
			t.a = y(I)
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return se
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/CrosspostBox/index.tsx"),
				i = s("./src/reddit/components/Media/index.tsx"),
				a = s("./src/reddit/models/Post/index.ts"),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/constants/adEvents.ts"),
				m = s("./src/reddit/constants/experiments.ts"),
				p = s("./src/reddit/helpers/chooseVariant/index.ts"),
				u = s("./node_modules/reselect/es/index.js");
			const h = Object(u.a)(e => Object(p.c)(e, {
				experimentEligibilitySelector: p.a,
				experimentName: m.Ac
			}), e => e === m.Td);
			var b = s("./node_modules/fbt/lib/FbtPublic.js"),
				x = s("./src/lib/classNames/index.ts"),
				O = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				v = s("./src/reddit/components/SubredditIcon/index.tsx"),
				C = s("./src/reddit/selectors/posts.ts"),
				f = s("./src/reddit/selectors/subreddit.ts"),
				g = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostCommunityLink/index.m.less"),
				P = s.n(g);
			const j = e => {
				let {
					postId: t,
					className: s
				} = e;
				const o = Object(d.e)(e => Object(C.F)(e, {
						postId: t
					})),
					r = Object(d.e)(e => "subreddit" === (null == o ? void 0 : o.belongsTo.type) ? Object(f.X)(e, {
						subredditId: o.belongsTo.id
					}) : null);
				return r ? n.a.createElement(O.a, {
					className: Object(x.a)(P.a.link, s),
					to: r.url
				}, b.fbt._("Posts via", null, {
					hk: "23e8m8"
				}), n.a.createElement(v.b, {
					className: P.a.subredditIcon,
					shouldHideNsfwIcon: !0,
					subredditOrProfile: r
				}), n.a.createElement("span", {
					className: P.a.subredditName
				}, r.displayText)) : null
			};
			var E = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				y = s("./src/reddit/connectors/PostViewable/index.ts"),
				I = s("./src/reddit/contexts/PageLayer/index.tsx"),
				w = s("./src/reddit/contexts/Post/index.tsx"),
				_ = s("./src/reddit/helpers/path/index.ts"),
				k = s("./src/reddit/hooks/useClickSourceData.ts"),
				L = s("./src/reddit/hooks/useIsOverlay.ts"),
				N = s("./src/reddit/hooks/usePageLayer.ts"),
				T = s("./src/lib/prettyPrintNumber/index.ts"),
				M = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostInformation/index.m.less"),
				S = s.n(M);
			const R = e => {
				let {
					post: t
				} = e;
				const s = `${Object(T.b)(t.score)} ${b.fbt._("upvotes",null,{hk:"wJqPp"})}`,
					o = `${Object(T.b)(t.numComments)} ${b.fbt._("comments",null,{hk:"30aUyh"})}`;
				return n.a.createElement("div", {
					className: S.a.postInformation
				}, n.a.createElement("h5", {
					className: S.a.title
				}, t.title), n.a.createElement("div", {
					className: S.a.interactions
				}, n.a.createElement("p", null, s), n.a.createElement("p", null, o)))
			};
			var A = s("./src/lib/isUrl/index.ts"),
				F = s("./src/reddit/actions/profile/index.ts"),
				D = s("./src/reddit/components/Thumbnail/index.tsx"),
				B = s("./src/reddit/components/UserIcon/index.tsx"),
				W = s("./src/reddit/components/UserIcon/UserIcon.tsx"),
				U = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				V = s("./src/reddit/selectors/profile.ts"),
				K = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostMedia/index.m.less"),
				H = s.n(K);
			const J = e => {
				let {
					post: t
				} = e;
				var s, r, i, a;
				const c = Object(d.d)(),
					l = Object(d.e)(Object(V.l)(t.author)),
					m = Object(o.useMemo)(() => Object(D.c)({
						post: t
					}), [t]),
					p = Object(o.useMemo)(() => Object(A.a)(m), [m]);
				Object(o.useEffect)(() => {
					p || c(Object(F.d)(t.author))
				}, [c, t.author, p]);
				const u = !p && Object(U.a)(null === (s = null == l ? void 0 : l.icon) || void 0 === s ? void 0 : s.url),
					h = Object(W.c)(null === (r = null == l ? void 0 : l.icon) || void 0 === r ? void 0 : r.url);
				return n.a.createElement("div", {
					className: H.a.media
				}, p ? n.a.createElement(D.b, {
					post: t,
					url: m,
					className: H.a.mediaThumbnail,
					removeLink: !0,
					containerClassName: H.a.mediaThumbnailContainer
				}) : null, !p && (null === (i = null == l ? void 0 : l.icon) || void 0 === i ? void 0 : i.url) && n.a.createElement("div", {
					className: H.a.userIconContainer
				}, n.a.createElement(B.a, {
					className: Object(x.a)({
						[H.a.snoovatarUserIcon]: u,
						[H.a.defaultUserIcon]: h
					}, H.a.userIcon),
					iconUrl: null === (a = null == l ? void 0 : l.icon) || void 0 === a ? void 0 : a.url,
					userName: l.name,
					wrapperClassName: H.a.userIconWrapper,
					isNSFW: !1
				})))
			};
			var G = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPost/index.m.less"),
				z = s.n(G);
			const q = Object(y.a)(null);
			var Z = Object(w.b)(q(e => {
					let {
						post: t
					} = e;
					const s = Object(N.a)(),
						o = Object(L.a)(),
						r = Object(k.a)(),
						i = Object(I.x)(s) && !o;
					return n.a.createElement(O.a, {
						"data-testid": `promoted-user-post-${t.id}`,
						to: i ? Object(_.b)(t.permalink) : Object(E.a)(t.permalink, !1, r)
					}, n.a.createElement("div", {
						className: z.a.container
					}, n.a.createElement(R, {
						post: t
					}), n.a.createElement(J, {
						post: t
					})))
				})),
				Q = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPosts/index.m.less"),
				Y = s.n(Q);
			const X = e => {
				let {
					postIds: t
				} = e;
				const s = t.map(e => n.a.createElement(Z, {
					postId: e,
					key: e
				}));
				return n.a.createElement("div", {
					className: Y.a.container
				}, s)
			};
			var $ = s("./src/reddit/components/PromotedUserPostsAd/index.m.less"),
				ee = s.n($);
			const te = e => {
				let {
					post: t
				} = e;
				const s = Object(d.d)();
				if (!Object(d.e)(h) || !t.adPromotedUserPostIds || 0 === t.adPromotedUserPostIds.length) return null;
				const [o] = t.adPromotedUserPostIds;
				return n.a.createElement("div", {
					className: ee.a.container,
					onClick: () => s(Object(c.y)(t, l.a.Click))
				}, n.a.createElement(X, {
					postIds: t.adPromotedUserPostIds
				}), n.a.createElement(j, {
					postId: o,
					className: ee.a.communityLink
				}))
			};

			function se(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? n.a.createElement(r.c, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						availableWidth: e.availableWidth ? e.availableWidth - 2 * r.b - 2 * r.a : void 0,
						crosspost: t,
						primaryContent: !1
					}
				}) : Object(a.B)(t) && Object(a.A)(t) ? n.a.createElement(te, {
					post: t
				}) : n.a.createElement(i.a, {
					...e,
					primaryContent: !!e.showFull
				})
			}
		},
		"./src/reddit/components/PostMeta/index.m.less": function(e, t, s) {
			e.exports = {
				metaContainer: "Ywkt6EDfNWINeTr9lP29H",
				postTopMeta: "iaAYGvTNtknkTxuHArCzL",
				subredditName: "_1L0pdcPf58t25Jy6ljHIKR",
				SubscribeButton: "_2r87gmhJ9n0MsylKHkgDcp",
				subscribeButton: "_2r87gmhJ9n0MsylKHkgDcp",
				addModNote: "CUh9f8Zri7XfZRUI18jS5"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/moderatorPermissions.ts"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				d = s("./src/reddit/components/CCM/AddModNoteCTA/index.tsx"),
				c = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				m = s("./src/reddit/components/PostBadges/index.tsx"),
				p = s("./src/reddit/components/PostTopMeta/index.tsx"),
				u = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				h = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				b = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				x = s("./src/reddit/constants/posts.ts"),
				O = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				C = s("./src/reddit/helpers/trackers/post.ts"),
				f = s("./src/reddit/hooks/useClickSourceData.ts"),
				g = s("./src/reddit/models/Subreddit/index.ts"),
				P = s("./src/reddit/components/PostMeta/index.m.less"),
				j = s.n(P);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: o,
					isCurrentUserProfilePost: P,
					isOverlay: E,
					isTopicPage: y,
					post: I,
					shouldShowSubscribeButton: w,
					subredditOrProfile: _,
					tooltipType: k
				} = e, L = !!y, N = Object(f.a)(), T = Object(r.e)(e => !!_ && Object(i.i)(e, _.id));
				return n.a.createElement("div", {
					className: j.a.metaContainer
				}, !o && !I.isSponsored && _ && n.a.createElement(c.a, {
					postId: I.id,
					subredditName: _.name
				}, n.a.createElement(h.a, {
					className: j.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: _.url,
						state: N
					}
				}, _.displayText)), _ && _.isQuarantined && n.a.createElement(u.a, null), !o && !I.isSponsored && _ && w && !P && n.a.createElement(b.a, {
					className: j.a.SubscribeButton,
					getEventFactory: e => Object(C.n)(I.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: _.name,
						type: Object(g.i)(_) ? x.a.PROFILE : x.a.SUBREDDIT
					},
					postId: I.id,
					size: O.d.XXS,
					small: !0
				}), !o && !I.isSponsored && n.a.createElement(v.b, null), !o && !I.isSponsored && n.a.createElement(l.h, {
					type: I.belongsTo.type,
					id: I.belongsTo.id
				}), n.a.createElement(p.g, {
					className: j.a.postTopMeta,
					flairStyleTemplate: t,
					post: I,
					tooltipType: k,
					isModWithUserNotesPermissions: T
				}), n.a.createElement(m.a, {
					displayText: _ ? _.displayText : null,
					inSubredditOrProfile: !!o,
					post: I,
					tooltipType: k
				}), !L && n.a.createElement(a.a, {
					hideCta: s,
					thing: I,
					tooltipType: E ? p.f.Lightbox : void 0
				}), T && n.a.createElement(d.a, {
					postOrComment: I,
					className: j.a.addModNote
				}))
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, s) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo",
				allowPointerEvents: "_2iiIcja5xIjg-5sI4ECvcV",
				checkbox: "_25sIJZLIxTa3eolXDWieo5"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/PostLeftRail/index.tsx"),
				a = s("./src/reddit/components/VerticalVotes/index.tsx"),
				d = s("./src/reddit/controls/Checkbox/index.tsx"),
				c = s("./src/reddit/helpers/isPost.ts"),
				l = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				m = s("./src/reddit/components/PostRailAndVotes/index.m.less"),
				p = s.n(m);
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: o = !1,
					isCheckboxSelected: m = !1,
					isCountAnimShadowTestEnabled: u,
					toggleCheckbox: h = (() => {}),
					flairStyleTemplate: b,
					redditStyle: x,
					isOverlay: O,
					isVoteCountAnimation: v,
					postId: C,
					shouldShowUpvoteRatioOnHover: f
				} = e, g = `upvote-button-${t.id}${O?"-overlay":""}`;
				return n.a.createElement(i.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: x
				}, o && n.a.createElement(d.a, {
					className: p.a.checkbox,
					isCheckboxSelected: m,
					toggleCheckbox: h
				}), n.a.createElement(a.a, {
					flairStyleTemplate: b,
					model: t,
					onVoteClick: s,
					redditStyle: x,
					upvoteTooltipId: g,
					isVoteCountAnimation: v,
					isCountAnimShadowTestEnabled: u,
					postId: C,
					scoreClassName: Object(r.a)(p.a.score, {
						[p.a.allowPointerEvents]: f
					}),
					shouldShowUpvoteRatioOnHover: f
				}))
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
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/lodash/last.js"),
				n = s.n(o),
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
				O = s("./src/reddit/contexts/Post/index.tsx"),
				v = s("./src/lib/LRUCache/index.ts"),
				C = s("./src/telemetry/index.ts"),
				f = s("./src/telemetry/models/Timer.ts"),
				g = s("./src/reddit/components/PostList/index.m.less"),
				P = s.n(g);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const E = 500,
				y = new v.a(E),
				I = new v.a(E),
				w = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				_ = (e, t, s, o, n, r) => {
					const i = `entered-${e}-${t}-${s?`last-${o}-${n}`:""}`;
					let a = y.get(i);
					return void 0 === a && (a = () => {
						s && r.onBottomViewed(o, n), r.trackOnPostEnteredViewport(e, t)
					}, y.set(i, a)), a
				},
				k = (e, t) => {
					const s = `click-${e}`;
					let o = I.get(s);
					return void 0 === o && (o = (e, s) => {
						s.isSponsored && t.fireAdPixelsOfType(s, c.a.Click), s.isSponsored && s.source && s.source.outboundUrl ? Object(d.e)(s.source.outboundUrl, d.d.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(b.a)(e)
						})
					}, I.set(s, o)), o
				};
			class L extends i.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new v.a(E), this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}
				}
				UNSAFE_componentWillMount() {
					this.timerId && C.c.cancel(this.timerId), this.props.itemIds.length && (this.timerId = C.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = C.c.end(this.timerId);
						setTimeout(() => Object(C.b)(a.o.Redesign, {
							type: "mount",
							component: "overviewChronoList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && C.c.cancel(this.timerId), e.itemIds.length && (this.timerId = C.c.start()), (e.listingKey !== this.props.listingKey || e.itemIds.length !== this.props.itemIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (this.checkAndSendScreenview(), this.timerId && C.c.has(this.timerId)) {
						const e = C.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(C.b)(a.o.Redesign, {
							duration: e,
							type: "mount",
							component: "overviewChronoList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && C.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && n()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return C.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const o = C.c.end(e);
					setTimeout(() => s(t(o, f.TimerType.InApp)), 0)
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
						itemIds: o,
						...n
					} = e, r = Object.keys(s), i = Object.keys(n);
					return i.length !== r.length || !!i.some(e => s[e] !== n[e])
				}
				scrollChildForItem(e, t, s, o, n, r) {
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
						} = this.props, u = p[e], h = `overview-chrono-list-item-[layout: ${r}]-[itemId: ${e}]`, b = _(u, r, s, a, d, this.props), x = {
							key: h,
							eventFactory: c,
							inSubredditOrProfile: t,
							isFirstInCommentList: o,
							isLastInCommentList: n,
							isOverlay: !1,
							itemId: e,
							last: s,
							layout: r,
							onClickPost: k(e, this.props),
							postId: u
						}, v = this.props.itemComponent;
						m = {
							estHeight: this.props.estimateItemHeight(e, r, o),
							id: e,
							isFocusable: !1,
							trackOnEnteredViewport: b,
							render: e => i.a.createElement(O.a, {
								postId: x.postId
							}, i.a.createElement(v, j({}, x, e)))
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
						onTryAgain: o
					} = this.props;
					return i.a.createElement("div", {
						className: P.a.placeholder
					}, i.a.createElement(m.a, {
						className: t,
						isLoading: !e,
						layout: s
					}), !!e && i.a.createElement(p.a, {
						apiError: e,
						onTryAgain: o
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						layout: s,
						onLoadMore: o
					} = this.props;
					return i.a.createElement("div", {
						className: P.a.placeholder
					}, i.a.createElement(l.a, {
						isLoading: !!t,
						layout: s,
						countOverride: w[s]
					}), !!e && i.a.createElement(p.a, {
						apiError: e,
						onTryAgain: o
					}))
				}
				renderList() {
					const {
						commentsById: e,
						layout: t,
						loadMore: s,
						itemIds: o,
						onLoadMore: n
					} = this.props, r = o.map((s, n, r) => {
						const i = n === o.length - 1,
							a = n && o[n - 1],
							d = !i && o[n + 1],
							c = !!Object(x.a)(s) && (!a || !Object(x.a)(a) || e[a].postId !== e[s].postId),
							l = !!Object(x.a)(s) && (!d || !Object(x.a)(d) || e[d].postId !== e[s].postId);
						return this.scrollChildForItem(s, n, i, c, l, t)
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
						onLoadMore: n,
						viewportTopPadding: h.f + h.r
					}, r), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			t.a = L
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FLO1Nek2YpspMr4ozmJCU"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPostCommunityLink/index.m.less": function(e, t, s) {
			e.exports = {
				link: "_2sOYhKsA_6kr-jal5uxghX",
				subredditName: "Y6X1Z6XpPZ42HHxG6iPUg",
				subredditIcon: "_3KW4JGkWWYds_QkhJav3lV"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPostInformation/index.m.less": function(e, t, s) {
			e.exports = {
				postInformation: "_1ykNwWxnTMBSi_9FpI1aS9",
				interactions: "_17rAVV4Z_xjSbW2Dnzd6GG",
				title: "_1hY0DyJaLGV23_ZN7lGZLl"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPostMedia/index.m.less": function(e, t, s) {
			e.exports = {
				media: "N08zT4c39PJ7xCbcR2dhy",
				mediaThumbnail: "_9U9c34f1Ov1YZrnCNbH_e",
				mediaThumbnailContainer: "OBfGp3Y3pfXQbQtgTek4B",
				userIconContainer: "_1Xl-Y2ofyQhQDptuCNW3gg",
				userIconWrapper: "F_vBi78s0CDuAiX2g82hg",
				userIcon: "_3Ba5v_JdXj-iGcinxrYkz6",
				defaultUserIcon: "_2Jv4FE0k7dgPuiylbWWXJg",
				snoovatarUserIcon: "X3oFujh1WDeA5ZdMgFl_h"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPosts/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2trYWJQru0_I7CsxK5kt7W"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/index.m.less": function(e, t, s) {
			e.exports = {
				container: "sMTOozCI4j186nHWW2jp4",
				communityLink: "_1iVqrl2JSOJGHlr6UhojWd"
			}
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/post.ts"),
				i = s("./src/reddit/actions/tooltip.ts"),
				a = s("./src/reddit/models/Vote/index.ts"),
				d = s("./src/reddit/contexts/InsideOverlay.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/contexts/Post/index.tsx"),
				m = s("./src/reddit/selectors/activeModalId.ts"),
				p = s("./src/reddit/selectors/chatPost.ts"),
				u = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				h = s("./src/reddit/selectors/moderatorPermissions.ts"),
				b = s("./src/reddit/selectors/postFlair.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				O = s("./src/reddit/selectors/user.ts");
			const v = {
					autoplayPref: O.d,
					activeModalId: m.a,
					crosspost: x.d,
					isActive: x.j,
					isChatPost: p.d,
					isCurrentUserProfilePost: x.l,
					isExpanded: x.m,
					isLoggedIn: O.S,
					moderatorPermissions: h.m,
					modModeEnabled: c.W,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: b.a,
					showMedia: c.t,
					flairStyleTemplate: c.Y,
					showCTAExperimentDesign: u.a
				},
				C = Object(o.b)(() => Object(n.c)(v), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const o = t === a.a.upvoted ? Object(r.ib)(s) : Object(r.v)(s);
							e(o)
						},
						onIgnoreReports: () => e(Object(r.eb)(s)),
						onOpenReportsDropdown: t => e(Object(i.h)({
							tooltipId: t
						}))
					}
				}, (e, t, s) => ({
					...e,
					...t,
					...s,
					formatTitle: e => e.title
				}));
			t.a = e => Object(l.b)(C(Object(d.b)(e)))
		},
		"./src/reddit/constants/gold.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "d", (function() {
				return r
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "f", (function() {
				return a
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "i", (function() {
				return c
			})), s.d(t, "h", (function() {
				return l
			})), s.d(t, "g", (function() {
				return m
			}));
			const o = "ModerationPage--Modal--AddAward",
				n = "ModerationPage--Modal--DeleteAwardConfirmation",
				r = 20,
				i = 4,
				a = 1e4,
				d = .2,
				c = .1,
				l = .1,
				m = 500
		},
		"./src/reddit/helpers/search/renderMedia.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/PostMedia/index.tsx");
			const i = (e, t, s, o, r, i) => o ? e.crosspostRootId ? n.a.createElement("div", {
					className: t.crosspostMediaWrapper
				}, a(e, s, r, i)) : a(e, s, r, i) : null,
				a = (e, t, s, o) => n.a.createElement(r.a, {
					isExpando: !0,
					isGalleryTileLayoutDefault: o,
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
		"./src/reddit/helpers/trackers/creatorStats.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "a", (function() {
				return p
			})), s.d(t, "c", (function() {
				return u
			}));
			var o = s("./src/reddit/components/CreatorStats/helpers.ts"),
				n = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const i = e => {
					switch (e) {
						case o.b.Available:
							return "insights_shown";
						case o.b.NotAvailableYet:
							return "not_enough_views";
						case o.b.NotAvailable:
							return "post_too_old";
						case o.b.Expired:
							return "insights_expired";
						default:
							return ""
					}
				},
				a = (e, t) => s => ({
					...Object(r.o)(s),
					action: n.c.VIEW,
					noun: "aggregate_stats",
					source: "creator_stats",
					subreddit: Object(r.lb)(s),
					post: Object(r.K)(s, e),
					userSubreddit: Object(r.ub)(s),
					actionInfo: Object(r.d)(s, {
						reason: i(t)
					})
				}),
				d = (e, t) => s => ({
					...Object(r.o)(s),
					action: n.c.CLICK,
					noun: e,
					source: "creator_stats",
					post: Object(r.K)(s, t),
					subreddit: Object(r.lb)(s),
					userSubreddit: Object(r.ub)(s)
				}),
				c = e => {
					switch (e) {
						case o.b.Available:
							return "stats";
						case o.b.NotAvailableYet:
							return "not_enough_views";
						case o.b.NotAvailable:
						case o.b.Expired:
							return "no_data";
						case o.b.Quarantined:
							return "quarantined";
						default:
							return ""
					}
				},
				l = e => t => ({
					...Object(r.o)(t),
					action: n.c.CLICK,
					noun: "post_stats",
					source: "post",
					actionInfo: Object(r.d)(t, {
						pageType: "profile"
					}),
					post: Object(r.K)(t, e, void 0, 0),
					profile: Object(r.T)(t)
				}),
				m = (e, t, s) => o => ({
					...Object(r.o)(o),
					action: n.c.LOAD,
					noun: "insights",
					source: "post_stats",
					actionInfo: Object(r.d)(o, {
						reason: c(t)
					}),
					post: Object(r.K)(o, e, void 0, s)
				}),
				p = (e, t, s, o, i, a) => d => ({
					...Object(r.o)(d),
					action: n.c.CLICK,
					noun: "community",
					source: "post_stats",
					actionInfo: Object(r.d)(d, {
						pageType: "post_stats",
						reason: "stats"
					}),
					post: Object(r.K)(d, e, void 0, a),
					subreddit: Object(r.lb)(d),
					outbound: {
						postId: s,
						url: t,
						subredditId: o,
						subredditName: i
					}
				}),
				u = (e, t, s) => o => ({
					...Object(r.o)(o),
					action: n.c.CLICK,
					noun: "share",
					source: "post_stats",
					actionInfo: Object(r.d)(o, {
						pageType: "post_stats",
						reason: c(t)
					}),
					post: Object(r.K)(o, e, void 0, s),
					subreddit: Object(r.lb)(o)
				})
		},
		"./src/reddit/pages/ProfileComments/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/lodash/fromPairs.js"),
				n = s.n(o),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/extractQueryParams/index.ts"),
				m = s("./src/lib/makeListingKey/index.ts"),
				p = s("./src/higherOrderComponents/withLSWatcher.tsx"),
				u = s("./src/reddit/actions/nsfwBlocking/async.tsx"),
				h = s("./src/reddit/actions/pages/profileComments/index.ts"),
				b = s("./src/reddit/actions/pages/profileShared.ts"),
				x = s("./src/reddit/components/ContentGate/index.tsx"),
				O = s("./src/reddit/components/EmptyProfile/index.ts"),
				v = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				C = s("./src/reddit/components/JumpToContent/index.tsx"),
				f = s("./src/lib/classNames/index.ts"),
				g = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				P = s("./src/lib/lessComponent.tsx"),
				j = s("./src/reddit/components/ClassicPost/index.tsx"),
				E = s("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				y = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				I = s("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				w = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				_ = s("./src/reddit/constants/postLayout.ts"),
				k = s("./src/reddit/contexts/PageLayer/index.tsx"),
				L = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				N = s("./src/reddit/selectors/commentSelector.ts"),
				T = s("./src/reddit/components/ProfileCommentList/ListItem.m.less"),
				M = s.n(T);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const R = P.a.wrapped(j.default, "ClassicPost", M.a),
				A = P.a.wrapped(y.a, "OverviewCommentPost", M.a),
				F = Object(k.v)({
					currentProfileName: k.j,
					pageLayer: e => e
				}),
				D = Object(d.c)({
					comment: (e, t) => {
						let {
							itemId: s
						} = t;
						return Object(N.c)(e, {
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
							} = e, o = t.toLowerCase(), n = s.models[o];
							return n ? n.username : void 0
						})(e, s)
					}
				});
			var B = F(Object(a.b)(D)(e => {
				const {
					comment: t,
					itemId: s,
					isFirstInCommentList: o,
					isLastInCommentList: n,
					layout: r,
					profileName: a,
					allowModToolsUnderComments: d
				} = e;
				if (r === _.g.Compact) return i.a.createElement(E.a, e);
				const {
					height: c,
					width: l,
					...m
				} = e;
				return i.a.createElement(W, m, o && i.a.createElement(I.a, {
					isFirst: !0
				}, r === _.g.Large ? i.a.createElement(R, S({}, e, {
					availableWidth: l,
					inSubredditOrProfile: !1,
					isOverlay: !1
				})) : i.a.createElement(A, S({}, e, {
					commentId: s,
					profileName: a
				}))), i.a.createElement(I.a, {
					isLast: n
				}, i.a.createElement(w.a, {
					commentId: s,
					depth: t.parentId ? 1 : 0,
					isFirst: !0,
					isLast: !0,
					key: s,
					profileName: a,
					showModTools: d
				})))
			}));
			const W = Object(g.a)(e => i.a.createElement("div", {
				className: Object(f.a)(M.a.backgroundMargin, {
					[M.a.isFirstInCommentList]: e.isFirstInCommentList,
					[M.a.isLastInCommentList]: e.isLastInCommentList
				}),
				style: {
					background: Object(L.e)(e)
				}
			}, e.children));
			var U = s("./src/reddit/components/ProfileItemList/index.tsx"),
				V = s("./node_modules/lodash/noop.js"),
				K = s.n(V),
				H = s("./src/reddit/actions/ads/index.ts"),
				J = s("./src/reddit/actions/comment/list.ts"),
				G = s("./src/reddit/actions/post.ts"),
				z = s("./src/reddit/components/TrackingHelper/index.tsx"),
				q = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				Z = s("./src/reddit/helpers/trackers/post.ts"),
				Q = s("./src/reddit/featureFlags/index.ts"),
				Y = s("./src/reddit/selectors/comments.ts"),
				X = s("./src/reddit/selectors/posts.ts"),
				$ = s("./src/reddit/selectors/profileComments.ts"),
				ee = s("./src/reddit/selectors/subreddit.ts"),
				te = s("./src/reddit/selectors/tracking.ts"),
				se = s("./src/reddit/selectors/user.ts");
			const oe = Object(k.v)(),
				ne = {
					apiError: $.a,
					apiPending: $.b,
					currentUser: se.m,
					measureScrollFPS: Q.d.measureScrollFPS,
					layout: k.U,
					loadMore: $.d,
					subredditsById: ee.eb,
					viewportDataLoaded: te.a,
					commentsById: Y.q,
					itemIds: $.f,
					itemIdToPostId: $.e,
					postsById: X.I,
					estimateItemHeight: e => (e, t, s) => {
						if (s) switch (t) {
							case _.g.Medium:
								return 174;
							case _.g.Classic:
								return 129;
							case _.g.Compact:
								return 120;
							default:
								return 140
						}
						switch (t) {
							case _.g.Medium:
							case _.g.Classic:
								return 90;
							case _.g.Compact:
								return 80;
							default:
								return 90
						}
					}
				},
				re = Object(d.c)(ne),
				ie = Object(a.b)(re, e => ({
					onBottomViewed: (t, s) => e(Object(J.c)(t, s)),
					adBrandSafetyStatusReceived: t => {
						e(H.d({
							isViewSafe: t
						}))
					},
					openPost: t => e(Object(G.K)(t)),
					fireAdPixelsOfType: K.a,
					trackOnPostEnteredViewport: K.a
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(Z.n)(e, t),
					postComponentForLayout: q.b
				}));

			function ae() {
				return (ae = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const de = e => i.a.createElement(B, ae({}, e, {
					allowModToolsUnderComments: !0
				})),
				ce = (e => Object(z.c)(oe(ie(e))))(U.a);
			var le = e => i.a.createElement(ce, ae({}, e, {
					itemComponent: de
				})),
				me = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				pe = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				ue = s("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				he = s("./src/reddit/helpers/name/index.ts"),
				be = s("./src/reddit/helpers/trackers/screenview.ts"),
				xe = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				Oe = s("./src/reddit/layout/page/Listing/index.tsx"),
				ve = s("./src/reddit/models/ContentGate.ts"),
				Ce = s("./src/reddit/pages/ProfileBlockInterstitial/index.tsx"),
				fe = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				ge = s("./src/reddit/selectors/experiments/nsfwBypassableBlockingExperiment.ts"),
				Pe = s("./src/reddit/selectors/profile.ts");

			function je() {
				return (je = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Ee = Object(k.v)(),
				ye = Object(d.a)(k.G, se.mb, (e, t) => {
					let {
						location: s
					} = t;
					return n()([...Object(l.a)(s.search)])
				}, k.U, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.profileName
				}, (e, t) => {
					let {
						match: s
					} = t;
					return Object(Pe.k)(e, {
						profileName: s.params.profileName
					})
				}, se.S, (e, t) => {
					let {
						match: s
					} = t;
					return Object(se.h)(e, c.qc + s.params.profileName)
				}, (e, t) => {
					let {
						match: s
					} = t;
					return Object(se.N)(e, {
						profileName: s.params.profileName
					})
				}, fe.g, ge.a, (e, t, s, o, n, r, i, a, d, c, l) => {
					var p;
					const {
						sort: u,
						t: h
					} = Object(b.b)(s), x = Object(m.a)(`u_${n}`, u, s);
					return {
						contentGateInfo: a,
						over18Prefs: t,
						isLoggedIn: i,
						isOwnProfile: e,
						isProfileNSFW: !!r && r.isNSFW,
						layout: o,
						listingKey: x,
						profileName: n,
						sort: u,
						timeSort: h,
						avatar: null === (p = null == r ? void 0 : r.icon) || void 0 === p ? void 0 : p.url,
						isBlocked: d,
						nsfwBlockingExperiment: c,
						showNewDesignBlocking: l
					}
				}),
				Ie = Object(a.b)(ye, (e, t) => ({
					onLoadMore: () => e(Object(h.moreItemsRequested)()),
					onLayoutChange: () => e(Object(h.profileCommentsRequested)({
						...t.match,
						queryParams: n()([...Object(l.a)(t.location.search)])
					})),
					openNsfwModal: () => e(Object(u.a)())
				}));
			t.default = Ee(Ie(Object(p.a)(Object(xe.d)(e => {
				const {
					avatar: t,
					contentGateInfo: s,
					isBlocked: o,
					isOwnProfile: n,
					isProfileNSFW: a,
					listingKey: d,
					nsfwBlockingExperiment: l,
					onLoadMore: m,
					onLayoutChange: p,
					openNsfwModal: u,
					over18Prefs: h,
					pageLayer: b,
					profileName: f,
					sort: g,
					timeSort: P,
					showNewDesignBlocking: j
				} = e;
				if (Object(r.useEffect)(() => {
						a && !n && l === fe.a.Blurred && u()
					}, [l, n, a, u]), !f || !b) return null;
				if (s && s.profileDeleted) return i.a.createElement(x.default, {
					contentGateType: ve.a.ProfileDeleted,
					profileName: f
				});
				if (s && s.profileSuspended) return i.a.createElement(x.default, {
					contentGateType: ve.a.ProfileSuspended,
					profileName: f
				});
				if (451 === b.status || s && s.profileBlockedForLegalReason) return i.a.createElement(x.default, {
					contentGateType: ve.a.ProfileBlockedForLegalReason,
					profileName: f
				});
				const E = b.queryParams && "true" === b.queryParams.consent;
				if (403 === b.status || o && !E) return i.a.createElement(Ce.a, {
					username: f,
					avatar: t
				});
				if (404 === b.status) return i.a.createElement(x.default, {
					contentGateType: ve.a.ProfileDoesNotExist,
					profileName: f
				});
				const y = f.toLowerCase(),
					I = `/user/${f}/comments/`,
					w = {
						listingKey: d,
						listingName: y
					};
				if (a && !n && l === fe.a.NoPreview && j) return i.a.createElement(ue.a, {
					contentTitle: Object(he.e)(f)
				});
				if (!h && a && !n && l !== fe.a.Blurred) return i.a.createElement(x.default, {
					contentGateType: ve.a.Nsfw,
					subredditName: f
				});
				const _ = {
					sort: g,
					baseUrl: I,
					sortOptions: c.Jb,
					timeSort: P
				};
				return i.a.createElement(Oe.a, {
					className: e.className,
					fitPageToContent: !0,
					contentNavBar: i.a.createElement(i.a.Fragment, null, i.a.createElement(me.a, {
						profileName: f,
						viewBlockedConsent: E
					})),
					content: i.a.createElement(i.a.Fragment, null, i.a.createElement(v.a, _), i.a.createElement(C.a, null), i.a.createElement(le, {
						listingKey: d,
						listingName: y,
						listingViewed: (e, t) => Object(be.n)(d, g, t, e, P),
						noPostsComponent: () => i.a.createElement(O.b, {
							profileName: f,
							timeSort: P
						}),
						onLoadMore: m,
						onTryAgain: p,
						inSubredditOrProfile: !1
					})),
					sidebar: i.a.createElement(pe.a, je({}, w, {
						profileName: f
					}))
				})
			}))))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileComments.97d728ae6b6712bdc5a8.js.map