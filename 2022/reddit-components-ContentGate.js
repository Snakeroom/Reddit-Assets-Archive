// https://www.redditstatic.com/desktop2x/reddit-components-ContentGate.09075c80eb352a61d034.js
// Retrieved at 1/25/2022, 1:40:03 PM by Reddit Dataminer v1.0.0
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
				SecondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				secondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
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
				SecondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				secondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				Title: "_2XKLlvmuqdor3RvVbYZfgz",
				title: "_2XKLlvmuqdor3RvVbYZfgz",
				PageBody: "bDDEX4BSkswHAG_45VkFB",
				pageBody: "bDDEX4BSkswHAG_45VkFB",
				InterstitialMessageWrapper: "_2xiFx6Zsb5W98_T1DOroT_",
				interstitialMessageWrapper: "_2xiFx6Zsb5W98_T1DOroT_",
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
				_ = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				b = n("./src/reddit/components/Footer/index.tsx"),
				E = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				y = n("./src/reddit/components/RichTextJson/index.tsx"),
				k = n("./src/reddit/components/SubredditSearchCarousel/async.tsx"),
				g = n("./node_modules/lodash/flatMap.js"),
				v = n.n(g),
				S = n("./src/lib/linkMatchers/index.ts"),
				f = n("./src/lib/linkMatchers/customLinks.ts"),
				x = n("./src/reddit/controls/OutboundLink/index.tsx");
			const w = /\[(.+?)\]\((.+?)\)/g,
				B = e => {
					const t = e.split(w);
					if (1 === t.length) return [e];
					const n = [];
					for (let r = 0; r < t.length; r += 3) {
						const [e, a, o] = t.slice(r, r + 3);
						n.push(e), n.push([o, a])
					}
					return n
				};
			var L = o.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = v()(t, B)), e.parseRegularLinks && (t = v()(t, e => Array.isArray(e) ? [e] : (e => {
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
				C = n("./src/reddit/constants/parameters.ts"),
				R = n("./src/reddit/contexts/PageLayer/index.tsx"),
				j = n("./src/reddit/controls/Button/index.tsx"),
				P = n("./src/chat/controls/Svg/index.tsx");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var T = e => o.a.createElement(P.a, O({}, e, {
					viewBox: "-1 -1 21 21"
				}), o.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				q = n("./src/reddit/models/ContentGate.ts"),
				D = n("./src/lib/constants/index.ts"),
				M = n("./src/reddit/selectors/platform.ts"),
				F = n("./src/reddit/selectors/user.ts");
			var A = n("./src/reddit/selectors/meta.ts"),
				N = n("./src/reddit/components/ContentGate/index.m.less"),
				G = n.n(N);
			const {
				fbt: U
			} = n("./node_modules/fbt/lib/FbtPublic.js"), W = u.a.wrapped(T, "PrivateKey", G.a), H = u.a.div("ButtonsContainer", G.a), I = u.a.div("Container", G.a), z = u.a.div("ContainerExp", G.a), K = u.a.div("Description", G.a), Z = u.a.div("PrivateSubredditDetails", G.a), J = u.a.div("PrivateSubredditDescription", G.a), V = u.a.h3("PrivateSubredditName", G.a), Y = u.a.a("Link", G.a), X = u.a.wrapped(j.n, "LinkRouterButton", G.a), Q = u.a.wrapped(j.m, "LinkButton", G.a), $ = u.a.wrapped(j.q, "SecondaryLinkRouterButton", G.a), ee = u.a.wrapped(j.p, "SecondaryLinkButton", G.a), te = u.a.wrapped(X, "GoHomeLinkButton", G.a), ne = u.a.wrapped(_.a, "CreateCommunityButton", G.a), re = u.a.img("Image", G.a), ae = u.a.img("ImagePlaceholder", G.a), oe = u.a.wrapped(X, "LeftLinkRouterButton", G.a), se = u.a.wrapped(Q, "LeftLinkButton", G.a), ie = u.a.wrapped(ee, "SecondaryLeftLinkButton", G.a), le = u.a.wrapped($, "SecondaryLeftLinkRouterButton", G.a), ce = u.a.h3("Title", G.a), ue = u.a.div("PageBody", G.a), de = u.a.div("InterstitialMessageWrapper", G.a), me = Object(c.c)({
				isLoggedIn: F.I,
				origin: A.j,
				user: F.k,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(F.J)(e)) return !1;
					const t = Object(M.d)(e);
					if (!t) return !1;
					const n = Object(F.f)(e, t);
					if (!n) return !1;
					if (!n.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: r
					} = n;
					if (!r) return !1;
					const a = 30 * D.B;
					return r > Date.now() - a
				})(e),
				isSeo: A.g
			}), he = Object(R.u)(), pe = Object(s.b)(me, (e, {
				subredditName: t
			}) => ({
				continueToQuarantinedSubreddit: async () => {
					await e(h.D(t)), window.location.reload()
				},
				continueToGatedSubreddit: async () => {
					await e(h.v(t)), window.location.reload()
				},
				setNSFWPreference: async () => {
					await e(Object(m.m)())
				}
			})), _e = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: a,
					continueToGatedSubreddit: s,
					isLoggedIn: i,
					isContributorRequestsDisabled: l,
					isPrivateSubredditContributorRequestPending: c,
					isSeo: u,
					location: h,
					origin: _,
					pageLayer: b,
					quarantineRequiresEmail: g,
					quarantineMessage: v,
					quarantineMessageHtml: S,
					quarantineMessageRTJson: f,
					interstitialWarningMessage: x,
					interstitialWarningMessageHtml: w,
					interstitialWarningMessageRTJson: B,
					setNSFWPreference: R,
					subredditDescription: j,
					subredditName: P,
					user: O
				} = e, T = async () => {
					if (i ? await R() : await Object(m.l)(), u) {
						const e = new URL(window.location.href);
						e.searchParams.set(C.h, "1"), window.location.href = e.href
					} else window.location.reload()
				};
				switch (n) {
					case q.a.GoldSubreddit:
						return o.a.createElement("div", null, o.a.createElement(re, {
							src: `${r.a.assetPath}/img/gold/premium-crest.png`
						}), o.a.createElement(ce, null, U._("r/{community name} is a Reddit Premium community", [U._param("community name", P)], {
							hk: "2lyDwB"
						})), o.a.createElement(K, null, U._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), o.a.createElement(H, null, O ? o.a.createElement(ie, {
							href: `${r.a.redditUrl}/premium`,
							redditStyle: !0
						}, U._("Get Premium", null, {
							hk: "3ChWi4"
						})) : o.a.createElement(se, {
							href: Object(d.a)(h, _),
							redditStyle: !0
						}, U._("Sign Up", null, {
							hk: "rvpjy"
						})), O ? o.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, U._("Go Home", null, {
							hk: "49p4or"
						})) : o.a.createElement(ee, {
							href: Object(d.a)(h, _),
							redditStyle: !0
						}, U._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case q.a.Nsfw:
					case q.a.NsfwCustomFeed:
						return o.a.createElement("div", null, o.a.createElement(re, {
							src: `${r.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), o.a.createElement(ce, null, n === q.a.Nsfw ? U._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : U._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), o.a.createElement(K, null, U._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), o.a.createElement(H, null, o.a.createElement(oe, {
							to: "/",
							redditStyle: !0
						}, U._("No", null, {
							hk: "3fMglW"
						})), o.a.createElement(ee, {
							onClick: T,
							redditStyle: !0
						}, U._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case q.a.PrivateSubreddit:
						return o.a.createElement("div", null, o.a.createElement(W, null), o.a.createElement(ce, null, "r/", P, " ", U._("is a private community", null, {
							hk: "7zZmq"
						})), j && j.length && o.a.createElement(Z, null, o.a.createElement(V, null, "r/", P), o.a.createElement(J, null, o.a.createElement("div", null, j))), o.a.createElement(K, null, U._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", P, " ", U._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), o.a.createElement("br", null), U._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), o.a.createElement(H, null, O ? o.a.createElement(o.a.Fragment, null, !l && o.a.createElement(p.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: G.a.ContributorRequestButton,
							isContributorRequestPending: c
						}), o.a.createElement(ie, {
							href: `${r.a.redditUrl}/message/compose?to=/r/${P}`,
							redditStyle: !0
						}, U._("Message Mods", null, {
							hk: "vVe1i"
						}))) : o.a.createElement(ie, {
							href: Object(d.a)(h, _),
							redditStyle: !0
						}, U._("Sign Up", null, {
							hk: "rvpjy"
						})), o.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, U._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))), P && o.a.createElement(k.a, {
							subredditName: P
						}));
					case q.a.QuarantinedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(re, {
							src: `${r.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), o.a.createElement(ce, null, U._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), o.a.createElement(K, null, U._("This community is {=quarantined}", [U._param("=quarantined", o.a.createElement(Y, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, U._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), o.a.createElement(de, null, f ? o.a.createElement(y.a, {
							content: f,
							rtJsonElementProps: {
								pageLayer: b
							}
						}) : S ? o.a.createElement(E.a, {
							html: S
						}) : v || U._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), U._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), o.a.createElement(H, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? o.a.createElement(H, null, o.a.createElement(le, {
								to: "/",
								redditStyle: !0
							}, U._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(Q, {
								href: `${r.a.redditUrl}/prefs/update`,
								redditStyle: !0
							}, U._("Verify Email", null, {
								hk: "1893cq"
							}))) : o.a.createElement(H, null, o.a.createElement(oe, {
								to: "/",
								redditStyle: !0
							}, U._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(ee, {
								onClick: t,
								redditStyle: !0
							}, U._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(O, a, g)));
					case q.a.GatedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(ce, null, U._("Are you sure you want to view this community?", null, {
							hk: "1K5UIm"
						})), o.a.createElement(K, null, o.a.createElement(de, null, B ? o.a.createElement(y.a, {
							content: B,
							rtJsonElementProps: {
								pageLayer: b
							}
						}) : w ? o.a.createElement(E.a, {
							html: w
						}) : x), U._("Are you certain you want to continue?", null, {
							hk: "3pT969"
						})), o.a.createElement(H, null, o.a.createElement(oe, {
							to: "/",
							redditStyle: !0
						}, U._("No Thank You", null, {
							hk: "4B26AR"
						})), o.a.createElement(ee, {
							onClick: s,
							redditStyle: !0
						}, U._("Continue", null, {
							hk: "2rLyAk"
						}))));
					case q.a.SubredditBanned:
						return o.a.createElement("div", null, o.a.createElement(re, {
							src: `${r.a.assetPath}/img/content-gate-icons/banned.png`
						}), o.a.createElement(ce, null, U._("r/{community name} has been banned from Reddit", [U._param("community name", P)], {
							hk: "2at9Se"
						})), (e => o.a.createElement(K, null, e ? o.a.createElement(L, {
							linkClassName: G.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : U._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), o.a.createElement(H, null, o.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, U._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case q.a.SubredditBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(re, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ce, null, U._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), o.a.createElement(H, null, o.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, U._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case q.a.SubredditDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(ae, null), o.a.createElement(ce, null, U._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), o.a.createElement(K, null, U._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), o.a.createElement(H, null, O && o.a.createElement(ne, {
							eventSource: "content_gate"
						}), o.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, U._("Go Home", null, {
							hk: "49p4or"
						}))));
					case q.a.ProfileDoesNotExist:
					case q.a.ProfileDeleted:
					case q.a.ProfileSuspended:
					case q.a.ProfileBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(re, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ce, null, (e => {
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
									return o.a.createElement(o.a.Fragment, null, o.a.createElement(ce, null, U._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), o.a.createElement(K, null, U._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), o.a.createElement(H, null, o.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, U._("Go Home", null, {
							hk: "49p4or"
						}))));
					case q.a.CustomFeedDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(re, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ce, null, U._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), o.a.createElement(H, null, o.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, U._("Go Home", null, {
							hk: "49p4or"
						}))));
					case q.a.PostBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(re, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ce, null, U._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), o.a.createElement(H, null, o.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, U._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = he(pe(Object(i.i)(e => {
				const t = Object(a.useContext)(l.a) ? z : I;
				return o.a.createElement(t, null, o.a.createElement("div", {
					"data-testid": "content-gate"
				}, o.a.createElement(ue, null, _e(e))), o.a.createElement(b.a, null))
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ContentGate.09075c80eb352a61d034.js.map