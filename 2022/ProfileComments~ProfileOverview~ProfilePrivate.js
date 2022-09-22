// https://www.redditstatic.com/desktop2x/ProfileComments~ProfileOverview~ProfilePrivate.f17c1588ac789d2bf45a.js
// Retrieved at 9/22/2022, 10:30:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileComments~ProfileOverview~ProfilePrivate"], {
		"./node_modules/lodash/take.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseSlice.js"),
				o = s("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, s) {
				return e && e.length ? (t = s || void 0 === t ? 1 : o(t), n(e, 0, t < 0 ? 0 : t)) : []
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.m.less": function(e, t, s) {
			e.exports = {
				displayUrl: "Nd1oMnpI7mh5Ewfm9VQxq",
				ctaExperimentLink: "a3FqJA6bjuoLKqPBEp52R",
				leftSideContent: "_1oCxYg3Tu1IIcDUUOu9gIA",
				ctaExperimentNoPadding: "_2pWpf_lwFeF9qkMKAgnF1j",
				ctaExperimentPadded: "_3xECPPLU5gHGEwtMV_um7R",
				productTitle: "_3IN2NbpghDp3ddkK_5fJX8",
				subcaption: "_20wkPJgadrJIAZtTeFXQXU",
				caption: "_2LmxORnqxzKG1lDeTP_w6R"
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/CallToActionButton/index.tsx"),
				c = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				d = s("./src/reddit/models/Post/index.ts"),
				l = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				m = s("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				u = s.n(m);
			t.a = e => {
				const {
					adLinkContent: t,
					post: s,
					isCompact: o
				} = e, {
					source: m,
					callToAction: p,
					caption: b
				} = t;
				if (!m || !m.url) return null;
				let x = m.displayText;
				m.displayText.length >= 40 && (x = m.displayText.slice(0, 40 - "...".length) + "...");
				const h = Object(d.s)(s, m.displayText),
					f = Object(d.t)(s) ? x : b,
					v = Object(d.t)(s) ? s.subcaption : m.displayText,
					E = Object(a.a)(u.a.leftSideContent, {
						[u.a.ctaExperimentNoPadding]: e.ctaExperimentDesign && "card" !== e.ctaExperimentDesign,
						[u.a.ctaExperimentPadded]: "card" === e.ctaExperimentDesign
					}),
					g = Object(a.a)(u.a.displayUrl, {
						[u.a.ctaExperimentLink]: !!e.ctaExperimentDesign
					});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: E
				}, b && !o && !h && r.a.createElement("span", {
					className: u.a.caption,
					title: b,
					"data-adclicklocation": l.a.CTA_CAPTION
				}, b), !h && r.a.createElement(c.a, {
					href: m.url.replace(n.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: m,
					className: g,
					"data-adclicklocation": l.a.CTA_URL
				}, x), h && r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
					className: u.a.productTitle
				}, f), r.a.createElement("span", {
					className: u.a.subcaption
				}, v))), p && r.a.createElement(i.a, {
					className: u.a.callToAction,
					href: m.url,
					isSponsored: s.isSponsored,
					postId: s.id,
					source: m,
					showCTAExperiment: !!e.ctaExperimentDesign,
					"data-adclicklocation": l.a.CTA_BUTTON
				}, p))
			}
		},
		"./src/reddit/components/AvatarPost/index.m.less": function(e, t, s) {
			e.exports = {
				avatarPostContainer: "_2nck8non0VYnkIkyUpuvpw",
				avatarPostImage: "_2yQLdTnHA0y3hZ3I588oUM"
			}
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/ads/index.ts"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/getShortenedLink.ts"),
				d = s("./src/lib/hooks/usePrevious.ts"),
				l = s("./src/reddit/hooks/useTracking.ts"),
				m = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				u = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				p = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				b = s("./src/reddit/components/CreatorStats/loader.tsx"),
				x = s("./node_modules/react-redux/es/index.js"),
				h = s("./src/reddit/models/Audio/index.ts"),
				f = s("./src/reddit/selectors/experiments/econ/index.ts"),
				v = s("./src/reddit/components/Econ/Audio/index.m.less"),
				E = s.n(v),
				g = s("./src/config.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/Econ/Audio/MuteIcon.tsx"),
				C = s("./src/reddit/components/Econ/Audio/SpeakerRings/index.tsx");
			const {
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = () => Math.floor(10 * Math.random()) + 1;
			var j = e => {
					let {
						postId: t
					} = e;
					const s = Object(x.e)(_.db),
						[r, i] = Object(n.useState)(!1),
						[c, d] = Object(n.useState)(k());
					return Object(n.useEffect)(() => {
						let e;
						const t = setInterval(() => {
							i(!0), e = setTimeout(() => i(!1), 3500), d(k())
						}, 6e3);
						return () => {
							clearInterval(t), clearTimeout(e)
						}
					}, []), o.a.createElement("div", {
						className: E.a.classicSpeaker
					}, r && o.a.createElement(C.a, {
						ringId: `${t}`,
						className: Object(a.a)(E.a.speakerRings, {
							[E.a.nightMode]: s
						}),
						ringClassName: "speakerRing",
						isAnimated: !0
					}), o.a.createElement("img", {
						key: `audioPostAvatar--${c}`,
						className: E.a.snoovatar,
						src: `${g.a.assetPath}/img/talk/avatars/${c}.png`,
						alt: y._("Reddit Talk", null, {
							hk: "XNl4V"
						})
					}), !r && o.a.createElement("div", {
						className: E.a.muteContainer
					}, o.a.createElement(O.a, {
						className: E.a.muteIcon
					})))
				},
				I = s("./src/reddit/components/Econ/Audio/UpcomingTalk/index.tsx");
			const {
				fbt: N
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var P = e => {
					let {
						post: t
					} = e;
					const {
						audioRoom: s,
						postId: n,
						author: r
					} = t;
					return Object(x.e)(f.t) && s.roomStatus === h.b.NotStarted ? o.a.createElement(I.a, {
						postId: n,
						author: r,
						isClassicView: !0
					}) : (null == s ? void 0 : s.isLive) ? o.a.createElement("a", {
						href: `https://www.reddit.com/talk/${s.roomId}`,
						target: "_blank",
						rel: "noopener noreferrer",
						className: E.a.liveClassicContainer,
						"data-testid": "audioroom-classic-live"
					}, o.a.createElement(j, {
						postId: n
					})) : o.a.createElement("div", {
						className: E.a.endedClassicContainer
					}, o.a.createElement(O.a, {
						className: E.a.muteIcon
					}))
				},
				S = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				w = s("./src/reddit/components/ExpandoButton/index.tsx"),
				T = s("./src/reddit/components/Flatlist/index.tsx"),
				L = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				M = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				R = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				A = s("./src/reddit/components/ModModeReports/index.tsx"),
				F = s("./src/reddit/components/ModModeReports/helpers.ts"),
				B = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				D = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				W = s("./src/reddit/components/PostContainer/index.tsx"),
				U = s("./src/reddit/components/PostMeta/index.tsx"),
				H = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				V = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				z = s("./src/reddit/components/PostTitle/index.tsx"),
				q = s("./src/reddit/components/PostTopMeta/index.tsx"),
				G = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				J = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				K = s("./src/reddit/models/Media/index.ts"),
				Z = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				X = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				Q = s("./src/reddit/constants/postLayout.ts"),
				Y = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				$ = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				ee = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				te = s("./src/reddit/helpers/localStorage/index.ts"),
				se = s("./src/reddit/helpers/search/renderMedia.tsx"),
				ne = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				oe = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				re = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				ae = s.n(re),
				ie = s("./src/reddit/components/ClassicPost/index.m.less"),
				ce = s.n(ie);

			function de() {
				return (de = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const le = Object(i.a)(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: i,
					handleVote: x,
					isExpanded: f,
					inSubredditOrProfile: v,
					eventFactory: E,
					first: g,
					flairStyleTemplate: _,
					formatTitle: O,
					hostPostData: C,
					isCheckboxSelected: y,
					isCurrentUserProfilePost: k,
					isFrontpage: j,
					isGalleryTileLayoutDefault: I,
					isLoggedIn: N,
					isOverlay: X,
					imageGalleryCurrentItem: re,
					moderatorPermissions: ie,
					modModeEnabled: le,
					onClickPost: me,
					onIgnoreReports: ue,
					onOpenReportsDropdown: pe,
					onSizeChanged: be,
					poll: xe,
					post: he,
					postId: fe,
					redditStyle: ve,
					scrollerItemRef: Ee,
					showBulkActionCheckbox: ge,
					showEditFlair: _e,
					showMedia: Oe,
					shouldShowInsightsButton: Ce,
					subredditOrProfile: ye,
					toggleCheckbox: ke,
					userIsOp: je,
					shouldShowGalleryTileOption: Ie,
					showPromotedCTA: Ne,
					showCTAExperimentDesign: Pe
				} = e, Se = Object(l.a)(), we = Object(d.a)(f);
				Object(n.useEffect)(() => {
					be && we !== f && be(he.id)
				}, [f, be, he.id, we]);
				const Te = ve ? void 0 : _,
					Le = s || void 0,
					Me = Object(ee.a)(ie),
					Re = Object(Y.a)(ie),
					Ae = Object($.a)(ie),
					Fe = le && ee.a,
					Be = Object(R.a)(he),
					De = Object(F.c)(he),
					We = !!he.media && he.media.type === K.o.RTJSON,
					Ue = je && We,
					He = v && !Oe,
					Ve = !!he.media && Object(K.H)(he.media),
					ze = !!he.recommendationContext,
					qe = {
						flairStyleTemplate: Te,
						post: he,
						inSubredditOrProfile: v,
						isCurrentUserProfilePost: k,
						isOverlay: X,
						shouldShowSubscribeButton: !(j && N) || ze && N,
						subredditOrProfile: ye
					},
					Ge = Object(r.t)(he, re),
					{
						source: Je
					} = Ge,
					[Ke, Ze] = Object(n.useState)(!1),
					Xe = Object(n.useCallback)(() => {
						Ze(!Ke), Object(te.Pb)(), Se(Object(oe.d)(fe))
					}, [Ke, fe, Se]);
				let Qe = o.a.createElement(Z.a, {
					className: ce.a.classicThumbnail,
					crosspost: Le && he,
					isMeta: he.isMeta,
					post: Le || he,
					redditStyle: ve,
					templatePlaceholderImage: Te && Te.postPlaceholderImage,
					removeLink: Ve
				});
				Object(h.c)(he) && (Qe = o.a.createElement(P, {
					post: he
				}));
				const Ye = o.a.createElement(W.a, {
					className: Object(a.a)(ae.a.classicPostStyles, ce.a.postContainer, Object(ne.a)(e), {
						[ce.a.mFirst]: g,
						[ce.a.shouldShowOverflow]: Ce
					}, t),
					isOverlay: X,
					style: {
						...Object(ne.d)(e),
						...Object(ne.b)(Te)
					},
					post: he,
					onClick: me,
					eventFactory: E
				}, o.a.createElement(V.a, {
					model: he,
					handleVote: x,
					showBulkActionCheckbox: ge,
					isCheckboxSelected: y,
					toggleCheckbox: ke,
					flairStyleTemplate: Te,
					redditStyle: ve,
					postId: fe
				}), o.a.createElement(D.a, {
					className: Ce ? ce.a.shouldUseRoundedBorder : void 0,
					"data-click-id": "background",
					flairStyleTemplate: Te
				}, o.a.createElement(S.a, {
					className: ce.a.eventMeta,
					post: he
				}), o.a.createElement("div", {
					className: ce.a.mainBody
				}, o.a.createElement("div", {
					className: He ? ce.a.expandoContainer : ce.a.thumbnailContainer
				}, !He && Qe, o.a.createElement(w.a, {
					crosspost: Le,
					className: ce.a.rightExpando,
					isExpanded: !!f,
					post: he,
					useMediaIcons: !1
				})), o.a.createElement("div", {
					className: Object(a.a)(ce.a.content, {
						[ce.a.showBulkActionCheckbox]: ge
					}),
					"data-click-id": "body"
				}, !!he.recommendationContext && o.a.createElement(B.a, {
					content: he.recommendationContext.content,
					layout: Q.g.Classic,
					post: he
				}), o.a.createElement(z.c, {
					className: xe ? ce.a.titleWithPoll : void 0,
					format: O,
					poll: xe,
					post: he,
					redditStyle: ve,
					size: z.b.Medium,
					titleColor: Te && Te.postTitleColor,
					isOverlay: X
				}, he.source && !Le && !he.isSurveyAd && o.a.createElement(J.a, {
					href: he.source.url,
					isSponsored: he.isSponsored,
					postId: he.id,
					source: he.source
				}, Object(c.a)(he))), o.a.createElement(U.a, de({
					key: "PostMeta"
				}, qe)), le && Me && Be && o.a.createElement(M.a, {
					thing: he
				}), le && Me && De && o.a.createElement(A.a, {
					onIgnoreReports: ue,
					reportable: he
				}), Ne && Je && Je.url && !he.isSurveyAd && o.a.createElement(m.a, {
					ctaExperimentDesign: Pe && "classic",
					className: Object(a.a)(ce.a.adLinkWrapper, {
						[ce.a.ctaExperiment]: Pe
					})
				}, o.a.createElement(u.a, {
					post: he,
					adLinkContent: Ge,
					ctaExperimentDesign: Pe && "classic"
				})), o.a.createElement("div", {
					className: ce.a.flatlistContainer
				}, o.a.createElement(w.a, {
					className: ce.a.leftExpando,
					crosspost: Le,
					isExpanded: !!f,
					post: he,
					useMediaIcons: !1
				}), o.a.createElement(p.a, {
					className: ce.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: Te,
					model: he,
					onVoteClick: x
				}), o.a.createElement(T.a, {
					className: ce.a.flatlistSeparator
				}), !he.isSurveyAd && o.a.createElement(T.c, {
					className: ce.a.flatlist,
					currentUser: i,
					hasModFlairPerms: Re,
					hasModPostPerms: Me,
					hasModFullPerms: Ae,
					hostPostData: C,
					isOverlay: !!X,
					modModeEnabled: le,
					onClickInsightsButton: Xe,
					onIgnoreReports: ue,
					onOpenReportsDropdown: pe,
					post: he,
					shouldShowInsightsButton: Ce,
					showEditPost: Ue,
					showEditFlair: _e,
					tooltipType: X ? q.c.Lightbox : void 0,
					useFlatlistBreakpoints: Object(H.b)({
						editPost: !Fe,
						hide: !Fe,
						report: !Fe
					})
				})), o.a.createElement(L.d, null))), Object(se.a)(he, ce.a, Ee, f, Ie, I), ye && Ke && o.a.createElement(b.a, {
					className: ce.a.creatorStatsContainer,
					post: he,
					subreddit: ye,
					isOwnProfileStats: !0
				})));
				return o.a.createElement(G.b, null, Ye)
			});
			t.default = Object(X.a)(le)
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
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/higherOrderComponents/withClickTracking/index.tsx");
			const d = Object(a.c)({
					clickTrackingId: (e, t) => {
						let {
							comment: s
						} = t;
						return s.id
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
						className: s,
						comment: n,
						onClick: r,
						style: a
					} = this.props;
					return o.a.createElement("div", {
						className: Object(i.a)(s, `Comment ${n.id}`),
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: t => {
							!this.cancelClick && t.button < 2 && e(() => r && r(t, n))(t)
						},
						style: a
					}, t)
				}
			}
			t.a = l(Object(c.a)(m))
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
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/objectSelector/index.ts"),
				l = s("./node_modules/lodash/throttle.js"),
				m = s.n(l),
				u = s("./src/lib/fastdom/index.ts"),
				p = s("./src/reddit/components/CommentBodyExpander/index.m.less"),
				b = s.n(p);
			const {
				fbt: x
			} = s("./node_modules/fbt/lib/FbtPublic.js"), h = .75, f = 10 * c.L;
			class v extends o.a.Component {
				constructor(e) {
					super(e), this.commentElement = null, this.handleResize = m()(() => {
						if (this.state.expandToggled) return null;
						u.a.read(() => {
							(this.commentElement ? this.commentElement.offsetHeight : 0) <= this.props.height * (h + 1) && u.a.write(() => {
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
						onClick: this.onShowMore
					}, x._("see more", null, {
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
			var E = v,
				g = s("./node_modules/fbt/lib/FbtPublic.js"),
				_ = s("./node_modules/lodash/noop.js"),
				O = s.n(_),
				C = s("./src/lib/makeCommentsPageKey/index.ts"),
				y = s("./src/lib/makeDraftKey/index.ts"),
				k = s("./src/reddit/actions/comment/index.ts"),
				j = s("./src/reddit/actions/comment/authoring.ts"),
				I = s("./src/reddit/actions/comment/moderation.ts"),
				N = s("./src/reddit/actions/gold/modals.ts"),
				P = s("./src/reddit/actions/modal.ts"),
				S = s("./src/reddit/actions/reportFlow/index.ts"),
				w = s("./src/reddit/actions/tooltip.ts"),
				T = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				L = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				M = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				R = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				A = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				F = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				B = s("./src/reddit/components/ModModeReports/helpers.ts"),
				D = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				W = s("./src/reddit/contexts/InsideOverlay.tsx"),
				U = s("./src/reddit/contexts/PageLayer/index.tsx"),
				H = s("./src/reddit/helpers/correlationIdTracker.ts"),
				V = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				z = s("./src/reddit/helpers/overlay/index.ts"),
				q = s("./src/reddit/helpers/trackers/lightbox.ts"),
				G = s("./src/reddit/models/PostDraft/index.ts"),
				J = s("./src/reddit/models/Comment/index.ts"),
				K = s("./src/reddit/selectors/activeModalId.ts"),
				Z = s("./src/reddit/selectors/comments.ts"),
				X = s("./src/reddit/selectors/moderatorPermissions.ts"),
				Q = s("./src/reddit/selectors/posts.ts"),
				Y = s("./src/reddit/selectors/tooltip.ts"),
				$ = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				ee = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				te = s("./src/reddit/selectors/user.ts"),
				se = s("./src/reddit/components/OverflowMenu/index.tsx"),
				ne = s("./src/reddit/components/ReportFlow/index.tsx"),
				oe = s("./src/reddit/components/ReportFlow/new.tsx"),
				re = s("./src/reddit/components/ShareMenu/index.tsx"),
				ae = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ie = s("./src/reddit/controls/Dropdown/Row.tsx"),
				ce = s("./src/reddit/helpers/trackers/modTools.ts"),
				de = s("./src/reddit/layout/row/Inline/index.tsx"),
				le = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				me = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				ue = s("./src/reddit/icons/fonts/Report/index.tsx"),
				pe = s("./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less"),
				be = s.n(pe),
				xe = s("./src/lib/constants/icons.ts"),
				he = s("./src/lib/lessComponent.tsx"),
				fe = s("./src/reddit/icons/fonts/index.tsx"),
				ve = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx");
			const Ee = he.a.wrapped(se.b, "OverflowMenu", be.a),
				ge = he.a.wrapped(L.a, "ModToolsFlatlist", be.a),
				_e = he.a.wrapped(F.a, "ModActionsMenu", be.a),
				Oe = he.a.wrapped(ie.b, "DropdownRow", be.a),
				Ce = he.a.wrapped(de.a, "Flatlist", be.a),
				ye = he.a.button("Button", be.a),
				ke = Object(U.u)(),
				je = e => `Comment-${e}--Modal--DeleteComment`,
				Ie = e => `Distinguish--Dropdown--${e}`,
				Ne = (e, t) => `${e}--${t}-overflow-menu`,
				Pe = e => `View--Reports--${e}`,
				Se = Object(a.c)({
					activeTooltipId: Y.a,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(K.a)(e) === je(s.id)
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
						return Object(X.n)(e, {
							subredditId: s.subredditId
						})
					},
					currentUser: te.k,
					modModeEnabled: U.U,
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Q.B)(e, {
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
						var n, o;
						return (null === (o = null === (n = e.features) || void 0 === n ? void 0 : n.reportFlow) || void 0 === o ? void 0 : o.postOrCommentId) === s.id
					},
					subreddit: U.r,
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Q.V)(e, {
							postId: s.postId
						})
					},
					reportingRevampEnabled: ee.a,
					isTrueblockPCBlockeeEnabled: $.e
				});
			class we extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(ce.b)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleEdit = () => this.props.handleEdit(this.props.commentPermalink), this.handleIgnoreReports = () => {
						this.props.onIgnoreReports(), this.sendCommentReportEvent(this.props.comment.ignoreReports ? "restore_reports" : "ignore_reports")
					}, this.handleGild = async () => {
						const e = Object(H.d)(H.a.GildingFlow, !0);
						this.props.onGildClick(e);
						const {
							clickGildEvent: t
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(t(this.props.comment.id))
					}, this.handleModActionsMenu = () => this.props.sendEvent(Object(ce.b)("comment_mod_action_menu", this.props.comment.id)), this.handleOverflowMenuClick = () => this.props.sendEvent(Object(ce.b)("comment_overflow_menu", this.props.comment.id)), this.handleDelete = () => this.props.handleDelete(), this.handleReply = () => this.props.handleReply(this.props.commentPermalink), this.handleRestrictedButtonClick = () => {
						this.props.onToggleReportsDropdown(), this.sendCommentModEventWithName("comment_report_menu")
					}, this.handleSave = () => {
						this.props.comment.isSaved ? this.props.sendEvent(Object(ce.b)("unsave", this.props.comment.id)) : this.props.sendEvent(Object(ce.b)("save", this.props.comment.id)), this.props.onToggleSave()
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(ce.c)(e, this.props.comment.id)), this.sendCommentEventWithName = e => this.props.sendEvent(Object(q.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentEventWithNameShare = () => this.sendCommentEventWithName("share"), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(ce.b)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(ce.f)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? o.a.createElement(oe.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: ne.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					}) : o.a.createElement(ne.a, {
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
						modModeEnabled: n,
						showModTools: r
					} = this.props, a = Object(V.a)(s), i = !!t && t.displayText === e.author;
					if (r && a) return n ? o.a.createElement(ge, {
						comment: e,
						isCommentAuthor: i
					}) : o.a.createElement(_e, {
						dropdownId: `${e.id}-profile-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: this.handleModActionsMenu
					}, o.a.createElement(me.a, null), o.a.createElement(T.a, {
						comment: e,
						tooltipId: `${e.id}-profile-mod-actions-menu`
					}))
				}
				renderReportsDropdown() {
					const {
						comment: e,
						modModeEnabled: t,
						showModTools: s
					} = this.props, n = Object(B.a)(e);
					if (s && Object(B.c)(e) && !t) return o.a.createElement(M.a, {
						text: `${n}`,
						onClick: this.handleRestrictedButtonClick,
						selected: this.props.activeTooltipId === Pe(e.id),
						id: Pe(e.id)
					}, o.a.createElement(D.a, {
						model: e,
						onIgnoreReports: this.handleIgnoreReports,
						tooltipId: Pe(e.id)
					}), e.ignoreReports ? o.a.createElement(le.a, null) : o.a.createElement(ue.a, null))
				}
				renderDistinguishDropdown() {
					const {
						comment: e,
						currentUser: t,
						moderatorPermissions: s,
						modModeEnabled: n,
						onDistinguishComment: r,
						showModTools: a
					} = this.props, i = Object(V.a)(s), c = !!t && t.displayText === e.author, d = !!t && t.isEmployee;
					if (a && c && !e.bannedBy && (d || i && !n)) return o.a.createElement(M.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.activeTooltipId === Ie(e.id)
					}, o.a.createElement(ve.a, null), o.a.createElement(A.a, {
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
						commentPermalink: t,
						className: s,
						commentsPageKey: n,
						currentUser: r,
						deleteComment: a,
						isLoggedIn: i,
						isPendingDeletion: c,
						moderatorPermissions: d,
						postIsLocked: l,
						subreddit: m,
						toggleDeleteCommentModal: u,
						isTrueblockPCBlockeeEnabled: p
					} = this.props, b = Object(V.a)(d), x = !!r && r.displayText === e.author, h = (!l && !e.isLocked || b && i) && !(Object(J.g)(e) && p), f = r && e.isGildable && !(Object(J.g)(e) && p);
					return o.a.createElement("div", {
						className: s
					}, o.a.createElement(Ce, null, h && o.a.createElement(ye, {
						onClick: this.handleReply,
						disabled: c
					}, g.fbt._("Reply", null, {
						hk: "1xBqIs"
					})), f && o.a.createElement(ye, {
						onClick: this.handleGild
					}, g.fbt._("Give Award", null, {
						hk: "pQJYk"
					})), o.a.createElement(re.a, {
						dropdownId: `${n}--${e.id}-comment-share-menu`,
						permalink: t,
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == m ? void 0 : m.type
					}, o.a.createElement(ye, {
						onClick: this.sendCommentEventWithNameShare
					}, g.fbt._("share", null, {
						hk: "3YIXpa"
					}))), this.renderReportsDropdown(), o.a.createElement(Ee, {
						dropdownId: Ne(n, e.id),
						onClick: this.handleOverflowMenuClick
					}, !x && !c && o.a.createElement(Oe, {
						displayText: g.fbt._("report", null, {
							hk: "ad7CE"
						}),
						onClick: this.props.onReportClick
					}, o.a.createElement(fe.a, {
						name: xe.a.report
					})), o.a.createElement(Oe, {
						displayText: e.isSaved ? g.fbt._("Unsave", null, {
							hk: "4kQcAP"
						}) : g.fbt._("Save", null, {
							hk: "4yMsMq"
						}),
						isSelected: e.isSaved,
						onClick: this.handleSave
					}, e.isSaved ? o.a.createElement(fe.a, {
						name: xe.a.saved
					}) : o.a.createElement(fe.a, {
						name: xe.a.save
					})), x && o.a.createElement(Oe, {
						displayText: g.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						onClick: this.handleEdit
					}, o.a.createElement(fe.a, {
						name: xe.a.edit
					})), x && o.a.createElement(Oe, {
						displayText: g.fbt._("delete", null, {
							hk: "e8kvB"
						}),
						onClick: this.handleDelete
					}, o.a.createElement(fe.a, {
						name: xe.a.delete
					}))), this.props.isConfirmModalOpen && o.a.createElement(R.a, {
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
						onConfirm: a,
						toggleModal: u,
						trackClick: O.a,
						withOverlay: !0
					}), this.renderModTools(), this.renderDistinguishDropdown()), this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var Te = ke(Object(r.b)(Se, (e, t) => {
					let {
						comment: s,
						commentsPageKey: n
					} = t;
					return {
						deleteComment: () => n && e(Object(j.i)(s.id, s.postId)),
						onDistinguishComment: (t, n) => e(Object(I.b)(s.id, t, n)),
						onIgnoreReports: () => e(Object(I.g)(s.id)),
						onGildClick: t => e(Object(N.d)({
							correlationId: t,
							thingId: s.id
						})),
						onReportClick: () => e(Object(S.c)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(w.h)({
							tooltipId: Ie(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(w.h)({
							tooltipId: Pe(s.id)
						})),
						onToggleSave: () => e(Object(k.o)(s.id)),
						handleDelete: () => {
							e(Object(P.i)(je(s.id))), e(Object(w.h)({
								tooltipId: Ne(n, s.id)
							}))
						},
						handleEdit: t => {
							const n = Object(C.a)(s.postId, s.id, {}),
								o = {
									commentId: s.id,
									draftKey: Object(y.a)(G.c.edit, s.id),
									text: s.bodyMD || "",
									commentMode: s.media && s.media.rteMode,
									commentsPageKey: n
								};
							e(Object(z.a)(t)), e(Object(j.g)(o))
						},
						handleReply: t => {
							const n = Object(C.a)(s.postId, s.id, {}),
								o = {
									parentCommentId: s.id,
									commentsPageKey: n
								};
							e(Object(z.a)(t)), e(Object(j.h)(o))
						},
						toggleDeleteCommentModal: () => e(Object(P.i)(je(s.id)))
					}
				})(Object(ae.c)(Object(W.b)(we)))),
				Le = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Me = s("./src/reddit/components/RichTextJson/index.tsx"),
				Re = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				Ae = s("./src/reddit/selectors/commentSelector.ts"),
				Fe = s("./src/reddit/components/Comments/ProfileComment/index.m.less"),
				Be = s.n(Fe);
			const De = he.a.wrapped(Le.a, "TopMeta", Be.a),
				We = he.a.div("ProfileCommentWrapper", Be.a),
				Ue = he.a.div("CommentBody", Be.a),
				He = Object(r.b)(() => Object(a.c)({
					comment: (e, t) => Object(Ae.b)(e, t),
					flair: Z.e
				})),
				Ve = Object(d.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.a = He(e => {
				const {
					comment: t,
					commentsPageKey: s,
					flair: n,
					isExpanded: r,
					showFlatlist: a,
					showModTools: d
				} = e, l = s => o.a.createElement(Me.b, {
					className: s,
					content: Object(Re.a)(t),
					mediaMetadata: t.media && t.media.mediaMetadata,
					rtJsonElementProps: Ve(e),
					mediaProps: {
						alignLeft: !0,
						renderSmallMedia: !0
					}
				});
				return o.a.createElement(We, {
					className: Object(i.a)({
						[Be.a.isRemoved]: !!t.bannedBy
					})
				}, o.a.createElement(De, {
					collapsedBecauseCrowdControl: !1,
					collapsed: !1,
					comment: t,
					commentsPageKey: s,
					flair: n,
					renderedInOverlay: !1
				}), o.a.createElement("div", null, !t.isDeleted && o.a.createElement(Ue, null, r ? l() : o.a.createElement(E, {
					height: c.Xb,
					isExpanded: r
				}, l)), !t.isDeleted && a && o.a.createElement(Te, {
					comment: t,
					commentsPageKey: s,
					showModTools: d
				})))
			})
		},
		"./src/reddit/components/CreatorStats/loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
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
				return k
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Media/index.tsx"),
				u = s("./src/reddit/components/PostMeta/index.tsx"),
				p = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/SourceLink/index.tsx"),
				x = s("./src/reddit/components/Thumbnail/index.tsx"),
				h = s("./src/lib/constants/index.ts"),
				f = s("./src/reddit/contexts/Post/index.tsx"),
				v = s("./src/reddit/selectors/posts.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/CrosspostBox/index.m.less"),
				_ = s.n(g),
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
			const y = 8,
				k = 1,
				j = O.a.div("Container", _.a),
				I = O.a.div("PostMetaWrapper", _.a),
				N = O.a.wrapped(p.c, "PostTitle", _.a),
				P = O.a.div("FlatList", _.a),
				S = O.a.div("FlatItem", _.a),
				w = O.a.span("FlatListDotSpacer", _.a),
				T = O.a.wrapped(j, "LinkContainer", _.a),
				L = O.a.div("Content", _.a),
				M = O.a.div("ThumbnailContainer", _.a),
				R = Object(c.c)({
					isCurrentUserProfilePost: v.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== h.Qb.TOPIC),
					shouldOpenPostInNewTab: E.jb
				}),
				A = Object(a.b)(R);
			t.c = Object(f.b)(A(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: n,
					mediaProps: o,
					post: a,
					subredditOrProfile: i
				} = e;
				if (!a) return null;
				const c = {
						post: a,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: n,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: i,
						tooltipType: `CrosspostBox--${o.isListing}`
					},
					d = t;
				return a && !a.media ? r.a.createElement(T, {
					className: d
				}, r.a.createElement(L, null, r.a.createElement(I, null, r.a.createElement(u.a, c)), F(a), a.source && r.a.createElement(b.a, {
					post: a
				}), D(e)), U(e)) : r.a.createElement(j, {
					className: d
				}, r.a.createElement(I, null, r.a.createElement(u.a, c)), F(a), B(e), D(e))
			}));
			const F = e => r.a.createElement(N, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: p.b.Small
				}),
				B = e => {
					const {
						mediaProps: t,
						post: s
					} = e, n = {
						...t,
						post: s,
						crosspost: t.post
					};
					return r.a.createElement("div", null, r.a.createElement(m.a, C({}, n, {
						className: _.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				D = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return r.a.createElement(P, null, r.a.createElement(S, null, n.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [n.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), r.a.createElement(w, null), r.a.createElement(S, null, W(e)))
				},
				W = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: o
					} = t;
					return r.a.createElement(i.a, {
						"data-click-id": "comments",
						to: Object(d.a)(t.permalink, !0),
						target: s ? "_blank" : void 0
					}, n.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [n.fbt._plural(o, "comment count", Object(l.b)(o))], {
						hk: "xPYWL"
					}))
				},
				U = e => r.a.createElement(M, null, r.a.createElement(x.a, {
					post: e.post
				}))
		},
		"./src/reddit/components/Econ/Audio/MuteIcon.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => {
				let {
					className: t
				} = e;
				return o.a.createElement("svg", {
					className: t,
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
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingInner.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => {
				let {
					className: t,
					ringId: s
				} = e;
				return o.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "49",
					height: "49",
					viewBox: "0 0 49 49",
					fill: "none"
				}, o.a.createElement("rect", {
					opacity: "0.8",
					x: "1",
					y: "1",
					width: "46",
					height: "46",
					rx: "23",
					stroke: `url(#paint0_linear_284_569805-${s})`,
					strokeWidth: "2"
				}), o.a.createElement("defs", null, o.a.createElement("linearGradient", {
					id: `paint0_linear_284_569805-${s}`,
					x1: "-4.24542",
					y1: "0.154669",
					x2: "55.6993",
					y2: "1.87207",
					gradientUnits: "userSpaceOnUse"
				}, o.a.createElement("stop", {
					stopColor: "#FF538C"
				}), o.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingMiddle.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => {
				let {
					className: t,
					ringId: s
				} = e;
				return o.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "56",
					height: "56",
					viewBox: "0 0 56 56",
					fill: "none"
				}, o.a.createElement("rect", {
					opacity: "0.5",
					x: "0.934437",
					y: "1.15466",
					width: "54",
					height: "54",
					rx: "27",
					stroke: `url(#paint0_linear_284_569806-${s})`
				}), o.a.createElement("defs", null, o.a.createElement("linearGradient", {
					id: `paint0_linear_284_569806-${s}`,
					x1: "-5.50082",
					y1: "0.65467",
					x2: "63.1858",
					y2: "2.62253",
					gradientUnits: "userSpaceOnUse"
				}, o.a.createElement("stop", {
					stopColor: "#FF538C"
				}), o.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingOuter.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => {
				let {
					className: t,
					ringId: s
				} = e;
				return o.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "64",
					height: "64",
					viewBox: "0 0 64 64",
					fill: "none"
				}, o.a.createElement("rect", {
					opacity: "0.3",
					x: "0.684437",
					y: "0.904663",
					width: "62.5",
					height: "62.5",
					rx: "31.25",
					stroke: `url(#paint0_linear_284_569807-${s})`,
					strokeWidth: "0.5"
				}), o.a.createElement("defs", null, o.a.createElement("linearGradient", {
					id: `paint0_linear_284_569807-${s}`,
					x1: "-6.36412",
					y1: "0.654671",
					x2: "72.3133",
					y2: "2.90877",
					gradientUnits: "userSpaceOnUse"
				}, o.a.createElement("stop", {
					stopColor: "#FF538C"
				}), o.a.createElement("stop", {
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Econ/Audio/SpeakerRings/index.m.less"),
				i = s.n(a),
				c = s("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingInner.tsx"),
				d = s("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingMiddle.tsx"),
				l = s("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingOuter.tsx");
			t.a = e => {
				let {
					className: t,
					ringClassName: s,
					ringId: n,
					isAnimated: a = !1
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(i.a.ringsContainer, t, a ? i.a.animated : "")
				}, o.a.createElement(c.a, {
					ringId: n,
					className: Object(r.a)(i.a.innerRing, `${s}Inner`)
				}), o.a.createElement(d.a, {
					ringId: n,
					className: Object(r.a)(i.a.middleRing, `${s}Middle`)
				}), o.a.createElement(l.a, {
					ringId: n,
					className: Object(r.a)(i.a.outerRing, `${s}Outer`)
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
				classicView: "_3BVeVQiYsH7FAegU2VUmV-"
			}
		},
		"./src/reddit/components/Econ/Audio/UpcomingTalk/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/actions/profile/index.ts"),
				c = s("./src/reddit/components/UserIcon/index.tsx"),
				d = s("./src/reddit/selectors/user.ts"),
				l = s("./src/reddit/components/Econ/Audio/SpeakerRings/index.tsx"),
				m = s("./src/reddit/components/Econ/Audio/UpcomingTalk/index.m.less"),
				u = s.n(m),
				p = s("./src/reddit/controls/Button/index.tsx");
			var b = e => o.a.createElement("svg", {
				width: "15",
				height: "19",
				viewBox: "0 0 15 19",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M8.125 15.9701V17.7501H9.925V19.0001H5.08V17.7501H6.88V15.9701C5.18411 15.8688 3.58787 15.1352 2.40663 13.9141C1.22538 12.6931 0.545039 11.0734 0.5 9.3751H1.75C1.80295 10.8493 2.43767 12.2424 3.51528 13.2497C4.59288 14.2571 6.02562 14.7965 7.5 14.7501C8.97438 14.7965 10.4071 14.2571 11.4847 13.2497C12.5623 12.2424 13.197 10.8493 13.25 9.3751H14.5C14.4551 11.0726 13.7754 12.6916 12.5952 13.9125C11.415 15.1334 9.82 15.8676 8.125 15.9701ZM3.5 8.9481V4.0481C3.5 2.98723 3.92143 1.96981 4.67157 1.21967C5.42172 0.469523 6.43913 0.0480957 7.5 0.0480957C8.56087 0.0480957 9.57828 0.469523 10.3284 1.21967C11.0786 1.96981 11.5 2.98723 11.5 4.0481V8.9481C11.5 10.009 11.0786 11.0264 10.3284 11.7765C9.57828 12.5267 8.56087 12.9481 7.5 12.9481C6.43913 12.9481 5.42172 12.5267 4.67157 11.7765C3.92143 11.0264 3.5 10.009 3.5 8.9481ZM4.75 8.9481C4.75 9.67744 5.03973 10.3769 5.55546 10.8926C6.07118 11.4084 6.77065 11.6981 7.5 11.6981C8.22935 11.6981 8.92882 11.4084 9.44454 10.8926C9.96027 10.3769 10.25 9.67744 10.25 8.9481V4.0481C10.25 3.31875 9.96027 2.61928 9.44454 2.10355C8.92882 1.58783 8.22935 1.2981 7.5 1.2981C6.77065 1.2981 6.07118 1.58783 5.55546 2.10355C5.03973 2.61928 4.75 3.31875 4.75 4.0481V8.9481Z"
			}));
			const {
				fbt: x
			} = s("./node_modules/fbt/lib/FbtPublic.js"), h = () => o.a.createElement("span", {
				className: u.a.MicrophoneIcon
			}, o.a.createElement(b, null));
			var f = e => {
				let {} = e;
				const t = Object(r.e)(d.db);
				return o.a.createElement(p.t, {
					"data-testid": "audioroom-upcoming-start-talk",
					Icon: h,
					className: Object(a.a)(u.a.StartTalkButton, {
						[u.a.isNightMode]: t
					}),
					priority: p.c.Secondary,
					size: p.d.M,
					iconPosition: p.h.L,
					text: o.a.createElement("span", {
						className: u.a.StartTalkButtonText
					}, x._("Start talk", null, {
						hk: "46EMgy"
					})),
					onClick: () => {}
				})
			};
			const {
				fbt: v
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					author: t,
					postId: s,
					isClassicView: m = !1
				} = e;
				const p = Object(r.d)(),
					b = Object(r.e)(d.F),
					x = Object(r.e)(d.db),
					h = Object(r.e)(e => Object(d.Db)(e, {
						postId: s
					})),
					E = Object(r.e)(e => Object(d.Ab)(e, {
						userName: t
					}));
				Object(n.useEffect)(() => {
					E || p(Object(i.d)(t))
				}, [p, t, s, E]);
				const g = () => o.a.createElement("div", {
					"data-testid": "audioroom-avatar-upcoming",
					key: `audioPostAvatar--${t}`,
					className: Object(a.a)(u.a.hostAvatar, {
						[u.a.classicView]: m
					})
				}, o.a.createElement("div", {
					className: u.a.snoovatar
				}, o.a.createElement(c.a, {
					userName: t,
					isNSFW: !b,
					className: u.a.isImage
				})), o.a.createElement(l.a, {
					ringId: `${s}`,
					className: Object(a.a)(u.a.hostRings, {
						[u.a.nightMode]: x
					}),
					ringClassName: "hostRing"
				}));
				return m ? o.a.createElement(g, null) : o.a.createElement("div", {
					className: u.a.upcomingTalkCard,
					"data-testid": "audioroom-card-upcoming"
				}, o.a.createElement("div", {
					className: u.a.upcomingTalkContainer
				}, o.a.createElement(g, null), o.a.createElement("div", {
					className: u.a.upcomingTalkInfo
				}, o.a.createElement("div", {
					className: u.a.upcomingTalkLabel
				}, v._("Upcoming Talk", null, {
					hk: "464Rq3"
				})), o.a.createElement("div", {
					className: u.a.upcomingTalkHost
				}, "u/", t), h && o.a.createElement(f, null))))
			}
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
				return p
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "d", (function() {
				return x
			})), s.d(t, "a", (function() {
				return g
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/PostList/Placeholder.tsx"),
				d = s("./src/reddit/constants/postLayout.ts"),
				l = s("./src/reddit/components/EmptyProfile/EmptyListing.m.less"),
				m = s.n(l);
			var u = e => {
				let {
					children: t,
					className: s
				} = e;
				return r.a.createElement("div", {
					className: Object(i.a)(m.a.Wrapper, s)
				}, r.a.createElement(c.a, {
					className: m.a.BackgroundPlaceholder,
					isLoading: !1,
					layout: d.g.Classic
				}), r.a.createElement("div", {
					className: m.a.PrimaryText
				}, t))
			};
			var p = e => {
				let {
					className: t,
					profileName: s,
					timeSort: o = a.mc.ALL
				} = e;
				return r.a.createElement(u, {
					className: t
				}, o === a.mc.ALL ? n.fbt._("hmm... {profileName} hasn't commented on anything", [n.fbt._param("profileName", `u/${s}`)], {
					hk: "1MHn3t"
				}) : n.fbt._("hmm... {profileName} hasn't commented recently", [n.fbt._param("profileName", `u/${s}`)], {
					hk: "qN3uL"
				}))
			};
			var b = e => {
				let {
					className: t,
					profileName: s,
					timeSort: o = a.mc.ALL
				} = e;
				return r.a.createElement(u, {
					className: t
				}, o === a.mc.ALL ? n.fbt._("hmm... {profileName} hasn't posted anything", [n.fbt._param("profileName", `u/${s}`)], {
					hk: "28vBEd"
				}) : n.fbt._("hmm... {profileName} hasn't posted recently", [n.fbt._param("profileName", `u/${s}`)], {
					hk: "38GhqN"
				}))
			};
			var x = e => {
					let {
						className: t,
						text: s
					} = e;
					return r.a.createElement(u, {
						className: t
					}, s)
				},
				h = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				f = s("./src/reddit/components/EmptyProfile/forbidden.m.less"),
				v = s.n(f);
			const {
				fbt: E
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var g = () => r.a.createElement("div", {
				className: v.a.container
			}, r.a.createElement(h.a, {
				className: v.a.hideIcon
			}), r.a.createElement("h3", {
				className: v.a.title
			}, E._("You do not have permission to access this resource", null, {
				hk: "10cPyp"
			})), r.a.createElement("p", {
				className: v.a.subtitle
			}, E._("You can only look at your own saved posts and comments", null, {
				hk: "3pWGtF"
			})))
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				u = s("./src/reddit/helpers/path/index.ts"),
				p = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				x = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/models/Post/index.ts"),
				f = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				v = s("./src/telemetry/models/Outbound.ts"),
				E = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				g = s("./src/reddit/components/ExpandoButton/index.m.less"),
				_ = s.n(g);
			const O = Object(a.b)(null, (e, t) => ({
					toggle: () => e(Object(l.x)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.bb)(Object(u.b)(t.permalink), t.id))
				})),
				C = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 ? arguments[2] : void 0;
					const n = Object(c.a)(_.a.icon, _.a.hideOnHover);
					if (t) return r.a.createElement(b.a, {
						name: "crosspost",
						className: n
					});
					if (s.pollData) return r.a.createElement(b.a, {
						name: "poll_post",
						className: n
					});
					if (s.audioRoom) return r.a.createElement(b.a, {
						name: "audio",
						className: n
					});
					switch (e) {
						case x.o.GIFVIDEO:
							return r.a.createElement(b.a, {
								name: "gif_post",
								className: n
							});
						case x.o.IMAGE:
							return r.a.createElement(b.a, {
								name: "image_post",
								className: n
							});
						case x.o.TEXT:
						case x.o.RTJSON:
							return r.a.createElement(b.a, {
								name: "text_post",
								className: n
							});
						case x.o.VIDEO:
							return r.a.createElement(b.a, {
								name: "video_post",
								className: n
							});
						case x.o.GALLERY:
							return r.a.createElement(b.a, {
								name: "media_gallery",
								className: n
							});
						case x.o.EMBED:
						default:
							return r.a.createElement(b.a, {
								name: "embed",
								className: n
							})
					}
				};
			t.a = O(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: o,
					isCommentsPage: l,
					isExpanded: u,
					post: x,
					toggle: g,
					useMediaIcons: O
				} = e, y = s || x, k = Object(a.e)(f.b), j = Object(a.e)(f.c), I = t => {
					(k || j) && (t.preventDefault(), e.showModalOnPostLinkClick(y))
				}, N = y.media, P = Object(h.p)(x), S = o && !!s;
				return N && !P && !(("rtjson" === N.type || "text" === N.type || "liveaudio" === N.type) && !Object(p.a)(y)) || !!x.pollData ? r.a.createElement("button", {
					"aria-expanded": !!u,
					"aria-haspopup": !0,
					"aria-label": n.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(c.a)(t, _.a.outer),
					"data-click-id": u ? "expando_close" : "expando_open",
					"data-adclicklocation": E.a.MEDIA,
					onClick: g
				}, u ? r.a.createElement(b.a, {
					name: "collapse",
					className: _.a.icon
				}) : O ? r.a.createElement(r.a.Fragment, null, C(y.media && y.media.type, S, x), r.a.createElement(b.a, {
					name: "expand",
					className: Object(c.a)(_.a.icon, _.a.showOnHover)
				})) : r.a.createElement(b.a, {
					name: "expand",
					className: _.a.icon
				})) : y.source && y.source.url ? r.a.createElement(m.b, {
					"aria-label": n.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(c.a)(t, _.a.outer),
					"data-click-id": "expando_open",
					href: y.source.url,
					isSponsored: x.isSponsored,
					postId: x.id,
					source: x.source,
					sourceElement: l ? v.SourceElement.PostImage : v.SourceElement.ListingPostImage,
					target: "_blank"
				}, r.a.createElement(b.a, {
					name: "external_link",
					className: Object(c.a)(_.a.icon, _.a.outboundLinkIcon)
				})) : r.a.createElement(i.a, {
					"aria-label": n.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(c.a)(t, _.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(y.permalink),
					rel: "nofollow",
					onClick: I
				}, r.a.createElement(b.a, {
					name: "text_post",
					className: _.a.icon
				}))
			})
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
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/constants/componentSizes.ts"),
				d = s("./src/reddit/constants/postLayout.ts"),
				l = s("./src/reddit/constants/screenWidths.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less"),
				p = s.n(u),
				b = s("./src/lib/lessComponent.tsx");
			const x = Object(m.u)(),
				h = Object(a.c)({
					layout: m.S
				}),
				f = Object(r.b)(h);
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
							__html: `\n          .${p.a.Component} {\n            --layoutNavigation-considerateNav-offsetLeft: ${this.props.offsetLeft}px;\n          }\n        `
						}
					}), this.getLargeLayoutStyle())
				}
				getLargeLayoutStyle() {
					const e = this.props.offsetLeft + 2 * c.l + c.p + c.q,
						t = l.a - e,
						s = c.g - t,
						n = l.a + s + (this.props.bladeOpen ? c.a : 0);
					return this.props.layout !== d.g.Large ? null : o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n            @media (min-width: ${n}px) {\n              .${p.a.Component} {\n                left: calc((100% + var(--layoutNavigation-considerateNav-offsetLeft) - ${c.g+c.p+c.q}px) / 2);\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ${c.q}px) / 2);\n              }\n\n              .${p.a.Component}.${p.a["m-consider-sidebar"]} {\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ${c.g+c.p+c.q}px) / 2);\n              }\n            }\n          `
						}
					})
				}
				render() {
					const e = Object(i.a)(this.props.className, p.a.Component, {
						[p.a["m-consider-sidebar"]]: this.props.considerSidebar
					});
					return o.a.createElement("div", {
						className: p.a.Container
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
			t.a = x(f(b.a.wrapped(v, "Component", p.a)))
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
				a = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/components/RichTextJson/index.tsx"),
				c = s("./src/reddit/constants/postLayout.ts"),
				d = s("./src/reddit/hooks/useRecommendationPostContext.ts"),
				l = s("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				m = s.n(l);
			const u = Object(a.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = e => {
				let {
					content: t,
					layout: s,
					post: n
				} = e;
				return Object(d.a)().hideRecommendationContext ? null : o.a.createElement(i.b, {
					className: Object(r.a)(m.a.RecommendationContextStyles, {
						[m.a.classicLayout]: s === c.g.Classic,
						[m.a.compactLayout]: s === c.g.Compact,
						[m.a.largeLayout]: s === c.g.Large
					}),
					content: t,
					rtJsonElementProps: u(n),
					useExplicitTextColor: !0
				})
			}
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
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/components/PostContainer/index.tsx"),
				u = s("./src/reddit/components/PostTitle/index.tsx"),
				p = s("./src/reddit/components/PostTopMeta/index.tsx"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/contexts/Post/index.tsx"),
				h = s("./src/reddit/controls/InternalLink/index.tsx"),
				f = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				v = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				E = s.n(v),
				g = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				_ = s("./src/reddit/selectors/commentSelector.ts"),
				O = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				C = s("./src/reddit/components/OverviewCommentPost/index.m.less"),
				y = s.n(C);
			const {
				fbt: k
			} = s("./node_modules/fbt/lib/FbtPublic.js"), j = d.a.wrapped(h.default, "InternalLink", y.a), I = d.a.div("Wrapper", y.a), N = d.a.div("Row", y.a), P = d.a.wrapped(g.a, "CommentIcon", y.a), S = d.a.div("TitleContainer", y.a), w = d.a.div("PostTitleContainer", y.a), T = d.a.wrapped(u.c, "PostTitle", y.a), L = d.a.wrapped(p.d, "PostTopMeta", y.a), M = d.a.wrapped(p.a, "MetaSeparator", y.a), R = Object(r.b)(() => Object(a.c)({
				comment: _.b,
				isBlockingInterstitialEnabled: O.b,
				isBlockingInterstitialV2Enabled: O.b
			}), e => ({
				showModalOnAuthorLinkClick: t => e(Object(l.db)(t))
			})), A = e => {
				const {
					post: t,
					subredditOrProfile: s
				} = e;
				if (s) return o.a.createElement(n.Fragment, null, o.a.createElement(M, null), o.a.createElement(L, {
					metaSeparatorClassName: y.a.postTopMetaMetaSeparator,
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
					isBlockingInterstitialV2Enabled: r,
					showModalOnAuthorLinkClick: a
				} = e;
				if (!t) return null;
				const i = s || t.author,
					c = `/user/${i}/`;
				return o.a.createElement(j, {
					"data-click-id": "user",
					to: c,
					onClick: e => {
						(n || r) && (e.preventDefault(), a(c))
					}
				}, i)
			};
			t.a = Object(c.a)(Object(x.b)(R(Object(b.c)(e => {
				const {
					className: t,
					eventFactory: s,
					onClickPost: n,
					post: r
				} = e;
				return o.a.createElement(m.a, {
					className: Object(i.a)(E.a.compactPostStyles, y.a.overviewCommentPost, {
						[y.a.banned]: !!e.post.bannedBy,
						[y.a.reported]: !e.post.bannedBy && !!e.post.numReports && e.post.numReports > 0
					}, t),
					post: r,
					onClick: n,
					eventFactory: s
				}, o.a.createElement(I, {
					style: {
						background: Object(f.e)(e)
					}
				}, o.a.createElement(N, null, o.a.createElement(P, null), o.a.createElement(S, null, k._("{postAuthor} commented on {postTitle} {postMeta}", [k._param("postAuthor", F({
					...e
				})), k._param("postTitle", o.a.createElement(w, null, o.a.createElement(T, {
					outboundLinkClassName: y.a.postTitleOutboundLink,
					post: r,
					size: u.b.Small,
					titleClassName: y.a.postTitleTitle
				}))), k._param("postMeta", A(e))], {
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
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = s("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				d = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				l = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				m = s.n(l);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(c.a)(Object(a.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: n,
					onClick: a,
					post: c,
					redditStyle: l,
					theme: p,
					...b
				} = e;
				return o.a.createElement("div", u({
					className: Object(r.a)(m.a.backgroundWrapper, s),
					style: Object(i.c)(n, e),
					onClick: a,
					"data-adclicklocation": d.a.BACKGROUND
				}, b), t)
			}))
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
				addRemovalReason: "COGitU-ItwLZG_fP5rsdE",
				isRemoved: "_27iLVqax1FuPWTymkSkKAq",
				archivedIcon: "_2WSiH2JwZq4bXuvrDn-cgU",
				removalReason: "_16Ih3bzeELRlI6AWeW-nFy"
			}
		},
		"./src/reddit/components/PostBadges/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				p = s("./src/reddit/constants/posts.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/helpers/isRemoved.ts"),
				h = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				f = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				v = s("./src/reddit/icons/fonts/index.tsx"),
				E = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				g = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				O = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				C = s("./src/reddit/icons/fonts/Report/index.tsx"),
				y = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				k = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				j = s("./src/reddit/models/Post/index.ts"),
				I = s("./src/reddit/selectors/modQueue.ts"),
				N = s("./src/reddit/selectors/posts.ts"),
				P = s("./src/reddit/components/PostBadges/index.m.less"),
				S = s.n(P);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const T = e => r.a.createElement("span", w({
					className: S.a.removalReason
				}, e), e.children),
				L = () => n.fbt._("Archived", null, {
					hk: "zv3q3"
				}),
				M = () => n.fbt._("Comments are locked", null, {
					hk: "8HjJ9"
				}),
				R = e => n.fbt._("Moderator of {community name}", [n.fbt._param("community name", e)], {
					hk: "nJqIB"
				}),
				A = () => n.fbt._("Stickied post", null, {
					hk: "3qSaBs"
				}),
				F = () => n.fbt._("Pinned post", null, {
					hk: "2oxErI"
				}),
				B = (e, t, s) => {
					const n = `PostBadges--${e}--${t}`;
					return s ? `${n}--${s}` : n
				},
				D = Object(b.u)({
					isProfilePostListing: b.L,
					isSubreddit: b.O
				}),
				W = Object(i.c)({
					isModQueueDisplayEnabled: I.b,
					isPinned: (e, t) => {
						let {
							post: s
						} = t;
						return Object(N.q)(e, {
							postId: s.id
						})
					},
					modModeEnabled: b.U
				}),
				U = Object(a.b)(W, (e, t) => ({
					onHideTooltip: () => e(Object(l.i)()),
					onOpenRemovalReasonModal: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(s => e(s.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(l.f)({
						tooltipId: t
					}))
				}));
			t.a = D(U(e => {
				let {
					className: t,
					displayText: s,
					isSubreddit: a,
					inSubredditOrProfile: i,
					isCompactPinnedPost: l,
					isPinned: b,
					isProfilePostListing: I,
					modModeEnabled: N,
					onHideTooltip: P,
					onOpenRemovalReasonModal: D,
					onShowTooltip: W,
					post: U,
					tooltipType: H,
					isModQueueDisplayEnabled: V
				} = e;
				const z = {
						caretOnTop: !1
					},
					q = U.isRemoved && !U.modRemovalReason && !U.modNote && U.belongsTo.type === p.a.SUBREDDIT,
					G = B("Approve", U.id, H),
					J = B("Archived", U.id, H),
					K = B("Lock", U.id, H),
					Z = B("Mod", U.id, H),
					X = B("Remove", U.id, H),
					Q = B("Report", U.id, H),
					Y = B("Spam", U.id, H),
					$ = B("Sticky", U.id, H),
					ee = B("Pinned", U.id, H);
				return r.a.createElement("div", {
					className: t
				}, i && s && U.distinguishType === d.H.MODERATOR && r.a.createElement(o.Fragment, null, r.a.createElement(v.a, {
					name: "mod",
					isFilled: !0,
					className: Object(c.a)(S.a.icon, S.a.modIcon)
				}), r.a.createElement(m.c, w({
					tooltipId: Z,
					text: R(s)
				}, z))), U.isArchived && r.a.createElement(o.Fragment, null, r.a.createElement(g.a, {
					isFilled: !0,
					className: Object(c.a)(S.a.icon, S.a.archivedIcon),
					desc: L(),
					id: J,
					onMouseEnter: W(J),
					onMouseLeave: P
				}), r.a.createElement(m.c, w({
					tooltipId: J,
					text: L()
				}, z))), U.isLocked && !U.isSponsored && r.a.createElement(o.Fragment, null, r.a.createElement(_.a, {
					isFilled: !0,
					className: Object(c.a)(S.a.icon, S.a.lockIcon),
					desc: M(),
					id: K,
					onMouseEnter: W(K),
					onMouseLeave: P
				}), r.a.createElement(m.c, w({
					tooltipId: K,
					text: M()
				}, z))), a && Object(j.u)(U) && !l && r.a.createElement(o.Fragment, null, r.a.createElement(k.a, {
					isFilled: !0,
					className: Object(c.a)(S.a.icon, S.a.stickyIcon),
					desc: A(),
					id: $,
					onMouseEnter: W($),
					onMouseLeave: P
				}), r.a.createElement(m.c, w({
					tooltipId: $,
					text: A()
				}, z))), I && b && r.a.createElement(o.Fragment, null, r.a.createElement(k.a, {
					isFilled: !0,
					className: Object(c.a)(S.a.icon, S.a.stickyIcon),
					desc: F(),
					id: ee,
					onMouseEnter: W(ee),
					onMouseLeave: P
				}), r.a.createElement(m.c, w({
					tooltipId: ee,
					text: F()
				}, z))), !V && r.a.createElement(r.a.Fragment, null, (U.isApproved || U.approvedBy) && r.a.createElement(o.Fragment, null, r.a.createElement(E.a, {
					isFilled: !0,
					className: Object(c.a)(S.a.icon, S.a.approveIcon),
					desc: Object(h.a)(U),
					id: G,
					onMouseEnter: W(G),
					onMouseLeave: P
				}), r.a.createElement(m.c, w({
					tooltipId: G,
					text: Object(h.a)(U)
				}, z))), Object(x.a)(U) && r.a.createElement(o.Fragment, null, r.a.createElement(O.a, {
					isFilled: !0,
					className: Object(c.a)(S.a.icon, S.a.removeIcon),
					desc: Object(h.b)(U),
					id: X,
					onMouseEnter: W(X),
					onMouseLeave: P
				}), q && r.a.createElement(u.a, {
					className: S.a.addRemovalReason,
					onClick: D,
					text: n.fbt._("Add a removal reason", null, {
						hk: "1YDo3"
					})
				}), (U.modRemovalReason || U.modNote) && r.a.createElement(T, {
					onMouseEnter: W(X),
					onMouseLeave: P
				}, n.fbt._("Removal reason", null, {
					hk: "2DhKVZ"
				})), r.a.createElement(m.c, w({
					tooltipId: X,
					text: Object(h.b)(U)
				}, z))), U.bannedBy && U.isSpam && r.a.createElement(o.Fragment, null, r.a.createElement(y.a, {
					isFilled: !0,
					className: Object(c.a)(S.a.icon, S.a.spamIcon),
					desc: Object(h.d)(U),
					id: Y,
					onMouseEnter: W(Y),
					onMouseLeave: P
				}), r.a.createElement(m.c, w({
					tooltipId: Y,
					text: Object(h.d)(U)
				}, z)))), Object(f.a)(U) && !N && !V && r.a.createElement(o.Fragment, null, r.a.createElement(C.a, {
					isFilled: !0,
					className: Object(c.a)(S.a.icon, S.a.reportIcon),
					desc: Object(h.c)(U.numReports),
					id: Q,
					onMouseEnter: W(Q),
					onMouseLeave: P
				}), r.a.createElement(m.c, w({
					tooltipId: Q,
					text: Object(h.c)(U.numReports)
				}, z))))
			}))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/CrosspostBox/index.tsx"),
				a = s("./src/reddit/components/Media/index.tsx");

			function i(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? o.a.createElement(r.c, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						availableWidth: e.availableWidth ? e.availableWidth - 2 * r.b - 2 * r.a : void 0,
						crosspost: t,
						primaryContent: !1
					}
				}) : o.a.createElement(a.a, {
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/selectors/moderatorPermissions.ts"),
				i = s("./src/reddit/components/AwardBadges/index.tsx"),
				c = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				d = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = s("./src/reddit/components/PostBadges/index.tsx"),
				m = s("./src/reddit/components/PostTopMeta/index.tsx"),
				u = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				p = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				b = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				x = s("./src/reddit/constants/posts.ts"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				v = s("./src/reddit/helpers/trackers/post.ts"),
				E = s("./src/reddit/hooks/useClickSourceData.ts"),
				g = s("./src/reddit/models/Subreddit/index.ts"),
				_ = s("./src/reddit/components/PostMeta/index.m.less"),
				O = s.n(_);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: n,
					isCurrentUserProfilePost: _,
					isOverlay: C,
					isTopicPage: y,
					post: k,
					shouldShowSubscribeButton: j,
					subredditOrProfile: I,
					tooltipType: N
				} = e, P = !!y, S = Object(E.a)(), w = Object(r.e)(e => !!I && Object(a.i)(e, I.id));
				return o.a.createElement("div", {
					className: O.a.metaContainer
				}, !n && !k.isSponsored && I && o.a.createElement(c.a, {
					postId: k.id,
					subredditName: I.name
				}, o.a.createElement(p.a, {
					className: O.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: I.url,
						state: S
					}
				}, I.displayText)), I && I.isQuarantined && o.a.createElement(u.a, null), !n && !k.isSponsored && I && j && !_ && o.a.createElement(b.a, {
					className: O.a.SubscribeButton,
					getEventFactory: e => Object(v.k)(k.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: I.name,
						type: Object(g.h)(I) ? x.a.PROFILE : x.a.SUBREDDIT
					},
					postId: k.id,
					size: h.d.XXS,
					small: !0
				}), !n && !k.isSponsored && o.a.createElement(f.b, null), !n && !k.isSponsored && o.a.createElement(d.h, {
					type: k.belongsTo.type,
					id: k.belongsTo.id
				}), o.a.createElement(m.d, {
					className: O.a.postTopMeta,
					flairStyleTemplate: t,
					post: k,
					tooltipType: N,
					isModWithUserNotesPermissions: w
				}), o.a.createElement(l.a, {
					displayText: I ? I.displayText : null,
					inSubredditOrProfile: !!n,
					post: k,
					tooltipType: N
				}), !P && o.a.createElement(i.a, {
					hideCta: s,
					thing: k,
					tooltipType: C ? m.c.Lightbox : void 0
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/PostLeftRail/index.tsx"),
				i = s("./src/reddit/components/VerticalVotes/index.tsx"),
				c = s("./src/reddit/controls/Checkbox/index.tsx"),
				d = s("./src/reddit/helpers/isPost.ts"),
				l = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				m = s("./src/reddit/components/PostRailAndVotes/index.m.less"),
				u = s.n(m);
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: n = !1,
					isCheckboxSelected: m = !1,
					isCountAnimShadowTestEnabled: p,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: x,
					redditStyle: h,
					isOverlay: f,
					isVoteCountAnimation: v,
					postId: E,
					shouldShowUpvoteRatioOnHover: g
				} = e, _ = `upvote-button-${t.id}${f?"-overlay":""}`;
				return o.a.createElement(a.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(d.b)(t) && t.isSponsored,
					redditStyle: h
				}, n && o.a.createElement(c.a, {
					className: u.a.checkbox,
					isCheckboxSelected: m,
					toggleCheckbox: b
				}), o.a.createElement(i.a, {
					flairStyleTemplate: x,
					model: t,
					onVoteClick: s,
					redditStyle: h,
					upvoteTooltipId: _,
					isVoteCountAnimation: v,
					isCountAnimShadowTestEnabled: p,
					postId: E,
					scoreClassName: Object(r.a)(u.a.score, {
						[u.a.allowPointerEvents]: g
					}),
					shouldShowUpvoteRatioOnHover: g
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router/esm/react-router.js"),
				c = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/actions/snoovatarModal.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/helpers/trackers/snoovatar.ts"),
				p = s("./src/reddit/icons/svgs/Shirt/index.tsx"),
				b = s("./src/reddit/models/Vote/index.ts"),
				x = s("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				h = s.n(x);
			const {
				fbt: f
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(i.i)(e => {
				let {
					isHovercard: t,
					username: s,
					isAvatarPost: i,
					post: x,
					share: v
				} = e;
				const E = Object(l.b)(),
					g = Object(a.d)(),
					_ = x && x.id,
					O = x && x.voteState;
				let C = null;
				_ || (C = t ? "user_hovercard" : "profile_overview");
				const y = Object(o.useCallback)(() => E(Object(u.h)(t ? "user_hovercard" : "profile_overview", s)), [t, E, s]);
				return r.a.createElement(m.t, {
					onClick: () => {
						i ? (E(u.i), _ && O === b.a.notVoted && g(Object(c.kb)(_))) : y();
						const e = i ? "postify" : "copy";
						g(Object(d.b)({
							clickSource: C,
							share: v,
							source: e
						}))
					},
					className: Object(n.a)(h.a.snoovatarButton, h.a.snoovatarExtraPadding, h.a.compactButtonLayout, {
						[h.a.avatarPostifyButton]: i
					}),
					isFullWidth: !0
				}, r.a.createElement(p.a, {
					className: Object(n.a)({
						[h.a.shirtIcon]: !i,
						[h.a.avatarPostButtonShirtIcon]: i
					})
				}), f._("Try this Look", null, {
					hk: "dOuPb"
				}), r.a.createElement("div", {
					className: h.a.chevronIcon
				}))
			})
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less": function(e, t, s) {
			e.exports = {
				snoovatarButton: "_3F1tNW0P4Ff182mO_CefIg",
				avatarPostifyButton: "_2Viile0fcrruho_hQqpnUx",
				snoovatarExtraPadding: "_3DnDqV66Np6rVEiI8QK7kl",
				shirtIcon: "_3gYTHRBO1S_S5AOddgqD6Z",
				avatarPostButtonShirtIcon: "ARFP2bx6U967JwMoJ2Xr5",
				compactButtonLayout: "VFbNvXfZXUhRFiCTDHO6f",
				chevronIcon: "_12pWM-aURvVUuSrUyqfNZh"
			}
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
				a = s.n(r),
				i = s("./node_modules/lodash/throttle.js"),
				c = s.n(i),
				d = s("./node_modules/react/index.js"),
				l = s.n(d),
				m = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				p = s("./node_modules/reselect/es/index.js"),
				b = s("./src/config.ts"),
				x = s("./src/higherOrderComponents/asTooltip.tsx"),
				h = s("./src/lib/classNames/index.ts"),
				f = s("./src/lib/constants/index.ts"),
				v = s("./src/reddit/actions/tooltip.ts"),
				E = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				g = s("./src/reddit/constants/componentSizes.ts"),
				_ = s("./src/reddit/contexts/PageLayer/index.tsx"),
				O = s("./src/reddit/controls/Dropdown/index.tsx"),
				C = s("./src/reddit/controls/InternalLink/index.tsx"),
				y = s("./src/reddit/icons/fonts/index.tsx"),
				k = s("./src/reddit/models/Profile/index.ts"),
				j = s("./src/reddit/featureFlags/index.ts"),
				I = s("./src/reddit/selectors/experiments/d2xHistoryTab.ts"),
				N = s("./src/reddit/selectors/tooltip.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				S = s("./src/reddit/selectors/userPrefs.ts"),
				w = s("./src/server/helpers/profileRedirect.ts"),
				T = s("./src/reddit/components/ProfileNavMenu/index.m.less"),
				L = s.n(T);

			function M() {
				return (M = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const R = Object(_.u)({
					routeName: _.Z,
					privateListingType: _.j
				}),
				A = Object(p.c)({
					isDropdownMenuOpen: e => Object(N.a)(e) === B,
					isOwnProfile: (e, t) => Object(P.W)(e, t.profileName),
					isHistoryTabEnabled: I.a,
					isSnoovatar30Enabled: j.d.snoovatar30,
					isSubscriptionsPinned: S.c
				}),
				F = Object(x.a)(O.a),
				B = "profile-nav-menu-tooltip",
				D = g.g + g.q + g.p;
			var W;
			t.a = R(Object(m.b)(A, e => ({
					toggleTooltip: t => e(Object(v.h)({
						tooltipId: t
					}))
				}))(e => {
					let {
						isDropdownMenuOpen: t,
						isHistoryTabEnabled: s,
						isOwnProfile: n,
						privateListingType: r,
						profileName: i,
						routeName: m,
						toggleTooltip: u,
						isSnoovatar30Enabled: p,
						isSubscriptionsPinned: b,
						viewBlockedConsent: x
					} = e;
					const [f, v] = Object(d.useState)(!1), _ = Object(d.useRef)(null), [O, C] = Object(d.useState)([]), [k, j] = Object(d.useState)([]);
					return Object(d.useEffect)(() => {
						const e = V({
							isHistoryTabEnabled: s,
							profileName: i,
							isOwnProfile: n,
							routeName: m,
							privateListingType: r,
							isSnoovatar30Enabled: p,
							viewBlockedConsent: x
						});
						C(e.filter(e => e.position === W.MENU));
						const t = [],
							d = c()(() => {
								const s = document.documentElement.clientWidth - 2 * g.p,
									n = s > D ? D : s;
								let o = 42;
								t.forEach(t => {
									o += t.offsetWidth;
									const s = e.find(e => e.text.toString().toLowerCase() === t.text);
									s.position = o > n ? W.DROPDOWN : W.MENU
								});
								const r = e.filter(e => e.position === W.MENU);
								C(e => a()(r, e) ? e : r);
								const i = e.filter(e => e.position === W.DROPDOWN);
								j(e => a()(i, e) ? e : i), v(i.length > 0)
							}, 50);
						return o.a.read(() => {
							const e = _.current;
							e && (e.childNodes.forEach((e, s) => {
								t.push({
									text: e.textContent.toLowerCase(),
									offsetWidth: e.offsetWidth
								})
							}), d())
						}), window.addEventListener("resize", d), () => {
							window.removeEventListener("resize", d)
						}
					}, [s, i, n, m, r, p, x]), l.a.createElement("div", {
						className: L.a.container
					}, l.a.createElement(E.a, {
						bladeOpen: !1,
						offsetLeft: b ? g.t : 0,
						render: () => l.a.createElement(l.a.Fragment, null, l.a.createElement("div", {
							className: L.a.menuContainer,
							ref: _
						}, O.map(e => l.a.createElement(U, M({}, e, {
							key: e.key
						})))), f && l.a.createElement("button", {
							className: Object(h.a)(L.a.mainLink),
							id: B,
							onClick: () => u(B)
						}, l.a.createElement(y.a, {
							name: "overflow_horizontal"
						})), f && l.a.createElement(F, {
							className: L.a.dropdown,
							isOpen: t,
							tooltipId: B
						}, k.map(e => l.a.createElement(H, M({}, e, {
							key: e.key
						})))))
					}))
				})),
				function(e) {
					e.MENU = "menu", e.DROPDOWN = "dropdown"
				}(W || (W = {}));
			const U = e => {
					let {
						isActive: t,
						text: s,
						url: n,
						internal: o
					} = e;
					return o ? l.a.createElement(C.default, {
						className: Object(h.a)(L.a.mainLink, {
							[L.a.isActive]: t
						}),
						to: n
					}, s) : l.a.createElement("a", {
						className: Object(h.a)(L.a.mainLink, {
							[L.a.isActive]: t
						}),
						href: n
					}, s)
				},
				H = e => {
					let {
						isActive: t,
						internal: s,
						url: n,
						text: o
					} = e;
					return s ? l.a.createElement(u.a, {
						className: Object(h.a)(L.a.dropdownLink, {
							[L.a.isActive]: t
						}),
						to: n,
						rel: "nofollow noopener noreferrer",
						role: "listitem"
					}, o) : l.a.createElement("a", {
						className: Object(h.a)(L.a.dropdownLink),
						href: n,
						rel: "nofollow noopener noreferrer",
						role: "listitem",
						target: "_blank"
					}, o)
				},
				V = e => {
					let {
						profileName: t,
						isOwnProfile: s,
						routeName: o,
						privateListingType: r,
						isHistoryTabEnabled: a,
						isSnoovatar30Enabled: i,
						viewBlockedConsent: c
					} = e;
					const d = s ? [{
						internal: !0,
						isActive: o === f.Qb.PROFILE_PRIVATE && r === k.b.Saved,
						key: "profile.mainmenu.saved",
						text: n.fbt._("Saved", null, {
							hk: "2w1YRh"
						}),
						url: `/user/${t}/saved/`,
						position: W.MENU
					}, {
						internal: !0,
						isActive: o === f.Qb.PROFILE_PRIVATE && r === k.b.Hidden,
						key: "profile.mainmenu.hidden",
						text: n.fbt._("Hidden", null, {
							hk: "225tka"
						}),
						url: `/user/${t}/hidden/`,
						position: W.MENU
					}, {
						internal: !0,
						isActive: o === f.Qb.PROFILE_PRIVATE && r === k.b.Upvoted,
						key: "profile.mainmenu.upvoted",
						text: n.fbt._("Upvoted", null, {
							hk: "RKwFZ"
						}),
						url: `/user/${t}/upvoted/`,
						position: W.MENU
					}, {
						internal: !0,
						isActive: o === f.Qb.PROFILE_PRIVATE && r === k.b.Downvoted,
						key: "profile.mainmenu.downvoted",
						text: n.fbt._("Downvoted", null, {
							hk: "2F9IL4"
						}),
						url: `/user/${t}/downvoted/`,
						position: W.MENU
					}] : [];
					s ? (d.push({
						internal: !0,
						isActive: o === f.Qb.PROFILE_PRIVATE && r === k.b.ReceivedGildings,
						key: "profile.mainmenu.receiverGildings",
						text: n.fbt._("Awards received", null, {
							hk: "iwLBV"
						}),
						url: `/user/${t}/gilded/`,
						position: W.MENU
					}), d.push({
						internal: !0,
						isActive: o === f.Qb.PROFILE_PRIVATE && r === k.b.GivenGildings,
						key: "profile.mainmenu.givenGildings",
						text: n.fbt._("Awards given", null, {
							hk: "2UPYZc"
						}),
						url: `/user/${t}/gilded/given/`,
						position: W.MENU
					})) : d.push({
						internal: !1,
						isActive: !1,
						key: "profile.mainmenu.gildedLegacy",
						text: n.fbt._("Awards received (legacy)", null, {
							hk: "1YgfYU"
						}),
						url: `${b.a.oldRedditUrl}/user/${t}/gilded/`,
						position: W.MENU
					});
					const l = a && s ? [{
							internal: !0,
							isActive: o === f.Qb.PROFILE_PRIVATE && r === k.b.History,
							key: "profile.mainmenu.history",
							text: n.fbt._("History", null, {
								hk: "1fv1wp"
							}),
							url: `/user/${t}/history/`,
							position: W.MENU
						}] : [],
						m = i ? [{
							internal: !0,
							isActive: o === f.Qb.PROFILE_SNOOBUILDER,
							key: "profile.mainmenu.snoobuilder",
							text: n.fbt._("Snoobuilder", null, {
								hk: "3SSKff"
							}),
							url: `/user/${t}/snoo/`,
							position: W.MENU
						}] : [],
						u = c ? "?consent=true" : "";
					return [{
						internal: !0,
						isActive: o === f.Qb.PROFILE_OVERVIEW,
						key: "profile.mainmenu.overview",
						text: n.fbt._("Overview", null, {
							hk: "2IBbqy"
						}),
						url: `/user/${t}/${u}`,
						position: W.MENU
					}, {
						internal: !0,
						isActive: o === f.Qb.PROFILE_POSTS,
						key: "profile.mainmenu.posts",
						text: n.fbt._("Posts", null, {
							hk: "a1BoF"
						}),
						url: `${Object(w.a)(t)}/${u}`,
						position: W.MENU
					}, {
						internal: !0,
						isActive: o === f.Qb.PROFILE_COMMENTS,
						key: "profile.mainmenu.comments",
						text: n.fbt._("Comments", null, {
							hk: "2VwjOc"
						}),
						url: `/user/${t}/comments/${u}`,
						position: W.MENU
					}, ...m, ...l, ...d]
				}
		},
		"./src/reddit/components/ProfileSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/components/SidebarContainer/index.tsx"),
				c = s("./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx"),
				d = s("./src/reddit/components/SidebarProfileMultireddits/index.tsx"),
				l = s("./src/reddit/components/SidebarProfilePowerupContributions/index.tsx"),
				m = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				u = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				p = s("./src/reddit/components/SidebarTrophyCase/index.tsx"),
				b = s("./src/reddit/components/Widgets/ConnectedAccounts/index.tsx"),
				x = s("./src/reddit/constants/posts.ts"),
				h = s("./src/reddit/selectors/experiments/econ/index.ts");
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
					const t = Object(a.e)(e => Object(h.j)(e));
					return r.a.createElement(i.a, {
						className: e.className
					}, r.a.createElement(f, {
						profileName: e.profileName,
						isOverlay: e.isOverlay
					}), r.a.createElement(b.a, {
						subredditOrProfile: {
							name: e.profileName,
							type: x.a.PROFILE
						}
					}), r.a.createElement(c.a, {
						profileName: e.profileName
					}), r.a.createElement(d.a, {
						profileName: e.profileName
					}), !t && r.a.createElement(m.a, null, r.a.createElement(l.a, {
						profileName: e.profileName
					})), r.a.createElement(m.a, null, r.a.createElement(p.a, {
						profileName: e.profileName
					})), r.a.createElement(u.a, {
						hideBackToTop: e.hideBackToTop
					}))
				};
			v.defaultProps = {
				isOverlay: !1
			}, t.a = v
		},
		"./src/reddit/components/SidebarExpandableList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/take.js"),
				r = s.n(o),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = s("./src/reddit/layout/row/Inline/index.tsx"),
				p = s("./src/reddit/layout/row/RightAlign/index.tsx");
			const b = e => {
				const {
					className: t,
					hasMoreItems: s,
					headerButton: o,
					items: c,
					minimizedLength: b,
					onLoadMore: x,
					pending: h,
					renderItem: f,
					title: v
				} = e, [E, g] = Object(a.useState)(!1), _ = c.length > b || s, O = (!_ || E ? c : r()(c, b)).map(e => f({
					item: e
				})), C = () => {
					E || g(!0), E && !s && g(!1), s && x && x()
				};
				return i.a.createElement(d.a, {
					className: t,
					headerButton: o,
					title: v
				}, O, i.a.createElement(u.a, null, i.a.createElement(p.a, null, _ && (() => {
					const e = !E || s && x ? n.fbt._("View More", null, {
						hk: "1RK8uA"
					}) : n.fbt._("View Less", null, {
						hk: "1M72mK"
					});
					return i.a.createElement(l.r, {
						onClick: C
					}, h ? i.a.createElement(m.a, {
						sizePx: 10
					}) : e)
				})())))
			};
			b.defaultProps = {
				minimizedLength: c.Wb
			}, t.a = b
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
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/profile/index.ts"),
				d = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				m = s("./src/reddit/models/User/index.ts"),
				u = s("./src/reddit/selectors/profile.ts"),
				p = s("./src/reddit/selectors/subscriptions.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less"),
				h = s.n(x);
			const f = Object(i.c)({
					currentUser: b.k,
					moderated: u.o,
					subscriptions: p.e,
					hasMoreModerated: u.e,
					loadMorePending: u.b
				}),
				v = Object(a.b)(f, (e, t) => ({
					onLoadMoreGqlModeratedSubreddits: () => e(Object(c.c)(t.profileName))
				}), (e, t, s) => ({
					...s,
					...e,
					...t,
					onLoadMore: () => {
						e.hasMoreModerated && t.onLoadMoreGqlModeratedSubreddits()
					}
				})),
				E = e => {
					let {
						item: t
					} = e;
					return r.a.createElement(l.a, {
						id: t.id,
						iconUrl: t.iconUrl,
						isNSFW: t.isNSFW,
						key: `${t.type}-${t.name}`,
						name: t.name,
						subscribers: t.subscribers,
						isSubscribed: t.isSubscribed,
						widget: void 0,
						sendEvent: () => void 0,
						type: t.type
					})
				};
			t.a = v(e => {
				const {
					currentUser: t,
					moderated: s,
					profileName: o,
					subscriptions: a,
					hasMoreModerated: i,
					onLoadMore: c,
					loadMorePending: l
				} = e;
				if (0 === s.length) return null;
				const u = t && Object(m.e)(t).toLowerCase() === o.toLowerCase() ? n.fbt._("You're a moderator of these communities", null, {
						hk: "2YoCxy"
					}) : n.fbt._("Moderator of these communities", null, {
						hk: "msvzk"
					}),
					p = function(e, t) {
						return e.map(e => ({
							name: e.name,
							subscribers: e.subscribers,
							iconUrl: e.icon.url,
							isNSFW: e.isNSFW,
							isSubscribed: t.has(e.id),
							type: "user" === e.type ? "profile" : "subreddit",
							sendEvent: () => void 0
						}))
					}(s, new Set(a));
				return r.a.createElement(d.a, {
					className: h.a.container,
					title: u,
					items: p,
					renderItem: E,
					hasMoreItems: i,
					onLoadMore: c,
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
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/profile/index.ts"),
				l = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				m = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				u = s("./src/reddit/selectors/profile.ts"),
				p = s("./src/reddit/components/SidebarProfileMultireddits/index.m.less"),
				b = s.n(p);
			const x = Object(c.c)({
					hasMoreMultireddits: u.f,
					loadMorePending: u.c,
					multireddits: u.p
				}),
				h = Object(a.b)(x, (e, t) => ({
					onLoadMoreMultireddits: () => e(Object(d.i)(t.profileName, !0))
				}), (e, t, s) => ({
					...s,
					...e,
					...t,
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
					}, t.subredditCount && n.fbt._({
						"*": "{communities} communities",
						_1: "1 community"
					}, [n.fbt._plural(t.subredditCount, "communities")], {
						hk: "1eyxrS"
					}))))
				};
			t.a = h(e => {
				const {
					hasMoreMultireddits: t,
					loadMorePending: s,
					multireddits: o,
					onLoadMore: a,
					profileName: i
				} = e;
				return o && o.length ? r.a.createElement(m.a, null, r.a.createElement(l.a, {
					hasMoreItems: t,
					items: o,
					onLoadMore: a,
					pending: s,
					renderItem: f,
					title: n.fbt._("Public custom feeds by u/{profileName}", [n.fbt._param("profileName", i)], {
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
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				d = s("./src/reddit/components/SubredditIcon/index.tsx"),
				l = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				m = s("./src/reddit/selectors/gold/powerups/index.ts"),
				u = s("./src/reddit/selectors/user.ts"),
				p = s("./node_modules/reselect/es/index.js"),
				b = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				x = s.n(b);
			const h = Object(p.c)({
				subreddits: function(e, t) {
					let {
						profileName: s
					} = t;
					const n = Object(u.Ab)(e, {
							userName: s
						}),
						o = Object(m.e)(e);
					return (n && o ? o[n.id] : null) || []
				}
			});

			function f(e) {
				let {
					item: t
				} = e;
				const s = t.subredditInfo,
					o = r.a.createElement(d.b, {
						iconUrl: s.styles.icon,
						className: x.a.subredditIcon
					});
				return r.a.createElement(l.a, {
					className: x.a.communityItemContainer,
					key: s.id
				}, r.a.createElement("div", {
					className: x.a.iconContainer
				}, r.a.createElement(i.a, {
					to: s.path
				}, o)), r.a.createElement("div", {
					className: x.a.communityDescription
				}, r.a.createElement("div", {
					className: x.a.communityName
				}, r.a.createElement(i.a, {
					to: s.path
				}, s.prefixedName)), r.a.createElement("div", {
					className: x.a.subscriberCount
				}, n.fbt._({
					"*": "{number} Powerups",
					_1: "1 Powerup"
				}, [n.fbt._plural(t.powerups, "number")], {
					hk: "3fbcDy"
				}))))
			}
			t.a = Object(a.b)(h)(e => {
				let {
					subreddits: t
				} = e;
				return function(e) {
					return e.length > 0 && e.every(e => e.subredditInfo)
				}(t) ? r.a.createElement(c.a, {
					title: n.fbt._("Supports Communities", null, {
						hk: "1vCNdZ"
					}),
					items: t,
					renderItem: f
				}) : null
			})
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
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				d = s("./src/reddit/controls/Typography/index.tsx"),
				l = s("./src/reddit/selectors/telemetry.ts");
			var m = s("./src/reddit/hooks/useTracking.ts"),
				u = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				p = s("./node_modules/lodash/isEqual.js"),
				b = s.n(p);
			const x = Object(i.b)(i.d, b.a);
			var h = s("./src/reddit/selectors/profile.ts"),
				f = s("./src/reddit/components/SidebarTrophyCase/index.m.less"),
				v = s.n(f),
				E = s("./src/lib/lessComponent.tsx"),
				g = s("./src/lib/opener/index.ts");
			const _ = Object(i.c)({
				trophyCase: (e, t) => {
					let {
						profileName: s
					} = t;
					return Object(h.s)(e, Object(h.n)(e, s))
				}
			}, x);
			t.a = Object(a.b)(_)(e => {
				let {
					trophyCase: t
				} = e;
				return 0 === t.length ? null : r.a.createElement(c.a, {
					title: n.fbt._("Trophy Case ({trophyCount})", [n.fbt._param("trophyCount", `${t.length}`)], {
						hk: "mzh3V"
					}),
					items: t,
					renderItem: I
				})
			});
			const O = E.a.wrapped(u.a, "TrophyItem", v.a),
				C = E.a.div("TrophyIcon", v.a),
				y = E.a.h5("TrophyName", v.a),
				k = E.a.div("TrophyContent", v.a),
				j = E.a.wrapped(d.c, "Description", v.a),
				I = e => {
					let {
						item: t
					} = e;
					const s = Object(m.a)(),
						n = r.a.createElement("img", {
							src: t.icon,
							title: t.name
						});
					return r.a.createElement(O, {
						key: t.id
					}, r.a.createElement(C, null, t.url ? r.a.createElement("a", {
						target: g.d.BLANK,
						rel: g.c,
						href: t.url,
						onClick: () => s((e => t => ({
							source: "trophy",
							action: "click",
							noun: "trophy",
							...l.o(t),
							actionInfo: Object(l.d)(t, {
								paneName: "profile_about"
							}),
							profile: l.T(t),
							trophy: e
						}))({
							id: t.id,
							name: t.name
						}))
					}, n) : n), r.a.createElement(k, null, r.a.createElement(y, null, t.name), r.a.createElement(j, null, t.description)))
				}
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
			s.d(t, "a", (function() {
				return I
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/ads/index.ts"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/getShortenedLink.ts"),
				c = s("./node_modules/fbt/lib/FbtPublic.js");
			const d = 16765092,
				l = "https://i.redd.it/snoovatar",
				m = "snoovatars",
				u = "avatars";
			var p = s("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				b = s("./src/reddit/components/AvatarPost/index.m.less"),
				x = s.n(b);
			var h = e => {
					let {
						sourceUrl: t,
						username: s,
						post: n
					} = e;
					const [r, a] = new URL(t).pathname.split("/").slice(2), i = function(e) {
						return `${l}/${+e>=d?u:m}/shared/${e}.png`
					}(a);
					return o.a.createElement("div", {
						className: x.a.avatarPostContainer
					}, o.a.createElement("img", {
						className: x.a.avatarPostImage,
						src: i,
						alt: c.fbt._("User Shared Avatar", null, {
							hk: "FDRaA"
						})
					}), o.a.createElement(p.a, {
						isHovercard: !1,
						username: s,
						isAvatarPost: !0,
						post: n,
						share: {
							username: r,
							avatarId: a
						}
					}))
				},
				f = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				v = s("./src/reddit/hooks/useIsAvatarPost.ts"),
				E = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				g = s("./src/reddit/components/SourceLink/index.m.less"),
				_ = s.n(g),
				O = s("./src/lib/lessComponent.tsx"),
				C = s("./src/telemetry/models/Outbound.ts"),
				y = s("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts");
			const k = O.a.wrapped(E.a, "OutboundLinkIcon", _.a),
				j = O.a.div("SourceLinkWrapper", _.a);

			function I(e) {
				const {
					className: t,
					post: s,
					isCommentsPage: n,
					pageLayer: c
				} = e, d = n ? C.SourceElement.PostLink : C.SourceElement.ListingPostLink, {
					source: l
				} = s, m = s.isSponsored || Object(r.u)(c), u = Object(v.a)(s), p = Object(y.a)();
				return !l || p ? null : u ? o.a.createElement(h, {
					sourceUrl: l.url,
					username: s.author,
					post: s
				}) : o.a.createElement(j, {
					className: Object(a.a)({
						[_.a["m-comment"]]: n
					}, t)
				}, o.a.createElement(f.a, {
					href: l.url,
					isSponsored: m,
					postId: s.id,
					source: l,
					sourceElement: d
				}, Object(i.a)({
					...s,
					isSponsored: m
				}), o.a.createElement(k, {
					isFilled: !0
				})))
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, s) {
			e.exports = {
				ButtonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				buttonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				Checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				Plus: "_2zcGm9WDxG67GYyNNvHzlA",
				plus: "_2zcGm9WDxG67GYyNNvHzlA"
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				a = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				i = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				d = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
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
			const u = s("./src/lib/lessComponent.tsx").a.div("ButtonSpacer", l.a);
			class p extends o.a.Component {
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
					}, this.renderUnsubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: s,
							onUnsubscribe: n,
							postId: r,
							sendEvent: a,
							size: d,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: u,
							getEventFactory: p,
							onSubscriptionsRequested: b,
							...x
						} = this.props, h = this.state.isHovered, f = Object(c.a)({
							type: t.type,
							key: h ? "unsubscribe" : "subscribed"
						});
						return o.a.createElement(i.t, m({
							className: e,
							priority: x.shouldReverseColor ? i.c.Primary : i.c.Secondary,
							text: f,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: i.d.XSP
						}, x))
					}, this.renderSubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: s,
							onUnsubscribe: n,
							postId: r,
							sendEvent: a,
							size: d,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: u,
							getEventFactory: p,
							onSubscriptionsRequested: b,
							...x
						} = this.props, h = Object(c.a)({
							type: t.type,
							key: "subscribe"
						});
						return o.a.createElement(i.t, m({
							className: e,
							priority: x.shouldReverseColor ? i.c.Secondary : i.c.Primary,
							size: i.d.XSP,
							text: h,
							onClick: this.onClick
						}, x, {
							id: `subscribe-button-${r}`,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						}))
					}, this.state = {
						hasJustSubscribed: !1,
						isHovered: !1
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						small: e = !1,
						userIsSubscriber: t,
						doNotHideOtherSubscribeButtons: s
					} = this.props;
					return t ? this.state.hasJustSubscribed || s ? this.renderUnsubscribeButton() : e ? null : o.a.createElement(u, null) : this.renderSubscribeButton()
				}
			}
			t.a = Object(a.a)(Object(r.c)(p))
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
				return l
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/SEOTitle/index.tsx"),
				i = s("./src/reddit/components/Widgets/Base/index.m.less"),
				c = s.n(i);
			const d = r.a.div("WidgetBackground", c.a),
				l = r.a.wrapped(e => {
					let {
						children: t,
						...s
					} = e;
					return o.a.createElement("div", s, o.a.createElement(a.b, {
						type: a.a.Widget
					}, t))
				}, "WidgetHeader", c.a);
			t.b = e => o.a.createElement("div", {
				className: e.className
			}, o.a.createElement(d, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return j
			})), s.d(t, "a", (function() {
				return N
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/Flair/index.tsx"),
				m = s("./src/reddit/components/SubscribeButton/index.tsx"),
				u = s("./src/reddit/actions/subscription/index.ts");
			var p = Object(a.b)(null, (e, t) => {
					const s = t.widget.id || void 0;
					return {
						onSubscribe: () => e(u.d([t.identifier], !0, s)),
						onSubscriptionsRequested: () => e(u.e()),
						onUnsubscribe: () => e(u.d([t.identifier], !1, s))
					}
				})(s("./src/reddit/components/SubscribeButton/Base.tsx").a),
				b = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				x = s("./src/reddit/constants/componentSizes.ts"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				v = s("./src/reddit/icons/fonts/index.tsx"),
				E = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				g = s("./src/reddit/models/Flair/index.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				C = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				y = s.n(C);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const j = e => r.a.createElement(b.a, {
					className: Object(d.a)(y.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, r.a.createElement("div", {
					className: y.a.container
				}, e.isLoading ? r.a.createElement(f.a, {
					className: y.a.loadingIcon,
					sizePx: 32
				}) : r.a.createElement(r.a.Fragment, null, e.isError ? r.a.createElement("p", {
					className: y.a.errorMsg
				}, e.errorMsg || n.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : r.a.createElement(r.a.Fragment, null, e.communities.map(t => r.a.createElement(N, k({
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
				})))), e.bottomButtonText && e.onBottomButtonClick && r.a.createElement(h.t, {
					className: y.a.bottomButton,
					kind: h.b.Button,
					priority: h.c.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				I = Object(c.c)({
					hideNSFWPref: _.F,
					nightmode: _.db
				}),
				N = Object(a.b)(I)(e => r.a.createElement("div", {
					className: Object(d.a)(y.a.communityItemContainer, {
						[y.a.withBottomFlair]: e.isNSFW
					})
				}, r.a.createElement(E.a, {
					className: y.a.communityItemExpandCenter,
					widthRight: x.s
				}, r.a.createElement("div", {
					className: y.a.iconContainer
				}, e.communityIcon || e.iconUrl ? r.a.createElement("img", {
					className: y.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : r.a.createElement(v.a, {
					name: "community",
					isFilled: !e.nightmode,
					className: Object(d.a)(y.a.defaultCommunityIcon, {
						[y.a.mNightmode]: e.nightmode
					})
				})), r.a.createElement("div", {
					className: y.a.communityDescriptionContainer
				}, r.a.createElement(i.a, {
					className: y.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(O.b)(e.name, e.type),
					to: Object(O.a)(e.name, e.type)
				}, Object(O.b)(e.name, e.type)), r.a.createElement("div", {
					className: y.a.communityInfoContainer
				}, !!e.subscribers && r.a.createElement("p", {
					className: y.a.subscriberCount
				}, n.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [n.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && r.a.createElement(l.b, {
					className: y.a.nsfwFlair,
					flair: {
						type: g.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? r.a.createElement(f.a, {
					className: Object(d.a)(y.a.communityCta, y.a.smallLoadingIcon),
					sizePx: 12
				}) : r.a.createElement(h.t, {
					className: y.a.communityCta,
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? r.a.createElement(p, {
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
					className: y.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/posts.ts"),
				o = s("./src/reddit/helpers/name/index.ts");

			function r(e, t) {
				return (t === n.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function a(e, t) {
				return t === n.a.PROFILE ? Object(o.e)(e) : Object(o.d)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, s) {
			e.exports = {
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
				communityItemExpandCenter: "oP8RhN61VEXVL8e6SIxK_",
				communityDescriptionContainer: "_3jEbHrUmHtMsZcfN-z_GpD",
				communityDescription: "_2IANzA2n-6eA5T8Tz0TEVE",
				withBottomFlair: "_14n0HZvxiP1OqS51zI7Sy3",
				communityName: "_3BFvyrImF3et_ZF21Xd8SC",
				container: "_3-1jy8hD77zNJUdEMxDrXC",
				isTruncated: "_3idiZ5DFVkbhhKjDBTQeq-",
				nsfwFlair: "_3wQmfxeBovEB3M5pcwt-pv",
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
				leftAligned: "T4XQNeAXcz6U72tv0Z5Z6",
				defaultCommunityIcon: "_1yiD4Wxo0icHUUftoUrBiM",
				mNightmode: "_1yugRWTZEox55lEcLyzzAo"
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
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/components/Widgets/Base/index.tsx"),
				l = s("./src/reddit/constants/posts.ts"),
				m = s("./src/reddit/helpers/trackers/profileSettings.ts"),
				u = s("./src/reddit/models/ExternalAccount/index.ts"),
				p = s("./src/reddit/selectors/externalAccount.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				x = s("./node_modules/fbt/lib/FbtPublic.js"),
				h = s("./src/reddit/controls/OutboundLink/index.tsx"),
				f = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				v = s("./src/reddit/icons/svgs/Twitter/index.tsx"),
				E = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				g = s("./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less"),
				_ = s.n(g);
			var O = e => {
					const {
						account: t,
						clickEvent: s,
						provider: n
					} = e;
					let r, a = t.username,
						i = "";
					return n !== u.a.Twitter ? null : (r = o.a.createElement(v.a, {
						className: _.a.twitterLogo
					}), i = x.fbt._("View on Twitter", null, {
						hk: "39S5oy"
					}), a = `@${t.username}`, o.a.createElement(E.a, null, o.a.createElement("span", {
						className: _.a.icon
					}, r), o.a.createElement(h.b, {
						className: _.a.link,
						href: t.link,
						onClick: s
					}, o.a.createElement("div", {
						className: _.a.linkTitle
					}, o.a.createElement("span", {
						className: _.a.name
					}, a), o.a.createElement(f.a, {
						className: _.a.linkIcon
					})), o.a.createElement("div", {
						className: _.a.linkDescription
					}, i))))
				},
				C = s("./src/reddit/components/Widgets/ConnectedAccounts/index.m.less"),
				y = s.n(C);
			const {
				fbt: k
			} = s("./node_modules/fbt/lib/FbtPublic.js"), j = Object(a.c)({
				twitterAccount: (e, t) => {
					let {
						subredditOrProfile: s
					} = t;
					return s.type === l.a.PROFILE ? Object(p.c)(e, {
						profileName: s.name
					}) : null
				},
				user: (e, t) => {
					let {
						subredditOrProfile: s
					} = t;
					return s.type === l.a.PROFILE ? Object(b.Ab)(e, {
						userName: s.name
					}) : null
				}
			}), I = Object(r.b)(j, e => ({
				trackTwitterAccountClicked: t => e((e, s) => m.m(s(), t))
			}), (e, t, s) => ({
				...s,
				...e,
				...t,
				onTwitterAccountClicked: () => t.trackTwitterAccountClicked(e.user)
			}));
			t.a = Object(c.c)(I(e => {
				const {
					onTwitterAccountClicked: t,
					twitterAccount: s
				} = e;
				return s ? o.a.createElement(i.a, null, o.a.createElement(d.b, null, o.a.createElement(d.a, null, k._("Connected accounts", null, {
					hk: "1ce9Jz"
				})), s && o.a.createElement("div", {
					className: y.a.account
				}, o.a.createElement(O, {
					provider: u.a.Twitter,
					account: s,
					clickEvent: t
				})))) : null
			}))
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/post.ts"),
				a = s("./src/reddit/actions/tooltip.ts"),
				i = s("./src/reddit/models/Vote/index.ts"),
				c = s("./src/reddit/contexts/InsideOverlay.tsx"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/contexts/Post/index.tsx"),
				m = s("./src/reddit/selectors/activeModalId.ts"),
				u = s("./src/reddit/selectors/chatPost.ts"),
				p = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				b = s("./src/reddit/selectors/moderatorPermissions.ts"),
				x = s("./src/reddit/selectors/postFlair.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				f = s("./src/reddit/selectors/showPromotedCTA.ts"),
				v = s("./src/reddit/selectors/user.ts");
			const E = {
					autoplayPref: v.b,
					activeModalId: m.a,
					crosspost: h.d,
					isActive: h.j,
					isChatPost: u.d,
					isCurrentUserProfilePost: h.l,
					isExpanded: h.m,
					isLoggedIn: v.Q,
					showPromotedCTA: f.a,
					moderatorPermissions: b.m,
					modModeEnabled: d.U,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: x.a,
					showMedia: d.s,
					flairStyleTemplate: d.W,
					showCTAExperimentDesign: p.a
				},
				g = Object(n.b)(() => Object(o.c)(E), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const n = t === i.a.upvoted ? Object(r.kb)(s) : Object(r.w)(s);
							e(n)
						},
						onIgnoreReports: () => e(Object(r.gb)(s)),
						onOpenReportsDropdown: t => e(Object(a.h)({
							tooltipId: t
						}))
					}
				}, (e, t, s) => ({
					...e,
					...t,
					...s,
					formatTitle: e => e.title
				}));
			t.a = e => Object(l.b)(g(Object(c.b)(e)))
		},
		"./src/reddit/constants/gold.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "d", (function() {
				return r
			})), s.d(t, "e", (function() {
				return a
			})), s.d(t, "f", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "i", (function() {
				return d
			})), s.d(t, "h", (function() {
				return l
			})), s.d(t, "g", (function() {
				return m
			}));
			const n = "ModerationPage--Modal--AddAward",
				o = "ModerationPage--Modal--DeleteAwardConfirmation",
				r = 20,
				a = 4,
				i = 1e4,
				c = .2,
				d = .1,
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/index.tsx"),
				i = s("./src/reddit/controls/Checkbox/index.m.less"),
				c = s.n(i);
			t.a = e => o.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, o.a.createElement(a.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(r.a)({
					[c.a.redditStyle]: e.redditStyle,
					[c.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const o = e => {
				let {
					edges: t
				} = e;
				const s = [];
				for (const {
						node: o
					} of t) s.push(Object(n.f)(o));
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
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/PostMedia/index.tsx");
			const a = (e, t, s, n, r, a) => n ? e.crosspostRootId ? o.a.createElement("div", {
					className: t.crosspostMediaWrapper
				}, i(e, s, r, a)) : i(e, s, r, a) : null,
				i = (e, t, s, n) => o.a.createElement(r.a, {
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
				return u
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "d", (function() {
				return f
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				o = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				a = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = s("./src/reddit/models/Theme/index.ts"),
				c = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(d);
			const m = {},
				u = e => Object(i.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(i.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(i.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: u(t)
					}
				},
				b = e => Object(n.k)(.2, e),
				x = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : m,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				f = e => {
					const t = Object(r.a)(Object(o.a)(e), a.a.actionIcon, a.b.actionIcon);
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
				return i
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "a", (function() {
				return u
			})), s.d(t, "c", (function() {
				return p
			}));
			var n = s("./src/reddit/components/CreatorStats/helpers.ts"),
				o = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const a = e => {
					switch (e) {
						case n.b.Available:
							return "insights_shown";
						case n.b.NotAvailableYet:
							return "not_enough_views";
						case n.b.NotAvailable:
							return "post_too_old";
						case n.b.Expired:
							return "insights_expired";
						default:
							return ""
					}
				},
				i = (e, t) => s => ({
					...Object(r.o)(s),
					action: o.c.VIEW,
					noun: "aggregate_stats",
					source: "creator_stats",
					subreddit: Object(r.jb)(s),
					post: Object(r.K)(s, e),
					userSubreddit: Object(r.tb)(s),
					actionInfo: Object(r.d)(s, {
						reason: a(t)
					})
				}),
				c = (e, t) => s => ({
					...Object(r.o)(s),
					action: o.c.CLICK,
					noun: e,
					source: "creator_stats",
					post: Object(r.K)(s, t),
					subreddit: Object(r.jb)(s),
					userSubreddit: Object(r.tb)(s)
				}),
				d = e => {
					switch (e) {
						case n.b.Available:
							return "stats";
						case n.b.NotAvailableYet:
							return "not_enough_views";
						case n.b.NotAvailable:
						case n.b.Expired:
							return "no_data";
						case n.b.Quarantined:
							return "quarantined";
						default:
							return ""
					}
				},
				l = e => t => ({
					...Object(r.o)(t),
					action: o.c.CLICK,
					noun: "post_stats",
					source: "post",
					actionInfo: Object(r.d)(t, {
						pageType: "profile"
					}),
					post: Object(r.K)(t, e, void 0, 0),
					profile: Object(r.T)(t)
				}),
				m = (e, t, s) => n => ({
					...Object(r.o)(n),
					action: o.c.LOAD,
					noun: "insights",
					source: "post_stats",
					actionInfo: Object(r.d)(n, {
						reason: d(t)
					}),
					post: Object(r.K)(n, e, void 0, s)
				}),
				u = (e, t, s, n, a, i) => c => ({
					...Object(r.o)(c),
					action: o.c.CLICK,
					noun: "community",
					source: "post_stats",
					actionInfo: Object(r.d)(c, {
						pageType: "post_stats",
						reason: "stats"
					}),
					post: Object(r.K)(c, e, void 0, i),
					subreddit: Object(r.jb)(c),
					outbound: {
						postId: s,
						url: t,
						subredditId: n,
						subredditName: a
					}
				}),
				p = (e, t, s) => n => ({
					...Object(r.o)(n),
					action: o.c.CLICK,
					noun: "share",
					source: "post_stats",
					actionInfo: Object(r.d)(n, {
						pageType: "post_stats",
						reason: d(t)
					}),
					post: Object(r.K)(n, e, void 0, s),
					subreddit: Object(r.jb)(n)
				})
		},
		"./src/reddit/hooks/useIsAvatarPost.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react-redux/es/index.js");
			const o = ["t2_83axfjo9", "t2_5ybo8iyi", "t2_7yef0w0w", "t2_fvlxukt", "t2_16060o", "t2_364me452", "t2_46dwatoq", "t2_86xzqcqi", "t2_97lsdz5t", "t2_8394tzuq ", "t2_b46ms2wj", "t2_btxoz0zb"],
				r = ["t5_q0gj4", "t5_2rjli"],
				a = new RegExp(/https:\/\/(www\.)?reddit.com\/avatar\/.*\/\d+$/);
			var i = s("./src/reddit/selectors/experiments/econ/index.ts");
			const c = e => Object(n.e)(t => {
				return !!(e => {
					let {
						adminId: t,
						subredditId: s,
						avatarShareUrl: n
					} = e;
					const i = a.test(n.trim()),
						c = o.includes(t),
						d = r.includes(s);
					return i && c && d
				})({
					adminId: e.authorId,
					subredditId: e.belongsTo.id,
					avatarShareUrl: e.source ? e.source.url : ""
				}) && Object(i.b)(t)
			})
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
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = function(e) {
				let {
					className: t
				} = e;
				return o.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, o.a.createElement("g", {
					fill: "inherit"
				}, o.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
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
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, s) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				c = s.n(i);
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
		"./src/reddit/selectors/experiments/web2x_cta.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const a = Object(n.a)(e => Object(r.c)(e, {
					experimentName: o.fg,
					experimentEligibilitySelector: r.a
				}), e => e),
				i = Object(n.a)(a, e => e === o.Wf)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileComments~ProfileOverview~ProfilePrivate.f17c1588ac789d2bf45a.js.map