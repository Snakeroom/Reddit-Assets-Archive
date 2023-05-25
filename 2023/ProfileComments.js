// https://www.redditstatic.com/desktop2x/ProfileComments.849e7cc8d8e841f333d2.js
// Retrieved at 5/25/2023, 12:30:04 PM by Reddit Dataminer v1.0.0
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
				return M
			})), s.d(t, "profileCommentsLoaded", (function() {
				return R
			})), s.d(t, "profileCommentsFailed", (function() {
				return A
			})), s.d(t, "profileCommentsRequested", (function() {
				return F
			})), s.d(t, "moreItemsPending", (function() {
				return U
			})), s.d(t, "moreItemsLoaded", (function() {
				return B
			})), s.d(t, "moreItemsFailed", (function() {
				return D
			})), s.d(t, "moreItemsRequested", (function() {
				return W
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
				b = s("./src/reddit/actions/profile/index.ts"),
				h = s("./src/reddit/actions/subreddit.ts"),
				x = s("./src/reddit/constants/errors.ts"),
				f = s("./src/reddit/constants/parameters.ts"),
				v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				O = s("./src/config.ts"),
				g = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				C = s("./src/lib/constants/index.ts"),
				j = s("./src/lib/makeApiRequest/index.ts"),
				E = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				P = s("./src/reddit/models/Comment/addProfileImgParam.ts"),
				k = s("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				y = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const w = (e, t, s, o) => {
				let n = Object(E.a)(Object(g.a)(Object(k.a)(Object(y.a)(`${O.a.gatewayUrl}/desktopapi/v1/user/${t}/comments`))));
				return o && (n = Object(P.a)(n)), Object(j.a)(e, {
					data: s,
					endpoint: n,
					method: C.pb.GET
				})
			};
			var I = s("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				_ = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				L = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				N = s("./src/reddit/selectors/profile.ts"),
				S = s("./src/reddit/selectors/profileComments.ts"),
				T = s("./src/reddit/actions/pages/profileComments/constants.ts");
			const M = Object(a.a)(T.f),
				R = Object(a.a)(T.e),
				A = Object(a.a)(T.d),
				F = e => async (t, s, o) => {
					const {
						queryParams: n,
						params: r
					} = e, {
						sort: a,
						t: v
					} = Object(p.b)(n), {
						profileName: O
					} = r, g = Object(d.a)(`u_${O}`, a, e.queryParams), {
						profileCommentsPage: C
					} = s(), j = C.commentIds[g], E = C.api.error[g], P = C.api.pending[g];
					if (await t(b.d(O)), P || j && !E) {
						if (j) {
							const e = Object(N.s)(s(), {
								profileName: O
							});
							t(u.n({
								title: e
							}))
						}
						return
					}
					const k = {
						...i()(e.queryParams, [...f.p, f.l]),
						sort: a,
						t: Object(I.a)(a, v)
					};
					t(M({
						key: g
					}));
					const y = await Object(_.a)("profileComments", () => w(o.apiContext(), O, k, Object(L.a)(s())));
					if (!y.ok) return t(A({
						account: y.body.data ? y.body.data.account : null,
						error: y.body.reason ? {
							type: y.body.reason
						} : y.error,
						key: g
					})), y.body.reason === x.a.DeletedProfile && t(Object(c.v)({
						profileName: O
					})), void t(u.o(y.status));
					const S = y.body;
					t(R({
						key: g,
						meta: s().meta,
						...S
					})), await Promise.all([t(Object(p.c)(O)), t(Object(h.q)()), t(Object(m.b)()), t(l.o(O))])
				}, U = Object(a.a)(T.c), B = Object(a.a)(T.b), D = Object(a.a)(T.a), W = () => async (e, t, s) => {
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
						profileName: b
					} = l, h = Object(d.a)(`u_${b}`, m, c), x = Object(S.d)(r, {
						listingKey: h
					});
					if (!x) return;
					const O = Object(S.b)(r, {
							listingKey: h
						}),
						g = Object(S.c)(r, {
							listingKey: h
						}),
						C = g && g[x.token];
					if (O || C) return;
					e(U({
						key: h,
						fetchedToken: x.token
					}));
					const j = await w(o(), b, {
						after: x.token,
						dist: x.dist,
						sort: m,
						t: u,
						...i()(c, f.p),
						layout: Object(v.U)(r, {}).toLowerCase()
					}, Object(L.a)(r));
					if (j.ok) {
						const t = Object(S.f)(r, {
								listingKey: h
							}),
							s = {
								...j.body,
								commentIds: n()(j.body.commentIds, t)
							};
						e(B({
							fetchedToken: x.token,
							key: h,
							meta: r.meta,
							...s
						}))
					} else e(D({
						account: j.body.data ? j.body.data.account : null,
						error: j.error,
						fetchedToken: x.token,
						key: h
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
				b = s("./src/reddit/components/CreatorStats/loader.tsx"),
				h = s("./node_modules/react-redux/es/index.js"),
				x = s("./src/reddit/models/Audio/index.ts"),
				f = s("./src/reddit/selectors/experiments/econ/index.ts"),
				v = s("./src/reddit/components/Econ/Audio/index.m.less"),
				O = s.n(v),
				g = s("./src/config.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/components/Econ/Audio/MuteIcon.tsx"),
				E = s("./src/reddit/components/Econ/Audio/SpeakerRings/index.tsx");
			const {
				fbt: P
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = () => Math.floor(10 * Math.random()) + 1;
			var y = e => {
					let {
						postId: t
					} = e;
					const s = Object(h.e)(C.fb),
						[r, a] = Object(o.useState)(!1),
						[d, c] = Object(o.useState)(k());
					return Object(o.useEffect)(() => {
						let e;
						const t = setInterval(() => {
							a(!0), e = setTimeout(() => a(!1), 3500), c(k())
						}, 6e3);
						return () => {
							clearInterval(t), clearTimeout(e)
						}
					}, []), n.a.createElement("div", {
						className: O.a.classicSpeaker
					}, r && n.a.createElement(E.a, {
						ringId: `${t}`,
						className: Object(i.a)(O.a.speakerRings, {
							[O.a.nightMode]: s
						}),
						ringClassName: "speakerRing",
						isAnimated: !0
					}), n.a.createElement("img", {
						key: `audioPostAvatar--${d}`,
						className: O.a.snoovatar,
						src: `${g.a.assetPath}/img/talk/avatars/${d}.png`,
						alt: P._("Reddit Talk", null, {
							hk: "XNl4V"
						})
					}), !r && n.a.createElement("div", {
						className: O.a.muteContainer
					}, n.a.createElement(j.a, {
						className: O.a.muteIcon
					})))
				},
				w = s("./src/reddit/components/Econ/Audio/UpcomingTalk/index.tsx");
			const {
				fbt: I
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var _ = e => {
					let {
						post: t
					} = e;
					const {
						audioRoom: s,
						postId: o,
						author: r
					} = t;
					return Object(h.e)(f.n) && s.roomStatus === x.b.NotStarted ? n.a.createElement(w.a, {
						postId: o,
						author: r,
						roomId: s.roomId,
						isClassicView: !0
					}) : (null == s ? void 0 : s.isLive) ? n.a.createElement("a", {
						href: `https://www.reddit.com/talk/${s.roomId}`,
						target: "_blank",
						rel: "noopener noreferrer",
						className: O.a.liveClassicContainer,
						"data-testid": "audioroom-classic-live"
					}, n.a.createElement(y, {
						postId: o
					})) : n.a.createElement("div", {
						className: O.a.endedClassicContainer
					}, n.a.createElement(j.a, {
						className: O.a.muteIcon
					}))
				},
				L = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				N = s("./src/reddit/components/ExpandoButton/index.tsx"),
				S = s("./src/reddit/components/Flatlist/index.tsx"),
				T = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				M = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				R = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				A = s("./src/reddit/components/ModModeReports/index.tsx"),
				F = s("./src/reddit/components/ModModeReports/helpers.ts"),
				U = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				B = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				D = s("./src/reddit/components/PostContainer/index.tsx"),
				W = s("./src/reddit/components/PostMeta/index.tsx"),
				V = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				G = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				J = s("./src/reddit/components/PostTitle/index.tsx"),
				K = s("./src/reddit/components/PostTopMeta/index.tsx"),
				H = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				q = s("./src/reddit/models/Media/index.ts"),
				Q = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				Z = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				z = s("./src/reddit/constants/postLayout.ts"),
				X = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				Y = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				$ = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				ee = s("./src/reddit/helpers/search/renderMedia.tsx"),
				te = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				se = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				oe = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				ne = s.n(oe),
				re = s("./src/reddit/models/Post/index.ts"),
				ie = s("./src/redditGQL/types.ts"),
				ae = s("./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx"),
				de = s("./src/reddit/components/ClassicPost/index.m.less"),
				ce = s.n(de);

			function le() {
				return (le = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const me = Object(a.a)(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: a,
					handleVote: h,
					isExpanded: f,
					inSubredditOrProfile: v,
					eventFactory: O,
					flairStyleTemplate: g,
					formatTitle: C,
					hostPostData: j,
					isCheckboxSelected: E,
					isCurrentUserProfilePost: P,
					isFrontpage: k,
					isGalleryTileLayoutDefault: y,
					isLoggedIn: w,
					isOverlay: I,
					imageGalleryCurrentItem: Z,
					moderatorPermissions: oe,
					modModeEnabled: de,
					onClickPost: me,
					onIgnoreReports: pe,
					onOpenReportsDropdown: ue,
					onSizeChanged: be,
					poll: he,
					post: xe,
					postId: fe,
					redditStyle: ve,
					scrollerItemRef: Oe,
					showBulkActionCheckbox: ge,
					showEditFlair: Ce,
					showMedia: je,
					shouldShowInsightsButton: Ee,
					subredditOrProfile: Pe,
					toggleCheckbox: ke,
					userIsOp: ye,
					shouldShowGalleryTileOption: we,
					showCTAExperimentDesign: Ie
				} = e, _e = Object(l.a)(), Le = Object(c.a)(f);
				Object(o.useEffect)(() => {
					be && Le !== f && be(xe.id)
				}, [f, be, xe.id, Le]);
				const Ne = ve ? void 0 : g,
					Se = s || void 0,
					Te = Object($.a)(oe),
					Me = Object(X.a)(oe),
					Re = Object(Y.a)(oe),
					Ae = de && $.a,
					Fe = Object(R.a)(xe),
					Ue = Object(F.c)(xe),
					Be = !!xe.media && xe.media.type === q.o.RTJSON,
					De = ye && Be,
					We = v && !je,
					Ve = !!xe.recommendationContext,
					Ge = {
						flairStyleTemplate: Ne,
						post: xe,
						inSubredditOrProfile: v,
						isCurrentUserProfilePost: P,
						isOverlay: I,
						shouldShowSubscribeButton: !(k && w) || Ve && w,
						subredditOrProfile: Pe
					},
					Je = Object(r.t)(xe, Z),
					[Ke, He] = Object(o.useState)(!1),
					qe = Object(o.useCallback)(() => {
						He(!Ke), _e(Object(se.d)(fe))
					}, [Ke, fe, _e]);
				let Qe = n.a.createElement(Q.a, {
					className: ce.a.classicThumbnail,
					crosspost: Se && xe,
					isMeta: xe.isMeta,
					post: Se || xe,
					redditStyle: ve,
					templatePlaceholderImage: Ne && Ne.postPlaceholderImage
				});
				Object(x.c)(xe) && (Qe = n.a.createElement(_, {
					post: xe
				}));
				const Ze = Object(re.r)(xe);
				return n.a.createElement(D.b, {
					className: Object(i.a)(ne.a.classicPostStyles, ce.a.postContainer, Object(te.a)(e), {
						[ce.a.shouldShowOverflow]: Ee
					}, t),
					isOverlay: I,
					style: {
						...Object(te.d)(e),
						...Object(te.b)(Ne)
					},
					post: xe,
					onClick: me,
					eventFactory: O
				}, n.a.createElement(G.a, {
					model: xe,
					handleVote: h,
					showBulkActionCheckbox: ge,
					isCheckboxSelected: E,
					toggleCheckbox: ke,
					flairStyleTemplate: Ne,
					redditStyle: ve,
					postId: fe
				}), n.a.createElement(B.a, {
					className: Ee ? ce.a.shouldUseRoundedBorder : void 0,
					"data-click-id": "background",
					flairStyleTemplate: Ne
				}, n.a.createElement(L.a, {
					className: ce.a.eventMeta,
					post: xe
				}), n.a.createElement("div", {
					className: ce.a.mainBody
				}, n.a.createElement("div", {
					className: We ? ce.a.expandoContainer : ce.a.thumbnailContainer
				}, !We && Qe, n.a.createElement(N.a, {
					crosspost: Se,
					className: ce.a.rightExpando,
					isExpanded: !!f,
					post: xe,
					useMediaIcons: !1
				})), n.a.createElement("div", {
					className: Object(i.a)(ce.a.content, {
						[ce.a.showBulkActionCheckbox]: ge
					}),
					"data-click-id": "body"
				}, Ze && n.a.createElement(U.a, {
					content: xe.recommendationContext.content,
					layout: z.g.Classic,
					post: xe
				}), n.a.createElement(J.c, {
					className: he ? ce.a.titleWithPoll : void 0,
					format: C,
					poll: he,
					post: xe,
					redditStyle: ve,
					size: J.b.Medium,
					titleColor: Ne && Ne.postTitleColor,
					isOverlay: I
				}, xe.source && !Se && !xe.isSurveyAd && n.a.createElement(H.a, {
					href: xe.source.url,
					isSponsored: xe.isSponsored,
					postId: xe.id,
					source: xe.source
				}, Object(d.a)(xe))), n.a.createElement(W.a, le({
					key: "PostMeta"
				}, Ge)), de && Te && Fe && n.a.createElement(M.a, {
					thing: xe
				}), de && Te && Ue && n.a.createElement(A.a, {
					onIgnoreReports: pe,
					reportable: xe
				}), Object(r.v)(xe, Z) && n.a.createElement(m.a, {
					ctaExperimentDesign: Ie && "classic",
					className: Object(i.a)(ce.a.adLinkWrapper, {
						[ce.a.ctaExperiment]: Ie
					})
				}, n.a.createElement(p.a, {
					post: xe,
					adLinkContent: Je,
					ctaExperimentDesign: Ie && "classic"
				})), xe.discussionType === ie.n.Chat && n.a.createElement(ae.a, {
					postId: xe.id
				}), n.a.createElement("div", {
					className: ce.a.flatlistContainer
				}, n.a.createElement(N.a, {
					className: ce.a.leftExpando,
					crosspost: Se,
					isExpanded: !!f,
					post: xe,
					useMediaIcons: !1
				}), n.a.createElement(u.a, {
					className: ce.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: Ne,
					model: xe,
					onVoteClick: h
				}), n.a.createElement(S.a, {
					className: ce.a.flatlistSeparator
				}), !xe.isSurveyAd && n.a.createElement(S.c, {
					className: ce.a.flatlist,
					currentUser: a,
					hasModFlairPerms: Me,
					hasModPostPerms: Te,
					hasModFullPerms: Re,
					hostPostData: j,
					isOverlay: !!I,
					modModeEnabled: de,
					onClickInsightsButton: qe,
					onIgnoreReports: pe,
					onOpenReportsDropdown: ue,
					post: xe,
					shouldShowInsightsButton: Ee,
					showEditPost: De,
					showEditFlair: Ce,
					tooltipType: I ? K.f.Lightbox : void 0,
					useFlatlistBreakpoints: Object(V.b)({
						editPost: !Ae,
						hide: !Ae,
						report: !Ae,
						mute: !Ae,
						save: !Ae
					})
				})), n.a.createElement(T.d, null))), Object(ee.a)(xe, ce.a, Oe, f, we, y), Pe && Ke && n.a.createElement(b.a, {
					className: ce.a.creatorStatsContainer,
					post: xe,
					subreddit: Pe,
					isOwnProfileStats: !0
				})))
			});
			t.default = Object(Z.a)(me)
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
				b = s.n(u);
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js"), x = .75, f = 10 * d.N;
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
					return s ? n.a.createElement("div", null, e()) : n.a.createElement("div", {
						className: b.a.collapsedCommentWrapper
					}, n.a.createElement("div", {
						className: b.a.collapsedCommentLine,
						style: {
							height: t
						}
					}, n.a.createElement("div", {
						ref: e => this.commentElement = e
					}, e(b.a.rtjCollapsed))), n.a.createElement("a", {
						className: b.a.seeMore,
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
					var e, t;
					if (this.state.expandToggled) return null;
					!(null === (t = null === (e = this.commentElement) || void 0 === e ? void 0 : e.textContent) || void 0 === t ? void 0 : t.trim().includes("\n")) && (window.addEventListener("resize", this.handleResize), this.handleResize())
				}
				componentWillUnmount() {
					window && window.removeEventListener("resize", this.handleResize)
				}
			}
			var O = v,
				g = s("./node_modules/fbt/lib/FbtPublic.js"),
				C = s("./node_modules/lodash/noop.js"),
				j = s.n(C),
				E = s("./src/lib/makeCommentsPageKey/index.ts"),
				P = s("./src/lib/makeDraftKey/index.ts"),
				k = s("./src/reddit/actions/comment/index.ts"),
				y = s("./src/reddit/actions/comment/authoring.ts"),
				w = s("./src/reddit/actions/comment/moderation.ts"),
				I = s("./src/reddit/actions/gold/modals.ts"),
				_ = s("./src/reddit/actions/modal.ts"),
				L = s("./src/reddit/actions/reportFlow/index.ts"),
				N = s("./src/reddit/actions/toaster.ts"),
				S = s("./src/reddit/actions/tooltip.ts"),
				T = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				M = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				R = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				A = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				F = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				U = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				B = s("./src/reddit/components/ModModeReports/helpers.ts"),
				D = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				W = s("./src/reddit/contexts/InsideOverlay.tsx"),
				V = s("./src/reddit/contexts/PageLayer/index.tsx"),
				G = s("./src/reddit/helpers/correlationIdTracker.ts"),
				J = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				K = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				H = s("./src/reddit/helpers/overlay/index.ts"),
				q = s("./src/reddit/helpers/trackers/lightbox.ts"),
				Q = s("./src/reddit/models/PostDraft/index.ts"),
				Z = s("./src/reddit/models/Comment/index.ts"),
				z = s("./src/reddit/selectors/activeModalId.ts"),
				X = s("./src/reddit/selectors/comments.ts"),
				Y = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
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
				be = s("./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less"),
				he = s.n(be),
				xe = s("./src/lib/collectible-expressions/index.ts"),
				fe = s("./src/lib/constants/icons.ts"),
				ve = s("./src/lib/lessComponent.tsx"),
				Oe = s("./src/reddit/icons/fonts/index.tsx"),
				ge = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				Ce = s("./src/reddit/models/Toast/index.ts");
			const je = ve.a.wrapped(oe.b, "OverflowMenu", he.a),
				Ee = ve.a.wrapped(M.a, "ModToolsFlatlist", he.a),
				Pe = ve.a.wrapped(U.a, "ModActionsMenu", he.a),
				ke = ve.a.wrapped(de.b, "DropdownRow", he.a),
				ye = ve.a.wrapped(le.a, "Flatlist", he.a),
				we = ve.a.button("Button", he.a),
				Ie = Object(V.v)(),
				_e = e => `Comment-${e}--Modal--DeleteComment`,
				Le = e => `Distinguish--Dropdown--${e}`,
				Ne = (e, t) => `${e}--${t}-overflow-menu`,
				Se = e => `View--Reports--${e}`,
				Te = Object(i.c)({
					activeTooltipId: te.a,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(z.a)(e) === _e(s.id)
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(X.E)(e, {
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
						return Object(X.m)(e, {
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
					reportingRevampEnabled: Y.a
				});
			class Me extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(ce.c)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleEdit = () => {
						const e = Object(J.a)(this.props.comment);
						Object(xe.a)(e) ? this.props.showToast({
							text: g.fbt._("Sorry, currently you cannot edit Collectible Expression comments on Web.", null, {
								hk: "4dlNfM"
							}),
							duration: 8e3,
							kind: Ce.b.SuccessLockComment
						}) : this.props.handleEdit(this.props.commentPermalink)
					}, this.handleIgnoreReports = () => {
						this.props.onIgnoreReports(), this.sendCommentReportEvent(this.props.comment.ignoreReports ? "restore_reports" : "ignore_reports")
					}, this.handleGild = async () => {
						const e = Object(G.d)(G.a.GildingFlow, !0);
						this.props.onGildClick(e);
						const {
							clickGildEvent: t
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(t(this.props.comment.id))
					}, this.handleModActionsMenu = () => this.props.sendEvent(Object(ce.c)("comment_mod_action_menu", this.props.comment.id)), this.handleOverflowMenuClick = () => this.props.sendEvent(Object(ce.c)("comment_overflow_menu", this.props.comment.id)), this.handleDelete = () => this.props.handleDelete(), this.handleReply = () => this.props.handleReply(this.props.commentPermalink), this.handleRestrictedButtonClick = () => {
						this.props.onToggleReportsDropdown(), this.sendCommentModEventWithName("comment_report_menu")
					}, this.handleSave = () => {
						this.props.comment.isSaved ? this.props.sendEvent(Object(ce.c)("unsave", this.props.comment.id)) : this.props.sendEvent(Object(ce.c)("save", this.props.comment.id)), this.props.onToggleSave()
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(ce.d)(e, this.props.comment.id)), this.sendCommentEventWithName = e => this.props.sendEvent(Object(q.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentEventWithNameShare = () => this.sendCommentEventWithName("share"), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(ce.c)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(ce.g)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? n.a.createElement(re.a, {
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
					} = this.props, i = Object(K.a)(s), a = !!t && t.displayText === e.author;
					if (r && i) return o ? n.a.createElement(Ee, {
						comment: e,
						isCommentAuthor: a
					}) : n.a.createElement(Pe, {
						dropdownId: `${e.id}-profile-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: this.handleModActionsMenu
					}, n.a.createElement(pe.a, null), n.a.createElement(T.a, {
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
						selected: this.props.activeTooltipId === Se(e.id),
						id: Se(e.id)
					}, n.a.createElement(D.a, {
						model: e,
						onIgnoreReports: this.handleIgnoreReports,
						tooltipId: Se(e.id)
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
					} = this.props, a = Object(K.a)(s), d = !!t && t.displayText === e.author, c = !!t && t.isEmployee;
					if (i && d && !e.bannedBy && (c || a && !o)) return n.a.createElement(R.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.activeTooltipId === Le(e.id)
					}, n.a.createElement(ge.a, null), n.a.createElement(F.a, {
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
					} = this.props, u = Object(K.a)(c), b = !!r && r.displayText === e.author, h = (!l && !e.isLocked || u && a) && !Object(Z.g)(e), x = r && e.isGildable && !Object(Z.g)(e);
					return n.a.createElement("div", {
						className: s
					}, n.a.createElement(ye, null, h && n.a.createElement(we, {
						onClick: this.handleReply,
						disabled: d
					}, g.fbt._("Reply", null, {
						hk: "1xBqIs"
					})), x && n.a.createElement(we, {
						onClick: this.handleGild
					}, g.fbt._("Give Award", null, {
						hk: "pQJYk"
					})), n.a.createElement(ie.a, {
						dropdownId: `${o}--${e.id}-comment-share-menu`,
						permalink: t,
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == m ? void 0 : m.type
					}, n.a.createElement(we, {
						onClick: this.sendCommentEventWithNameShare
					}, g.fbt._("share", null, {
						hk: "3YIXpa"
					}))), this.renderReportsDropdown(), n.a.createElement(je, {
						dropdownId: Ne(o, e.id),
						onClick: this.handleOverflowMenuClick
					}, !b && !d && n.a.createElement(ke, {
						displayText: g.fbt._("report", null, {
							hk: "ad7CE"
						}),
						onClick: this.props.onReportClick
					}, n.a.createElement(Oe.a, {
						name: fe.a.report
					})), n.a.createElement(ke, {
						displayText: e.isSaved ? g.fbt._("Unsave", null, {
							hk: "4kQcAP"
						}) : g.fbt._("Save", null, {
							hk: "4yMsMq"
						}),
						isSelected: e.isSaved,
						onClick: this.handleSave
					}, e.isSaved ? n.a.createElement(Oe.a, {
						name: fe.a.saved
					}) : n.a.createElement(Oe.a, {
						name: fe.a.save
					})), b && n.a.createElement(ke, {
						displayText: g.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						onClick: this.handleEdit
					}, n.a.createElement(Oe.a, {
						name: fe.a.edit
					})), b && n.a.createElement(ke, {
						displayText: g.fbt._("delete", null, {
							hk: "e8kvB"
						}),
						onClick: this.handleDelete
					}, n.a.createElement(Oe.a, {
						name: fe.a.delete
					}))), this.props.isConfirmModalOpen && n.a.createElement(A.a, {
						actionText: g.fbt._("Delete", null, {
							hk: "3hQAl"
						}),
						cancelActionText: g.fbt._("Keep", null, {
							hk: "3vWZkQ"
						}),
						headerText: g.fbt._("Delete comment", null, {
							hk: "2ErmbC"
						}),
						modalText: g.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "21h9zY"
						}),
						onConfirm: i,
						toggleModal: p,
						trackClick: j.a,
						withOverlay: !0
					}), this.renderModTools(), this.renderDistinguishDropdown()), this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var Re = Ie(Object(r.b)(Te, (e, t) => {
					let {
						comment: s,
						commentsPageKey: o
					} = t;
					return {
						deleteComment: () => o && e(Object(y.i)(s.id, s.postId)),
						onDistinguishComment: (t, o) => e(Object(w.b)(s.id, t, o)),
						onIgnoreReports: () => e(Object(w.g)(s.id)),
						onGildClick: t => e(Object(I.d)({
							correlationId: t,
							thingId: s.id
						})),
						onReportClick: () => e(Object(L.c)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(S.h)({
							tooltipId: Le(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(S.h)({
							tooltipId: Se(s.id)
						})),
						onToggleSave: () => e(Object(k.o)(s.id)),
						handleDelete: () => {
							e(Object(_.i)(_e(s.id))), e(Object(S.h)({
								tooltipId: Ne(o, s.id)
							}))
						},
						handleEdit: t => {
							const o = Object(E.a)(s.postId, s.id, {}),
								n = {
									commentId: s.id,
									draftKey: Object(P.a)(Q.c.edit, s.id),
									text: s.bodyMD || "",
									commentMode: s.media && s.media.rteMode,
									commentsPageKey: o
								};
							e(Object(H.a)(t)), e(Object(y.g)(n))
						},
						handleReply: t => {
							const o = Object(E.a)(s.postId, s.id, {}),
								n = {
									parentCommentId: s.id,
									commentsPageKey: o
								};
							e(Object(H.a)(t)), e(Object(y.h)(n))
						},
						showToast: t => e(Object(N.f)(t)),
						toggleDeleteCommentModal: () => e(Object(_.i)(_e(s.id)))
					}
				})(Object(ae.c)(Object(W.b)(Me)))),
				Ae = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Fe = s("./src/reddit/components/RichTextJson/index.tsx"),
				Ue = s("./src/reddit/selectors/commentSelector.ts"),
				Be = s("./src/reddit/components/Comments/ProfileComment/index.m.less"),
				De = s.n(Be);
			const We = ve.a.wrapped(Ae.a, "TopMeta", De.a),
				Ve = ve.a.div("ProfileCommentWrapper", De.a),
				Ge = ve.a.div("CommentBody", De.a),
				Je = Object(r.b)(() => Object(i.c)({
					comment: (e, t) => Object(Ue.c)(e, t),
					flair: X.e
				})),
				Ke = Object(c.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.a = Je(e => {
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
						content: Object(J.a)(t),
						mediaMetadata: t.media && t.media.mediaMetadata,
						expressionAssetData: null === (o = t.media) || void 0 === o ? void 0 : o.expressionAssetData,
						rtJsonElementProps: Ke(e),
						mediaProps: {
							alignLeft: !0,
							renderSmallMedia: !0
						}
					})
				};
				return n.a.createElement(Ve, {
					className: Object(a.a)({
						[De.a.isRemoved]: !!t.bannedBy
					})
				}, n.a.createElement(We, {
					collapsedBecauseCrowdControl: !1,
					collapsed: !1,
					comment: t,
					commentsPageKey: s,
					flair: o,
					renderedInOverlay: !1
				}), n.a.createElement("div", null, !t.isDeleted && n.a.createElement(Ge, null, r ? l() : n.a.createElement(O, {
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
				return P
			})), s.d(t, "a", (function() {
				return k
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
				b = s("./src/reddit/components/SourceLink/index.tsx"),
				h = s("./src/reddit/components/Thumbnail/index.tsx"),
				x = s("./src/lib/constants/index.ts"),
				f = s("./src/reddit/contexts/Post/index.tsx"),
				v = s("./src/reddit/selectors/posts.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/CrosspostBox/index.m.less"),
				C = s.n(g),
				j = s("./src/lib/lessComponent.tsx");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const P = 8,
				k = 1,
				y = j.a.div("Container", C.a),
				w = j.a.div("PostMetaWrapper", C.a),
				I = j.a.wrapped(u.c, "PostTitle", C.a),
				_ = j.a.div("FlatList", C.a),
				L = j.a.div("FlatItem", C.a),
				N = j.a.span("FlatListDotSpacer", C.a),
				S = j.a.wrapped(y, "LinkContainer", C.a),
				T = j.a.div("Content", C.a),
				M = j.a.div("ThumbnailContainer", C.a),
				R = Object(d.c)({
					isCurrentUserProfilePost: v.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== x.Tb.TOPIC),
					shouldOpenPostInNewTab: O.lb
				}),
				A = Object(i.b)(R);
			t.c = Object(f.b)(A(e => {
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
				return i && !i.media ? r.a.createElement(S, {
					className: c
				}, r.a.createElement(T, null, r.a.createElement(w, null, r.a.createElement(p.a, d)), F(i), i.source && r.a.createElement(b.a, {
					post: i
				}), B(e)), W(e)) : r.a.createElement(y, {
					className: c
				}, r.a.createElement(w, null, r.a.createElement(p.a, d)), F(i), U(e), B(e))
			}));
			const F = e => r.a.createElement(I, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: u.b.Small
				}),
				U = e => {
					const {
						mediaProps: t,
						post: s
					} = e, o = {
						...t,
						post: s,
						crosspost: t.post
					};
					return r.a.createElement("div", null, r.a.createElement(m.a, E({}, o, {
						className: C.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				B = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return r.a.createElement(_, null, r.a.createElement(L, null, o.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [o.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), r.a.createElement(N, null), r.a.createElement(L, null, D(e)))
				},
				D = e => {
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
				W = e => r.a.createElement(M, null, r.a.createElement(h.b, {
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
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingInner.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => {
				let {
					className: t,
					ringId: s
				} = e;
				return n.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "49",
					height: "49",
					viewBox: "0 0 49 49",
					fill: "none"
				}, n.a.createElement("rect", {
					opacity: "0.8",
					x: "1",
					y: "1",
					width: "46",
					height: "46",
					rx: "23",
					stroke: `url(#paint0_linear_284_569805-${s})`,
					strokeWidth: "2"
				}), n.a.createElement("defs", null, n.a.createElement("linearGradient", {
					id: `paint0_linear_284_569805-${s}`,
					x1: "-4.24542",
					y1: "0.154669",
					x2: "55.6993",
					y2: "1.87207",
					gradientUnits: "userSpaceOnUse"
				}, n.a.createElement("stop", {
					stopColor: "#FF538C"
				}), n.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingMiddle.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => {
				let {
					className: t,
					ringId: s
				} = e;
				return n.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "56",
					height: "56",
					viewBox: "0 0 56 56",
					fill: "none"
				}, n.a.createElement("rect", {
					opacity: "0.5",
					x: "0.934437",
					y: "1.15466",
					width: "54",
					height: "54",
					rx: "27",
					stroke: `url(#paint0_linear_284_569806-${s})`
				}), n.a.createElement("defs", null, n.a.createElement("linearGradient", {
					id: `paint0_linear_284_569806-${s}`,
					x1: "-5.50082",
					y1: "0.65467",
					x2: "63.1858",
					y2: "2.62253",
					gradientUnits: "userSpaceOnUse"
				}, n.a.createElement("stop", {
					stopColor: "#FF538C"
				}), n.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingOuter.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => {
				let {
					className: t,
					ringId: s
				} = e;
				return n.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "64",
					height: "64",
					viewBox: "0 0 64 64",
					fill: "none"
				}, n.a.createElement("rect", {
					opacity: "0.3",
					x: "0.684437",
					y: "0.904663",
					width: "62.5",
					height: "62.5",
					rx: "31.25",
					stroke: `url(#paint0_linear_284_569807-${s})`,
					strokeWidth: "0.5"
				}), n.a.createElement("defs", null, n.a.createElement("linearGradient", {
					id: `paint0_linear_284_569807-${s}`,
					x1: "-6.36412",
					y1: "0.654671",
					x2: "72.3133",
					y2: "2.90877",
					gradientUnits: "userSpaceOnUse"
				}, n.a.createElement("stop", {
					stopColor: "#FF538C"
				}), n.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/index.m.less": function(e, t, s) {
			e.exports = {
				ringsContainer: "_3o_krdWfVVLOac1O-lVvTY",
				animated: "FTiJjjTo1ieOsSlT2EP08",
				fadein: "_2rEznjvY2VtmhBvzQVcKSA",
				reverb: "_4fN6nwGFX9KM3IkyL96J6",
				fadeout: "_2NIaOpVXH7sOwUsZ_g6ncE",
				innerRing: "fHWSRI59TPmnNbWLIicZp",
				middleRing: "_1GWX6vX1xdG3nZrRB4N5Yo",
				outerRing: "_24PG9NuvmXf9LT0ZIIzD8A"
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/Econ/Audio/SpeakerRings/index.m.less"),
				a = s.n(i),
				d = s("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingInner.tsx"),
				c = s("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingMiddle.tsx"),
				l = s("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingOuter.tsx");
			t.a = e => {
				let {
					className: t,
					ringClassName: s,
					ringId: o,
					isAnimated: i = !1
				} = e;
				return n.a.createElement("div", {
					className: Object(r.a)(a.a.ringsContainer, t, i ? a.a.animated : "")
				}, n.a.createElement(d.a, {
					ringId: o,
					className: Object(r.a)(a.a.innerRing, `${s}Inner`)
				}), n.a.createElement(c.a, {
					ringId: o,
					className: Object(r.a)(a.a.middleRing, `${s}Middle`)
				}), n.a.createElement(l.a, {
					ringId: o,
					className: Object(r.a)(a.a.outerRing, `${s}Outer`)
				}))
			}
		},
		"./src/reddit/components/Econ/Audio/UpcomingTalk/index.m.less": function(e, t, s) {
			e.exports = {
				upcomingTalkCard: "_1ng4vZrRsv4atm7KiZqzi",
				upcomingTalkContainer: "_2zQOetr4IrprS8H-cDkAyF",
				upcomingTalkInfo: "_1jr6igJaJjdBSf6gQILUHz",
				upcomingTalkLabel: "_24TGrjt1qFqchgJsm9regX",
				upcomingTalkHost: "_37h0RGkgWTCbecBmJVgL4V",
				StartTalkButton: "cw7J5pVSXn74JXDoOYlf",
				startTalkButton: "cw7J5pVSXn74JXDoOYlf",
				isNightMode: "jnzL83t6CY_CK_unbB0gI",
				MicrophoneIcon: "_2pbYJFUWfuaX3M5enGW62T",
				microphoneIcon: "_2pbYJFUWfuaX3M5enGW62T",
				hostAvatar: "_3QTjosw2bqonj6JPtDic5U",
				snoovatar: "_3YF-FxrjtGM2LtVtg_R8V_",
				snoovatarHeadshotContainer: "nU336w0rssAqUStSYM_xR",
				isImage: "_3qKfFw1Pvju3jBDzGxH6Wd",
				classicView: "_3BVeVQiYsH7FAegU2VUmV-",
				loadingIcon: "xmKaq8gXHdYMcfRximxGn"
			}
		},
		"./src/reddit/components/Econ/Audio/UpcomingTalk/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/actions/profile/index.ts"),
				d = s("./src/reddit/components/UserIcon/index.tsx"),
				c = s("./src/lib/eventTools/index.ts"),
				l = s("./src/reddit/constants/tracking.ts"),
				m = s("./src/reddit/selectors/postCreations.ts"),
				p = s("./src/reddit/selectors/telemetry.ts");
			var u = s("./src/reddit/hooks/useTracking.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/components/Econ/Audio/SpeakerRings/index.tsx"),
				x = s("./src/reddit/components/Econ/Audio/UpcomingTalk/index.m.less"),
				f = s.n(x),
				v = s("./src/config.ts"),
				O = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				C = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				j = s("./src/reddit/hooks/useGqlContext.ts");
			var E = e => n.a.createElement("svg", {
					width: "15",
					height: "19",
					viewBox: "0 0 15 19",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					d: "M8.125 15.9701V17.7501H9.925V19.0001H5.08V17.7501H6.88V15.9701C5.18411 15.8688 3.58787 15.1352 2.40663 13.9141C1.22538 12.6931 0.545039 11.0734 0.5 9.3751H1.75C1.80295 10.8493 2.43767 12.2424 3.51528 13.2497C4.59288 14.2571 6.02562 14.7965 7.5 14.7501C8.97438 14.7965 10.4071 14.2571 11.4847 13.2497C12.5623 12.2424 13.197 10.8493 13.25 9.3751H14.5C14.4551 11.0726 13.7754 12.6916 12.5952 13.9125C11.415 15.1334 9.82 15.8676 8.125 15.9701ZM3.5 8.9481V4.0481C3.5 2.98723 3.92143 1.96981 4.67157 1.21967C5.42172 0.469523 6.43913 0.0480957 7.5 0.0480957C8.56087 0.0480957 9.57828 0.469523 10.3284 1.21967C11.0786 1.96981 11.5 2.98723 11.5 4.0481V8.9481C11.5 10.009 11.0786 11.0264 10.3284 11.7765C9.57828 12.5267 8.56087 12.9481 7.5 12.9481C6.43913 12.9481 5.42172 12.5267 4.67157 11.7765C3.92143 11.0264 3.5 10.009 3.5 8.9481ZM4.75 8.9481C4.75 9.67744 5.03973 10.3769 5.55546 10.8926C6.07118 11.4084 6.77065 11.6981 7.5 11.6981C8.22935 11.6981 8.92882 11.4084 9.44454 10.8926C9.96027 10.3769 10.25 9.67744 10.25 8.9481V4.0481C10.25 3.31875 9.96027 2.61928 9.44454 2.10355C8.92882 1.58783 8.22935 1.2981 7.5 1.2981C6.77065 1.2981 6.07118 1.58783 5.55546 2.10355C5.03973 2.61928 4.75 3.31875 4.75 4.0481V8.9481Z"
				})),
				P = s("./src/reddit/endpoints/talk/index.ts"),
				k = s("./src/reddit/actions/toaster.ts"),
				y = s("./src/reddit/models/Toast/index.ts"),
				w = s("./src/redditGQL/types.ts");
			const {
				fbt: I
			} = s("./node_modules/fbt/lib/FbtPublic.js"), _ = () => n.a.createElement("span", {
				className: f.a.MicrophoneIcon
			}, n.a.createElement(E, null));
			var L = e => {
				let {
					roomId: t
				} = e;
				const s = Object(r.e)(b.fb),
					[a, d] = Object(o.useState)(!1),
					c = Object(r.d)(),
					u = Object(O.b)(),
					h = Object(j.a)();
				return n.a.createElement(g.t, {
					"data-testid": "audioroom-upcoming-start-talk",
					Icon: a ? C.a : _,
					iconClassName: a ? f.a.loadingIcon : "",
					className: Object(i.a)(f.a.StartTalkButton, {
						[f.a.isNightMode]: s
					}),
					priority: g.c.Secondary,
					size: g.d.M,
					iconPosition: g.h.L,
					disabled: a,
					text: n.a.createElement("span", {
						className: f.a.StartTalkButtonText
					}, I._("Start talk", null, {
						hk: "46EMgy"
					})),
					onClick: async () => {
						u((() => e => ({
							...p.o(e),
							source: "liveaudio",
							action: l.c.CLICK,
							noun: "go_live",
							subreddit: p.lb(e),
							liveAudioRoom: {
								title: Object(m.xb)(e),
								topicIds: Object(m.wb)(e).topics.map(e => e.id)
							}
						}))()), d(!0);
						const e = await Object(P.f)(h(), {
							input: {
								roomId: t
							}
						});
						if (!e.ok) return c(Object(k.f)({
							kind: y.b.Error,
							text: P.a[w.k.ServiceError]
						})), void d(!1);
						const s = Object(P.d)(e.body);
						if (null == s ? void 0 : s.errorState) return c(Object(k.f)({
							kind: y.b.Error,
							text: P.a[s.errorState.code] || P.a[w.k.ServiceError]
						})), void d(!1);
						(null == s ? void 0 : s.okState) && (window.location.href = `${v.a.redditUrl}/talk/${t}`)
					}
				})
			};
			const {
				fbt: N
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					author: t,
					postId: s,
					roomId: m,
					isClassicView: x = !1
				} = e;
				const v = Object(r.d)(),
					O = Object(u.a)(),
					g = Object(r.e)(b.H),
					C = Object(r.e)(b.fb),
					j = Object(r.e)(e => Object(b.Gb)(e, {
						postId: s
					})),
					E = Object(r.e)(e => Object(b.Db)(e, {
						userName: t
					}));
				Object(o.useEffect)(() => {
					s && O && O((e => t => ({
						...p.o(t),
						source: "global",
						action: l.c.VIEW,
						noun: l.b.SCREEN,
						subreddit: p.lb(t),
						post: p.K(t, e),
						postEvent: {
							eventState: c.a.Future
						}
					}))(s))
				}, [O, s]), Object(o.useEffect)(() => {
					E || v(Object(a.d)(t))
				}, [v, t, s, E]);
				const P = () => n.a.createElement("div", {
					"data-testid": "audioroom-avatar-upcoming",
					key: `audioPostAvatar--${t}`,
					className: Object(i.a)(f.a.hostAvatar, {
						[f.a.classicView]: x
					})
				}, n.a.createElement("div", {
					className: f.a.snoovatar
				}, n.a.createElement(d.a, {
					userName: t,
					isNSFW: !g,
					className: f.a.isImage
				})), n.a.createElement(h.a, {
					ringId: `${s}`,
					className: Object(i.a)(f.a.hostRings, {
						[f.a.nightMode]: C
					}),
					ringClassName: "hostRing"
				}));
				return x ? n.a.createElement(P, null) : n.a.createElement("div", {
					className: f.a.upcomingTalkCard,
					"data-testid": "audioroom-card-upcoming"
				}, n.a.createElement("div", {
					className: f.a.upcomingTalkContainer
				}, n.a.createElement(P, null), n.a.createElement("div", {
					className: f.a.upcomingTalkInfo
				}, n.a.createElement("div", {
					className: f.a.upcomingTalkLabel
				}, N._("Upcoming Talk", null, {
					hk: "464Rq3"
				})), n.a.createElement("div", {
					className: f.a.upcomingTalkHost
				}, "u/", t), j && m && n.a.createElement(L, {
					roomId: m
				}))))
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
				b = s("./src/reddit/icons/fonts/index.tsx"),
				h = s("./src/reddit/models/Media/index.ts"),
				x = s("./src/reddit/models/Post/index.ts"),
				f = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				v = s("./src/telemetry/models/Outbound.ts"),
				O = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				g = s("./src/reddit/components/ExpandoButton/index.m.less"),
				C = s.n(g);
			const j = Object(i.b)(null, (e, t) => ({
					toggle: () => e(Object(l.w)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.Z)(Object(p.b)(t.permalink), t.id))
				})),
				E = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 ? arguments[2] : void 0;
					const o = Object(d.a)(C.a.icon, C.a.hideOnHover);
					if (t) return r.a.createElement(b.a, {
						name: "crosspost",
						className: o
					});
					if (s.pollData) return r.a.createElement(b.a, {
						name: "poll_post",
						className: o
					});
					if (s.audioRoom) return r.a.createElement(b.a, {
						name: "audio",
						className: o
					});
					switch (e) {
						case h.o.GIFVIDEO:
							return r.a.createElement(b.a, {
								name: "gif_post",
								className: o
							});
						case h.o.IMAGE:
							return r.a.createElement(b.a, {
								name: "image_post",
								className: o
							});
						case h.o.TEXT:
						case h.o.RTJSON:
							return r.a.createElement(b.a, {
								name: "text_post",
								className: o
							});
						case h.o.VIDEO:
							return r.a.createElement(b.a, {
								name: "video_post",
								className: o
							});
						case h.o.GALLERY:
							return r.a.createElement(b.a, {
								name: "media_gallery",
								className: o
							});
						case h.o.EMBED:
						default:
							return r.a.createElement(b.a, {
								name: "embed",
								className: o
							})
					}
				};
			t.a = j(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: n,
					isCommentsPage: l,
					isExpanded: p,
					post: h,
					toggle: g,
					useMediaIcons: j
				} = e, P = s || h, k = Object(i.e)(f.b), y = Object(i.e)(f.c), w = t => {
					(k || y) && (t.preventDefault(), e.showModalOnPostLinkClick(P))
				}, I = P.media, _ = Object(x.q)(h), L = n && !!s;
				return I && !_ && !(("rtjson" === I.type || "text" === I.type || "liveaudio" === I.type) && !Object(u.a)(P)) || !!h.pollData ? r.a.createElement("button", {
					"aria-expanded": !!p,
					"aria-haspopup": !0,
					"aria-label": o.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(d.a)(t, C.a.outer),
					"data-click-id": p ? "expando_close" : "expando_open",
					"data-adclicklocation": O.a.MEDIA,
					onClick: g
				}, p ? r.a.createElement(b.a, {
					name: "collapse",
					className: C.a.icon
				}) : j ? r.a.createElement(r.a.Fragment, null, E(P.media && P.media.type, L, h), r.a.createElement(b.a, {
					name: "expand",
					className: Object(d.a)(C.a.icon, C.a.showOnHover)
				})) : r.a.createElement(b.a, {
					name: "expand",
					className: C.a.icon
				})) : P.source && P.source.url ? r.a.createElement(m.b, {
					"aria-label": o.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(d.a)(t, C.a.outer),
					"data-click-id": "expando_open",
					href: P.source.url,
					isSponsored: h.isSponsored,
					postId: h.id,
					source: h.source,
					sourceElement: l ? v.SourceElement.PostImage : v.SourceElement.ListingPostImage,
					target: "_blank"
				}, r.a.createElement(b.a, {
					name: "external_link",
					className: Object(d.a)(C.a.icon, C.a.outboundLinkIcon)
				})) : r.a.createElement(a.a, {
					"aria-label": o.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(d.a)(t, C.a.outer),
					"data-click-id": "expando_open",
					to: Object(c.a)(P.permalink),
					rel: "nofollow",
					onClick: w
				}, r.a.createElement(b.a, {
					name: "text_post",
					className: C.a.icon
				}))
			})
		},
		"./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return O
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
				b = s.n(u);
			const h = e => {
				let {
					userCount: t = 0,
					className: s
				} = e;
				return i.a.createElement("div", {
					className: Object(o.a)(b.a.liveParticipation, s)
				}, i.a.createElement(p, null), i.a.createElement(c, {
					userCount: t
				}))
			};
			var x = s("./node_modules/react-redux/es/index.js"),
				f = s("./src/reddit/selectors/chat.ts"),
				v = s("./src/reddit/selectors/experiments/chat.ts");
			const O = e => {
				let {
					postId: t,
					className: s
				} = e;
				const o = Object(x.e)(e => Object(f.a)(e, t));
				return Object(x.e)(v.e) ? i.a.createElement(h, {
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
				b = s("./src/reddit/helpers/getClickInfo.ts"),
				h = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				x = s("./src/reddit/selectors/commentSelector.ts"),
				f = s("./src/reddit/selectors/communityAwards.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/OverviewChronoComment/index.m.less"),
				g = s.n(O);
			const C = Object(i.b)(() => Object(a.c)({
				comment: x.c,
				isAwarded: (e, t) => {
					const s = Object(x.c)(e, t);
					return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
						const s = Object(f.a)(e, t);
						return s && s.coinPrice >= d.g
					})
				},
				isNightmodeOn: v.fb
			}), e => ({
				openPost: t => e(Object(m.K)(t))
			}));
			var j = Object(l.a)(C(e => {
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
								clickInfo: Object(b.a)(e),
								queryParams: {
									context: 3
								}
							})
						},
						style: {
							background: Object(h.e)(e)
						}
					}, n.a.createElement("div", {
						className: Object(c.a)(g.a.commentOuterWrapper, {
							[g.a.isLast]: a,
							[g.a.isAwarded]: r,
							[g.a.isNightmodeOn]: i
						})
					}, n.a.createElement("div", {
						className: Object(c.a)(g.a.commentWrapper, {
							[g.a.isFirst]: o
						})
					}, n.a.createElement("div", {
						className: g.a.commentSeparator
					}), t.parentId && n.a.createElement("div", {
						className: g.a.commentSeparator
					}), n.a.createElement("div", {
						className: g.a.commentContentWrapper
					}, n.a.createElement(u.a, {
						commentId: s,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: !0,
						showModTools: l,
						isExpanded: !0
					})))))
				})),
				E = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				P = s("./src/reddit/contexts/PageLayer/index.tsx"),
				k = s("./src/reddit/helpers/isComment.ts"),
				y = s("./src/reddit/components/OverviewChronoList/ListItem.m.less"),
				w = s.n(y),
				I = s("./src/lib/lessComponent.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const L = Object(P.v)({
					currentProfileName: P.j,
					isCommentsPage: P.y,
					isCommentPermalink: P.x,
					isProfilePostListing: P.N,
					pageLayer: e => e
				}),
				N = I.a.wrapped(E.a, "OverviewCommentPost", w.a),
				S = I.a.wrapped(r.default, "ClassicPost", w.a);
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
				return Object(k.a)(t) ? s ? n.a.createElement(n.a.Fragment, null, n.a.createElement(N, _({}, d, {
					availableWidth: a,
					commentId: t
				})), n.a.createElement(j, {
					commentId: t,
					first: s,
					last: o,
					showModTools: r
				})) : n.a.createElement(j, {
					commentId: t,
					first: s,
					last: o,
					showModTools: r
				}) : n.a.createElement(S, _({}, d, {
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
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/contexts/Post/index.tsx"),
				x = s("./src/reddit/controls/InternalLink/index.tsx"),
				f = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				v = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				O = s.n(v),
				g = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				C = s("./src/reddit/selectors/commentSelector.ts"),
				j = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				E = s("./src/reddit/components/OverviewCommentPost/index.m.less"),
				P = s.n(E);
			const {
				fbt: k
			} = s("./node_modules/fbt/lib/FbtPublic.js"), y = c.a.wrapped(x.default, "InternalLink", P.a), w = c.a.div("Wrapper", P.a), I = c.a.div("Row", P.a), _ = c.a.wrapped(g.a, "CommentIcon", P.a), L = c.a.div("TitleContainer", P.a), N = c.a.div("PostTitleContainer", P.a), S = c.a.wrapped(p.c, "PostTitle", P.a), T = c.a.wrapped(u.g, "PostTopMeta", P.a), M = c.a.wrapped(u.a, "MetaSeparator", P.a), R = Object(r.b)(() => Object(i.c)({
				comment: C.c,
				isBlockingInterstitialEnabled: j.b,
				isBlockingInterstitialV2Enabled: j.b
			}), e => ({
				showModalOnAuthorLinkClick: t => e(Object(l.bb)(t))
			})), A = e => {
				const {
					post: t,
					subredditOrProfile: s
				} = e;
				if (s) return n.a.createElement(o.Fragment, null, n.a.createElement(M, null), n.a.createElement(T, {
					metaSeparatorClassName: P.a.postTopMetaMetaSeparator,
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
				return n.a.createElement(y, {
					"data-click-id": "user",
					to: d,
					onClick: e => {
						(o || r) && (e.preventDefault(), i(d))
					}
				}, a)
			};
			t.a = Object(d.a)(Object(h.b)(R(Object(b.c)(e => {
				const {
					className: t,
					eventFactory: s,
					onClickPost: o,
					post: r
				} = e;
				return n.a.createElement(m.b, {
					className: Object(a.a)(O.a.compactPostStyles, P.a.overviewCommentPost, {
						[P.a.banned]: !!e.post.bannedBy,
						[P.a.reported]: !e.post.bannedBy && !!e.post.numReports && e.post.numReports > 0
					}, t),
					post: r,
					onClick: o,
					eventFactory: s
				}, n.a.createElement(w, {
					style: {
						background: Object(f.e)(e)
					}
				}, n.a.createElement(I, null, n.a.createElement(_, null), n.a.createElement(L, null, k._("{postAuthor} commented on {postTitle} {postMeta}", [k._param("postAuthor", F({
					...e
				})), k._param("postTitle", n.a.createElement(N, null, n.a.createElement(S, {
					outboundLinkClassName: P.a.postTitleOutboundLink,
					post: r,
					size: p.b.Small,
					titleClassName: P.a.postTitleTitle
				}))), k._param("postMeta", A(e))], {
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
				b = s("./src/reddit/actions/post.ts"),
				h = s("./src/reddit/helpers/getClickInfo.ts"),
				x = s("./src/reddit/selectors/commentSelector.ts"),
				f = s("./src/reddit/selectors/communityAwards.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less"),
				g = s.n(O);
			const C = m.a.div("ProfileOwnerCommentWrapper", g.a),
				j = m.a.div("CommentContentWrapper", g.a),
				E = m.a.div("Wrapper", g.a),
				P = m.a.div("CommentSeparator", g.a),
				k = Object(a.b)(() => Object(d.c)({
					comment: (e, t) => Object(x.c)(e, t),
					isAwarded: (e, t) => {
						const s = Object(x.c)(e, t);
						return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
							const s = Object(f.a)(e, t);
							return s && s.coinPrice >= c.g
						})
					},
					isNightmodeOn: v.fb
				}), e => ({
					openPost: t => e(Object(b.K)(t))
				}));
			class y extends i.a.Component {
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
					} = this.props, b = m === e.author ? w : I;
					return i.a.createElement(p.a, {
						comment: e,
						onClick: (e, t) => {
							o({
								postOrComment: t,
								clickInfo: Object(h.a)(e),
								queryParams: {
									context: 3
								}
							}), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
						}
					}, i.a.createElement(E, {
						className: Object(l.a)({
							[g.a.isFirst]: a,
							[g.a.isLast]: d,
							[g.a.isAwarded]: r,
							[g.a.isNightmodeOn]: c
						})
					}, n()(s + 1, e => i.a.createElement(P, {
						key: e
					})), i.a.createElement(j, null, b(t, m, u))))
				}
			}
			const w = (e, t, s) => i.a.createElement(C, null, I(e, t, s, !0, !0)),
				I = function(e, t, s) {
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
			t.a = k(y)
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
			const b = Object(u.a)(e => Object(p.c)(e, {
				experimentEligibilitySelector: p.a,
				experimentName: m.Ac
			}), e => e === m.Td);
			var h = s("./node_modules/fbt/lib/FbtPublic.js"),
				x = s("./src/lib/classNames/index.ts"),
				f = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				v = s("./src/reddit/components/SubredditIcon/index.tsx"),
				O = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostCommunityLink/index.m.less"),
				j = s.n(C);
			const E = e => {
				let {
					postId: t,
					className: s
				} = e;
				const o = Object(d.e)(e => Object(O.F)(e, {
						postId: t
					})),
					r = Object(d.e)(e => "subreddit" === (null == o ? void 0 : o.belongsTo.type) ? Object(g.X)(e, {
						subredditId: o.belongsTo.id
					}) : null);
				return r ? n.a.createElement(f.a, {
					className: Object(x.a)(j.a.link, s),
					to: r.url
				}, h.fbt._("Posts via", null, {
					hk: "23e8m8"
				}), n.a.createElement(v.b, {
					className: j.a.subredditIcon,
					shouldHideNsfwIcon: !0,
					subredditOrProfile: r
				}), n.a.createElement("span", {
					className: j.a.subredditName
				}, r.displayText)) : null
			};
			var P = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				k = s("./src/reddit/connectors/PostViewable/index.ts"),
				y = s("./src/reddit/contexts/PageLayer/index.tsx"),
				w = s("./src/reddit/contexts/Post/index.tsx"),
				I = s("./src/reddit/helpers/path/index.ts"),
				_ = s("./src/reddit/hooks/useClickSourceData.ts"),
				L = s("./src/reddit/hooks/useIsOverlay.ts"),
				N = s("./src/reddit/hooks/usePageLayer.ts"),
				S = s("./src/lib/prettyPrintNumber/index.ts"),
				T = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostInformation/index.m.less"),
				M = s.n(T);
			const R = e => {
				let {
					post: t
				} = e;
				const s = `${Object(S.b)(t.score)} ${h.fbt._("upvotes",null,{hk:"wJqPp"})}`,
					o = `${Object(S.b)(t.numComments)} ${h.fbt._("comments",null,{hk:"30aUyh"})}`;
				return n.a.createElement("div", {
					className: M.a.postInformation
				}, n.a.createElement("h5", {
					className: M.a.title
				}, t.title), n.a.createElement("div", {
					className: M.a.interactions
				}, n.a.createElement("p", null, s), n.a.createElement("p", null, o)))
			};
			var A = s("./src/lib/isUrl/index.ts"),
				F = s("./src/reddit/actions/profile/index.ts"),
				U = s("./src/reddit/components/Thumbnail/index.tsx"),
				B = s("./src/reddit/components/UserIcon/index.tsx"),
				D = s("./src/reddit/components/UserIcon/UserIcon.tsx"),
				W = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				V = s("./src/reddit/selectors/profile.ts"),
				G = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostMedia/index.m.less"),
				J = s.n(G);
			const K = e => {
				let {
					post: t
				} = e;
				var s, r, i, a;
				const c = Object(d.d)(),
					l = Object(d.e)(Object(V.l)(t.author)),
					m = Object(o.useMemo)(() => Object(U.c)({
						post: t
					}), [t]),
					p = Object(o.useMemo)(() => Object(A.a)(m), [m]);
				Object(o.useEffect)(() => {
					p || c(Object(F.d)(t.author))
				}, [c, t.author, p]);
				const u = !p && Object(W.a)(null === (s = null == l ? void 0 : l.icon) || void 0 === s ? void 0 : s.url),
					b = Object(D.c)(null === (r = null == l ? void 0 : l.icon) || void 0 === r ? void 0 : r.url);
				return n.a.createElement("div", {
					className: J.a.media
				}, p ? n.a.createElement(U.b, {
					post: t,
					url: m,
					className: J.a.mediaThumbnail,
					removeLink: !0,
					containerClassName: J.a.mediaThumbnailContainer
				}) : null, !p && (null === (i = null == l ? void 0 : l.icon) || void 0 === i ? void 0 : i.url) && n.a.createElement("div", {
					className: J.a.userIconContainer
				}, n.a.createElement(B.a, {
					className: Object(x.a)({
						[J.a.snoovatarUserIcon]: u,
						[J.a.defaultUserIcon]: b
					}, J.a.userIcon),
					iconUrl: null === (a = null == l ? void 0 : l.icon) || void 0 === a ? void 0 : a.url,
					userName: l.name,
					wrapperClassName: J.a.userIconWrapper,
					isNSFW: !1
				})))
			};
			var H = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPost/index.m.less"),
				q = s.n(H);
			const Q = Object(k.a)(null);
			var Z = Object(w.b)(Q(e => {
					let {
						post: t
					} = e;
					const s = Object(N.a)(),
						o = Object(L.a)(),
						r = Object(_.a)(),
						i = Object(y.x)(s) && !o;
					return n.a.createElement(f.a, {
						"data-testid": `promoted-user-post-${t.id}`,
						to: i ? Object(I.b)(t.permalink) : Object(P.a)(t.permalink, !1, r)
					}, n.a.createElement("div", {
						className: q.a.container
					}, n.a.createElement(R, {
						post: t
					}), n.a.createElement(K, {
						post: t
					})))
				})),
				z = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPosts/index.m.less"),
				X = s.n(z);
			const Y = e => {
				let {
					postIds: t
				} = e;
				const s = t.map(e => n.a.createElement(Z, {
					postId: e,
					key: e
				}));
				return n.a.createElement("div", {
					className: X.a.container
				}, s)
			};
			var $ = s("./src/reddit/components/PromotedUserPostsAd/index.m.less"),
				ee = s.n($);
			const te = e => {
				let {
					post: t
				} = e;
				const s = Object(d.d)();
				if (!Object(d.e)(b) || !t.adPromotedUserPostIds || 0 === t.adPromotedUserPostIds.length) return null;
				const [o] = t.adPromotedUserPostIds;
				return n.a.createElement("div", {
					className: ee.a.container,
					onClick: () => s(Object(c.y)(t, l.a.Click))
				}, n.a.createElement(Y, {
					postIds: t.adPromotedUserPostIds
				}), n.a.createElement(E, {
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
				b = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				h = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				x = s("./src/reddit/constants/posts.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				O = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/hooks/useClickSourceData.ts"),
				C = s("./src/reddit/models/Subreddit/index.ts"),
				j = s("./src/reddit/components/PostMeta/index.m.less"),
				E = s.n(j);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: o,
					isCurrentUserProfilePost: j,
					isOverlay: P,
					isTopicPage: k,
					post: y,
					shouldShowSubscribeButton: w,
					subredditOrProfile: I,
					tooltipType: _
				} = e, L = !!k, N = Object(g.a)(), S = Object(r.e)(e => !!I && Object(i.i)(e, I.id));
				return n.a.createElement("div", {
					className: E.a.metaContainer
				}, !o && !y.isSponsored && I && n.a.createElement(c.a, {
					postId: y.id,
					subredditName: I.name
				}, n.a.createElement(b.a, {
					className: E.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: I.url,
						state: N
					}
				}, I.displayText)), I && I.isQuarantined && n.a.createElement(u.a, null), !o && !y.isSponsored && I && w && !j && n.a.createElement(h.a, {
					className: E.a.SubscribeButton,
					getEventFactory: e => Object(O.n)(y.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: I.name,
						type: Object(C.i)(I) ? x.a.PROFILE : x.a.SUBREDDIT
					},
					postId: y.id,
					size: f.d.XXS,
					small: !0
				}), !o && !y.isSponsored && n.a.createElement(v.b, null), !o && !y.isSponsored && n.a.createElement(l.h, {
					type: y.belongsTo.type,
					id: y.belongsTo.id
				}), n.a.createElement(p.g, {
					className: E.a.postTopMeta,
					flairStyleTemplate: t,
					post: y,
					tooltipType: _,
					isModWithUserNotesPermissions: S
				}), n.a.createElement(m.a, {
					displayText: I ? I.displayText : null,
					inSubredditOrProfile: !!o,
					post: y,
					tooltipType: _
				}), !L && n.a.createElement(a.a, {
					hideCta: s,
					thing: y,
					tooltipType: P ? p.f.Lightbox : void 0
				}), S && n.a.createElement(d.a, {
					postOrComment: y,
					className: E.a.addModNote
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
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: h,
					redditStyle: x,
					isOverlay: f,
					isVoteCountAnimation: v,
					postId: O,
					shouldShowUpvoteRatioOnHover: g
				} = e, C = `upvote-button-${t.id}${f?"-overlay":""}`;
				return n.a.createElement(i.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: x
				}, o && n.a.createElement(d.a, {
					className: p.a.checkbox,
					isCheckboxSelected: m,
					toggleCheckbox: b
				}), n.a.createElement(a.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: s,
					redditStyle: x,
					upvoteTooltipId: C,
					isVoteCountAnimation: v,
					isCountAnimShadowTestEnabled: u,
					postId: O,
					scoreClassName: Object(r.a)(p.a.score, {
						[p.a.allowPointerEvents]: g
					}),
					shouldShowUpvoteRatioOnHover: g
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
				b = s("./src/reddit/constants/componentSizes.ts"),
				h = s("./src/reddit/helpers/getClickInfo.ts"),
				x = s("./src/reddit/helpers/isComment.ts"),
				f = s("./src/reddit/contexts/Post/index.tsx"),
				v = s("./src/lib/LRUCache/index.ts"),
				O = s("./src/telemetry/index.ts"),
				g = s("./src/telemetry/models/Timer.ts"),
				C = s("./src/reddit/components/PostList/index.m.less"),
				j = s.n(C);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const P = 500,
				k = new v.a(P),
				y = new v.a(P),
				w = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				I = (e, t, s, o, n, r) => {
					const i = `entered-${e}-${t}-${s?`last-${o}-${n}`:""}`;
					let a = k.get(i);
					return void 0 === a && (a = () => {
						s && r.onBottomViewed(o, n), r.trackOnPostEnteredViewport(e, t)
					}, k.set(i, a)), a
				},
				_ = (e, t) => {
					const s = `click-${e}`;
					let o = y.get(s);
					return void 0 === o && (o = (e, s) => {
						s.isSponsored && t.fireAdPixelsOfType(s, c.a.Click), s.isSponsored && s.source && s.source.outboundUrl ? Object(d.e)(s.source.outboundUrl, d.d.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(h.a)(e)
						})
					}, y.set(s, o)), o
				};
			class L extends i.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new v.a(P), this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}
				}
				UNSAFE_componentWillMount() {
					this.timerId && O.c.cancel(this.timerId), this.props.itemIds.length && (this.timerId = O.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = O.c.end(this.timerId);
						setTimeout(() => Object(O.b)(a.o.Redesign, {
							type: "mount",
							component: "overviewChronoList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && O.c.cancel(this.timerId), e.itemIds.length && (this.timerId = O.c.start()), (e.listingKey !== this.props.listingKey || e.itemIds.length !== this.props.itemIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (this.checkAndSendScreenview(), this.timerId && O.c.has(this.timerId)) {
						const e = O.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(O.b)(a.o.Redesign, {
							duration: e,
							type: "mount",
							component: "overviewChronoList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && O.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
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
					return O.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const o = O.c.end(e);
					setTimeout(() => s(t(o, g.TimerType.InApp)), 0)
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
						} = this.props, u = p[e], b = `overview-chrono-list-item-[layout: ${r}]-[itemId: ${e}]`, h = I(u, r, s, a, d, this.props), x = {
							key: b,
							eventFactory: c,
							inSubredditOrProfile: t,
							isFirstInCommentList: o,
							isLastInCommentList: n,
							isOverlay: !1,
							itemId: e,
							last: s,
							layout: r,
							onClickPost: _(e, this.props),
							postId: u
						}, v = this.props.itemComponent;
						m = {
							estHeight: this.props.estimateItemHeight(e, r, o),
							id: e,
							isFocusable: !1,
							trackOnEnteredViewport: h,
							render: e => i.a.createElement(f.a, {
								postId: x.postId
							}, i.a.createElement(v, E({}, x, e)))
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
						className: j.a.placeholder
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
						className: j.a.placeholder
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
						viewportTopPadding: b.f + b.r
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
				b = s("./src/reddit/selectors/moderatorPermissions.ts"),
				h = s("./src/reddit/selectors/postFlair.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				f = s("./src/reddit/selectors/user.ts");
			const v = {
					autoplayPref: f.d,
					activeModalId: m.a,
					crosspost: x.d,
					isActive: x.j,
					isChatPost: p.d,
					isCurrentUserProfilePost: x.l,
					isExpanded: x.m,
					isLoggedIn: f.S,
					moderatorPermissions: b.m,
					modModeEnabled: c.W,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: h.a,
					showMedia: c.t,
					flairStyleTemplate: c.Y,
					showCTAExperimentDesign: u.a
				},
				O = Object(o.b)(() => Object(n.c)(v), (e, t) => {
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
			t.a = e => Object(l.b)(O(Object(d.b)(e)))
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
		"./src/reddit/endpoints/talk/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "d", (function() {
				return b
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "f", (function() {
				return x
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = (s("./node_modules/uuid/dist/esm-browser/v4.js"), s("./src/lib/makeGqlRequest/index.ts")),
				r = s("./src/lib/makeRequest/index.ts"),
				i = (s("./src/reddit/models/Subreddit/index.ts"), s("./src/redditGQL/operations/CreateLiveAudioRoomOnProfile.json"), s("./src/redditGQL/operations/CreateLiveAudioRoomOrError.json"), s("./src/redditGQL/operations/GetAvailableAudioRoomTopics.json"), s("./src/redditGQL/operations/GetSubredditAllowedPostTypes.json")),
				a = s("./src/redditGQL/operations/GetUserProfileAllowedPostTypes.json"),
				d = (s("./src/redditGQL/operations/PrepareLiveAudioRoom.json"), s("./src/redditGQL/operations/PrepareLiveAudioRoomOnProfile.json"), s("./src/redditGQL/operations/ReportTalk.json")),
				c = s("./src/redditGQL/operations/StartLiveAudioRoom.json"),
				l = s("./src/redditGQL/types.ts");
			const m = (e, t) => Object(n.a)(e, {
					...d,
					variables: t
				}),
				p = async (e, t) => {
					const s = await Object(n.a)(e, {
						...i,
						variables: t
					});
					return !!Object(r.c)(s) && (s.body.data.subredditInfoById.allowedPostTypes || []).includes(l.O.Talk)
				}, u = async (e, t) => {
					var s, o;
					const i = await Object(n.a)(e, {
						...a,
						variables: t
					});
					return !!Object(r.c)(i) && (null !== (o = null === (s = i.body.data.profileByName) || void 0 === s ? void 0 : s.allowedPostTypes) && void 0 !== o ? o : []).includes(l.O.Talk)
				}, b = e => e.data.createAudioRoomOrError || e.data.createAudioRoomOnProfile || e.data.startAudioRoom, h = {
					[l.k.ServiceError]: o.fbt._("Something's wrong with the talk service right now. Check back later.", null, {
						hk: "3XqPJS"
					}),
					[l.k.UserNotAuthorized]: o.fbt._("You don't have permission to start talks in this community.", null, {
						hk: "1XY1Ss"
					}),
					[l.k.RoomLimitExceeded]: o.fbt._("You can only create three talks at one time. To continue, close a talk you're not using.", null, {
						hk: "3zPx9X"
					}),
					[l.k.ConcurrentRoomLimitExceeded]: o.fbt._("Too many talks are happening right now. Try again later.", null, {
						hk: "2LYXJx"
					}),
					[l.k.SubredditRoomLimitExceeded]: o.fbt._("This community can only host two talks at a time. Try again after one has ended.", null, {
						hk: "2mGf21"
					})
				}, x = (l.Q.ServiceError, o.fbt._("Something's wrong with the talk service right now. Check back later.", null, {
					hk: "3XqPJS"
				}), l.Q.UserNotAuthorized, o.fbt._("You don't have permission to start talks in this community.", null, {
					hk: "1XY1Ss"
				}), (e, t) => Object(n.a)(e, {
					...c,
					variables: t
				}))
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
				b = s("./src/reddit/actions/pages/profileComments/index.ts"),
				h = s("./src/reddit/actions/pages/profileShared.ts"),
				x = s("./src/reddit/components/ContentGate/index.tsx"),
				f = s("./src/reddit/components/EmptyProfile/index.ts"),
				v = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				O = s("./src/reddit/components/JumpToContent/index.tsx"),
				g = s("./src/lib/classNames/index.ts"),
				C = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				j = s("./src/lib/lessComponent.tsx"),
				E = s("./src/reddit/components/ClassicPost/index.tsx"),
				P = s("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				k = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				y = s("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				w = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				I = s("./src/reddit/constants/postLayout.ts"),
				_ = s("./src/reddit/contexts/PageLayer/index.tsx"),
				L = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				N = s("./src/reddit/selectors/commentSelector.ts"),
				S = s("./src/reddit/components/ProfileCommentList/ListItem.m.less"),
				T = s.n(S);

			function M() {
				return (M = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const R = j.a.wrapped(E.default, "ClassicPost", T.a),
				A = j.a.wrapped(k.a, "OverviewCommentPost", T.a),
				F = Object(_.v)({
					currentProfileName: _.j,
					pageLayer: e => e
				}),
				U = Object(d.c)({
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
			var B = F(Object(a.b)(U)(e => {
				const {
					comment: t,
					itemId: s,
					isFirstInCommentList: o,
					isLastInCommentList: n,
					layout: r,
					profileName: a,
					allowModToolsUnderComments: d
				} = e;
				if (r === I.g.Compact) return i.a.createElement(P.a, e);
				const {
					height: c,
					width: l,
					...m
				} = e;
				return i.a.createElement(D, m, o && i.a.createElement(y.a, {
					isFirst: !0
				}, r === I.g.Large ? i.a.createElement(R, M({}, e, {
					availableWidth: l,
					inSubredditOrProfile: !1,
					isOverlay: !1
				})) : i.a.createElement(A, M({}, e, {
					commentId: s,
					profileName: a
				}))), i.a.createElement(y.a, {
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
			const D = Object(C.a)(e => i.a.createElement("div", {
				className: Object(g.a)(T.a.backgroundMargin, {
					[T.a.isFirstInCommentList]: e.isFirstInCommentList,
					[T.a.isLastInCommentList]: e.isLastInCommentList
				}),
				style: {
					background: Object(L.e)(e)
				}
			}, e.children));
			var W = s("./src/reddit/components/ProfileItemList/index.tsx"),
				V = s("./node_modules/lodash/noop.js"),
				G = s.n(V),
				J = s("./src/reddit/actions/ads/index.ts"),
				K = s("./src/reddit/actions/comment/list.ts"),
				H = s("./src/reddit/actions/post.ts"),
				q = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Q = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				Z = s("./src/reddit/helpers/trackers/post.ts"),
				z = s("./src/reddit/featureFlags/index.ts"),
				X = s("./src/reddit/selectors/comments.ts"),
				Y = s("./src/reddit/selectors/posts.ts"),
				$ = s("./src/reddit/selectors/profileComments.ts"),
				ee = s("./src/reddit/selectors/subreddit.ts"),
				te = s("./src/reddit/selectors/tracking.ts"),
				se = s("./src/reddit/selectors/user.ts");
			const oe = Object(_.v)(),
				ne = {
					apiError: $.a,
					apiPending: $.b,
					currentUser: se.m,
					measureScrollFPS: z.d.measureScrollFPS,
					layout: _.U,
					loadMore: $.d,
					subredditsById: ee.eb,
					viewportDataLoaded: te.a,
					commentsById: X.q,
					itemIds: $.f,
					itemIdToPostId: $.e,
					postsById: Y.I,
					estimateItemHeight: e => (e, t, s) => {
						if (s) switch (t) {
							case I.g.Medium:
								return 174;
							case I.g.Classic:
								return 129;
							case I.g.Compact:
								return 120;
							default:
								return 140
						}
						switch (t) {
							case I.g.Medium:
							case I.g.Classic:
								return 90;
							case I.g.Compact:
								return 80;
							default:
								return 90
						}
					}
				},
				re = Object(d.c)(ne),
				ie = Object(a.b)(re, e => ({
					onBottomViewed: (t, s) => e(Object(K.c)(t, s)),
					adBrandSafetyStatusReceived: t => {
						e(J.d({
							isViewSafe: t
						}))
					},
					openPost: t => e(Object(H.K)(t)),
					fireAdPixelsOfType: G.a,
					trackOnPostEnteredViewport: G.a
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(Z.n)(e, t),
					postComponentForLayout: Q.b
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
				ce = (e => Object(q.c)(oe(ie(e))))(W.a);
			var le = e => i.a.createElement(ce, ae({}, e, {
					itemComponent: de
				})),
				me = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				pe = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				ue = s("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				be = s("./src/reddit/helpers/name/index.ts"),
				he = s("./src/reddit/helpers/trackers/screenview.ts"),
				xe = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				fe = s("./src/reddit/layout/page/Listing/index.tsx"),
				ve = s("./src/reddit/models/ContentGate.ts"),
				Oe = s("./src/reddit/pages/ProfileBlockInterstitial/index.tsx"),
				ge = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				Ce = s("./src/reddit/selectors/experiments/nsfwBypassableBlockingExperiment.ts"),
				je = s("./src/reddit/selectors/profile.ts");

			function Ee() {
				return (Ee = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Pe = Object(_.v)(),
				ke = Object(d.a)(_.G, se.mb, (e, t) => {
					let {
						location: s
					} = t;
					return n()([...Object(l.a)(s.search)])
				}, _.U, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.profileName
				}, (e, t) => {
					let {
						match: s
					} = t;
					return Object(je.k)(e, {
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
				}, ge.g, Ce.a, (e, t, s, o, n, r, i, a, d, c, l) => {
					var p;
					const {
						sort: u,
						t: b
					} = Object(h.b)(s), x = Object(m.a)(`u_${n}`, u, s);
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
						timeSort: b,
						avatar: null === (p = null == r ? void 0 : r.icon) || void 0 === p ? void 0 : p.url,
						isBlocked: d,
						nsfwBlockingExperiment: c,
						showNewDesignBlocking: l
					}
				}),
				ye = Object(a.b)(ke, (e, t) => ({
					onLoadMore: () => e(Object(b.moreItemsRequested)()),
					onLayoutChange: () => e(Object(b.profileCommentsRequested)({
						...t.match,
						queryParams: n()([...Object(l.a)(t.location.search)])
					})),
					openNsfwModal: () => e(Object(u.a)())
				}));
			t.default = Pe(ye(Object(p.a)(Object(xe.d)(e => {
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
					over18Prefs: b,
					pageLayer: h,
					profileName: g,
					sort: C,
					timeSort: j,
					showNewDesignBlocking: E
				} = e;
				if (Object(r.useEffect)(() => {
						a && !n && l === ge.a.Blurred && u()
					}, [l, n, a, u]), !g || !h) return null;
				if (s && s.profileDeleted) return i.a.createElement(x.default, {
					contentGateType: ve.a.ProfileDeleted,
					profileName: g
				});
				if (s && s.profileSuspended) return i.a.createElement(x.default, {
					contentGateType: ve.a.ProfileSuspended,
					profileName: g
				});
				if (451 === h.status || s && s.profileBlockedForLegalReason) return i.a.createElement(x.default, {
					contentGateType: ve.a.ProfileBlockedForLegalReason,
					profileName: g
				});
				const P = h.queryParams && "true" === h.queryParams.consent;
				if (403 === h.status || o && !P) return i.a.createElement(Oe.a, {
					username: g,
					avatar: t
				});
				if (404 === h.status) return i.a.createElement(x.default, {
					contentGateType: ve.a.ProfileDoesNotExist,
					profileName: g
				});
				const k = g.toLowerCase(),
					y = `/user/${g}/comments/`,
					w = {
						listingKey: d,
						listingName: k
					};
				if (a && !n && l === ge.a.NoPreview && E) return i.a.createElement(ue.a, {
					contentTitle: Object(be.e)(g)
				});
				if (!b && a && !n && l !== ge.a.Blurred) return i.a.createElement(x.default, {
					contentGateType: ve.a.Nsfw,
					subredditName: g
				});
				const I = {
					sort: C,
					baseUrl: y,
					sortOptions: c.Jb,
					timeSort: j
				};
				return i.a.createElement(fe.a, {
					className: e.className,
					fitPageToContent: !0,
					contentNavBar: i.a.createElement(i.a.Fragment, null, i.a.createElement(me.a, {
						profileName: g,
						viewBlockedConsent: P
					})),
					content: i.a.createElement(i.a.Fragment, null, i.a.createElement(v.a, I), i.a.createElement(O.a, null), i.a.createElement(le, {
						listingKey: d,
						listingName: k,
						listingViewed: (e, t) => Object(he.n)(d, C, t, e, j),
						noPostsComponent: () => i.a.createElement(f.b, {
							profileName: g,
							timeSort: j
						}),
						onLoadMore: m,
						onTryAgain: p,
						inSubredditOrProfile: !1
					})),
					sidebar: i.a.createElement(pe.a, Ee({}, w, {
						profileName: g
					}))
				})
			}))))
		},
		"./src/redditGQL/operations/CreateLiveAudioRoomOnProfile.json": function(e) {
			e.exports = JSON.parse('{"id":"e35a47c6aa21"}')
		},
		"./src/redditGQL/operations/CreateLiveAudioRoomOrError.json": function(e) {
			e.exports = JSON.parse('{"id":"f1f366237119"}')
		},
		"./src/redditGQL/operations/GetAvailableAudioRoomTopics.json": function(e) {
			e.exports = JSON.parse('{"id":"05271fef4b69"}')
		},
		"./src/redditGQL/operations/GetSubredditAllowedPostTypes.json": function(e) {
			e.exports = JSON.parse('{"id":"f65cf1eba776"}')
		},
		"./src/redditGQL/operations/GetUserProfileAllowedPostTypes.json": function(e) {
			e.exports = JSON.parse('{"id":"34fa0ef8e099"}')
		},
		"./src/redditGQL/operations/PrepareLiveAudioRoom.json": function(e) {
			e.exports = JSON.parse('{"id":"a04297924fc8"}')
		},
		"./src/redditGQL/operations/PrepareLiveAudioRoomOnProfile.json": function(e) {
			e.exports = JSON.parse('{"id":"649e9f8bd6d9"}')
		},
		"./src/redditGQL/operations/ReportTalk.json": function(e) {
			e.exports = JSON.parse('{"id":"139ca5b89cf9"}')
		},
		"./src/redditGQL/operations/StartLiveAudioRoom.json": function(e) {
			e.exports = JSON.parse('{"id":"6e7ab4bd4873"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileComments.849e7cc8d8e841f333d2.js.map