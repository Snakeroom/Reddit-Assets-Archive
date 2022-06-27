// https://www.redditstatic.com/desktop2x/ProfileComments.1569512acace5b1c15e0.js
// Retrieved at 6/27/2022, 2:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileComments"], {
		"./src/reddit/actions/pages/profileComments/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "profileCommentsPending", (function() {
				return N
			})), s.d(t, "profileCommentsLoaded", (function() {
				return R
			})), s.d(t, "profileCommentsFailed", (function() {
				return F
			})), s.d(t, "profileCommentsRequested", (function() {
				return A
			})), s.d(t, "moreItemsPending", (function() {
				return B
			})), s.d(t, "moreItemsLoaded", (function() {
				return D
			})), s.d(t, "moreItemsFailed", (function() {
				return W
			})), s.d(t, "moreItemsRequested", (function() {
				return V
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
				f = s("./src/reddit/constants/parameters.ts"),
				C = s("./src/reddit/contexts/PageLayer/index.tsx"),
				O = s("./src/config.ts"),
				g = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				v = s("./src/lib/constants/index.ts"),
				E = s("./src/lib/makeApiRequest/index.ts"),
				j = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				y = s("./src/reddit/models/Comment/addProfileImgParam.ts"),
				P = s("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				k = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const w = (e, t, s, o) => {
				let n = Object(j.a)(Object(g.a)(Object(P.a)(Object(k.a)(`${O.a.gatewayUrl}/desktopapi/v1/user/${t}/comments`))));
				return o && (n = Object(y.a)(n)), Object(E.a)(e, {
					data: s,
					endpoint: n,
					method: v.jb.GET
				})
			};
			var I = s("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				_ = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				S = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				L = s("./src/reddit/selectors/profile.ts"),
				T = s("./src/reddit/selectors/profileComments.ts"),
				M = s("./src/reddit/actions/pages/profileComments/constants.ts");
			const N = Object(a.a)(M.f),
				R = Object(a.a)(M.e),
				F = Object(a.a)(M.d),
				A = e => async (t, s, o) => {
					const {
						queryParams: n,
						params: r
					} = e, {
						sort: a,
						t: C
					} = Object(p.b)(n), {
						profileName: O
					} = r, g = Object(d.a)(`u_${O}`, a, e.queryParams), {
						profileCommentsPage: v
					} = s(), E = v.commentIds[g], j = v.api.error[g], y = v.api.pending[g];
					if (await t(h.d(O)), y || E && !j) {
						if (E) {
							const e = Object(L.q)(s(), {
								profileName: O
							});
							t(u.m({
								title: e
							}))
						}
						return
					}
					const P = {
						...i()(e.queryParams, [...f.k, f.g]),
						sort: a,
						t: Object(I.a)(a, C)
					};
					t(N({
						key: g
					}));
					const k = await Object(_.a)("profileComments", () => w(o.apiContext(), O, P, Object(S.a)(s())));
					if (!k.ok) return t(F({
						account: k.body.data ? k.body.data.account : null,
						error: k.body.reason ? {
							type: k.body.reason
						} : k.error,
						key: g
					})), k.body.reason === x.a.DeletedProfile && t(Object(c.s)({
						profileName: O
					})), void t(u.n(k.status));
					const T = k.body;
					t(R({
						key: g,
						meta: s().meta,
						...T
					})), await Promise.all([t(Object(p.c)(O)), t(Object(b.q)()), t(Object(m.b)()), t(l.o(O))])
				}, B = Object(a.a)(M.c), D = Object(a.a)(M.b), W = Object(a.a)(M.a), V = () => async (e, t, s) => {
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
					const O = Object(T.b)(r, {
							listingKey: b
						}),
						g = Object(T.c)(r, {
							listingKey: b
						}),
						v = g && g[x.token];
					if (O || v) return;
					e(B({
						key: b,
						fetchedToken: x.token
					}));
					const E = await w(o(), h, {
						after: x.token,
						dist: x.dist,
						sort: m,
						t: u,
						...i()(c, f.k),
						layout: Object(C.S)(r, {}).toLowerCase()
					}, Object(S.a)(r));
					if (E.ok) {
						const t = Object(T.f)(r, {
								listingKey: b
							}),
							s = {
								...E.body,
								commentIds: n()(E.body.commentIds, t)
							};
						e(D({
							fetchedToken: x.token,
							key: b,
							meta: r.meta,
							...s
						}))
					} else e(W({
						account: E.body.data ? E.body.data.account : null,
						error: E.error,
						fetchedToken: x.token,
						key: b
					}))
				}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.m.less": function(e, t, s) {
			e.exports = {
				displayUrl: "Nd1oMnpI7mh5Ewfm9VQxq",
				leftSideContent: "_1oCxYg3Tu1IIcDUUOu9gIA",
				caption: "_2LmxORnqxzKG1lDeTP_w6R"
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/config.ts"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/reddit/components/CallToActionButton/index.tsx"),
				a = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				d = s("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				c = s.n(d);
			t.a = e => {
				const {
					adLinkContent: t,
					post: s,
					isCompact: n
				} = e, {
					source: d,
					callToAction: l,
					caption: m
				} = t;
				if (!d || !d.url) return null;
				let p = d.displayText;
				return d.displayText.length >= 40 && (p = d.displayText.slice(0, 40 - "...".length) + "..."), r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: c.a.leftSideContent
				}, m && !n && r.a.createElement("span", {
					className: c.a.caption,
					title: m
				}, m), r.a.createElement(a.a, {
					href: d.url.replace(o.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: d,
					className: c.a.displayUrl
				}, p)), l && r.a.createElement(i.a, {
					className: c.a.callToAction,
					href: d.url,
					isSponsored: s.isSponsored,
					postId: s.id,
					source: d
				}, l))
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
				b = s("./src/config.ts"),
				x = s("./node_modules/react-redux/es/index.js"),
				f = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/components/Econ/Audio/index.m.less"),
				O = s.n(C),
				g = s("./src/reddit/components/Econ/Audio/MuteIcon.tsx"),
				v = s("./src/reddit/components/Econ/Audio/SpeakerRings.tsx");
			const {
				fbt: E
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var j = e => {
					let {
						post: t
					} = e;
					const {
						audioRoom: s
					} = t, r = () => Math.floor(10 * Math.random() + 1), a = Object(x.e)(f.db), [d, c] = Object(o.useState)(!1), [l, m] = Object(o.useState)(r());
					return Object(o.useEffect)(() => {
						const e = setInterval(() => {
							c(!0), setTimeout(() => c(!1), 3500), m(r())
						}, 6e3);
						return () => clearInterval(e)
					}, []), (null == s ? void 0 : s.isLive) ? n.a.createElement("a", {
						href: `https://www.reddit.com/talk/${s.roomId}`,
						target: "_blank",
						rel: "noopener noreferrer",
						className: O.a.liveClassicContainer,
						"data-testid": "audioroom-classic-live"
					}, n.a.createElement("div", {
						className: O.a.classicSpeaker
					}, d && n.a.createElement(v.a, {
						className: Object(i.a)(O.a.speakerRings, {
							[O.a.nightMode]: a
						})
					}), n.a.createElement("img", {
						key: `audioPostAvatar--${l}`,
						className: O.a.snoovatar,
						src: `${b.a.assetPath}/img/talk/avatars/${l}.png`,
						alt: E._("Reddit Talk", null, {
							hk: "XNl4V"
						})
					}), !d && n.a.createElement("div", {
						className: O.a.muteContainer
					}, n.a.createElement(g.a, {
						className: O.a.muteIcon
					})))) : n.a.createElement("div", {
						className: O.a.endedClassicContainer
					}, n.a.createElement(g.a, {
						className: O.a.muteIcon
					}))
				},
				y = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				P = s("./src/reddit/components/ExpandoButton/index.tsx"),
				k = s("./src/reddit/components/Flatlist/index.tsx"),
				w = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				I = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				_ = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				S = s("./src/reddit/components/ModModeReports/index.tsx"),
				L = s("./src/reddit/components/ModModeReports/helpers.ts"),
				T = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				M = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				N = s("./src/reddit/components/PostContainer/index.tsx"),
				R = s("./src/reddit/components/PostMeta/index.tsx"),
				F = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				A = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				B = s("./src/reddit/components/PostTitle/index.tsx"),
				D = s("./src/reddit/components/PostTopMeta/index.tsx"),
				W = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				V = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				U = s("./src/reddit/models/Audio/index.ts"),
				K = s("./src/reddit/models/Media/index.ts"),
				H = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				J = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				q = s("./src/reddit/constants/postLayout.ts"),
				G = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				z = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				Z = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				Q = s("./src/reddit/helpers/localStorage/index.ts"),
				$ = s("./src/reddit/helpers/search/renderMedia.tsx"),
				X = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				Y = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				ee = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				te = s.n(ee),
				se = s("./src/reddit/components/ClassicPost/index.m.less"),
				oe = s.n(se);

			function ne() {
				return (ne = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const re = Object(a.a)(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: a,
					handleVote: b,
					isExpanded: x,
					inSubredditOrProfile: f,
					eventFactory: C,
					first: O,
					flairStyleTemplate: g,
					formatTitle: v,
					hostPostData: E,
					isCheckboxSelected: J,
					isCurrentUserProfilePost: ee,
					isFrontpage: se,
					isGalleryTileLayoutDefault: re,
					isLoggedIn: ie,
					isOverlay: ae,
					isProfileCreatorStatsEnabled: de,
					imageGalleryCurrentItem: ce,
					moderatorPermissions: le,
					modModeEnabled: me,
					onClickPost: pe,
					onIgnoreReports: ue,
					onOpenReportsDropdown: he,
					onSizeChanged: be,
					poll: xe,
					post: fe,
					postId: Ce,
					redditStyle: Oe,
					scrollerItemRef: ge,
					showBulkActionCheckbox: ve,
					showEditFlair: Ee,
					showMedia: je,
					subredditOrProfile: ye,
					toggleCheckbox: Pe,
					userIsOp: ke,
					shouldShowGalleryTileOption: we,
					showPromotedCTA: Ie
				} = e, _e = Object(l.a)(), Se = ke && de, Le = Object(c.a)(x);
				Object(o.useEffect)(() => {
					be && Le !== x && be(fe.id)
				}, [x, be, fe.id, Le]);
				const Te = Oe ? void 0 : g,
					Me = s || void 0,
					Ne = Object(Z.a)(le),
					Re = Object(G.a)(le),
					Fe = Object(z.a)(le),
					Ae = me && Z.a,
					Be = Object(_.a)(fe),
					De = Object(L.c)(fe),
					We = !!fe.media && fe.media.type === K.o.RTJSON,
					Ve = ke && We,
					Ue = f && !je,
					Ke = !!fe.media && Object(K.H)(fe.media),
					He = !!fe.recommendationContext,
					Je = {
						flairStyleTemplate: Te,
						post: fe,
						inSubredditOrProfile: f,
						isCurrentUserProfilePost: ee,
						isOverlay: ae,
						shouldShowSubscribeButton: !(se && ie) || He && ie,
						subredditOrProfile: ye
					},
					qe = Object(r.t)(fe, ce),
					{
						source: Ge
					} = qe,
					[ze, Ze] = Object(o.useState)(!1),
					Qe = Object(o.useCallback)(() => {
						Ze(!ze), Object(Q.Mb)(), _e(Object(Y.d)(Ce))
					}, [ze, Ce, _e]);
				let $e = n.a.createElement(H.a, {
					className: oe.a.classicThumbnail,
					crosspost: Me && fe,
					isMeta: fe.isMeta,
					post: Me || fe,
					redditStyle: Oe,
					templatePlaceholderImage: Te && Te.postPlaceholderImage,
					removeLink: Ke
				});
				Object(U.b)(fe) && ($e = n.a.createElement(j, {
					post: fe
				}));
				const Xe = n.a.createElement(N.a, {
					className: Object(i.a)(te.a.classicPostStyles, oe.a.postContainer, Object(X.a)(e), {
						[oe.a.mFirst]: O,
						[oe.a.shouldShowOverflow]: Se
					}, t),
					isOverlay: ae,
					style: {
						...Object(X.d)(e),
						...Object(X.b)(Te)
					},
					post: fe,
					onClick: pe,
					eventFactory: C
				}, n.a.createElement(A.a, {
					model: fe,
					handleVote: b,
					showBulkActionCheckbox: ve,
					isCheckboxSelected: J,
					toggleCheckbox: Pe,
					flairStyleTemplate: Te,
					redditStyle: Oe,
					postId: Ce
				}), n.a.createElement(M.a, {
					className: Se ? oe.a.shouldUseRoundedBorder : void 0,
					"data-click-id": "background",
					flairStyleTemplate: Te
				}, n.a.createElement(y.a, {
					className: oe.a.eventMeta,
					post: fe
				}), n.a.createElement("div", {
					className: oe.a.mainBody
				}, n.a.createElement("div", {
					className: Ue ? oe.a.expandoContainer : oe.a.thumbnailContainer
				}, !Ue && $e, n.a.createElement(P.a, {
					crosspost: Me,
					className: oe.a.rightExpando,
					isExpanded: !!x,
					post: fe,
					useMediaIcons: !1
				})), n.a.createElement("div", {
					className: Object(i.a)(oe.a.content, {
						[oe.a.showBulkActionCheckbox]: ve
					}),
					"data-click-id": "body"
				}, !!fe.recommendationContext && n.a.createElement(T.a, {
					content: fe.recommendationContext.content,
					layout: q.g.Classic,
					post: fe
				}), n.a.createElement(B.c, {
					className: xe ? oe.a.titleWithPoll : void 0,
					format: v,
					poll: xe,
					post: fe,
					redditStyle: Oe,
					size: B.b.Medium,
					titleColor: Te && Te.postTitleColor,
					isOverlay: ae
				}, fe.source && !Me && !fe.isSurveyAd && n.a.createElement(V.a, {
					href: fe.source.url,
					isSponsored: fe.isSponsored,
					postId: fe.id,
					source: fe.source
				}, Object(d.a)(fe))), n.a.createElement(R.a, ne({
					key: "PostMeta"
				}, Je)), me && Ne && Be && n.a.createElement(I.a, {
					thing: fe
				}), me && Ne && De && n.a.createElement(S.a, {
					onIgnoreReports: ue,
					reportable: fe
				}), Ie && Ge && Ge.url && !fe.isSurveyAd && n.a.createElement(m.a, {
					className: oe.a.adLinkWrapper
				}, n.a.createElement(p.a, {
					post: fe,
					adLinkContent: qe
				})), n.a.createElement("div", {
					className: oe.a.flatlistContainer
				}, n.a.createElement(P.a, {
					className: oe.a.leftExpando,
					crosspost: Me,
					isExpanded: !!x,
					post: fe,
					useMediaIcons: !1
				}), n.a.createElement(u.a, {
					className: oe.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: Te,
					model: fe,
					onVoteClick: b
				}), n.a.createElement(k.a, {
					className: oe.a.flatlistSeparator
				}), !fe.isSurveyAd && n.a.createElement(k.c, {
					className: oe.a.flatlist,
					currentUser: a,
					hasModFlairPerms: Re,
					hasModPostPerms: Ne,
					hasModFullPerms: Fe,
					hostPostData: E,
					isOverlay: !!ae,
					modModeEnabled: me,
					onClickInsightsButton: Qe,
					onIgnoreReports: ue,
					onOpenReportsDropdown: he,
					post: fe,
					shouldShowInsightsButton: Se,
					showEditPost: Ve,
					showEditFlair: Ee,
					tooltipType: ae ? D.c.Lightbox : void 0,
					useFlatlistBreakpoints: Object(F.b)({
						editPost: !Ae,
						hide: !Ae,
						report: !Ae
					})
				})), n.a.createElement(w.d, null))), Object($.a)(fe, oe.a, ge, x, we, re), ye && ze && n.a.createElement(h.a, {
					className: oe.a.creatorStatsContainer,
					post: fe,
					subreddit: ye,
					isOwnProfileStats: !0
				})));
				return n.a.createElement(W.b, null, Xe)
			});
			t.default = Object(J.a)(re)
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), x = .75, f = 10 * d.K;
			class C extends n.a.Component {
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
			var O = C,
				g = s("./node_modules/fbt/lib/FbtPublic.js"),
				v = s("./node_modules/lodash/noop.js"),
				E = s.n(v),
				j = s("./src/lib/makeCommentsPageKey/index.ts"),
				y = s("./src/lib/makeDraftKey/index.ts"),
				P = s("./src/reddit/actions/comment/index.ts"),
				k = s("./src/reddit/actions/comment/authoring.ts"),
				w = s("./src/reddit/actions/comment/moderation.ts"),
				I = s("./src/reddit/actions/gold/modals.ts"),
				_ = s("./src/reddit/actions/modal.ts"),
				S = s("./src/reddit/actions/reportFlow/index.ts"),
				L = s("./src/reddit/actions/tooltip.ts"),
				T = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				M = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				N = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				R = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				F = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				A = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				B = s("./src/reddit/components/ModModeReports/helpers.ts"),
				D = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				W = s("./src/reddit/contexts/InsideOverlay.tsx"),
				V = s("./src/reddit/contexts/PageLayer/index.tsx"),
				U = s("./src/reddit/helpers/correlationIdTracker.ts"),
				K = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				H = s("./src/reddit/helpers/overlay/index.ts"),
				J = s("./src/reddit/helpers/trackers/lightbox.ts"),
				q = s("./src/reddit/models/PostDraft/index.ts"),
				G = s("./src/reddit/models/Comment/index.ts"),
				z = s("./src/reddit/selectors/activeModalId.ts"),
				Z = s("./src/reddit/selectors/comments.ts"),
				Q = s("./src/reddit/selectors/moderatorPermissions.ts"),
				$ = s("./src/reddit/selectors/posts.ts"),
				X = s("./src/reddit/selectors/tooltip.ts"),
				Y = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				ee = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				te = s("./src/reddit/selectors/user.ts"),
				se = s("./src/reddit/components/OverflowMenu/index.tsx"),
				oe = s("./src/reddit/components/ReportFlow/index.tsx"),
				ne = s("./src/reddit/components/ReportFlow/new.tsx"),
				re = s("./src/reddit/components/ShareMenu/index.tsx"),
				ie = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ae = s("./src/reddit/controls/Dropdown/Row.tsx"),
				de = s("./src/reddit/helpers/trackers/modTools.ts"),
				ce = s("./src/reddit/layout/row/Inline/index.tsx"),
				le = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				me = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				pe = s("./src/reddit/icons/fonts/Report/index.tsx"),
				ue = s("./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less"),
				he = s.n(ue),
				be = s("./src/lib/constants/icons.ts"),
				xe = s("./src/lib/lessComponent.tsx"),
				fe = s("./src/reddit/icons/fonts/index.tsx"),
				Ce = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx");
			const Oe = xe.a.wrapped(se.b, "OverflowMenu", he.a),
				ge = xe.a.wrapped(M.a, "ModToolsFlatlist", he.a),
				ve = xe.a.wrapped(A.a, "ModActionsMenu", he.a),
				Ee = xe.a.wrapped(ae.b, "DropdownRow", he.a),
				je = xe.a.wrapped(ce.a, "Flatlist", he.a),
				ye = xe.a.button("Button", he.a),
				Pe = Object(V.u)(),
				ke = e => `Comment-${e}--Modal--DeleteComment`,
				we = e => `Distinguish--Dropdown--${e}`,
				Ie = (e, t) => `${e}--${t}-overflow-menu`,
				_e = e => `View--Reports--${e}`,
				Se = Object(i.c)({
					activeTooltipId: X.a,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(z.a)(e) === ke(s.id)
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Z.D)(e, {
							commentId: s.postId
						})
					},
					isLoggedIn: te.Q,
					moderatorPermissions: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Q.o)(e, {
							subredditId: s.subredditId
						})
					},
					currentUser: te.k,
					modModeEnabled: V.U,
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object($.B)(e, {
							postId: s.postId
						})
					},
					commentPermalink: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Z.m)(e, {
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
					subreddit: V.r,
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object($.U)(e, {
							postId: s.postId
						})
					},
					reportingRevampEnabled: ee.a,
					isTrueblockPCBlockeeEnabled: Y.d
				});
			class Le extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(de.b)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleEdit = () => this.props.handleEdit(this.props.commentPermalink), this.handleIgnoreReports = () => {
						this.props.onIgnoreReports(), this.sendCommentReportEvent(this.props.comment.ignoreReports ? "restore_reports" : "ignore_reports")
					}, this.handleGild = async () => {
						const e = Object(U.d)(U.a.GildingFlow, !0);
						this.props.onGildClick(e);
						const {
							clickGildEvent: t
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(t(this.props.comment.id))
					}, this.handleModActionsMenu = () => this.props.sendEvent(Object(de.b)("comment_mod_action_menu", this.props.comment.id)), this.handleOverflowMenuClick = () => this.props.sendEvent(Object(de.b)("comment_overflow_menu", this.props.comment.id)), this.handleDelete = () => this.props.handleDelete(), this.handleReply = () => this.props.handleReply(this.props.commentPermalink), this.handleRestrictedButtonClick = () => {
						this.props.onToggleReportsDropdown(), this.sendCommentModEventWithName("comment_report_menu")
					}, this.handleSave = () => {
						this.props.comment.isSaved ? this.props.sendEvent(Object(de.b)("unsave", this.props.comment.id)) : this.props.sendEvent(Object(de.b)("save", this.props.comment.id)), this.props.onToggleSave()
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(de.c)(e, this.props.comment.id)), this.sendCommentEventWithName = e => this.props.sendEvent(Object(J.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentEventWithNameShare = () => this.sendCommentEventWithName("share"), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(de.b)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(de.f)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? n.a.createElement(ne.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: oe.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					}) : n.a.createElement(oe.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: oe.b,
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
					if (r && i) return o ? n.a.createElement(ge, {
						comment: e,
						isCommentAuthor: a
					}) : n.a.createElement(ve, {
						dropdownId: `${e.id}-profile-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: this.handleModActionsMenu
					}, n.a.createElement(me.a, null), n.a.createElement(T.a, {
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
					if (s && Object(B.c)(e) && !t) return n.a.createElement(N.a, {
						text: `${o}`,
						onClick: this.handleRestrictedButtonClick,
						selected: this.props.activeTooltipId === _e(e.id),
						id: _e(e.id)
					}, n.a.createElement(D.a, {
						model: e,
						onIgnoreReports: this.handleIgnoreReports,
						tooltipId: _e(e.id)
					}), e.ignoreReports ? n.a.createElement(le.a, null) : n.a.createElement(pe.a, null))
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
					if (i && d && !e.bannedBy && (c || a && !o)) return n.a.createElement(N.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.activeTooltipId === we(e.id)
					}, n.a.createElement(Ce.a, null), n.a.createElement(F.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.activeTooltipId === we(e.id),
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: c,
						isUserMod: a,
						onDistinguishComment: r,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: we(e.id)
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
						toggleDeleteCommentModal: p,
						isTrueblockPCBlockeeEnabled: u
					} = this.props, h = Object(K.a)(c), b = !!r && r.displayText === e.author, x = (!l && !e.isLocked || h && a) && !(Object(G.g)(e) && u), f = r && e.isGildable && !(Object(G.g)(e) && u);
					return n.a.createElement("div", {
						className: s
					}, n.a.createElement(je, null, x && n.a.createElement(ye, {
						onClick: this.handleReply,
						disabled: d
					}, g.fbt._("Reply", null, {
						hk: "1xBqIs"
					})), f && n.a.createElement(ye, {
						onClick: this.handleGild
					}, g.fbt._("Give Award", null, {
						hk: "pQJYk"
					})), n.a.createElement(re.a, {
						dropdownId: `${o}--${e.id}-comment-share-menu`,
						permalink: t,
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == m ? void 0 : m.type
					}, n.a.createElement(ye, {
						onClick: this.sendCommentEventWithNameShare
					}, g.fbt._("share", null, {
						hk: "3YIXpa"
					}))), this.renderReportsDropdown(), n.a.createElement(Oe, {
						dropdownId: Ie(o, e.id),
						onClick: this.handleOverflowMenuClick
					}, !b && !d && n.a.createElement(Ee, {
						displayText: g.fbt._("report", null, {
							hk: "ad7CE"
						}),
						onClick: this.props.onReportClick
					}, n.a.createElement(fe.a, {
						name: be.a.report
					})), n.a.createElement(Ee, {
						displayText: e.isSaved ? g.fbt._("Unsave", null, {
							hk: "4kQcAP"
						}) : g.fbt._("Save", null, {
							hk: "4yMsMq"
						}),
						isSelected: e.isSaved,
						onClick: this.handleSave
					}, e.isSaved ? n.a.createElement(fe.a, {
						name: be.a.saved
					}) : n.a.createElement(fe.a, {
						name: be.a.save
					})), b && n.a.createElement(Ee, {
						displayText: g.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						onClick: this.handleEdit
					}, n.a.createElement(fe.a, {
						name: be.a.edit
					})), b && n.a.createElement(Ee, {
						displayText: g.fbt._("delete", null, {
							hk: "e8kvB"
						}),
						onClick: this.handleDelete
					}, n.a.createElement(fe.a, {
						name: be.a.delete
					}))), this.props.isConfirmModalOpen && n.a.createElement(R.a, {
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
						trackClick: E.a,
						withOverlay: !0
					}), this.renderModTools(), this.renderDistinguishDropdown()), this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var Te = Pe(Object(r.b)(Se, (e, t) => {
					let {
						comment: s,
						commentsPageKey: o
					} = t;
					return {
						deleteComment: () => o && e(Object(k.i)(s.id, s.postId)),
						onDistinguishComment: (t, o) => e(Object(w.b)(s.id, t, o)),
						onIgnoreReports: () => e(Object(w.g)(s.id)),
						onGildClick: t => e(Object(I.d)({
							correlationId: t,
							thingId: s.id
						})),
						onReportClick: () => e(Object(S.c)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(L.h)({
							tooltipId: we(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(L.h)({
							tooltipId: _e(s.id)
						})),
						onToggleSave: () => e(Object(P.n)(s.id)),
						handleDelete: () => {
							e(Object(_.i)(ke(s.id))), e(Object(L.h)({
								tooltipId: Ie(o, s.id)
							}))
						},
						handleEdit: t => {
							const o = Object(j.a)(s.postId, s.id, {}),
								n = {
									commentId: s.id,
									draftKey: Object(y.a)(q.c.edit, s.id),
									text: s.bodyMD || "",
									commentMode: s.media && s.media.rteMode,
									commentsPageKey: o
								};
							e(Object(H.a)(t)), e(Object(k.g)(n))
						},
						handleReply: t => {
							const o = Object(j.a)(s.postId, s.id, {}),
								n = {
									parentCommentId: s.id,
									commentsPageKey: o
								};
							e(Object(H.a)(t)), e(Object(k.h)(n))
						},
						toggleDeleteCommentModal: () => e(Object(_.i)(ke(s.id)))
					}
				})(Object(ie.c)(Object(W.b)(Le)))),
				Me = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Ne = s("./src/reddit/components/RichTextJson/index.tsx"),
				Re = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				Fe = s("./src/reddit/selectors/commentSelector.ts"),
				Ae = s("./src/reddit/components/Comments/ProfileComment/index.m.less"),
				Be = s.n(Ae);
			const De = xe.a.wrapped(Me.a, "TopMeta", Be.a),
				We = xe.a.div("ProfileCommentWrapper", Be.a),
				Ve = xe.a.div("CommentBody", Be.a),
				Ue = Object(r.b)(() => Object(i.c)({
					comment: (e, t) => Object(Fe.b)(e, t),
					flair: Z.e
				})),
				Ke = Object(c.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.a = Ue(e => {
				const {
					comment: t,
					commentsPageKey: s,
					flair: o,
					isExpanded: r,
					showFlatlist: i,
					showModTools: c
				} = e, l = s => n.a.createElement(Ne.b, {
					className: s,
					content: Object(Re.a)(t),
					mediaMetadata: t.media && t.media.mediaMetadata,
					rtJsonElementProps: Ke(e)
				});
				return n.a.createElement(We, {
					className: Object(a.a)({
						[Be.a.isRemoved]: !!t.bannedBy
					})
				}, n.a.createElement(De, {
					collapsedBecauseCrowdControl: !1,
					collapsed: !1,
					comment: t,
					commentsPageKey: s,
					flair: o,
					renderedInOverlay: !1
				}), n.a.createElement("div", null, !t.isDeleted && n.a.createElement(Ve, null, r ? l() : n.a.createElement(O, {
					height: d.Ub,
					isExpanded: r
				}, l)), !t.isDeleted && i && n.a.createElement(Te, {
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
				return y
			})), s.d(t, "a", (function() {
				return P
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
				f = s("./src/reddit/contexts/Post/index.tsx"),
				C = s("./src/reddit/selectors/posts.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/CrosspostBox/index.m.less"),
				v = s.n(g),
				E = s("./src/lib/lessComponent.tsx");

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const y = 8,
				P = 1,
				k = E.a.div("Container", v.a),
				w = E.a.div("PostMetaWrapper", v.a),
				I = E.a.wrapped(u.c, "PostTitle", v.a),
				_ = E.a.div("FlatList", v.a),
				S = E.a.div("FlatItem", v.a),
				L = E.a.span("FlatListDotSpacer", v.a),
				T = E.a.wrapped(k, "LinkContainer", v.a),
				M = E.a.div("Content", v.a),
				N = E.a.div("ThumbnailContainer", v.a),
				R = Object(d.c)({
					isCurrentUserProfilePost: C.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== x.Nb.TOPIC),
					shouldOpenPostInNewTab: O.jb
				}),
				F = Object(i.b)(R);
			t.c = Object(f.b)(F(e => {
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
				}, r.a.createElement(M, null, r.a.createElement(w, null, r.a.createElement(p.a, d)), A(i), i.source && r.a.createElement(h.a, {
					post: i
				}), D(e)), V(e)) : r.a.createElement(k, {
					className: c
				}, r.a.createElement(w, null, r.a.createElement(p.a, d)), A(i), B(e), D(e))
			}));
			const A = e => r.a.createElement(I, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: u.b.Small
				}),
				B = e => {
					const {
						mediaProps: t,
						post: s
					} = e, o = {
						...t,
						post: s,
						crosspost: t.post
					};
					return r.a.createElement("div", null, r.a.createElement(m.a, j({}, o, {
						className: v.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				D = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return r.a.createElement(_, null, r.a.createElement(S, null, o.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [o.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), r.a.createElement(L, null), r.a.createElement(S, null, W(e)))
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
				V = e => r.a.createElement(N, null, r.a.createElement(b.a, {
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
		"./src/reddit/components/Econ/Audio/SpeakerRings.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => {
				let {
					className: t
				} = e;
				return n.a.createElement("svg", {
					className: t,
					width: "226",
					height: "226",
					viewBox: "0 0 226 226",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("g", {
					opacity: "0.8"
				}, n.a.createElement("rect", {
					opacity: "0.8",
					x: "36.7704",
					y: "36.7703",
					width: "152.462",
					height: "152.462",
					rx: "76.2308",
					stroke: "url(#paint0_linear)",
					strokeWidth: "4"
				}), n.a.createElement("rect", {
					opacity: "0.5",
					x: "18.8851",
					y: "18.8822",
					width: "188.231",
					height: "188.231",
					rx: "94.1153",
					stroke: "url(#paint1_linear)",
					strokeWidth: "3"
				}), n.a.createElement("rect", {
					opacity: "0.3",
					x: "1.25",
					y: "1.25",
					width: "223.5",
					height: "223.5",
					rx: "111.75",
					stroke: "url(#paint2_linear)",
					strokeWidth: "2.5"
				})), n.a.createElement("defs", null, n.a.createElement("linearGradient", {
					id: "paint0_linear",
					x1: "17.886",
					y1: "34.7703",
					x2: "213.283",
					y2: "40.3684",
					gradientUnits: "userSpaceOnUse"
				}, n.a.createElement("stop", {
					stopColor: "#FF538C"
				}), n.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				})), n.a.createElement("linearGradient", {
					id: "paint1_linear",
					x1: "-3.25127",
					y1: "17.3822",
					x2: "235.567",
					y2: "24.2243",
					gradientUnits: "userSpaceOnUse"
				}, n.a.createElement("stop", {
					stopColor: "#FF538C"
				}), n.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				})), n.a.createElement("linearGradient", {
					id: "paint2_linear",
					x1: "-24.3885",
					y1: "2.87774e-05",
					x2: "257.851",
					y2: "8.08615",
					gradientUnits: "userSpaceOnUse"
				}, n.a.createElement("stop", {
					stopColor: "#FF538C"
				}), n.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
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
				h = s("./src/reddit/icons/fonts/index.tsx"),
				b = s("./src/reddit/models/Media/index.ts"),
				x = s("./src/reddit/models/Post/index.ts"),
				f = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				C = s("./src/telemetry/models/Outbound.ts"),
				O = s("./src/reddit/components/ExpandoButton/index.m.less"),
				g = s.n(O);
			const v = Object(i.b)(null, (e, t) => ({
					toggle: () => e(Object(l.x)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.bb)(Object(p.b)(t.permalink), t.id))
				})),
				E = function(e) {
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
			t.a = v(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: n,
					isCommentsPage: l,
					isExpanded: p,
					post: b,
					toggle: O,
					useMediaIcons: v
				} = e, j = s || b, y = Object(i.e)(f.b), P = Object(i.e)(f.c), k = t => {
					(y || P) && (t.preventDefault(), e.showModalOnPostLinkClick(j))
				}, w = j.media, I = Object(x.p)(b), _ = n && !!s;
				return w && !I && !(("rtjson" === w.type || "text" === w.type || "liveaudio" === w.type) && !Object(u.a)(j)) || !!b.pollData ? r.a.createElement("button", {
					"aria-expanded": !!p,
					"aria-haspopup": !0,
					"aria-label": o.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(d.a)(t, g.a.outer),
					"data-click-id": p ? "expando_close" : "expando_open",
					onClick: O
				}, p ? r.a.createElement(h.a, {
					name: "collapse",
					className: g.a.icon
				}) : v ? r.a.createElement(r.a.Fragment, null, E(j.media && j.media.type, _, b), r.a.createElement(h.a, {
					name: "expand",
					className: Object(d.a)(g.a.icon, g.a.showOnHover)
				})) : r.a.createElement(h.a, {
					name: "expand",
					className: g.a.icon
				})) : j.source && j.source.url ? r.a.createElement(m.b, {
					"aria-label": o.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(d.a)(t, g.a.outer),
					"data-click-id": "expando_open",
					href: j.source.url,
					isSponsored: b.isSponsored,
					postId: b.id,
					source: b.source,
					sourceElement: l ? C.SourceElement.PostImage : C.SourceElement.ListingPostImage,
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
					to: Object(c.a)(j.permalink),
					rel: "nofollow",
					onClick: k
				}, r.a.createElement(h.a, {
					name: "text_post",
					className: g.a.icon
				}))
			})
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
				f = s("./src/reddit/selectors/communityAwards.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/OverviewChronoComment/index.m.less"),
				g = s.n(O);
			const v = Object(i.b)(() => Object(a.c)({
				comment: x.b,
				isAwarded: (e, t) => {
					const s = Object(x.b)(e, t);
					return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
						const s = Object(f.a)(e, t);
						return s && s.coinPrice >= d.g
					})
				},
				isNightmodeOn: C.db
			}), e => ({
				openPost: t => e(Object(m.L)(t))
			}));
			var E = Object(l.a)(v(e => {
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
				j = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				y = s("./src/reddit/contexts/PageLayer/index.tsx"),
				P = s("./src/reddit/helpers/isComment.ts"),
				k = s("./src/reddit/components/OverviewChronoList/ListItem.m.less"),
				w = s.n(k),
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
			const S = Object(y.u)({
					currentProfileName: y.i,
					isCommentsPage: y.x,
					isCommentPermalink: y.w,
					isProfilePostListing: y.L,
					pageLayer: e => e
				}),
				L = I.a.wrapped(j.a, "OverviewCommentPost", w.a),
				T = I.a.wrapped(r.default, "ClassicPost", w.a);
			t.a = S(e => {
				const {
					itemId: t,
					isFirstInCommentList: s,
					isLastInCommentList: o,
					allowModToolsUnderComments: r,
					height: i,
					width: a,
					...d
				} = e;
				return Object(P.a)(t) ? s ? n.a.createElement(n.a.Fragment, null, n.a.createElement(L, _({}, d, {
					availableWidth: a,
					commentId: t
				})), n.a.createElement(E, {
					commentId: t,
					first: s,
					last: o,
					showModTools: r
				})) : n.a.createElement(E, {
					commentId: t,
					first: s,
					last: o,
					showModTools: r
				}) : n.a.createElement(T, _({}, d, {
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
				f = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				C = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				O = s.n(C),
				g = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				v = s("./src/reddit/selectors/commentSelector.ts"),
				E = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				j = s("./src/reddit/components/OverviewCommentPost/index.m.less"),
				y = s.n(j);
			const {
				fbt: P
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = c.a.wrapped(x.default, "InternalLink", y.a), w = c.a.div("Wrapper", y.a), I = c.a.div("Row", y.a), _ = c.a.wrapped(g.a, "CommentIcon", y.a), S = c.a.div("TitleContainer", y.a), L = c.a.div("PostTitleContainer", y.a), T = c.a.wrapped(p.c, "PostTitle", y.a), M = c.a.wrapped(u.d, "PostTopMeta", y.a), N = c.a.wrapped(u.a, "MetaSeparator", y.a), R = Object(r.b)(() => Object(i.c)({
				comment: v.b,
				isBlockingInterstitialEnabled: E.b,
				isBlockingInterstitialV2Enabled: E.b
			}), e => ({
				showModalOnAuthorLinkClick: t => e(Object(l.db)(t))
			})), F = e => {
				const {
					post: t,
					subredditOrProfile: s
				} = e;
				if (s) return n.a.createElement(o.Fragment, null, n.a.createElement(N, null), n.a.createElement(M, {
					metaSeparatorClassName: y.a.postTopMetaMetaSeparator,
					post: t,
					showSub: !0,
					showTimestamp: !1,
					subredditOrProfile: s
				}))
			}, A = e => {
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
				return n.a.createElement(k, {
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
				return n.a.createElement(m.a, {
					className: Object(a.a)(O.a.compactPostStyles, y.a.overviewCommentPost, {
						[y.a.banned]: !!e.post.bannedBy,
						[y.a.reported]: !e.post.bannedBy && !!e.post.numReports && e.post.numReports > 0
					}, t),
					post: r,
					onClick: o,
					eventFactory: s
				}, n.a.createElement(w, {
					style: {
						background: Object(f.e)(e)
					}
				}, n.a.createElement(I, null, n.a.createElement(_, null), n.a.createElement(S, null, P._("{postAuthor} commented on {postTitle} {postMeta}", [P._param("postAuthor", A({
					...e
				})), P._param("postTitle", n.a.createElement(L, null, n.a.createElement(T, {
					outboundLinkClassName: y.a.postTitleOutboundLink,
					post: r,
					size: p.b.Small,
					titleClassName: y.a.postTitleTitle
				}))), P._param("postMeta", F(e))], {
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
				f = s("./src/reddit/selectors/communityAwards.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less"),
				g = s.n(O);
			const v = m.a.div("ProfileOwnerCommentWrapper", g.a),
				E = m.a.div("CommentContentWrapper", g.a),
				j = m.a.div("Wrapper", g.a),
				y = m.a.div("CommentSeparator", g.a),
				P = Object(a.b)(() => Object(d.c)({
					comment: (e, t) => Object(x.b)(e, t),
					isAwarded: (e, t) => {
						const s = Object(x.b)(e, t);
						return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
							const s = Object(f.a)(e, t);
							return s && s.coinPrice >= c.g
						})
					},
					isNightmodeOn: C.db
				}), e => ({
					openPost: t => e(Object(h.L)(t))
				}));
			class k extends i.a.Component {
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
					} = this.props, h = m === e.author ? w : I;
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
							[g.a.isFirst]: a,
							[g.a.isLast]: d,
							[g.a.isAwarded]: r,
							[g.a.isNightmodeOn]: c
						})
					}, n()(s + 1, e => i.a.createElement(y, {
						key: e
					})), i.a.createElement(E, null, h(t, m, u))))
				}
			}
			const w = (e, t, s) => i.a.createElement(v, null, I(e, t, s, !0, !0)),
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
			t.a = P(k)
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/reddit/helpers/styles/mixins/index.tsx"),
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
			t.a = Object(i.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: o,
					onClick: i,
					post: d,
					redditStyle: m,
					theme: p,
					...u
				} = e;
				return n.a.createElement("div", l({
					className: Object(r.a)(c.a.backgroundWrapper, s),
					style: Object(a.c)(o, e),
					onClick: i
				}, u), t)
			})
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/CrosspostBox/index.tsx"),
				i = s("./src/reddit/components/Media/index.tsx");

			function a(e) {
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
				subscribeButton: "_2r87gmhJ9n0MsylKHkgDcp"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/moderatorPermissions.ts"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				d = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = s("./src/reddit/components/PostBadges/index.tsx"),
				m = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				u = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				h = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				b = s("./src/reddit/constants/posts.ts"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				C = s("./src/reddit/helpers/trackers/post.ts"),
				O = s("./src/reddit/hooks/useClickSourceData.ts"),
				g = s("./src/reddit/models/Subreddit/index.ts"),
				v = s("./src/reddit/components/PostMeta/index.m.less"),
				E = s.n(v);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: o,
					isCurrentUserProfilePost: v,
					isOverlay: j,
					isTopicPage: y,
					post: P,
					shouldShowSubscribeButton: k,
					subredditOrProfile: w,
					tooltipType: I
				} = e, _ = !!y, S = Object(O.a)(), L = Object(r.e)(e => !!w && Object(i.j)(e, w.id));
				return n.a.createElement("div", {
					className: E.a.metaContainer
				}, !o && !P.isSponsored && w && n.a.createElement(d.a, {
					postId: P.id,
					subredditName: w.name
				}, n.a.createElement(u.a, {
					className: E.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: w.url,
						state: S
					}
				}, w.displayText)), w && w.isQuarantined && n.a.createElement(p.a, null), !o && !P.isSponsored && w && k && !v && n.a.createElement(h.a, {
					className: E.a.SubscribeButton,
					getEventFactory: e => Object(C.k)(P.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: w.name,
						type: Object(g.i)(w) ? b.a.PROFILE : b.a.SUBREDDIT
					},
					postId: P.id,
					size: x.d.XXS,
					small: !0
				}), !o && !P.isSponsored && n.a.createElement(f.b, null), !o && !P.isSponsored && n.a.createElement(c.h, {
					type: P.belongsTo.type,
					id: P.belongsTo.id
				}), n.a.createElement(m.d, {
					className: E.a.postTopMeta,
					flairStyleTemplate: t,
					post: P,
					tooltipType: I,
					isModWithUserNotesPermissions: L
				}), n.a.createElement(l.a, {
					displayText: w ? w.displayText : null,
					inSubredditOrProfile: !!o,
					post: P,
					tooltipType: I
				}), !_ && n.a.createElement(a.a, {
					hideCta: s,
					thing: P,
					tooltipType: j ? m.c.Lightbox : void 0
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
					isOverlay: f,
					isVoteCountAnimation: C,
					postId: O,
					shouldShowUpvoteRatioOnHover: g
				} = e, v = `upvote-button-${t.id}${f?"-overlay":""}`;
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
					upvoteTooltipId: v,
					isVoteCountAnimation: C,
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
				h = s("./src/reddit/constants/componentSizes.ts"),
				b = s("./src/reddit/helpers/getClickInfo.ts"),
				x = s("./src/reddit/helpers/isComment.ts"),
				f = s("./src/reddit/contexts/Post/index.tsx"),
				C = s("./src/lib/LRUCache/index.ts"),
				O = s("./src/telemetry/index.ts"),
				g = s("./src/telemetry/models/Timer.ts"),
				v = s("./src/reddit/components/PostList/index.m.less"),
				E = s.n(v);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const y = 500,
				P = new C.a(y),
				k = new C.a(y),
				w = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				I = (e, t, s, o, n, r) => {
					const i = `entered-${e}-${t}-${s?`last-${o}-${n}`:""}`;
					let a = P.get(i);
					return void 0 === a && (a = () => {
						s && r.onBottomViewed(o, n), r.trackOnPostEnteredViewport(e, t)
					}, P.set(i, a)), a
				},
				_ = (e, t) => {
					const s = `click-${e}`;
					let o = k.get(s);
					return void 0 === o && (o = (e, s) => {
						s.isSponsored && t.fireAdPixelsOfType(s, c.a.Click), s.isSponsored && s.source && s.source.outboundUrl ? Object(d.e)(s.source.outboundUrl, d.d.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(b.a)(e)
						})
					}, k.set(s, o)), o
				};
			class S extends i.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new C.a(y), this.updateScrollerRef = e => {
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
						setTimeout(() => Object(O.b)(a.m.Redesign, {
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
						setTimeout(() => Object(O.b)(a.m.Redesign, {
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
						} = this.props, u = p[e], h = `overview-chrono-list-item-[layout: ${r}]-[itemId: ${e}]`, b = I(u, r, s, a, d, this.props), x = {
							key: h,
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
						}, C = this.props.itemComponent;
						m = {
							estHeight: this.props.estimateItemHeight(e, r, o),
							id: e,
							isFocusable: !1,
							trackOnEnteredViewport: b,
							render: e => i.a.createElement(f.a, {
								postId: x.postId
							}, i.a.createElement(C, j({}, x, e)))
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
						className: E.a.placeholder
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
						className: E.a.placeholder
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
			t.a = S
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
				u = s("./src/reddit/selectors/moderatorPermissions.ts"),
				h = s("./src/reddit/selectors/postFlair.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/showPromotedCTA.ts"),
				f = s("./src/reddit/selectors/user.ts");
			const C = {
					autoplayPref: f.b,
					activeModalId: m.a,
					crosspost: b.d,
					isActive: b.j,
					isChatPost: p.d,
					isCurrentUserProfilePost: b.l,
					isExpanded: b.m,
					isLoggedIn: f.Q,
					showPromotedCTA: x.a,
					moderatorPermissions: u.n,
					modModeEnabled: c.U,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: h.a,
					showMedia: c.s,
					flairStyleTemplate: c.W
				},
				O = Object(o.b)(() => Object(n.c)(C), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const o = t === a.a.upvoted ? Object(r.kb)(s) : Object(r.w)(s);
							e(o)
						},
						onIgnoreReports: () => e(Object(r.gb)(s)),
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
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, s) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/index.tsx"),
				a = s("./src/reddit/controls/Checkbox/index.m.less"),
				d = s.n(a);
			t.a = e => n.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, n.a.createElement(i.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(r.a)({
					[d.a.redditStyle]: e.redditStyle,
					[d.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var o = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const n = e => {
				let {
					edges: t
				} = e;
				const s = [];
				for (const {
						node: n
					} of t) s.push(Object(o.f)(n));
				return s
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
			var o = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
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
				h = e => Object(o.k)(.2, e),
				b = e => e && e.postBackgroundColor ? {
					backgroundColor: h(e.postBackgroundColor)
				} : m,
				x = e => e.isActive ? l.a.mIsActive : void 0,
				f = e => {
					const t = Object(r.a)(Object(n.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
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
					...Object(r.n)(s),
					action: n.c.VIEW,
					noun: "aggregate_stats",
					source: "creator_stats",
					subreddit: Object(r.hb)(s),
					post: Object(r.I)(s, e),
					userSubreddit: Object(r.rb)(s),
					actionInfo: Object(r.d)(s, {
						reason: i(t)
					})
				}),
				d = (e, t) => s => ({
					...Object(r.n)(s),
					action: n.c.CLICK,
					noun: e,
					source: "creator_stats",
					post: Object(r.I)(s, t),
					subreddit: Object(r.hb)(s),
					userSubreddit: Object(r.rb)(s)
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
					...Object(r.n)(t),
					action: n.c.CLICK,
					noun: "post_stats",
					source: "post",
					actionInfo: Object(r.d)(t, {
						pageType: "profile"
					}),
					post: Object(r.I)(t, e, void 0, 0),
					profile: Object(r.R)(t)
				}),
				m = (e, t, s) => o => ({
					...Object(r.n)(o),
					action: n.c.LOAD,
					noun: "insights",
					source: "post_stats",
					actionInfo: Object(r.d)(o, {
						reason: c(t)
					}),
					post: Object(r.I)(o, e, void 0, s)
				}),
				p = (e, t, s, o, i, a) => d => ({
					...Object(r.n)(d),
					action: n.c.CLICK,
					noun: "community",
					source: "post_stats",
					actionInfo: Object(r.d)(d, {
						pageType: "post_stats",
						reason: "stats"
					}),
					post: Object(r.I)(d, e, void 0, a),
					subreddit: Object(r.hb)(d),
					outbound: {
						postId: s,
						url: t,
						subredditId: o,
						subredditName: i
					}
				}),
				u = (e, t, s) => o => ({
					...Object(r.n)(o),
					action: n.c.CLICK,
					noun: "share",
					source: "post_stats",
					actionInfo: Object(r.d)(o, {
						pageType: "post_stats",
						reason: c(t)
					}),
					post: Object(r.I)(o, e, void 0, s),
					subreddit: Object(r.hb)(o)
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
				p = s("./src/reddit/actions/nsfwBlocking/async.tsx"),
				u = s("./src/reddit/actions/pages/profileComments/index.ts"),
				h = s("./src/reddit/actions/pages/profileShared.ts"),
				b = s("./src/reddit/components/ContentGate/index.tsx"),
				x = s("./src/reddit/components/EmptyProfile/index.ts"),
				f = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				C = s("./src/reddit/components/JumpToContent/index.tsx"),
				O = s("./src/lib/classNames/index.ts"),
				g = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				v = s("./src/lib/lessComponent.tsx"),
				E = s("./src/reddit/components/ClassicPost/index.tsx"),
				j = s("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				y = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				P = s("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				k = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				w = s("./src/reddit/constants/postLayout.ts"),
				I = s("./src/reddit/contexts/PageLayer/index.tsx"),
				_ = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				S = s("./src/reddit/selectors/commentSelector.ts"),
				L = s("./src/reddit/components/ProfileCommentList/ListItem.m.less"),
				T = s.n(L);

			function M() {
				return (M = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const N = v.a.wrapped(E.default, "ClassicPost", T.a),
				R = v.a.wrapped(y.a, "OverviewCommentPost", T.a),
				F = Object(I.u)({
					currentProfileName: I.i,
					pageLayer: e => e
				}),
				A = Object(d.c)({
					comment: (e, t) => {
						let {
							itemId: s
						} = t;
						return Object(S.b)(e, {
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
			var B = F(Object(a.b)(A)(e => {
				const {
					comment: t,
					itemId: s,
					isFirstInCommentList: o,
					isLastInCommentList: n,
					layout: r,
					profileName: a,
					allowModToolsUnderComments: d
				} = e;
				if (r === w.g.Compact) return i.a.createElement(j.a, e);
				const {
					height: c,
					width: l,
					...m
				} = e;
				return i.a.createElement(D, m, o && i.a.createElement(P.a, {
					isFirst: !0
				}, r === w.g.Large ? i.a.createElement(N, M({}, e, {
					availableWidth: l,
					inSubredditOrProfile: !1,
					isOverlay: !1
				})) : i.a.createElement(R, M({}, e, {
					commentId: s,
					profileName: a
				}))), i.a.createElement(P.a, {
					isLast: n
				}, i.a.createElement(k.a, {
					commentId: s,
					depth: t.parentId ? 1 : 0,
					isFirst: !0,
					isLast: !0,
					key: s,
					profileName: a,
					showModTools: d
				})))
			}));
			const D = Object(g.a)(e => i.a.createElement("div", {
				className: Object(O.a)(T.a.backgroundMargin, {
					[T.a.isFirstInCommentList]: e.isFirstInCommentList,
					[T.a.isLastInCommentList]: e.isLastInCommentList
				}),
				style: {
					background: Object(_.e)(e)
				}
			}, e.children));
			var W = s("./src/reddit/components/ProfileItemList/index.tsx"),
				V = s("./node_modules/lodash/noop.js"),
				U = s.n(V),
				K = s("./src/reddit/actions/ads/index.ts"),
				H = s("./src/reddit/actions/comment/list.ts"),
				J = s("./src/reddit/actions/post.ts"),
				q = s("./src/reddit/components/TrackingHelper/index.tsx"),
				G = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				z = s("./src/reddit/helpers/trackers/post.ts"),
				Z = s("./src/reddit/featureFlags/index.ts"),
				Q = s("./src/reddit/selectors/comments.ts"),
				$ = s("./src/reddit/selectors/posts.ts"),
				X = s("./src/reddit/selectors/profileComments.ts"),
				Y = s("./src/reddit/selectors/subreddit.ts"),
				ee = s("./src/reddit/selectors/tracking.ts"),
				te = s("./src/reddit/selectors/user.ts");
			const se = Object(I.u)(),
				oe = {
					apiError: X.a,
					apiPending: X.b,
					currentUser: te.k,
					measureScrollFPS: Z.d.measureScrollFPS,
					layout: I.S,
					loadMore: X.d,
					subredditsById: Y.bb,
					viewportDataLoaded: ee.a,
					commentsById: Q.q,
					itemIds: X.f,
					itemIdToPostId: X.e,
					postsById: $.J,
					estimateItemHeight: e => (e, t, s) => {
						if (s) switch (t) {
							case w.g.Medium:
								return 174;
							case w.g.Classic:
								return 129;
							case w.g.Compact:
								return 120;
							default:
								return 140
						}
						switch (t) {
							case w.g.Medium:
							case w.g.Classic:
								return 90;
							case w.g.Compact:
								return 80;
							default:
								return 90
						}
					}
				},
				ne = Object(d.c)(oe),
				re = Object(a.b)(ne, e => ({
					onBottomViewed: (t, s) => e(Object(H.c)(t, s)),
					adBrandSafetyStatusReceived: t => {
						e(K.d({
							isViewSafe: t
						}))
					},
					openPost: t => e(Object(J.L)(t)),
					fireAdPixelsOfType: U.a,
					trackOnPostEnteredViewport: U.a
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(z.k)(e, t),
					postComponentForLayout: G.b
				}));

			function ie() {
				return (ie = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const ae = e => i.a.createElement(B, ie({}, e, {
					allowModToolsUnderComments: !0
				})),
				de = (e => Object(q.c)(se(re(e))))(W.a);
			var ce = e => i.a.createElement(de, ie({}, e, {
					itemComponent: ae
				})),
				le = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				me = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				pe = s("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				ue = s("./src/reddit/helpers/name/index.ts"),
				he = s("./src/reddit/helpers/trackers/screenview.ts"),
				be = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				xe = s("./src/reddit/layout/page/Listing/index.tsx"),
				fe = s("./src/reddit/models/ContentGate.ts"),
				Ce = s("./src/reddit/pages/ErrorPages/index.tsx"),
				Oe = s("./src/reddit/pages/ProfileBlockInterstitial/index.tsx"),
				ge = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				ve = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				Ee = s("./src/reddit/selectors/profile.ts");

			function je() {
				return (je = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const ye = Object(I.u)(),
				Pe = Object(d.a)(I.E, te.kb, (e, t) => {
					let {
						location: s
					} = t;
					return n()([...Object(l.a)(s.search)])
				}, I.S, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.profileName
				}, (e, t) => {
					let {
						match: s
					} = t;
					return Object(Ee.j)(e, {
						profileName: s.params.profileName
					})
				}, te.Q, (e, t) => {
					let {
						match: s
					} = t;
					return Object(te.f)(e, c.kc + s.params.profileName)
				}, ge.c, (e, t) => {
					let {
						match: s
					} = t;
					return Object(te.L)(e, {
						profileName: s.params.profileName
					})
				}, ve.f, (e, t, s, o, n, r, i, a, d, c, l) => {
					var p, u;
					const {
						sort: b,
						t: x
					} = Object(h.b)(s), f = Object(m.a)(`u_${n}`, b, s);
					return {
						contentGateInfo: a,
						over18Prefs: t,
						isLoggedIn: i,
						isOwnProfile: e,
						isProfileNSFW: !!r && r.isNSFW,
						layout: o,
						listingKey: f,
						profileName: n,
						sort: b,
						timeSort: x,
						avatar: null === (p = null == r ? void 0 : r.icon) || void 0 === p ? void 0 : p.url,
						isProfileBlockInterstitialEnabled: d,
						isBlocked: c,
						profileId: null !== (u = null == r ? void 0 : r.id) && void 0 !== u ? u : "",
						nsfwBlockingExperiment: l
					}
				}),
				ke = Object(a.b)(Pe, (e, t) => ({
					onLoadMore: () => e(Object(u.moreItemsRequested)()),
					onLayoutChange: () => e(Object(u.profileCommentsRequested)({
						...t.match,
						queryParams: n()([...Object(l.a)(t.location.search)])
					})),
					openNsfwModal: () => e(Object(p.a)())
				}));
			t.default = ye(ke(Object(be.d)(e => {
				const {
					avatar: t,
					contentGateInfo: s,
					isBlocked: o,
					isOwnProfile: n,
					isProfileBlockInterstitialEnabled: a,
					isProfileNSFW: d,
					listingKey: l,
					nsfwBlockingExperiment: m,
					onLoadMore: p,
					onLayoutChange: u,
					openNsfwModal: h,
					over18Prefs: O,
					pageLayer: g,
					profileId: v,
					profileName: E,
					sort: j,
					timeSort: y
				} = e;
				if (Object(r.useEffect)(() => {
						d && !n && m === ve.a.Blurred && h()
					}, [m, n, d, h]), !E || !g) return null;
				if (s && s.profileDeleted) return i.a.createElement(b.default, {
					contentGateType: fe.a.ProfileDeleted,
					profileName: E
				});
				if (s && s.profileSuspended) return i.a.createElement(b.default, {
					contentGateType: fe.a.ProfileSuspended,
					profileName: E
				});
				if (451 === g.status || s && s.profileBlockedForLegalReason) return i.a.createElement(b.default, {
					contentGateType: fe.a.ProfileBlockedForLegalReason,
					profileName: E
				});
				const P = g.queryParams && "true" === g.queryParams.consent;
				if (403 === g.status || o && !P) return a ? i.a.createElement(Oe.a, {
					username: E,
					avatar: t,
					uid: v
				}) : i.a.createElement(Ce.a, null);
				if (404 === g.status) return i.a.createElement(b.default, {
					contentGateType: fe.a.ProfileDoesNotExist,
					profileName: E
				});
				const k = E.toLowerCase(),
					w = `/user/${E}/comments/`,
					I = {
						listingKey: l,
						listingName: k
					};
				if (d && !n && m === ve.a.NoPreview) return i.a.createElement(pe.a, {
					contentTitle: Object(ue.d)(E)
				});
				if (!O && d && !n && m !== ve.a.Blurred) return i.a.createElement(b.default, {
					contentGateType: fe.a.Nsfw,
					subredditName: E
				});
				const _ = {
					sort: j,
					baseUrl: w,
					sortOptions: c.Db,
					timeSort: y
				};
				return i.a.createElement(xe.a, {
					className: e.className,
					fitPageToContent: !0,
					contentNavBar: i.a.createElement(i.a.Fragment, null, i.a.createElement(le.a, {
						profileName: E,
						viewBlockedConsent: P
					})),
					content: i.a.createElement(i.a.Fragment, null, i.a.createElement(f.a, _), i.a.createElement(C.a, null), i.a.createElement(ce, {
						listingKey: l,
						listingName: k,
						listingViewed: (e, t) => Object(he.o)(l, j, t, e, y),
						noPostsComponent: () => i.a.createElement(x.b, {
							profileName: E,
							timeSort: y
						}),
						onLoadMore: p,
						onTryAgain: u,
						inSubredditOrProfile: !1
					})),
					sidebar: i.a.createElement(me.a, je({}, I, {
						profileName: E
					}))
				})
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileComments.1569512acace5b1c15e0.js.map