// https://www.redditstatic.com/desktop2x/reddit-components-SubredditContent-EventPostContent.0e1ab5cec44b0144d9b5.js
// Retrieved at 5/31/2023, 11:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-SubredditContent-EventPostContent"], {
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/lib/ads/index.ts"),
				n = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/getShortenedLink.ts"),
				c = s("./src/lib/hooks/usePrevious.ts"),
				l = s("./src/reddit/hooks/useTracking.ts"),
				m = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				u = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				p = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				b = s("./src/reddit/components/CreatorStats/loader.tsx"),
				x = s("./node_modules/react-redux/es/index.js"),
				h = s("./src/reddit/models/Audio/index.ts"),
				v = s("./src/reddit/selectors/experiments/econ/index.ts"),
				g = s("./src/reddit/components/Econ/Audio/index.m.less"),
				f = s.n(g),
				O = s("./src/config.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/components/Econ/Audio/MuteIcon.tsx"),
				C = s("./src/reddit/components/Econ/Audio/SpeakerRings/index.tsx");
			const {
				fbt: k
			} = s("./node_modules/fbt/lib/FbtPublic.js"), S = () => Math.floor(10 * Math.random()) + 1;
			var P = e => {
					let {
						postId: t
					} = e;
					const s = Object(x.e)(E.fb),
						[a, i] = Object(o.useState)(!1),
						[d, c] = Object(o.useState)(S());
					return Object(o.useEffect)(() => {
						let e;
						const t = setInterval(() => {
							i(!0), e = setTimeout(() => i(!1), 3500), c(S())
						}, 6e3);
						return () => {
							clearInterval(t), clearTimeout(e)
						}
					}, []), r.a.createElement("div", {
						className: f.a.classicSpeaker
					}, a && r.a.createElement(C.a, {
						ringId: `${t}`,
						className: Object(n.a)(f.a.speakerRings, {
							[f.a.nightMode]: s
						}),
						ringClassName: "speakerRing",
						isAnimated: !0
					}), r.a.createElement("img", {
						key: `audioPostAvatar--${d}`,
						className: f.a.snoovatar,
						src: `${O.a.assetPath}/img/talk/avatars/${d}.png`,
						alt: k._("Reddit Talk", null, {
							hk: "XNl4V"
						})
					}), !a && r.a.createElement("div", {
						className: f.a.muteContainer
					}, r.a.createElement(j.a, {
						className: f.a.muteIcon
					})))
				},
				_ = s("./src/reddit/components/Econ/Audio/UpcomingTalk/index.tsx");
			const {
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var N = e => {
					let {
						post: t
					} = e;
					const {
						audioRoom: s,
						postId: o,
						author: a
					} = t;
					return Object(x.e)(v.n) && s.roomStatus === h.b.NotStarted ? r.a.createElement(_.a, {
						postId: o,
						author: a,
						roomId: s.roomId,
						isClassicView: !0
					}) : (null == s ? void 0 : s.isLive) ? r.a.createElement("a", {
						href: `https://www.reddit.com/talk/${s.roomId}`,
						target: "_blank",
						rel: "noopener noreferrer",
						className: f.a.liveClassicContainer,
						"data-testid": "audioroom-classic-live"
					}, r.a.createElement(P, {
						postId: o
					})) : r.a.createElement("div", {
						className: f.a.endedClassicContainer
					}, r.a.createElement(j.a, {
						className: f.a.muteIcon
					}))
				},
				w = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				I = s("./src/reddit/components/ExpandoButton/index.tsx"),
				A = s("./src/reddit/components/Flatlist/index.tsx"),
				T = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				L = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				R = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				M = s("./src/reddit/components/ModModeReports/index.tsx"),
				G = s("./src/reddit/components/ModModeReports/helpers.ts"),
				F = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				V = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				B = s("./src/reddit/components/PostContainer/index.tsx"),
				U = s("./src/reddit/components/PostMeta/index.tsx"),
				Q = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				D = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				J = s("./src/reddit/components/PostTitle/index.tsx"),
				H = s("./src/reddit/components/PostTopMeta/index.tsx"),
				W = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				X = s("./src/reddit/models/Media/index.ts"),
				Y = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				K = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				$ = s("./src/reddit/constants/postLayout.ts"),
				q = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				z = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				Z = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				ee = s("./src/reddit/helpers/search/renderMedia.tsx"),
				te = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				se = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				oe = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				re = s.n(oe),
				ae = s("./src/reddit/models/Post/index.ts"),
				ne = s("./src/redditGQL/types.ts"),
				ie = s("./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx"),
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
			const me = Object(i.a)(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: i,
					handleVote: x,
					isExpanded: v,
					inSubredditOrProfile: g,
					eventFactory: f,
					flairStyleTemplate: O,
					formatTitle: E,
					hostPostData: j,
					isCheckboxSelected: C,
					isCurrentUserProfilePost: k,
					isFrontpage: S,
					isGalleryTileLayoutDefault: P,
					isLoggedIn: _,
					isOverlay: y,
					imageGalleryCurrentItem: K,
					moderatorPermissions: oe,
					modModeEnabled: de,
					onClickPost: me,
					onIgnoreReports: ue,
					onOpenReportsDropdown: pe,
					onSizeChanged: be,
					poll: xe,
					post: he,
					postId: ve,
					redditStyle: ge,
					scrollerItemRef: fe,
					showBulkActionCheckbox: Oe,
					showEditFlair: Ee,
					showMedia: je,
					shouldShowInsightsButton: Ce,
					subredditOrProfile: ke,
					toggleCheckbox: Se,
					userIsOp: Pe,
					shouldShowGalleryTileOption: _e,
					showCTAExperimentDesign: ye
				} = e, Ne = Object(l.a)(), we = Object(c.a)(v);
				Object(o.useEffect)(() => {
					be && we !== v && be(he.id)
				}, [v, be, he.id, we]);
				const Ie = ge ? void 0 : O,
					Ae = s || void 0,
					Te = Object(Z.a)(oe),
					Le = Object(q.a)(oe),
					Re = Object(z.a)(oe),
					Me = de && Z.a,
					Ge = Object(R.a)(he),
					Fe = Object(G.c)(he),
					Ve = !!he.media && he.media.type === X.o.RTJSON,
					Be = Pe && Ve,
					Ue = g && !je,
					Qe = !!he.recommendationContext,
					De = {
						flairStyleTemplate: Ie,
						post: he,
						inSubredditOrProfile: g,
						isCurrentUserProfilePost: k,
						isOverlay: y,
						shouldShowSubscribeButton: !(S && _) || Qe && _,
						subredditOrProfile: ke
					},
					Je = Object(a.t)(he, K),
					[He, We] = Object(o.useState)(!1),
					Xe = Object(o.useCallback)(() => {
						We(!He), Ne(Object(se.d)(ve))
					}, [He, ve, Ne]);
				let Ye = r.a.createElement(Y.a, {
					className: ce.a.classicThumbnail,
					crosspost: Ae && he,
					isMeta: he.isMeta,
					post: Ae || he,
					redditStyle: ge,
					templatePlaceholderImage: Ie && Ie.postPlaceholderImage
				});
				Object(h.c)(he) && (Ye = r.a.createElement(N, {
					post: he
				}));
				const Ke = Object(ae.r)(he);
				return r.a.createElement(B.b, {
					className: Object(n.a)(re.a.classicPostStyles, ce.a.postContainer, Object(te.a)(e), {
						[ce.a.shouldShowOverflow]: Ce
					}, t),
					isOverlay: y,
					style: {
						...Object(te.d)(e),
						...Object(te.b)(Ie)
					},
					post: he,
					onClick: me,
					eventFactory: f
				}, r.a.createElement(D.a, {
					model: he,
					handleVote: x,
					showBulkActionCheckbox: Oe,
					isCheckboxSelected: C,
					toggleCheckbox: Se,
					flairStyleTemplate: Ie,
					redditStyle: ge,
					postId: ve
				}), r.a.createElement(V.a, {
					className: Ce ? ce.a.shouldUseRoundedBorder : void 0,
					"data-click-id": "background",
					flairStyleTemplate: Ie
				}, r.a.createElement(w.a, {
					className: ce.a.eventMeta,
					post: he
				}), r.a.createElement("div", {
					className: ce.a.mainBody
				}, r.a.createElement("div", {
					className: Ue ? ce.a.expandoContainer : ce.a.thumbnailContainer
				}, !Ue && Ye, r.a.createElement(I.a, {
					crosspost: Ae,
					className: ce.a.rightExpando,
					isExpanded: !!v,
					post: he,
					useMediaIcons: !1
				})), r.a.createElement("div", {
					className: Object(n.a)(ce.a.content, {
						[ce.a.showBulkActionCheckbox]: Oe
					}),
					"data-click-id": "body"
				}, Ke && r.a.createElement(F.a, {
					content: he.recommendationContext.content,
					layout: $.g.Classic,
					post: he
				}), r.a.createElement(J.c, {
					className: xe ? ce.a.titleWithPoll : void 0,
					format: E,
					poll: xe,
					post: he,
					redditStyle: ge,
					size: J.b.Medium,
					titleColor: Ie && Ie.postTitleColor,
					isOverlay: y
				}, he.source && !Ae && !he.isSurveyAd && r.a.createElement(W.a, {
					href: he.source.url,
					isSponsored: he.isSponsored,
					postId: he.id,
					source: he.source
				}, Object(d.a)(he))), r.a.createElement(U.a, le({
					key: "PostMeta"
				}, De)), de && Te && Ge && r.a.createElement(L.a, {
					thing: he
				}), de && Te && Fe && r.a.createElement(M.a, {
					onIgnoreReports: ue,
					reportable: he
				}), Object(a.v)(he, K) && r.a.createElement(m.a, {
					ctaExperimentDesign: ye && "classic",
					className: Object(n.a)(ce.a.adLinkWrapper, {
						[ce.a.ctaExperiment]: ye
					})
				}, r.a.createElement(u.a, {
					post: he,
					adLinkContent: Je,
					ctaExperimentDesign: ye && "classic"
				})), he.discussionType === ne.n.Chat && r.a.createElement(ie.a, {
					postId: he.id
				}), r.a.createElement("div", {
					className: ce.a.flatlistContainer
				}, r.a.createElement(I.a, {
					className: ce.a.leftExpando,
					crosspost: Ae,
					isExpanded: !!v,
					post: he,
					useMediaIcons: !1
				}), r.a.createElement(p.a, {
					className: ce.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: Ie,
					model: he,
					onVoteClick: x
				}), r.a.createElement(A.a, {
					className: ce.a.flatlistSeparator
				}), !he.isSurveyAd && r.a.createElement(A.c, {
					className: ce.a.flatlist,
					currentUser: i,
					hasModFlairPerms: Le,
					hasModPostPerms: Te,
					hasModFullPerms: Re,
					hostPostData: j,
					isOverlay: !!y,
					modModeEnabled: de,
					onClickInsightsButton: Xe,
					onIgnoreReports: ue,
					onOpenReportsDropdown: pe,
					post: he,
					shouldShowInsightsButton: Ce,
					showEditPost: Be,
					showEditFlair: Ee,
					tooltipType: y ? H.f.Lightbox : void 0,
					useFlatlistBreakpoints: Object(Q.b)({
						editPost: !Me,
						hide: !Me,
						report: !Me,
						mute: !Me,
						save: !Me
					})
				})), r.a.createElement(T.d, null))), Object(ee.a)(he, ce.a, fe, v, _e, P), ke && He && r.a.createElement(b.a, {
					className: ce.a.creatorStatsContainer,
					post: he,
					subreddit: ke,
					isOwnProfileStats: !0
				})))
			});
			t.default = Object(K.a)(me)
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
		"./src/reddit/components/Econ/Audio/MuteIcon.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o);
			t.a = e => {
				let {
					className: t
				} = e;
				return r.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, r.a.createElement("g", {
					id: "icons_flat",
					"data-name": "icons flat"
				}, r.a.createElement("path", {
					d: "M13.5,9.5v-5A3.493,3.493,0,0,0,6.723,3.3l6.724,6.723A3.524,3.524,0,0,0,13.5,9.5Z"
				}), r.a.createElement("path", {
					d: "M15.5,9.5a5.472,5.472,0,0,1-.436,2.144l1.487,1.486A7.428,7.428,0,0,0,17.5,9.5Z"
				}), r.a.createElement("path", {
					d: "M2.341,4.1,6.5,8.258V9.5A3.5,3.5,0,0,0,10,13a3.441,3.441,0,0,0,1.059-.183l1.529,1.529A5.449,5.449,0,0,1,10,15,5.506,5.506,0,0,1,4.5,9.5h-2A7.5,7.5,0,0,0,9,16.925V18H7.581v2h4.838V18H11V16.925a7.388,7.388,0,0,0,3.026-1.141l1.044,1.044,1.414-1.414L3.755,2.686Z"
				})))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingInner.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o);
			t.a = e => {
				let {
					className: t,
					ringId: s
				} = e;
				return r.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "49",
					height: "49",
					viewBox: "0 0 49 49",
					fill: "none"
				}, r.a.createElement("rect", {
					opacity: "0.8",
					x: "1",
					y: "1",
					width: "46",
					height: "46",
					rx: "23",
					stroke: `url(#paint0_linear_284_569805-${s})`,
					strokeWidth: "2"
				}), r.a.createElement("defs", null, r.a.createElement("linearGradient", {
					id: `paint0_linear_284_569805-${s}`,
					x1: "-4.24542",
					y1: "0.154669",
					x2: "55.6993",
					y2: "1.87207",
					gradientUnits: "userSpaceOnUse"
				}, r.a.createElement("stop", {
					stopColor: "#FF538C"
				}), r.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingMiddle.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o);
			t.a = e => {
				let {
					className: t,
					ringId: s
				} = e;
				return r.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "56",
					height: "56",
					viewBox: "0 0 56 56",
					fill: "none"
				}, r.a.createElement("rect", {
					opacity: "0.5",
					x: "0.934437",
					y: "1.15466",
					width: "54",
					height: "54",
					rx: "27",
					stroke: `url(#paint0_linear_284_569806-${s})`
				}), r.a.createElement("defs", null, r.a.createElement("linearGradient", {
					id: `paint0_linear_284_569806-${s}`,
					x1: "-5.50082",
					y1: "0.65467",
					x2: "63.1858",
					y2: "2.62253",
					gradientUnits: "userSpaceOnUse"
				}, r.a.createElement("stop", {
					stopColor: "#FF538C"
				}), r.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingOuter.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o);
			t.a = e => {
				let {
					className: t,
					ringId: s
				} = e;
				return r.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "64",
					height: "64",
					viewBox: "0 0 64 64",
					fill: "none"
				}, r.a.createElement("rect", {
					opacity: "0.3",
					x: "0.684437",
					y: "0.904663",
					width: "62.5",
					height: "62.5",
					rx: "31.25",
					stroke: `url(#paint0_linear_284_569807-${s})`,
					strokeWidth: "0.5"
				}), r.a.createElement("defs", null, r.a.createElement("linearGradient", {
					id: `paint0_linear_284_569807-${s}`,
					x1: "-6.36412",
					y1: "0.654671",
					x2: "72.3133",
					y2: "2.90877",
					gradientUnits: "userSpaceOnUse"
				}, r.a.createElement("stop", {
					stopColor: "#FF538C"
				}), r.a.createElement("stop", {
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
				r = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/components/Econ/Audio/SpeakerRings/index.m.less"),
				i = s.n(n),
				d = s("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingInner.tsx"),
				c = s("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingMiddle.tsx"),
				l = s("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingOuter.tsx");
			t.a = e => {
				let {
					className: t,
					ringClassName: s,
					ringId: o,
					isAnimated: n = !1
				} = e;
				return r.a.createElement("div", {
					className: Object(a.a)(i.a.ringsContainer, t, n ? i.a.animated : "")
				}, r.a.createElement(d.a, {
					ringId: o,
					className: Object(a.a)(i.a.innerRing, `${s}Inner`)
				}), r.a.createElement(c.a, {
					ringId: o,
					className: Object(a.a)(i.a.middleRing, `${s}Middle`)
				}), r.a.createElement(l.a, {
					ringId: o,
					className: Object(a.a)(i.a.outerRing, `${s}Outer`)
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
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				n = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/actions/profile/index.ts"),
				d = s("./src/reddit/components/UserIcon/index.tsx"),
				c = s("./src/lib/eventTools/index.ts"),
				l = s("./src/reddit/constants/tracking.ts"),
				m = s("./src/reddit/selectors/postCreations.ts"),
				u = s("./src/reddit/selectors/telemetry.ts");
			var p = s("./src/reddit/hooks/useTracking.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/components/Econ/Audio/SpeakerRings/index.tsx"),
				h = s("./src/reddit/components/Econ/Audio/UpcomingTalk/index.m.less"),
				v = s.n(h),
				g = s("./src/config.ts"),
				f = s("./src/reddit/components/TrackingHelper/index.tsx"),
				O = s("./src/reddit/controls/Button/index.tsx"),
				E = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				j = s("./src/reddit/hooks/useGqlContext.ts");
			var C = e => r.a.createElement("svg", {
					width: "15",
					height: "19",
					viewBox: "0 0 15 19",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					d: "M8.125 15.9701V17.7501H9.925V19.0001H5.08V17.7501H6.88V15.9701C5.18411 15.8688 3.58787 15.1352 2.40663 13.9141C1.22538 12.6931 0.545039 11.0734 0.5 9.3751H1.75C1.80295 10.8493 2.43767 12.2424 3.51528 13.2497C4.59288 14.2571 6.02562 14.7965 7.5 14.7501C8.97438 14.7965 10.4071 14.2571 11.4847 13.2497C12.5623 12.2424 13.197 10.8493 13.25 9.3751H14.5C14.4551 11.0726 13.7754 12.6916 12.5952 13.9125C11.415 15.1334 9.82 15.8676 8.125 15.9701ZM3.5 8.9481V4.0481C3.5 2.98723 3.92143 1.96981 4.67157 1.21967C5.42172 0.469523 6.43913 0.0480957 7.5 0.0480957C8.56087 0.0480957 9.57828 0.469523 10.3284 1.21967C11.0786 1.96981 11.5 2.98723 11.5 4.0481V8.9481C11.5 10.009 11.0786 11.0264 10.3284 11.7765C9.57828 12.5267 8.56087 12.9481 7.5 12.9481C6.43913 12.9481 5.42172 12.5267 4.67157 11.7765C3.92143 11.0264 3.5 10.009 3.5 8.9481ZM4.75 8.9481C4.75 9.67744 5.03973 10.3769 5.55546 10.8926C6.07118 11.4084 6.77065 11.6981 7.5 11.6981C8.22935 11.6981 8.92882 11.4084 9.44454 10.8926C9.96027 10.3769 10.25 9.67744 10.25 8.9481V4.0481C10.25 3.31875 9.96027 2.61928 9.44454 2.10355C8.92882 1.58783 8.22935 1.2981 7.5 1.2981C6.77065 1.2981 6.07118 1.58783 5.55546 2.10355C5.03973 2.61928 4.75 3.31875 4.75 4.0481V8.9481Z"
				})),
				k = s("./src/reddit/endpoints/talk/index.ts"),
				S = s("./src/reddit/actions/toaster.ts"),
				P = s("./src/reddit/models/Toast/index.ts"),
				_ = s("./src/redditGQL/types.ts");
			const {
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js"), N = () => r.a.createElement("span", {
				className: v.a.MicrophoneIcon
			}, r.a.createElement(C, null));
			var w = e => {
				let {
					roomId: t
				} = e;
				const s = Object(a.e)(b.fb),
					[i, d] = Object(o.useState)(!1),
					c = Object(a.d)(),
					p = Object(f.b)(),
					x = Object(j.a)();
				return r.a.createElement(O.t, {
					"data-testid": "audioroom-upcoming-start-talk",
					Icon: i ? E.a : N,
					iconClassName: i ? v.a.loadingIcon : "",
					className: Object(n.a)(v.a.StartTalkButton, {
						[v.a.isNightMode]: s
					}),
					priority: O.c.Secondary,
					size: O.d.M,
					iconPosition: O.h.L,
					disabled: i,
					text: r.a.createElement("span", {
						className: v.a.StartTalkButtonText
					}, y._("Start talk", null, {
						hk: "46EMgy"
					})),
					onClick: async () => {
						p((() => e => ({
							...u.o(e),
							source: "liveaudio",
							action: l.c.CLICK,
							noun: "go_live",
							subreddit: u.lb(e),
							liveAudioRoom: {
								title: Object(m.xb)(e),
								topicIds: Object(m.wb)(e).topics.map(e => e.id)
							}
						}))()), d(!0);
						const e = await Object(k.f)(x(), {
							input: {
								roomId: t
							}
						});
						if (!e.ok) return c(Object(S.f)({
							kind: P.b.Error,
							text: k.a[_.k.ServiceError]
						})), void d(!1);
						const s = Object(k.d)(e.body);
						if (null == s ? void 0 : s.errorState) return c(Object(S.f)({
							kind: P.b.Error,
							text: k.a[s.errorState.code] || k.a[_.k.ServiceError]
						})), void d(!1);
						(null == s ? void 0 : s.okState) && (window.location.href = `${g.a.redditUrl}/talk/${t}`)
					}
				})
			};
			const {
				fbt: I
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					author: t,
					postId: s,
					roomId: m,
					isClassicView: h = !1
				} = e;
				const g = Object(a.d)(),
					f = Object(p.a)(),
					O = Object(a.e)(b.H),
					E = Object(a.e)(b.fb),
					j = Object(a.e)(e => Object(b.Gb)(e, {
						postId: s
					})),
					C = Object(a.e)(e => Object(b.Db)(e, {
						userName: t
					}));
				Object(o.useEffect)(() => {
					s && f && f((e => t => ({
						...u.o(t),
						source: "global",
						action: l.c.VIEW,
						noun: l.b.SCREEN,
						subreddit: u.lb(t),
						post: u.K(t, e),
						postEvent: {
							eventState: c.a.Future
						}
					}))(s))
				}, [f, s]), Object(o.useEffect)(() => {
					C || g(Object(i.d)(t))
				}, [g, t, s, C]);
				const k = () => r.a.createElement("div", {
					"data-testid": "audioroom-avatar-upcoming",
					key: `audioPostAvatar--${t}`,
					className: Object(n.a)(v.a.hostAvatar, {
						[v.a.classicView]: h
					})
				}, r.a.createElement("div", {
					className: v.a.snoovatar
				}, r.a.createElement(d.a, {
					userName: t,
					isNSFW: !O,
					className: v.a.isImage
				})), r.a.createElement(x.a, {
					ringId: `${s}`,
					className: Object(n.a)(v.a.hostRings, {
						[v.a.nightMode]: E
					}),
					ringClassName: "hostRing"
				}));
				return h ? r.a.createElement(k, null) : r.a.createElement("div", {
					className: v.a.upcomingTalkCard,
					"data-testid": "audioroom-card-upcoming"
				}, r.a.createElement("div", {
					className: v.a.upcomingTalkContainer
				}, r.a.createElement(k, null), r.a.createElement("div", {
					className: v.a.upcomingTalkInfo
				}, r.a.createElement("div", {
					className: v.a.upcomingTalkLabel
				}, I._("Upcoming Talk", null, {
					hk: "464Rq3"
				})), r.a.createElement("div", {
					className: v.a.upcomingTalkHost
				}, "u/", t), j && m && r.a.createElement(w, {
					roomId: m
				}))))
			}
		},
		"./src/reddit/components/SubredditContent/EventPostContent/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				n = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/actions/eventPosts/index.ts"),
				m = s("./src/reddit/components/ClassicPost/index.tsx"),
				u = s("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				p = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				b = s("./src/reddit/components/Scroller/Simple.tsx"),
				x = s("./src/reddit/components/SubredditContent/index.tsx"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				v = s("./src/reddit/constants/postLayout.ts"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/helpers/overlay/index.ts"),
				O = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				E = s("./src/reddit/icons/fonts/index.tsx"),
				j = s("./src/reddit/routes/postCreation/index.ts"),
				C = s("./src/reddit/selectors/eventPosts.ts"),
				k = s("./src/reddit/selectors/experiments/shredditModNav.ts"),
				S = s("./src/reddit/components/SubredditContent/index.m.less"),
				P = s.n(S);
			const _ = Object(d.c)({
					eventPosts: C.f,
					isPending: C.d,
					hasData: C.b,
					endCursor: C.a,
					isInShredditModNavExperiment: e => Object(k.a)(e, !0)
				}),
				y = Object(n.b)(_, (e, t) => {
					let {
						subredditName: s
					} = t;
					return {
						onClickPost: t => {
							e(Object(f.a)(t.permalink))
						},
						fetchMorePosts: () => {
							e(Object(l.eventPostsRequested)(s))
						}
					}
				});
			class N extends a.a.PureComponent {
				renderEmptyState() {
					const {
						subredditName: e
					} = this.props;
					return a.a.createElement(u.c, {
						className: P.a.emptyStateContainer,
						text: o.fbt._("No upcoming or live events in r/{subredditName}", [o.fbt._param("subredditName", e)], {
							hk: "3wRma7"
						}),
						childrenPosition: "bottom"
					}, a.a.createElement(E.a, {
						name: "scheduled",
						className: P.a.icon
					}), a.a.createElement(i.a, {
						className: P.a.schedulePostLink,
						to: Object(j.c)(e)
					}, o.fbt._("Create Event Post", null, {
						hk: "PXBmQ"
					})))
				}
				renderBody() {
					const {
						endCursor: e,
						eventPosts: t,
						fetchMorePosts: s,
						hasData: o,
						onClickPost: r
					} = this.props;
					return a.a.createElement("div", {
						className: P.a.contentContainer
					}, a.a.createElement("div", {
						className: P.a.standaloneContainer
					}, o ? a.a.createElement(b.b, {
						className: P.a.scroller,
						onLoadMore: s,
						loadMoreToken: e || void 0
					}, t.map((e, t) => ({
						id: e.id,
						estHeight: Object(O.c)(e, v.g.Classic),
						render: s => a.a.createElement(m.default, {
							key: `event-post-id-${e.id}`,
							postId: e.id,
							className: P.a.eventPostContainer,
							first: 0 === t,
							isOverlay: !1,
							onClickPost: () => r(e)
						})
					}))) : this.renderEmptyState()))
				}
				render() {
					const {
						isPending: e,
						hasData: t,
						isInShredditModNavExperiment: s
					} = this.props;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(p.c, {
						className: Object(c.a)(P.a.topBar, s && "fixed bg-neutral-background mb-xs pr-0", {
							[P.a.default]: !s
						})
					}, a.a.createElement(i.a, {
						to: Object(j.c)(this.props.subredditName)
					}, a.a.createElement(g.l, null, o.fbt._("Schedule an event post", null, {
						hk: "nk1bA"
					})))), a.a.createElement(p.a, null, a.a.createElement(p.b, {
						className: P.a.pageTitle
					}, o.fbt._("Upcoming and live events", null, {
						hk: "MAeQO"
					})), !t && e ? Object(x.a)() : this.renderBody(), t && e && Object(x.a)(1)))
				}
			}
			t.default = y(Object(h.c)(N))
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/post.ts"),
				n = s("./src/reddit/actions/tooltip.ts"),
				i = s("./src/reddit/models/Vote/index.ts"),
				d = s("./src/reddit/contexts/InsideOverlay.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/contexts/Post/index.tsx"),
				m = s("./src/reddit/selectors/activeModalId.ts"),
				u = s("./src/reddit/selectors/chatPost.ts"),
				p = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				b = s("./src/reddit/selectors/moderatorPermissions.ts"),
				x = s("./src/reddit/selectors/postFlair.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/selectors/user.ts");
			const g = {
					autoplayPref: v.d,
					activeModalId: m.a,
					crosspost: h.d,
					isActive: h.j,
					isChatPost: u.d,
					isCurrentUserProfilePost: h.l,
					isExpanded: h.m,
					isLoggedIn: v.S,
					moderatorPermissions: b.m,
					modModeEnabled: c.W,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: x.a,
					showMedia: c.t,
					flairStyleTemplate: c.Y,
					showCTAExperimentDesign: p.a
				},
				f = Object(o.b)(() => Object(r.c)(g), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const o = t === i.a.upvoted ? Object(a.ib)(s) : Object(a.v)(s);
							e(o)
						},
						onIgnoreReports: () => e(Object(a.eb)(s)),
						onOpenReportsDropdown: t => e(Object(n.h)({
							tooltipId: t
						}))
					}
				}, (e, t, s) => ({
					...e,
					...t,
					...s,
					formatTitle: e => e.title
				}));
			t.a = e => Object(l.b)(f(Object(d.b)(e)))
		},
		"./src/reddit/endpoints/talk/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return m
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "d", (function() {
				return b
			})), s.d(t, "a", (function() {
				return x
			})), s.d(t, "f", (function() {
				return h
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = (s("./node_modules/uuid/dist/esm-browser/v4.js"), s("./src/lib/makeGqlRequest/index.ts")),
				a = s("./src/lib/makeRequest/index.ts"),
				n = (s("./src/reddit/models/Subreddit/index.ts"), s("./src/redditGQL/operations/CreateLiveAudioRoomOnProfile.json"), s("./src/redditGQL/operations/CreateLiveAudioRoomOrError.json"), s("./src/redditGQL/operations/GetAvailableAudioRoomTopics.json"), s("./src/redditGQL/operations/GetSubredditAllowedPostTypes.json")),
				i = s("./src/redditGQL/operations/GetUserProfileAllowedPostTypes.json"),
				d = (s("./src/redditGQL/operations/PrepareLiveAudioRoom.json"), s("./src/redditGQL/operations/PrepareLiveAudioRoomOnProfile.json"), s("./src/redditGQL/operations/ReportTalk.json")),
				c = s("./src/redditGQL/operations/StartLiveAudioRoom.json"),
				l = s("./src/redditGQL/types.ts");
			const m = (e, t) => Object(r.a)(e, {
					...d,
					variables: t
				}),
				u = async (e, t) => {
					const s = await Object(r.a)(e, {
						...n,
						variables: t
					});
					return !!Object(a.c)(s) && (s.body.data.subredditInfoById.allowedPostTypes || []).includes(l.O.Talk)
				}, p = async (e, t) => {
					var s, o;
					const n = await Object(r.a)(e, {
						...i,
						variables: t
					});
					return !!Object(a.c)(n) && (null !== (o = null === (s = n.body.data.profileByName) || void 0 === s ? void 0 : s.allowedPostTypes) && void 0 !== o ? o : []).includes(l.O.Talk)
				}, b = e => e.data.createAudioRoomOrError || e.data.createAudioRoomOnProfile || e.data.startAudioRoom, x = {
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
				}, h = (l.Q.ServiceError, o.fbt._("Something's wrong with the talk service right now. Check back later.", null, {
					hk: "3XqPJS"
				}), l.Q.UserNotAuthorized, o.fbt._("You don't have permission to start talks in this community.", null, {
					hk: "1XY1Ss"
				}), (e, t) => Object(r.a)(e, {
					...c,
					variables: t
				}))
		},
		"./src/reddit/helpers/search/renderMedia.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/reddit/components/PostMedia/index.tsx");
			const n = (e, t, s, o, a, n) => o ? e.crosspostRootId ? r.a.createElement("div", {
					className: t.crosspostMediaWrapper
				}, i(e, s, a, n)) : i(e, s, a, n) : null,
				i = (e, t, s, o) => r.a.createElement(a.a, {
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
				return i
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "a", (function() {
				return u
			})), s.d(t, "c", (function() {
				return p
			}));
			var o = s("./src/reddit/components/CreatorStats/helpers.ts"),
				r = s("./src/reddit/constants/tracking.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			const n = e => {
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
				i = (e, t) => s => ({
					...Object(a.o)(s),
					action: r.c.VIEW,
					noun: "aggregate_stats",
					source: "creator_stats",
					subreddit: Object(a.lb)(s),
					post: Object(a.K)(s, e),
					userSubreddit: Object(a.ub)(s),
					actionInfo: Object(a.d)(s, {
						reason: n(t)
					})
				}),
				d = (e, t) => s => ({
					...Object(a.o)(s),
					action: r.c.CLICK,
					noun: e,
					source: "creator_stats",
					post: Object(a.K)(s, t),
					subreddit: Object(a.lb)(s),
					userSubreddit: Object(a.ub)(s)
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
					...Object(a.o)(t),
					action: r.c.CLICK,
					noun: "post_stats",
					source: "post",
					actionInfo: Object(a.d)(t, {
						pageType: "profile"
					}),
					post: Object(a.K)(t, e, void 0, 0),
					profile: Object(a.T)(t)
				}),
				m = (e, t, s) => o => ({
					...Object(a.o)(o),
					action: r.c.LOAD,
					noun: "insights",
					source: "post_stats",
					actionInfo: Object(a.d)(o, {
						reason: c(t)
					}),
					post: Object(a.K)(o, e, void 0, s)
				}),
				u = (e, t, s, o, n, i) => d => ({
					...Object(a.o)(d),
					action: r.c.CLICK,
					noun: "community",
					source: "post_stats",
					actionInfo: Object(a.d)(d, {
						pageType: "post_stats",
						reason: "stats"
					}),
					post: Object(a.K)(d, e, void 0, i),
					subreddit: Object(a.lb)(d),
					outbound: {
						postId: s,
						url: t,
						subredditId: o,
						subredditName: n
					}
				}),
				p = (e, t, s) => o => ({
					...Object(a.o)(o),
					action: r.c.CLICK,
					noun: "share",
					source: "post_stats",
					actionInfo: Object(a.d)(o, {
						pageType: "post_stats",
						reason: c(t)
					}),
					post: Object(a.K)(o, e, void 0, s),
					subreddit: Object(a.lb)(o)
				})
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-SubredditContent-EventPostContent.0e1ab5cec44b0144d9b5.js.map