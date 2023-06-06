// https://www.redditstatic.com/desktop2x/reddit-components-ContentGate.523aaf4974dfbb15686f.js
// Retrieved at 6/6/2023, 5:40:04 PM by Reddit Dataminer v1.0.0
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
				i = n("./src/lib/lessComponent.tsx"),
				s = n("./src/chat/controls/Svg/index.m.less"),
				l = n.n(s);
			t.a = i.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: n,
						active: r,
						hover: i
					} = e;
				return a.a.createElement("svg", {
					className: Object(o.a)(e.className, {
						[l.a.disable]: n,
						[l.a.active]: r,
						[l.a.hover]: !!i
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
				i = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/react-router/esm/react-router.js"),
				l = n("./src/reddit/contexts/NavbarExp.ts"),
				u = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/lessComponent.tsx"),
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
				j = n("./src/chat/controls/Svg/index.tsx");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var T = e => o.a.createElement(j.a, O({}, e, {
					viewBox: "-1 -1 21 21"
				}), o.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				q = n("./src/reddit/models/ContentGate.ts"),
				D = n("./src/lib/constants/index.ts"),
				F = n("./src/reddit/selectors/platform.ts"),
				M = n("./src/reddit/selectors/user.ts");
			var A = n("./src/reddit/selectors/meta.ts"),
				G = n("./src/reddit/components/ContentGate/index.m.less"),
				N = n.n(G);
			const {
				fbt: U
			} = n("./node_modules/fbt/lib/FbtPublic.js"), I = c.a.wrapped(T, "PrivateKey", N.a), H = c.a.div("ButtonsContainer", N.a), W = c.a.div("Container", N.a), z = c.a.div("ContainerExp", N.a), Z = c.a.div("Description", N.a), J = c.a.div("PrivateSubredditDetails", N.a), K = c.a.div("PrivateSubredditDescription", N.a), V = c.a.h3("PrivateSubredditName", N.a), Y = c.a.a("Link", N.a), Q = c.a.wrapped(P.n, "LinkRouterButton", N.a), X = c.a.wrapped(P.m, "LinkButton", N.a), $ = c.a.wrapped(P.p, "SecondaryLinkButton", N.a), ee = c.a.wrapped(Q, "GoHomeLinkButton", N.a), te = c.a.wrapped(b.a, "CreateCommunityButton", N.a), ne = c.a.img("Image", N.a), re = c.a.img("ImagePlaceholder", N.a), ae = c.a.wrapped(Q, "LeftLinkRouterButton", N.a), oe = c.a.wrapped(X, "LeftLinkButton", N.a), ie = c.a.wrapped($, "SecondaryLeftLinkButton", N.a), se = c.a.h3("Title", N.a), le = c.a.div("PageBody", N.a), ue = c.a.div("InterstitialMessageWrapper", N.a), ce = c.a.div("QuarantineLearnMore", N.a), de = Object(u.c)({
				isLoggedIn: M.R,
				origin: A.l,
				user: M.m,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(M.S)(e)) return !1;
					const t = Object(F.d)(e);
					if (!t) return !1;
					const n = Object(M.h)(e, t);
					if (!n) return !1;
					if (!n.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: r
					} = n;
					if (!r) return !1;
					const a = 30 * D.D;
					return r > Date.now() - a
				})(e),
				isSeo: A.h
			}), me = Object(R.v)(), he = Object(i.b)(de, (e, t) => {
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
			}), pe = e => {
				const {
					banMessage: t,
					banTitle: n,
					contentGateType: a,
					continueToQuarantinedSubreddit: i,
					continueToGatedSubreddit: s,
					isLoggedIn: l,
					isContributorRequestsDisabled: u,
					isPrivateSubredditContributorRequestPending: c,
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
					subredditName: O,
					user: T
				} = e, D = async () => {
					if (l ? await P() : await Object(m.q)(), h) {
						const e = new URL(window.location.href);
						e.searchParams.set(B.k, "1"), window.location.href = e.href
					} else window.location.reload()
				};
				switch (a) {
					case q.a.GoldSubreddit:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${r.a.assetPath}/img/gold/premium-crest.png`
						}), o.a.createElement(se, null, U._("r/{community name} is a Reddit Premium community", [U._param("community name", O)], {
							hk: "2lyDwB"
						})), o.a.createElement(Z, null, U._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), o.a.createElement(H, null, T ? o.a.createElement(ie, {
							href: `${r.a.redditUrl}/premium`,
							redditStyle: !0
						}, U._("Get Premium", null, {
							hk: "3ChWi4"
						})) : o.a.createElement(oe, {
							href: Object(d.a)(b, _),
							redditStyle: !0
						}, U._("Sign Up", null, {
							hk: "rvpjy"
						})), T ? o.a.createElement(Q, {
							to: "/",
							redditStyle: !0
						}, U._("Go Home", null, {
							hk: "49p4or"
						})) : o.a.createElement($, {
							href: Object(d.a)(b, _),
							redditStyle: !0
						}, U._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case q.a.Nsfw:
					case q.a.NsfwCustomFeed:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${r.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), o.a.createElement(se, null, a === q.a.Nsfw ? U._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : U._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), o.a.createElement(Z, null, U._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), o.a.createElement(H, null, o.a.createElement(ae, {
							to: "/",
							redditStyle: !0
						}, U._("No", null, {
							hk: "3fMglW"
						})), o.a.createElement($, {
							onClick: D,
							redditStyle: !0
						}, U._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case q.a.PrivateSubreddit:
						return o.a.createElement("div", null, o.a.createElement(I, null), o.a.createElement(se, null, "r/", O, " ", U._("is a private community", null, {
							hk: "7zZmq"
						})), j && j.length && o.a.createElement(J, null, o.a.createElement(V, null, "r/", O), o.a.createElement(K, null, o.a.createElement("div", null, j))), o.a.createElement(Z, null, U._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", O, " ", U._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), o.a.createElement("br", null), U._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), o.a.createElement(H, null, T ? o.a.createElement(o.a.Fragment, null, !u && o.a.createElement(p.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: N.a.ContributorRequestButton,
							isContributorRequestPending: c
						}), o.a.createElement(ie, {
							href: `${r.a.redditUrl}/message/compose?to=/r/${O}`,
							redditStyle: !0
						}, U._("Message Mods", null, {
							hk: "vVe1i"
						}))) : o.a.createElement(ie, {
							href: Object(d.a)(b, _),
							redditStyle: !0
						}, U._("Sign Up", null, {
							hk: "rvpjy"
						})), o.a.createElement(Q, {
							to: "/",
							redditStyle: !0
						}, U._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))), O && o.a.createElement(y.a, {
							subredditName: O
						}));
					case q.a.QuarantinedSubreddit:
						const l = T && T.hasVerifiedEmail;
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${r.a.assetPath}/img/content-gate-icons/quarantined_interstitial.svg`
						}), o.a.createElement(se, null, U._("r/{subredditName} is quarantined", [U._param("subredditName", O)], {
							hk: "2pxhFx"
						})), o.a.createElement(Z, null, o.a.createElement(ue, null, x ? o.a.createElement(k.b, {
							content: x,
							rtJsonElementProps: {
								pageLayer: v
							}
						}) : f ? o.a.createElement(E.a, {
							html: f
						}) : S || U._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), !g || l ? U._("Are you sure you’d like to continue?", null, {
							hk: "1fQqm4"
						}) : T ? U._("If you’d still like to view this community, verify your email address to continue.", null, {
							hk: "2vhFbK"
						}) : U._("If you’d still like to view this community, verify your email address and log in to your Reddit account to continue.", null, {
							hk: "2SmlRy"
						})), o.a.createElement(H, null, ((e, t, n) => {
							const a = e && e.hasVerifiedEmail;
							return !n || a ? o.a.createElement(H, null, o.a.createElement(ae, {
								to: "/",
								redditStyle: !0
							}, U._("Go Back", null, {
								hk: "11Lp6m"
							})), o.a.createElement($, {
								onClick: t,
								redditStyle: !0
							}, U._("Yes, Continue", null, {
								hk: "1D03m3"
							}))) : o.a.createElement(H, null, o.a.createElement(ae, {
								to: "/",
								redditStyle: !0
							}, U._("Go Back", null, {
								hk: "11Lp6m"
							})), o.a.createElement($, {
								href: `${r.a.redditUrl}/prefs/update`,
								redditStyle: !0
							}, U._("Verify Email", null, {
								hk: "1893cq"
							})))
						})(T, i, g)), o.a.createElement(ce, null, U._("Learn more about {=quarantined communities}.", [U._param("=quarantined communities", o.a.createElement(Y, {
							href: "https://reddit.zendesk.com/hc/en-us/articles/360043069012-Quarantined-Subreddits"
						}, U._("quarantined communities", null, {
							hk: "3yq6Z5"
						})))], {
							hk: "uOTFJ"
						})));
					case q.a.GatedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(se, null, U._("Are you sure you want to view this community?", null, {
							hk: "1K5UIm"
						})), o.a.createElement(Z, null, o.a.createElement(ue, null, R ? o.a.createElement(k.b, {
							content: R,
							rtJsonElementProps: {
								pageLayer: v
							}
						}) : L ? o.a.createElement(E.a, {
							html: L
						}) : w), U._("Are you certain you want to continue?", null, {
							hk: "3pT969"
						})), o.a.createElement(H, null, o.a.createElement(ae, {
							to: "/",
							redditStyle: !0
						}, U._("No Thank You", null, {
							hk: "4B26AR"
						})), o.a.createElement($, {
							onClick: s,
							redditStyle: !0
						}, U._("Continue", null, {
							hk: "2rLyAk"
						}))));
					case q.a.SubredditBanned:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${r.a.assetPath}/img/content-gate-icons/banned.png`
						}), o.a.createElement(se, null, n), (e => o.a.createElement(Z, null, e ? o.a.createElement(C, {
							linkClassName: N.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : U._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), o.a.createElement(H, null, o.a.createElement(Q, {
							to: "/",
							redditStyle: !0
						}, U._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case q.a.SubredditBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(se, null, U._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), o.a.createElement(H, null, o.a.createElement(Q, {
							to: "/",
							redditStyle: !0
						}, U._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case q.a.SubredditDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(re, null), o.a.createElement(se, null, U._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), o.a.createElement(Z, null, U._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), o.a.createElement(H, null, T && o.a.createElement(te, {
							eventSource: "content_gate"
						}), o.a.createElement(ee, {
							to: "/",
							redditStyle: !0
						}, U._("Go Home", null, {
							hk: "49p4or"
						}))));
					case q.a.ProfileDoesNotExist:
					case q.a.ProfileDeleted:
					case q.a.ProfileSuspended:
					case q.a.ProfileBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(se, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case q.a.ProfileBlockedForLegalReason:
									return U._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case q.a.ProfileDeleted:
									return U._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case q.a.ProfileSuspended:
									return o.a.createElement(o.a.Fragment, null, U._("This account has been {=suspended} .", [U._param("=suspended", o.a.createElement(Y, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, U._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case q.a.ProfileDoesNotExist:
									return o.a.createElement(o.a.Fragment, null, o.a.createElement(se, null, U._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), o.a.createElement(Z, null, U._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), o.a.createElement(H, null, o.a.createElement(ee, {
							to: "/",
							redditStyle: !0
						}, U._("Go Home", null, {
							hk: "49p4or"
						}))));
					case q.a.CustomFeedDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(se, null, U._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), o.a.createElement(H, null, o.a.createElement(ee, {
							to: "/",
							redditStyle: !0
						}, U._("Go Home", null, {
							hk: "49p4or"
						}))));
					case q.a.PostBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(se, null, U._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), o.a.createElement(H, null, o.a.createElement(Q, {
							to: "/",
							redditStyle: !0
						}, U._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = me(he(Object(s.i)(e => {
				const t = Object(a.useContext)(l.a) ? z : W;
				return o.a.createElement(t, null, o.a.createElement("div", {
					"data-testid": "content-gate"
				}, o.a.createElement(le, null, pe(e))), o.a.createElement(_.b, null))
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
				return u
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				i = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/selectors/experiments/joinOptimizations.ts");
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
				u = e => {
					const t = Object(i.e)(s.e),
						n = Object(i.e)(s.a);
					return t || n ? o.a.createElement(l, e) : null
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ContentGate.523aaf4974dfbb15686f.js.map