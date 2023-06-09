// https://www.redditstatic.com/desktop2x/reddit-components-ContentGate.c864b1b39fa57a0fccaa.js
// Retrieved at 6/8/2023, 8:50:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ContentGate"], {
		"./node_modules/lodash/flatMap.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseFlatten.js"),
				a = n("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return r(a(e, t), 1)
			}
		},
		"./src/chat/controls/Svg/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2Qq40Mz_DMe0iARkTh8cZn",
				component: "_2Qq40Mz_DMe0iARkTh8cZn",
				disable: "_2xw21QiaL_ouF76MONf7hF",
				active: "_2dOhVJ6aPS9cbx0JfiKCW8",
				hover: "_1eWUKX11coBa2dErvWkP1q"
			}
		},
		"./src/chat/controls/Svg/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/lib/lessComponent.tsx"),
				i = n("./src/chat/controls/Svg/index.m.less"),
				l = n.n(i);
			t.a = s.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: n,
						active: r,
						hover: s
					} = e;
				return a.a.createElement("svg", {
					className: Object(o.a)(e.className, {
						[l.a.disable]: n,
						[l.a.active]: r,
						[l.a.hover]: !!s
					}),
					viewBox: e.viewBox,
					style: t,
					onClick: e.onClick
				}, e.children)
			}, "Component", l.a)
		},
		"./src/reddit/components/ContentGate/index.m.less": function(e, t, n) {
			e.exports = {
				ButtonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				buttonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				Container: "_32zGs4bO3IunZfS9bSJY0_",
				container: "_32zGs4bO3IunZfS9bSJY0_",
				ContainerExp: "_2l6FU0DxoyHFIOEFPg-vV6",
				containerExp: "_2l6FU0DxoyHFIOEFPg-vV6",
				Description: "_3VTI5BOpJO70xoBKSqz3O9",
				description: "_3VTI5BOpJO70xoBKSqz3O9",
				PrivateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				privateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				PrivateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				privateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				PrivateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				privateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				Link: "o4oSRcSrppMzf__hxJKxn",
				link: "o4oSRcSrppMzf__hxJKxn",
				LinkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				linkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				LinkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				linkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				SecondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				secondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				CreateCommunityButton: "_209KUA_ej4pZVjoQbSOIf9",
				createCommunityButton: "_209KUA_ej4pZVjoQbSOIf9",
				GoHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				goHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				PrivateKey: "kwHMAzQCDA69TaL3eHZLa",
				privateKey: "kwHMAzQCDA69TaL3eHZLa",
				Image: "_1jefpljVGT-eHObg40F8Dm",
				image: "_1jefpljVGT-eHObg40F8Dm",
				ImagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				imagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				LeftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				leftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				LeftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				leftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				SecondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				secondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				Title: "_2XKLlvmuqdor3RvVbYZfgz",
				title: "_2XKLlvmuqdor3RvVbYZfgz",
				PageBody: "bDDEX4BSkswHAG_45VkFB",
				pageBody: "bDDEX4BSkswHAG_45VkFB",
				InterstitialMessageWrapper: "_2xiFx6Zsb5W98_T1DOroT_",
				interstitialMessageWrapper: "_2xiFx6Zsb5W98_T1DOroT_",
				QuarantineLearnMore: "_10JuhN_YtdWSrIRmGSirSQ",
				quarantineLearnMore: "_10JuhN_YtdWSrIRmGSirSQ",
				ContributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz",
				contributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./src/config.ts"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router/esm/react-router.js"),
				l = n("./src/reddit/contexts/NavbarExp.ts"),
				c = n("./node_modules/reselect/es/index.js"),
				u = n("./src/lib/lessComponent.tsx"),
				d = n("./src/lib/loginHref/index.ts"),
				m = n("./src/reddit/actions/contentGate.ts"),
				h = n("./src/reddit/actions/preferences.ts"),
				p = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				b = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				_ = n("./src/reddit/components/Footer/index.tsx"),
				E = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				k = n("./src/reddit/components/RichTextJson/index.tsx"),
				y = n("./src/reddit/components/SubredditSearchCarousel/async.tsx"),
				v = n("./node_modules/lodash/flatMap.js"),
				g = n.n(v),
				S = n("./src/lib/linkMatchers/index.ts"),
				f = n("./src/lib/linkMatchers/customLinks.ts"),
				x = n("./src/reddit/controls/OutboundLink/index.tsx");
			const w = /\[(.+?)\]\((.+?)\)/g,
				L = e => {
					const t = e.split(w);
					if (1 === t.length) return [e];
					const n = [];
					for (let r = 0; r < t.length; r += 3) {
						const [e, a, o] = t.slice(r, r + 3);
						n.push(e), n.push([o, a])
					}
					return n
				};
			var C = o.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = g()(t, L)), e.parseRegularLinks && (t = g()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = S.f.add(f.g.subreddit.prefix, f.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let r = null;
						for (const a of t) n.push(e.slice(r ? r.lastIndex : 0, a.index)), r = a, n.push([a.url, a.text]);
						return r && n.push(e.slice(r.lastIndex)), n
					})(e))), o.a.createElement(o.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [r, a] = t;
							return o.a.createElement(x.b, {
								className: e.linkClassName,
								href: r,
								key: n
							}, a)
						}
						return o.a.createElement("span", {
							key: n
						}, t)
					}), " ")
				}),
				B = n("./src/reddit/constants/parameters.ts"),
				R = n("./src/reddit/contexts/PageLayer/index.tsx"),
				P = n("./src/reddit/controls/Button/index.tsx"),
				j = n("./src/reddit/icons/svgs/PrivateKey/index.tsx"),
				O = n("./src/reddit/models/ContentGate.ts"),
				T = n("./src/reddit/selectors/contentGate.ts"),
				q = n("./src/reddit/selectors/meta.ts"),
				D = n("./src/reddit/selectors/user.ts"),
				F = n("./src/reddit/components/ContentGate/index.m.less"),
				M = n.n(F);
			const {
				fbt: G
			} = n("./node_modules/fbt/lib/FbtPublic.js"), A = u.a.wrapped(j.a, "PrivateKey", M.a), N = u.a.div("ButtonsContainer", M.a), U = u.a.div("Container", M.a), I = u.a.div("ContainerExp", M.a), H = u.a.div("Description", M.a), W = u.a.div("PrivateSubredditDetails", M.a), z = u.a.div("PrivateSubredditDescription", M.a), K = u.a.h3("PrivateSubredditName", M.a), Z = u.a.a("Link", M.a), J = u.a.wrapped(P.n, "LinkRouterButton", M.a), V = u.a.wrapped(P.m, "LinkButton", M.a), Y = u.a.wrapped(P.p, "SecondaryLinkButton", M.a), Q = u.a.wrapped(J, "GoHomeLinkButton", M.a), X = u.a.wrapped(b.a, "CreateCommunityButton", M.a), $ = u.a.img("Image", M.a), ee = u.a.img("ImagePlaceholder", M.a), te = u.a.wrapped(J, "LeftLinkRouterButton", M.a), ne = u.a.wrapped(V, "LeftLinkButton", M.a), re = u.a.wrapped(Y, "SecondaryLeftLinkButton", M.a), ae = u.a.h3("Title", M.a), oe = u.a.div("PageBody", M.a), se = u.a.div("InterstitialMessageWrapper", M.a), ie = u.a.div("QuarantineLearnMore", M.a), le = Object(c.c)({
				isLoggedIn: D.R,
				origin: q.l,
				user: D.m,
				isPrivateSubredditContributorRequestPending: e => Object(T.a)(e),
				isSeo: q.h
			}), ce = Object(R.v)(), ue = Object(s.b)(le, (e, t) => {
				let {
					subredditName: n
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(h.C(n)), window.location.reload()
					},
					continueToGatedSubreddit: async () => {
						await e(h.u(n)), window.location.reload()
					},
					setNSFWPreference: async () => {
						await e(Object(m.r)())
					}
				}
			}), de = e => {
				const {
					banMessage: t,
					banTitle: n,
					contentGateType: a,
					continueToQuarantinedSubreddit: s,
					continueToGatedSubreddit: i,
					isLoggedIn: l,
					isContributorRequestsDisabled: c,
					isPrivateSubredditContributorRequestPending: u,
					isSeo: h,
					location: b,
					origin: _,
					pageLayer: v,
					quarantineRequiresEmail: g,
					quarantineMessage: S,
					quarantineMessageHtml: f,
					quarantineMessageRTJson: x,
					interstitialWarningMessage: w,
					interstitialWarningMessageHtml: L,
					interstitialWarningMessageRTJson: R,
					setNSFWPreference: P,
					subredditDescription: j,
					subredditName: T,
					user: q
				} = e, D = async () => {
					if (l ? await P() : await Object(m.q)(), h) {
						const e = new URL(window.location.href);
						e.searchParams.set(B.k, "1"), window.location.href = e.href
					} else window.location.reload()
				};
				switch (a) {
					case O.a.GoldSubreddit:
						return o.a.createElement("div", null, o.a.createElement($, {
							src: `${r.a.assetPath}/img/gold/premium-crest.png`
						}), o.a.createElement(ae, null, G._("r/{community name} is a Reddit Premium community", [G._param("community name", T)], {
							hk: "2lyDwB"
						})), o.a.createElement(H, null, G._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), o.a.createElement(N, null, q ? o.a.createElement(re, {
							href: `${r.a.redditUrl}/premium`,
							redditStyle: !0
						}, G._("Get Premium", null, {
							hk: "3ChWi4"
						})) : o.a.createElement(ne, {
							href: Object(d.a)(b, _),
							redditStyle: !0
						}, G._("Sign Up", null, {
							hk: "rvpjy"
						})), q ? o.a.createElement(J, {
							to: "/",
							redditStyle: !0
						}, G._("Go Home", null, {
							hk: "49p4or"
						})) : o.a.createElement(Y, {
							href: Object(d.a)(b, _),
							redditStyle: !0
						}, G._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case O.a.Nsfw:
					case O.a.NsfwCustomFeed:
						return o.a.createElement("div", null, o.a.createElement($, {
							src: `${r.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), o.a.createElement(ae, null, a === O.a.Nsfw ? G._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : G._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), o.a.createElement(H, null, G._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), o.a.createElement(N, null, o.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, G._("No", null, {
							hk: "3fMglW"
						})), o.a.createElement(Y, {
							onClick: D,
							redditStyle: !0
						}, G._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case O.a.PrivateSubreddit:
						return o.a.createElement("div", null, o.a.createElement(A, null), o.a.createElement(ae, null, "r/", T, " ", G._("is a private community", null, {
							hk: "7zZmq"
						})), j && j.length && o.a.createElement(W, null, o.a.createElement(K, null, "r/", T), o.a.createElement(z, null, o.a.createElement("div", null, j))), o.a.createElement(H, null, G._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", T, " ", G._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), o.a.createElement("br", null), G._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), o.a.createElement(N, null, q ? o.a.createElement(o.a.Fragment, null, !c && o.a.createElement(p.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: M.a.ContributorRequestButton,
							isContributorRequestPending: u
						}), o.a.createElement(re, {
							href: `${r.a.redditUrl}/message/compose?to=/r/${T}`,
							redditStyle: !0
						}, G._("Message Mods", null, {
							hk: "vVe1i"
						}))) : o.a.createElement(re, {
							href: Object(d.a)(b, _),
							redditStyle: !0
						}, G._("Sign Up", null, {
							hk: "rvpjy"
						})), o.a.createElement(J, {
							to: "/",
							redditStyle: !0
						}, G._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))), T && o.a.createElement(y.a, {
							subredditName: T
						}));
					case O.a.QuarantinedSubreddit:
						const l = q && q.hasVerifiedEmail;
						return o.a.createElement("div", null, o.a.createElement($, {
							src: `${r.a.assetPath}/img/content-gate-icons/quarantined_interstitial.svg`
						}), o.a.createElement(ae, null, G._("r/{subredditName} is quarantined", [G._param("subredditName", T)], {
							hk: "2pxhFx"
						})), o.a.createElement(H, null, o.a.createElement(se, null, x ? o.a.createElement(k.b, {
							content: x,
							rtJsonElementProps: {
								pageLayer: v
							}
						}) : f ? o.a.createElement(E.a, {
							html: f
						}) : S || G._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), !g || l ? G._("Are you sure you’d like to continue?", null, {
							hk: "1fQqm4"
						}) : q ? G._("If you’d still like to view this community, verify your email address to continue.", null, {
							hk: "2vhFbK"
						}) : G._("If you’d still like to view this community, verify your email address and log in to your Reddit account to continue.", null, {
							hk: "2SmlRy"
						})), o.a.createElement(N, null, ((e, t, n) => {
							const a = e && e.hasVerifiedEmail;
							return !n || a ? o.a.createElement(N, null, o.a.createElement(te, {
								to: "/",
								redditStyle: !0
							}, G._("Go Back", null, {
								hk: "11Lp6m"
							})), o.a.createElement(Y, {
								onClick: t,
								redditStyle: !0
							}, G._("Yes, Continue", null, {
								hk: "1D03m3"
							}))) : o.a.createElement(N, null, o.a.createElement(te, {
								to: "/",
								redditStyle: !0
							}, G._("Go Back", null, {
								hk: "11Lp6m"
							})), o.a.createElement(Y, {
								href: `${r.a.redditUrl}/prefs/update`,
								redditStyle: !0
							}, G._("Verify Email", null, {
								hk: "1893cq"
							})))
						})(q, s, g)), o.a.createElement(ie, null, G._("Learn more about {=quarantined communities}.", [G._param("=quarantined communities", o.a.createElement(Z, {
							href: "https://reddit.zendesk.com/hc/en-us/articles/360043069012-Quarantined-Subreddits"
						}, G._("quarantined communities", null, {
							hk: "3yq6Z5"
						})))], {
							hk: "uOTFJ"
						})));
					case O.a.GatedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(ae, null, G._("Are you sure you want to view this community?", null, {
							hk: "1K5UIm"
						})), o.a.createElement(H, null, o.a.createElement(se, null, R ? o.a.createElement(k.b, {
							content: R,
							rtJsonElementProps: {
								pageLayer: v
							}
						}) : L ? o.a.createElement(E.a, {
							html: L
						}) : w), G._("Are you certain you want to continue?", null, {
							hk: "3pT969"
						})), o.a.createElement(N, null, o.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, G._("No Thank You", null, {
							hk: "4B26AR"
						})), o.a.createElement(Y, {
							onClick: i,
							redditStyle: !0
						}, G._("Continue", null, {
							hk: "2rLyAk"
						}))));
					case O.a.SubredditBanned:
						return o.a.createElement("div", null, o.a.createElement($, {
							src: `${r.a.assetPath}/img/content-gate-icons/banned.png`
						}), o.a.createElement(ae, null, n), (e => o.a.createElement(H, null, e ? o.a.createElement(C, {
							linkClassName: M.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : G._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), o.a.createElement(N, null, o.a.createElement(J, {
							to: "/",
							redditStyle: !0
						}, G._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case O.a.SubredditBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement($, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ae, null, G._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), o.a.createElement(N, null, o.a.createElement(J, {
							to: "/",
							redditStyle: !0
						}, G._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case O.a.SubredditDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(ee, null), o.a.createElement(ae, null, G._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), o.a.createElement(H, null, G._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), o.a.createElement(N, null, q && o.a.createElement(X, {
							eventSource: "content_gate"
						}), o.a.createElement(Q, {
							to: "/",
							redditStyle: !0
						}, G._("Go Home", null, {
							hk: "49p4or"
						}))));
					case O.a.ProfileDoesNotExist:
					case O.a.ProfileDeleted:
					case O.a.ProfileSuspended:
					case O.a.ProfileBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement($, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ae, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case O.a.ProfileBlockedForLegalReason:
									return G._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case O.a.ProfileDeleted:
									return G._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case O.a.ProfileSuspended:
									return o.a.createElement(o.a.Fragment, null, G._("This account has been {=suspended} .", [G._param("=suspended", o.a.createElement(Z, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, G._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case O.a.ProfileDoesNotExist:
									return o.a.createElement(o.a.Fragment, null, o.a.createElement(ae, null, G._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), o.a.createElement(H, null, G._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), o.a.createElement(N, null, o.a.createElement(Q, {
							to: "/",
							redditStyle: !0
						}, G._("Go Home", null, {
							hk: "49p4or"
						}))));
					case O.a.CustomFeedDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement($, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ae, null, G._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), o.a.createElement(N, null, o.a.createElement(Q, {
							to: "/",
							redditStyle: !0
						}, G._("Go Home", null, {
							hk: "49p4or"
						}))));
					case O.a.PostBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement($, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ae, null, G._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), o.a.createElement(N, null, o.a.createElement(J, {
							to: "/",
							redditStyle: !0
						}, G._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = ce(ue(Object(i.i)(e => {
				const t = Object(a.useContext)(l.a) ? I : U;
				return o.a.createElement(t, null, o.a.createElement("div", {
					"data-testid": "content-gate"
				}, o.a.createElement(oe, null, de(e))), o.a.createElement(_.b, null))
			})))
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const a = Object(r.a)({
				resolved: {},
				chunkName: () => "ContributorRequestButton",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ContributorRequestButton").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"
				}
			});
			t.a = a
		},
		"./src/reddit/components/SubredditSearchCarousel/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/experiments/joinOptimizations.ts");
			const l = Object(r.a)({
					resolved: {},
					chunkName: () => "SubredditSearchCarousel",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("SubredditSearchCarousel").then(n.bind(null, "./src/reddit/components/SubredditSearchCarousel/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/SubredditSearchCarousel/index.tsx"
					}
				}),
				c = e => {
					const t = Object(s.e)(i.e),
						n = Object(s.e)(i.a);
					return t || n ? o.a.createElement(l, e) : null
				}
		},
		"./src/reddit/icons/svgs/PrivateKey/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/chat/controls/Svg/index.tsx");

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement(o.a, s({}, e, {
				viewBox: "-1 -1 21 21"
			}), a.a.createElement("path", {
				d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
			}))
		},
		"./src/reddit/selectors/contentGate.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/selectors/platform.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const s = e => {
				if (!Object(o.S)(e)) return !1;
				const t = Object(a.d)(e);
				if (!t) return !1;
				const n = Object(o.h)(e, t);
				if (!n) return !1;
				if (!n.privateSubreddit) return !1;
				const {
					isContributorRequestTimestamp: s
				} = n;
				if (!s) return !1;
				const i = 30 * r.D;
				return s > Date.now() - i
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ContentGate.c864b1b39fa57a0fccaa.js.map